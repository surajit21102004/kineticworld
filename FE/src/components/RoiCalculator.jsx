import React, { useState } from 'react';
import { Calculator, Check, Zap, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(65);

  // Calculate annual ROI
  const weeklySavings = hoursSavedPerWeek * hourlyCost;
  const annualSavings = weeklySavings * 52;
  const estimatedInvestment = 12000;
  const netRoiPercentage = Math.round(((annualSavings - estimatedInvestment) / estimatedInvestment) * 100);

  return (
    <section id="roi" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" />
            ROI & Investment Matrix
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Transparent Pricing & Measured Returns
          </p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Quantify the exact financial impact of automating manual operational hours with custom AI systems.
          </p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl mb-16 border border-cyan-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Interactive ROI Estimator
              </h3>

              {/* Slider 1: Hours Saved */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-slate-300">Team Hours Saved / Week:</span>
                  <span className="text-cyan-400 font-bold text-base">{hoursSavedPerWeek} hrs/wk</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={hoursSavedPerWeek}
                  onChange={(e) => setHoursSavedPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 2: Hourly Rate */}
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-slate-300">Blended Employee Hourly Cost:</span>
                  <span className="text-cyan-400 font-bold text-base">${hourlyCost} / hr</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="200"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Readout Output */}
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-cyan-500/20 text-center space-y-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Projected Annual Savings
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                ${annualSavings.toLocaleString()}
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Estimated Net ROI</div>
                  <div className="text-xl font-bold text-emerald-400">+{netRoiPercentage}%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Payback Period</div>
                  <div className="text-xl font-bold text-cyan-400">&lt; 2.5 Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phase 1 Entry</div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter AI Agent</h3>
              <p className="text-slate-400 text-sm mb-6">Single autonomous agent workflow for targeting one core bottleneck.</p>
              <div className="text-3xl font-bold text-white mb-6">$4,900 <span className="text-xs font-normal text-slate-400">/ project</span></div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Custom LLM Prompt Pipeline</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> REST API Endpoint Integration</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 14-Day Delivery Guarantee</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 text-center rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
              Select Starter
            </a>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-2 border-cyan-500 shadow-xl shadow-cyan-950/40 relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500 text-black">
              MOST POPULAR
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Full Automation</div>
              <h3 className="text-2xl font-bold text-white mb-2">Growth Scale Package</h3>
              <p className="text-slate-400 text-sm mb-6">Multi-agent orchestration system with vector database RAG pipeline.</p>
              <div className="text-3xl font-bold text-cyan-400 mb-6">$12,500 <span className="text-xs font-normal text-slate-400">/ project</span></div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Multi-Agent Workflow Engine</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Vector Database RAG Ingestion</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Custom Dashboard Interface</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 30-Day Support Window</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3.5 text-center rounded-xl text-sm font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
              Select Growth Build
            </a>
          </div>

          {/* Tier 3 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Custom Infrastructure</div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Custom Build</h3>
              <p className="text-slate-400 text-sm mb-6">Bespoke AI software platform fine-tuned on private infrastructure.</p>
              <div className="text-3xl font-bold text-white mb-6">Custom <span className="text-xs font-normal text-slate-400">Quote</span></div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> On-Prem / Private Cloud Deployment</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Fine-Tuned Llama / Custom Models</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Dedicated Lead AI Architect</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 text-center rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
              Contact Enterprise Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
