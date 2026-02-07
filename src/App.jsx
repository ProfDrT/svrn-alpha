import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, useParams, Navigate } from "react-router-dom";


// ─── SVRN ALPHA ─── Sovereign Intelligence.
// DESIGN: "Sovereign Terminal" (Black, Signal Green, Alpha Gold, JetBrains Mono)
// CONTENT: Adapted from BRANDING/SVRN_ALPHA_Website_Content.md

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

// ─── HOOKS ───
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

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

const TYPO = {
  h1: {
    fontFamily: mono, fontSize: 48, fontWeight: 800,
    letterSpacing: "-0.03em", lineHeight: 1.1,
    color: C.text, margin: "0 0 32px"
  },
  h2: {
    fontFamily: mono, fontSize: 32, fontWeight: 700,
    letterSpacing: "-0.02em", lineHeight: 1.2,
    color: C.text, margin: "48px 0 24px"
  },
  h3: {
    fontFamily: mono, fontSize: 24, fontWeight: 700,
    letterSpacing: "-0.01em", lineHeight: 1.3,
    color: C.text, margin: "32px 0 16px"
  },
  body: {
    fontFamily: sans, fontSize: 18, color: C.textSoft,
    lineHeight: 1.7, marginBottom: 24
  },
  bodyLarge: {
    fontFamily: sans, fontSize: 20, color: C.textSoft,
    lineHeight: 1.6, marginBottom: 32
  }
};

