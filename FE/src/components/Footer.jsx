import React from 'react';
import Logo from './Logo';

export default function Footer({ setActiveTab, isDark }) {
  return (
    <footer className={`py-12 border-t transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#060910] text-slate-400' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#5f6d74]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center transition-transform hover:scale-105 focus:outline-none"
              aria-label="Home"
            >
              <Logo isDark={isDark} className="h-7 w-auto" />
            </button>
            <p className="text-xs leading-relaxed">
              Engineering high-velocity AI software, autonomous multi-agent networks, and scalable digital systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`text-xs uppercase font-mono font-bold tracking-wider mb-3 ${
              isDark ? 'text-white' : 'text-[#172129]'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-cobalt-600 transition-colors">Overview</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cobalt-600 transition-colors">Practice Areas</button></li>
              <li><button onClick={() => setActiveTab('work')} className="hover:text-cobalt-600 transition-colors">Case Studies</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-cobalt-600 transition-colors">Project Inquiry</button></li>
            </ul>
          </div>

          {/* Core Pillars */}
          <div>
            <h4 className={`text-xs uppercase font-mono font-bold tracking-wider mb-3 ${
              isDark ? 'text-white' : 'text-[#172129]'
            }`}>
              Core Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Autonomous AI Agents</li>
              <li>Enterprise RAG & Search</li>
              <li>Cloud & Microservices</li>
              <li>IoT & Edge Telemetry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xs uppercase font-mono font-bold tracking-wider mb-3 ${
              isDark ? 'text-white' : 'text-[#172129]'
            }`}>
              Contact & Scoping
            </h4>
            <p className="text-xs font-mono font-bold text-cobalt-600 mb-2">
              hey@buildwithkinetics.io
            </p>
            <div className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              ● Availability: Booking for Q3/Q4 Sprints
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] ${
          isDark ? 'border-slate-800' : 'border-[#d8e0e1]'
        }`}>
          <div>
            © {new Date().getFullYear()} Build With Kinetics. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0 font-mono">
            <a href="#" className="hover:text-cobalt-600">Privacy Policy</a>
            <a href="#" className="hover:text-cobalt-600">SOC2 Security Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
