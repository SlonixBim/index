import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Clock,
  Megaphone,
  MessageSquare,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { courses } from "@/data/courses";

const logoUrl =
  "https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png";

const STATUS_OPTIONS = [
  { id: "studying", label: "Currently Studying", icon: "🎓" },
  { id: "working", label: "Working Professional", icon: "💼" },
  { id: "job-seeker", label: "Looking for a Job", icon: "🔍" },
  { id: "freelancer", label: "Freelancer / Self-employed", icon: "🚀" },
  { id: "other", label: "Other", icon: "✨" },
];

const EDUCATION_OPTIONS = [
  "10th (SSLC)",
  "12th (HSC)",
  "Diploma",
  "B.E / B.Tech",
  "B.Sc / BCA / BBA",
  "M.E / M.Tech",
  "M.Sc / MCA / MBA",
  "PhD",
  "Other",
];

const BATCH_OPTIONS = [
  "Morning (6 AM – 10 AM)",
  "Afternoon (11 AM – 2 PM)",
  "Evening (4 PM – 8 PM)",
  "Weekend Batch (Sat & Sun)",
  "Flexible / Online",
];

const SOURCE_OPTIONS = [
  "Instagram / Facebook",
  "YouTube",
  "Google Search",
  "Friend / Colleague Referral",
  "College / Campus",
  "WhatsApp",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  city: string;
  education: string;
  college: string;
  yearOfPassout: string;
  currentStatus: string[];
  course: string;
  batchTiming: string;
  hearAboutUs: string;
  message: string;
  agreeTerms: boolean;
}

