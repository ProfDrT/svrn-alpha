import { useState, useEffect } from "react";

// ─── SVRN ALPHA ─── Sovereign Intelligence.
// DESIGN: "Sovereign Terminal" (Black, Signal Green, Alpha Gold, JetBrains Mono)
// CONTENT: Full multi-page structure (Home, Research, Case Study, Whitepaper, Press, About)

const THEME = {
  black: "#050505",
  surface: "#0A0A0B",
  card: "#111113",
  border: "#27272A", // Zinc-800
  borderHover: "#3F3F46",
  primary: "#10B981", // Signal Green
  primaryDim: "#059669",
  accent: "#D4AF37", // Alpha Gold
  accentDim: "#B45309",
  text: "#F4F4F5",
  textSoft: "#A1A1AA",
  textMuted: "#52525B",
  textDim: "#27272A",
  success: "#10B981",
  warning: "#F59E0B",
  red: "#EF4444",
  blue: "#3B82F6",
  cyan: "#06B6D4",
};

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";

const C = THEME;

// ═══════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════

const Badge = ({ children, variant = "primary" }) => {
  const colors = { primary: C.primary, accent: C.accent, red: C.red, blue: C.blue, cyan: C.cyan };
  const color = colors[variant] || C.primary;
  return (
    <span style={{
      display: "inline-block", padding: "4px 10px", borderRadius: 4,
      border: `1px solid ${color}40`, background: `${color}10`,
      fontFamily: mono, fontSize: 11, fontWeight: 600, color, letterSpacing: "0.05em",
    }}>{children}</span>
  );
};

const ReadingTime = ({ minutes }) => (
  <span style={{ fontFamily: mono, fontSize: 10, color: C.textMuted, letterSpacing: "0.08em" }}>
    {minutes} MIN READ
  </span>
);

const ArticleLayout = ({ children, maxWidth = 780 }) => (
  <div style={{ maxWidth, margin: "0 auto" }}>{children}</div>
);

// ═══════════════════════════════════════════════════════
// DATA & CONTENT
// ═══════════════════════════════════════════════════════

