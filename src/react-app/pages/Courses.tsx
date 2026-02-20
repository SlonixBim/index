import { useEffect, useState, useMemo, useRef } from "react";
import { useSEO } from "@/react-app/hooks/useSEO";
import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Award,
  ChevronLeft,
  Search,
  Filter,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  useSEO({
    title: "All Courses | Slonix Solutions — Engineering Training Institute",
    description: "Browse all engineering training courses at Slonix Solutions — SolidWorks, CATIA, AutoCAD, BIM, PLC/SCADA, Full Stack, Python and more. Enroll today.",
    canonical: "https://slonix.in/courses",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const categories = useMemo(() => {
    const cats = courses.map((course) => course.category);
    return ["All", ...new Set(cats)];
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const logoUrl =
    "https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-red-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Slonix Solutions"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link to="/courses" className="text-red-600 font-semibold">
              Courses
            </Link>
            <a
              href="/#testimonials"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Testimonials
            </a>
            <a
              href="/#about"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative">
        {/* Decorative blobs — clipped inside their own wrapper so dropdown is never cut */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.15),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors mb-6 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Projects
              </span>
            </h1>

            <p
              className="text-xl text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore our comprehensive collection of engineering, software
              development, AI, and design courses. Each program is designed to
              equip you with practical, job-ready skills.
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-10">
              {/* Search */}
              <div className="relative flex-1 max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 bg-white/80 backdrop-blur-md border-2 border-red-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all shadow-sm hover:shadow-md text-gray-900"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* Filter dropdown */}
              <div ref={filterRef} className="relative">
                <button
                  type="button"
                  onClick={() => setFilterOpen((v) => !v)}
                  className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl border-2 font-semibold text-sm transition-all whitespace-nowrap ${
                    filterOpen || selectedCategory !== "All"
                      ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-500/30"
                      : "bg-white border-red-100 text-gray-700 hover:border-red-300 hover:bg-red-50"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {selectedCategory === "All" ? "Filter by Category" : selectedCategory}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${filterOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown panel */}
                {filterOpen && (
                  <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden min-w-[220px]">
                    <div className="px-3 py-2 border-b border-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Category</p>
                    </div>
                    <div className="py-1.5">
                      {categories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category);
                            setFilterOpen(false);
                          }}
                          className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium transition-colors text-left ${
                            selectedCategory === category
                              ? "bg-red-50 text-red-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span>{category}</span>
                          {selectedCategory === category && (
                            <Check className="w-4 h-4 text-red-600 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                    {selectedCategory !== "All" && (
                      <div className="px-3 py-2 border-t border-gray-50">
                        <button
                          type="button"
                          onClick={() => { setSelectedCategory("All"); setFilterOpen(false); }}
                          className="text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
                        >
                          Clear filter
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Active filter pill */}
              {selectedCategory !== "All" && (
                <div className="flex items-center gap-2 px-3 py-2 bg-red-100 rounded-xl text-red-700 text-sm font-medium">
                  <span>{selectedCategory}</span>
                  <button type="button" onClick={() => setSelectedCategory("All")}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-6 relative min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all overflow-hidden shadow-sm hover:shadow-xl flex flex-col"
                >
                  <Link
                    to={`/courses/${course.id}`}
                    className="relative h-48 overflow-hidden block"
                  >
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`}
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium mb-3 border border-red-200 self-start">
                      {course.category}
                    </div>

                    <Link to={`/courses/${course.id}`}>
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-red-600 transition-colors cursor-pointer"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {course.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-red-600" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-red-100">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-red-600 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative bg-gradient-to-r from-red-600 to-red-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of students who have launched their careers with
            Slonix Solutions
          </p>
          <a
            href="/#contact"
            className="group px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-16 pb-8" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
            <div className="lg:col-span-1">
              <img
                src={logoUrl}
                alt="Slonix Solutions"
                className="h-10 w-auto object-contain mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering the next generation of engineers with industry-ready
                skills, hands-on projects, and career support.
              </p>
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
            <div>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-story"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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
            <div>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:slonixbim.team@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    slonixbim.team@gmail.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919080211696"
                    className="hover:text-white transition-colors"
                  >
                    +91 90802 11696
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f14625" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Hustlehub Tech Park, Somasundarapalya Main Rd, HSR Layout,
                    Bengaluru, Karnataka 560102
                  </span>
                </li>
              </ul>
            </div>
          </div>
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
                href="/#contact"
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
