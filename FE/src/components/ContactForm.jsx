import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, UploadCloud, ChevronRight, ChevronLeft } from 'lucide-react';

const capabilityOptions = [
  'Autonomous AI Agents',
  'Enterprise RAG & Search',
  'Full-Stack Web Application',
  'Backend & API Infrastructure',
  'IoT / Hardware Telemetry Gateway',
  'System Architecture Audit'
];

const deploymentOptions = [
  'Managed Cloud API (OpenAI/Anthropic)',
  'Private Dedicated VPC (AWS/GCP/Azure)',
  'On-Premise / Edge Hardware Deployment',
  'Needs Architecture Advisory'
];

const timelineOptions = [
  'Immediate Sprint (1-2 Weeks)',
  'Standard Project (1-3 Months)',
  'Exploratory / Strategic Planning'
];

const budgetOptions = [
  '< $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+'
];

export default function ContactForm({ isDark }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCapabilities, setSelectedCapabilities] = useState(['Autonomous AI Agents']);
  const [selectedDeployment, setSelectedDeployment] = useState('Private Dedicated VPC (AWS/GCP/Azure)');
  const [selectedTimeline, setSelectedTimeline] = useState('Standard Project (1-3 Months)');
  const [selectedBudget, setSelectedBudget] = useState('$10,000 - $25,000');

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
    fileName: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState(null);

  const toggleCapability = (option) => {
    if (selectedCapabilities.includes(option)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter((c) => c !== option));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, option]);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setContactData({ ...contactData, fileName: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseState(null);

    const payload = {
      name: contactData.name,
      email: contactData.email,
      company: contactData.company,
      service: selectedCapabilities.join(', '),
      deployment: selectedDeployment,
      timeline: selectedTimeline,
      budget: selectedBudget,
      message: contactData.requirements,
      attachedFile: contactData.fileName || 'None'
    };

    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseState({
          type: 'success',
          text: data.message,
          refId: data.refId
        });
      } else {
        setResponseState({
          type: 'error',
          text: data.message || 'Error processing inquiry.'
        });
      }
    } catch (err) {
      console.error(err);
      setResponseState({
        type: 'error',
        text: 'Backend server offline. Ensure Express API is active on port 5000.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'border-slate-800 bg-[#0b0f17] text-white' : 'border-[#d8e0e1] bg-[#f6f7f5] text-[#172129]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl transition-colors ${
          isDark ? 'bg-[#172129] border-slate-800' : 'bg-white border-[#d8e0e1]'
        }`}>
          {/* Form Title & Progress Bar */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cobalt-600/10 text-cobalt-600 border border-cobalt-600/20 mb-3">
              INTERACTIVE PROJECT INQUIRY FUNNEL
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
              Scope Your Technical Project
            </h2>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center space-x-2">
                  <div
                    onClick={() => step < currentStep && setCurrentStep(step)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      currentStep === step
                        ? isDark
                          ? 'bg-white text-[#172129] shadow-md ring-2 ring-white ring-offset-2 ring-offset-[#172129]'
                          : 'bg-[#172129] text-white shadow-md ring-2 ring-[#172129] ring-offset-2 ring-offset-white'
                        : currentStep > step
                        ? 'bg-emerald-600 text-white cursor-pointer'
                        : isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {currentStep > step ? '✓' : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 sm:w-16 h-0.5 ${
                      currentStep > step ? 'bg-emerald-600' : isDark ? 'bg-slate-800' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Response Banner */}
          {responseState?.type === 'success' && (
            <div className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 space-y-3 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#172129]'}`}>Scoping Inquiry Received!</h3>
              <p className="text-sm">{responseState.text}</p>
              <div className="pt-2 text-xs font-mono font-bold text-emerald-600">
                Tracking Reference ID: <span className="underline">{responseState.refId}</span>
              </div>
            </div>
          )}

          {responseState?.type === 'error' && (
            <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>{responseState.text}</span>
            </div>
          )}

          {/* Step 1: Capabilities Multi-Select */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                Step 1: Select Project Capabilities (Multi-Select)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilityOptions.map((opt) => {
                  const selected = selectedCapabilities.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleCapability(opt)}
                      className={`p-4 rounded-2xl border text-left font-semibold text-xs transition-all ${
                        selected
                          ? isDark
                            ? 'bg-white text-[#172129] border-white font-bold shadow-md'
                            : 'bg-[#172129] text-white border-[#172129] font-bold shadow-md'
                          : isDark
                            ? 'bg-[#0b0f17] border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {selected && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isDark ? 'bg-white text-[#172129] hover:bg-slate-200' : 'bg-[#172129] text-white hover:bg-black'
                  }`}
                >
                  Next: Security Requirements
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Deployment & Security */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                Step 2: Deployment & Data Security Requirements
              </h3>
              <div className="space-y-3">
                {deploymentOptions.map((opt) => {
                  const selected = selectedDeployment === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedDeployment(opt)}
                      className={`w-full p-4 rounded-2xl border text-left font-semibold text-xs transition-all flex items-center justify-between ${
                        selected
                          ? isDark
                            ? 'bg-white text-[#172129] border-white font-bold shadow-md'
                            : 'bg-[#172129] text-white border-[#172129] font-bold shadow-md'
                          : isDark
                            ? 'bg-[#0b0f17] border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] hover:border-slate-400'
                      }`}
                    >
                      <span>{opt}</span>
                      {selected && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 ${
                    isDark ? 'border-slate-700 text-slate-300 hover:text-white' : 'border-[#172129] text-[#172129] hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isDark ? 'bg-white text-[#172129] hover:bg-slate-200' : 'bg-[#172129] text-white hover:bg-black'
                  }`}
                >
                  Next: Timeline & Budget
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Timeline & Budget */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                Step 3: Target Timeline & Investment Parameters
              </h3>

              <div>
                <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                }`}>
                  Target Launch Window:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedTimeline(opt)}
                      className={`p-3 rounded-2xl border text-xs font-semibold text-center transition-all ${
                        selectedTimeline === opt
                          ? isDark
                            ? 'bg-white text-[#172129] font-bold'
                            : 'bg-[#172129] text-white font-bold'
                          : isDark
                            ? 'bg-[#0b0f17] border-slate-800 text-slate-300'
                            : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                }`}>
                  Investment Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedBudget(opt)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-center transition-all ${
                        selectedBudget === opt
                          ? isDark
                            ? 'bg-white text-[#172129] font-bold'
                            : 'bg-[#172129] text-white font-bold'
                          : isDark
                            ? 'bg-[#0b0f17] border-slate-800 text-slate-300'
                            : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 ${
                    isDark ? 'border-slate-700 text-slate-300 hover:text-white' : 'border-[#172129] text-[#172129] hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isDark ? 'bg-white text-[#172129] hover:bg-slate-200' : 'bg-[#172129] text-white hover:bg-black'
                  }`}
                >
                  Next: Contact Specs
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact & File Upload */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#172129]'}`}>
                Step 4: Contact Details & Technical Specs
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className={`w-full p-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 ${
                      isDark
                        ? 'bg-[#0b0f17] border-slate-800 text-white placeholder-slate-600 focus:ring-white'
                        : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] placeholder-slate-400 focus:ring-[#172129]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                  }`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full p-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 ${
                      isDark
                        ? 'bg-[#0b0f17] border-slate-800 text-white placeholder-slate-600 focus:ring-white'
                        : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] placeholder-slate-400 focus:ring-[#172129]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                }`}>
                  Company Name
                </label>
                <input
                  type="text"
                  value={contactData.company}
                  onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                  placeholder="e.g. Apex Dynamics Ltd"
                  className={`w-full p-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-[#0b0f17] border-slate-800 text-white placeholder-slate-600 focus:ring-white'
                      : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] placeholder-slate-400 focus:ring-[#172129]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                }`}>
                  Technical Requirements Summary
                </label>
                <textarea
                  rows={3}
                  value={contactData.requirements}
                  onChange={(e) => setContactData({ ...contactData, requirements: e.target.value })}
                  placeholder="Briefly describe your software architecture goals or system constraints..."
                  className={`w-full p-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-[#0b0f17] border-slate-800 text-white placeholder-slate-600 focus:ring-white'
                      : 'bg-[#f6f7f5] border-[#d8e0e1] text-[#172129] placeholder-slate-400 focus:ring-[#172129]'
                  }`}
                />
              </div>

              {/* Secure File Upload */}
              <div>
                <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-slate-400' : 'text-[#5f6d74]'
                }`}>
                  Secure File Attachment (RFP, System Diagrams, Specifications)
                </label>
                <label className={`border-2 border-dashed rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                  isDark ? 'bg-[#0b0f17] border-slate-800 hover:border-white' : 'bg-[#f6f7f5] border-[#d8e0e1] hover:border-[#172129]'
                }`}>
                  <UploadCloud className="w-6 h-6 mb-1 text-cobalt-600" />
                  <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-[#172129]'}`}>
                    {contactData.fileName ? `Attached: ${contactData.fileName}` : 'Click or Drag PDF / RFP document'}
                  </span>
                  <input type="file" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 ${
                    isDark ? 'border-slate-700 text-slate-300 hover:text-white' : 'border-[#172129] text-[#172129] hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg disabled:opacity-50 ${
                    isDark ? 'bg-white text-[#172129] hover:bg-slate-200' : 'bg-[#172129] text-white hover:bg-black'
                  }`}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit & Schedule Technical Scoping Call'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
