import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown, ExternalLink } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: '#home', href: '#home', id: 'home' },
    { name: '#projects', href: '#projects', id: 'projects' },
    { name: '#skills', href: '#skills', id: 'skills' },
    { name: '#experience', href: '#experience', id: 'experience' },
    { name: '#certifications', href: '#certifications', id: 'certifications' },
    { name: '#about-me', href: '#about-me', id: 'about-me' },
    { name: '#contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#26283b] py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded border border-[#a855f7]/50 bg-[#12131c] flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold text-lg text-white group-hover:text-[#a855f7] transition-colors">
              Sushant<span className="text-[#a855f7]">_</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-sm transition-all duration-200 hover:text-[#c084fc] relative ${
                    isActive ? 'text-[#a855f7] font-semibold' : 'text-gray-400'
                  }`}
                >
                  <span className="text-[#a855f7]/70 mr-0.5">#</span>
                  {link.name.replace('#', '')}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a855f7] rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}

            <button
              onClick={onOpenResume}
              className="ml-2 font-mono text-xs px-3 py-1.5 rounded border border-[#a855f7] text-[#c084fc] hover:bg-[#a855f7]/10 transition-all flex items-center gap-1.5 group"
            >
              <span>Resume</span>
              <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="font-mono text-xs px-2.5 py-1 rounded border border-[#a855f7] text-[#c084fc]"
            >
              Resume ↓
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-300 hover:text-white hover:bg-[#12131c] border border-gray-800"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-[#a855f7]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0c10]/95 backdrop-blur-xl border-b border-[#26283b] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-mono text-base py-2 px-3 rounded hover:bg-[#12131c] text-gray-300 hover:text-[#c084fc]"
            >
              <span className="text-[#a855f7] mr-1">#</span>
              {link.name.replace('#', '')}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
