import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCaseStudy({ setActiveTab, isDark }) {
  return (
    <section className={`py-16 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f8fafc] text-[#172129]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl transition-colors ${
          isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1]'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  isDark ? 'bg-white text-[#172129]' : 'bg-[#172129] text-white'
                }`}>
                  FEATURED ARCHITECTURE CASE STUDY
                </span>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                  Enterprise Logistics
                </span>
              </div>

              <h3 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                Multi-Agent Support & Document Processing Engine
              </h3>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <div className={`p-4 rounded-2xl border ${
                  isDark
                    ? 'bg-red-500/10 border-red-500/20 text-red-300'
                    : 'bg-red-50 border-red-200 text-red-900 font-medium'
                }`}>
                  <span className="font-bold uppercase tracking-wider block text-xs mb-1">The Operational Challenge:</span>
                  Manual invoice extraction, document verification, and customer ticket categorization caused a critical 48-hour operational backlog.
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
                }`}>
                  <span className="font-bold uppercase tracking-wider block text-xs mb-1 text-cobalt-600">The Kinetic Solution:</span>
                  Designed an event-driven multi-agent pipeline utilizing Redis message queues, vector caching, and human-in-the-loop review interfaces.
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                }`}>
                  <div className="text-2xl font-bold">70% Reduction</div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>In Total Invoice Processing Time</div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-cobalt-600/10 border-cobalt-600/30 text-cobalt-400' : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <div className="text-2xl font-bold">400+ Hours</div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Engineering Hours Saved Monthly</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('work')}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isDark
                      ? 'bg-white text-[#172129] hover:bg-slate-200'
                      : 'bg-[#172129] text-white hover:bg-black'
                  }`}
                >
                  Inspect Full System Blueprint
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Architecture Data Pipeline Visual */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border font-mono text-xs space-y-3 ${
              isDark ? 'bg-[#0b0f17] border-slate-800 text-slate-300' : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
            }`}>
              <div className={`font-bold uppercase border-b pb-2 ${isDark ? 'border-slate-800 text-slate-400' : 'border-[#d8e0e1] text-[#5f6d74]'}`}>
                // DATA PIPELINE TOPOLOGY
              </div>
              <div className="space-y-2 leading-relaxed">
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-[#d8e0e1]'}`}>
                  1. [PDF / Audio Ingestion] → OCR Parsing
                </div>
                <div className="p-3 rounded-xl bg-cobalt-600 text-white font-bold">
                  2. [Redis Queue] → LangGraph Agent Hub
                </div>
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-[#d8e0e1]'}`}>
                  3. [Qdrant Vector DB] → Semantic Match
                </div>
                <div className="p-3 rounded-xl bg-emerald-600 text-white font-bold">
                  4. [Human-in-Loop UI] → ERP Auto Sync
                </div>
              </div>
              <div className={`text-[11px] pt-2 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-[#d8e0e1] text-[#5f6d74]'}`}>
                ● SLA Benchmark: 99.8% Precision | Latency: 180ms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
