import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData.js';

export function Menu({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 md:p-16 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(5, 23, 35, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex flex-col">
          <span className="text-white text-xs sm:text-sm tracking-[0.25em] font-light uppercase">
            {portfolioData.personal.brandTitle}
          </span>
          <span className="text-[#8ADEE5] text-[10px] sm:text-xs tracking-[0.3em] font-medium uppercase mt-1">
            {portfolioData.personal.role}
          </span>
        </div>

        <button
          onClick={onClose}
          className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 hover:border-[#8ADEE5] bg-white/5 hover:bg-[#8ADEE5]/10 text-white transition-all cursor-pointer"
          aria-label="Close navigation menu"
        >
          <span className="text-xs uppercase tracking-widest text-[#BAC7D5] group-hover:text-white transition-colors">
            Close
          </span>
          <span className="text-base font-bold text-[#8ADEE5] group-hover:rotate-90 transition-transform duration-300">
            ✕
          </span>
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-8">
        <div className="md:col-start-2 md:col-span-6 flex flex-col gap-4 sm:gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#8ADEE5] font-semibold mb-2">
            01 / NAVIGATION DIRECTORY
          </span>
          {portfolioData.navigation.map((item, idx) => {
            const isActive = location.pathname === item.href || 
                             (item.href !== '/' && location.pathname.startsWith(item.href));
            return (
              <Link
                key={idx}
                to={item.href}
                onClick={onClose}
                className={`group flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wider transition-all ${
                  isActive 
                    ? 'text-[#8ADEE5] font-normal translate-x-3' 
                    : 'text-white/80 hover:text-white hover:translate-x-3'
                }`}
              >
                <span className="text-xs text-[#8ADEE5]/60 font-mono tracking-widest">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8ADEE5] shadow-[0_0_8px_#8ADEE5] ml-2" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact & Profiles Column */}
        <div className="md:col-span-4 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#8ADEE5] font-semibold block mb-2">
              02 / DIRECT CHANNELS
            </span>
            <p className="text-white text-sm font-light mt-1">
              Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-[#8ADEE5] hover:underline font-normal">{portfolioData.contact.email}</a>
            </p>
            <p className="text-white text-sm font-light mt-1">
              Phone: <a href={`tel:${portfolioData.contact.phone}`} className="text-[#8ADEE5] hover:underline font-normal">{portfolioData.contact.displayPhone}</a>
            </p>
            <p className="text-[#BAC7D5] text-xs font-light mt-2">
              {portfolioData.contact.address}
            </p>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#8ADEE5] font-semibold block mb-2">
              03 / PROFILES & CV
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-white/20 hover:border-[#8ADEE5] text-xs text-white hover:text-[#8ADEE5] transition-all bg-white/5"
              >
                LinkedIn ↗
              </a>
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-white/20 hover:border-[#8ADEE5] text-xs text-white hover:text-[#8ADEE5] transition-all bg-white/5"
              >
                GitHub ↗
              </a>
              <a
                href={portfolioData.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-[#8ADEE5] text-xs text-white bg-[#8ADEE5]/10 hover:bg-[#8ADEE5]/20 transition-all font-medium"
              >
                Resume (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-xs text-[#BAC7D5]">
        <span>© {new Date().getFullYear()} {portfolioData.personal.fullName} • All Rights Reserved</span>
        <span className="text-[#8ADEE5] mt-2 sm:mt-0 font-medium">
          {portfolioData.personal.availability}
        </span>
      </div>
    </div>
  );
}
