import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Disc, Radio } from 'lucide-react';

interface HeroProps {
  onOpenContact: (defaultType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [londonTime, setLondonTime] = useState<string>('');
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const heroSlides = [
    {
      title: "Electronic & Festival Culture",
      tag: "LIVE EXPERIENCE",
      image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/03f98f0bfaa960c55cf32b1ec723fbe3d066855a.jpg?w=1600&h=900&q=85&fm=webp",
      meta: "LONDON • IBIZA • AMSTERDAM"
    },
    {
      title: "Creator-First Rollouts",
      tag: "CULTURAL SYNC",
      image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Creator-Campaigns-Selfiess.png?w=1200&h=900&q=85&fm=webp",
      meta: "SHORT-FORM ALGORITHM SPARKS"
    },
    {
      title: "Underground to Global Audio",
      tag: "MUSIC RELEASE",
      image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/Franky-Rizardo-Instagram.jpg?w=1400&h=800&q=85&fm=webp",
      meta: "27M+ REACH • 1M+ SHARES"
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setLondonTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-5 sm:px-8 xl:px-10 overflow-hidden bg-[#09090B]">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#AAE41B]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px]" />
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#AAE41B]/10 text-[#AAE41B] font-bold border border-[#AAE41B]/30">
            <Radio className="w-3 h-3 animate-pulse" />
            LIVE SIGNAL
          </span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="text-zinc-300 font-medium tracking-wider">
            INDEPENDENT THINKING. CULTURAL IMPACT. LONDON, UK.
          </span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#AAE41B]" />
            <span>LON {londonTime || '12:00:00'} GMT</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">/</span>
          <span className="hidden sm:inline text-zinc-400">EST. 2023</span>
        </div>
      </div>

      {/* Main Hero Centerpiece */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-end space-y-6 lg:space-y-8">
            {/* Tag / Micro Label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400">
              <span className="w-6 h-px bg-[#AAE41B]"></span>
              <span className="text-[#AAE41B] font-semibold">NOTION MGMT</span>
              <span>• CULTURE & CREATOR AGENCY</span>
            </div>

            {/* Main Required Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-heading font-bold uppercase tracking-tight text-white leading-[0.88] m-0">
              WE TURN ATTENTION INTO{" "}
              <span className="block text-[#AAE41B] transition-colors duration-300">
                LASTING AUDIENCE GROWTH
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed text-pretty">
              We build creator-first campaigns, digital communities, and social
              strategies that help artists, brands, and live experiences become
              impossible to ignore.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-[#AAE41B] text-black font-heading text-base md:text-lg uppercase tracking-wider font-bold px-7 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="w-4 h-4 text-black" />
                </span>
              </a>

              <button
                onClick={() => onOpenContact()}
                className="group inline-flex items-center gap-3 bg-white/5 border border-white/20 text-white font-heading text-base md:text-lg uppercase tracking-wider font-bold px-7 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
              >
                <span>LET'S TALK</span>
                <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>

              <div className="w-full sm:w-auto flex items-center gap-3 text-xs font-mono text-zinc-400 pl-1 sm:pl-4 sm:border-l sm:border-white/10 pt-2 sm:pt-0">
                <Disc className="w-4 h-4 text-[#AAE41B] animate-spin" style={{ animationDuration: '4s' }} />
                <span>MUSIC • FESTIVALS • CREATORS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Visual Stage */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
              {/* Slide Images */}
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
                </div>
              ))}

              {/* Top overlay badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest bg-black/75 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                  {heroSlides[activeSlide].tag}
                </span>
              </div>

              {/* Bottom overlay metadata */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono uppercase text-zinc-400">
                    {heroSlides[activeSlide].meta}
                  </span>
                  <div className="flex gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === activeSlide ? 'w-6 bg-[#AAE41B]' : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-lg font-heading uppercase text-white font-bold leading-tight">
                  {heroSlides[activeSlide].title}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-3 px-4 py-3 rounded-xl bg-[#09090B] border border-white/15 shadow-2xl">
              <div className="w-10 h-10 rounded-lg bg-[#AAE41B]/15 flex items-center justify-center text-[#AAE41B]">
                <Sparkles className="w-5 h-5 text-[#AAE41B]" />
              </div>
              <div className="text-left font-mono text-xs">
                <div className="text-white font-bold">100M+ COMBINED REACH</div>
                <div className="text-zinc-400 text-[10px]">REPEATABLE FAN ECOSYSTEMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Cue */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-6 border-t border-white/10 text-xs font-mono text-zinc-500 uppercase">
        <div className="flex items-center gap-6">
          <span>01 / 06 ARCHIVE SECTIONS</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline text-zinc-400">CREATOR MARKETING &amp; MUSIC STRATEGY</span>
        </div>

        <a
          href="#manifesto"
          className="group flex items-center gap-2 text-zinc-400 hover:text-[#AAE41B] transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