const blogArticles = [
  {
    id: "70-percent",
    badge: "// M_01 · HUMAN_LAYER",
    title: "Why 70% of AI Initiatives in Banking Fail — and It's Not the Technology",
    subtitle: "The organizational transformation most banks refuse to fund.",
    date: "February 7, 2026",
    author: "Prof. Dr. Tobias Blask",
    readTime: 8,
    keyword: "AI transformation banking",
    metaDesc: "70% of AI initiatives in investment banking fail because banks invest in technology while ignoring organizational change. Here's the framework that works.",
    sections: [
      {
        heading: "The Pattern Nobody Wants to Acknowledge",
        body: `Every major investment bank has an AI initiative. Most have several. They hire data scientists, license platforms, build pipelines, and present quarterly updates to the board with impressive-sounding metrics.

And then, quietly, most of these initiatives fail.

Not dramatically. Not with a single catastrophic event. They fail the way most organizational projects fail — through slow attrition. The models don't get adopted. The workflows don't change. The analysts keep doing things the way they always have, with a shiny new tool sitting unused in the corner.

The industry-wide failure rate for AI transformation in financial services sits somewhere around 70%, depending on which research you trust. McKinsey, BCG, Gartner — they all arrive at roughly the same number, though they disagree on the causes.

Here's what a decade of academic research and practical implementation has taught me: the cause is almost never the technology.`
      },
      {
        heading: "The Budget Inversion Problem",
        body: `When a bank allocates budget for AI transformation, the split typically looks something like this: 80-90% goes to technology — platforms, infrastructure, data engineering, model development. The remaining 10-20% covers change management, usually as an afterthought. A few workshops. An internal newsletter. Maybe a town hall.

This allocation is precisely backwards.

Our research — and more importantly, our implementation experience — shows that the real split should be closer to 70/30 in the other direction. 70% of transformation success depends on organizational factors: how people think about AI, how workflows restructure, how leadership commits to the change. The technology is the enabler. It's necessary. But it's the minority of the equation.

Banks spend 90% of their budget on 30% of the problem. Then they wonder why nothing changes.`
      },
      {
        heading: "The Three Failures",
        body: `Failure One: Education Deficit. Most AI initiatives skip straight to deployment. They hand analysts a new tool and expect adoption. But the fundamental question isn't "can your people use the tool?" — it's "do your people understand how AI changes what they do?" The shift from Creator to Curator is cognitive, not technical. An analyst who has spent fifteen years building models from scratch needs to understand why curating AI-generated outputs is not a demotion — it's an evolution that lets them focus on what actually generates alpha.

Failure Two: Process Rigidity. Dropping AI into existing workflows is like putting a jet engine on a bicycle. The workflows themselves need to restructure. Today's typical analyst spends 70% of their time on routine tasks — gathering data, formatting reports, updating models. AI can invert that ratio: 70% strategic, 30% routine. But this requires redesigning workflows from the ground up, not layering technology on top of broken processes.

Failure Three: Abdicated Leadership. AI transformation is not an IT project. It is an organizational transformation. When the C-suite delegates this to the technology department, it sends a clear signal: this isn't a strategic priority, it's a tooling upgrade. The transformation dies there. Every successful AI deployment we've studied or executed has one thing in common: the CEO or Managing Director personally owned it.`
      },
      {
        heading: "The Framework That Works",
        body: `At SVRN ALPHA, we built the three-pillar model specifically to address these failure modes. The pillars are sequential and non-negotiable:

Pillar 1 — Education. Before touching a single workflow or deploying any technology, we build AI fluency across the organization. Not coding skills — strategic fluency. Helping every level, from the trading floor to the boardroom, understand how AI changes their role, their decisions, and their output. This is where Creator-to-Curator happens.

Pillar 2 — Processes. With the right mental model in place, we restructure workflows. The capacity flip — from 70% routine to 70% strategic — happens here. We map every analyst workflow, identify where AI creates genuine leverage, and redesign the process around human-AI collaboration. Human-in-the-Loop isn't a feature we add; it's the architecture we design around.

Pillar 3 — Technology. Only after Education and Processes are in place do we deploy infrastructure. And when we do, it's sovereign: private cloud, EU-hosted, vendor-agnostic, fully auditable. The technology serves the transformation, not the other way around.

Skip Pillar 1, and Pillars 2 and 3 collapse. We've seen it happen repeatedly. The order is the methodology.`
      },
    ],
  },
  {
    id: "creator-curator",
    badge: "// M_01 · CAPACITY_FLIP",
    title: "From Creator to Curator: The Capacity Flip That Changes Everything",
    subtitle: "Why the most valuable shift in banking AI isn't technical — it's cognitive.",
    date: "February 5, 2026",
    author: "Prof. Dr. Tobias Blask",
    readTime: 7,
    keyword: "creator curator AI banking",
    metaDesc: "The Creator-to-Curator shift inverts the analyst capacity ratio from 70% routine to 70% strategic. Here's the methodology behind the capacity flip.",
    sections: [
      {
        heading: "What a Research Analyst Actually Does All Day",
        body: `If you shadow a research analyst at a mid-tier European investment bank for a week, the breakdown looks remarkably consistent. About 70% of their time goes to tasks that are necessary but fundamentally routine: pulling data from terminals, populating spreadsheet models, formatting reports to house style, cross-referencing regulatory filings, updating pitch books.

The remaining 30% — the analysis, the insight generation, the pattern recognition that draws on years of domain expertise — is the work that actually generates value. It's the work clients pay for. It's the work that differentiates one bank from another.

The uncomfortable truth: most of what a highly paid, highly trained financial professional does all day could be handled by a well-designed AI workflow. Not the judgment. Not the insight. Not the relationship management. But the data gathering, the formatting, the routine processing that consumes most of their week.

The question isn't whether AI can handle this. It already can. The question is whether your organization is structured to let your people do what only they can do.`
      },
      {
        heading: "Creator vs. Curator: A Cognitive Shift",
        body: `The traditional analyst is a Creator. They build reports from scratch. They construct models cell by cell. They write research notes word by word. The output is entirely their creation, and the quality depends on their individual skill and the time they invest.

The AI-enabled analyst is a Curator. They receive AI-generated drafts, data summaries, and model outputs — then they apply judgment. They verify. They contextualize. They add the insight that comes from understanding the client, the market dynamics, the regulatory landscape, the institutional relationships that no model captures.

This shift sounds simple. It is not.

For a professional who has built their identity around being the person who builds the model, the shift to being the person who validates and enriches the model's output feels like a demotion. If nobody explains why curation is actually the higher-value activity — the one that requires more expertise, not less — the resistance will be silent and total.

This is why Education must come before Process. The cognitive shift has to precede the workflow change. You cannot restructure someone's daily routine without first restructuring how they think about their role.`
      },
    ],
  },
  {
    id: "data-sovereignty",
    badge: "// M_03 · INFRA_LAYER",
    title: "Your Data Moat Is the Only Alpha Left",
    subtitle: "When everyone has the same models, the edge is what you feed them.",
    date: "February 3, 2026",
    author: "Prof. Dr. Tobias Blask",
    readTime: 6,
    keyword: "data sovereignty investment banking AI",
    metaDesc: "Every bank has access to the same AI models. The competitive edge is proprietary data — and the sovereign infrastructure that protects it.",
    sections: [
      {
        heading: "The Commoditization of Intelligence",
        body: `GPT-4. Claude. Gemini. Llama. Mistral. The large language models that power modern AI are rapidly becoming commodities. Every major technology provider offers essentially the same capabilities at increasingly similar price points.

For investment banking, this creates a paradox. If every bank has access to the same AI models, where is the competitive advantage? The answer isn't in the model. It's in what you feed it.

Your proprietary data — twenty years of research notes, client interaction histories, deal structures, market insights, institutional knowledge accumulated analyst by analyst, deal by deal — is the only asset your competitors cannot replicate. It's the only genuine moat in an era of commoditized intelligence.

And most banks are handing this moat to third-party vendors.`
      },
      {
        heading: "What Sovereign Actually Means",
        body: `Sovereignty in AI infrastructure means four things:

Residency. Your data is processed and stored within EU jurisdiction. Not "available in EU regions" — genuinely hosted on infrastructure that answers to European law.

Ownership. You own the infrastructure. Not rent it. Not license it. Own it. When the engagement ends, everything stays with you — the models, the fine-tuning, the knowledge graphs, the workflows. Zero vendor dependency.

Auditability. Every AI-assisted decision has a full audit trail. You can explain to a regulator exactly how an output was generated, what data informed it, and what human checkpoints were involved. This isn't a feature; it's a compliance requirement under MiFID II and the EU AI Act.

Portability. If you want to change providers, migrate infrastructure, or bring everything in-house, you can. No lock-in. No proprietary formats that only work with one vendor. No dependency that gives a single provider leverage over your operations.`
      },
    ],
  },
];


