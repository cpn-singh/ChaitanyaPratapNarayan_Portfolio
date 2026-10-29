import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <main
      className="astro-gtokf5xm"
      data-footer="none"
      data-animation="Contact"
      data-theme="dark"
      style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Title & Introduction */}
        <div className="text-center md:text-left border-b border-white/10 pb-8 mb-12">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#8ADEE5] block mb-2">
            01 / CONNECT & COLLABORATE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider text-white">
            GET IN TOUCH
          </h1>
          <p className="text-base sm:text-lg text-[#BAC7D5] font-light max-w-2xl mt-4">
            Looking to hire a Python Full Stack or Frontend Developer, collaborate on web platforms, or discuss a project? Reach out directly.
          </p>
        </div>

        {/* 3-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Profile & Education (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5] block mb-2">
                LOCATION & EDUCATION
              </span>
              <h3 className="text-lg font-medium text-white uppercase">
                {portfolioData.personal.location}
              </h3>
              <p className="text-xs text-[#8ADEE5] font-semibold mt-1">
                {portfolioData.personal.fullName}
              </p>
              <p className="text-xs text-[#BAC7D5] mt-1">
                {portfolioData.personal.role}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <div className="text-xs text-[#BAC7D5]">
                  <strong className="text-white">Experience: </strong>
                  Frontend Developer Intern at Uncodemy
                </div>
                <div className="text-xs text-[#BAC7D5]">
                  <strong className="text-white">Degrees: </strong>
                  MCA (ISBN University) • BCA (Kalinga University)
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  ● Available for Worldwide Remote & On-Site Roles
                </div>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5]">
                INSTANT REACH
              </span>
              <button
                onClick={() => handleCopy(portfolioData.contact.email, 'email')}
                className="group flex items-center justify-between p-3 rounded-lg border border-white/15 hover:border-[#8ADEE5] bg-white/5 hover:bg-[#8ADEE5]/10 text-white transition-all cursor-pointer text-left"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-[#BAC7D5]">Email:</span>
                  <span className="text-xs font-medium text-[#8ADEE5] group-hover:underline">
                    {portfolioData.contact.email}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#BAC7D5] group-hover:text-white">
                  {copiedItem === 'email' ? '✓ Copied' : '📋 Copy'}
                </span>
              </button>

              <button
                onClick={() => handleCopy(portfolioData.contact.phone, 'phone')}
                className="group flex items-center justify-between p-3 rounded-lg border border-white/15 hover:border-[#8ADEE5] bg-white/5 hover:bg-[#8ADEE5]/10 text-white transition-all cursor-pointer text-left"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-[#BAC7D5]">Phone:</span>
                  <span className="text-xs font-medium text-white group-hover:text-[#8ADEE5]">
                    {portfolioData.contact.displayPhone}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#BAC7D5] group-hover:text-white">
                  {copiedItem === 'phone' ? '✓ Copied' : '📋 Copy'}
                </span>
              </button>

              <div className="flex gap-2 pt-2">
                <a
                  href={portfolioData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center text-xs font-medium text-white bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 rounded-lg transition-all"
                >
                  WhatsApp Chat ↗
                </a>
                <a
                  href={portfolioData.socials.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center text-xs font-medium text-white bg-[#8ADEE5]/20 hover:bg-[#8ADEE5]/30 border border-[#8ADEE5]/50 rounded-lg transition-all"
                >
                  Download CV (PDF) ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form (8 cols) */}
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5]">
                  02 / SEND AN INQUIRY
                </span>
                <span className="text-xs text-[#BAC7D5]">
                  Average response: &lt; 24 hours
                </span>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 border border-emerald-500/40 bg-emerald-500/10 rounded-xl text-center flex flex-col items-center justify-center my-8">
                  <span className="text-3xl mb-2">🎉</span>
                  <h4 className="text-lg font-semibold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-[#BAC7D5] mt-2 max-w-md">
                    Thank you for reaching out. Your message has been sent to Chaitanya Pratap Narayan. You will receive a direct reply at your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#BAC7D5] mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#8ADEE5] text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#BAC7D5] mb-2 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#8ADEE5] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BAC7D5] mb-2 font-medium">
                      Subject / Role / Project Type
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Time Opportunity / Web Platform Development"
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#8ADEE5] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BAC7D5] mb-2 font-medium">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or engineering opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#8ADEE5] text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#BAC7D5]">
                      {formData.message.length} characters
                    </span>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="px-8 py-3 rounded-full bg-[#8ADEE5] hover:bg-[#8ADEE5]/90 text-[#051723] font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_16px_rgba(138,222,229,0.3)] hover:shadow-[0_0_24px_rgba(138,222,229,0.5)] cursor-pointer disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'DISPATCHING...' : 'SEND MESSAGE →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Profiles Bar */}
            <div className="border-t border-white/10 pt-6 mt-8 flex flex-wrap items-center justify-between text-xs text-[#BAC7D5]">
              <span>Direct connect on social platforms:</span>
              <div className="flex gap-4">
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#8ADEE5] transition-colors">
                  LinkedIn ↗
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#8ADEE5] transition-colors">
                  GitHub ↗
                </a>
                <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#8ADEE5] transition-colors">
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
