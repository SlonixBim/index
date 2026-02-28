import { useState } from "react";
import { Link } from "react-router";
import heroImg from "@/photos/hero-img.png";

// ─────────────────────────────────────────────────────────────
//  FourPointStar – Decorative sparkle SVG used around the hero
// ─────────────────────────────────────────────────────────────
function FourPointStar({
  size = 28,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0 L14.59 9.41 L24 12 L14.59 14.59 L12 24 L9.41 14.59 L0 12 L9.41 9.41 Z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  ReviewBadge – Floating "99.24%" review badge card
// ─────────────────────────────────────────────────────────────
function ReviewBadge({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`hero-review-badge flex items-center gap-2.5 bg-[#fef9e7] rounded-xl px-3.5 py-2.5 shadow-lg ${className}`}
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      {/* Star icon */}
      <div className="w-7 h-7 rounded-full bg-[#f8c8d4] flex items-center justify-center flex-shrink-0">
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="#f59e0b"
          aria-hidden="true"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      </div>
      <div className="leading-tight">
        <p
          className="text-sm font-extrabold text-gray-900"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          99.24%
        </p>
        <p className="text-[10px] text-gray-500 leading-snug">
          1800+ Review with
          <br />
          5star rating
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  HeroSection – Complete Navbar + Hero (Edtech-inspired)
// ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Our Story", href: "/our-story" },
    { label: "About us", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <div className="hero-section-root" style={{ background: "#faf5ef" }}>
      {/* ════════════ NAVBAR ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <span
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg, #f14625, #ff8c42)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Slonix
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href.startsWith("#") ? "/" : link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile burger */}
            <div className="flex items-center gap-3">
              <Link
                to="/courses"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
              >
                Let's Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((p) => !p)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href.startsWith("#") ? "/" : link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold text-center hover:bg-gray-800 transition-all"
            >
              Let's Get Started
            </a>
          </div>
        )}
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section
        className="pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden relative"
        style={{ background: "#faf5ef" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[calc(100vh-8rem)]">
            {/* ─── Left: Text Content ─── */}
            <div className="order-2 lg:order-1 pt-6 sm:pt-10 lg:pt-0">
              {/* Heading */}
              <h1
                className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-black text-gray-900 leading-[1.1] mb-4 sm:mb-6 text-center lg:text-left"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Learning skills
                <br />
                for a better{" "}
                <span className="relative inline-block">
                  <span
                    style={{
                      background: "linear-gradient(135deg, #f14625, #ff8c42)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    career
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="animate-draw-underline delay-700"
                      d="M0 6 Q50 1 100 5 Q150 9 200 4"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              {/* Description */}
              <p
                className="animate-fade-in-up delay-200 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We believe the world is more beautiful as each person gets more
                skills and knows how to implement.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-300 flex flex-row items-center gap-3 mb-5 sm:mb-6 justify-center lg:justify-start">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                >
                  Let's Start
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-gray-900 text-gray-900 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all duration-200 whitespace-nowrap"
                >
                  Contact Us
                </a>
              </div>

              {/* Star rating text */}
              <div className="animate-fade-in-up delay-400 flex items-center gap-2 justify-center lg:justify-start">
                <svg
                  className="w-3.5 h-3.5 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  1800+ Review with 5star rating
                </span>
              </div>
            </div>

            {/* ─── Right: Image + Decorations ─── */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] md:w-[380px] md:h-[470px] lg:w-[420px] lg:h-[520px] xl:w-[460px] xl:h-[560px]">
                {/* Outer pill shape — dark outline */}
                <div
                  className="animate-scale-in absolute inset-0 rounded-[40%_40%_42%_42%/34%_34%_36%_36%] border-[3px] border-gray-900 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #f8c8d4 0%, #f5b8c8 100%)",
                  }}
                >
                  {/* Yellow inner border accent */}
                  <div
                    className="absolute inset-[3px] rounded-[40%_40%_42%_42%/34%_34%_36%_36%] border-[4px]"
                    style={{ borderColor: "#ffd700" }}
                  />

                  {/* Hero image */}
                  <img
                    src={heroImg}
                    alt="Student learning at Slonix Solutions"
                    className="absolute inset-0 w-full h-full object-cover object-top select-none"
                    loading="eager"
                  />
                </div>

                {/* ── Decorative sparkle stars ── */}
                {/* Top-right large star */}
                <FourPointStar
                  size={38}
                  className="hero-sparkle-star absolute text-gray-900"
                  style={{
                    top: "-4%",
                    right: "-8%",
                    animationDelay: "0s",
                  }}
                />
                {/* Small star near top-right */}
                <FourPointStar
                  size={14}
                  className="hero-sparkle-star absolute text-gray-900"
                  style={{
                    top: "2%",
                    right: "-16%",
                    animationDelay: "0.5s",
                  }}
                />
                {/* Bottom-left star */}
                <FourPointStar
                  size={30}
                  className="hero-sparkle-star absolute text-gray-900"
                  style={{
                    bottom: "8%",
                    left: "-10%",
                    animationDelay: "1s",
                  }}
                />
                {/* Small bottom-left star */}
                <FourPointStar
                  size={12}
                  className="hero-sparkle-star absolute text-gray-900"
                  style={{
                    bottom: "14%",
                    left: "-16%",
                    animationDelay: "1.5s",
                  }}
                />

                {/* ── Review badges ── */}
                {/* Top-right badge */}
                <ReviewBadge
                  className="absolute animate-fade-in-right hidden sm:flex"
                  style={{
                    top: "18%",
                    right: "-14%",
                    animationDelay: "0.6s",
                  }}
                />
                {/* Bottom-left badge */}
                <ReviewBadge
                  className="absolute animate-fade-in-left hidden sm:flex"
                  style={{
                    bottom: "22%",
                    left: "-12%",
                    animationDelay: "0.9s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