// ═══════════════════════════════════════════════════════
// PAGE COMPONENTS
// ═══════════════════════════════════════════════════════

const Nav = ({ current, onNavigate }) => {
  const [hover, setHover] = useState(null);

  const items = [
    { id: "home", label: "Vision" },
    { id: "blog", label: "Research" },
    { id: "case-study", label: "Reference" },
    { id: "whitepaper", label: "Framework" },
    { id: "about", label: "Founder" },
  ];

  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 60px", borderBottom: `1px solid ${C.border}`,
      position: "sticky", top: 0, zIndex: 100,
      background: `${C.black}F0`, backdropFilter: "blur(12px)",
    }}>
      <div
        onClick={() => onNavigate("home")}
        style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
      >
        <div style={{
          width: 34, height: 34, borderRadius: 6,
          background: `linear-gradient(135deg, ${C.primaryDim}, ${C.primary} 120%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: mono, fontWeight: 800, fontSize: 13, color: C.black
        }}>_SA</div>
        <span style={{ fontFamily: mono, fontWeight: 700, letterSpacing: "-0.02em", fontSize: 18 }}>
          SVRN<span style={{ color: C.primary }}>_ALPHA</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {items.map((item, i) => (
          <span
            key={item.id}
            onClick={() => onNavigate(item.id)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              fontSize: 13, fontWeight: 500, fontFamily: mono,
              color: current === item.id ? C.primary : hover === i ? C.text : C.textMuted,
              cursor: "pointer", transition: "color 0.2s",
            }}
          >{item.label}</span>
        ))}
        <div style={{
          padding: "10px 24px", borderRadius: 4,
          border: `1px solid ${C.primary}`,
          background: `${C.primary}10`, color: C.primary,
          fontSize: 12, fontWeight: 600, fontFamily: mono,
          cursor: "pointer",
          transition: "all 0.2s"
        }}
          onClick={() => onNavigate("about")}
          onMouseEnter={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = C.black; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = `${C.primary}10`; e.currentTarget.style.color = C.primary; }}
        >INITIALIZE_BRIEFING</div>
      </div>
    </nav>
  );
};

const HomePage = ({ onNavigate }) => {
  const [hoverPillar, setHoverPillar] = useState(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{
        padding: "120px 60px 100px",
        textAlign: "center", position: "relative",
        background: `radial-gradient(circle at 50% 10%, ${C.surface} 0%, ${C.black} 70%)`
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 32 }}>
            <Badge>HIERARCHY: SOVEREIGN</Badge>
            <Badge variant="accent">SECTOR: BANKING</Badge>
          </div>

          <h1 style={{
            fontFamily: mono, fontSize: 64, fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.04em",
            margin: "0 auto 32px", color: C.text, maxWidth: 960
          }}>
            Stop Buying Tools.<br />
            <span style={{ color: C.textMuted }}>Start Building</span> <span style={{ color: C.primary }}>Moats.</span>
          </h1>

          <p style={{
            fontSize: 20, color: C.textSoft, maxWidth: 640,
            margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 400
          }}>
            True sovereignty means full control: over your <span style={{ color: C.text, fontWeight: 500 }}>Processes, Roles, and Technology</span>.
            SVRN ALPHA turns your proprietary knowledge into <span style={{ color: C.primary }}>model-agnostic infrastructure</span>.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <div style={{
              padding: "16px 40px", borderRadius: 4,
              background: C.primary, color: C.black,
              fontSize: 14, fontWeight: 700, fontFamily: mono,
              cursor: "pointer",
            }} onClick={() => onNavigate("about")}>{`> EXECUTE_BRIEFING`}</div>
            <div style={{
              padding: "16px 40px", borderRadius: 4,
              border: `1px solid ${C.border}`,
              background: C.card,
              color: C.textSoft, fontSize: 14, fontWeight: 500, fontFamily: mono, cursor: "pointer",
            }} onClick={() => onNavigate("whitepaper")}>READ_WHITEPAPER</div>
          </div>
        </div>
      </section>

      {/* ═══ SYSTEM LOG: LEADERSHIP & SUCCESS ═══ */}
      <section style={{
        padding: "80px 60px",
        background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>

          {/* Founder */}
          <div>
            <Badge variant="accent">ROOT_USER</Badge>
            <h2 style={{
              fontFamily: mono, fontSize: 36, fontWeight: 700, color: C.text,
              margin: "24px 0 24px", letterSpacing: "-0.03em", lineHeight: 1.1
            }}>
              Founded on Academic Rigor.<br />Engineered for Reality.
            </h2>
            <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
              "Sovereignty isn't just data residency. It's the ability to switch models instantly.
              US Top Tier, Chinese Open Source, or EU Sovereign – we utilize what wins.
              The world changes fast; your infrastructure must remain fully flexible."
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 20, cursor: "pointer" }} onClick={() => onNavigate("about")}>
              <div style={{
                width: 56, height: 56, borderRadius: 4,
                background: C.card, border: `1px solid ${C.primaryDim}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 700, color: C.primary, fontFamily: mono
              }}>TB</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: mono }}>Prof. Dr. Tobias Blask</div>
                <div style={{ fontSize: 13, color: C.textMuted, fontFamily: mono }}>Founder & Chairman | Professor</div>
              </div>
            </div>
          </div>

          {/* Terminal Window: Success Log */}
          <div style={{
            borderRadius: 8,
            background: C.black, border: `1px solid ${C.border}`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)`,
            overflow: "hidden",
            cursor: "pointer"
          }} onClick={() => onNavigate("case-study")}>
            {/* Window Header */}
            <div style={{
              background: C.card, borderBottom: `1px solid ${C.border}`,
              padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <div style={{ fontFamily: mono, fontSize: 11, color: C.textMuted }}>root@mpcm-server:~/logs</div>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              </div>
            </div>

            {/* Window Content */}
            <div style={{ padding: "24px 32px", fontFamily: mono, fontSize: 13, lineHeight: 1.6 }}>
              <div style={{ color: C.textMuted, marginBottom: 12 }}># EXECUTION REPORT: STRATEGIC BLUEPRINT</div>

              <div style={{ marginBottom: 4 }}>
                <span style={{ color: C.primary }}>➜</span> <span style={{ color: C.accent }}>INIT_TRANSFORMATION</span>
              </div>
              <div style={{ paddingLeft: 20, color: C.textSoft, marginBottom: 16 }}>
                Converting analysts from Creators to Curators... <span style={{ color: C.success }}>[DONE]</span>
              </div>

              <div style={{ marginBottom: 4 }}>
                <span style={{ color: C.primary }}>➜</span> <span style={{ color: C.accent }}>CALCULATE_YIELD</span>
              </div>
              <div style={{ paddingLeft: 20, color: C.textSoft, marginBottom: 16 }}>
                Alpha Generated: <span style={{ color: C.primary, fontWeight: 700 }}>Measurable Uplift</span> vs. Benchmark<br />
                Capacity Reallocated: <span style={{ color: C.text }}>Majority Routine → Strategic</span>
              </div>

              <div style={{ marginBottom: 4 }}>
                <span style={{ color: C.primary }}>➜</span> <span style={{ color: C.accent }}>VERIFY_COMPLIANCE</span>
              </div>
              <div style={{ paddingLeft: 20, color: C.textSoft }}>
                EU AI Act: <span style={{ color: C.success }}>[COMPLIANT]</span><br />
                Model Dependency: <span style={{ color: C.success }}>[AGNOSTIC]</span>
              </div>

              <div style={{ marginTop: 20, padding: "12px", background: `${C.primary}10`, borderLeft: `2px solid ${C.primary}` }}>
                "SVRN ALPHA didn't just give us tools. They gave us a sovereign capability."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section style={{
        padding: "100px 60px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge>SYSTEM ARCHITECTURE</Badge>
            <h2 style={{
              fontFamily: mono, fontSize: 36, fontWeight: 700, color: C.text,
              margin: "24px 0 16px", letterSpacing: "-0.02em"
            }}>The Three-Pillar Model</h2>
            <p style={{ fontSize: 16, color: C.textMuted }}>
              Education. Processes. Technology. <span style={{ fontFamily: mono, color: C.primary }}>[SEQUENCE_CRITICAL]</span>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              {
                num: "01", title: "EDUCATION", sub: "Human_Layer",
                desc: "Creator to Curator. We build AI fluency at every level, from the trading floor to the boardroom.",
                detail: "DEPENDENCY: PEOPLE",
              },
              {
                num: "02", title: "PROCESSES", sub: "Logic_Layer",
                desc: "The Capacity Flip. Inverting the workflow. Sovereign workflows that reallocate human capital to alpha generation.",
                detail: "STATUS: OPTIMIZED",
              },
              {
                num: "03", title: "TECHNOLOGY", sub: "Infra_Layer",
                desc: "Model-Agnostic. Secure. We deploy on your own infrastructure — whether US Closed Source, Chinese Open Source, or EU Models.",
                detail: "PROTOCOL: FLEXIBLE",
              },
            ].map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverPillar(i)}
                onMouseLeave={() => setHoverPillar(null)}
                style={{
                  padding: 32, borderRadius: 8,
                  background: hoverPillar === i ? C.card : "transparent",
                  border: `1px solid ${hoverPillar === i ? C.primaryDim : C.border}`,
                  transition: "all 0.3s", cursor: "default",
                  position: "relative"
                }}
              >
                <div style={{
                  fontFamily: mono, fontSize: 12, color: C.borderHover,
                  position: "absolute", top: 16, right: 16
                }}>// M_0{i + 1}</div>

                <h3 style={{
                  fontSize: 20, fontWeight: 700, fontFamily: mono,
                  color: C.text, margin: "0 0 8px",
                }}><span style={{ color: C.primary }}>0{i + 1}.</span> {p.title}</h3>

                <div style={{
                  fontSize: 11, fontFamily: mono, color: C.accent,
                  textTransform: "uppercase", marginBottom: 16,
                }}>{p.sub}</div>

                <p style={{
                  fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: "0 0 24px",
                }}>{p.desc}</p>

                <div style={{
                  padding: "6px 10px", display: "inline-block", borderRadius: 4,
                  background: C.black, border: `1px solid ${C.border}`,
                  fontSize: 11, fontFamily: mono, color: C.textMuted
                }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA FORTRESS TERMINAL ═══ */}
      <section style={{ padding: "100px 60px", background: C.card, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge variant="accent">SECURITY_PROTOCOL</Badge>
            <h2 style={{
              fontFamily: mono, fontSize: 36, fontWeight: 700, color: C.text,
              margin: "24px 0 16px", letterSpacing: "-0.02em"
            }}>Your Moat. Your Fortress.</h2>
            <p style={{ fontSize: 16, color: C.textMuted }}>
              Tools are commodities. Knowledge is sovereign.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1,
            background: C.border, border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden"
          }}>
            {[
              { label: "EU AI Act", status: "COMPLIANT" },
              { label: "MiFID II", status: "VERIFIED" },
              { label: "Market Abuse Reg (MAR)", status: "ACTIVE" },
              { label: "Model Architecture", status: "AGNOSTIC" },
              { label: "Infrastructure Control", status: "SOVEREIGN" },
              { label: "Vendor Lock-in", status: "NONE" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "20px 24px", background: C.black,
              }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.textSoft, fontFamily: mono }}>{item.label}</span>
                <span style={{
                  fontFamily: mono, fontSize: 12, fontWeight: 700,
                  color: item.status === "NONE" || item.status === "SOVEREIGN" || item.status === "AGNOSTIC" ? C.accent : C.primary,
                }}>[{item.status}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{
        padding: "120px 60px",
        borderTop: `1px solid ${C.border}`,
        textAlign: "center",
        background: `radial-gradient(circle at 50% 100%, ${C.primaryDim}10 0%, ${C.black} 50%)`
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: mono, fontSize: 42, fontWeight: 700,
            color: C.text, margin: "0 0 24px", letterSpacing: "-0.03em",
          }}>Ready to secure your alpha?</h2>
          <p style={{
            fontSize: 16, color: C.textMuted, maxWidth: 500,
            margin: "0 auto 48px", lineHeight: 1.6,
          }}>
            Schedule a confidential briefing with our team in Hamburg.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <div style={{
              padding: "16px 48px", borderRadius: 4,
              background: C.primary, color: C.black,
              fontSize: 14, fontWeight: 700, fontFamily: mono,
              cursor: "pointer",
            }} onClick={() => onNavigate("about")}>{`> SCHEDULE_BRIEFING`}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── BLOG PAGE ───
const BlogPage = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle !== null) {
    const article = blogArticles[activeArticle];
    return (
      <div style={{ padding: "60px 60px 100px" }}>
        <ArticleLayout>
          <div
            onClick={() => setActiveArticle(null)}
            style={{
              fontFamily: mono, fontSize: 11, color: C.textMuted,
              cursor: "pointer", marginBottom: 32, display: "inline-block",
            }}
          >← Back to Research</div>

          <Badge>{article.badge}</Badge>
          <h1 style={{
            fontFamily: sans, fontSize: 36, fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
          }}>{article.title}</h1>
          <p style={{ fontSize: 17, color: C.accent, margin: "0 0 20px", fontStyle: "italic" }}>{article.subtitle}</p>

          <div style={{
            display: "flex", gap: 20, alignItems: "center",
            padding: "16px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
            marginBottom: 40,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: mono, fontWeight: 800, fontSize: 12, color: C.black,
              }}>TB</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{article.author}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{article.date}</div>
              </div>
            </div>
            <ReadingTime minutes={article.readTime} />
          </div>

          {/* Article body */}
          {article.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontFamily: sans, fontSize: 22, fontWeight: 700,
                letterSpacing: "-0.01em", margin: "0 0 16px", color: C.text,
              }}>{section.heading}</h2>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} style={{
                  fontSize: 16, color: C.textSoft, lineHeight: 1.8,
                  margin: "0 0 16px",
                }}>{para}</p>
              ))}
            </div>
          ))}

          {/* Article CTA */}
          <div style={{
            padding: 32, borderRadius: 12, background: C.card,
            border: `1px solid ${C.border}`, textAlign: "center",
            margin: "48px 0 64px",
          }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.1em", marginBottom: 8 }}>
              root@svrn-alpha:~/briefing
            </div>
            <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>
              Ready to build your moat?
            </h3>
            <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 20 }}>
              Confidential briefing with Prof. Dr. Blask and the SVRN ALPHA team.
            </p>
            <div style={{
              display: "inline-block", padding: "12px 32px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontFamily: mono, fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", cursor: "pointer",
            }} onClick={() => onNavigate("about")}>&gt; INITIALIZE_BRIEFING</div>
          </div>
        </ArticleLayout>
      </div>
    );
  }

  return (
    <div style={{ padding: "80px 60px 100px" }}>
      <ArticleLayout maxWidth={1000}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <Badge>RESEARCH & INTELLIGENCE</Badge>
          <h1 style={{
            fontFamily: sans, fontSize: 42, fontWeight: 800,
            letterSpacing: "-0.02em", margin: "16px 0 8px",
          }}>Sovereign AI Frameworks</h1>
          <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 600, margin: "0 auto" }}>
            Methodologies for the organizational transformation of investment banking.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {blogArticles.map((article, i) => (
            <div
              key={i}
              onClick={() => setActiveArticle(i)}
              style={{
                padding: 24, borderRadius: 8,
                background: "transparent",
                border: `1px solid ${C.border}`, cursor: "pointer",
                transition: "all 0.2s", display: "flex", flexDirection: "column"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.card; e.currentTarget.style.borderColor = C.borderHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <Badge variant="primary">RESEARCH</Badge>
                <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>{article.date}</span>
              </div>
              <h3 style={{
                fontFamily: sans, fontSize: 18, fontWeight: 700, color: C.text,
                lineHeight: 1.3, margin: "0 0 12px", flex: 1
              }}>{article.title}</h3>
              <p style={{ fontSize: 13, color: C.textMuted, margin: "0 0 24px", flex: 1 }}>{article.subtitle}</p>
              <div style={{
                fontFamily: mono, fontSize: 11, color: C.primary,
                display: "flex", alignItems: "center", gap: 8
              }}>READ_FILE <span style={{ opacity: 0.5 }}>→</span></div>
            </div>
          ))}
        </div>
      </ArticleLayout>
    </div>
  );
};

// ─── CASE STUDY PAGE ───
const CaseStudyPage = () => (
  <div style={{ padding: "80px 60px 100px" }}>
    <ArticleLayout maxWidth={800}>
      <Badge variant="accent">REFERENCE ARCHITECTURE</Badge>
      <h1 style={{
        fontFamily: sans, fontSize: 36, fontWeight: 800,
        letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
      }}>
        MP Capital Markets: Sovereign Alpha Generation
      </h1>
      <p style={{ fontSize: 18, color: C.accent, margin: "0 0 40px", fontStyle: "italic" }}>
        How a sovereign AI deployment transforms research operations at a European investment bank.
      </p>

      {/* Snapshot */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 48,
      }}>
        {[
          { label: "ALPHA", value: "Uplift", color: C.accent },
          { label: "DEPLOYMENT", value: "Rapid", color: C.primary },
          { label: "MODEL", value: "Agnostic", color: C.primary },
          { label: "COMPLIANCE", value: "Full EU", color: C.primary },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "20px 16px", borderRadius: 8, background: C.card,
            border: `1px solid ${C.border}`, textAlign: "center",
          }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.1em", marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: C.text }}>
          <span style={{ color: C.red }}>// THE CHALLENGE:</span> Talent Trapped
        </h2>
        <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 16 }}>
          MP Capital Markets (MPCM), a Hamburg-based investment bank, operates a research team of experienced analysts. Yet like many institutions, they faced the industry-wide inefficiency: analysts spending a majority of their working hours on routine data extraction and formatting. Only a fraction of their capacity went toward separate strategic analysis.
        </p>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: C.text }}>
          <span style={{ color: C.primary }}>// THE APPROACH:</span> Three Pillars
        </h2>
        <div style={{ borderLeft: `2px solid ${C.primary}`, paddingLeft: 24 }}>
          <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 12 }}>
            <strong style={{ color: C.text }}>1. Education:</strong> "Creator to Curator" workshops shift the mindset before any tool is deployed.
          </p>
          <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 12 }}>
            <strong style={{ color: C.text }}>2. Processes:</strong> Workflow mapping identifies routine blocks and re-routes them to AI pipelines.
          </p>
          <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 0 }}>
            <strong style={{ color: C.text }}>3. Technology:</strong> Sovereign, EU-hosted infrastructure ensures zero data leakage and full compliance.
          </p>
        </div>
      </div>

      <div style={{
        padding: 32, borderRadius: 12, background: C.card,
        border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.accent}`,
      }}>
        <p style={{
          fontSize: 17, color: C.text, lineHeight: 1.7, margin: "0 0 16px",
          fontStyle: "italic",
        }}>
          "SVRN ALPHA provides a sovereign capability. Analysts think differently, workflows are fundamentally restructured, and proprietary knowledge compounds in infrastructure we own."
        </p>
        <div style={{ fontFamily: mono, fontSize: 12, color: C.accent }}>
          — Senior Managing Director, MP Capital Markets
        </div>
      </div>
    </ArticleLayout>
  </div>
);