const blogArticles = [
  {
    id: "70-percent",
    badge: "// M_01 · HUMAN_LAYER",
    title: "Why 70% of AI Initiatives in Banking Fail — and It's Not the Technology",
    subtitle: "The organizational transformation most banks ignore.",
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

Pillar 3 — Technology. Only after Education and Processes are in place do we deploy infrastructure. And when we do, it's sovereign: model-agnostic, fully auditable, vendor-independent. The technology serves the transformation, not the other way around.

Skip Pillar 1, and Pillars 2 and 3 collapse. We've seen it happen repeatedly. The order is the methodology.`
      },
      {
        heading: "What the Capacity Flip Looks Like in Practice",
        body: `When this framework is deployed properly, the transformation becomes visible within the first quarter. Research analysts who had been spending the majority of their time on routine data gathering and report formatting shift to spending the majority of their time on strategic analysis — the work that actually generates alpha for clients.

The results come from exactly this reallocation. When your best people spend their time on the work they were hired to do, the returns compound.

But none of this happens because of a technology deployment. It happens because education came first, process redesign came second, and sovereign infrastructure came third.

The 70% of banks that fail at AI transformation aren't failing at technology. They're failing at the part they refuse to fund.`
      }
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
      {
        heading: "The Capacity Flip in Practice",
        body: `The capacity flip is what happens when the Creator-to-Curator shift succeeds. The ratio inverts: 70% routine becomes 70% strategic.

In practical terms, this means an analyst who currently spends Monday through Wednesday afternoon on data gathering and report formatting now completes that work by Monday lunchtime — with AI handling the routine extraction, population, and formatting. From Monday afternoon onward, they're doing the work that generates alpha: deep analysis, client conversations, strategic thinking, creative problem-solving.

But the flip doesn't happen by deploying a tool. It happens through a deliberate three-stage process:

Stage 1: Awareness. Through structured workshops, analysts see exactly how much of their time goes to routine work. Most underestimate it significantly. Seeing the 70/30 split in their own workflow data is the first breakthrough.

Stage 2: Redefinition. Analysts redefine their role description around curation rather than creation. This isn't HR theater — it's a genuine reconstruction of what "doing your job well" means. The best analyst is no longer the one who builds the most detailed model from scratch; it's the one who produces the most insightful output, regardless of how the underlying data was assembled.

Stage 3: Workflow Integration. Only after awareness and redefinition do we redesign the actual workflows. AI handles the routine extraction and formatting. The analyst handles validation, enrichment, and insight generation. Human-in-the-Loop is the architecture, not the afterthought.`
      },
      {
        heading: "Why Sovereign Infrastructure Matters for the Flip",
        body: `The capacity flip depends on AI having access to your proprietary data — your research archives, your client interaction histories, your internal models, your institutional knowledge accumulated over decades.

If that data lives on a third-party vendor's cloud, you've created a dependency. If that vendor is US-based, your European data sits under CLOUD Act jurisdiction. If the vendor changes pricing, changes terms, or gets acquired, your entire capacity flip is at their mercy.

Sovereign infrastructure means the AI that powers the capacity flip runs on infrastructure you own, in EU jurisdiction, with zero vendor lock-in. Your proprietary knowledge stays inside your fortress. The models that learn from your institutional data answer to you, not to a SaaS provider.

This is why we call it SVRN ALPHA. Sovereign: your data stays yours. Alpha: the excess return that comes from making your proprietary knowledge compoundable.

The capacity flip isn't a technology feature. It's an organizational transformation that happens to require technology — sovereign technology — as its third pillar.`
      }
    ],
  },
  {
    id: "data-sovereignty",
    badge: "// M_03 · INFRA_LAYER",
    title: "Your Data Moat Is the Only Alpha Left",
    subtitle: "When everyone has the same models, the edge is what you feed them.",
    date: "February 3, 2026",
    author: "Prof. Dr. Tobias Blask",
    readTime: 7,
    keyword: "sovereign AI model-agnostic investment banking",
    metaDesc: "Sovereign AI means institutional independence — model-agnostic architecture that lets banks choose the best AI per use case, with zero lock-in.",
    sections: [
      {
        heading: "The Commoditization of Intelligence",
        body: `GPT-4. Claude. Gemini. DeepSeek. Mistral. Qwen. Llama. The large language models that power modern AI are rapidly becoming commodities. US closed-source, Chinese open-source, European alternatives — every major technology provider offers increasingly similar capabilities at converging price points. And the landscape shifts every six months.

For investment banking, this creates a paradox — and an opportunity. If the models are interchangeable, the competitive advantage can't be in which model you pick. It's in two things: what you feed them (your proprietary knowledge) and how free you are to switch between them (your architectural sovereignty).

Your proprietary data — twenty years of research notes, client interaction histories, deal structures, institutional knowledge accumulated analyst by analyst — is the first moat. But the second moat is equally important: the ability to use the best model for each use case, switch providers when the landscape shifts, and never be locked into a single vendor's ecosystem.

Most banks are building both moats wrong. They hand their data to a single US platform provider and lock their architecture to one model family. That's not a strategy. That's a dependency.`
      },
      {
        heading: "The Lock-in Trap — and Why Model-Agnostic Matters",
        body: `Six months ago, the consensus was that one US provider had the best model. Today, a Chinese open-source model matches that performance at a fraction of the cost. Tomorrow, a European alternative may lead in regulatory compliance. The only constant is change.

Banks that locked their architecture to a single model family — fine-tuning their workflows around one provider's API, training their teams on one vendor's tools, building their data pipelines for one model's input format — now face a painful choice: expensive migration or strategic dependency.

This is the lock-in trap. And it's not just about technology costs. When your AI infrastructure depends on a single foreign provider, you're exposed to geopolitical risk (US CLOUD Act, export controls, sanctions), business risk (pricing changes, API deprecation, acquisition), and regulatory risk (EU AI Act compliance gaps in non-European infrastructure).

Sovereignty — real sovereignty — means your architecture doesn't care which model sits underneath it. You evaluate per use case: a US closed-source model for one workflow, a Chinese open-source model on your own infrastructure for another, a European model for regulatory-sensitive processes. You switch when something better appears. You're never trapped.

EU compliance (AI Act, MiFID II, GDPR) isn't the goal — it's the natural byproduct of an architecture designed for institutional independence. When you control your infrastructure and can run models locally, compliance follows as an architectural property.`
      },
      {
        heading: "What Sovereign Actually Means",
        body: `Sovereignty in AI infrastructure means four things:

Model-Agnostic Architecture. Your infrastructure runs any model — US closed-source (GPT-4, Claude), Chinese open-source on own hardware (DeepSeek, Qwen), European (Mistral, Aleph Alpha). Per use case, you choose the best option. When a better model appears — and it will, every few months — you switch. Your workflows, your data pipelines, your human checkpoints all remain intact. The model is a component, not a foundation.

Institutional Ownership. You own the infrastructure. Not rent it. Not license it. Own it. When the engagement ends, everything stays with you — the orchestration layer, the fine-tuning, the knowledge graphs, the workflows. Your processes, your roles, your technology. No one else's roadmap dictates yours.

Full Auditability. Every AI-assisted decision has a complete audit trail. You can explain to a regulator exactly how an output was generated, what model produced it, what data informed it, and what human checkpoints were involved. This works regardless of which underlying model is used — because the audit layer sits above the model layer.

Zero Dependency. If a vendor changes pricing, a government imposes export controls, a model gets deprecated, or the geopolitical landscape shifts — you're unaffected. Your architecture adapts because it was designed to adapt. That's not a feature. It's the fundamental design principle.`
      },
      {
        heading: "Building the Fortress",
        body: `At SVRN ALPHA, we use the metaphor of a data fortress deliberately. A fortress isn't just a wall — it's an architecture designed for resilience in a world that keeps changing.

Your fortress has three layers:

The outer layer is architectural flexibility — model-agnostic design that lets you evaluate and deploy any AI model per use case. US closed-source for high-performance analysis, open-source on own infrastructure for cost-sensitive batch processing, European models for regulatory-sensitive workflows. The outer layer ensures that no matter what happens in the technology landscape — new model releases, pricing changes, export controls, geopolitical shifts — your operations continue uninterrupted.

The middle layer is institutional control — you own the orchestration layer, the data pipelines, the human-in-the-loop checkpoints, the audit trails. Your processes, your roles, your decision architecture. EU compliance (AI Act, MiFID II, MAR, GDPR) emerges naturally from this control, not as a separate compliance project.

The inner layer is proprietary knowledge — the institutional insights, research archives, client relationships, and analytical frameworks that make your bank different from every other bank. This is the moat. It's what the fortress protects. And it's what generates alpha when properly structured, indexed, and made accessible to AI-enabled workflows.

Every bank can access the same models. The only defensible asset is what's inside your organization — and the sovereign architecture that protects it while staying fully flexible.

Models are interchangeable. Your proprietary knowledge — and your freedom to choose — is not.`
      }
    ],
  }
];

