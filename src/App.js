import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Database, Globe, Briefcase, GraduationCap, User, Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: <Code className="w-6 h-6" /> },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'API Integration', 'Authentication'], icon: <Database className="w-6 h-6" /> },
    { category: 'Tools & Others', items: ['WordPress', 'Git', 'AI Tools', 'Prompt Engineering', 'Digital Marketing'], icon: <Globe className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'SmartBazaar',
      description: 'E-commerce platform with product promotion, digital marketing, and social media integration. Built with MERN stack.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      type: 'E-commerce'
    },
    {
      title: 'Full-Stack Web App',
      description: 'Responsive web application with user authentication, real-time features, and modern UI/UX design.',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT'],
      type: 'Web Application'
    },
    {
      title: 'WordPress Customization',
      description: 'Custom WordPress themes and plugins development with enhanced functionality and responsive design.',
      tech: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      type: 'CMS Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Areeb Ahmed
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Areeb Ahmed
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate full-stack developer from Pakistan with 1 year of experience building responsive websites, 
              interactive web applications, and scalable solutions using modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:areeb@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate MERN Stack Developer from Pakistan with strong expertise in both frontend and backend development. 
                With 1 year of hands-on experience, I specialize in building responsive websites, interactive web applications, 
                and scalable full-stack projects.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I have a growing interest in AI tools and prompt engineering, which I actively use to boost productivity 
                and deliver modern solutions. My experience also extends to business and e-commerce, having worked on 
                projects like SmartBazaar.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing a Computer Science degree while continuously improving my technical and professional 
                skills through real-world projects, internships, and online learning.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-300">Computer Science Degree (In Progress)</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">1+ Year in MERN Stack Development</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <MapPin className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-3">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Strengths
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'MERN Stack Development (Frontend & Backend)',
              'WordPress & Web Customization',
              'API Integration & Authentication',
              'Team Collaboration & Communication',
              'Problem Solving & Attention to Detail',
              'AI Tools & Prompt Engineering'
            ].map((strength, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300">{strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                  </div>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm mb-4">
                    {project.type}
                  </span>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm eager to grow in a professional environment where I can contribute to impactful projects, 
            learn from industry experts, and build innovative digital solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">areeb@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+92 XXX XXXXXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Pakistan</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>
            <button className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 mb-4">
            © 2025 Areeb Ahmed. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:areeb@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