// ─── WHITEPAPER PAGE ───
const WhitepaperPage = () => (
  <div style={{ padding: "80px 60px 100px" }}>
    <ArticleLayout maxWidth={780}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Badge variant="blue">FOUNDING PAPER</Badge>
        <h1 style={{
          fontFamily: sans, fontSize: 36, fontWeight: 800,
          letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
        }}>
          The Three-Pillar Model:<br />A Framework for Sovereign AI Transformation
        </h1>
        <p style={{ fontSize: 17, color: C.accent, margin: "0 0 8px", fontStyle: "italic" }}>
          Prof. Dr. Tobias Blask · SVRN ALPHA Research · January 2026
        </p>
        <ReadingTime minutes={25} />
      </div>

      <div style={{
        padding: 32, borderRadius: 8, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 40,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 16 }}>ABSTRACT</div>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 16px" }}>
          Artificial intelligence adoption in European investment banking has followed a technology-first pattern that produces consistently poor outcomes. Analysis of over fifty transformation initiatives reveals organizational factors account for 70% of success.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
          This paper introduces the Three-Pillar Model — a sequential framework that addresses Education, Process, and Technology in that order. Grounded in the Creator-to-Curator hypothesis, it is the blueprint for sovereign transformation.
        </p>
      </div>

      <div style={{
        padding: 40, borderRadius: 8, textAlign: "center",
        background: `linear-gradient(135deg, ${C.primaryDim}10, ${C.accentDim}10)`,
        border: `1px solid ${C.border}`,
      }}>
        <h2 style={{ fontFamily: sans, fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>
          Download the Founding Paper
        </h2>
        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 24, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
          44 pages of research, methodology, and evidence.
        </p>
        <div style={{
          display: "inline-block", padding: "14px 36px", borderRadius: 4,
          background: C.primary, color: C.black,
          fontFamily: mono, fontSize: 13, fontWeight: 700,
          cursor: "pointer",
        }}>{`> DOWNLOAD_PDF`}</div>
      </div>
    </ArticleLayout>
  </div>
);

// ─── PRESS PAGE ───
const PressPage = () => (
  <div style={{ padding: "80px 60px 100px" }}>
    <ArticleLayout maxWidth={720}>
      <Badge variant="cyan">PRESS RELEASE</Badge>

      <h1 style={{
        fontFamily: sans, fontSize: 30, fontWeight: 800,
        letterSpacing: "-0.02em", lineHeight: 1.2, margin: "16px 0 16px",
      }}>
        SVRN ALPHA Launches Sovereign AI Enablement Platform for European Investment Banking
      </h1>

      <p style={{ fontSize: 15, fontWeight: 600, color: C.textSoft, margin: "0 0 8px" }}>
        Hamburg-based firm introduces three-pillar framework backed by academic research and proven deployment
      </p>

      <div style={{
        fontFamily: mono, fontSize: 11, color: C.textDim,
        padding: "12px 0", borderBottom: `1px solid ${C.border}`, marginBottom: 28,
      }}>
        HAMBURG, GERMANY — January 15, 2026
      </div>

      <div style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8 }}>
        <p style={{ margin: "0 0 16px" }}>
          <strong style={{ color: C.text }}>SVRN ALPHA</strong>, a sovereign AI enablement company for investment banking, today announced its launch with a mission to transform how European financial institutions adopt and deploy artificial intelligence. Backed by MP Capital Markets (Münchmeier Petersen Capital Markets) and led by founder Prof. Dr. Tobias Blask, the company offers a research-grounded framework that addresses the organizational, procedural, and technical dimensions of AI transformation.
        </p>

        <p style={{ margin: "0 0 16px" }}>
          The company's approach is built on the Three-Pillar Model, a sequential framework developed through academic research and validated through deployment at a European investment bank. The model addresses what SVRN ALPHA identifies as the primary cause of AI initiative failure: the industry's tendency to invest heavily in technology while underinvesting in the organizational change required for adoption.
        </p>

        <p style={{ margin: "0 0 16px" }}>
          "Approximately 70% of AI transformation success depends on organizational factors — how people think about AI, how workflows restructure, how leadership commits to the change," said Prof. Dr. Tobias Blask, Founder and Chairman of SVRN ALPHA. "Yet most banks allocate 90% of their AI budget to technology. We built SVRN ALPHA to correct that inversion."
        </p>

        <p style={{ margin: "0 0 16px" }}>
          SVRN ALPHA's initial deployment demonstrated clear results: a significant capacity reallocation from routine work to strategic analysis among research analysts, measurable alpha generation uplift, and full compliance with EU AI Act, MiFID II, MAR, and GDPR requirements.
        </p>

        <p style={{ margin: "0 0 16px" }}>
          Central to the company's offering is its commitment to data sovereignty. All AI infrastructure deployed by SVRN ALPHA operates on private cloud within EU jurisdiction, with zero vendor lock-in, full audit trails, and Human-in-the-Loop architecture at every critical decision point.
        </p>

        <p style={{ margin: "0 0 16px" }}>
          "Every bank has access to the same AI models," Prof. Dr. Blask continued. "The competitive edge — the alpha — comes from proprietary knowledge and the sovereign infrastructure that protects it. That's what SVRN ALPHA enables."
        </p>

        <p style={{ margin: "0 0 16px" }}>
          The company is headquartered in Hamburg, Germany, and serves investment banks across the DACH region, Nordics, and United Kingdom.
        </p>
      </div>

      {/* Boilerplate */}
      <div style={{
        padding: 24, borderRadius: 12, background: C.card,
        border: `1px solid ${C.border}`, marginTop: 32, marginBottom: 24,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>ABOUT SVRN ALPHA</div>
        <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>
          SVRN ALPHA is a sovereign AI enablement company for investment banking, headquartered in Hamburg, Germany. Founded by Prof. Dr. Tobias Blask and backed by MP Capital Markets, SVRN ALPHA transforms how financial institutions adopt AI through the Three-Pillar Model — a research-grounded framework addressing Education, Process, and Technology in that sequence. The company deploys sovereign AI infrastructure with full EU regulatory compliance, zero vendor lock-in, and Human-in-the-Loop architecture. Learn more at svrn-alpha.ai.
        </p>
      </div>

      {/* Contact */}
      <div style={{
        padding: 20, borderRadius: 8, background: C.card, border: `1px solid ${C.border}`,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>MEDIA CONTACT</div>
        <div style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.8 }}>
          <div><strong style={{ color: C.text }}>SVRN ALPHA Communications</strong></div>
          <div>press@svrn-alpha.ai</div>
          <div>Hamburg, Germany</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: C.primary, marginTop: 8 }}>svrn-alpha.ai</div>
        </div>
      </div>
    </ArticleLayout>
  </div>
);

