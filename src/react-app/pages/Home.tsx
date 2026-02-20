import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useSEO } from "@/react-app/hooks/useSEO";
import {
  ArrowRight,
  BookOpen,
  Users,
  TrendingUp,
  Zap,
  Wrench,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { courses } from "@/data/courses";
import heroRightImg from "@/photos/hero-right.png";
import powerImg from "@/photos/power.jpg";

const testimonials = [
  {
    text: "Slonix completely transformed how I approach engineering problems. The hands-on projects gave me real-world confidence I couldn't find anywhere else.",
    name: "Arjun Mehta",
    role: "Embedded Systems Engineer",
    date: "2 days ago",
    initials: "AM",
    accent: "#f14625",
  },
  {
    text: "The instructors here are genuinely invested in your success. I landed my first job within 3 weeks of completing the embedded systems course.",
    name: "Priya Nair",
    role: "IoT Developer",
    date: "5 days ago",
    initials: "PN",
    accent: "#14b8a6",
  },
  {
    text: "Best decision I made for my career. The curriculum is industry-relevant and the placement support is exceptional. Highly recommend Slonix!",
    name: "Karthik Rajan",
    role: "Electronics Engineer",
    date: "1 week ago",
    initials: "KR",
    accent: "#8b5cf6",
  },
  {
    text: "I was skeptical at first, but the quality of training blew me away. The 1-on-1 mentoring sessions alone are worth every rupee spent.",
    name: "Divya Sharma",
    role: "VLSI Design Intern",
    date: "2 weeks ago",
    initials: "DS",
    accent: "#f59e0b",
  },
  {
    text: "From zero coding knowledge to building my own IoT project — Slonix made it possible in just 3 months. Incredible teaching methodology.",
    name: "Rohit Patel",
    role: "Final Year B.E. Student",
    date: "3 weeks ago",
    initials: "RP",
    accent: "#3b82f6",
  },
];

function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mobileActive, setMobileActive] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Mobile: show one card at a time, cycle every 5s with fade
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setMobileActive((prev) => (prev + 1) % testimonials.length);
        setFadeIn(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: dir === "next" ? 360 : -360,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fafafa 0%, #f3f4f6 50%, #eff6ff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fecaca, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #bfdbfe, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-3">
            Student Voices
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Reviews from{" "}
            <span className="relative inline-block">
              <span className="relative z-10">real people</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-red-100 rounded-full -z-0" />
            </span>
          </h2>
          {/* Rating row */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2.5 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="#00b67a"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">4.9 / 5</span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="text-xs font-semibold text-gray-500">
              Based on <strong className="text-gray-800">3,987</strong> reviews
            </span>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="block lg:hidden">
          {/* Single card — swapped via React state, no scroll */}
          <div
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {(() => {
              const t = testimonials[mobileActive];
              return (
                <div
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
                >
                  <div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${t.accent}, ${t.accent}88)`,
                    }}
                  />
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="#111827"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.301-3.995 5.847h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.301-3.996 5.847h3.983v10h-9.983z" />
                      </svg>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <svg
                            key={s}
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="#00b67a"
                          >
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="border-t border-gray-100" />
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${t.accent}, ${t.accent}bb)`,
                        }}
                      >
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 leading-tight">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {t.role} · {t.date}
                        </p>
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="#00b67a"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: mobileActive === i ? "20px" : "6px",
                  height: "6px",
                  background: mobileActive === i ? "#f14625" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden lg:flex gap-10 items-start">
          {/* Left panel */}
          <div className="flex flex-col gap-6 w-52 flex-shrink-0 pt-4">
            <div
              className="text-8xl font-black leading-none select-none"
              style={{ color: "#e5e7eb", fontFamily: "Georgia, serif" }}
            >
              "
            </div>
            <p
              className="text-xl font-bold text-gray-900 leading-snug"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What our Students
              <br />
              are saying
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Hear directly from students who transformed their careers with
              Slonix.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scroll("prev")}
                className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 hover:shadow-md transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scroll("next")}
                className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-red-600 hover:shadow-lg transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards track */}
          <div className="flex-1 min-w-0">
            <div
              ref={trackRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="snap-start flex-shrink-0 w-[300px] xl:w-[320px] bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
                  style={{
                    boxShadow:
                      "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${t.accent}, ${t.accent}88)`,
                    }}
                  />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="#111827"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.301-3.995 5.847h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.301-3.996 5.847h3.983v10h-9.983z" />
                      </svg>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <svg
                            key={s}
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="#00b67a"
                          >
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      "{t.text}"
                    </p>
                    <div className="border-t border-gray-100" />
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ring-2 ring-white shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${t.accent}, ${t.accent}bb)`,
                        }}
                      >
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 leading-tight truncate">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {t.role} · {t.date}
                        </p>
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="#00b67a"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const impactStats = [
  { target: 1000, suffix: "+", label: "Students Trained", icon: Users },
  { target: 50, suffix: "+", label: "Industry-Based Projects", icon: Wrench },
  {
    target: 100,
    suffix: "+",
    label: "Placement Success Stories",
    icon: TrendingUp,
  },
  {
    target: 40,
    suffix: "+",
    label: "Engineering & Tech Courses",
    icon: BookOpen,
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const totalFrames = duration / 20;
    const step = target / totalFrames;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({
  stat,
  active,
}: {
  stat: (typeof impactStats)[0];
  active: boolean;
}) {
  const count = useCountUp(stat.target, 3000, active);
  const Icon = stat.icon;
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/30">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div
        className="text-5xl font-black text-white mb-2"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="text-red-100 font-medium">{stat.label}</div>
    </div>
  );
}

function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #f14625, #e03a1b)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Our Impact
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <StatCard key={i} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useSEO({
    title: "Slonix Solutions | Engineering Training Institute in India",
    description: "Industry-ready engineering training in SolidWorks, CATIA, AutoCAD, BIM, PLC/SCADA, Full Stack & Python. Hands-on courses with placement support in Bengaluru.",
    canonical: "https://slonix.in/",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    course: "",
  });

  const heroImages = [heroRightImg];
  const heroAlts = ["Student with books"];
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Carousel disabled — single image only
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          course: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png"
                alt="Slonix Solutions"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                Courses
              </Link>
              <a
                href="#testimonials"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                About
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Start Learning
              </a>
              {/* Mobile menu button */}
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              Home
            </Link>
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              Courses
            </Link>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              Testimonials
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl border-2 border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
            >
              Start Learning
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-14 sm:pt-16 md:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:min-h-[calc(100vh-5rem)]">
            {/* ========== IMAGE — mobile: compact, desktop: full ========== */}
            <div className="lg:order-2 w-full">
              {/* Mobile image: fixed small height, NO aspect-ratio */}
              <div className="block lg:hidden">
                <div className="relative mx-auto w-[60%] max-w-[240px] h-[220px] sm:w-[50%] sm:max-w-[280px] sm:h-[280px] mt-2">
                  {/* Teal blocks */}
                  <div className="animate-teal-block-1 delay-200 absolute top-0 right-0 w-[70%] h-[58%] bg-teal-600 rounded-xl overflow-hidden">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 200 200"
                      fill="none"
                    >
                      <path
                        d="M40 50 L60 30 L80 50"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle
                        cx="100"
                        cy="80"
                        r="12"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <rect
                        x="50"
                        y="120"
                        width="20"
                        height="25"
                        rx="3"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="animate-teal-block-2 delay-400 absolute bottom-0 left-0 w-[58%] h-[42%] bg-teal-600 rounded-lg overflow-hidden">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 200 150"
                      fill="none"
                    >
                      <circle
                        cx="40"
                        cy="30"
                        r="8"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <rect
                        x="90"
                        y="20"
                        width="35"
                        height="28"
                        rx="4"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d="M130 70 Q140 50 150 70"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Sparkle */}
                  <div className="animate-sparkle delay-500 absolute top-[4%] left-[6%] z-20">
                    <svg
                      className="w-4 h-5 sm:w-6 sm:h-7"
                      viewBox="0 0 36 40"
                      fill="none"
                    >
                      <path
                        d="M12 2 L14 14"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 6 L20 18"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 16 L10 28"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* Student image carousel */}
                  <div className="animate-scale-in delay-300 relative z-10 flex items-end justify-center h-full">
                    {heroImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={heroAlts[i]}
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] w-[85%] object-cover object-top rounded-lg select-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-700 ease-in-out ${
                          activeImg === i
                            ? "opacity-100 scale-100 blur-0"
                            : "opacity-0 scale-105 blur-[2px]"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Carousel dots */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show image ${i + 1}`}
                        onClick={() => setActiveImg(i)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          activeImg === i
                            ? "bg-teal-600 scale-125"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop image: aspect-ratio based, full size */}
              <div className="hidden lg:block">
                <div
                  className="relative mx-auto max-w-[420px] xl:max-w-[480px]"
                  style={{ aspectRatio: "3/4" }}
                >
                  {/* Teal blocks */}
                  <div className="animate-teal-block-1 delay-200 absolute top-0 right-[2%] w-[68%] h-[60%] bg-teal-600 rounded-3xl z-0 overflow-hidden">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 50 L60 30 L80 50"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M120 40 L140 25 L155 45"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle
                        cx="100"
                        cy="80"
                        r="12"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <rect
                        x="50"
                        y="120"
                        width="20"
                        height="25"
                        rx="3"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d="M130 130 L145 120 L160 130 L145 140 Z"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="animate-teal-block-2 delay-400 absolute bottom-[2%] left-[2%] w-[60%] h-[40%] bg-teal-600 rounded-2xl z-0 overflow-hidden">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 200 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="40"
                        cy="30"
                        r="8"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d="M35 25 L45 35"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                      <rect
                        x="90"
                        y="20"
                        width="35"
                        height="28"
                        rx="4"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                      <path
                        d="M95 35 L100 30 L105 35"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M30 90 L50 90"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M35 95 L45 95"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M130 70 Q140 50 150 70"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <rect
                        x="120"
                        y="90"
                        width="25"
                        height="18"
                        rx="3"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Sparkle */}
                  <div className="animate-sparkle delay-500 absolute top-[6%] left-[8%] z-20">
                    <svg className="w-8 h-9" viewBox="0 0 36 40" fill="none">
                      <path
                        d="M12 2 L14 14"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 6 L20 18"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 16 L10 28"
                        stroke="#f59e0b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* Curved arrow */}
                  <div className="animate-fade-in-up delay-900 absolute bottom-[38%] left-[1%] z-20">
                    <svg width="44" height="44" viewBox="0 0 50 50" fill="none">
                      <path
                        d="M40 10 Q15 15 20 40"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M15 34 L20 40 L27 36"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Student image carousel */}
                  <div className="animate-scale-in delay-300 relative z-10 flex items-end justify-center h-full">
                    {heroImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={heroAlts[i]}
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-[82%] object-cover object-top rounded-xl select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-700 ease-in-out ${
                          activeImg === i
                            ? "opacity-100 scale-100 blur-0"
                            : "opacity-0 scale-105 blur-[2px]"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Carousel dots + progress */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show image ${i + 1}`}
                        onClick={() => setActiveImg(i)}
                        className="relative w-8 h-1.5 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
                      >
                        <span
                          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${
                            activeImg === i
                              ? "bg-teal-600 w-full"
                              : "bg-transparent w-0"
                          }`}
                          style={
                            activeImg === i
                              ? { animation: "progressBar 5s linear forwards" }
                              : {}
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ========== TEXT CONTENT ========== */}
            <div className="lg:order-1 py-5 sm:py-8 lg:py-0 w-full">
              {/* Badge */}
              <div className="animate-fade-in-up flex justify-center lg:justify-start mb-3 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] sm:text-sm font-medium max-w-full">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span className="truncate">
                    Industry-Focused Engineering Training
                  </span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up delay-100 text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-gray-900 leading-[1.15] mb-3 sm:mb-5 text-center lg:text-left [font-family:'Space_Grotesk',sans-serif]">
                Launch{" "}
                <span className="relative inline-block">
                  <span
                    style={{
                      background: "linear-gradient(to right, #f14625, #e03a1b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Real Careers
                  </span>
                  <svg
                    className="absolute -bottom-0.5 sm:-bottom-1.5 left-0 w-full"
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
                <br />
                on Track
              </h1>

              {/* Description */}
              <p className="animate-fade-in-up delay-200 text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed mb-4 sm:mb-7 text-center lg:text-left px-2 sm:px-0 sm:max-w-md lg:max-w-lg sm:mx-auto lg:mx-0 [font-family:'Inter',sans-serif]">
                Slonix Solutions delivers high-quality, industry-aligned
                training in advanced engineering tools and IT programs for
                college learners and job seekers. Our programs cover Full Stack
                Development, AI Mastery Suite, and Integrated Engineering Design
                & Automation, with a strong focus on practical skills,
                real-world projects, and career readiness.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-300 flex flex-row gap-2 sm:gap-3 mb-5 sm:mb-10 justify-center lg:justify-start">
                <a
                  href="/courses"
                  className="group animate-pulse-glow inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold text-[11px] sm:text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "#f14625" }}
                >
                  GET STARTED NOW
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-800 rounded-lg sm:rounded-xl font-semibold text-[11px] sm:text-sm border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  READ OUR STORY
                </a>
              </div>

              {/* Bottom Stats Row — commented out
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                ...
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Slonix — Bento Grid */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: "#f5f0eb" }}
      >
        {/* Subtle decorative grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* ── Bento Grid ── */}
          <div
            className="bento-grid grid gap-4 sm:gap-5"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "auto auto",
            }}
          >
            {/* ── Card 1: Title Card (Left, spans 2 rows on desktop) ── */}
            <div
              className="bento-card group rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{
                gridColumn: "1 / span 12",
                background: "linear-gradient(160deg, #111111 0%, #1a1a1a 100%)",
                minHeight: "280px",
              }}
            >
              {/* Animated floating orbs */}
              <div
                className="orb-float-1 absolute w-48 h-48 rounded-full opacity-30 pointer-events-none"
                style={{
                  top: "-10%",
                  right: "-5%",
                  background:
                    "radial-gradient(circle, #a855f7, #7c3aed, transparent 70%)",
                }}
              />
              <div
                className="orb-float-2 absolute w-36 h-36 rounded-full opacity-20 pointer-events-none"
                style={{
                  bottom: "-8%",
                  left: "-3%",
                  background:
                    "radial-gradient(circle, #f43f5e, #e11d48, transparent 70%)",
                }}
              />
              <div
                className="orb-float-3 absolute w-24 h-24 rounded-full opacity-15 pointer-events-none"
                style={{
                  top: "40%",
                  right: "30%",
                  background:
                    "radial-gradient(circle, #6366f1, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6"
                  style={{
                    fontFamily: "'Space Grotesk', serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Why
                  <br />
                  Choose
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      Slonix
                    </span>
                  </span>
                </h2>
              </div>
              <p
                className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm relative z-10"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                This isn't just another training center. It's a transformation —
                from learning to earning.
              </p>
            </div>

            {/* ── Card 2: Industry-Relevant Training (Top Middle) ── */}
            <div
              className="bento-card group rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                gridColumn: "1 / span 12",
                background: "linear-gradient(160deg, #131313 0%, #1d1d1d 100%)",
                minHeight: "260px",
              }}
            >
              {/* Animated floating orbs */}
              <div
                className="orb-float-2 absolute w-44 h-44 rounded-full opacity-25 pointer-events-none"
                style={{
                  top: "-15%",
                  right: "-10%",
                  background:
                    "radial-gradient(circle, #06b6d4, #0891b2, transparent 70%)",
                }}
              />
              <div
                className="orb-float-4 absolute w-28 h-28 rounded-full opacity-15 pointer-events-none"
                style={{
                  bottom: "10%",
                  left: "5%",
                  background:
                    "radial-gradient(circle, #14b8a6, transparent 70%)",
                }}
              />
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight relative z-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Industry-Relevant Training
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs relative z-10">
                Master engineering tools like CATIA, SolidWorks, MATLAB, and
                Python — the exact tools companies demand.
              </p>
            </div>

            {/* ── Card 3: Hands-On Projects (Top Right) ── */}
            <div
              className="bento-card group rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                gridColumn: "1 / span 12",
                background: "linear-gradient(160deg, #151515 0%, #1f1f1f 100%)",
                minHeight: "260px",
              }}
            >
              {/* Animated floating orbs */}
              <div
                className="orb-float-3 absolute w-40 h-40 rounded-full opacity-25 pointer-events-none"
                style={{
                  bottom: "-12%",
                  right: "-8%",
                  background:
                    "radial-gradient(circle, #f59e0b, #d97706, transparent 70%)",
                }}
              />
              <div
                className="orb-float-1 absolute w-24 h-24 rounded-full opacity-15 pointer-events-none"
                style={{
                  top: "15%",
                  left: "60%",
                  background:
                    "radial-gradient(circle, #fb923c, transparent 70%)",
                }}
              />
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight relative z-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hands-On Projects
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs relative z-10">
                Get access to ready-to-use real-world projects, portfolio
                pieces, and guided capstone work.
              </p>
            </div>

            {/* ── Card 4: Real Results & Career-Ready ── */}
            <div
              className="bento-card group rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{
                gridColumn: "1 / span 12",
                minHeight: "320px",
                background: "linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 100%)",
              }}
            >
              {/* Animated floating orbs */}
              <div
                className="orb-float-4 absolute w-56 h-56 rounded-full opacity-30 pointer-events-none"
                style={{
                  top: "-15%",
                  right: "-10%",
                  background:
                    "radial-gradient(circle, #f14625, #d63517, transparent 70%)",
                }}
              />
              <div
                className="orb-float-1 absolute w-44 h-44 rounded-full opacity-20 pointer-events-none"
                style={{
                  bottom: "-10%",
                  left: "-5%",
                  background:
                    "radial-gradient(circle, #3b82f6, #2563eb, transparent 70%)",
                }}
              />
              <div
                className="orb-float-3 absolute w-32 h-32 rounded-full opacity-15 pointer-events-none"
                style={{
                  top: "50%",
                  right: "40%",
                  background:
                    "radial-gradient(circle, #8b5cf6, transparent 70%)",
                }}
              />
              <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-between h-full">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Real Results, Career-Ready
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                  Built by engineers who've done it — not just taught it. 100+
                  placement success stories. No experience needed — start from
                  zero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section
        id="programs"
        className="py-20 px-6 relative bg-gradient-to-br from-red-50 via-white to-red-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              POPULAR PROGRAM
            </h2>
            <p className="text-xl text-gray-600">
              Master IT programs, engineering tools, AI, and design skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 5).map((course, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`}
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium mb-3 border border-red-200">
                    {course.category}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 leading-snug"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(to right, #f14625, #e03a1b)",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="px-8 py-4 bg-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all border-2 inline-block"
              style={{ color: "#f14625", borderColor: "#f14625" }}
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* How It Works */}
      <section className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Your path to engineering excellence in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Course",
                description:
                  "Select based on your career goal and engineering domain",
              },
              {
                step: "02",
                title: "Learn Practically",
                description:
                  "Hands-on sessions with guided real-world projects",
              },
              {
                step: "03",
                title: "Build Skills",
                description: "Develop industry-ready technical expertise",
              },
              {
                step: "04",
                title: "Get Certified",
                description: "Earn certification and receive career support",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #f14625, #e03a1b)",
                      boxShadow: "0 10px 15px -3px rgba(241,70,37,0.3)",
                    }}
                  >
                    <span
                      className="text-3xl font-black text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p
              className="text-2xl text-gray-900 font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Your engineering career starts with skills. Start today.
            </p>
            <Link
              to="/courses"
              className="group px-8 py-4 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 mx-auto"
              style={{
                background: "linear-gradient(to right, #f14625, #e03a1b)",
                boxShadow: "0 0 30px rgba(241,70,37,0.3)",
              }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 relative bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Empowering the Next Generation
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Slonix Solutions, we believe that education is the most
                powerful tool for changing the world. Our mission is to
                democratize access to high-quality learning resources through
                technology.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by a team of educators and engineers, we understand the
                nuances of learning and the power of code.
              </p>

              <Link
                to="/our-story"
                className="inline-block px-8 py-4 bg-white rounded-full font-semibold text-lg hover:opacity-90 transition-all"
                style={{ color: "#f14625", border: "2px solid #f14625" }}
              >
                Read Our Story
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg grid grid-cols-2 gap-3">
                {/* Card 1: Image with overlay */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl group col-span-1 row-span-2"
                  style={{ minHeight: "280px" }}
                >
                  <img
                    src={powerImg}
                    alt="Empowering the Next Generation"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <p
                      className="text-white font-bold text-lg leading-tight"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Built by Engineers
                    </p>
                    <p className="text-white/70 text-xs mt-1">
                      Who've done it — not just taught it
                    </p>
                  </div>
                </div>

                {/* Card 2: Mission */}
                <div
                  className="relative rounded-2xl p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "#0a0a0a", minHeight: "130px" }}
                >
                  <div
                    className="orb-float-1 absolute w-24 h-24 rounded-full opacity-30 pointer-events-none"
                    style={{
                      top: "-20%",
                      right: "-10%",
                      background:
                        "radial-gradient(circle, #f14625, transparent 70%)",
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: "rgba(241,70,37,0.15)" }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#f14625"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Our Mission
                    </p>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      Democratize access to high-quality engineering education
                    </p>
                  </div>
                </div>

                {/* Card 3: Stats */}
                <div
                  className="relative rounded-2xl p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "#0a0a0a", minHeight: "130px" }}
                >
                  <div
                    className="orb-float-3 absolute w-20 h-20 rounded-full opacity-25 pointer-events-none"
                    style={{
                      bottom: "-15%",
                      left: "-5%",
                      background:
                        "radial-gradient(circle, #a855f7, transparent 70%)",
                    }}
                  />
                  <div className="relative z-10">
                    <p
                      className="text-4xl font-black mb-1"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background: "linear-gradient(135deg, #f14625, #ff8c42)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      100+
                    </p>
                    <p
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Placements
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Success stories & counting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column — Info */}
            <div>
              <h2
                className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get in —<br />
                touch with us
              </h2>

              <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
                We're here to help! Whether you have a question about our
                courses, need assistance with your account, or want to provide
                feedback, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email:</p>
                  <a
                    href="mailto:slonixbim.team@gmail.com"
                    className="text-gray-900 font-bold text-lg hover:underline"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    slonixbim.team@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone:</p>
                  <a
                    href="tel:+919080211696"
                    className="text-gray-900 font-bold text-xl hover:underline"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    +91 90802 11696
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    Available Monday to Friday, 9 AM - 6 PM IST
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address:</p>
                  <p
                    className="text-gray-900 font-semibold text-sm leading-relaxed"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Hustlehub Tech Park, Somasundarapalya Main Rd,
                    <br />
                    HSR Layout, Bengaluru, Karnataka 560102
                  </p>
                </div>
              </div>

              {/* Live Chat Button */}
              <div className="mt-10">
                <a
                  href="https://wa.me/919080211696?text=Hi%20Slonix%20Solutions%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20courses%20and%20training%20programs.%20Could%20you%20please%20share%20the%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: "#0a0a0a" }}
                >
                  Live Chat
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First / Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your first name..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name..."
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address..."
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-sm"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    aria-label="Select a course"
                    title="Select a course"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-sm"
                  >
                    <option value="">Select a course (optional)</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50">
                      <span className="text-lg">🇮🇳</span>
                      <span className="text-gray-700 font-medium text-sm">
                        +91
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number..."
                      className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message..."
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                    style={{ background: "#0a0a0a" }}
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-16 pb-8" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src="https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png"
                alt="Slonix Solutions"
                className="h-10 w-auto object-contain mb-4"
              />
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
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/slonix-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  <a
                    href="#courses"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Contact
                  </a>
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
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                  />
                  <a
                    href="mailto:slonixbim.team@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    slonixbim.team@gmail.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                  />
                  <a
                    href="tel:+919080211696"
                    className="hover:text-white transition-colors"
                  >
                    +91 90802 11696
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                  />
                  <span>
                    Hustlehub Tech Park, Somasundarapalya Main Rd, HSR Layout,
                    Bengaluru, Karnataka 560102
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Slonix Solutions. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                Terms
              </Link>
              <a
                href="#contact"
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
