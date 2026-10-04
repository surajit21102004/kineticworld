import React from 'react';
import { Cpu, Code2, Server, Cloud } from 'lucide-react';

const techGroups = [
  {
    category: 'AI Frameworks & Models',
    icon: Cpu,
    items: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic Claude', 'vLLM', 'HuggingFace Transformers']
  },
  {
    category: 'Frontend & UX Architecture',
    icon: Code2,
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React Native']
  },
  {
    category: 'Backend & Data Persistence',
    icon: Server,
    items: ['Node.js', 'Python (FastAPI)', 'PostgreSQL', 'Supabase', 'Pinecone', 'Qdrant', 'Redis']
  },
  {
    category: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    items: ['AWS (Lambda, ECS, S3)', 'Docker', 'Kubernetes', 'Terraform', 'Vercel']
  }
];

export default function TechEcosystem({ isDark }) {
  return (
    <section className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#172129]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cobalt-600/10 text-cobalt-600 border border-cobalt-600/20 mb-3">
            BATTLE-TESTED STACK
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
            Technology Ecosystem Grid
          </h2>
          <p className={`mt-4 text-base ${isDark ? 'text-slate-300' : 'text-[#5f6d74]'}`}>
            We leverage production-grade frameworks, high-performance vector databases, and scalable cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techGroups.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1] shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    isDark ? 'bg-slate-800 text-cobalt-400' : 'bg-slate-100 text-cobalt-600 border border-[#d8e0e1]'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border ${
                        isDark
                          ? 'bg-[#0b0f17] text-slate-200 border-slate-700'
                          : 'bg-[#f6f7f5] text-[#172129] border-[#d8e0e1]'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
