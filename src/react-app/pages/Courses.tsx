import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, Clock, Award, ChevronLeft } from 'lucide-react';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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
            <Link to="/courses" className="text-red-600 font-semibold">Courses</Link>
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
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors mb-6 font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">Courses</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore our comprehensive collection of engineering, software development, AI, and design courses. Each program is designed to equip you with practical, job-ready skills.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all overflow-hidden shadow-sm hover:shadow-xl"
              >
                <Link to={`/courses/${course.id}`} className="relative h-48 overflow-hidden block">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`} />
                </Link>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium mb-3 border border-red-200">
                    {course.category}
                  </div>
                  
                  <Link to={`/courses/${course.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-red-600 transition-colors cursor-pointer" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {course.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-red-600" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative bg-gradient-to-r from-red-600 to-red-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join thousands of students who have launched their careers with Slonix Solutions
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
      <footer className="py-12 px-6 border-t-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoUrl} 
                alt="Slonix Solutions" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="/#contact" className="hover:text-red-600 transition-colors font-medium">Privacy</a>
              <a href="/#contact" className="hover:text-red-600 transition-colors font-medium">Terms</a>
              <a href="/#contact" className="hover:text-red-600 transition-colors font-medium">Contact</a>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 Slonix Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
