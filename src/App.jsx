import React from 'react';
import { Menu, X, Github, Linkedin, Youtube, FileText, Video, Mail } from 'lucide-react';
import { useState } from 'react';
import Image from '../src/assets/image.jpeg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "3+", label: "Certifications" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AI/ML",
    "Virtual Assistant"
  ];

  const portfolioItems = [
    {
      title: "Phase 2 Project",
      description: "Team collaboration project showcasing full-stack development skills",
      links: [
        { icon: <Video className="w-4 h-4" />, text: "Watch Demo", url: "#" },
        { icon: <FileText className="w-4 h-4" />, text: "View Slides", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0a1930] to-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold">EAA</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center font-medium space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
              <a href="#elevator-pitch" className="text-gray-300 hover:text-white">Elevator Pitch</a>
              <a href="#contact" className="px-4 py-2 bg-[#e94444] text-white rounded hover:bg-[#d43d3d] transition-colors">
                Contact Me
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden font-medium bg-[#0a192f]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-300">About</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-300">Portfolio</a>
              <a href="#elevator-pitch" className="block px-3 py-2 text-gray-300">Elevator Pitch</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl mb-4">Hey! This is</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Enock Acquah Adomanu
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Software Engineer | AI Enthusiast | Virtual Assistant Specialist
              </p>
              <div className="flex space-x-4">
                <a href="https://www.google.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src={Image}
                alt="Profile"
                className="w-80 h-80 object-cover mx-auto rounded-lg"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#e94444] rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#e94444] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#e94444] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Bio Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#e94444]"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                I am a passionate Software Engineer with a focus on AI and virtual assistance technologies. I've completed the AI Career Essentials course from ALX Africa and am currently advancing my skills through the ALX pathway program. My journey in technology is driven by a desire to create innovative solutions that make a real difference.
              </p>
              <p className="text-gray-300 mt-4">
                With expertise in both traditional software development and emerging AI technologies, I bring a unique perspective to projects. My experience with virtual assistance has taught me the importance of creating intuitive, user-friendly solutions that enhance productivity and user experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop" 
                alt="Coding"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#0c1e3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="flex space-x-4">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="flex items-center space-x-2 text-[#e94444] hover:text-[#d43d3d]"
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-white/5 rounded-lg backdrop-blur-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevator Pitch Section */}
      <section id="elevator-pitch" className="py-20 bg-[#0c1e3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Elevator Pitch</h2>
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-gray-300 text-center italic">
              Coming soon! Check back later for my elevator pitch video.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0c1e3b] rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <form className="max-w-md mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e94444]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e94444]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e94444]"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#e94444] text-white rounded-lg hover:bg-[#d43d3d] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1e3b] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl font-bold">John Doe</div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              Copyright © John Doe 2024
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;