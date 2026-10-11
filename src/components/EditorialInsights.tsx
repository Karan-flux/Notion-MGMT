import React, { useState } from 'react';
import { EDITORIAL_ARTICLES, type ArticleItem } from '../data/notionData';
import { ArrowUpRight, Clock, X, BookOpen, Sparkles } from 'lucide-react';

export const EditorialInsights: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const featured = EDITORIAL_ARTICLES[0];
  const sideArticles = EDITORIAL_ARTICLES.slice(1);

  return (
    <section id="insights" className="relative w-full py-20 lg:py-32 bg-[#0C0C10] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
              <span className="w-8 h-px bg-[#AAE41B]" />
              <span>THE EDITORIAL DESK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
              WHAT'S MOVING.{" "}
              <span className="text-[#AAE41B] block">WHAT'S NEXT.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Observations, tactical essays, and cultural post-mortems from the
            frontlines of music marketing and creator communities.
          </p>
        </div>

        {/* Magazine-Inspired Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Featured Large Spread (Left - 7 cols) */}
          <div
            onClick={() => setActiveArticle(featured)}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-[#AAE41B]/50 flex flex-col justify-between"
          >
            <div className="relative w-full aspect-16/10 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
              
              <div className="absolute top-5 left-5 z-20">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase font-bold tracking-widest bg-black/80 backdrop-blur-md text-[#AAE41B] border border-[#AAE41B]/30">
                  {featured.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#AAE41B]" />
                  <span>{featured.readTime}</span>
                </div>
                <span>•</span>
                <span>{featured.date}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading uppercase text-white font-bold leading-tight group-hover:text-[#AAE41B] transition-colors">
                {featured.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {featured.excerpt}
              </p>

              {/* Author & Read CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.authorAvatar}
                    alt={featured.author}
                    className="w-9 h-9 rounded-full object-cover border border-[#AAE41B]"
                  />
                  <div>
                    <div className="text-xs font-semibold uppercase text-white font-mono">
                      {featured.author}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      {featured.authorRole}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#AAE41B] uppercase tracking-wider group-hover:underline">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Side Editorial Stack (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#AAE41B]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#AAE41B] font-bold tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-zinc-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading uppercase text-white font-bold leading-tight group-hover:text-[#AAE41B] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{article.author}</span>
                  <span className="text-[#AAE41B] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}

            {/* Newsletter Callout Banner */}
            <div className="p-6 rounded-3xl bg-black border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-[#AAE41B] uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CULTURAL INTEL BRIEFING</span>
              </div>
              <h4 className="text-xl font-heading uppercase text-white font-bold mb-2">
                KEEP UP TO DATE WITH WHAT'S MOVING
              </h4>
              <p className="text-zinc-400 text-xs mb-4">
                Receive our quarterly breakdown on algorithmic trends and music culture.
              </p>
              <a
                href="mailto:info@notionmgmt.com?subject=Subscribe%20to%20Notion%20MGMT%20Briefing"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AAE41B] hover:text-white transition-colors"
              >
                <span>REQUEST CULTURAL BRIEFING VIA EMAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Full Editorial Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111115] border border-white/20 p-6 sm:p-10 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#AAE41B] hover:text-black flex items-center justify-center transition-all cursor-pointer z-30"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#AAE41B] uppercase tracking-widest">
                <BookOpen className="w-4 h-4" />
                <span>{activeArticle.category} • {activeArticle.readTime}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading uppercase text-white font-bold leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src={activeArticle.authorAvatar}
                  alt={activeArticle.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#AAE41B]"
                />
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-white">
                    {activeArticle.author}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {activeArticle.authorRole}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden mb-8 border border-white/10">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed border-b border-white/10 pb-8">
              {activeArticle.fullBody.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500 uppercase">
                PUBLISHED BY NOTION MGMT • LONDON, UK
              </span>
              <a
                href="mailto:info@notionmgmt.com?subject=Discussing%20Editorial%20Insights"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#AAE41B] hover:text-white"
              >
                <span>DISCUSS THIS STRATEGY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
