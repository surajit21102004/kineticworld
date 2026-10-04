import React from 'react';
import { ArrowRight, Activity, Zap, Cpu, ShieldCheck } from 'lucide-react';

export default function HeroBanner({ setActiveTab, isDark }) {
  return (
    <section className={`relative pt-32 pb-16 md:pt-44 md:pb-24 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#172129]'
    }`}>
      {/* Subtle Mesh Grid */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#1d4ed808_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed808_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none ${
        isDark ? 'opacity-100' : 'opacity-40'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Pill */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-8 border transition-colors ${
            isDark
              ? 'bg-slate-900/90 text-cobalt-500 border-slate-800'
              : 'bg-white text-cobalt-600 border-[#d8e0e1] shadow-sm'
          }`}>
            <span className="w-2 h-2 rounded-full bg-cobalt-600 animate-pulse" />
            BUILD WITH KINETICS • HIGH-VELOCITY AI ENGINEERING
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 ${
            isDark ? 'text-white' : 'text-[#172129]'
          }`}>
            Engineering <span className="text-cobalt-gradient">High-Velocity AI Software</span> & Scalable Digital Systems
          </h1>

          {/* Subheadline */}
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light ${
            isDark ? 'text-slate-300' : 'text-[#5f6d74]'
          }`}>
            Build With Kinetics designs, builds, and deploys autonomous workflows, enterprise RAG engines, and resilient cloud platforms tailored to scale your operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab('contact')}
              className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-white text-[#172129] hover:bg-slate-200'
                  : 'bg-[#172129] text-white hover:bg-black'
              }`}
            >
              Schedule a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-center gap-2 ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:border-white hover:bg-slate-900'
                  : 'border-[#172129] text-[#172129] hover:bg-slate-100'
              }`}
            >
              View Architecture Case Studies
            </button>
          </div>

          {/* Performance & Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-700/30 text-left">
            <div className={`p-5 rounded-2xl border transition-colors ${
              isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1] shadow-sm'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cobalt-600 mb-1">
                <Activity className="w-3.5 h-3.5" /> SLA Availability
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                99.9%
              </div>
              <div className={`text-[11px] mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                Enterprise Infrastructure
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-colors ${
              isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1] shadow-sm'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cobalt-600 mb-1">
                <Zap className="w-3.5 h-3.5" /> Vector Search
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                &lt; 250ms
              </div>
              <div className={`text-[11px] mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                Stream-First RAG Inference
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-colors ${
              isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1] shadow-sm'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cobalt-600 mb-1">
                <Cpu className="w-3.5 h-3.5" /> Production Scale
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                15+
              </div>
              <div className={`text-[11px] mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                Deployed AI Systems
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-colors ${
              isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1] shadow-sm'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Data Security
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600">
                Zero Retention
              </div>
              <div className={`text-[11px] mt-0.5 font-medium ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                Dedicated VPC Isolation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
