import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowRight, ChevronLeft, Clock, Award, Users, Star, CheckCircle2, BookOpen, PlayCircle, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { courses } from '@/data/courses';
import { useSEO } from '@/react-app/hooks/useSEO';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]));

  useSEO({
    title: course ? `${course.title} Course | Slonix Solutions` : "Course Details | Slonix Solutions",
    description: course ? `${course.description} Enroll in ${course.title} at Slonix Solutions. ${course.duration} program, ${course.level}. Get placed with hands-on training.` : "Explore engineering courses at Slonix Solutions.",
    canonical: course ? `https://slonix.in/courses/${course.id}` : "https://slonix.in/courses",
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link to="/courses" className="text-red-600 hover:text-red-700 font-semibold">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const logoUrl = 'https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png';

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
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Courses</Link>
            <a href="/#testimonials" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Testimonials</a>
            <a href="/#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
            <a href="/#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.2),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs font-medium mb-4 border border-red-500/30">
                {course.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {course.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-white font-semibold">{course.rating}</span>
                  <span className="text-gray-400">rating</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-5 h-5" />
                  <span className="text-white font-semibold">{course.students.toLocaleString()}</span>
                  <span>students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-5 h-5" />
                  <span className="text-white">{course.level}</span>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                Created by <span className="text-red-400 font-semibold">{course.instructor}</span>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-100">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white opacity-90 drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="p-6">
                  <Link
                    to={`/enroll/${course.id}`}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all text-center"
                  >
                    Enroll This Course
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm font-semibold text-gray-900 mb-3">This program includes:</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        Hands-on projects
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        Certificate of completion
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        Industry-aligned curriculum
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        Expert instructor support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-red-100 p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What you'll learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="bg-white rounded-2xl border-2 border-red-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => {
                    const isExpanded = expandedModules.has(index);
                    return (
                      <div key={index} className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-red-200 transition-colors">
                        <button
                          onClick={() => toggleModule(index)}
                          className={`w-full p-5 bg-gradient-to-r ${course.gradient} bg-opacity-5 hover:bg-opacity-10 transition-all text-left`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <ChevronDown 
                                className={`w-5 h-5 text-red-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              />
                              <h3 className="font-bold text-gray-900 text-lg">{module.module}</h3>
                            </div>
                            <BookOpen className="w-5 h-5 text-red-600" />
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="p-5 pt-0">
                            <ul className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Prerequisites */}
              <div className="bg-white rounded-2xl border-2 border-red-100 p-8 mt-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Prerequisites
                </h2>
                <ul className="space-y-3">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative bg-gradient-to-r from-red-600 to-red-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of successful students who have launched their careers with Slonix Solutions
          </p>
          <Link
            to={`/enroll/${course.id}`}
            className="group px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg"
          >
            Enroll This Course
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-16 pb-8" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/"><img src={logoUrl} alt="Slonix Solutions" className="h-10 w-auto object-contain mb-4" /></Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Empowering the next generation of engineers with industry-ready skills, hands-on projects, and career support.</p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/slonix_solutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/slonix-solutions/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/courses" className="text-gray-400 text-sm hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/our-story" className="text-gray-400 text-sm hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Legal</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Get in Touch</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                  <a href="mailto:slonixbim.team@gmail.com" className="hover:text-white transition-colors">slonixbim.team@gmail.com</a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                  <a href="tel:+919080211696" className="hover:text-white transition-colors">+91 90802 11696</a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f14625" }} />
                  <span>Hustlehub Tech Park, HSR Layout, Bengaluru 560102</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Slonix Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-and-conditions" className="text-gray-500 text-xs hover:text-white transition-colors">Terms</Link>
              <Link to="/#contact" className="text-gray-500 text-xs hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
