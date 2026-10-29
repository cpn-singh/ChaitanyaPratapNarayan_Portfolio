import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Frontend3D() {
  const [activeTechnique, setActiveTechnique] = useState('canvas');

  const techniques = {
    canvas: {
      title: "Single Unified Canvas Pattern",
      badge: "WEBGL PERFORMANCE",
      description: "Hosting a single persistent WebGL canvas behind the semantic React DOM, eliminating WebGL context destruction, shader re-compilation, and memory leaks across page navigations.",
      metrics: ["0ms Context Swaps", "Zero VRAM Thrashing", "60 FPS Locked"]
    },
    shaders: {
      title: "Custom GLSL Shaders & Lighting",
      badge: "CREATIVE SHADERS",
      description: "Custom vertex and fragment shaders for atmospheric light volumetric rays, water reflection, dynamic fog, and instanced foliage geometry.",
      metrics: ["Instanced Mesh Buffers", "Volumetric Fog", "GPU Particle Systems"]
    },
    lenis: {
      title: "Lenis Smooth Scroll + GSAP Synchronization",
      badge: "SCROLL DYNAMICS",
      description: "Decoupling native scroll animation via Lenis virtual scroll and syncing directly with GSAP ScrollTrigger RequestAnimationFrame loops.",
      metrics: ["Sub-pixel Interpolation", "Hardware Accelerated", "DPR Capped at 2.0"]
    },
    tailwind: {
      title: "React 19 & Tailwind CSS Architecture",
      badge: "FRONTEND STACK",
      description: "Building componentized, utility-driven UIs with Tailwind CSS v4, zero runtime CSS overhead, accessible semantic DOM, and instant HMR via Vite.",
      metrics: ["Zero Runtime CSS", "Vite Instant HMR", "Full Keyboard A11y"]
    }
  };

  const current = techniques[activeTechnique];

  return (
    <main
      className="astro-ifygeblv"
      data-scene="Maritime"
      data-footer="dark"
      data-astro-cid-ifygeblv
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Title & Introduction */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#8ADEE5] block mb-2">
            04 / CREATIVE WEB & 3D INTERACTION
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider text-white">
            3D & FRONTEND ENGINEERING
          </h1>
          <p className="text-base sm:text-lg text-[#BAC7D5] font-light max-w-3xl mt-4 leading-relaxed">
            Crafting immersive 60fps digital experiences using Three.js WebGL, React component architectures, GSAP motion choreography, and Tailwind CSS.
          </p>

          {/* Interactive Dynamic Technique Selector */}
          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-white/10">
            {[
              { id: 'canvas', label: 'Single Unified Canvas' },
              { id: 'shaders', label: 'GLSL Shaders & Lighting' },
              { id: 'lenis', label: 'Lenis + GSAP Scroll' },
              { id: 'tailwind', label: 'React 19 & Tailwind CSS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechnique(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTechnique === tab.id
                    ? 'bg-[#8ADEE5] text-[#051723] shadow-[0_0_12px_rgba(138,222,229,0.4)]'
                    : 'bg-white/5 text-[#BAC7D5] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Technique Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded bg-[#8ADEE5]/10 text-[#8ADEE5] border border-[#8ADEE5]/30 inline-block mb-3">
              {current.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white uppercase tracking-wide">
              {current.title}
            </h2>
            <p className="text-base sm:text-lg text-[#BAC7D5] font-light leading-relaxed mt-4">
              {current.description}
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {current.metrics.map((metric, idx) => (
                <div key={idx} className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-xs uppercase font-mono text-[#8ADEE5]">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Project Link */}
          <div className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ADEE5] block mb-3">
                FEATURED 3D PLATFORM
              </span>
              <h3 className="text-xl font-medium text-white uppercase">
                SYLVRA Clean Power Grid
              </h3>
              <p className="text-xs text-[#BAC7D5] mt-2 leading-relaxed font-light">
                National clean energy grid with interactive 3D national radar telemetry and real-time generation graphs.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="https://green-grid-indol.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-[#8ADEE5] text-[#051723] font-semibold text-xs uppercase tracking-widest text-center block transition-all shadow-[0_0_16px_rgba(138,222,229,0.3)] hover:shadow-[0_0_24px_rgba(138,222,229,0.5)]"
              >
                Launch 3D WebGL Telemetry ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
