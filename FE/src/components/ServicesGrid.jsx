import React from 'react';
import { servicesData } from '../data/servicesData';
import { Bot, Cpu, Zap, Code2, Radio, ShieldCheck } from 'lucide-react';

const iconMap = {
  Bot: Bot,
  Cpu: Cpu,
  Zap: Zap,
  Code2: Code2,
  Radio: Radio
};

export default function ServicesGrid({ isDark }) {
  return (
    <section id="services" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#172129]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cobalt-600/10 text-cobalt-600 border border-cobalt-600/20 mb-3">
            PRACTICE AREAS & CAPABILITIES
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
            5 Core Engineering Practice Pillars
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-[#5f6d74]'}`}>
            We partner with high-growth engineering teams to design, build, and deploy production-grade software and autonomous AI infrastructure.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Bot;
            return (
              <div
                key={service.id}
                className={`p-8 rounded-3xl border transition-all ${
                  isDark
                    ? 'bg-[#172129] border-slate-800 hover:border-slate-700'
                    : 'bg-white border-[#d8e0e1] shadow-sm hover:border-slate-400'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Scope */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        isDark ? 'bg-slate-800 text-cobalt-400' : 'bg-slate-100 text-cobalt-600 border border-[#d8e0e1]'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-cobalt-600">Pillar 0{idx + 1}</span>
                    </div>

                    <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                      {service.title}
                    </h3>

                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#5f6d74]'}`}>
                      {service.scope}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600">
                      <ShieldCheck className="w-4 h-4" />
                      <span>SLA Benchmark: {service.metrics}</span>
                    </div>
                  </div>

                  {/* Right Column: Connectors & Safety */}
                  <div className={`md:col-span-6 p-6 rounded-2xl border space-y-4 text-xs font-mono ${
                    isDark
                      ? 'bg-[#0b0f17] border-slate-800 text-slate-300'
                      : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
                  }`}>
                    <div>
                      <div className="font-bold text-cobalt-600 uppercase tracking-wider mb-2">Connectors & Integrations:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.integrations.map((item, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                              isDark
                                ? 'bg-slate-800 text-slate-200 border-slate-700'
                                : 'bg-white text-[#172129] border-[#d8e0e1]'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-[#d8e0e1]'}`}>
                      <div className={`font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-[#5f6d74]'}`}>
                        Safety & Guardrails:
                      </div>
                      <p className={`text-[11px] leading-relaxed font-sans ${isDark ? 'text-slate-300' : 'text-[#5f6d74]'}`}>
                        {service.safety}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