// ═══════════════════════════════════════════════════════
// PAGE COMPONENTS
// ═══════════════════════════════════════════════════════

// ─── HELPER COMPONENTS ───
const TickerItem = ({ label }) => (
  <span style={{
    fontFamily: mono, fontSize: 11, fontWeight: 600,
    color: C.primary, letterSpacing: "0.05em",
  }}>{label}</span>
);

// ─── NAVIGATION ───
const Nav = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(null);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { id: "/", label: "HOME" },
    { id: "/research", label: "RESEARCH" },
    { id: "/reference-case", label: isMobile ? "REF_CASE" : "REFERENCE_CASE" },
    { id: "/whitepaper", label: "WHITEPAPER" },
    { id: "/press", label: "PRESS" },
    { id: "/about", label: "ABOUT" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? "16px 20px" : "20px 60px",
        background: scrolled || mobileMenuOpen ? "rgba(5, 5, 5, 0.9)" : "transparent",
        backdropFilter: scrolled || mobileMenuOpen ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.3s"
      }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 4,
            background: C.primary,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 18, color: C.black
          }}>S</div>
          <div style={{ fontFamily: sans, fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em", color: C.text }}>
            SVRN_ALPHA
          </div>
        </Link>

        <div style={{ display: isMobile ? "none" : "flex", gap: 32 }}>
          {items.map((item, i) => {
            const isActive = location.pathname === item.id || (item.id !== "/" && location.pathname.startsWith(item.id));
            return (
              <Link
                key={item.id}
                to={item.id}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{
                  fontSize: 13, fontWeight: 500, fontFamily: mono,
                  color: isActive ? C.primary : hover === i ? C.text : C.textMuted,
                  cursor: "pointer", transition: "color 0.2s",
                  textDecoration: "none"
                }}
              >{item.label}</Link>
            );
          })}
        </div>

        {!isMobile && (
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <TickerItem label="MODEL-AGNOSTIC" />
            <div style={{ width: 1, height: 12, background: C.border }} />
            <TickerItem label="EU COMPLIANCE" />
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: "pointer", padding: 8 }}>
            <div style={{ width: 24, height: 2, background: C.text, marginBottom: 6, transition: "0.3s", transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}></div>
            <div style={{ width: 24, height: 2, background: C.text, marginBottom: 6, opacity: mobileMenuOpen ? 0 : 1, transition: "0.3s" }}></div>
            <div style={{ width: 24, height: 2, background: C.text, transition: "0.3s", transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: C.black, zIndex: 90, paddingTop: 100, paddingLeft: 20, paddingRight: 20,
          display: "flex", flexDirection: "column", gap: 32
        }}>
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: mono, fontSize: 24, fontWeight: 700,
                color: location.pathname === item.id ? C.primary : C.text,
                textDecoration: "none", borderBottom: `1px solid ${C.border}`, paddingBottom: 16
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: "auto", paddingBottom: 40, fontFamily: mono, fontSize: 12, color: C.textDim }}>
            <div>STATUS: OPERATIONAL</div>
            <div>ARCHITECTURE: MODEL-AGNOSTIC</div>
            <div>MOAT: SOVEREIGN</div>
            <div>COMPLIANCE: EU ✓</div>
          </div>
        </div>
      )}
    </>
  );
};

