import { Hono } from "hono";
import contact from "../api/contact";
import enroll from "../api/enroll";

interface Env {
  RESEND_API_KEY: string;
  GOOGLE_SHEET_ID: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;
  ASSETS?: { fetch: (req: Request) => Promise<Response> };
}

const app = new Hono<{ Bindings: Env }>();

app.route("/api/contact", contact);
app.route("/api/enroll", enroll);

// Handle SPA routing on Cloudflare Workers
app.notFound(async (c) => {
  if (c.req.method === "GET" && !c.req.url.includes("/api/")) {
    const env = c.env as Env;
    if (env.ASSETS) {
      const url = new URL(c.req.url);
      url.pathname = "/";
      return env.ASSETS.fetch(new Request(url, c.req.raw));
    }
  }
  return c.text("Not Found", 404);
});

export default app;
