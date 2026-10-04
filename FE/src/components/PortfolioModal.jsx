import React, { useEffect } from 'react';
import { X, CheckCircle2, Building, Clock, ArrowRight } from 'lucide-react';

export default function PortfolioModal({ item, onClose, isDark }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Dialog */}
      <div className={`relative rounded-3xl max-w-2xl w-full p-6 sm:p-8 z-10 border shadow-2xl my-8 transition-colors ${
        isDark
          ? 'bg-[#172129] border-slate-700 text-white'
          : 'bg-white border-[#d8e0e1] text-[#172129]'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
            isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-black'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
            isDark ? 'bg-white text-[#172129]' : 'bg-[#172129] text-white'
          }`}>
            {item.category}
          </span>
          <span className={`text-xs flex items-center gap-1 font-mono font-semibold ${
            isDark ? 'text-slate-400' : 'text-[#5f6d74]'
          }`}>
            <Building className="w-3.5 h-3.5" />
            {item.client}
          </span>
          <span className={`text-xs flex items-center gap-1 font-mono ${
            isDark ? 'text-slate-400' : 'text-[#5f6d74]'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            {item.timeline}
          </span>
        </div>

        <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#172129]'}`}>
          {item.title}
        </h3>

        <div className={`mb-6 p-4 rounded-2xl border flex items-center justify-between font-mono ${
          isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
        }`}>
          <span className="text-xs uppercase font-bold tracking-wider">Verified Business Impact</span>
          <span className="text-base font-extrabold">{item.impact}</span>
        </div>

        {/* Bottleneck */}
        <div className="mb-6">
          <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
            isDark ? 'text-slate-400' : 'text-[#5f6d74]'
          }`}>
            Operational Bottleneck
          </h4>
          <p className={`text-sm leading-relaxed p-4 rounded-2xl border ${
            isDark ? 'bg-[#0b0f17] border-slate-800 text-slate-300' : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
          }`}>
            {item.bottleneck}
          </p>
        </div>

        {/* Pipeline */}
        <div className="mb-6">
          <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
            isDark ? 'text-slate-400' : 'text-[#5f6d74]'
          }`}>
            Data Pipeline Topology
          </h4>
          <p className={`text-xs font-mono p-4 rounded-2xl border leading-relaxed ${
            isDark ? 'bg-cobalt-600/10 border-cobalt-600/30 text-cobalt-400' : 'bg-blue-50 border-blue-200 text-blue-900 font-bold'
          }`}>
            {item.pipeline}
          </p>
        </div>

        {/* Metrics List */}
        <div className="mb-8">
          <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 ${
            isDark ? 'text-slate-400' : 'text-[#5f6d74]'
          }`}>
            Measurable Outcomes & Metrics
          </h4>
          <ul className="space-y-2.5">
            {item.metrics.map((metric, idx) => (
              <li key={idx} className={`flex items-start gap-2.5 text-sm ${isDark ? 'text-slate-200' : 'text-[#172129]'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'border-slate-800' : 'border-[#d8e0e1]'
        }`}>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, idx) => (
              <span key={idx} className={`px-2.5 py-1 rounded text-xs font-mono ${
                isDark ? 'bg-slate-800 text-slate-300' : 'bg-[#f6f7f5] text-[#172129] border border-[#d8e0e1]'
              }`}>
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              isDark ? 'bg-white text-[#172129] hover:bg-slate-200' : 'bg-[#172129] text-white hover:bg-black'
            }`}
          >
            Request Build Blueprint
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
