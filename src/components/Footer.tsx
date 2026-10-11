import React from 'react';
import { BrandWordmark } from './BrandWordmark';
import { ArrowUp, ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';
import { SERVICES } from '../data/notionData';

interface FooterProps {
  onOpenContact: (defaultType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#030304] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Decorative ambient gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#AAE41B]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Top Grid: Brand Statement + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <BrandWordmark className="h-6 sm:h-7 text-white" />
              </div>
              <p className="text-white/60 font-sans text-sm sm:text-base leading-relaxed max-w-sm mb-6">
                London-based digital marketing agency specialising in creator campaigns, music rollouts, live events, and cultural momentum.
              </p>
              
              <div className="flex items-center gap-2 text-xs font-mono text-[#AAE41B]">
                <span className="w-2 h-2 rounded-full bg-[#AAE41B] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#AAE41B] -ml-3" />
                <span>ACTIVE CAMPAIGNS ACROSS UK &amp; EUROPE</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/notionmgmt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#AAE41B] hover:text-black text-white flex items-center justify-center transition-all duration-300"
                aria-label="Notion MGMT on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@notionmgmt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#AAE41B] hover:text-black text-white flex items-center justify-center transition-all duration-300 font-mono font-bold text-xs"
                aria-label="Notion MGMT on TikTok"
              >
                TT
              </a>
              <a
                href="https://www.linkedin.com/company/notion-mgmt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#AAE41B] hover:text-black text-white flex items-center justify-center transition-all duration-300"
                aria-label="Notion MGMT on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://notionmgmt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#AAE41B] hover:text-black text-white flex items-center justify-center transition-all duration-300"
                aria-label="Live notionmgmt.com"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-5">NAVIGATION</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#manifesto" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#approach" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#insights" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Editorial Desk
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#AAE41B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-5">SERVICES</h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenContact(s.title)}
                    className="text-left text-white/70 hover:text-[#AAE41B] transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="truncate">{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#AAE41B]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Enquiries (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-5">HEADQUARTERS</h4>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#AAE41B] shrink-0 mt-0.5" />
                <span>
                  North London Studios<br />
                  The Ridgeway, London<br />
                  NW7 1RP, United Kingdom
                </span>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">GENERAL INQUIRIES</div>
                <a
                  href="mailto:info@notionmgmt.com"
                  className="text-white hover:text-[#AAE41B] transition-colors font-medium flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#AAE41B]" />
                  <span>info@notionmgmt.com</span>
                </a>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">FOUNDERS</div>
                <div className="text-xs text-white/60">
                  Lauren Good, Ben Good, Sam Good
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} NOTION MGMT LTD. ALL RIGHTS RESERVED.</span>
            <span className="text-white/20">•</span>
            <span className="text-[#AAE41B]/80">CONCEPT REDESIGN ELEVATION</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#AAE41B] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