export default function EnrollPage() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    education: "",
    college: "",
    yearOfPassout: "",
    currentStatus: [],
    course: course?.title || "",
    batchTiming: "",
    hearAboutUs: "",
    message: "",
    agreeTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (course) {
      setFormData((prev) => ({ ...prev, course: course.title }));
    }
  }, [course]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "agreeTerms") {
        setFormData((prev) => ({ ...prev, agreeTerms: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          currentStatus: checked
            ? [...prev.currentStatus, value]
            : prev.currentStatus.filter((s) => s !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setError("Please agree to our Terms & Privacy Policy to proceed.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const sections = [
    { label: "Personal", icon: User },
    { label: "Education", icon: GraduationCap },
    { label: "Course", icon: BookOpen },
    { label: "Submit", icon: CheckCircle2 },
  ];

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-red-400 focus:outline-none transition-all text-gray-900 placeholder-gray-400 text-sm font-medium";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          {/* Animated success ring */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 animate-ping opacity-20" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 animate-pulse opacity-30" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl shadow-red-500/40">
              <PartyPopper className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            You're Enrolled! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-3 leading-relaxed">
            Thank you,{" "}
            <span className="text-red-600 font-bold">
              {formData.name.split(" ")[0]}
            </span>
            ! Your enrollment for{" "}
            <span className="text-gray-900 font-semibold">{formData.course}</span>{" "}
            has been received.
          </p>
          <p className="text-gray-500 mb-10">
            Our team will contact you within{" "}
            <span className="font-semibold text-gray-700">24 hours</span> to{" "}
            confirm your batch and share next steps.
          </p>

          <div className="bg-white rounded-2xl border-2 border-red-100 p-6 mb-8 text-left shadow-sm">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              What happens next?
            </div>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  text: "Our counselor will call you to confirm details",
                },
                {
                  step: "2",
                  text: "You'll receive batch schedule & joining link on your email",
                },
                {
                  step: "3",
                  text: "Join your first class and start your journey!",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-gray-700 text-sm pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/courses"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all"
            >
              Explore More Courses
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-red-300 hover:text-red-600 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Navbar */}
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
            <Link
              to="/courses"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Courses
            </Link>
            <a
              href="/#contact"
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
          {course && (
            <Link
              to={`/courses/${course.id}`}
              className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Course
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-24 pb-10 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.2),transparent_55%)]" />
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            Course Enrollment
          </div>

          <h1
            className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {course ? (
              <>
                Enroll in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
                  {course.title}
                </span>
              </>
            ) : (
              "Course Enrollment"
            )}
          </h1>

          {course && (
            <p className="text-gray-400 text-base md:text-lg mb-6">
              {course.category} &nbsp;·&nbsp; {course.duration} &nbsp;·&nbsp;{" "}
              {course.level}
            </p>
          )}

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-8">
            {sections.map((sec, i) => {
              const Icon = sec.icon;
              const isActive = i === activeSection;
              const isDone = i < activeSection;
              return (
                <div key={sec.label} className="flex items-center gap-2 md:gap-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                        : isDone
                        ? "bg-green-500 text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{sec.label}</span>
                  </div>
                  {i < sections.length - 1 && (
                    <div
                      className={`h-px w-6 md:w-12 ${
                        isDone ? "bg-green-500" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ── SECTION 1: Personal Info ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden"
              onFocus={() => setActiveSection(0)}
            >
              <div className="px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-red-50 to-rose-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-sm">
                  <User className="w-4.5 h-4.5 text-white w-5 h-5" />
                </div>
                <div>
                  <h2
                    className="text-base font-bold text-gray-900"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Personal Information
                  </h2>
                  <p className="text-xs text-gray-500">
                    Tell us a bit about yourself
                  </p>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Arjun Krishnan"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3.5 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-600 text-sm font-semibold flex-shrink-0">
                      🇮🇳 +91
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="9876543210"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Chennai, Coimbatore"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Education & Status ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden"
              onFocus={() => setActiveSection(1)}
            >
              <div className="px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2
                    className="text-base font-bold text-gray-900"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Education & Background
                  </h2>
                  <p className="text-xs text-gray-500">
                    Your academic & professional background
                  </p>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Highest Education</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select qualification</option>
                    {EDUCATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Year of Passout</label>
                  <input
                    type="text"
                    name="yearOfPassout"
                    value={formData.yearOfPassout}
                    onChange={handleChange}
                    placeholder="e.g. 2023"
                    className={inputClass}
                    maxLength={4}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>College / University Name</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. Anna University, Chennai"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Current Status Checkboxes */}
                <div className="md:col-span-2">
                  <label className={labelClass}>
                    Current Status{" "}
                    <span className="text-gray-400 font-normal">
                      (select all that apply)
                    </span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                    {STATUS_OPTIONS.map((opt) => {
                      const isChecked = formData.currentStatus.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all select-none ${
                            isChecked
                              ? "border-red-400 bg-red-50"
                              : "border-gray-100 bg-gray-50 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="currentStatus"
                            value={opt.id}
                            checked={isChecked}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-xl">{opt.icon}</span>
                          <span
                            className={`text-sm font-medium ${
                              isChecked ? "text-red-700" : "text-gray-700"
                            }`}
                          >
                            {opt.label}
                          </span>
                          {isChecked && (
                            <CheckCircle2 className="w-4 h-4 text-red-500 ml-auto flex-shrink-0" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 3: Course Info ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden"
              onFocus={() => setActiveSection(2)}
            >
              <div className="px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-teal-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2
                    className="text-base font-bold text-gray-900"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Course Preferences
                  </h2>
                  <p className="text-xs text-gray-500">
                    Tell us about your learning goals
                  </p>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelClass}>
                    Course Interested In <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-10`}
                    >
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Preferred Batch Timing</label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      name="batchTiming"
                      value={formData.batchTiming}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    >
                      <option value="">Select timing</option>
                      {BATCH_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>How did you hear about us?</label>
                  <div className="relative">
                    <Megaphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    >
                      <option value="">Select source</option>
                      {SOURCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>
                    Any Message or Special Requirements
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us your goals, any questions, or special requests..."
                      className={`${inputClass} pl-10 resize-none`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 4: Submit ── */}
            <div
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden"
              onFocus={() => setActiveSection(3)}
            >
              <div className="px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2
                    className="text-base font-bold text-gray-900"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Review & Submit
                  </h2>
                  <p className="text-xs text-gray-500">
                    One last step — you're almost in!
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Summary Preview */}
                {formData.name && (
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-5 mb-6 border border-gray-100">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                      Enrollment Summary
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      {[
                        { label: "Name", value: formData.name },
                        { label: "Email", value: formData.email },
                        { label: "Phone", value: formData.phone ? `+91 ${formData.phone}` : "" },
                        { label: "City", value: formData.city },
                        { label: "Course", value: formData.course },
                        { label: "Batch", value: formData.batchTiming },
                      ]
                        .filter((i) => i.value)
                        .map((item) => (
                          <div key={item.label}>
                            <div className="text-xs text-gray-400 font-medium mb-0.5">
                              {item.label}
                            </div>
                            <div className="text-gray-800 font-semibold truncate">
                              {item.value}
                            </div>
                          </div>
                        ))}
                    </div>
                    {formData.currentStatus.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-400 font-medium mb-2">Status</div>
                        <div className="flex flex-wrap gap-2">
                          {formData.currentStatus.map((s) => {
                            const opt = STATUS_OPTIONS.find((o) => o.id === s);
                            return opt ? (
                              <span
                                key={s}
                                className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full"
                              >
                                {opt.icon} {opt.label}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group mb-6">
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      formData.agreeTerms
                        ? "bg-red-600 border-red-600"
                        : "border-gray-300 group-hover:border-red-400"
                    }`}
                  >
                    {formData.agreeTerms && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    )}
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="sr-only"
                    />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to Slonix Solutions'{" "}
                    <Link
                      to="/terms-and-conditions"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    . I consent to being contacted about this enrollment.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                {/* Error */}
                {error && (
                  <div className="mb-5 px-4 py-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-600 hover:shadow-xl hover:shadow-red-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Enrollment...
                    </>
                  ) : (
                    <>
                      Complete Enrollment
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  🔒 Your information is 100% secure and will never be shared with third parties.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pb-4">
              {[
                { icon: "🏆", title: "Industry Certified", sub: "Recognized programs" },
                { icon: "👨‍🏫", title: "Expert Instructors", sub: "10+ years experience" },
                { icon: "🚀", title: "Job-Ready Skills", sub: "100% practical" },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="text-2xl mb-1.5">{badge.icon}</div>
                  <div className="text-xs font-bold text-gray-800">{badge.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{badge.sub}</div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/">
            <img src={logoUrl} alt="Slonix" className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-xs text-gray-400 text-center">
            © 2025 Slonix Solutions. All rights reserved. &nbsp;·&nbsp;
            <Link to="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy</Link>
            &nbsp;·&nbsp;
            <Link to="/terms-and-conditions" className="hover:text-red-600 transition-colors">Terms</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
