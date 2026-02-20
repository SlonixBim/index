import { Link } from "react-router";
import {
  ArrowLeft,
  Target,
  Eye,
  Sparkles,
  GraduationCap,
  Lightbulb,
  Users,
  Rocket,
  Heart,
  Shield,
  ArrowRight,
} from "lucide-react";
import powerImg from "@/photos/power.jpg";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Header ── */}
      <header
        className="relative overflow-hidden px-6 pt-20 pb-28"
        style={{ background: "#0a0a0a" }}
      >
        {/* Animated orbs */}
        <div
          className="orb-float-1 absolute w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{
            top: "-15%",
            right: "-5%",
            background: "radial-gradient(circle, #f14625, transparent 70%)",
          }}
        />
        <div
          className="orb-float-3 absolute w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            bottom: "-10%",
            left: "10%",
            background: "radial-gradient(circle, #a855f7, transparent 70%)",
          }}
        />
        <div
          className="orb-float-2 absolute w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <p
            className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#f14625" }}
          >
            Our Story
          </p>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Building the Future
            <br />
            of Engineering{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f14625, #ff8c42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We started with a simple belief: every aspiring engineer deserves
            access to world-class, industry-relevant training — regardless of
            where they come from.
          </p>
        </div>
      </header>

      {/* ── The Origin Story ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#f14625" }}
              >
                How It All Began
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                From a Classroom Dream to a Movement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Slonix Solutions was born out of a deeply personal frustration.
                Our founders — practicing engineers and educators — saw
                firsthand how traditional education was failing to keep pace
                with the demands of modern industry. Students were graduating
                with theoretical knowledge but lacking the hands-on skills
                employers actually needed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                So we asked ourselves: what if we could bridge that gap? What if
                every student could learn the exact tools, techniques, and
                workflows used in real engineering teams — CATIA, SolidWorks,
                MATLAB, Python, and more?
              </p>
              <p className="text-gray-600 leading-relaxed">
                That question became our mission. And Slonix Solutions was born.
              </p>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{ minHeight: "380px" }}
            >
              <img
                src={powerImg}
                alt="Slonix team at work"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Founded by engineers who've done it
                </p>
                <p className="text-white/70 text-sm mt-1">
                  Not just taught it — lived it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision, Mission, Motto — Bento Grid ── */}
      <section className="py-20 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#f14625" }}
            >
              What Drives Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Vision · Mission · Motto
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Vision Card — spans 2 cols */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:col-span-2 lg:col-span-2 group hover:-translate-y-1 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: "240px",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f14625, transparent)",
                }}
              />
              <div
                className="orb-float-1 absolute w-40 h-40 rounded-full opacity-20 pointer-events-none"
                style={{
                  top: "-20%",
                  right: "-5%",
                  background:
                    "radial-gradient(circle, #f14625, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(241,70,37,0.12)",
                    border: "1px solid rgba(241,70,37,0.25)",
                  }}
                >
                  <Eye className="w-7 h-7" style={{ color: "#f14625" }} />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                  To become India's most trusted engineering education platform
                  — where every student, regardless of background, can gain the
                  practical skills needed to launch a successful career in
                  engineering and technology.
                </p>
              </div>
            </div>

            {/* Motto Card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: "240px",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #a855f7, transparent)",
                }}
              />
              <div
                className="orb-float-3 absolute w-32 h-32 rounded-full opacity-20 pointer-events-none"
                style={{
                  bottom: "-15%",
                  right: "-10%",
                  background:
                    "radial-gradient(circle, #a855f7, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <Sparkles className="w-7 h-7" style={{ color: "#a855f7" }} />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Our Motto
                </h3>
                <p
                  className="text-2xl font-black italic leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #c084fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  "Learn. Build. Launch."
                </p>
              </div>
            </div>

            {/* Mission Card — spans full width */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:col-span-2 lg:col-span-3 group hover:-translate-y-1 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #06b6d4, transparent)",
                }}
              />
              <div
                className="orb-float-2 absolute w-48 h-48 rounded-full opacity-15 pointer-events-none"
                style={{
                  top: "-25%",
                  left: "40%",
                  background:
                    "radial-gradient(circle, #06b6d4, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    border: "1px solid rgba(6,182,212,0.25)",
                  }}
                >
                  <Target className="w-7 h-7" style={{ color: "#06b6d4" }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    To empower aspiring engineers with industry-relevant skills
                    through hands-on, project-based training. We bridge the gap
                    between academic learning and real-world engineering demands
                    by providing comprehensive courses in CAD, CAE, programming,
                    and emerging technologies — taught by professionals who've
                    worked in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#f14625" }}
            >
              Our Core Values
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Excellence",
                description:
                  "We maintain the highest standards in curriculum design, instruction quality, and student outcomes.",
                color: "#f14625",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We constantly evolve our teaching methods and curriculum to stay ahead of industry trends.",
                color: "#f59e0b",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "We believe every student deserves access to quality education, regardless of their background.",
                color: "#06b6d4",
              },
              {
                icon: Heart,
                title: "Impact",
                description:
                  "We measure success not by revenue but by lives transformed and careers launched.",
                color: "#a855f7",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${value.color}12`,
                    border: `1px solid ${value.color}30`,
                  }}
                >
                  <value.icon
                    className="w-6 h-6"
                    style={{ color: value.color }}
                  />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#f14625" }}
            >
              The Slonix Difference
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Why We're Different
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We don't just teach — we transform. Here's what sets Slonix apart
              from every other training platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket,
                title: "Industry-First Curriculum",
                description:
                  "Our courses are designed in collaboration with working engineers and industry experts. Every module is built around real tools and real workflows — CATIA, SolidWorks, MATLAB, Python, and more.",
              },
              {
                icon: Shield,
                title: "Hands-On Project Learning",
                description:
                  "Theory is important, but practice is everything. Every course includes guided capstone projects, portfolio pieces, and real-world problem-solving exercises.",
              },
              {
                icon: Users,
                title: "Mentorship & Career Support",
                description:
                  "Our support doesn't end at certification. We provide career guidance, resume building, interview preparation, and placement assistance to help you land your dream role.",
              },
              {
                icon: Target,
                title: "Proven Results",
                description:
                  "With 100+ successful placements and counting, our track record speaks for itself. Our students go on to work at top engineering firms and tech companies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(241,70,37,0.08)",
                    border: "1px solid rgba(241,70,37,0.2)",
                  }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#f14625" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #f14625, #e03a1b)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of engineers who transformed their careers with Slonix
            Solutions. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ color: "#f14625" }}
            >
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Slonix Solutions. All rights reserved.
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
            <Link
              to="/"
              className="text-gray-500 text-xs hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
