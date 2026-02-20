import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export function useSEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    // Canonical
    if (canonical) {
      let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (can) can.href = canonical;
    }

    // OG title + description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    if (canonical) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", canonical);
    }

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // JSON-LD page schema
    if (schema) {
      const existing = document.getElementById("page-schema");
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = "page-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const pageSchema = document.getElementById("page-schema");
      if (pageSchema) pageSchema.remove();
    };
  }, [title, description, canonical, schema]);
}
