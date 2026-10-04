import React, { useState } from 'react';
import { Sparkles, Terminal, Play, CheckCircle, RefreshCw, Cpu } from 'lucide-react';

const samplePrompts = [
  {
    title: 'Financial Compliance Audit',
    category: 'FinTech Multi-Agent',
    prompt: 'Audit 5,000 corporate expense logs for regulatory compliance and flag suspicious transactions.',
    response: `[AGENT EXECUTION LOG - KINETIC-ENGINE-v4.2]
> Initializing Multi-Agent Orchestrator...
> Agent [ComplianceGuard-Alpha] scanning transaction vectors...
> Analyzing 5,000 JSON payloads against SEC Rule 10b-5 standards.
[!] FLAG IDENTIFIED: Txn #84920 ($48,500 - Offshore Routing)
> Reason: Deviation from historical vendor baseline pattern.
> Generating automated mitigation brief...
[STATUS]: Audit complete in 142ms. 1 anomaly flagged, 4,999 verified.`
  },
  {
    title: 'Autonomous Code Refactor',
    category: 'Software Engineering',
    prompt: 'Convert legacy REST API to GraphQL schema with automated rate-limiting and vector caching.',
    response: `[AGENT EXECUTION LOG - KINETIC-ENGINE-v4.2]
> Parsing legacy Express endpoint schema...
> Generating GraphQL Type Definitions & Resolvers...
> Injecting Redis Distributed Vector Cache Middleware...
[CODE GENERATED]:
  type Query {
    customer(id: ID!): CustomerPayload @rateLimit(max: 100, window: "1m")
  }
[STATUS]: Refactor complete in 88ms. 0 syntax errors detected.`
  },
  {
    title: 'Document Intelligence Extraction',
    category: 'Enterprise RAG',
    prompt: 'Extract key clauses, indemnities, and termination dates from 120-page legal contract PDF.',
    response: `[AGENT EXECUTION LOG - KINETIC-ENGINE-v4.2]
> Ingesting PDF via OCR Vision Pipeline...
> Chunking document into 512-token semantic vectors...
> Executing RAG query across Pinecone Index [Legal-Vault-01]
[EXTRACTED CLAUSES]:
  - Section 14.2: Indemnity capped at 2x annual contract value.
  - Section 19.1: Automatic renewal notice required 60 days prior to 2027-11-15.
[STATUS]: Extraction complete in 210ms. Accuracy confidence: 99.7%.`
  }
];

export default function AiPlayground() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(samplePrompts[0].response);

  const handleRunSimulation = (index) => {
    setActivePromptIndex(index);
    setIsRunning(true);
    setOutput('> Agent dispatching request to Kinetic AI Sandbox...\n> Processing...');
    
    setTimeout(() => {
      setOutput(samplePrompts[index].response);
      setIsRunning(false);
    }, 600);
  };

  return (
    <section id="playground" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Agentic Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Test Kinetic AI Capability in Real-Time
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Select a sample prompt below to experience how our autonomous agent pipelines reason and execute complex workflows instantly.
          </p>
        </div>

        {/* Simulator Terminal Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
          {/* Terminal Titlebar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Kinetic-Agent-Sandbox :: Node v20.12.0
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              ● Sandbox Active
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Prompt Selector Buttons */}
            <div className="md:col-span-5 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Select Agent Preset Task:
              </label>
              {samplePrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRunSimulation(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activePromptIndex === idx
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 mb-1">
                    <span>{item.category}</span>
                    {activePromptIndex === idx && <CheckCircle className="w-3.5 h-3.5" />}
                  </div>
                  <div className="font-bold text-sm text-slate-100">{item.title}</div>
                </button>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="md:col-span-7 bg-[#04060d] rounded-2xl p-5 border border-slate-800/90 font-mono text-xs text-slate-200 flex flex-col justify-between min-h-[260px] shadow-inner">
              <div className="space-y-2 overflow-x-auto whitespace-pre-wrap leading-relaxed text-slate-300">
                <div className="text-slate-500 text-[11px]">
                  # Task: "{samplePrompts[activePromptIndex].prompt}"
                </div>
                <div className="text-cyan-400 font-semibold pt-2">
                  {output}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Model: Kinetic-GPT4o-FineTuned
                </span>
                <button
                  onClick={() => handleRunSimulation(activePromptIndex)}
                  disabled={isRunning}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  {isRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
                  Run Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
