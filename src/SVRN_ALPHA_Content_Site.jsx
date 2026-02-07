import { useState, useEffect } from "react";

// ─── SVRN ALPHA · CONTENT SITE ───
// Blog, Case Study, Whitepaper, Press, About — ready to deploy.

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";
const serif = "Georgia, 'Times New Roman', serif";

const C = {
  black: "#050505", surface: "#0A0A0B", card: "#111113",
  border: "#1A1A1E", borderHover: "#2A2A30",
  primary: "#10B981", primaryDim: "#065F46",
  accent: "#D4AF37", accentDim: "#92751E",
  text: "#F4F4F5", textSoft: "#A1A1AA", textMuted: "#52525B", textDim: "#3F3F46",
  red: "#EF4444", blue: "#3B82F6", cyan: "#06B6D4",
};

// ═══════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════

const Badge = ({ children, variant = "primary" }) => {
  const colors = { primary: C.primary, accent: C.accent, red: C.red, blue: C.blue, cyan: C.cyan };
  const color = colors[variant] || C.primary;
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 4,
      border: `1px solid ${color}30`, background: `${color}10`,
      fontFamily: mono, fontSize: 10, color, letterSpacing: "0.1em",
    }}>{children}</span>
  );
};

const Nav = ({ current, onNavigate }) => {
  const [hover, setHover] = useState(null);
  const items = [
    { id: "home", label: "Home" },
    { id: "blog", label: "Research" },
    { id: "case-study", label: "Proof Case" },
    { id: "whitepaper", label: "Whitepaper" },
    { id: "press", label: "Press" },
    { id: "about", label: "About" },
  ];
  return (
    <>
      {/* Ticker */}
      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "5px 0", fontFamily: mono, fontSize: 10, letterSpacing: "0.05em",
        display: "flex", justifyContent: "center", gap: 32,
      }}>
        {[
          { l: "STATUS", v: "OPERATIONAL", c: C.primary },
          { l: "ALPHA", v: "+340 BPS", c: C.accent },
          { l: "MOAT", v: "SOVEREIGN", c: C.primary },
          { l: "COMPLIANCE", v: "EU ✓", c: C.primary },
        ].map((t, i) => (
          <span key={i}>
            <span style={{ color: C.textDim }}>{t.l} </span>
            <span style={{ color: t.c, fontWeight: 600 }}>{t.v}</span>
          </span>
        ))}
      </div>
      {/* Nav bar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 40px", borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 100,
        background: `${C.black}E8`, backdropFilter: "blur(12px)",
      }}>
        <div
          onClick={() => onNavigate("home")}
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 12, color: C.black,
          }}>SA</div>
          <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.14em", fontSize: 16 }}>
            <span style={{ color: C.primary }}>SVRN</span>
            <span style={{ color: C.textDim, margin: "0 1px", fontWeight: 400 }}>·</span>
            <span style={{ color: C.accent }}>ALPHA</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {items.map((item, i) => (
            <span
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                fontFamily: mono, fontSize: 12, letterSpacing: "0.05em",
                color: current === item.id ? C.primary : hover === i ? C.text : C.textMuted,
                cursor: "pointer", transition: "color 0.2s",
                borderBottom: current === item.id ? `1px solid ${C.primary}` : "1px solid transparent",
                paddingBottom: 2,
              }}
            >{item.label}</span>
          ))}
          <div style={{
            padding: "8px 20px", borderRadius: 6,
            background: C.primary, color: C.black,
            fontFamily: mono, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.05em", cursor: "pointer",
          }}>INITIALIZE_BRIEFING</div>
        </div>
      </nav>
    </>
  );
};

const Footer = () => (
  <footer style={{
    padding: "32px 40px", borderTop: `1px solid ${C.border}`,
    display: "flex", justifyContent: "space-between", alignItems: "center",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6,
        background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: mono, fontWeight: 800, fontSize: 10, color: C.black,
      }}>SA</div>
      <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.12em", fontSize: 12 }}>
        <span style={{ color: C.primary }}>SVRN</span>
        <span style={{ color: C.textDim, margin: "0 1px", fontWeight: 400, fontSize: 10 }}>·</span>
        <span style={{ color: C.accent }}>ALPHA</span>
      </span>
    </div>
    <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.05em" }}>
      Hamburg, Germany · Sovereign AI Enablement · Backed by{" "}
      <span style={{ color: C.textMuted }}>MP Capital Markets</span>
    </div>
    <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>svrn-alpha.ai · v2.0.4</div>
  </footer>
);

const ArticleLayout = ({ children, maxWidth = 720 }) => (
  <div style={{ maxWidth, margin: "0 auto", padding: "0 40px" }}>{children}</div>
);

const ReadingTime = ({ minutes }) => (
  <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.08em" }}>
    {minutes} MIN READ
  </span>
);

// ═══════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════

const HomePage = ({ onNavigate }) => {
  const [hoverCard, setHoverCard] = useState(null);
  const featured = [
    { id: "blog-1", type: "RESEARCH", title: "Why 70% of AI Initiatives in Banking Fail — and It's Not the Technology", date: "February 2026", color: C.primary, nav: "blog", sub: "The organizational transformation most banks ignore." },
    { id: "case-study", type: "PROOF CASE", title: "MP Capital Markets: +340bps Alpha in 90 Days", date: "January 2026", color: C.accent, nav: "case-study", sub: "From framework to measurable results." },
    { id: "blog-2", type: "RESEARCH", title: "From Creator to Curator: The Capacity Flip That Changes Everything", date: "February 2026", color: C.primary, nav: "blog", sub: "70% routine → 70% strategic. Here's how." },
    { id: "whitepaper", type: "WHITEPAPER", title: "The Three-Pillar Model: A Framework for Sovereign AI Transformation", date: "January 2026", color: C.blue, nav: "whitepaper", sub: "The founding paper. Education. Processes. Technology." },
    { id: "blog-3", type: "RESEARCH", title: "Your Data Moat Is the Only Alpha Left", date: "February 2026", color: C.primary, nav: "blog", sub: "Why data sovereignty is the new competitive edge." },
    { id: "press", type: "PRESS", title: "SVRN ALPHA Launches Sovereign AI Enablement for European Investment Banking", date: "January 2026", color: C.cyan, nav: "press", sub: "Hamburg-based firm introduces three-pillar framework." },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "80px 40px 64px", textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`,
          backgroundSize: "40px 40px", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Badge>RESEARCH & INSIGHTS</Badge>
          <h1 style={{
            fontFamily: sans, fontSize: 44, fontWeight: 800,
            letterSpacing: "-0.025em", margin: "20px 0 16px", lineHeight: 1.1,
          }}>
            Intelligence for the<br />
            <span style={{ color: C.primary }}>Sovereign</span> Era
          </h1>
          <p style={{ fontSize: 17, color: C.textMuted, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Research, frameworks, and proof cases from SVRN ALPHA.
            How AI transformation actually works in investment banking.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section style={{ padding: "0 40px 80px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {featured.map((item, i) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.nav)}
              onMouseEnter={() => setHoverCard(i)}
              onMouseLeave={() => setHoverCard(null)}
              style={{
                padding: 24, borderRadius: 12, cursor: "pointer",
                background: hoverCard === i ? C.card : "transparent",
                border: `1px solid ${hoverCard === i ? C.borderHover : C.border}`,
                transition: "all 0.25s", display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <Badge variant={item.type === "PROOF CASE" ? "accent" : item.type === "WHITEPAPER" ? "blue" : item.type === "PRESS" ? "cyan" : "primary"}>
                  {item.type}
                </Badge>
                <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>{item.date}</span>
              </div>
              <h3 style={{
                fontFamily: sans, fontSize: 17, fontWeight: 700, color: C.text,
                lineHeight: 1.35, margin: "0 0 10px", flex: 1,
              }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: C.textMuted, margin: 0, lineHeight: 1.5 }}>{item.sub}</p>
              <div style={{ fontFamily: mono, fontSize: 11, color: item.color, marginTop: 14 }}>
                Read →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section style={{
        padding: "48px 40px", background: C.surface,
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
        textAlign: "center",
      }}>
        <div style={{ fontFamily: mono, fontSize: 11, color: C.textDim, letterSpacing: "0.1em", marginBottom: 12 }}>
          root@svrn-alpha:~/briefing
        </div>
        <h2 style={{ fontFamily: sans, fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>
          Your moat won't build itself.
        </h2>
        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 24 }}>
          Confidential briefing with our team in Hamburg. No pitch deck theater.
        </p>
        <div style={{
          display: "inline-block", padding: "14px 36px", borderRadius: 8,
          background: C.primary, color: C.black,
          fontFamily: mono, fontSize: 13, fontWeight: 700,
          letterSpacing: "0.05em", cursor: "pointer",
        }}>&gt; EXECUTE_BRIEFING</div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// BLOG PAGE — 3 ARTICLES
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
      {
        heading: "What +340bps Looks Like",
        body: `When we deployed this framework at MP Capital Markets, the timeline was 90 days. Not 90 days to pilot. Not 90 days to prototype. 90 days to measurable results.

The capacity flip completed within the first quarter. Research analysts who had been spending 70% of their time on routine data gathering and report formatting were now spending 70% on strategic analysis — the work that actually generates alpha for clients.

The alpha generation number — +340 basis points above benchmark — came from exactly this reallocation. When your best people spend their time on the work they were hired to do, the results compound.

But none of this happened because of a technology deployment. It happened because education came first, process redesign came second, and sovereign infrastructure came third.

The 70% of banks that fail at AI transformation aren't failing at technology. They're failing at the part they refuse to fund.`
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
        heading: "The CLOUD Act Problem",
        body: `When a European investment bank deploys AI through a US-based cloud provider — AWS, Azure, GCP — the data processed through that infrastructure falls under the jurisdiction of the US CLOUD Act. This legislation allows US government agencies to compel disclosure of data stored by US-headquartered companies, regardless of where the data is physically stored.

For a European bank processing proprietary research, client data, and strategic insights through US cloud infrastructure, the implications are significant. Your competitive intelligence is technically accessible to a foreign government.

The EU's response — the EU AI Act, combined with GDPR and evolving data sovereignty requirements — is pushing in the opposite direction. European institutions are increasingly expected, and in some cases required, to maintain sovereign control over their data processing infrastructure.

This isn't a theoretical risk. It's a regulatory trajectory. Banks that build their AI stack on foreign cloud infrastructure are building on ground that's shifting beneath them.`
      },
      {
        heading: "What Sovereign Actually Means",
        body: `Sovereignty in AI infrastructure means four things:

Residency. Your data is processed and stored within EU jurisdiction. Not "available in EU regions" — genuinely hosted on infrastructure that answers to European law.

Ownership. You own the infrastructure. Not rent it. Not license it. Own it. When the engagement ends, everything stays with you — the models, the fine-tuning, the knowledge graphs, the workflows. Zero vendor dependency.

Auditability. Every AI-assisted decision has a full audit trail. You can explain to a regulator exactly how an output was generated, what data informed it, and what human checkpoints were involved. This isn't a feature; it's a compliance requirement under MiFID II and the EU AI Act.

Portability. If you want to change providers, migrate infrastructure, or bring everything in-house, you can. No lock-in. No proprietary formats that only work with one vendor. No dependency that gives a single provider leverage over your operations.

Most AI vendors offer some of these. Very few offer all four. The ones that do tend not to be the ones with the biggest marketing budgets.`
      },
      {
        heading: "Building the Fortress",
        body: `At SVRN ALPHA, we use the metaphor of a data fortress deliberately. A fortress isn't just a wall — it's an integrated defense architecture with multiple layers, clear lines of authority, and controlled access points.

Your data fortress has three layers:

The outer layer is regulatory compliance — EU AI Act, MiFID II, MAR, GDPR. These aren't constraints; they're the foundation. A sovereign AI architecture that's compliant by design, not by retrofit, removes an entire category of risk.

The middle layer is technical architecture — private cloud deployment, encrypted data pipelines, model isolation, access controls. This is where vendor-agnostic infrastructure lives. Your AI models run on your terms, not on someone else's platform.

The inner layer is proprietary knowledge — the institutional insights, research archives, and analytical frameworks that make your bank different from every other bank. This is the moat. It's what the fortress protects. And it's what generates alpha when properly structured, indexed, and made accessible to AI-enabled workflows.

Every vendor sells the same models. The only defensible asset is what's inside your organization — and the infrastructure that protects it.

Technology is interchangeable. Your proprietary knowledge is not.`
      },
    ],
  },
];

const BlogPage = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle !== null) {
    const article = blogArticles[activeArticle];
    return (
      <div>
        <div style={{ padding: "48px 40px 0" }}>
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
                    fontSize: 15, color: C.textSoft, lineHeight: 1.8,
                    margin: "0 0 16px",
                  }}>{para}</p>
                ))}
              </div>
            ))}

            {/* Article CTA */}
            <div style={{
              padding: 32, borderRadius: 12, background: C.surface,
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
              }}>&gt; INITIALIZE_BRIEFING</div>
            </div>

            {/* SEO info (shown as terminal-style block for internal reference) */}
            <div style={{
              padding: 20, borderRadius: 8, background: C.surface,
              border: `1px solid ${C.border}`, marginBottom: 64,
            }}>
              <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>SEO METADATA</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: C.textMuted }}>
                <div><span style={{ color: C.textDim }}>keyword:</span> {article.keyword}</div>
                <div style={{ marginTop: 4 }}><span style={{ color: C.textDim }}>meta:</span> {article.metaDesc}</div>
              </div>
            </div>
          </ArticleLayout>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "48px 40px 80px" }}>
      <ArticleLayout maxWidth={840}>
        <Badge>RESEARCH</Badge>
        <h1 style={{
          fontFamily: sans, fontSize: 34, fontWeight: 800,
          letterSpacing: "-0.02em", margin: "16px 0 8px",
        }}>Research & Insights</h1>
        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 40 }}>
          Frameworks, methodology, and evidence from the intersection of AI and investment banking.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {blogArticles.map((article, i) => (
            <div
              key={i}
              onClick={() => setActiveArticle(i)}
              style={{
                padding: 24, borderRadius: 12,
                border: `1px solid ${C.border}`, cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.card; e.currentTarget.style.borderColor = C.borderHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.border; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <Badge>{article.badge}</Badge>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <ReadingTime minutes={article.readTime} />
                  <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>{article.date}</span>
                </div>
              </div>
              <h3 style={{
                fontFamily: sans, fontSize: 20, fontWeight: 700, color: C.text,
                lineHeight: 1.3, margin: "0 0 8px",
              }}>{article.title}</h3>
              <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>{article.subtitle}</p>
              <div style={{
                fontFamily: mono, fontSize: 11, color: C.primary, marginTop: 12,
              }}>Read article →</div>
            </div>
          ))}
        </div>
      </ArticleLayout>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// CASE STUDY — MPCM
// ═══════════════════════════════════════════════════════

const CaseStudyPage = () => (
  <div style={{ padding: "48px 40px 80px" }}>
    <ArticleLayout maxWidth={780}>
      <Badge variant="accent">PROOF CASE</Badge>
      <h1 style={{
        fontFamily: sans, fontSize: 36, fontWeight: 800,
        letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
      }}>
        MP Capital Markets: +340bps Alpha Generation in 90 Days
      </h1>
      <p style={{ fontSize: 17, color: C.accent, margin: "0 0 32px", fontStyle: "italic" }}>
        How a sovereign AI deployment transformed research operations at a European investment bank.
      </p>

      {/* Snapshot */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 40,
      }}>
        {[
          { label: "ALPHA", value: "+340bps", color: C.accent },
          { label: "TIMELINE", value: "90 Days", color: C.primary },
          { label: "CAPACITY FLIP", value: "70/30 → 30/70", color: C.primary },
          { label: "COMPLIANCE", value: "Full EU", color: C.primary },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "16px 14px", borderRadius: 10, background: C.card,
            border: `1px solid ${C.border}`, textAlign: "center",
          }}>
            <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.12em", marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontFamily: mono, fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Challenge */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: mono, fontSize: 10, color: C.red, letterSpacing: "0.1em", marginBottom: 10,
        }}>THE CHALLENGE</div>
        <h2 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>
          High-Value Talent Trapped in Low-Value Work
        </h2>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 12px" }}>
          MP Capital Markets (MPCM), a Hamburg-based investment bank backed by Münchmeier Petersen, operated a research team of experienced analysts whose deep sector expertise was their primary differentiator. Yet an internal audit revealed what the leadership team suspected: their analysts were spending approximately 70% of their working hours on routine tasks.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
          Data extraction from financial terminals. Report formatting to house style. Model updates with new quarterly figures. Cross-referencing regulatory filings. Only 30% of their capacity went toward the strategic analysis, client advisory, and insight generation that actually drove revenue and differentiated MPCM in the market.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, marginTop: 12 }}>
          Previous attempts to address this had followed the standard playbook: license an AI platform, hire a data scientist, build some automations. The tools worked. Adoption didn't. Three separate initiative cycles had stalled, each time because the organizational side — the people, the processes, the mindset — hadn't been addressed.
        </p>
      </div>

      {/* Solution */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: mono, fontSize: 10, color: C.primary, letterSpacing: "0.1em", marginBottom: 10,
        }}>THE APPROACH</div>
        <h2 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>
          Three Pillars, Ninety Days
        </h2>

        {/* Timeline */}
        {[
          {
            phase: "PHASE 1 — EDUCATION", weeks: "Week 1-4", color: C.primary,
            icon: "// M_01",
            items: [
              "Structured AI fluency workshops for all levels — from junior analysts to the board",
              "Creator-to-Curator mindset sessions: redefining the analyst role around judgment and curation rather than manual construction",
              "Change champion identification: eight analysts across three departments became internal advocates",
              "Leadership alignment: the Managing Director personally sponsored and attended every session",
            ],
          },
          {
            phase: "PHASE 2 — PROCESSES", weeks: "Week 5-8", color: C.accent,
            icon: "// M_02",
            items: [
              "Granular workflow mapping: every analyst task catalogued with time allocation data",
              "Identification of the 70% — the specific routine tasks consuming the majority of analyst capacity",
              "Capacity reallocation blueprint: redesigned workflows that route routine tasks to AI pipelines while directing analyst time to strategic work",
              "Human-in-the-Loop checkpoint design: defining exactly where human judgment is required in every workflow",
            ],
          },
          {
            phase: "PHASE 3 — TECHNOLOGY", weeks: "Week 9-12", color: C.blue,
            icon: "// M_03",
            items: [
              "Sovereign infrastructure deployment: private cloud, EU-hosted, zero external data transfer",
              "AI pipeline activation for data extraction, report formatting, and model population",
              "Full compliance verification: EU AI Act, MiFID II, MAR, GDPR — compliant by architecture, not by retrofit",
              "Audit trail implementation: every AI-assisted output fully traceable and explainable",
            ],
          },
        ].map((phase, i) => (
          <div key={i} style={{
            padding: 24, borderRadius: 12, background: C.card,
            border: `1px solid ${C.border}`, borderLeft: `3px solid ${phase.color}`,
            marginBottom: 12,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div>
                <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: phase.color }}>{phase.phase}</span>
                <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim, marginLeft: 12 }}>{phase.icon}</span>
              </div>
              <Badge variant={i === 0 ? "primary" : i === 1 ? "accent" : "blue"}>{phase.weeks}</Badge>
            </div>
            {phase.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: 10, padding: "6px 0" }}>
                <span style={{ fontFamily: mono, color: phase.color, fontSize: 11, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Results */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: mono, fontSize: 10, color: C.accent, letterSpacing: "0.1em", marginBottom: 10,
        }}>THE RESULTS</div>
        <h2 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 20px" }}>
          Measurable Impact, Compounding Returns
        </h2>

        <div style={{
          padding: 28, borderRadius: 12, background: C.surface,
          border: `1px solid ${C.accent}30`,
          fontFamily: mono, fontSize: 13, color: C.accent,
          lineHeight: 2.2, marginBottom: 20,
        }}>
          <div>root@mpcm-server:~/logs/results</div>
          <div style={{ color: C.textDim }}>──────────────────────────────────</div>
          <div><span style={{ color: C.textDim }}>alpha_generation:</span> <span style={{ fontWeight: 700 }}>+340bps</span> <span style={{ color: C.textDim }}>vs_benchmark</span></div>
          <div><span style={{ color: C.textDim }}>capacity_ratio:</span> <span style={{ color: C.primary }}>70% strategic</span> <span style={{ color: C.textDim }}>(was 30%)</span></div>
          <div><span style={{ color: C.textDim }}>routine_tasks:</span> <span style={{ color: C.primary }}>30% of capacity</span> <span style={{ color: C.textDim }}>(was 70%)</span></div>
          <div><span style={{ color: C.textDim }}>data_leakage:</span> <span style={{ color: C.primary }}>ZERO</span></div>
          <div><span style={{ color: C.textDim }}>vendor_lock_in:</span> <span style={{ color: C.primary }}>ZERO</span></div>
          <div><span style={{ color: C.textDim }}>eu_ai_act:</span> <span style={{ color: C.primary }}>[COMPLIANT]</span></div>
          <div><span style={{ color: C.textDim }}>mifid_ii:</span> <span style={{ color: C.primary }}>[COMPLIANT]</span></div>
          <div><span style={{ color: C.textDim }}>human_in_loop:</span> <span style={{ color: C.primary }}>[ENFORCED]</span></div>
          <div><span style={{ color: C.textDim }}>deployment_time:</span> <span style={{ fontWeight: 700 }}>90 days</span></div>
          <div style={{ color: C.textDim }}>──────────────────────────────────</div>
          <div><span style={{ color: C.textDim }}>status:</span> <span style={{ color: C.primary }}>OPERATIONAL · COMPOUNDING</span></div>
        </div>

        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
          The +340 basis points of alpha generation above benchmark didn't come from a superior algorithm. They came from freeing highly skilled analysts to do the work they were hired to do. When 70% of your best people's time shifts from data gathering to strategic analysis, the compounding effect is significant — and it accelerates over time as institutional knowledge feeds back into the sovereign AI infrastructure.
        </p>
      </div>

      {/* Testimonial */}
      <div style={{
        padding: 28, borderRadius: 12, background: C.card,
        border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.accent}`,
        marginBottom: 40,
      }}>
        <p style={{
          fontSize: 17, color: C.text, lineHeight: 1.7, margin: "0 0 16px",
          fontStyle: "italic",
        }}>
          "SVRN ALPHA didn't just give us tools. They gave us a sovereign capability. Our analysts think differently, our workflows are fundamentally restructured, and our proprietary knowledge compounds in infrastructure we own. That's not a vendor relationship — it's an institutional advantage."
        </p>
        <div style={{ fontFamily: mono, fontSize: 11, color: C.accent }}>
          — Senior Managing Director, MP Capital Markets
        </div>
      </div>

      {/* CTA */}
      <div style={{
        padding: 32, borderRadius: 12, background: C.surface,
        border: `1px solid ${C.border}`, textAlign: "center",
        marginBottom: 40,
      }}>
        <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>
          Your 90-day transformation starts with a conversation.
        </h3>
        <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 20 }}>
          No pitch deck theater. Just a confidential briefing with our team in Hamburg.
        </p>
        <div style={{
          display: "inline-block", padding: "12px 32px", borderRadius: 8,
          background: C.primary, color: C.black,
          fontFamily: mono, fontSize: 12, fontWeight: 700,
          letterSpacing: "0.05em", cursor: "pointer",
        }}>&gt; INITIALIZE_BRIEFING</div>
      </div>
    </ArticleLayout>
  </div>
);

// ═══════════════════════════════════════════════════════
// WHITEPAPER LANDING PAGE
// ═══════════════════════════════════════════════════════

const WhitepaperPage = () => (
  <div style={{ padding: "64px 40px 80px" }}>
    <ArticleLayout maxWidth={780}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Badge variant="blue">FOUNDING PAPER</Badge>
        <h1 style={{
          fontFamily: sans, fontSize: 36, fontWeight: 800,
          letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
        }}>
          The Three-Pillar Model:<br />A Framework for Sovereign AI Transformation in Investment Banking
        </h1>
        <p style={{ fontSize: 17, color: C.accent, margin: "0 0 8px", fontStyle: "italic" }}>
          Prof. Dr. Tobias Blask · SVRN ALPHA Research · January 2026
        </p>
        <ReadingTime minutes={25} />
      </div>

      {/* Paper preview card */}
      <div style={{
        padding: 32, borderRadius: 16, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 40,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 16 }}>ABSTRACT</div>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 16px" }}>
          Artificial intelligence adoption in European investment banking has followed a technology-first pattern that produces consistently poor outcomes. Analysis of over fifty transformation initiatives across DACH, Nordic, and UK institutions reveals a critical insight: organizational factors account for approximately 70% of implementation success, while technology accounts for 30%. Yet budget allocation typically inverts this ratio.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 16px" }}>
          This paper introduces the Three-Pillar Model — a sequential framework that addresses Education, Process, and Technology in that order. The model is grounded in the Creator-to-Curator hypothesis: that the primary value shift in AI-enabled banking is not automation of tasks but the cognitive reorientation of professionals from content creation to insight curation.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
          Initial deployment of the framework at a European investment bank produced measurable results within 90 days: a capacity reallocation from 70% routine work to 70% strategic analysis, measurable alpha generation above benchmark, and full regulatory compliance including EU AI Act readiness. The paper concludes with implications for data sovereignty as a competitive moat and the role of Human-in-the-Loop architecture as a non-negotiable design principle.
        </p>
      </div>

      {/* Table of Contents */}
      <div style={{
        padding: 24, borderRadius: 12, background: C.surface,
        border: `1px solid ${C.border}`, marginBottom: 40,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 14 }}>CONTENTS</div>
        {[
          { num: "1", title: "Introduction: The AI Transformation Paradox", page: "3" },
          { num: "2", title: "Literature Review: Why Transformation Fails", page: "6" },
          { num: "3", title: "The Three-Pillar Model", page: "12" },
          { num: "3.1", title: "Pillar 1: Education and the Creator-to-Curator Shift", page: "14" },
          { num: "3.2", title: "Pillar 2: Process Redesign and the Capacity Flip", page: "19" },
          { num: "3.3", title: "Pillar 3: Sovereign Technology Architecture", page: "24" },
          { num: "4", title: "Data Sovereignty as Competitive Moat", page: "29" },
          { num: "5", title: "Human-in-the-Loop: Architecture, Not Feature", page: "33" },
          { num: "6", title: "Case Application: European Investment Bank", page: "36" },
          { num: "7", title: "Implications and Future Research", page: "41" },
          { num: "—", title: "References", page: "44" },
        ].map((item, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 0", borderBottom: i < 10 ? `1px solid ${C.border}` : "none",
          }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontFamily: mono, fontSize: 12, color: C.primary, minWidth: 28 }}>{item.num}</span>
              <span style={{ fontSize: 13, color: item.num === "—" ? C.textMuted : C.textSoft }}>{item.title}</span>
            </div>
            <span style={{ fontFamily: mono, fontSize: 11, color: C.textDim }}>{item.page}</span>
          </div>
        ))}
      </div>

      {/* Download CTA */}
      <div style={{
        padding: 40, borderRadius: 16, textAlign: "center",
        background: `linear-gradient(135deg, ${C.primaryDim}20, ${C.accentDim}20)`,
        border: `1px solid ${C.border}`,
      }}>
        <h2 style={{ fontFamily: sans, fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>
          Download the Founding Paper
        </h2>
        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 24, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
          44 pages of research, methodology, and evidence. The intellectual foundation behind the SVRN ALPHA framework.
        </p>
        <div style={{
          display: "inline-block", padding: "14px 36px", borderRadius: 8,
          background: C.primary, color: C.black,
          fontFamily: mono, fontSize: 13, fontWeight: 700,
          letterSpacing: "0.05em", cursor: "pointer",
        }}>&gt; DOWNLOAD_PAPER</div>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, marginTop: 12 }}>
          PDF · 44 pages · No registration required
        </div>
      </div>
    </ArticleLayout>
  </div>
);

// ═══════════════════════════════════════════════════════
// PRESS RELEASE
// ═══════════════════════════════════════════════════════

const PressPage = () => (
  <div style={{ padding: "48px 40px 80px" }}>
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
          SVRN ALPHA's initial deployment produced measurable results within 90 days: a capacity reallocation from 70% routine work to 70% strategic analysis among research analysts, alpha generation of +340 basis points above benchmark, and full compliance with EU AI Act, MiFID II, MAR, and GDPR requirements.
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
        padding: 24, borderRadius: 12, background: C.surface,
        border: `1px solid ${C.border}`, marginTop: 32, marginBottom: 24,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>ABOUT SVRN ALPHA</div>
        <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>
          SVRN ALPHA is a sovereign AI enablement company for investment banking, headquartered in Hamburg, Germany. Founded by Prof. Dr. Tobias Blask and backed by MP Capital Markets, SVRN ALPHA transforms how financial institutions adopt AI through the Three-Pillar Model — a research-grounded framework addressing Education, Process, and Technology in that sequence. The company deploys sovereign AI infrastructure with full EU regulatory compliance, zero vendor lock-in, and Human-in-the-Loop architecture. Learn more at svrn-alpha.ai.
        </p>
      </div>

      {/* Contact */}
      <div style={{
        padding: 20, borderRadius: 10, background: C.card, border: `1px solid ${C.border}`,
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

// ═══════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════

const AboutPage = () => (
  <div style={{ padding: "48px 40px 80px" }}>
    <ArticleLayout maxWidth={780}>
      <Badge>ABOUT</Badge>
      <h1 style={{
        fontFamily: sans, fontSize: 36, fontWeight: 800,
        letterSpacing: "-0.025em", lineHeight: 1.15, margin: "16px 0 12px",
      }}>
        Founded on Academic Rigor.<br />Engineered for Reality.
      </h1>
      <p style={{ fontSize: 17, color: C.textMuted, margin: "0 0 48px", maxWidth: 560, lineHeight: 1.7 }}>
        SVRN ALPHA exists because the gap between what research says about AI transformation and what the industry does about it is too wide to accept.
      </p>

      {/* Origin story */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>The Origin</h2>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 16px" }}>
          For over a decade, Prof. Dr. Tobias Blask researched digital transformation in financial institutions. The patterns were consistent and frustrating: banks invested billions in AI technology, hired data scientists, licensed platforms — and achieved almost nothing. The failure rate hovered around 70%, year after year.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: "0 0 16px" }}>
          The academic literature was unambiguous: the primary determinant of transformation success wasn't technological capability. It was organizational readiness — how people thought about AI, how workflows adapted, how leadership committed to the change. Yet the industry continued to allocate 90% of its AI budget to technology and 10% to the organizational factors that actually determined success.
        </p>
        <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>
          In 2025, Prof. Dr. Blask stopped writing papers about the problem and founded SVRN ALPHA to fix it. The company bridges the gap between what research proves and what practice requires — bringing academic rigor to the messy, political, deeply human work of organizational transformation.
        </p>
      </div>

      {/* Founder card */}
      <div style={{
        padding: 32, borderRadius: 16, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 48,
        display: "grid", gridTemplateColumns: "auto 1fr", gap: 28,
      }}>
        <div style={{
          width: 120, height: 120, borderRadius: 16,
          background: `linear-gradient(135deg, ${C.primary}20, ${C.accent}20)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: `1px solid ${C.border}`,
        }}>
          <span style={{ fontFamily: mono, fontSize: 36, fontWeight: 800, color: C.primary }}>TB</span>
        </div>
        <div>
          <h3 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Prof. Dr. Tobias Blask</h3>
          <div style={{ fontFamily: mono, fontSize: 12, color: C.accent, letterSpacing: "0.05em", marginBottom: 16 }}>
            Founder & Chairman
          </div>
          <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: "0 0 12px" }}>
            Academic researcher turned practitioner. Over a decade of published research on digital transformation in financial institutions, combined with hands-on implementation experience inside European investment banks.
          </p>
          <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>
            The SVRN ALPHA framework was built from real transformation work — not from slide decks. The industry needs a partner who understands both the science of AI and the organizational politics of making it stick.
          </p>
        </div>
      </div>

      {/* Principles */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: sans, fontSize: 22, fontWeight: 700, margin: "0 0 20px" }}>Principles</h2>
        {[
          { title: "Education Before Technology", desc: "We never deploy technology until the organizational readiness is in place. The order is the methodology.", icon: "01" },
          { title: "Sovereignty Is Non-Negotiable", desc: "Your data stays yours. Your infrastructure answers to you. No vendor lock-in, no foreign jurisdiction, no exceptions.", icon: "02" },
          { title: "Human-in-the-Loop Always", desc: "AI assists. Humans decide. Every critical juncture has a human checkpoint. This is architecture, not a feature toggle.", icon: "03" },
          { title: "Evidence Over Claims", desc: "We show numbers, not adjectives. +340bps. 70/30 flip. 90 days. If we can't measure it, we don't claim it.", icon: "04" },
          { title: "Compliance by Design", desc: "EU AI Act, MiFID II, MAR, GDPR — built into the architecture from day one. Not retrofitted after deployment.", icon: "05" },
        ].map((p, i) => (
          <div key={i} style={{
            display: "flex", gap: 20, padding: "20px 0",
            borderBottom: i < 4 ? `1px solid ${C.border}` : "none",
          }}>
            <span style={{
              fontFamily: mono, fontSize: 24, fontWeight: 800,
              color: C.primary, opacity: 0.3, minWidth: 40, lineHeight: 1,
            }}>{p.icon}</span>
            <div>
              <h3 style={{ fontFamily: sans, fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: C.text }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: C.textMuted, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Backed by */}
      <div style={{
        padding: 28, borderRadius: 12, background: C.surface,
        border: `1px solid ${C.border}`, textAlign: "center",
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>BACKED BY</div>
        <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: C.textSoft, letterSpacing: "0.08em" }}>
          MP Capital Markets
        </div>
        <div style={{ fontSize: 13, color: C.textMuted, marginTop: 6 }}>
          Münchmeier Petersen Capital Markets · Hamburg, Germany
        </div>
        <div style={{
          fontFamily: mono, fontSize: 10, color: C.textDim, marginTop: 16,
          letterSpacing: "0.05em",
        }}>
          SVRN ALPHA · Hamburg · Sovereign AI Enablement
        </div>
      </div>
    </ArticleLayout>
  </div>
);

// ═══════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════

export default function SVRNAlphaContentSite() {
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
      <Footer />
    </div>
  );
}
