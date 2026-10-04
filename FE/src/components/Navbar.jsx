import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, isDark, setIsDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo Emblem ONLY - No Brand Text */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center p-2.5 rounded-2xl transition-transform hover:scale-105 focus:outline-none"
          aria-label="Home"
        >
          <Logo isDark={isDark} className="h-7 w-auto" />
        </button>

        {/* Floating Centered Nav Pill */}
        <nav aria-label="Site navigation" className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border shadow-xl backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? 'bg-[#172129]/80 border-slate-700/60 shadow-black/40'
            : 'bg-white/95 border-[#d8e0e1] shadow-slate-200/80'
        }`}>
          {[
            { id: 'home', label: 'Overview' },
            { id: 'services', label: 'Services' },
            { id: 'work', label: 'Case Studies' },
            { id: 'contact', label: 'Inquiry' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === tab.id
                  ? isDark
                    ? 'bg-white text-[#172129] shadow'
                    : 'bg-[#172129] text-white shadow'
                  : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-[#5f6d74] hover:text-[#172129] hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right Action Controls: Theme Switcher & Schedule Call CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-full border transition-all hover:scale-105 ${
              isDark
                ? 'bg-[#172129] border-slate-700 text-yellow-400 hover:bg-slate-800'
                : 'bg-white border-[#d8e0e1] text-[#172129] hover:bg-slate-100 shadow-sm'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md hover:scale-[1.02] flex items-center gap-1.5 ${
              isDark
                ? 'bg-white text-[#172129] hover:bg-slate-200'
                : 'bg-[#172129] text-white hover:bg-black'
            }`}
          >
            Schedule Call
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl border ${
              isDark ? 'bg-[#172129] border-slate-700 text-yellow-400' : 'bg-white border-[#d8e0e1] text-[#172129]'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isDark ? 'bg-[#172129] border-slate-700 text-white' : 'bg-white border-[#d8e0e1] text-[#172129]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-3 p-4 rounded-3xl border shadow-2xl backdrop-blur-2xl pointer-events-auto space-y-2 ${
          isDark ? 'bg-[#172129] border-slate-700 text-white' : 'bg-white border-[#d8e0e1] text-[#172129]'
        }`}>
          {[
            { id: 'home', label: 'Overview' },
            { id: 'services', label: 'Services' },
            { id: 'work', label: 'Case Studies' },
            { id: 'contact', label: 'Inquiry' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-2xl text-sm font-medium ${
                activeTab === tab.id
                  ? isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-[#172129] font-bold'
                  : isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('contact');
              setMobileMenuOpen(false);
            }}
            className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider ${
              isDark ? 'bg-white text-[#172129]' : 'bg-[#172129] text-white'
            }`}
          >
            Schedule Call
          </button>
        </div>
      )}
    </header>
  );
}
