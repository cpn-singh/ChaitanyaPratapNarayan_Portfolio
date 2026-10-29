import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function WebPlatforms() {
  const [filter, setFilter] = useState('all');

  const platforms = portfolioData.featuredProjects;
  const filtered = filter === 'all' ? platforms : platforms.filter(p => p.category === filter);

  return (
    <main
      className="astro-qcvovfap"
      data-scene="FortEnergy"
      data-footer="dark"
      data-astro-cid-qcvovfap
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Title */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#8ADEE5] block mb-2">
            05 / DIGITAL EXPERIENCES & WEB APPS
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider text-white">
            WEB PLATFORMS & SYSTEMS
          </h1>
          <p className="text-base sm:text-lg text-[#BAC7D5] font-light max-w-3xl mt-4 leading-relaxed">
            Full-stack web applications, interactive portals, and client platforms engineered for speed, clean architecture, and intuitive user experiences.
          </p>

          {/* Dynamic Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-white/10">
            {portfolioData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#8ADEE5] text-[#051723] shadow-[0_0_12px_rgba(138,222,229,0.4)]'
                    : 'bg-white/5 text-[#BAC7D5] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#8ADEE5]/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-[#8ADEE5]/10 text-[#8ADEE5] border border-[#8ADEE5]/30">
                  {item.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wide group-hover:text-[#8ADEE5] transition-colors mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-[#BAC7D5] font-light leading-relaxed mt-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#8ADEE5] hover:underline uppercase tracking-wider"
                >
                  <span>Launch Application</span>
                  <span>↗</span>
                </a>
                <span className="text-[11px] font-mono text-emerald-400">
                  {item.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
