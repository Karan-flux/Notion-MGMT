import React, { useState, useEffect } from 'react';
import { BrandWordmark } from './BrandWordmark';
import { ArrowUpRight, Menu, X, Sparkles, MapPin, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Strategy', href: '#approach' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group text-white hover:text-[#AAE41B] transition-colors focus:outline-none"
            aria-label="NOTION MGMT - Return to top"
          >
            <BrandWordmark size="sm" className="text-white group-hover:text-[#AAE41B] transition-colors" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#AAE41B] animate-pulse"></span>
              <span>LDN • Q2/Q3 Available</span>
            </div>

            <button
              onClick={() => onOpenContact()}
              className="group inline-flex items-center gap-2 bg-[#AAE41B] text-black font-heading text-sm uppercase tracking-wider font-bold px-5 py-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#AAE41B] transition-all focus:outline-none cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#09090B]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-6 sm:p-10 pt-28 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#AAE41B] tracking-widest pb-3 border-b border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOTION MGMT • LONDON, UK</span>
          </div>

          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-between text-3xl sm:text-4xl font-heading uppercase text-white hover:text-[#AAE41B] transition-colors py-1"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-[#AAE41B] transition-colors">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-5">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#AAE41B] text-black font-heading text-lg uppercase tracking-wider font-bold py-4 rounded-xl hover:bg-white transition-all shadow-lg cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 text-black" />
          </button>

          <div className="grid grid-cols-2 gap-4 text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#AAE41B]" />
              <span>North London Studios</span>
            </div>
            <a
              href="mailto:info@notionmgmt.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#AAE41B]" />
              <span>info@notionmgmt.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/notionmgmt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@notionmgmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://uk.linkedin.com/company/notion-mgmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
