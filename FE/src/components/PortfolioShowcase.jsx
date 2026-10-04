import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';
import { ArrowUpRight, TrendingUp, Layers } from 'lucide-react';

export default function PortfolioShowcase({ isDark }) {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="work" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#172129]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cobalt-600/10 text-cobalt-600 border border-cobalt-600/20 mb-3">
            VERIFIED CASE STUDIES
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
            5 Technical Architecture Deep Dives
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-[#5f6d74]'}`}>
            All client implementations follow a standardized, highly technical structure designed to demonstrate measurable business ROI and engineering discipline.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#172129] border-slate-800 hover:border-slate-700 shadow-xl'
                  : 'bg-white border-[#d8e0e1] shadow-sm hover:border-slate-400 hover:shadow-md'
              }`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-white border border-white/20 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.impact}</span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 group-hover:text-cobalt-600 transition-colors ${
                    isDark ? 'text-white' : 'text-[#172129]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm line-clamp-3 leading-relaxed mb-6 ${
                    isDark ? 'text-slate-300' : 'text-[#5f6d74]'
                  }`}>
                    {item.bottleneck}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className={`px-6 pb-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                isDark
                  ? 'border-slate-800 text-slate-300 group-hover:text-white'
                  : 'border-[#d8e0e1] text-[#172129] group-hover:text-cobalt-600'
              }`}>
                <span>Inspect Pipeline & Metrics</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCase && (
        <PortfolioModal
          item={selectedCase}
          onClose={() => setSelectedCase(null)}
          isDark={isDark}
        />
      )}
    </section>
  );
}
