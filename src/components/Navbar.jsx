import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Médecin', href: '#medecin' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <span className="text-2xl font-bold tracking-tight text-brand-dark">
            EL RAPHA
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark/70 hover:text-brand-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary flex items-center space-x-2 px-5 py-2.5">
            <Phone size={18} />
            <span>Prendre rendez-vous</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-brand-dark/80 px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary w-full py-3 flex items-center justify-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={20} />
            <span>Prendre rendez-vous</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
