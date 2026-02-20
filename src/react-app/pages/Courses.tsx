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
import Footer from "@/react-app/components/Footer";

export default function CoursesPage() {
  useSEO({
    title: "All Courses | Slonix Solutions — Engineering Training Institute",
    description:
      "Browse all engineering training courses at Slonix Solutions — SolidWorks, CATIA, AutoCAD, BIM, PLC/SCADA, Full Stack, Python and more. Enroll today.",
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
                  {selectedCategory === "All"
                    ? "Filter by Category"
                    : selectedCategory}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${filterOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                {filterOpen && (
                  <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden min-w-[220px]">
                    <div className="px-3 py-2 border-b border-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Select Category
                      </p>
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
                          onClick={() => {
                            setSelectedCategory("All");
                            setFilterOpen(false);
                          }}
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
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid with Sidebar */}
      <section className="py-12 px-6 relative min-h-[400px]">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Category Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl border-2 border-red-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-red-100 bg-gradient-to-r from-red-50 to-white">
                <h3
                  className="text-base font-bold text-gray-900 uppercase tracking-wider"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Categories
                </h3>
              </div>
              <div className="py-2">
                {categories.map((category) => {
                  const count =
                    category === "All"
                      ? courses.length
                      : courses.filter((c) => c.category === category).length;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        const scrollY = window.scrollY;
                        setSelectedCategory(category);
                        requestAnimationFrame(() => {
                          window.scrollTo({
                            top: scrollY,
                            left: 0,
                            behavior: "instant",
                          });
                        });
                      }}
                      className={`w-full flex items-center justify-between gap-2 px-6 py-3.5 text-[15px] font-medium transition-all text-left ${
                        selectedCategory === category
                          ? "bg-red-50 text-red-600 border-r-[3px] border-red-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          selectedCategory === category
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Courses */}
          <div className="flex-1 min-w-0">
            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  Try adjusting your search or filters to find what you're
                  looking for.
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

      <Footer />
    </div>
  );
}
