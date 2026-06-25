import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useSEO } from "@/react-app/hooks/useSEO";
import { ArrowRight } from "lucide-react";
import Footer from "@/react-app/components/Footer";
import HeroSection from "@/react-app/components/HeroSection";
import { courses } from "@/data/courses";
import powerImg from "@/photos/power.jpg";
import aimlImg from "@/photos/aiml.jpg";
import dataScienceImg from "@/photos/Data-Science-Course.webp";
import autocadImg from "@/photos/autocad.jpg";
import digitalMarketingImg from "@/photos/digital marketing.jpg";
import krishnaKumarImg from "@/photos/testimonials/krishna kumar.jpeg";
import preveenImg from "@/photos/testimonials/preveen.jpeg";
import yogadahrshiniImg from "@/photos/testimonials/yogadahrshini.jpeg";
import adhithyaImg from "@/photos/testimonials/adhitya.jpeg";
import abhikshaImg from "@/photos/testimonials/abishka.jpeg";

const PHONE_NUMBER = "+91 8431752365";

const testimonials = [
  {
    text: "Data Analytics training helped me understand Excel, SQL, and visualization tools clearly. Very practical and career-focused.",
    name: "KRISHNA KUMAR B",
    role: "DATA ANALYTICS",
    date: "2 days ago",
    image: krishnaKumarImg,
    accent: "#f14625",
  },
  {
    text: "Really good UI/UX course. Easy to understand, practical sessions, and helpful mentors. It gave me confidence to start working on real projects.",
    name: "PRAVEEN S",
    role: "UI/UX",
    date: "5 days ago",
    image: preveenImg,
    accent: "#14b8a6",
  },
  {
    text: "Excellent embedded systems course with clear explanations and hands-on learning. The practical sessions and supportive mentors made complex concepts easy to grasp. It gave me the confidence to start building real-world projects.",
    name: "YOGADHARSHINI K",
    role: "EMBEDDED SYSTEMS",
    date: "1 week ago",
    image: yogadahrshiniImg,
    accent: "#8b5cf6",
  },
  {
    text: "Enrolled in the Full Stack program and had a great experience. The live projects and doubt-clearing sessions were very helpful.",
    name: "ADHITHYA R",
    role: "FULLSTACK WEB DEVELOPMENT",
    date: "2 weeks ago",
    image: adhithyaImg,
    accent: "#f59e0b",
  },
  {
    text: "I highly recommend the Data Science course at SLONIX SOLUTIONS. The curriculum, projects, and guidance were all excellent.",
    name: "ABHIKSHA D",
    role: "DATA SCIENCE",
    date: "3 weeks ago",
    image: abhikshaImg,
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

  // Desktop auto-scroll every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      if (trackRef.current && window.innerWidth >= 1024) {
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        // If reached end, jump back to start smoothly
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
          trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          trackRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 3500);
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
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm"
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm"
                          style={{
                            background: `linear-gradient(135deg, ${t.accent}, ${t.accent}bb)`,
                          }}
                        >
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
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
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ring-2 ring-white shadow-sm"
                          style={{
                            background: `linear-gradient(135deg, ${t.accent}, ${t.accent}bb)`,
                          }}
                        >
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
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

// ════════════ Animated Stats Counter ════════════
function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  format,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  format?: "k";
}) {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(1 + easeOut * (value - 1));
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  // Format display value
  const displayValue = format === "k" && count >= 1000
    ? (count / 1000).toFixed(0) + "k"
    : count;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function StatsSection() {
  const stats = [
    { value: 1000, suffix: "+", label: "Learners", duration: 2000 },
    { value: 2, suffix: "+", label: "years of experience", duration: 1500 },
    { value: 500, suffix: "+", label: "Live sessions Delivered", duration: 2000 },
    { value: 40, suffix: "+", label: "Courses", duration: 1800 },
  ];

  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6"
      style={{ background: "#faf5ef" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-fade-in-up">
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </p>
              <p
                className="text-sm sm:text-base text-gray-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useSEO({
    title: "Slonix Solutions | Building Skills for the Real world",
    description:
      "Industry-ready engineering training in SolidWorks, CATIA, AutoCAD, BIM, PLC/SCADA, Full Stack & Python. Hands-on courses with placement support in Bengaluru.",
    canonical: "https://slonixsolutions.in/",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    course: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

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
      {/* ════════════ Hero Section Component ════════════ */}
      <HeroSection />

      {/* ════════════ Stats Bar with Animated Counters ════════════ */}
      <StatsSection />

      {/* ════════════ Company Logos Marquee ════════════ */}
      <section
        className="py-10 overflow-hidden relative"
        style={{ background: "#faf5ef" }}
      >
        {/* Fade gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#faf5ef] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#faf5ef] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:animation-play-state-paused">
          {[1, 2].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center justify-around translate-x-0"
            >
              {[
                "TechFlow",
                "CodeWorks",
                "DevSync",
                "CloudNine",
                "InnovateIT",
                "Dataforge",
                "Appify",
                "NextGen",
                "WebSolutions",
                "ByteCraft",
              ].map((logo) => (
                <div
                  key={logo}
                  className="mx-8 sm:mx-12 flex items-center justify-center"
                >
                  <span
                    className="text-xl sm:text-2xl font-black text-black/20 tracking-wider uppercase transition-colors hover:text-black/40"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ Popular Courses ════════════ */}
      <section
        id="programs"
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: "#faf5ef" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Popular{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f14625, #ff8c42)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Programs
              </span>
            </h2>
            <p
              className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Master IT programs, engineering tools, AI, and design skills
            </p>
          </div>

          {/* Course cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { id: "aiml", title: "AIML", category: "Artificial Intelligence & Machine Learning", imageUrl: aimlImg, bestseller: true },
              { id: "data-science", title: "Data Science", category: "Data Analytics & Visualization", imageUrl: dataScienceImg, bestseller: false },
              { id: "autocad", title: "AutoCAD", category: "Engineering Design & Drafting", imageUrl: autocadImg, bestseller: false },
              { id: "digital-marketing", title: "Digital Marketing", category: "Marketing & Growth", imageUrl: digitalMarketingImg, bestseller: true },
            ].map((course, index) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Best seller badge */}
                  {course.bestseller && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#f14625",
                      }}
                    >
                      BEST SELLER
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3
                    className="text-base font-bold text-gray-900 mb-1 leading-snug line-clamp-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-xs text-gray-400 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {course.category}
                  </p>

                  {/* Rating row */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-sm font-bold text-gray-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {(4.5 + (index % 5) * 0.1).toFixed(1)}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${i < 4 ? "text-yellow-400" : "text-gray-200"}`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      ({(120 + index * 54).toLocaleString()})
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All button */}
          <div className="text-center mt-10 sm:mt-14">
            <Link
              to="/courses"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 hover:shadow-xl transition-all duration-200"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Achieve Career Excellence in Four Simple Steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Course",
                description:
                  "Pick the path aligned with your career goals and expertise",
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
              Strong Careers Starts with right skills. Start today
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
                      Projects
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Empowering the Next Generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            {/* Left Column — Info */}
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-4 md:mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get in —<br />
                touch with us
              </h2>

              <p className="text-gray-500 leading-relaxed mb-6 md:mb-10 max-w-md text-sm md:text-base">
                We're here to help! Whether you have a question about our
                courses, need assistance with your account, or want to provide
                feedback, our team is ready to assist you.
              </p>

              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Email:</p>
                  <a
                    href="mailto:slonixbim.team@gmail.com"
                    className="text-gray-900 font-bold text-base md:text-lg hover:underline break-all"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    slonixbim.team@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Phone:</p>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="text-gray-900 font-bold text-base md:text-xl hover:underline"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-gray-400 text-xs md:text-sm mt-1">
                    Available Monday to Friday, 9 AM - 6 PM IST
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">Address:</p>
                  <p
                    className="text-gray-900 font-semibold text-xs md:text-sm leading-relaxed"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Hustlehub Tech Park, Somasundarapalya Main Rd,
                    <br />
                    HSR Layout, Bengaluru, Karnataka 560102
                  </p>
                </div>
              </div>

              {/* Live Chat Button */}
              <div className="mt-6 md:mt-10">
                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\s/g, "")}?text=Hi%20Slonix%20Solutions%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20courses%20and%20training%20programs.%20Could%20you%20please%20share%20the%20details%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold text-xs md:text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg w-full sm:w-auto justify-center"
                  style={{ background: "#0a0a0a" }}
                >
                  Live Chat
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* First / Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your first name..."
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-xs md:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name..."
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-xs md:text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address..."
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-xs md:text-sm"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    aria-label="Select a course"
                    title="Select a course"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-xs md:text-sm"
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
                  <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-gray-50 flex-shrink-0">
                      <span className="text-base md:text-lg">🇮🇳</span>
                      <span className="text-gray-700 font-medium text-xs md:text-sm">
                        +91
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number..."
                      className="flex-1 px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-xs md:text-sm min-w-0"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-500 text-xs md:text-sm mb-1.5 md:mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message..."
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-300 text-xs md:text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full text-white font-semibold text-xs md:text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg w-full sm:w-auto justify-center"
                    style={{ background: "#0a0a0a" }}
                  >
                    Send Message
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
