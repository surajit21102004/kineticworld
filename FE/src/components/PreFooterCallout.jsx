import React from 'react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function PreFooterCallout({ setActiveTab, isDark }) {
  return (
    <section className={`py-16 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17]' : 'border-[#d8e0e1] bg-[#f8fafc]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-colors ${
          isDark
            ? 'bg-[#172129] border border-slate-800'
            : 'bg-[#172129]'
        }`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/15 text-white backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              KINETIC MOMENTUM
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to bring kinetic momentum to your software infrastructure?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Book a 30-minute technical scoping session directly with our principal AI solution architects.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('contact')}
              className="w-full md:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#172129] bg-white hover:bg-slate-200 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Scoping Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
