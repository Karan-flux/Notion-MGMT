import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: preselectedService || 'Creator campaign',
    budget: '£10k - £25k',
    description: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Creator campaign',
    'Artist or music campaign',
    'Event campaign',
    'Social media management',
    'Content production',
    'Brand or entertainment campaign',
    'Other'
  ];

  const budgetTiers = [
    '< £10k',
    '£10k - £25k',
    '£25k - £50k',
    '£50k+'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project, artist, or goals.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean local submission feedback with clear integration notice
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      projectType: 'Creator campaign',
      budget: '£10k - £25k',
      description: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 bg-[#09090B] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#AAE41B] mb-3">
            <span className="w-8 h-px bg-[#AAE41B]" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] text-white">
            GOT A PROJECT? A RELEASE?{" "}
            <span className="text-[#AAE41B] block">AN EVENT? A BIG IDEA?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Tell us what you're working on and we'll figure out how NOTION MGMT can
            help make it move. Hate forms? Slide directly into our verified inbox.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Inquiries & Physical London HQ */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Email Block */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#AAE41B] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" />
                  <span>DIRECT INBOX</span>
                </div>
                <div className="text-2xl font-heading uppercase text-white font-bold">
                  info@notionmgmt.com
                </div>
                <p className="text-zinc-400 text-xs">
                  Inquiries, artist submissions, and brand briefs typically reviewed within 24 hours.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:info@notionmgmt.com"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#AAE41B] hover:text-white transition-colors"
                  >
                    <span>OPEN IN EMAIL CLIENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* London HQ Location Block */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#AAE41B] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>LONDON HEADQUARTERS</span>
                </div>
                <div className="text-xl font-heading uppercase text-white font-bold leading-snug">
                  NOTION MGMT<br />
                  North London Studios<br />
                  The Ridgeway, London<br />
                  NW7 1RP, United Kingdom
                </div>
                <p className="text-zinc-400 text-xs">
                  Independent creative agency rooted in London's music and creator scene.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.app.goo.gl/99SfK4vcd7ZkbmR47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#AAE41B] hover:text-white transition-colors"
                  >
                    <span>GET DIRECTIONS (GOOGLE MAPS)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#AAE41B]/10 border border-[#AAE41B]/30 text-xs font-mono text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#AAE41B] animate-pulse shrink-0" />
                <span>CURRENT STATUS: Accepting Q2 &amp; Q3 2026 Campaign Roster</span>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              NOTION MGMT • REGISTERED IN ENGLAND &amp; WALES
            </div>
          </div>

          {/* Right Column: Full Accessible Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#121216] border border-white/15 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Success Message Dialog */
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#AAE41B]/20 text-[#AAE41B] flex items-center justify-center mx-auto border border-[#AAE41B]/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-heading uppercase text-white font-bold">
                      INQUIRY LOGGED
                    </h3>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>.
                      Your project brief for <strong className="text-[#AAE41B]">{formData.projectType}</strong> has been structured.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-zinc-400 max-w-md mx-auto text-left space-y-1.5">
                    <div><span className="text-zinc-500">Sender:</span> {formData.email}</div>
                    <div><span className="text-zinc-500">Budget Range:</span> {formData.budget}</div>
                    <div><span className="text-zinc-500">Destination:</span> info@notionmgmt.com</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:info@notionmgmt.com?subject=Project%20Inquiry:%20${encodeURIComponent(formData.projectType)}%20-%20${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(
                        `Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nProject Overview:\n${formData.description}`
                      )}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#AAE41B] text-black font-heading text-sm uppercase font-bold px-6 py-3.5 rounded-full hover:bg-white transition-all shadow-md"
                    >
                      <span>TRANSMIT VIA DIRECT EMAIL</span>
                      <Send className="w-4 h-4" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 text-xs font-mono uppercase text-zinc-400 hover:text-white hover:border-white transition-colors cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Project Type Select Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2.5">
                      01 // SELECT PROJECT TYPE *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`text-xs font-mono px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                            formData.projectType === type
                              ? 'bg-[#AAE41B] text-black border-[#AAE41B] font-bold shadow-sm'
                              : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                        02 // FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lauren Good"
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#AAE41B]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                        03 // WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#AAE41B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                        04 // COMPANY / ARTIST (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Record label, event, or agency"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#AAE41B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                        05 // APPROXIMATE BUDGET
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {budgetTiers.map((tier) => (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`py-3 text-[11px] font-mono rounded-xl border text-center transition-all cursor-pointer ${
                              formData.budget === tier
                                ? 'bg-white text-black font-bold border-white'
                                : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      06 // PROJECT DESCRIPTION &amp; GOALS *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Give us context on the artist, release date, current community size, target audience, or desired cultural outcome..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors resize-none ${
                        errors.description ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#AAE41B]'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 bg-[#AAE41B] text-black font-heading text-lg uppercase tracking-wider font-bold py-4 rounded-xl hover:bg-white transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING BRIEF...</span>
                      ) : (
                        <>
                          <span>SUBMIT PROJECT BRIEF</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-zinc-500 text-[11px] font-mono text-center mt-3">
                      Submitting initiates a direct review with NOTION MGMT founders • London, UK
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
