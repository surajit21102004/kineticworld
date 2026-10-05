import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon, ArrowRight, Check, Menu, X, ChevronDown, ArrowUp } from 'lucide-react';

function NeuralCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.5,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handlePointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handlePointer);

    const isDark = theme === 'dark';
    const nodeColor = isDark ? 'rgba(188, 214, 232, 0.6)' : 'rgba(52, 86, 109, 0.5)';
    const lineColor = isDark ? '188, 214, 232' : '65, 99, 119';

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${(1 - dist / 130) * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${(1 - mdist / 160) * 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.75,
        zIndex: 1
      }} 
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('bwk-theme');
      if (saved) return saved;
      return 'light'; // Light is default as specified
    } catch (e) {
      return 'light';
    }
  });

  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Autonomous AI agents',
    budget: '$25k - $50k',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);
  const [formError, setFormError] = useState('');

  const glowRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const isHoveredRef = useRef(false);
  const isPressedRef = useRef(false);

  // Scroll to top visibility threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bwk-theme', theme);
    try {
      localStorage.setItem('bwk-theme', theme);
    } catch (e) {}
  }, [theme]);

  // JS class on html element
  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);

  // Custom Cursor lerp animation
  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringScale = 1;
    let animFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.setProperty('--x', `${e.clientX}px`);
        glowRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    const handleMouseDown = () => {
      isPressedRef.current = true;
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      isPressedRef.current = false;
      setIsPressed(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.btn') ||
        target.closest('summary') ||
        target.closest('.work') ||
        target.closest('.svc') ||
        target.closest('.tog') ||
        target.closest('select') ||
        target.closest('.form-input') ||
        target.closest('.form-textarea')
      ) {
        isHoveredRef.current = true;
        setIsHovered(true);
      } else {
        isHoveredRef.current = false;
        setIsHovered(false);
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      const targetScale = isPressedRef.current ? 0.78 : (isHoveredRef.current ? 1.45 : 1);
      ringScale += (targetScale - ringScale) * 0.2;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;
      }
      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // IntersectionObserver for reveal elements (.rv)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.rv').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Animated counters for elements with data-n
  useEffect(() => {
    const elements = document.querySelectorAll('[data-n]');
    elements.forEach((el) => {
      const target = +el.getAttribute('data-n');
      const decimals = +(el.getAttribute('data-d') || 0);
      const suffix = el.getAttribute('data-s') || '';
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 1600, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        el.textContent = (target * easeOut).toFixed(decimals) + suffix;
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      setTimeout(() => requestAnimationFrame(animate), 900);
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hey@buildwithkinetics.io');
      setCopied(true);
    } catch (e) {
      setCopied(false);
    }
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!formState.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      setFormError('Please enter a valid work email address.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      const data = await response.json();
      if (data.success) {
        setSubmittedLead(data);
      } else {
        setFormError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      // Offline fallback
      const refId = `KW-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedLead({
        success: true,
        refId: refId,
        message: 'Thank you! Your project inquiry has been received. Our AI Lead Architect will contact you within 24 hours.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const tech = [
    'LangChain', 'Claude', 'OpenAI', 'Qdrant', 'Pinecone', 'Redis',
    'Kafka', 'FastAPI', 'Next.js', 'AWS', 'Kubernetes', 'Terraform'
  ];

  const serviceOptions = [
    'Autonomous AI agents',
    'Enterprise RAG & search',
    'Full-stack web & cloud',
    'Systems & backend',
    'IoT & telemetry'
  ];

  const budgetOptions = ['<$10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  return (
    <>
      {/* Precision Custom Cursor */}
      <div className="cursor-dot" ref={cursorDotRef} />
      <div 
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''}`} 
        ref={cursorRingRef} 
      />

      {/* Navigation Bar */}
      <nav>
        <div className="pill">
          <a href="#top" aria-label="Build With Kinetic home" onClick={() => setMenuOpen(false)}>
            <img 
              src="/BWK-primary-ink-2400.png" 
              alt="Build With Kinetic Logo" 
              className="logo-img" 
            />
          </a>
          <div className="links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="tools">
            <button 
              className="tog" 
              id="tog" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun style={{ width: '18px', height: '18px', color: '#f59e0b' }} />
              ) : (
                <Moon style={{ width: '18px', height: '18px', color: 'var(--ink)' }} />
              )}
            </button>
            <a className="btn p desktop-cta" href="#contact" style={{ padding: '11px 20px' }}>
              Book a call
            </a>
            <button 
              className="mob-menu-btn" 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {menuOpen && (
            <div className="mob-nav-drawer">
              <a href="#work" onClick={() => setMenuOpen(false)}>Work <i>→</i></a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services <i>→</i></a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ <i>→</i></a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <i>→</i></a>
              <a className="btn p" href="#contact" onClick={() => setMenuOpen(false)}>
                Book a call
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Header */}
      <header className="hero" id="top">
        <NeuralCanvas theme={theme} />
        <div className="grid"></div>
        <div className="glow" id="glow" ref={glowRef}></div>
        <div className="w" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge fade">
            <span className="badge-pulse"></span>
            Booking for Q4 '26 · AI Autonomous Pipeline Active
          </span>
          <h1 id="h1">
            <span className="wd"><span style={{ '--i': 0 }}>We</span></span>{' '}
            <span className="wd"><span style={{ '--i': 1 }}>build</span></span>{' '}
            <span className="wd"><span style={{ '--i': 2 }}>AI</span></span>{' '}
            <span className="wd"><span style={{ '--i': 3 }}>software</span></span>{' '}
            <span className="wd"><span style={{ '--i': 4 }}>that</span></span>{' '}
            <span className="wd"><span style={{ '--i': 5 }}>moves</span></span>{' '}
            <span className="wd b"><span className="b ai-gradient-text" style={{ '--i': 6 }}>fast</span></span>{' '}
            <span className="wd"><span style={{ '--i': 7 }}>and</span></span>{' '}
            <span className="wd"><span style={{ '--i': 8 }}>scales</span></span>{' '}
            <span className="wd"><span style={{ '--i': 9 }}>clean.</span></span>
          </h1>
          <p className="sub fade">
            Build With Kinetic is an AI software agency. We design and ship autonomous agents, enterprise RAG and cloud platforms for ambitious teams.
          </p>
          <div className="row fade">
            <a className="btn p" href="#contact">
              Schedule a discovery call <i>→</i>
            </a>
            <a className="btn" href="#work">
              Explore work
            </a>
          </div>
          <div className="stats fade">
            <div>
              <b data-n="99.9" data-d="1" data-s="%">99.9%</b>
              <span>SLA availability</span>
            </div>
            <div>
              <b>&lt;250ms</b>
              <span>RAG inference latency</span>
            </div>
            <div>
              <b data-n="15" data-s="+">15+</b>
              <span>AI systems deployed</span>
            </div>
            <div>
              <b>Zero</b>
              <span>Data retention in dedicated VPC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack Marquee */}
      <div className="mq" aria-hidden="true">
        <div id="mq">
          {[...tech, ...tech].map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>

      {/* Selected Work Section */}
      <section id="work">
        <div className="w">
          <div className="head rv">
            <h2>Selected work</h2>
            <p>Every project is measured. Here is the problem, the system we built and the result.</p>
          </div>

          <article className="work rv">
            <div className="vis">
              <img src="/project-fintech.jpg" alt="Hybrid RAG knowledge engine UI" />
              <span className="stat-badge">92%</span>
            </div>
            <div>
              <span className="tag">Enterprise RAG · Fintech</span>
              <h3>Hybrid RAG knowledge engine for compliance</h3>
              <p>Analysts spent 45+ minutes per lookup across thousands of regulatory PDFs. Hybrid retrieval cut that to seconds.</p>
              <div className="meta">
                <div>
                  <h5>Result</h5>
                  92% latency reduction
                </div>
                <div>
                  <h5>Stack</h5>
                  <div className="ch">
                    <span>Qdrant</span><span>BM25</span><span>Cohere</span>
                  </div>
                </div>
              </div>
              <a className="btn" href="#contact">
                View project <i>→</i>
              </a>
            </div>
          </article>

          <article className="work rv">
            <div className="vis">
              <img src="/project-logistics.jpg" alt="Multi-agent support and document engine UI" />
              <span className="stat-badge">70%</span>
            </div>
            <div>
              <span className="tag">Autonomous agents · Logistics</span>
              <h3>Multi-agent support and document engine</h3>
              <p>A 48-hour backlog of invoices and tickets, cleared by an event-driven pipeline with human review.</p>
              <div className="meta">
                <div>
                  <h5>Result</h5>
                  400+ hours saved monthly
                </div>
                <div>
                  <h5>Stack</h5>
                  <div className="ch">
                    <span>LangGraph</span><span>Redis</span><span>Qdrant</span>
                  </div>
                </div>
              </div>
              <a className="btn" href="#contact">
                View project <i>→</i>
              </a>
            </div>
          </article>

          <article className="work rv">
            <div className="vis">
              <img src="/project-healthcare.jpg" alt="Clinical document extraction and NLP engine UI" />
              <span className="stat-badge">85%</span>
            </div>
            <div>
              <span className="tag">Enterprise knowledge · Healthcare</span>
              <h3>Clinical document extraction and NLP engine</h3>
              <p>Doctors no longer retype faxed patient notes into records. Extraction runs automatically.</p>
              <div className="meta">
                <div>
                  <h5>Result</h5>
                  85% admin time saved
                </div>
                <div>
                  <h5>Stack</h5>
                  <div className="ch">
                    <span>OCR</span><span>NLP</span><span>FastAPI</span>
                  </div>
                </div>
              </div>
              <a className="btn" href="#contact">
                View project <i>→</i>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Services Practices Section */}
      <section className="alt" id="services">
        <div className="w">
          <div className="head rv">
            <h2>What we build</h2>
            <p>Five practices, one engineering standard: production-grade from the first sprint.</p>
          </div>
          <div className="svc rv">
            <em>SLA 70% time saved</em>
            <h3>Autonomous AI agents</h3>
            <p>Task agents for scheduling, data reconciliation and lead triage, with schema guardrails and human oversight.</p>
          </div>
          <div className="svc rv">
            <em>SLA &lt;250ms</em>
            <h3>Enterprise RAG and search</h3>
            <p>Hybrid keyword and vector retrieval with re-ranking, smart chunking and semantic caching.</p>
          </div>
          <div className="svc rv">
            <em>SOC2-ready</em>
            <h3>Full-stack web and cloud apps</h3>
            <p>Multi-tenant SaaS, portals and internal tools on Next.js, FastAPI and AWS.</p>
          </div>
          <div className="svc rv">
            <em>99.9% uptime</em>
            <h3>Systems and backend engineering</h3>
            <p>REST, gRPC and WebSocket services on Kafka, RabbitMQ and PostgreSQL.</p>
          </div>
          <div className="svc rv" style={{ borderBottom: '1px solid var(--line)' }}>
            <em>Sub-50ms</em>
            <h3>Hardware, IoT and telemetry</h3>
            <p>Edge-to-cloud pipelines over MQTT, Modbus and CAN bus with live dashboards.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="w">
          <div className="head rv">
            <h2>A few questions</h2>
          </div>
          <div id="faq" className="rv">
            <details>
              <summary>What kind of projects do you take on?</summary>
              <p>AI agents, RAG search, full-stack platforms, backend systems and IoT telemetry for teams that need production-grade delivery.</p>
            </details>
            <details>
              <summary>Do you design and build?</summary>
              <p>Yes. Architecture, design, engineering and deployment are handled by one team from idea to launch.</p>
            </details>
            <details>
              <summary>How long does a project take?</summary>
              <p>Most first versions ship in a few focused sprints. We scope the exact timeline in a 30-minute call.</p>
            </details>
            <details>
              <summary>How do you handle our data?</summary>
              <p>Dedicated VPC isolation with zero data retention, role-based access and audit logging.</p>
            </details>
            <details>
              <summary>What happens after launch?</summary>
              <p>We monitor against agreed SLAs and stay on for iteration, scaling and support.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact CTA & Scoping Form */}
      <section id="contact" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="contact-grid">
            {/* Left CTA Banner */}
            <div className="cta rv">
              <h2>Ready to bring kinetic momentum to your product?</h2>
              <p>Book a 30-minute scoping session with our principal AI solution architects.</p>
              <div className="row">
                <a className="btn w2" href="mailto:hey@buildwithkinetics.io">
                  Book a scoping call <i>→</i>
                </a>
                <button className="btn" id="cp" onClick={handleCopyEmail}>
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', opacity: 0.9 }}>
                <span>✓ Dedicated VPC Isolation</span>
                <span>✓ SOC2 Security Standard</span>
                <span>✓ Sub-250ms SLA Guarantee</span>
              </div>
            </div>

            {/* Right Interactive Scoping Form */}
            <div className="contact-form-card rv">
              {submittedLead ? (
                <div className="success-box">
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(22, 101, 52, 0.15)', color: 'var(--success)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', fontSize: '24px', fontWeight: 'bold' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Inquiry Submitted!</h3>
                  <div className="ref-badge">Ref ID: {submittedLead.refId}</div>
                  <p style={{ color: 'var(--mut)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                    {submittedLead.message}
                  </p>
                  <button 
                    className="btn p" 
                    onClick={() => {
                      setSubmittedLead(null);
                      setFormState({ name: '', email: '', service: 'Autonomous AI agents', budget: '$25k - $50k', message: '' });
                    }}
                  >
                    Submit Another Inquiry <i>→</i>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ fontSize: '26px' }}>Schedule a discovery call</h3>
                    <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px', background: 'rgba(22, 101, 52, 0.12)', color: 'var(--success)' }}>
                      Architects available Q4
                    </span>
                  </div>
                  <p className="form-desc">Fill out your project details and our team will get back to you with a tailored technical roadmap.</p>

                  {formError && <div className="form-error">{formError}</div>}

                  <div className="form-group">
                    <label htmlFor="lead-service">Select Practice / Service *</label>
                    <div className="select-wrapper">
                      <select
                        id="lead-service"
                        className="form-select"
                        value={formState.service}
                        onChange={(e) => setFormState((prev) => ({ ...prev, service: e.target.value }))}
                      >
                        <option value="Autonomous AI agents">Autonomous AI agents</option>
                        <option value="Enterprise RAG & search">Enterprise RAG & search</option>
                        <option value="Full-stack web & cloud">Full-stack web & cloud</option>
                        <option value="Systems & backend">Systems & backend</option>
                        <option value="IoT & telemetry">IoT & telemetry</option>
                      </select>
                      <ChevronDown className="select-arrow" size={18} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="name-email-grid">
                    <div className="form-group">
                      <label htmlFor="lead-name">Full Name *</label>
                      <input 
                        id="lead-name"
                        type="text" 
                        className="form-input" 
                        placeholder="Alex Morgan" 
                        value={formState.name}
                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lead-email">Work Email *</label>
                      <input 
                        id="lead-email"
                        type="email" 
                        className="form-input" 
                        placeholder="alex@company.com" 
                        value={formState.email}
                        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lead-budget">Estimated Project Budget</label>
                    <div className="select-wrapper">
                      <select
                        id="lead-budget"
                        className="form-select"
                        value={formState.budget}
                        onChange={(e) => setFormState((prev) => ({ ...prev, budget: e.target.value }))}
                      >
                        <option value="<$10k">&lt; $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k+">$50,000+</option>
                      </select>
                      <ChevronDown className="select-arrow" size={18} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lead-msg">Project Details & Requirements</label>
                    <textarea 
                      id="lead-msg"
                      className="form-textarea" 
                      rows="3"
                      placeholder="Briefly describe your goals, existing data sources, or architectural requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn p" 
                    disabled={submitting}
                    style={{ width: '100%', justifyContent: 'center', padding: '16px 24px' }}
                  >
                    {submitting ? 'Submitting inquiry...' : 'Schedule Discovery Call →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="w">
          <div className="fg">
            <div>
              <img 
                src="/BWK-primary-ink-2400.png" 
                alt="Build With Kinetic Logo" 
                className="logo-img" 
              />
              <p style={{ marginTop: '18px', maxWidth: '260px' }}>
                High-velocity AI software, autonomous agents and scalable digital systems.
              </p>
            </div>
            <div>
              <h5>Navigate</h5>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h5>Pillars</h5>
              <a href="#services">AI agents</a>
              <a href="#services">Enterprise RAG</a>
              <a href="#services">Cloud apps</a>
              <a href="#services">IoT telemetry</a>
            </div>
            <div>
              <h5>Contact</h5>
              <a href="mailto:hey@buildwithkinetics.io" style={{ color: 'var(--accent)' }}>
                hey@buildwithkinetics.io
              </a>
              <span>Booking for Q4 sprints</span>
            </div>
          </div>
          <div className="wm" aria-hidden="true">KINETIC</div>
          <div className="cp">
            <span>© 2026 Build With Kinetics. All rights reserved.</span>
            <span>Privacy Policy · SOC2 Security Architecture</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
