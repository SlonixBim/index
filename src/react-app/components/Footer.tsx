import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const logoUrl =
  "https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png";

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src={logoUrl}
                alt="Slonix Solutions"
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of engineers with industry-ready
              skills, hands-on projects, and career support.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/slonix_solutions"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/slonix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                <a href="mailto:slonixbim.team@gmail.com" className="hover:text-white transition-colors">
                  slonixbim.team@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                <a href="tel:+919080211696" className="hover:text-white transition-colors">
                  +91 90802 11696
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                <a
                  href="https://maps.google.com/?q=Hustlehub+Tech+Park,+Somasundarapalya+Main+Rd,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Hustlehub Tech Park, Somasundarapalya Main Rd, HSR Layout,
                  Bengaluru, Karnataka 560102
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Slonix Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 text-xs hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-500 text-xs hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/#contact" className="text-gray-500 text-xs hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
