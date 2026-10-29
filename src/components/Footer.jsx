import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData.js';

export function Footer() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer
      data-astro-transition-persist="footer"
      id="footer"
      data-theme="dark"
      className="relative z-10 w-full border-t border-white/10 text-white transition-colors duration-300 py-16 sm:py-20"
      style={{
        backgroundColor: '#051723'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Role */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white">
              {portfolioData.personal.brandTitle}
            </span>
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#8ADEE5]">
              {portfolioData.personal.role}
            </span>
            <p className="text-sm text-[#BAC7D5] font-light leading-relaxed mt-2">
              {portfolioData.personal.bio}
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-[#8ADEE5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{portfolioData.personal.status}</span>
            </div>
          </div>

          {/* Column 2: Base & Location */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5]">
              PRIMARY BASE & REACH
            </span>
            <p className="text-base text-white font-medium">
              {portfolioData.personal.location}
            </p>
            <p className="text-sm text-[#BAC7D5] font-light">
              {portfolioData.personal.availability}
            </p>
            <p className="text-xs text-[#8ADEE5]/80 mt-2 font-mono">
              {portfolioData.contact.timezone}
            </p>
          </div>

          {/* Column 3: Direct Contact with One-Click Copy */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5]">
              DIRECT CHANNELS
            </span>
            <div>
              <span className="text-xs text-[#BAC7D5] block mb-1">Email:</span>
              <button
                onClick={() => copyToClipboard(portfolioData.contact.email, 'email')}
                className="group flex items-center gap-2 text-sm text-white hover:text-[#8ADEE5] transition-colors cursor-pointer text-left"
                title="Click to copy email"
              >
                <span className="font-medium underline decoration-white/30 group-hover:decoration-[#8ADEE5]">
                  {portfolioData.contact.email}
                </span>
                <span className="text-xs text-[#8ADEE5] font-mono">
                  {copiedType === 'email' ? '✓ Copied!' : '📋'}
                </span>
              </button>
            </div>

            <div className="mt-2">
              <span className="text-xs text-[#BAC7D5] block mb-1">Phone / WhatsApp:</span>
              <button
                onClick={() => copyToClipboard(portfolioData.contact.phone, 'phone')}
                className="group flex items-center gap-2 text-sm text-white hover:text-[#8ADEE5] transition-colors cursor-pointer text-left"
                title="Click to copy phone"
              >
                <span className="font-medium underline decoration-white/30 group-hover:decoration-[#8ADEE5]">
                  {portfolioData.contact.displayPhone}
                </span>
                <span className="text-xs text-[#8ADEE5] font-mono">
                  {copiedType === 'phone' ? '✓ Copied!' : '📋'}
                </span>
              </button>
            </div>
          </div>

          {/* Column 4: Profiles & Directory */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8ADEE5]">
              PROFILES & LEGAL
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BAC7D5] hover:text-[#8ADEE5] transition-colors"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BAC7D5] hover:text-[#8ADEE5] transition-colors"
              >
                GitHub Repositories ↗
              </a>
              <a
                href={portfolioData.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ADEE5] hover:underline font-medium"
              >
                Download Resume (PDF) ↗
              </a>
              <div className="flex gap-4 pt-3 text-xs text-white/50">
                <Link to="/privacy-policy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms-of-use/" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#BAC7D5]">
          <p>© {new Date().getFullYear()} {portfolioData.personal.fullName} • Python Full Stack & Frontend Developer</p>
          <p className="mt-3 sm:mt-0 text-[#8ADEE5] font-mono text-[11px]">
            Engineered with React.js, Vite & Three.js WebGL
          </p>
        </div>
      </div>
    </footer>
  );
}