// ─── ABOUT PAGE ───
const AboutPage = () => (
  <div style={{ padding: "80px 60px 100px" }}>
    <ArticleLayout maxWidth={780}>
      <Badge>ABOUT</Badge>
      <h1 style={{
        fontFamily: sans, fontSize: 36, fontWeight: 800,
        letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
      }}>
        Founded on Academic Rigor.<br />Engineered for Reality.
      </h1>

      <div style={{
        padding: 32, borderRadius: 8, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 48,
        display: "grid", gridTemplateColumns: "auto 1fr", gap: 28,
      }}>
        <div style={{
          width: 100, height: 100, borderRadius: 4,
          background: `linear-gradient(135deg, ${C.primary}20, ${C.accent}20)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: `1px solid ${C.border}`,
        }}>
          <span style={{ fontFamily: mono, fontSize: 32, fontWeight: 800, color: C.primary }}>TB</span>
        </div>
        <div>
          <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Prof. Dr. Tobias Blask</h3>
          <div style={{ fontFamily: mono, fontSize: 12, color: C.accent, letterSpacing: "0.05em", marginBottom: 16 }}>
            Founder & Chairman | Professor
          </div>
          <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: "0 0 12px" }}>
            Academic researcher turned practitioner. Years of published research on digital transformation in financial institutions, combined with hands-on implementation experience inside European investment banks.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, margin: "0 0 20px", color: C.text }}>// CORE PRINCIPLES</h2>
        {[
          { title: "Education Before Technology", desc: "The order is the methodology. We never deploy tools until the mindset shifts." },
          { title: "Sovereignty Is Non-Negotiable", desc: "Your data stays yours. Your infrastructure answers to you. No vendor lock-in." },
          { title: "Human-in-the-Loop Always", desc: "AI assists. Humans decide. This is architecture, not a feature toggle." },
        ].map((p, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: C.primary }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: C.textMuted, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </ArticleLayout>
  </div>
);

// ═══════════════════════════════════════════════════════
// MAIN APP ROUTER
// ═══════════════════════════════════════════════════════

export default function SVRNAlpha() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const pages = {
    home: <HomePage onNavigate={navigate} />,
    blog: <BlogPage onNavigate={navigate} />,
    "case-study": <CaseStudyPage />,
    whitepaper: <WhitepaperPage />,
    press: <PressPage />,
    about: <AboutPage />,
  };

  return (
    <div style={{ minHeight: "100vh", background: C.black, color: C.text, fontFamily: sans }}>
      <Nav current={page} onNavigate={navigate} />
      {pages[page] || pages.home}
      <footer style={{
        padding: "40px 60px", borderTop: `1px solid ${C.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: C.textDim, fontFamily: mono
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 4,
            background: C.primaryDim,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 10, color: C.black,
          }}>_</div>
          <span style={{ fontWeight: 700, color: C.textSoft }}>
            SVRN_ALPHA <span style={{ opacity: 0.5 }}>v2.1.0</span>
          </span>
        </div>
        <div>
          Hamburg, Germany · Sovereign AI Enablement · Backed by{" "}
          <span style={{ color: C.textMuted, fontWeight: 500 }}>MP Capital Markets</span>
        </div>
        <div>svrn-alpha.ai</div>
      </footer>
    </div>
  );
}