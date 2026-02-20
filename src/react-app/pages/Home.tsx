import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, BookOpen, Users, Award, TrendingUp, Zap, Wrench, Mail, Phone, MapPin } from 'lucide-react';
import { courses } from '@/data/courses';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: ''
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', course: '' });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-red-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png" 
              alt="Slonix Solutions" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Courses</Link>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Testimonials</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Industry-Focused Engineering Training
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
                Launch Real Careers
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Slonix Solutions delivers high-quality, industry-aligned training in advanced engineering tools and IT programs for college learners and job seekers. Our programs cover Full Stack Development, AI Mastery Suite, and Integrated Engineering Design & Automation, with a strong focus on practical skills, real-world projects, and career readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2"
              >
                GET STARTED NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#testimonials" 
                className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all border-2 border-red-600"
              >
                READ OUR STORY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Slonix */}
      <section className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Why Choose Slonix Solutions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to build a successful engineering career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Industry-Relevant Training',
                description: 'Learn engineering & design software that companies actually use'
              },
              {
                icon: Wrench,
                title: 'Hands-On Projects',
                description: 'Build real projects, not just watch videos and read theory'
              },
              {
                icon: TrendingUp,
                title: 'Beginner to Advanced',
                description: 'Structured learning paths that grow with your skills'
              },
              {
                icon: Users,
                title: 'Expert Mentors',
                description: 'Learn from engineering professionals with industry experience'
              },
              {
                icon: Award,
                title: 'Career-Focused Certification',
                description: 'Earn certificates that strengthen your resume'
              },
              {
                icon: CheckCircle2,
                title: 'Job-Ready Skills',
                description: 'Master the tools and workflows used in real companies'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all hover:shadow-lg hover:shadow-red-500/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-200">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section id="programs" className="py-20 px-6 relative bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              POPULAR PROGRAM
            </h2>
            <p className="text-xl text-gray-600">Master IT programs, engineering tools, AI, and design skills</p>
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`} />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium mb-3 border border-red-200">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all"
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
              className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all border-2 border-red-600 inline-block"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Students Trained', icon: Users },
              { number: '50+', label: 'Industry-Based Projects', icon: Wrench },
              { number: '100+', label: 'Placement Success Stories', icon: TrendingUp },
              { number: '18+', label: 'Engineering & Tech Courses', icon: BookOpen }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-red-100 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Your path to engineering excellence in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Course',
                description: 'Select based on your career goal and engineering domain'
              },
              {
                step: '02',
                title: 'Learn Practically',
                description: 'Hands-on sessions with guided real-world projects'
              },
              {
                step: '03',
                title: 'Build Skills',
                description: 'Develop industry-ready technical expertise'
              },
              {
                step: '04',
                title: 'Get Certified',
                description: 'Earn certification and receive career support'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
                    <span className="text-3xl font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
            <p className="text-2xl text-gray-900 font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Your engineering career starts with skills. Start today.
            </p>
            <a 
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              TESTIMONIALS
            </h2>
            <p className="text-xl text-gray-600">Hear from our successful students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for testimonial cards - content will be added later */}
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-100"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4" />
                <div className="h-24 bg-gray-100 rounded-lg mb-4" />
                <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Empowering the Next Generation
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Slonix Solutions, we believe that education is the most powerful tool for changing the world. Our mission is to democratize access to high-quality learning resources through technology.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by a team of educators and engineers, we understand the nuances of learning and the power of code.
              </p>
              
              <a 
                href="#testimonials" 
                className="inline-block px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-full font-semibold text-lg hover:bg-red-50 transition-all"
              >
                Read Our Story
              </a>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-gray-200">
                <svg 
                  viewBox="0 0 100 120" 
                  className="w-48 h-48 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M50 10 L10 30 L10 60 C10 90 50 110 50 110 C50 110 90 90 90 60 L90 30 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a 
              href="mailto:slonixbim.team@gmail.com"
              className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-red-200">
                <Mail className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Email Us
              </h3>
              <p className="text-gray-600 break-words">
                slonixbim.team@gmail.com
              </p>
            </a>

            <a 
              href="tel:9080211696"
              className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-red-200">
                <Phone className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Call Us
              </h3>
              <p className="text-gray-600">
                9080211696
              </p>
            </a>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Hustlehub+Tech+Park+Somasundarapalya+Main+Rd+adjacent+27th+Main+Road+ITI+Layout+Sector+2+Haralakunte+Village+HSR+Layout+Bengaluru+Karnataka+560102"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white backdrop-blur-sm border-2 border-red-100 hover:border-red-300 transition-all text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-red-200">
                <MapPin className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Visit Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hustlehub Tech Park, Somasundarapalya Main Rd, adjacent 27th Main Road, ITI Layout, Sector 2, Haralakunte Village, HSR Layout, Bengaluru, Karnataka 560102
              </p>
            </a>
          </div>

          <div className="mt-20 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-red-100 p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Schedule a Call
              </h3>
              <p className="text-gray-600 text-center mb-8">Fill out the form and we'll get back to you shortly</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="* Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="* Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="">Select a course (optional)</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="text-gray-700 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="* How can we help?"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img 
              src="https://019c1a08-daa1-7c8a-b634-ca9b54ba789f.mochausercontent.com/ChatGPT-Image-Jan-29-2026-02_25_29-AM.png" 
              alt="Slonix Solutions" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#contact" className="hover:text-red-600 transition-colors font-medium">Privacy</a>
              <a href="#contact" className="hover:text-red-600 transition-colors font-medium">Terms</a>
              <a href="#contact" className="hover:text-red-600 transition-colors font-medium">Contact</a>
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
