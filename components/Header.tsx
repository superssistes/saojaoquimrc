
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'Quem Somos' },
    { href: '#ajudar', label: 'Como Ajudar' },
    { href: '#programas', label: 'O Que Fazemos' },
    { href: '#historias-sucesso', label: 'Vidas Transformadas' },
    { href: '#faq', label: 'Atendimento' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/43xJ2bHK/logo-sao-joaquim-rm.png" 
            alt="Instituto São Joaquim Logo" 
            className={`w-auto transition-all duration-300 ease-in-out drop-shadow-sm ${
              isScrolled ? 'h-10' : 'h-14'
            }`} 
          />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-2 xl:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-stone-600 hover:text-amber-700 transition duration-300 hover:bg-white/50 px-4 py-2 rounded-full uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-600 hover:text-amber-700 focus:outline-none p-2 bg-white/50 rounded-full backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl animate-fade-in-down rounded-3xl shadow-xl mx-4 mt-2 p-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-amber-700 hover:bg-amber-50 px-4 py-3 rounded-xl transition duration-300 font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;