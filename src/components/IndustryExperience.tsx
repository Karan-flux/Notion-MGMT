import React from 'react';
import { CLIENT_LOGOS } from '../data/notionData';
import { Disc3, Music2, Clapperboard, PartyPopper, Users2, Sparkles, Building2 } from 'lucide-react';

export const IndustryExperience: React.FC = () => {
  const sectors = [
    {
      title: "Electronic & Live Music",
      description: "From underground club anthems to mainstream festival stages across London, Amsterdam, and Ibiza.",
      icon: Music2,
      tags: ["Track Rollouts", "Sync Acceleration", "DJ Booth Capture"]
    },
    {
      title: "Record Labels & Imprints",
      description: "Collaborating with major record labels and legendary independent dance imprints to reignite catalogues and launch new talent.",
      icon: Disc3,
      tags: ["Catalogue Revival", "Release Campaigns", "Artist Development"]
    },
    {
      title: "Live Events & Festivals",
      description: "Driving ticket pre-registrations, building crowd anticipation, and providing instant on-site mobile video capture.",
      icon: PartyPopper,
      tags: ["Lineup Drops", "On-Site Content Hubs", "Post-Event FOMO"]
    },
    {
      title: "Film & Television",
      description: "Connecting cinematic original motion picture soundtracks with contemporary creator discourse and fan communities.",
      icon: Clapperboard,
      tags: ["Soundtrack Sync", "Pop-Culture Narrative", "Fan Art Mobilization"]
    },
    {
      title: "Creator Networks",
      description: "Direct access to Europe's most influential sound tastemakers, dance creators, cultural reviewers, and nightlife curators.",
      icon: Users2,
      tags: ["Curated Rosters", "Platform Native Formats", "Sound Seeding"]
    },
    {
      title: "Cultural Consumer Brands",
      description: "Embedding lifestyle, apparel, and beverage brands into genuine music subcultures without feeling like intrusive advertising.",
      icon: Building2,
      tags: ["Guerrilla Activations", "VIP Tastemaker Seeding", "Event Integration"]
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#09090B] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CROSS-SECTOR SPECIALISM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
            WHERE CULTURE MEETS <span className="text-[#AAE41B]">CONNECTION.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            We operate at the exact intersection of contemporary music, internet
            subcultures, entertainment properties, and live event fanaticism.
          </p>
        </div>

        {/* Sectors Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#AAE41B]/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#AAE41B]/15 text-[#AAE41B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading uppercase text-white font-bold mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Industry Footprint Marquee / Roster Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121216] border border-white/15 relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              TRUSTED BY &amp; COLLABORATING ACROSS LEADING LABELS &amp; FESTIVALS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#AAE41B]/40 transition-colors"
              >
                <div className="font-heading uppercase text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase mt-1">
                  {client.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