// ─── HOME PAGE ───
const HomePage = () => {
  const navigate = useNavigate();
  const [hoverPillar, setHoverPillar] = useState(null);
  const isMobile = useMobile();

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{
        padding: isMobile ? "100px 20px 60px" : "120px 60px 100px",
        textAlign: "center", position: "relative",
        background: `radial-gradient(circle at 50% 10%, ${C.surface} 0%, ${C.black} 70%)`
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
          backgroundImage: `linear - gradient(${C.border} 1px, transparent 1px), linear - gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {!isMobile && (
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              <Badge>HIERARCHY: SOVEREIGN</Badge>
              <Badge variant="accent">SECTOR: BANKING</Badge>
            </div>
          )}

          <h1 style={{
            fontFamily: mono, fontSize: isMobile ? 36 : 64, fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.04em",
            margin: "0 auto 32px", color: C.text, maxWidth: 960
          }}>
            Stop Buying Tools.<br />
            <span style={{ color: C.textMuted }}>Start Building</span> <span style={{ color: C.primary }}>Moats.</span>
          </h1>

          <p style={{
            fontSize: isMobile ? 18 : 20, color: C.textSoft, maxWidth: 640,
            margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 400
          }}>
            True sovereignty means full control: over your <span style={{ color: C.text, fontWeight: 500 }}>Processes, Roles, and Technology</span>.
            SVRN ALPHA turns your proprietary knowledge into <span style={{ color: C.primary }}>model-agnostic infrastructure</span>.
          </p>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16, justifyContent: "center" }}>
            <div style={{
              padding: "16px 40px", borderRadius: 4,
              background: C.primary, color: C.black,
              fontSize: 14, fontWeight: 700, fontFamily: mono,
              cursor: "pointer",
            }} onClick={() => navigate("/about")}>{`> EXECUTE_BRIEFING`}</div>
            <div style={{
              padding: "16px 40px", borderRadius: 4,
              border: `1px solid ${C.border} `,
              background: C.card,
              color: C.textSoft, fontSize: 14, fontWeight: 500, fontFamily: mono, cursor: "pointer",
            }} onClick={() => navigate("/whitepaper")}>READ_WHITEPAPER</div>
          </div>
        </div>
      </section>

      {/* ═══ SYSTEM LOG: LEADERSHIP & SUCCESS ═══ */}
      <section style={{
        padding: isMobile ? "60px 20px" : "80px 60px",
        background: C.surface, borderTop: `1px solid ${C.border} `, borderBottom: `1px solid ${C.border} `,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>

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

            <div style={{ display: "flex", alignItems: "center", gap: 20, cursor: "pointer" }} onClick={() => navigate("/about")}>
              <div style={{
                width: 56, height: 56, borderRadius: 4,
                background: C.card, border: `1px solid ${C.primaryDim} `,
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
            background: C.black, border: `1px solid ${C.border} `,
            boxShadow: `0 20px 40px - 10px rgba(0, 0, 0, 0.5)`,
            overflow: "hidden",
          }} onClick={() => navigate("/reference-case")}>
            {/* Window Header */}
            <div style={{
              background: C.card, borderBottom: `1px solid ${C.border} `,
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

              <div style={{ marginTop: 20, padding: "12px", background: `${C.primary} 10`, borderLeft: `2px solid ${C.primary} ` }}>
                "SVRN ALPHA didn't just give us tools. They gave us a sovereign capability."
              </div>
            </div>
          </div>

        </div>
      </section >

      {/* ═══ THREE PILLARS ═══ */}
      < section style={{
        padding: isMobile ? "60px 20px" : "100px 60px",
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
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 32 }}>
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
                  border: `1px solid ${hoverPillar === i ? C.primaryDim : C.border} `,
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
                  background: C.black, border: `1px solid ${C.border} `,
                  fontSize: 11, fontFamily: mono, color: C.textMuted
                }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ═══ DATA FORTRESS TERMINAL ═══ */}
      < section style={{ padding: isMobile ? "60px 20px" : "100px 60px", background: C.card, borderTop: `1px solid ${C.border} ` }}>
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
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 1,
            background: C.border, border: `1px solid ${C.border} `, borderRadius: 8, overflow: "hidden"
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
      </section >

      {/* ═══ CTA ═══ */}
      < section style={{
        padding: isMobile ? "80px 20px" : "120px 60px",
        borderTop: `1px solid ${C.border} `,
        textAlign: "center",
        background: `radial - gradient(circle at 50 % 100 %, ${C.primaryDim}10 0 %, ${C.black} 50 %)`
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: mono, fontSize: isMobile ? 32 : 42, fontWeight: 700,
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
            }} onClick={() => navigate("/about")}>{`> SCHEDULE_BRIEFING`}</div>
          </div>
        </div>
      </section >
    </div >
  );
};

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMobile();
  // If id is present, find the article
  const activeArticle = id ? blogArticles.findIndex(a => a.id === id) : null;

  if (activeArticle !== null && activeArticle !== -1) {
    const article = blogArticles[activeArticle];
    return (
      <div style={{ padding: isMobile ? "40px 20px 80px" : "60px 60px 100px" }}>
        <ArticleLayout>
          <div
            onClick={() => navigate("/research")}
            style={{
              fontFamily: mono, fontSize: 11, color: C.textMuted,
              cursor: "pointer", marginBottom: 32, display: "inline-block",
            }}
          >← Back to Research</div>

          <Badge>{article.badge}</Badge>
          <h1 style={{ ...TYPO.h1, fontSize: isMobile ? 32 : 48 }}>{article.title}</h1>
          <p style={{ ...TYPO.bodyLarge, color: C.textMuted, fontSize: isMobile ? 18 : 20 }}>{article.subtitle}</p>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 24, marginBottom: 64, fontFamily: mono, fontSize: 12, color: C.textDim }}>
            <span>{article.date}</span>
            <span>{article.readTime} MIN READ</span>
            <span>{article.author}</span>
          </div>

          <div style={{ borderTop: `1px solid ${C.border} `, paddingTop: 40 }}>
            {article.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 48 }}>
                <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>{section.heading}</h2>
                <div style={{ whiteSpace: "pre-line", ...TYPO.body }}>
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          {/* Article CTA */}
          <div style={{
            padding: 32, borderRadius: 12, background: C.card,
            border: `1px solid ${C.border} `, textAlign: "center",
            margin: "48px 0 64px",
          }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.1em", marginBottom: 8 }}>
              root@svrn-alpha:~/briefing
            </div>
            <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>
              Ready to build your moat?
            </h3>
            <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 20 }}>
              Confidential briefing with our team in Hamburg.
            </p>
            <div style={{
              display: "inline-block", padding: "12px 32px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontFamily: mono, fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", cursor: "pointer",
            }} onClick={() => navigate("/about")}>&gt; INITIALIZE_BRIEFING</div>
          </div>

        </ArticleLayout>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 60px 100px" }}>
      <ArticleLayout maxWidth={1000}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <Badge>RESEARCH & INSIGHTS</Badge>
          <h1 style={{ ...TYPO.h1, fontSize: isMobile ? 36 : 48 }}>Sovereign AI Frameworks</h1>
          <p style={{ ...TYPO.bodyLarge, margin: "0 auto", maxWidth: 600 }}>
            Frameworks, methodology, and evidence from the intersection of AI and investment banking.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
          {blogArticles.map((article, i) => (
            <div
              key={i}
              onClick={() => navigate(`/ research / ${article.id} `)}
              style={{
                padding: 24, borderRadius: 8,
                background: "transparent",
                border: `1px solid ${C.border} `, cursor: "pointer",
                transition: "all 0.2s", display: "flex", flexDirection: "column"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.card; e.currentTarget.style.borderColor = C.borderHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <Badge variant="primary">RESEARCH</Badge>
                <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>{article.date}</span>
              </div>
              <h3 style={{ ...TYPO.h3, fontSize: 22, margin: "0 0 12px", flex: 1 }}>{article.title}</h3>
              <p style={{ ...TYPO.body, fontSize: 16, margin: "0 0 24px", flex: 1 }}>{article.subtitle}</p>
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

const ReferenceCasePage = () => {
  const isMobile = useMobile();
  const ulStyle = { margin: "0 0 24px", paddingLeft: 20, color: C.textSoft };
  const liStyle = { marginBottom: 12, lineHeight: 1.6 };

  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 60px 100px" }}>
      <ArticleLayout>
        <Badge variant="accent">REFERENCE CASE</Badge>
        <h1 style={{
          fontFamily: sans, fontSize: isMobile ? 28 : 36, fontWeight: 800,
          letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
        }}>
          MP Capital Markets: Sovereign AI Enablement — Validated in Practice
        </h1>
        <p style={{ fontSize: 18, color: C.accent, margin: "0 0 40px", fontStyle: "italic" }}>
          How a sovereign AI deployment approach was validated at a European investment bank backed by Münchmeier Petersen.
        </p>

        <div style={{ margin: "0 0 40px" }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>Context</h2>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            MP Capital Markets (MPCM), a Hamburg-based investment bank backed by Münchmeier Petersen, is SVRN ALPHA's founding investor and backer. The SVRN ALPHA framework was developed and validated in close collaboration with MPCM — making them both the first reference and the institutional proof that the three-pillar approach works in practice.
          </p>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            MPCM operates a research team of experienced analysts whose deep sector expertise is their primary differentiator. Like most investment banks, their analysts were spending the majority of their working hours on routine tasks: data extraction from financial terminals, report formatting to house style, model updates with new quarterly figures, cross-referencing regulatory filings. Only a fraction of their capacity went toward the strategic analysis, client advisory, and insight generation that actually drives revenue.
          </p>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            Previous attempts to address this had followed the standard playbook: license an AI platform, hire a data scientist, build some automations. The tools worked. Adoption didn't. Multiple initiative cycles had stalled, each time because the organizational side — the people, the processes, the mindset — hadn't been addressed.
          </p>
        </div>

        <div style={{ margin: "0 0 40px" }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>The Approach: Three Pillars, Deployed Sequentially</h2>

          <h3 style={{ ...TYPO.h3, fontSize: isMobile ? 20 : 24 }}>Phase 1 — Education</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Structured AI fluency workshops for all levels — from junior analysts to the board</li>
            <li style={liStyle}>Creator-to-Curator mindset sessions: redefining the analyst role around judgment and curation rather than manual construction</li>
            <li style={liStyle}>Change champion identification: internal advocates across departments became the catalyst for adoption</li>
            <li style={liStyle}>Leadership alignment: the Managing Director personally sponsored and attended every session</li>
          </ul>

          <h3 style={{ ...TYPO.h3, fontSize: isMobile ? 20 : 24 }}>Phase 2 — Processes</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Granular workflow mapping: every analyst task catalogued with time allocation data</li>
            <li style={liStyle}>Identification of the routine tasks consuming the majority of analyst capacity</li>
            <li style={liStyle}>Capacity reallocation blueprint: redesigned workflows that route routine tasks to AI pipelines while directing analyst time to strategic work</li>
            <li style={liStyle}>Human-in-the-Loop checkpoint design: defining exactly where human judgment is required in every workflow</li>
          </ul>

          <h3 style={{ ...TYPO.h3, fontSize: isMobile ? 20 : 24 }}>Phase 3 — Technology</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Sovereign infrastructure deployment: model-agnostic, EU-hosted, zero external data transfer</li>
            <li style={liStyle}>AI pipeline activation for data extraction, report formatting, and model population</li>
            <li style={liStyle}>Full compliance verification: EU AI Act, MiFID II, MAR, GDPR — compliant by architecture, not by retrofit</li>
            <li style={liStyle}>Audit trail implementation: every AI-assisted output fully traceable and explainable</li>
          </ul>
        </div>

        <div style={{ margin: "0 0 60px" }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>Validated Results</h2>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>The framework has been validated at MPCM and the results speak for themselves:</p>
          <ul style={ulStyle}>
            <li style={liStyle}><b>Capacity Flip achieved:</b> The analyst capacity ratio inverted from majority-routine to majority-strategic — freeing experienced professionals to focus on the work that generates alpha</li>
            <li style={liStyle}><b>Measurable alpha generation:</b> The reallocation of analyst time to strategic work has produced demonstrable outperformance</li>
            <li style={liStyle}><b>Zero data leakage:</b> Sovereign infrastructure ensures complete data control</li>
            <li style={liStyle}><b>Zero vendor lock-in:</b> Model-agnostic architecture allows switching between AI providers per use case</li>
            <li style={liStyle}><b>Full EU compliance:</b> AI Act, MiFID II, MAR, GDPR — compliant by design</li>
            <li style={liStyle}><b>Human-in-the-Loop enforced:</b> Every critical decision point includes a human checkpoint</li>
            <li style={liStyle}><b>Operational and compounding:</b> The system is live, running, and the returns compound as institutional knowledge feeds back into the sovereign AI infrastructure</li>
          </ul>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            The results didn't come from a superior algorithm. They came from freeing highly skilled analysts to do the work they were hired to do. When the majority of your best people's time shifts from data gathering to strategic analysis, the compounding effect is significant — and it accelerates over time as institutional knowledge feeds back into the sovereign AI infrastructure.
          </p>
        </div>

        <div style={{
          padding: 32, borderLeft: `4px solid ${C.accent} `, background: C.card,
          fontFamily: mono, margin: "0 0 60px"
        }}>
          <p style={{ fontSize: 16, color: C.text, lineHeight: 1.6, margin: "0 0 16px", fontStyle: "italic" }}>
            "SVRN ALPHA didn't just give us tools. They gave us a sovereign capability. Our analysts think differently, our workflows are fundamentally restructured, and our proprietary knowledge compounds in infrastructure we own. That's not a vendor relationship — it's an institutional advantage."
          </p>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.accent }}>
            — Senior Managing Director, MP Capital Markets
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "40px 0", borderTop: `1px solid ${C.border} ` }}>
          <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Your transformation starts with a conversation.</h3>
          <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 20 }}>No pitch deck theater. Just a confidential briefing with our team in Hamburg.</p>
          <div style={{
            display: "inline-block", padding: "12px 32px", borderRadius: 8,
            background: C.primary, color: C.black, fontFamily: mono, fontSize: 12, fontWeight: 700,
            cursor: "pointer"
          }}>{`> INITIALIZE_BRIEFING`}</div>
        </div>

      </ArticleLayout>
    </div>
  );
};

// Local styles removed in favor of TYPO constant

// ─── WHITEPAPER PAGE ───
const WhitepaperPage = () => {
  const isMobile = useMobile();
  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 60px 100px" }}>
      <ArticleLayout>

        <div style={{ padding: "32px", background: C.card, borderRadius: 8, border: `1px solid ${C.border} `, marginBottom: 64 }}>
          <div style={{ fontFamily: mono, fontSize: 14, color: C.primary, marginBottom: 16 }}>// ABSTRACT</div>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18, marginBottom: 0 }}>
            This whitepaper details the proprietary methodology SVRN ALPHA uses to transform financial institutions. It argues that the failure of most AI initiatives is due to "Technology First" implementation. We propose the "Education First" model: Cognitive Shift (Education) → Workflow Redesign (Process) → Model-Agnostic Infrastructure (Technology).
          </p>
        </div>

        <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>Table of Contents</h2>
        <div style={{ fontFamily: mono, fontSize: 14, color: C.textSoft, display: "flex", flexDirection: "column", gap: 12 }}>
          <div>1. Introduction: The AI Transformation Paradox — p. 3</div>
          <div>2. Literature Review: Why Transformation Fails — p. 6</div>
          <div>3. The Three-Pillar Model — p. 12</div>
          <div style={{ paddingLeft: 20, color: C.textMuted }}>3.1 Pillar 1: Education and the Creator-to-Curator Shift — p. 14</div>
          <div style={{ paddingLeft: 20, color: C.textMuted }}>3.2 Pillar 2: Process Redesign and the Capacity Flip — p. 19</div>
          <div style={{ paddingLeft: 20, color: C.textMuted }}>3.3 Pillar 3: Sovereign Technology Architecture — p. 24</div>
          <div>4. Data Sovereignty as Competitive Moat — p. 29</div>
          <div>5. Human-in-the-Loop: Architecture, Not Feature — p. 33</div>
          <div>6. Case Application: European Investment Bank — p. 36</div>
          <div>7. Implications and Future Research — p. 41</div>
          <div style={{ color: C.textDim }}>- References — p. 44</div>
        </div>


        {/* Download CTA */}
        <div style={{ textAlign: "center", padding: "40px 0", borderTop: `1px solid ${C.border} ` }}>
          <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Download the Founding Paper</h3>
          <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 20, maxWidth: 500, margin: "0 auto 24px" }}>
            44 pages of research, methodology, and evidence. The intellectual foundation behind the SVRN ALPHA framework.
          </p>
          <div style={{
            display: "inline-block", padding: "12px 32px", borderRadius: 8,
            background: C.primary, color: C.black, fontFamily: mono, fontSize: 12, fontWeight: 700,
            cursor: "pointer", marginBottom: 16
          }}>{`> DOWNLOAD_PAPER`}</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: C.textDim }}>
            PDF · 44 pages · No registration required
          </div>
        </div>

      </ArticleLayout >
    </div >
  );
};

const PressPage = () => {
  const isMobile = useMobile();
  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 60px 100px" }}>
      <ArticleLayout>
        <Badge variant="primary">PRESS RELEASE</Badge>
        <h1 style={{ ...TYPO.h1, fontSize: isMobile ? 32 : 48 }}>
          SVRN ALPHA Launches Sovereign AI Enablement Platform for European Investment Banking
        </h1>
        <p style={{ ...TYPO.bodyLarge, color: C.text, fontWeight: 600, fontSize: isMobile ? 18 : 20 }}>
          Hamburg-based firm introduces three-pillar framework backed by academic research and validated deployment
        </p>

        <div style={{ margin: "0 0 40px", ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
          <p style={{ margin: "0 0 16px" }}>
            <span style={{ fontWeight: 700, color: C.text }}>HAMBURG, GERMANY — January 15, 2026</span>
          </p>
          <p style={{ margin: "0 0 16px" }}>
            <b>SVRN ALPHA</b>, a sovereign AI enablement company for investment banking, today announced its launch with a mission to transform how European financial institutions adopt and deploy artificial intelligence. Backed by MP Capital Markets (Münchmeier Petersen Capital Markets) and led by Prof. Dr. Tobias Blask — Professor, Founder & Chairman — the company offers a research-grounded framework that addresses the organizational, procedural, and technical dimensions of AI transformation.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            The company's approach is built on the Three-Pillar Model, a sequential framework developed through academic research and validated through deployment at a European investment bank. The model addresses what SVRN ALPHA identifies as the primary cause of AI initiative failure: the industry's tendency to invest heavily in technology while underinvesting in the organizational change required for adoption.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            "Approximately 70% of AI transformation success depends on organizational factors — how people think about AI, how workflows restructure, how leadership commits to the change," said Prof. Dr. Tobias Blask, Professor, Founder & Chairman of SVRN ALPHA. "Yet most banks allocate 90% of their AI budget to technology. We built SVRN ALPHA to correct that inversion."
          </p>
          <p style={{ margin: "0 0 16px" }}>
            SVRN ALPHA's framework has been validated in practice at MP Capital Markets, producing measurable results: a capacity reallocation from majority-routine work to majority-strategic analysis among research analysts, demonstrable alpha generation above benchmark, and full compliance with EU AI Act, MiFID II, MAR, and GDPR requirements.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            Central to the company's offering is its model-agnostic, sovereign architecture. Rather than locking institutions into a single AI provider, SVRN ALPHA builds infrastructure that evaluates per use case — whether that's a US closed-source model, a Chinese open-source model on the bank's own hardware, or a European model for regulatory-sensitive workflows. The architecture supports zero vendor lock-in, full audit trails, and Human-in-the-Loop checkpoints at every critical decision point.
          </p>
          <p style={{ margin: "0 0 16px" }}>
            "The technology landscape changes every six months — new models, new regulations, new geopolitical realities," Prof. Dr. Blask continued. "Banks need an architecture that adapts, not one that locks them in. Sovereignty means the institution decides: which model, which infrastructure, which architecture. Always flexible. Always independent. That's the only future-proof strategy."
          </p>
          <p style={{ margin: "0 0 16px" }}>
            The company is headquartered in Hamburg, Germany, and serves investment banks across the DACH region, Nordics, and United Kingdom.
          </p>
        </div>

        <div style={{ margin: "0 0 40px", paddingTop: 40, borderTop: `1px solid ${C.border} ` }}>
          <h3 style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>About SVRN ALPHA</h3>
          <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>
            SVRN ALPHA is a sovereign AI enablement company for investment banking, headquartered in Hamburg, Germany. Founded by Prof. Dr. Tobias Blask (Professor, Founder & Chairman) and backed by MP Capital Markets, SVRN ALPHA transforms how financial institutions adopt AI through the Three-Pillar Model — a research-grounded framework addressing Education, Process, and Technology in that sequence. The company deploys model-agnostic, sovereign infrastructure that gives institutions full independence over their AI stack — evaluating US, Chinese, and European models per use case with zero vendor lock-in and Human-in-the-Loop architecture. Learn more at svrn-alpha.ai.
          </p>
        </div>

        <div style={{ background: C.card, padding: 24, borderRadius: 8 }}>
          <h3 style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, margin: "0 0 12px", color: C.textDim, textTransform: "uppercase" }}>Media Contact</h3>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>SVRN ALPHA Communications</div>
          <div style={{ fontSize: 14, color: C.primary, marginBottom: 8 }}>press@svrn-alpha.ai</div>
          <div style={{ fontSize: 14, color: C.textMuted }}>Hamburg, Germany<br />svrn-alpha.ai</div>
        </div>

      </ArticleLayout>
    </div>
  );
};

const AboutPage = () => {
  const isMobile = useMobile();
  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 60px 100px" }}>
      <ArticleLayout>
        <Badge variant="accent">ABOUT</Badge>
        <h1 style={{ ...TYPO.h1, fontSize: isMobile ? 36 : 48 }}>
          Founded on Academic Rigor.<br />Engineered for Reality.
        </h1>
        <p style={TYPO.bodyLarge}>
          SVRN ALPHA exists because the gap between what research says about AI transformation and what the industry does about it is too wide to accept.
        </p>

        <div style={{ marginBottom: 60 }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>The Origin</h2>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            For over a decade, Prof. Dr. Tobias Blask researched digital transformation in financial institutions. The patterns were consistent and frustrating: banks invested billions in AI technology, hired data scientists, licensed platforms — and achieved almost nothing. The failure rate hovered around 70%, year after year.
          </p>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            The academic literature was unambiguous: the primary determinant of transformation success wasn't technological capability. It was organizational readiness — how people think about AI, how workflows adapted, how leadership committed to the change. Yet the industry continued to allocate 90% of its AI budget to technology and 10% to the organizational factors that actually determined success.
          </p>
          <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
            In 2025, Prof. Dr. Blask stopped writing papers about the problem and founded SVRN ALPHA to fix it. The company bridges the gap between what research proves and what practice requires — bringing academic rigor to the messy, political, deeply human work of organizational transformation.
          </p>
        </div>

        <div style={{ marginBottom: 60, display: "flex", flexDirection: isMobile ? "column" : "row", gap: 32, alignItems: isMobile ? "center" : "flex-start", textAlign: isMobile ? "center" : "left" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: `linear - gradient(135deg, ${C.primary}, ${C.primaryDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 24, color: C.black,
            flexShrink: 0
          }}>TB</div>
          <div>
            <h2 style={{ ...TYPO.h2, margin: "0 0 8px", fontSize: isMobile ? 24 : 32 }}>Founder</h2>
            <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 700, color: C.text }}>Prof. Dr. Tobias Blask</div>
            <div style={{ fontFamily: mono, fontSize: 13, color: C.accent, marginBottom: 16 }}>Professor, Founder & Chairman</div>
            <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
              Academic researcher turned practitioner. Over a decade of published research on digital transformation in financial institutions, combined with hands-on implementation experience inside European investment banks.
            </p>
            <p style={{ ...TYPO.body, fontSize: isMobile ? 16 : 18 }}>
              The SVRN ALPHA framework was built from real transformation work — not from slide decks. The industry needs a partner who understands both the science of AI and the organizational politics of making it stick.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: 60 }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>Principles</h2>
          {[
            { t: "01 — Education Before Technology", d: "We never deploy technology until the organizational readiness is in place. The order is the methodology." },
            { t: "02 — Sovereign Means You Decide", d: "Model-agnostic architecture. Per use case, we evaluate US closed-source, Chinese open-source, or European models. You choose. You switch. You're never locked in. EU compliance is a byproduct, not the pitch." },
            { t: "03 — Human-in-the-Loop Always", d: "AI assists. Humans decide. Every critical juncture has a human checkpoint. This is architecture, not a feature toggle." },
            { t: "04 — Evidence Over Claims", d: "We show results, not adjectives. Capacity flip. Measurable alpha. Validated framework. If we can't measure it, we don't claim it." },
            { t: "05 — Compliance by Design", d: "EU AI Act, MiFID II, MAR, GDPR — built into the architecture from day one. Not retrofitted after deployment." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: C.primary, marginBottom: 8 }}>{item.t}</div>
              <div style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.6 }}>{item.d}</div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 40, borderTop: `1px solid ${C.border} ` }}>
          <h2 style={{ ...TYPO.h2, fontSize: isMobile ? 24 : 32 }}>Backed By</h2>
          <div style={{
            padding: 24, background: C.card, borderRadius: 8, border: `1px solid ${C.border} `,
            display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, alignItems: "center"
          }}>
            <div style={{
              width: 48, height: 48, background: C.text, borderRadius: 4,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, color: C.black
            }}>MP</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>MP Capital Markets</div>
              <div style={{ fontSize: 13, color: C.textMuted, fontFamily: mono, marginBottom: 8 }}>Münchmeier Petersen Capital Markets · Hamburg, Germany</div>
              <div style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.5 }}>
                MPCM is SVRN ALPHA's founding investor and backer — and the first institution where the three-pillar framework was validated in practice. The approach works extremely well there, serving as both proof of concept and ongoing reference.
              </div>
            </div>
          </div>
        </div>

      </ArticleLayout>
    </div>
  );
};


// ═══════════════════════════════════════════════════════
// MAIN APP ROUTER
// ═══════════════════════════════════════════════════════

export default function SVRNAlpha() {
  const isMobile = useMobile();
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: C.black, color: C.text, fontFamily: sans }}>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<BlogPage />} />
          <Route path="/research/:id" element={<BlogPage />} />
          <Route path="/reference-case" element={<ReferenceCasePage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* FOOTER */}
        <footer style={{
          padding: isMobile ? "40px 20px" : "40px 60px", borderTop: `1px solid ${C.border} `,
          display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 24 : 0, justifyContent: "space-between", alignItems: "center",
          fontSize: 12, color: C.textDim, fontFamily: mono, textAlign: isMobile ? "center" : "left"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 4,
              background: C.primaryDim,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 10, color: C.black,
            }}>_</div>
            <span style={{ fontWeight: 700, color: C.textSoft }}>
              SVRN_ALPHA
            </span>
          </div>
          <div>
            Hamburg, Germany · Sovereign AI Enablement · Backed by{" "}
            <span style={{ color: C.textMuted, fontWeight: 500 }}>MP Capital Markets</span>
          </div>
          <div>svrn-alpha.ai</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
