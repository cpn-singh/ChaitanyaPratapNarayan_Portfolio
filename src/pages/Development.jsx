import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Development() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects dynamically
  const filteredProjects = portfolioData.featuredProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main
      className="astro-q53qi7p3"
      data-scene="Trading"
      data-footer="dark"
      data-astro-cid-q53qi7p3
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Header Title */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#8ADEE5] block mb-2">
            02 / ENGINEERING STANDARDS & PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider text-white">
            SOFTWARE DEVELOPMENT
          </h1>
          <p className="text-base sm:text-lg text-[#BAC7D5] font-light max-w-3xl mt-4 leading-relaxed">
            Architecting production-ready Python backends with Django REST Framework, normalized databases, and high-performance React frontends with 60fps client state.
          </p>

          {/* Interactive Dynamic Filters & Live Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {portfolioData.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#8ADEE5] text-[#051723] shadow-[0_0_12px_rgba(138,222,229,0.4)]'
                      : 'bg-white/5 text-[#BAC7D5] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Bar */}
            <div className="relative min-w-[280px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, stack, or project..."
                className="w-full px-4 py-2.5 pl-9 rounded-full bg-black/40 border border-white/20 focus:border-[#8ADEE5] text-white text-xs outline-none transition-colors"
              />
              <span className="absolute left-3.5 top-2.5 text-xs text-white/50">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-white/60 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#8ADEE5]/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Badge & Stats */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-[#8ADEE5]/10 text-[#8ADEE5] border border-[#8ADEE5]/30">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {project.stats}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wide group-hover:text-[#8ADEE5] transition-colors mt-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#BAC7D5] font-light leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#8ADEE5] hover:underline uppercase tracking-wider"
                >
                  <span>Launch Platform</span>
                  <span>↗</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#BAC7D5] hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#BAC7D5]">
            <p className="text-lg">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 rounded-full border border-[#8ADEE5] text-xs text-[#8ADEE5] uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
