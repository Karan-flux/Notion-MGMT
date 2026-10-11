export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  alt: string;
  focusArea: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  reach: string;
  engagement: string;
  shares: string;
  image: string;
  summary: string;
  detailedStrategy: string;
  platforms: string[];
  highlight: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  tactics: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  excerpt: string;
  fullBody: string[];
  image: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "creator-campaigns",
    number: "01",
    title: "CREATOR CAMPAIGNS",
    tagline: "Culture-first creator partnerships that resonate",
    description: "Creator-led campaigns built around the people, formats, and communities that genuinely influence audiences. We avoid cookie-cutter influencer deals in favor of authentic cultural curators who shape taste.",
    deliverables: [
      "Custom Creator Curation & Vetting",
      "Creative Concepting & Brief Architecture",
      "Native Storytelling & Sound Alignment",
      "Full Rights Management & Performance Tracking"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Creator-Campaigns-Selfiess.png?w=1200&h=900&q=85&fm=webp",
    alt: "Creator Campaigns and authentic short-form content",
    focusArea: "Influence & Reach"
  },
  {
    id: "content-seeding",
    number: "02",
    title: "CONTENT SEEDING",
    tagline: "Distributing moments into the feeds where conversations happen",
    description: "Putting content into the right communities, editorial channels, niche discord/telegram nodes, and social feeds to help it travel far beyond an existing audience into mainstream cultural dialogue.",
    deliverables: [
      "Cross-Platform Editorial Seeding",
      "Underground & Niche Community Insertion",
      "Algorithm Sparking & Sound Propagation",
      "Viral Momentum Acceleration"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/chase-status-london-stash-vwmnrqxfom.avif?w=1200&h=900&q=85&fm=webp",
    alt: "Content Seeding across underground and cultural music circles",
    focusArea: "Discovery & Spread"
  },
  {
    id: "social-media-management",
    number: "03",
    title: "SOCIAL MEDIA MANAGEMENT",
    tagline: "Building unmistakable online presence that compounds daily",
    description: "Social strategy, creative direction, daily content creation, and community growth designed to build a distinctive online identity and turn passive scrollers into hyper-invested fans.",
    deliverables: [
      "Brand Narrative & Visual Tone-of-Voice",
      "Platform-Specific Content Production",
      "Community Nurturing & Daily Engagement",
      "Audience Conversion & Retention Loops"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Luuk-Van-Dijk.jpg?w=1200&h=900&q=85&fm=webp",
    alt: "Social Media Management for touring artists and brands",
    focusArea: "Channel Mastery"
  },
  {
    id: "artist-channels",
    number: "04",
    title: "ARTIST CHANNELS",
    tagline: "Dedicated fan-page networks creating multiple discovery funnels",
    description: "Managed fan-page networks and dedicated social communities built around artists and entertainment properties, creating continuous secondary routes to discovery and cultural immersion.",
    deliverables: [
      "Fan Page Ecosystem Infrastructure",
      "Archive & Live Footage Repurposing",
      "Decentralized Discovery Multipliers",
      "Fan Loyalty & Ticket/Streaming Conversion"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/5b7d8235-7faf-4bba-a155-811a233e0a06.png?w=1200&h=900&q=85&fm=webp",
    alt: "Artist Channels and decentralized fan ecosystem",
    focusArea: "Community Architecture"
  },
  {
    id: "event-campaigns",
    number: "05",
    title: "EVENT CAMPAIGNS",
    tagline: "Building anticipation before, excitement during, and FOMO after",
    description: "Creator and community-led campaigns designed to build palpable demand, ignite tickets sales, and extend the cultural footprint of live festivals and club nights far beyond the doors closing.",
    deliverables: [
      "Pre-Event Anticipation & Lineup Drops",
      "On-Site Creator Hubs & Live Activations",
      "Instant Post-Show FOMO Distribution",
      "Year-Round Community Retention"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/EEFEST.jpg?w=1200&h=900&q=85&fm=webp",
    alt: "Event Campaigns and live festival activations",
    focusArea: "Live Experiences"
  },
  {
    id: "content-capture",
    number: "06",
    title: "CONTENT CAPTURE & SHOOTS",
    tagline: "High-spec, phone-first visual assets engineered for the FYP",
    description: "Capturing the raw energy around an artist, show, or campaign from the perspective of the crowd and behind the curtain. One strategic shoot provides an entire campaign's worth of platform-native assets.",
    deliverables: [
      "Multi-Angle Phone-First Live Capture",
      "High-Impact Narrative Studio Sessions",
      "Rapid-Turnaround Social Cuts & Hooks",
      "Asset Vaults for 60-Day Rollouts"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/D38-x-Woodcamp-Graffiti.jpg?w=1200&h=900&q=85&fm=webp",
    alt: "Content capture and editorial campaign production",
    focusArea: "Production & Direction"
  },
  {
    id: "viral-moments",
    number: "07",
    title: "VIRAL MOMENTS & ACTIVATIONS",
    tagline: "Physical spectacles engineered for digital obsession",
    description: "Original, attention-grabbing physical activations designed to cause a stir in the real world — then captured, chopped, and seeded for exponential algorithmic traction across platforms.",
    deliverables: [
      "Guerrilla Stunts & Pop-Up Installations",
      "Interactive Real-World Audio/Visual Drops",
      "Influencer Infiltration Tactics",
      "Press & Digital Culture Cross-Pollination"
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/VIRAL.png?w=1200&h=900&q=85&fm=webp",
    alt: "Viral moments and creative street activations",
    focusArea: "Stunts & Culture Jams"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "franky-rizardo",
    title: "Franky Rizardo",
    subtitle: "Shinjuku",
    category: "CREATOR CAMPAIGN",
    reach: "27M+",
    engagement: "7.4%",
    shares: "1M+",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/Franky-Rizardo-Instagram.jpg?w=1400&h=800&q=85&fm=webp",
    summary: "A multifaceted short-form creator campaign engineered around the global club anthem 'Shinjuku', driving club culture into TikTok and Instagram FYP feeds worldwide.",
    detailedStrategy: "By activating premier electronic music creators, dancers, and club culture tastemakers across London, Amsterdam, and Ibiza, NOTION orchestrated a sync explosion that turned 'Shinjuku' into the soundtrack of summer nightlife. Over 1 million organic shares propelled the release directly into global streaming charts.",
    platforms: ["TikTok", "Instagram Reels", "YouTube Shorts", "SoundCloud"],
    highlight: "1M+ organic shares drove 'Shinjuku' onto Spotify's Viral 50 across 8 territories."
  },
  {
    id: "alan-fitzpatrick",
    title: "Alan Fitzpatrick",
    subtitle: "We Do What We Want",
    category: "CREATOR CAMPAIGN",
    reach: "18M+",
    engagement: "6.8%",
    shares: "520K+",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/alan-fitzpatrick-inflyte-interview-002.webp?w=1400&h=800&q=85&fm=webp",
    summary: "Reigniting an iconic underground dance track through modern rave nostalgia, DJ booth capture, and soundbite-driven creator culture.",
    detailedStrategy: "Harnessing high-octane live tour recordings, backstage access, and DJ booth perspectives, NOTION structured an energetic audio-first campaign that connected techno purists with Gen Z festival attendees. The campaign reinforced Fitzpatrick's position as an essential headliner.",
    platforms: ["TikTok", "Instagram", "Beatport", "Apple Music"],
    highlight: "Repurposed live audio generated over 15,000 user-generated video creations."
  },
  {
    id: "temper-city",
    title: "Temper City",
    subtitle: "Self Aware",
    category: "CREATOR CAMPAIGN",
    reach: "23M+",
    engagement: "7.3%",
    shares: "700K+",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/Tmper-City.webp?w=1400&h=800&q=85&fm=webp",
    summary: "Strategic narrative storytelling and relatable creator hooks that transformed a breakthrough indie electronic release into an organic viral sensation.",
    detailedStrategy: "Rather than pushing the song as a conventional track promo, NOTION seeded the vocal hook into mood-based video formats, late-night driving clips, and relationship anecdotes. The conversational relatability caused audience retention to skyrocket, yielding 23 million impressions with 7.3% average engagement.",
    platforms: ["TikTok", "Instagram Reels", "Spotify Canvas"],
    highlight: "Surpassed 23 million impressions with zero paid ad spend on traditional banner ads."
  },
  {
    id: "eastern-electrics",
    title: "Eastern Electrics",
    subtitle: "Festival Campaign",
    category: "EVENT CAMPAIGN",
    reach: "1.6M+",
    engagement: "6.2%",
    shares: "7K+",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/EEFEST.jpg?w=1400&h=800&q=85&fm=webp",
    summary: "Full-lifecycle festival campaign driving pre-sale sellouts, high-intensity live on-site phone capture, and post-event hype preservation.",
    detailedStrategy: "Targeted London rave communities with lineup video drops, behind-the-decks artist previews, and on-the-ground mobile videographers capturing the authentic spirit of the crowd. Real-time content editing ensured that sets were published while attendees were still buzzing.",
    platforms: ["Instagram", "TikTok", "Resident Advisor", "WhatsApp Community"],
    highlight: "Contributed to record pre-registration figures and rapid tier-1 ticket sellout."
  },
  {
    id: "superman-soundtrack",
    title: "Superman",
    subtitle: "Original Motion Picture Soundtrack",
    category: "FILM & TELEVISION",
    reach: "32M+",
    engagement: "8.1%",
    shares: "1.2M+",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Office/Superman2025MovieBanner1.webp?w=1400&h=800&q=85&fm=webp",
    summary: "High-concept cultural campaign connecting orchestral themes with modern creator culture, fan art communities, and cinematic anticipation.",
    detailedStrategy: "Developed custom creative treatments positioning iconic musical motifs as dramatic backdrops for digital creators, cinema reviewers, and pop-culture commentators. Bridged classic cinematic nostalgia with contemporary internet humor and dramatic storytelling.",
    platforms: ["TikTok", "Instagram Reels", "YouTube", "Letterboxd"],
    highlight: "Orchestrated soundtrack motifs trended organically across cinema and superhero fan communities."
  }
];

export const STRATEGIC_APPROACH: ApproachStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    headline: "Unpacking Culture, Audience & Sound",
    description: "We don't guess what will work. We deeply analyze the cultural context, sonic identity, audience behaviors, and active platform communities to discover authentic conversation angles.",
    deliverables: [
      "Audience Persona & Subculture Mapping",
      "Platform Trend & Audio Viability Analysis",
      "Competitor & White-Space Positioning"
    ],
    tactics: ["Community Listening", "Sound Indexing", "Niche Identification"]
  },
  {
    number: "02",
    title: "CREATE",
    headline: "Concepting Ideas That Stop The Scroll",
    description: "Developing platform-native creative concepts that feel completely natural to how people consume entertainment today — never looking like an ad or a forced marketing broadcast.",
    deliverables: [
      "Short-Form Concept Playbooks",
      "Hook Architecture & Audio Cues",
      "Visual Direction & Creative Guidelines"
    ],
    tactics: ["Narrative-First Framing", "Cultural Parody & Realism", "Visual Pacing"]
  },
  {
    number: "03",
    title: "DISTRIBUTE",
    headline: "Mobilizing Creators & Community Nodes",
    description: "Activating curated creators, trusted tastemakers, and niche community channels to seed content directly into the feeds of audiences most predisposed to care and share.",
    deliverables: [
      "Tiered Creator Roster Deployment",
      "Editorial Community Placement",
      "Real-Time Campaign Orchestration"
    ],
    tactics: ["Algorithmic Momentum Seeding", "Decentralized Posting Waves", "Direct DM Distribution"]
  },
  {
    number: "04",
    title: "AMPLIFY",
    headline: "Compounding Attention Into Fan Equity",
    description: "Extending conversations, spinning off secondary content waves, nurturing artist fan networks, and locking in lasting audience loyalty that continues long after the launch week.",
    deliverables: [
      "Secondary Wave Remixes & Duets",
      "Fan-Page Community Aggregation",
      "Streaming & Ticket Conversion Optimization"
    ],
    tactics: ["User-Generated Reaction Engine", "Sound Preservation", "Audience Retargeting"]
  }
];

export const EDITORIAL_ARTICLES: ArticleItem[] = [
  {
    id: "artist-led-content",
    title: "Why Artist-Led Content is Driving Music Discovery",
    category: "INDUSTRY INSIGHT",
    readTime: "3 min read",
    author: "Lauren Good",
    authorRole: "Co-Founder, NOTION MGMT",
    authorAvatar: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/Lauren-Good.jpg?w=200&h=200&q=85&fm=webp",
    date: "Autumn 2026",
    excerpt: "The strongest music campaigns don't always start with third-party creators. RAYE's breakout momentum shows what happens when artists build the narrative first.",
    fullBody: [
      "For years, music marketing followed a predictable formula: pay 50 influencers to dance to a 15-second snippet and pray the algorithm bites. But in 2026, audience skepticism is at an all-time high.",
      "Audiences can smell transactional promotion from a mile away. When RAYE teased 'Where Is My Husband!', she didn't brief influencers first. She brought her camera into the rehearsal room, articulated the vulnerable story behind the song, and invited fans into her creative struggle.",
      "By the time the track officially dropped, fans had already co-authored the narrative. When third-party creators finally joined in, they weren't running an ad — they were joining a cultural conversation that was already raging.",
      "The lesson for labels and managers is clear: creator campaigns work best when they amplify an authentic flame, not when they try to manufacture a spark out of thin air."
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Logos/GettyImages-2246688172.webp?w=1200&h=675&q=85&fm=webp"
  },
  {
    id: "music-video-evolution",
    title: "Why The Music Video Can't Carry The Campaign Anymore",
    category: "CREATIVE STRATEGY",
    readTime: "4 min read",
    author: "Lauren Good",
    authorRole: "Co-Founder, NOTION MGMT",
    authorAvatar: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/Lauren-Good.jpg?w=200&h=200&q=85&fm=webp",
    date: "Winter 2026",
    excerpt: "Dropping £50,000 on a single 3-minute video that lands with a whimper is dead. Here is how modern music rollouts create 100 narrative touchpoints instead.",
    fullBody: [
      "Traditional music videos once dictated MTV programming and anchored the entire marketing budget of a record label. Today, a pristine 4K video dropped on YouTube on Friday often gets lost in the noise by Sunday morning.",
      "Audiences discover music in vertical, 9:16 environments while riding the tube, scrolling in bed, or walking between lectures. They don't want a distant, glossy production; they want proximity, intimacy, and replayability.",
      "Instead of putting 90% of production budgets into one hero visual, forward-thinking teams are allocating resources toward multi-angle content shoots, phone-first BTS, acoustic takes, and narrative creator briefs.",
      "When one shoot yields 60 bespoke vertical assets that test different hooks, storylines, and tempos, you increase your chances of cultural resonance tenfold."
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Logos/1784901356726.jpeg?w=1200&h=900&q=85&fm=webp"
  },
  {
    id: "fan-ecosystems",
    title: "Attention is Temporary: Why Repeatable Fan Ecosystems Win",
    category: "COMMUNITY STRATEGY",
    readTime: "3 min read",
    author: "Ben Good",
    authorRole: "Co-Founder, NOTION MGMT",
    authorAvatar: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/WhatsApp-Image-2026-09-08-at-12.11.46-PM.jpeg?w=200&h=200&q=85&fm=webp",
    date: "Late 2026",
    excerpt: "Algorithmic reach is rented land. Discover how decentralized artist channels and owned community hubs turn fleeting viral spikes into career longevity.",
    fullBody: [
      "A viral video can give you 5 million views today and leave you with zero ticket sales tomorrow. That's because attention is passive, but community is active.",
      "At NOTION MGMT, we design 'Fan Ecosystems'. We establish managed fan-page networks that run parallel to the artist's main profile. These channels spotlight unreleased demos, archive live sets, and fan interactions without cluttering the primary artist feed.",
      "When an artist drops a new project, they don't have to start from scratch. They have an interconnected web of dedicated communities ready to activate, repost, and ignite the algorithm across multiple entry points.",
      "Don't build your house solely on rented algorithmic soil. Build an ecosystem that your fans actively defend and cultivate."
    ],
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/10eaa7ad6154267523e8b4c62b190dccd731d02a.jpg?w=1200&h=675&q=85&fm=webp"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Lauren Good",
    role: "Co-Founder & Strategic Director",
    bio: "Leads business strategy and creative direction across music, entertainment, and cultural brands. Focuses on developing campaigns that connect creativity, creators, and culture.",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/Lauren-Good.jpg?w=800&h=1067&q=85&fm=webp",
    linkedin: "https://www.linkedin.com/in/laurenhgood/"
  },
  {
    name: "Ben Good",
    role: "Co-Founder & Operations",
    bio: "Co-founded NOTION MGMT to bring strategic rigour and repeatable growth systems to digital entertainment and creator-driven campaigns.",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/WhatsApp-Image-2026-09-08-at-12.11.46-PM.jpeg?w=800&h=1067&q=85&fm=webp",
    linkedin: "https://uk.linkedin.com/company/notion-mgmt"
  },
  {
    name: "Sam Good",
    role: "Co-Founder & Growth",
    bio: "Pioneers fan ecosystem development, decentralized artist discovery networks, and high-growth creator community strategies.",
    image: "https://notion-mgmt.transforms.svdcdn.com/production/images/Team/Maria-Petrisor.jpg?w=800&h=1067&q=85&fm=webp",
    linkedin: "https://uk.linkedin.com/company/notion-mgmt"
  }
];

export const CLIENT_LOGOS = [
  { name: "Sony Music", category: "Major Record Label" },
  { name: "Warner Music", category: "Global Entertainment" },
  { name: "Defected Records", category: "Electronic Music Powerhouse" },
  { name: "Ministry of Sound", category: "Nightlife & Music Brand" },
  { name: "Eastern Electrics", category: "UK Festival" },
  { name: "Parlophone", category: "Iconic British Label" },
  { name: "Toolroom Records", category: "Dance Label & Events" },
  { name: "Armada Music", category: "Global Electronic Music" }
];
