import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData.js';
import { Menu } from './Menu.jsx';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(false);

  const toggleSound = () => {
    setIsSoundActive(!isSoundActive);
    // Dispatch sound toggle if external sound engine is listening
    window.dispatchEvent(new CustomEvent('portfolio:sound-toggle', { detail: { active: !isSoundActive } }));
  };

  return (
    <>
      <header
        data-astro-transition-persist="header"
        id="header"
        data-theme="light"
        data-component="Header"
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
        style={{
          backgroundColor: 'rgba(5, 23, 35, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 h-20 flex items-center justify-between">
          {/* Main Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-4 md:gap-8">
            {portfolioData.navigation.slice(0, 5).map((item, idx) => {
              const isActive = location.pathname === item.href || 
                               (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className={`relative py-2 text-xs sm:text-sm uppercase tracking-wider transition-all ${
                    idx === 0 
                      ? 'font-medium text-white pr-2 sm:pr-4 border-r border-white/20 hidden lg:inline-block' 
                      : ''
                  } ${
                    isActive && idx !== 0
                      ? 'text-[#8ADEE5] font-semibold' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && idx !== 0 && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8ADEE5] shadow-[0_0_8px_#8ADEE5] rounded-full transition-all" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Sound Synthesizer / Audio Equalizer Toggle */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#8ADEE5] bg-white/5 hover:bg-[#8ADEE5]/10 text-white transition-all text-xs cursor-pointer"
              title={isSoundActive ? "Mute Ambient Sound" : "Play Ambient Sound"}
            >
              <div className="flex items-end gap-[2px] h-3 w-3">
                <span className={`w-[2px] bg-[#8ADEE5] rounded-full transition-all ${isSoundActive ? 'h-3 animate-pulse' : 'h-1'}`} />
                <span className={`w-[2px] bg-[#8ADEE5] rounded-full transition-all ${isSoundActive ? 'h-2 animate-bounce' : 'h-2'}`} />
                <span className={`w-[2px] bg-[#8ADEE5] rounded-full transition-all ${isSoundActive ? 'h-3.5 animate-pulse' : 'h-1.5'}`} />
              </div>
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-[#BAC7D5]">
                {isSoundActive ? "SOUND ON" : "SOUND OFF"}
              </span>
            </button>

            {/* LinkedIn Badge */}
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#8ADEE5] bg-white/5 text-xs text-white transition-all group"
              title="Chaitanya Pratap Narayan LinkedIn Profile"
            >
              <span className="font-semibold tracking-wider text-[#8ADEE5]">LINKEDIN</span>
              <span className="bg-[#0A66C2] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                IN
              </span>
            </a>

            {/* CV / Resume Download */}
            <a
              href={portfolioData.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#8ADEE5] bg-[#8ADEE5]/10 hover:bg-[#8ADEE5]/20 text-xs text-white font-medium transition-all"
            >
              <span className="tracking-wider">CV / RESUME</span>
              <span className="bg-[#051723] text-[#8ADEE5] border border-[#8ADEE5]/40 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                PDF
              </span>
            </a>

            {/* Menu Open Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/20 hover:border-[#8ADEE5] bg-white/5 hover:bg-[#8ADEE5]/10 text-white text-xs uppercase tracking-widest transition-all cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span>MENU</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ADEE5] group-hover:scale-125 transition-transform" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ADEE5] group-hover:scale-125 transition-transform delay-75" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Slide-in Menu Overlay */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
