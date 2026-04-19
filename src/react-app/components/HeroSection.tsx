import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import heroImg from "@/photos/hero-img.png";

const PHONE_NUMBER = "+91 8431752365";

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
//  Smooth scroll to hash anchor helper
// ─────────────────────────────────────────────────────────────
function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Offset for fixed navbar (72px height + some padding)
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);
}

// ─────────────────────────────────────────────────────────────
//  HeroSection – Complete Navbar + Hero (Edtech-inspired)
// ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Enable smooth scroll for hash navigation
  useHashScroll();

  // Track scroll position for mobile navbar transformation (only on mobile <768px)
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      setIsScrolled(isMobile && window.scrollY > 20);
    };

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Our Story", href: "/our-story" },
    { label: "About us", href: "#about", isHash: true },
    { label: "Contact us", href: "#contact", isHash: true },
  ];

  // Helper to get proper nav URL (handles hash links on current page vs different page)
  const getNavUrl = (link: { href: string; isHash?: boolean }) => {
    if (link.isHash) {
      // If we're on home page, use hash directly; otherwise go to home with hash
      return location.pathname === "/" ? link.href : `/${link.href}`;
    }
    return link.href;
  };

  // Handle hash link click for same-page smooth scroll
  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (location.pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL without full page reload
        window.history.pushState(null, "", href);
      }
    }
  };

  // Scroll to top when clicking Home while already on home page
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Clear any hash from URL
      if (window.location.hash) {
        window.history.pushState(null, "", "/");
      }
    }
  };

  return (
    <div className="hero-section-root" style={{ background: "#faf5ef" }}>
      {/* ════════════ NAVBAR ════════════ */}
      {/* Navbar Container - iOS-style floating pill animation */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: isScrolled ? "12px 12px 0" : "0",
          transition: "padding 0.15s ease-out",
        }}
      >
        <nav
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: isScrolled ? "16px" : "0px",
            boxShadow: isScrolled
              ? "0 4px 20px rgba(0, 0, 0, 0.1)"
              : "none",
            borderBottom: isScrolled ? "none" : "1px solid rgba(243, 244, 246, 0.8)",
            transition: "all 0.15s ease-out",
            willChange: "border-radius, box-shadow",
          }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center flex-shrink-0"
            >
              <span
                className="text-2xl md:text-4xl font-black tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg, #f14625, #ff8c42)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
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
                  to={getNavUrl(link)}
                  onClick={(e) => {
                    if (link.href === "/") {
                      handleHomeClick(e);
                    } else if (link.isHash) {
                      handleHashClick(e, link.href);
                    }
                  }}
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

      </nav>
      </div>

      {/* Mobile Full-Screen Menu Overlay - Outside nav to avoid z-index issues */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Full Screen Menu Panel - Premium slide-in from right */}
          <div
            className="md:hidden fixed inset-y-0 right-0 w-full sm:w-[380px] z-[70] flex flex-col animate-slide-in-right"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
            }}
          >
            {/* Header with close button */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 border-b flex-shrink-0"
              style={{ borderColor: "#f3f4f6", backgroundColor: "#ffffff" }}
            >
              <span
                className="text-2xl font-black tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg, #f14625, #ff8c42)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Slonix
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
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
              </button>
            </div>

            {/* Centered Navigation Content */}
            <div
              className="flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto"
              style={{ backgroundColor: "#ffffff" }}
            >
              <nav className="flex flex-col items-start gap-1 w-full">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    to={getNavUrl(link)}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (link.href === "/") {
                        setTimeout(() => handleHomeClick(e), 150);
                      } else if (link.isHash) {
                        setTimeout(() => handleHashClick(e, link.href), 150);
                      }
                    }}
                    className="w-full px-2 py-4 text-2xl sm:text-3xl font-bold text-gray-900 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 animate-slide-in-item"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      animationDelay: `${0.1 + index * 0.08}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-red-500"
                        style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                      />
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link
                to={location.pathname === "/" ? "#contact" : "/#contact"}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  setTimeout(() => handleHashClick(e, "#contact"), 150);
                }}
                className="w-full mt-8 px-8 py-4 rounded-xl text-white text-center text-lg font-semibold hover:bg-red-600 hover:shadow-xl transition-all duration-300 animate-slide-in-item"
                style={{
                  backgroundColor: "#111827",
                  animationDelay: `${0.1 + navLinks.length * 0.08}s`,
                  animationFillMode: "both",
                }}
              >
                Let's Get Started
                <svg
                  className="w-5 h-5 inline-block ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Footer Info - Horizontal layout with Email us | Call us */}
            <div
              className="px-6 py-5 border-t flex-shrink-0 animate-fade-in"
              style={{ borderColor: "#f3f4f6", backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center justify-center gap-4">
                {/* Email us - Left side */}
                <a
                  href="mailto:slonixbim.team@gmail.com"
                  className="text-sm font-medium hover:text-red-600 transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Email us
                </a>

                {/* Center divider line */}
                <div
                  className="w-px h-6"
                  style={{ backgroundColor: "#e5e7eb" }}
                />

                {/* Call us - Right side */}
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-sm font-medium hover:text-red-600 transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ════════════ HERO ════════════ */}
      <section
        className="pt-20 md:pt-24 pb-10 sm:pb-16 md:pb-20 overflow-hidden relative"
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
