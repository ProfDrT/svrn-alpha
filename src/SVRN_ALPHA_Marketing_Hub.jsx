import { useState, useEffect } from "react";

// ─── SVRN ALPHA · MARKETING COMMAND CENTER ───
// All marketing content in one terminal-aesthetic interface.

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";

const C = {
  black: "#050505", surface: "#0A0A0B", card: "#111113",
  border: "#1A1A1E", borderHover: "#2A2A30",
  primary: "#10B981", primaryDim: "#065F46",
  accent: "#D4AF37", accentDim: "#92751E",
  text: "#F4F4F5", textSoft: "#A1A1AA", textMuted: "#52525B", textDim: "#3F3F46",
  red: "#EF4444", blue: "#3B82F6",
};

// ═══════════════════════════════════════════════════════
// CONTENT DATA
// ═══════════════════════════════════════════════════════

const brandVoice = {
  personality: `If SVRN ALPHA were a person, they would be a senior partner at a top-tier institution who also holds a research chair — someone who speaks with quiet authority, never oversells, and lets results do the talking. They use precise language, favor evidence over adjectives, and treat every client as a peer.`,
  attributes: [
    {
      name: "SOVEREIGN",
      weAre: "Authoritative, independent, self-determined. We speak as equals to C-suite leaders.",
      weAreNot: "Arrogant, dismissive, or condescending. Authority without ego.",
      sounds: "Your data stays yours. Your infrastructure answers to you. Period.",
      doesNot: "Trust us — we know best! Just hand over your data and we'll handle everything.",
    },
    {
      name: "TECHNICAL",
      weAre: "Precise, evidence-based, engineering-minded. We use specific numbers and frameworks.",
      weAreNot: "Jargon-heavy for jargon's sake. Technical without being exclusionary.",
      sounds: "70% of your analysts' capacity is consumed by routine tasks. We invert that ratio.",
      doesNot: "Our state-of-the-art neural architecture leverages transformer-based embeddings.",
    },
    {
      name: "COMMANDING",
      weAre: "Direct, declarative, decisive. Short sentences. Active voice. No hedging.",
      weAreNot: "Aggressive or confrontational. Confident, not combative.",
      sounds: "Stop buying tools. Start building moats.",
      doesNot: "We think it might be worth considering whether perhaps a moat-building approach could be beneficial.",
    },
    {
      name: "INSTITUTIONAL",
      weAre: "Serious, measured, befitting the gravity of banking transformation. Goldman-register, not startup-casual.",
      weAreNot: "Stiff or bureaucratic. We have personality — it's just the dry, confident kind.",
      sounds: "Confidential briefing with our team in Hamburg. No pitch deck theater.",
      doesNot: "Hey! 🚀 Book a quick call and let's disrupt your banking workflow!",
    },
    {
      name: "ACADEMIC",
      weAre: "Research-grounded, peer-reviewed methodology, founding-paper heritage.",
      weAreNot: "Ivory-tower or theoretical. Our academic rigor serves practical outcomes.",
      sounds: "Founded on academic rigor. Engineered for reality.",
      doesNot: "As demonstrated in our proprietary meta-analysis of heterogeneous treatment effects...",
    },
  ],
  terminalLanguage: [
    { pattern: "INITIALIZE_BRIEFING", use: "Primary CTA — request a meeting" },
    { pattern: "EXECUTE_BRIEFING", use: "Secondary CTA — confirm action" },
    { pattern: "> COMMAND_NAME", use: "Prompt-style CTA prefix" },
    { pattern: "// M_01, M_02, M_03", use: "Module labels for pillars" },
    { pattern: "HUMAN_LAYER", use: "Pillar 1 codename (Education)" },
    { pattern: "LOGIC_LAYER", use: "Pillar 2 codename (Processes)" },
    { pattern: "INFRA_LAYER", use: "Pillar 3 codename (Technology)" },
    { pattern: "[COMPLIANT] [VERIFIED]", use: "Status badges for compliance" },
    { pattern: "[ACTIVE] [ENFORCED]", use: "Status badges for governance" },
    { pattern: "[LOCAL] [LOCKED]", use: "Status badges for data sovereignty" },
    { pattern: "root@mpcm-server:~/logs", use: "Terminal prompt for execution reports" },
    { pattern: "SVRN_ALPHA (underscore)", use: "Terminal/code context name variant" },
    { pattern: "v2.0.4", use: "Version number in footer (increment on updates)" },
  ],
  toneSpectrum: [
    { channel: "Website / Landing", dial: "Commanding ▲▲▲ · Technical ▲▲ · Academic ▲", example: "Stop Buying Tools. Start Building Moats." },
    { channel: "LinkedIn (Tobias)", dial: "Academic ▲▲▲ · Sovereign ▲▲ · Technical ▲▲", example: "70% of AI transformation is people. The other 30% is what gets all the budget." },
    { channel: "Cold Email", dial: "Commanding ▲▲▲ · Technical ▲▲ · Institutional ▲▲", example: "Your data moat won't build itself. Let's discuss." },
    { channel: "Press / PR", dial: "Institutional ▲▲▲ · Academic ▲▲ · Sovereign ▲▲", example: "SVRN ALPHA announces sovereign AI framework for European investment banking." },
    { channel: "Whitepaper", dial: "Academic ▲▲▲ · Technical ▲▲▲ · Sovereign ▲▲", example: "The three-pillar model suggests that education must precede process change." },
    { channel: "Sales Deck", dial: "Commanding ▲▲ · Technical ▲▲▲ · Institutional ▲▲", example: "+340bps alpha. 70/30 capacity flip. 90-day deployment. EU compliant from day one." },
  ],
  antiPatterns: [
    { never: "Hey! 🚀 Let's disrupt...", why: "Startup-casual tone destroys institutional credibility" },
    { never: "Our AI solution leverages...", why: "'Solution' and 'leverage' are banned — too generic" },
    { never: "Best-in-class platform...", why: "Superlatives without evidence. We show, never claim." },
    { never: "We're excited to announce...", why: "Excitement is for startups. We're sovereign." },
    { never: "Click here to learn more!", why: "Never imperative without value. Offer substance first." },
    { never: "In today's rapidly changing...", why: "Generic preamble. Start with the point." },
  ],
};

const linkedinPosts = [
  {
    id: 1, title: "Launch Announcement",
    hook: "We didn't build another AI tool.",
    body: `We built the methodology for banks that want to own their intelligence — not rent it.\n\nSVRN ALPHA is a sovereign AI enabler for investment banking. Not a vendor. Not a consultancy. An enabler.\n\nWhat that means:\n→ Your data stays in your fortress\n→ Your people drive the transformation\n→ Your competitive edge compounds\n\nThe founding thesis: 70% of AI transformation success is organizational. Not technical.\n\nWe start with Education. Then Processes. Technology comes last.\n\nThat's the three-pillar model. That's SVRN ALPHA.`,
    cta: "Confidential briefings available → svrn-alpha.ai",
    hashtags: "#InvestmentBanking #AI #DataSovereignty #Transformation",
  },
  {
    id: 2, title: "The 70% Problem",
    hook: "70% of AI initiatives in banking fail.",
    body: `Not because of technology. Because of people.\n\nEvery CTO I speak with has the same story:\n– They bought the tools\n– They hired the data scientists\n– They built the pipeline\n\nAnd then... nothing changed.\n\nBecause nobody addressed the 70%:\n→ How people think about AI\n→ How workflows need to restructure\n→ How leadership must own the transformation\n\nThis is not an IT project. It's an organizational transformation.\n\nThe C-suite has to lead it. Not delegate it.`,
    cta: "We wrote a framework for this → svrn-alpha.ai",
    hashtags: "#AITransformation #Banking #Leadership #DigitalTransformation",
  },
  {
    id: 3, title: "Three-Pillar Manifesto",
    hook: "Education. Processes. Technology. In that order. Always.",
    body: `Most banks start with technology.\n\nThey buy a platform. Deploy some models. Build a dashboard.\n\nThen they wonder why nobody uses it.\n\nOur three-pillar model flips the sequence:\n\nPillar 1: EDUCATION (Spirit)\nCreator → Curator. Your people don't need to code. They need to think differently.\n\nPillar 2: PROCESSES (Workflow)\n70% routine → 70% strategic. The capacity flip.\n\nPillar 3: TECHNOLOGY (Architecture)\nHuman-in-the-Loop. Non-negotiable. Sovereign.\n\nThe order matters. Skip Pillar 1, and Pillars 2 and 3 collapse.`,
    cta: "Full framework at svrn-alpha.ai",
    hashtags: "#AIStrategy #InvestmentBanking #Framework #Methodology",
  },
  {
    id: 4, title: "Creator to Curator",
    hook: "Your research analysts spend 70% of their time on routine tasks.",
    body: `Gathering data. Formatting reports. Updating models. Copy-pasting.\n\n30% on actual analysis. The work that generates alpha.\n\nWe invert that ratio.\n\n70% strategic. 30% routine. We call it the capacity flip.\n\nBut here's what nobody tells you:\nThe flip doesn't come from buying an AI tool.\n\nIt comes from:\n→ Teaching analysts to be curators, not creators\n→ Redesigning workflows around AI capabilities\n→ Building sovereign infrastructure that protects proprietary insights\n\nThe tool is 30% of the equation.\nThe transformation is 70%.`,
    cta: "How we do it → svrn-alpha.ai",
    hashtags: "#ResearchAnalyst #AlphaGeneration #CapacityFlip #Banking",
  },
  {
    id: 5, title: "Data Sovereignty",
    hook: "Every AI vendor sells access to the same models.",
    body: `GPT-4. Claude. Gemini. They're commodities.\n\nSo where's the edge?\n\nIt's not in the model. It's in what you feed it.\n\nYour proprietary data. Your institutional knowledge. Your 20 years of research notes. Your client relationships.\n\nThat's your moat. And most banks are handing it to third-party vendors on US-based cloud infrastructure.\n\nUnder CLOUD Act jurisdiction. Without full audit trails. Without EU AI Act compliance.\n\nSVRN ALPHA's position:\n→ Sovereign = your data stays yours\n→ Private cloud = EU jurisdiction\n→ No vendor lock-in = you own the infrastructure\n→ Human-in-the-loop = non-negotiable\n\nTechnology is interchangeable. Your proprietary knowledge is not.`,
    cta: "Build your fortress → svrn-alpha.ai",
    hashtags: "#DataSovereignty #EUAIAct #Compliance #InvestmentBanking",
  },
  {
    id: 6, title: "Open Letter to Banking CTOs",
    hook: "Dear CTO,",
    body: `Your board just approved the AI budget. Congratulations.\n\nNow here's the uncomfortable truth:\n\nIf you spend it on tools, you'll have tools.\nIf you spend it on transformation, you'll have a moat.\n\nEvery bank is buying the same platforms from the same vendors with the same implementation partners.\n\nThe result? A race to parity. Not advantage.\n\nSovereign alpha — the excess return nobody else can replicate — comes from:\n\n1. Your people thinking differently\n2. Your processes restructured around AI\n3. Your data protected in sovereign infrastructure\n\nThe budget isn't the hard part.\nThe hard part is leading the organizational change.\n\nThat's what we built SVRN ALPHA for.`,
    cta: "Confidential briefing → svrn-alpha.ai",
    hashtags: "#CTO #BankingAI #DigitalTransformation #SovereignAI",
  },
  {
    id: 7, title: "90-Day Proof Case",
    hook: "We deployed our framework at MP Capital Markets. Here's what happened in 90 days.",
    body: `Week 1-4: Education\n→ AI fluency workshops from trading floor to boardroom\n→ Creator-to-Curator mindset shift initiated\n→ Change champions identified at every level\n\nWeek 5-8: Process Redesign\n→ Workflow mapping: identified 70% routine-task burden\n→ Capacity reallocation blueprint designed\n→ Human-in-the-Loop checkpoints defined\n\nWeek 9-12: Sovereign Deployment\n→ Private cloud infrastructure operational\n→ EU AI Act compliance verified\n→ First alpha-generating workflows live\n\nResult: +340bps alpha generation. 70/30 capacity flip complete.\n\nNo vendor lock-in. No data leakage. Full audit trail.\n\nThat's not a pilot. That's a proof case.`,
    cta: "Your 90-day transformation → svrn-alpha.ai",
    hashtags: "#CaseStudy #AITransformation #AlphaGeneration #ProofCase",
  },
  {
    id: 8, title: "Academic Rigor, Engineered for Reality",
    hook: "I'm a professor who got tired of watching AI transformations fail.",
    body: `For 10 years, I researched digital transformation in financial institutions.\n\nI watched pattern after pattern:\n→ Banks buying tools they couldn't implement\n→ Consultants delivering slide decks, not results\n→ Billions spent on technology that nobody adopted\n\nThe academic literature was clear: 70% of success is organizational. Technology is 30%.\n\nBut the industry spent 90% of budget on the 30%.\n\nSo I stopped writing papers about it and built a company to fix it.\n\nSVRN ALPHA is the bridge between what the research says and what the industry does.\n\nAcademic rigor. Engineered for reality.\n\nBecause the only AI transformation that works is one where people lead and technology follows.`,
    cta: "The founding framework → svrn-alpha.ai",
    hashtags: "#AcademicResearch #ProfessorLife #AITransformation #InvestmentBanking",
  },
];

const emailSequence = [
  {
    day: 0, label: "Day 0 — The Opener",
    subjects: [
      "Your analysts spend 70% on the wrong work",
      "Data moats in investment banking",
      "The 70/30 problem at [COMPANY]",
    ],
    body: `[FIRST_NAME],\n\nYour research analysts spend 70% of their time on routine tasks — gathering data, formatting reports, updating models.\n\n30% on actual alpha-generating work.\n\nWe built a framework to invert that ratio. It starts with people, not technology.\n\nSVRN ALPHA is a sovereign AI enabler for investment banking. We deployed our three-pillar model at MP Capital Markets — Education, Processes, Technology — and achieved a full 70/30 capacity flip in 90 days.\n\nWorth a 15-minute conversation?\n\nProf. Dr. Tobias Blask\nFounder & Chairman, SVRN ALPHA\nsvrn-alpha.ai`,
    notes: "< 120 words. Lead with the pain point (70% routine). Don't sell — provoke curiosity.",
  },
  {
    day: 3, label: "Day 3 — The Proof Point",
    subjects: [
      "+340bps. Not a typo.",
      "What happened at MPCM in 90 days",
      "The proof case [FIRST_NAME]",
    ],
    body: `[FIRST_NAME],\n\nQuick follow-up.\n\nWe deployed our framework at MP Capital Markets. Results after 90 days:\n\n→ +340bps alpha generation\n→ 70/30 capacity flip complete\n→ Zero data leakage\n→ Full EU AI Act compliance\n\nNo vendor lock-in. No SaaS subscription. Sovereign infrastructure they own.\n\nThe difference? We didn't start with technology. We started with their people.\n\n15 minutes to walk you through what we found?\n\nTobias`,
    notes: "< 100 words. Hard proof. Specific numbers. Short paragraphs. Zero fluff.",
  },
  {
    day: 7, label: "Day 7 — The Framework",
    subjects: [
      "Why 70% of AI projects fail (it's not the tech)",
      "Education before technology",
      "The three-pillar model",
    ],
    body: `[FIRST_NAME],\n\nMost AI initiatives in banking follow the same path:\n\nBuy tools → Hire data scientists → Build pipelines → Wonder why nothing changed.\n\nThe problem: they skip the 70% that actually matters.\n\nOur three-pillar model:\n1. Education — Creator to Curator mindset shift\n2. Processes — Workflow restructuring, the capacity flip\n3. Technology — Sovereign architecture, human-in-the-loop\n\nThe order is non-negotiable. Skip Pillar 1, and Pillars 2 and 3 collapse.\n\nI wrote the founding paper on this. Happy to share the framework directly.\n\nTobias`,
    notes: "< 110 words. Position the intellectual framework. Offer value (the paper), not a meeting.",
  },
  {
    day: 14, label: "Day 14 — The Sovereignty Angle",
    subjects: [
      "Where does your proprietary data live?",
      "The CLOUD Act problem in banking AI",
      "Sovereign vs. rented intelligence",
    ],
    body: `[FIRST_NAME],\n\nOne question that changes the conversation:\n\nWhere does your proprietary data go after an AI engagement ends?\n\nMost banks can't answer this. Their models run on third-party infrastructure. Their data traverses US-based cloud under CLOUD Act jurisdiction. Their competitive edge is one vendor decision away from exposure.\n\nSVRN ALPHA's position: if you don't own your AI infrastructure, you don't own your edge.\n\nSovereign means: EU-hosted, fully auditable, zero vendor lock-in, human-in-the-loop at every critical decision.\n\nWorth discussing how this applies to [COMPANY]?\n\nTobias`,
    notes: "< 110 words. Provoke with a question they probably can't answer. Sovereignty as differentiator.",
  },
  {
    day: 21, label: "Day 21 — The Breakup",
    subjects: [
      "Closing the loop",
      "Last note on sovereign AI",
      "Not the right time?",
    ],
    body: `[FIRST_NAME],\n\nI'll keep this brief.\n\nI've shared our framework, our proof case, and our position on data sovereignty. If the timing isn't right, I understand completely.\n\nTwo things before I close the loop:\n\n1. The founding paper is available at svrn-alpha.ai if you want to explore the methodology independently.\n\n2. If [COMPANY] decides to explore sovereign AI enablement in the future, we're in Hamburg and the door is open.\n\nAll the best with your AI initiatives.\n\nTobias\n\nPS — "Stop buying tools. Start building moats." That's the whole thesis in eight words.`,
    notes: "< 100 words. Graceful exit. Leave the door open. PS with the brand tagline.",
  },
];

const campaignPlan = {
  objective: "Generate 50 qualified briefing requests and convert 5-8 into pilot engagements within 12 weeks of launch",
  phases: [
    {
      name: "PHASE 1: IGNITION",
      weeks: "Week 1-4",
      color: C.primary,
      activities: [
        "Launch svrn-alpha.ai landing page with terminal aesthetic",
        "Tobias LinkedIn series: Posts 1-4 (Launch, 70% Problem, Three Pillars, Creator-to-Curator)",
        "Deploy cold email sequence to Tier 1 targets (DACH Managing Directors)",
        "Publish founding whitepaper on svrn-alpha.ai",
        "Press release via DGAP / EQS (Hamburg fintech ecosystem)",
      ],
      kpis: ["1,000+ LinkedIn impressions per post", "25% email open rate", "10 briefing requests"],
    },
    {
      name: "PHASE 2: ACCELERATION",
      weeks: "Week 5-8",
      color: C.accent,
      activities: [
        "LinkedIn series: Posts 5-6 (Data Sovereignty, Open Letter to CTOs)",
        "Expand cold outreach to Tier 2 (Nordics, UK banking leaders)",
        "Host first \"Sovereign AI in Banking\" webinar (Hamburg or virtual)",
        "Submit conference talk to Finance Forward Hamburg",
        "Begin retargeting on LinkedIn for site visitors",
      ],
      kpis: ["2,500+ LinkedIn impressions per post", "5 webinar attendees from target accounts", "25 total briefing requests"],
    },
    {
      name: "PHASE 3: CONVERSION",
      weeks: "Week 9-12",
      color: C.blue,
      activities: [
        "LinkedIn series: Posts 7-8 (90-Day Proof Case, Academic Rigor)",
        "Launch MPCM case study (anonymized or with permission)",
        "1:1 executive roundtable in Hamburg (5-8 banking leaders)",
        "Activate referral channel through MP Capital Markets network",
        "Close first pilot engagements",
      ],
      kpis: ["50 total briefing requests", "5-8 pilot engagements signed", "3+ speaking invitations received"],
    },
  ],
  budget: [
    { item: "LinkedIn Ads (Thought Leader Ads + Retargeting)", range: "€15-25K" },
    { item: "Content Production (Whitepaper, Case Study, Video)", range: "€10-15K" },
    { item: "Email Platform (Lemlist / HubSpot)", range: "€2-5K" },
    { item: "Events (Webinar + Executive Roundtable)", range: "€8-12K" },
    { item: "PR & Comms (DGAP, Press, Finance Forward)", range: "€5-8K" },
    { item: "Website & Analytics (Vercel, Plausible, Hotjar)", range: "€2-3K" },
    { item: "Design & Collateral (Sales deck, One-pager)", range: "€5-8K" },
    { item: "Contingency (10%)", range: "€8-12K" },
  ],
  totalBudget: "€80-120K",
};

const competitiveData = {
  matrix: [
    { dim: "Approach", svrn: "Engineering + Education", big4: "Advisory only", saas: "Platform / self-serve", boutique: "Body-shopping / consulting", inhouse: "Build from scratch" },
    { dim: "Data Sovereignty", svrn: "Full (EU private cloud)", big4: "Client-dependent", saas: "Vendor cloud (often US)", boutique: "Varies", inhouse: "Full (if built correctly)" },
    { dim: "EU AI Act", svrn: "Native / design-first", big4: "Advisory checklists", saas: "Retrofit / partial", boutique: "Rarely addressed", inhouse: "Must build compliance" },
    { dim: "Academic Foundation", svrn: "Founding paper + prof.", big4: "Generic frameworks", saas: "None", boutique: "None", inhouse: "None" },
    { dim: "Human-in-the-Loop", svrn: "Non-negotiable core", big4: "Mentioned, not enforced", saas: "Optional feature", boutique: "Ad-hoc", inhouse: "If designed in" },
    { dim: "Implementation", svrn: "Full (90-day deploy)", big4: "Slides only, no code", saas: "Customer self-service", boutique: "Partial, variable", inhouse: "12-24 months" },
    { dim: "Vendor Lock-in", svrn: "Zero", big4: "Low (but dependency)", saas: "High", boutique: "Low", inhouse: "Zero" },
    { dim: "Proven Results", svrn: "+340bps, capacity flip", big4: "Generic case studies", saas: "Usage metrics", boutique: "Anecdotal", inhouse: "Usually none" },
    { dim: "Cost Model", svrn: "Project-based, outcome", big4: "Day-rate (€5-15K/day)", saas: "Subscription ($/seat)", boutique: "Day-rate (€1-3K/day)", inhouse: "FTE cost (€150K+/yr)" },
  ],
  battlecards: [
    {
      trigger: "\"McKinsey already pitched us AI transformation\"",
      response: "Great — now you have the strategy. Who's going to engineer it? McKinsey delivers slide decks. We deliver production code, sovereign infrastructure, and measurable results. Ask them: what happens to your data after the engagement ends? Where's the +340bps proof case? Strategy without implementation is expensive fiction.",
    },
    {
      trigger: "\"We're evaluating Palantir / C3.ai\"",
      response: "Solid platforms — for general enterprise use. But in investment banking, the question isn't which platform. It's: who owns the infrastructure? With a SaaS vendor, your proprietary data leaves your building, runs on US-based cloud under CLOUD Act jurisdiction, and creates vendor lock-in. SVRN ALPHA builds sovereign infrastructure you own. We deploy in 90 days. No subscription. No lock-in.",
    },
    {
      trigger: "\"We'll build our in-house AI team\"",
      response: "That's the right long-term goal — we accelerate the path to get there. Building from scratch takes 12-24 months minimum, assuming you can hire the talent. Meanwhile, your competitors are moving. SVRN ALPHA gives you a 90-day head start with a proven framework, then transfers capability to your team. We're the enabler, not the replacement.",
    },
    {
      trigger: "\"AI is just a tool — we don't need a transformation partner\"",
      response: "That's exactly what 70% of failed AI initiatives believed. The technology is 30% of the equation. The other 70%? Getting your people to think differently, restructuring workflows, building organizational muscle. That's why we start with Education, not Technology. The tool works. The question is: will your organization?",
    },
  ],
  landmines: [
    "What happens to your proprietary data after the AI engagement ends?",
    "What percentage of your AI budget goes to people vs. technology?",
    "Is your current AI infrastructure EU AI Act compliant by design?",
    "Can you run your AI models without your current vendor?",
    "How long until your in-house team delivers measurable alpha?",
    "Who in the C-suite personally owns the AI transformation?",
    "What's your audit trail for AI-assisted decisions?",
    "How do you ensure human-in-the-loop at every critical juncture?",
  ],
};

// ═══════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════

const Badge = ({ children, variant = "primary" }) => {
  const color = variant === "accent" ? C.accent : variant === "red" ? C.red : variant === "blue" ? C.blue : C.primary;
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 4,
      border: `1px solid ${color}30`, background: `${color}10`,
      fontFamily: mono, fontSize: 10, color, letterSpacing: "0.1em",
    }}>{children}</span>
  );
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
      style={{
        background: copied ? `${C.primary}20` : C.surface,
        border: `1px solid ${copied ? C.primary : C.border}`,
        borderRadius: 6, padding: "6px 14px", cursor: "pointer",
        fontFamily: mono, fontSize: 10, color: copied ? C.primary : C.textMuted,
        letterSpacing: "0.05em", transition: "all 0.2s",
      }}
    >
      {copied ? "COPIED ✓" : "COPY"}
    </button>
  );
};

const SectionTitle = ({ badge, badgeVariant, title, subtitle }) => (
  <div style={{ marginBottom: 32 }}>
    <Badge variant={badgeVariant}>{badge}</Badge>
    <h2 style={{
      fontFamily: sans, fontSize: 28, fontWeight: 800,
      letterSpacing: "-0.02em", margin: "14px 0 6px", color: C.text,
    }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>{subtitle}</p>}
  </div>
);

// ═══════════════════════════════════════════════════════
// SECTION VIEWS
// ═══════════════════════════════════════════════════════

const DashboardView = () => (
  <div>
    <SectionTitle badge="COMMAND CENTER" title="Marketing Operations" subtitle="All SVRN ALPHA marketing assets in one place." />

    {/* Stats row */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
      {[
        { val: "8", label: "LinkedIn Posts", sub: "Ready to publish", c: C.primary },
        { val: "5", label: "Email Sequence", sub: "21-day cadence", c: C.accent },
        { val: "12", label: "Week Campaign", sub: "3 phases", c: C.blue },
        { val: "4", label: "Battlecards", sub: "Competitor responses", c: C.red },
      ].map((s, i) => (
        <div key={i} style={{
          padding: 20, borderRadius: 10, background: C.card,
          border: `1px solid ${C.border}`, textAlign: "center",
        }}>
          <div style={{ fontFamily: mono, fontSize: 32, fontWeight: 800, color: s.c }}>{s.val}</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: C.textSoft, marginTop: 4 }}>{s.label}</div>
          <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{s.sub}</div>
        </div>
      ))}
    </div>

    {/* Brand snapshot */}
    <div style={{
      padding: 24, borderRadius: 10, background: C.card,
      border: `1px solid ${C.border}`, marginBottom: 20,
    }}>
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>BRAND SNAPSHOT</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          ["Name", "SVRN ALPHA (indivisible)"],
          ["Tagline", "Stop Buying Tools. Start Building Moats."],
          ["Domain", "svrn-alpha.ai"],
          ["Logo Mark", "SA"],
          ["Typography", "JetBrains Mono + Inter"],
          ["Founder", "Prof. Dr. Tobias Blask"],
          ["Backer", "MP Capital Markets"],
          ["HQ", "Hamburg, Germany"],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: "flex", gap: 12 }}>
            <span style={{ fontFamily: mono, fontSize: 11, color: C.textDim, minWidth: 100 }}>{k}</span>
            <span style={{ fontSize: 12, color: C.textSoft }}>{v}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Color palette */}
    <div style={{
      padding: 24, borderRadius: 10, background: C.card,
      border: `1px solid ${C.border}`,
    }}>
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>COLOR SYSTEM</div>
      <div style={{ display: "flex", gap: 8 }}>
        {[
          { color: "#050505", label: "Black" },
          { color: "#10B981", label: "Signal Green" },
          { color: "#D4AF37", label: "Alpha Gold" },
          { color: "#0A0A0B", label: "Surface" },
          { color: "#F4F4F5", label: "Text" },
        ].map((c, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{
              height: 48, borderRadius: 8, background: c.color,
              border: `1px solid ${C.border}`, marginBottom: 6,
            }} />
            <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim }}>{c.label}</div>
            <div style={{ fontFamily: mono, fontSize: 9, color: C.textMuted }}>{c.color}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BrandVoiceView = () => {
  const [openAttr, setOpenAttr] = useState(0);
  return (
    <div>
      <SectionTitle badge="BRAND VOICE" badgeVariant="accent" title="Voice & Tone System" subtitle="How SVRN ALPHA speaks across every channel." />

      {/* Personality */}
      <div style={{
        padding: 24, borderRadius: 10, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 24,
      }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.accent, letterSpacing: "0.15em", marginBottom: 10 }}>BRAND PERSONALITY</div>
        <p style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>{brandVoice.personality}</p>
      </div>

      {/* Voice Attributes */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>5 VOICE ATTRIBUTES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {brandVoice.attributes.map((attr, i) => (
          <div key={i} style={{
            borderRadius: 10, border: `1px solid ${openAttr === i ? C.borderHover : C.border}`,
            background: openAttr === i ? C.card : "transparent", overflow: "hidden", transition: "all 0.2s",
          }}>
            <div
              onClick={() => setOpenAttr(openAttr === i ? -1 : i)}
              style={{
                padding: "14px 20px", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: C.primary, letterSpacing: "0.1em" }}>{attr.name}</span>
              <span style={{ fontFamily: mono, fontSize: 12, color: C.textDim }}>{openAttr === i ? "▲" : "▼"}</span>
            </div>
            {openAttr === i && (
              <div style={{ padding: "0 20px 20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: mono, fontSize: 9, color: C.primary, letterSpacing: "0.1em", marginBottom: 6 }}>WE ARE</div>
                    <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>{attr.weAre}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: mono, fontSize: 9, color: C.red, letterSpacing: "0.1em", marginBottom: 6 }}>WE ARE NOT</div>
                    <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>{attr.weAreNot}</p>
                  </div>
                </div>
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 6, background: `${C.primary}08`, border: `1px solid ${C.primary}15` }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: C.primary, letterSpacing: "0.1em", marginBottom: 4 }}>THIS SOUNDS LIKE</div>
                  <p style={{ fontSize: 12, color: C.primary, margin: 0, fontStyle: "italic" }}>"{attr.sounds}"</p>
                </div>
                <div style={{ marginTop: 8, padding: "10px 14px", borderRadius: 6, background: `${C.red}08`, border: `1px solid ${C.red}15` }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: C.red, letterSpacing: "0.1em", marginBottom: 4 }}>THIS DOES NOT SOUND LIKE</div>
                  <p style={{ fontSize: 12, color: C.red, margin: 0, fontStyle: "italic" }}>"{attr.doesNot}"</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Language System */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>TERMINAL LANGUAGE SYSTEM</div>
      <div style={{
        padding: 20, borderRadius: 10, background: C.card,
        border: `1px solid ${C.border}`, marginBottom: 24,
      }}>
        {brandVoice.terminalLanguage.map((t, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 0", borderBottom: i < brandVoice.terminalLanguage.length - 1 ? `1px solid ${C.border}` : "none",
          }}>
            <code style={{ fontFamily: mono, fontSize: 12, color: C.primary }}>{t.pattern}</code>
            <span style={{ fontSize: 11, color: C.textMuted }}>{t.use}</span>
          </div>
        ))}
      </div>

      {/* Tone Spectrum */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 12 }}>TONE SPECTRUM BY CHANNEL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
        {brandVoice.toneSpectrum.map((t, i) => (
          <div key={i} style={{
            padding: "14px 18px", borderRadius: 8, background: C.card, border: `1px solid ${C.border}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: C.text }}>{t.channel}</span>
              <span style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>{t.dial}</span>
            </div>
            <div style={{ fontSize: 12, color: C.textMuted, fontStyle: "italic" }}>"{t.example}"</div>
          </div>
        ))}
      </div>

      {/* Anti-Patterns */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.red, letterSpacing: "0.15em", marginBottom: 12 }}>ANTI-PATTERNS — NEVER DO THIS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {brandVoice.antiPatterns.map((a, i) => (
          <div key={i} style={{
            padding: "12px 16px", borderRadius: 8,
            background: `${C.red}06`, border: `1px solid ${C.red}15`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontFamily: mono, fontSize: 12, color: C.red, textDecoration: "line-through" }}>"{a.never}"</span>
            <span style={{ fontSize: 11, color: C.textMuted, maxWidth: 300, textAlign: "right" }}>{a.why}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LinkedInView = () => {
  const [activePost, setActivePost] = useState(0);
  const post = linkedinPosts[activePost];
  const fullText = `${post.hook}\n\n${post.body}\n\n${post.cta}\n\n${post.hashtags}`;

  return (
    <div>
      <SectionTitle badge="LINKEDIN" title="Content Series — 8 Posts" subtitle="Ready-to-publish LinkedIn content for Prof. Dr. Tobias Blask." />

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20 }}>
        {/* Post list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {linkedinPosts.map((p, i) => (
            <div
              key={i}
              onClick={() => setActivePost(i)}
              style={{
                padding: "12px 14px", borderRadius: 8, cursor: "pointer",
                background: activePost === i ? C.card : "transparent",
                border: `1px solid ${activePost === i ? C.borderHover : "transparent"}`,
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>POST {p.id}/8</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: activePost === i ? C.text : C.textMuted, marginTop: 2 }}>{p.title}</div>
            </div>
          ))}
        </div>

        {/* Post preview */}
        <div>
          <div style={{
            padding: 28, borderRadius: 12, background: C.card,
            border: `1px solid ${C.border}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: mono, fontWeight: 800, fontSize: 14, color: C.black,
                }}>TB</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Prof. Dr. Tobias Blask</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>Founder & Chairman, SVRN ALPHA · Hamburg</div>
                </div>
              </div>
              <CopyButton text={fullText} />
            </div>

            {/* Hook */}
            <div style={{
              fontSize: 16, fontWeight: 700, color: C.text,
              marginBottom: 16, lineHeight: 1.4,
            }}>{post.hook}</div>

            {/* Body */}
            <div style={{
              fontSize: 13, color: C.textSoft, lineHeight: 1.7,
              whiteSpace: "pre-line", marginBottom: 16,
            }}>{post.body}</div>

            {/* CTA */}
            <div style={{
              padding: "10px 14px", borderRadius: 6,
              background: `${C.primary}08`, border: `1px solid ${C.primary}15`,
              fontFamily: mono, fontSize: 12, color: C.primary, marginBottom: 12,
            }}>{post.cta}</div>

            {/* Hashtags */}
            <div style={{ fontSize: 12, color: C.blue }}>{post.hashtags}</div>
          </div>

          {/* Character count */}
          <div style={{
            fontFamily: mono, fontSize: 10, color: C.textDim,
            marginTop: 8, textAlign: "right",
          }}>
            {fullText.length} characters · {fullText.length <= 1300 ? "✓ Within LinkedIn sweet spot" : "⚠ Consider trimming"}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailView = () => {
  const [activeEmail, setActiveEmail] = useState(0);
  const email = emailSequence[activeEmail];

  return (
    <div>
      <SectionTitle badge="EMAIL" badgeVariant="accent" title="Cold Outreach Sequence" subtitle="5 emails over 21 days. Replace [FIRST_NAME] and [COMPANY] with merge tags." />

      {/* Timeline */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {emailSequence.map((e, i) => (
          <div
            key={i}
            onClick={() => setActiveEmail(i)}
            style={{
              flex: 1, padding: "12px 14px", borderRadius: 8,
              background: activeEmail === i ? C.card : "transparent",
              border: `1px solid ${activeEmail === i ? C.accent : C.border}`,
              cursor: "pointer", textAlign: "center", transition: "all 0.2s",
            }}
          >
            <div style={{ fontFamily: mono, fontSize: 10, color: activeEmail === i ? C.accent : C.textDim }}>DAY {e.day}</div>
            <div style={{ fontSize: 10, color: activeEmail === i ? C.textSoft : C.textMuted, marginTop: 2 }}>
              {e.label.split("—")[1]?.trim()}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
        {/* Email content */}
        <div style={{
          padding: 28, borderRadius: 12, background: C.card,
          border: `1px solid ${C.border}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: C.accent }}>{email.label}</div>
            <CopyButton text={email.body} />
          </div>

          {/* Subject lines */}
          <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>SUBJECT LINE A/B VARIANTS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20 }}>
            {email.subjects.map((s, i) => (
              <div key={i} style={{
                padding: "8px 12px", borderRadius: 6,
                background: C.surface, border: `1px solid ${C.border}`,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: C.textSoft }}>
                  <span style={{ fontFamily: mono, color: C.textDim, marginRight: 8 }}>{String.fromCharCode(65 + i)}</span>
                  {s}
                </span>
                <CopyButton text={s} />
              </div>
            ))}
          </div>

          {/* Body */}
          <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>EMAIL BODY</div>
          <div style={{
            padding: 20, borderRadius: 8, background: C.surface,
            border: `1px solid ${C.border}`,
            fontSize: 13, color: C.textSoft, lineHeight: 1.7,
            whiteSpace: "pre-line",
          }}>{email.body}</div>
        </div>

        {/* Notes sidebar */}
        <div>
          <div style={{
            padding: 20, borderRadius: 10, background: `${C.accent}06`,
            border: `1px solid ${C.accent}15`,
          }}>
            <div style={{ fontFamily: mono, fontSize: 9, color: C.accent, letterSpacing: "0.15em", marginBottom: 8 }}>SENDING NOTES</div>
            <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>{email.notes}</p>
          </div>
          <div style={{
            padding: 20, borderRadius: 10, background: C.card,
            border: `1px solid ${C.border}`, marginTop: 12,
          }}>
            <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>SEQUENCE METRICS TARGET</div>
            {[
              ["Open Rate", "> 25%"],
              ["Reply Rate", "> 3%"],
              ["Meeting Rate", "> 1.5%"],
              ["Unsubscribe", "< 0.5%"],
            ].map(([k, v], i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                padding: "6px 0", borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
              }}>
                <span style={{ fontSize: 11, color: C.textMuted }}>{k}</span>
                <span style={{ fontFamily: mono, fontSize: 11, color: C.primary }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CampaignView = () => (
  <div>
    <SectionTitle badge="CAMPAIGN" badgeVariant="blue" title="12-Week Go-to-Market Plan" subtitle={`Objective: ${campaignPlan.objective}`} />

    {/* Phases */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
      {campaignPlan.phases.map((phase, pi) => (
        <div key={pi} style={{
          padding: 24, borderRadius: 12, background: C.card,
          border: `1px solid ${C.border}`, borderLeft: `3px solid ${phase.color}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: phase.color }}>{phase.name}</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: C.textDim, marginTop: 2 }}>{phase.weeks}</div>
            </div>
            <Badge variant={pi === 0 ? "primary" : pi === 1 ? "accent" : "blue"}>{phase.weeks.toUpperCase()}</Badge>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>ACTIVITIES</div>
              {phase.activities.map((a, i) => (
                <div key={i} style={{
                  padding: "8px 0", borderBottom: i < phase.activities.length - 1 ? `1px solid ${C.border}` : "none",
                  display: "flex", gap: 8,
                }}>
                  <span style={{ fontFamily: mono, color: phase.color, fontSize: 11, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.5 }}>{a}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.15em", marginBottom: 8 }}>KPIs</div>
              {phase.kpis.map((k, i) => (
                <div key={i} style={{
                  padding: "10px 14px", borderRadius: 6,
                  background: `${phase.color}08`, border: `1px solid ${phase.color}15`,
                  marginBottom: 6, fontFamily: mono, fontSize: 11, color: phase.color,
                }}>{k}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Budget */}
    <div style={{
      padding: 24, borderRadius: 12, background: C.card, border: `1px solid ${C.border}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em" }}>BUDGET ALLOCATION</div>
        <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 800, color: C.accent }}>{campaignPlan.totalBudget}</div>
      </div>
      {campaignPlan.budget.map((b, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 0", borderBottom: i < campaignPlan.budget.length - 1 ? `1px solid ${C.border}` : "none",
        }}>
          <span style={{ fontSize: 12, color: C.textSoft }}>{b.item}</span>
          <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: C.primary }}>{b.range}</span>
        </div>
      ))}
    </div>
  </div>
);

const CompetitiveView = () => {
  const [activeBattle, setActiveBattle] = useState(0);

  return (
    <div>
      <SectionTitle badge="COMPETITIVE" badgeVariant="red" title="Positioning & Battlecards" subtitle="How SVRN ALPHA positions against every competitor category." />

      {/* Competitive Matrix */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>COMPETITIVE MATRIX</div>
      <div style={{
        borderRadius: 12, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 32,
      }}>
        {/* Header */}
        <div style={{
          display: "grid", gridTemplateColumns: "140px 1fr 1fr 1fr 1fr 1fr",
          background: C.card, borderBottom: `1px solid ${C.border}`,
        }}>
          {["Dimension", "SVRN ALPHA", "Big 4", "SaaS Vendor", "Boutique AI", "In-House"].map((h, i) => (
            <div key={i} style={{
              padding: "10px 12px", fontFamily: mono, fontSize: 10, fontWeight: 700,
              color: i === 1 ? C.primary : i === 0 ? C.textDim : C.textMuted,
              letterSpacing: "0.05em", borderRight: i < 5 ? `1px solid ${C.border}` : "none",
            }}>{h}</div>
          ))}
        </div>
        {/* Rows */}
        {competitiveData.matrix.map((row, ri) => (
          <div key={ri} style={{
            display: "grid", gridTemplateColumns: "140px 1fr 1fr 1fr 1fr 1fr",
            borderBottom: ri < competitiveData.matrix.length - 1 ? `1px solid ${C.border}` : "none",
          }}>
            <div style={{ padding: "10px 12px", fontFamily: mono, fontSize: 10, color: C.accent, borderRight: `1px solid ${C.border}` }}>{row.dim}</div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: C.primary, fontWeight: 600, borderRight: `1px solid ${C.border}`, background: `${C.primary}04` }}>{row.svrn}</div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: C.textMuted, borderRight: `1px solid ${C.border}` }}>{row.big4}</div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: C.textMuted, borderRight: `1px solid ${C.border}` }}>{row.saas}</div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: C.textMuted, borderRight: `1px solid ${C.border}` }}>{row.boutique}</div>
            <div style={{ padding: "10px 12px", fontSize: 11, color: C.textMuted }}>{row.inhouse}</div>
          </div>
        ))}
      </div>

      {/* Battlecards */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>BATTLECARDS</div>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16, marginBottom: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {competitiveData.battlecards.map((b, i) => (
            <div
              key={i}
              onClick={() => setActiveBattle(i)}
              style={{
                padding: "12px 14px", borderRadius: 8, cursor: "pointer",
                background: activeBattle === i ? `${C.red}08` : "transparent",
                border: `1px solid ${activeBattle === i ? `${C.red}30` : C.border}`,
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 12, color: activeBattle === i ? C.text : C.textMuted, lineHeight: 1.4 }}>{b.trigger}</div>
            </div>
          ))}
        </div>
        <div style={{
          padding: 24, borderRadius: 12, background: C.card, border: `1px solid ${C.border}`,
        }}>
          <div style={{
            fontFamily: mono, fontSize: 10, color: C.red, letterSpacing: "0.1em", marginBottom: 6,
          }}>PROSPECT SAYS</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 16 }}>
            {competitiveData.battlecards[activeBattle].trigger}
          </div>
          <div style={{
            fontFamily: mono, fontSize: 10, color: C.primary, letterSpacing: "0.1em", marginBottom: 6,
          }}>YOU RESPOND</div>
          <div style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.7 }}>
            {competitiveData.battlecards[activeBattle].response}
          </div>
          <CopyButton text={competitiveData.battlecards[activeBattle].response} />
        </div>
      </div>

      {/* Landmine Questions */}
      <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: "0.15em", marginBottom: 10 }}>LANDMINE QUESTIONS — ASK EARLY IN DISCOVERY</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {competitiveData.landmines.map((q, i) => (
          <div key={i} style={{
            padding: "14px 18px", borderRadius: 8,
            background: C.card, border: `1px solid ${C.border}`,
            display: "flex", gap: 10, alignItems: "flex-start",
          }}>
            <span style={{ fontFamily: mono, color: C.accent, fontSize: 14, lineHeight: 1, flexShrink: 0 }}>?</span>
            <span style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.5 }}>{q}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════

const sections = [
  { id: "dashboard", label: "DASHBOARD", icon: "◆", view: DashboardView },
  { id: "voice", label: "BRAND VOICE", icon: "◈", view: BrandVoiceView },
  { id: "linkedin", label: "LINKEDIN", icon: "▣", view: LinkedInView },
  { id: "email", label: "EMAIL SEQ", icon: "▤", view: EmailView },
  { id: "campaign", label: "CAMPAIGN", icon: "▥", view: CampaignView },
  { id: "competitive", label: "COMPETITIVE", icon: "▦", view: CompetitiveView },
];

export default function SVRNAlphaMarketingHub() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showCursor, setShowCursor] = useState(true);
  const [hoverNav, setHoverNav] = useState(null);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(blink);
  }, []);

  const ActiveView = sections.find(s => s.id === activeSection)?.view || DashboardView;

  return (
    <div style={{ minHeight: "100vh", background: C.black, color: C.text, fontFamily: sans, display: "flex" }}>

      {/* ═══ LEFT SIDEBAR ═══ */}
      <aside style={{
        width: 220, flexShrink: 0, borderRight: `1px solid ${C.border}`,
        background: C.surface, display: "flex", flexDirection: "column",
        position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 100,
      }}>
        {/* Brand */}
        <div style={{
          padding: "20px 18px", borderBottom: `1px solid ${C.border}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: mono, fontWeight: 800, fontSize: 11, color: C.black,
            }}>SA</div>
            <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.12em", fontSize: 13 }}>
              <span style={{ color: C.primary }}>SVRN</span>
              <span style={{ color: C.textDim, margin: "0 1px", fontWeight: 400, fontSize: 10 }}>·</span>
              <span style={{ color: C.accent }}>ALPHA</span>
            </span>
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.1em" }}>
            MARKETING COMMAND CENTER
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: "12px 8px" }}>
          {sections.map((s, i) => (
            <div
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              onMouseEnter={() => setHoverNav(i)}
              onMouseLeave={() => setHoverNav(null)}
              style={{
                padding: "10px 12px", borderRadius: 8, cursor: "pointer",
                background: activeSection === s.id ? `${C.primary}10` : hoverNav === i ? `${C.primary}06` : "transparent",
                border: `1px solid ${activeSection === s.id ? `${C.primary}25` : "transparent"}`,
                marginBottom: 2, transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{
                fontFamily: mono, fontSize: 14,
                color: activeSection === s.id ? C.primary : C.textDim,
              }}>{s.icon}</span>
              <span style={{
                fontFamily: mono, fontSize: 11, letterSpacing: "0.08em",
                color: activeSection === s.id ? C.primary : hoverNav === i ? C.textSoft : C.textMuted,
                fontWeight: activeSection === s.id ? 700 : 400,
              }}>{s.label}</span>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          padding: "16px 18px", borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{ fontFamily: mono, fontSize: 9, color: C.textDim, letterSpacing: "0.08em" }}>
            <span style={{ color: C.primary }}>$</span> svrn-alpha status
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: C.primary, marginTop: 4 }}>
            ALL SYSTEMS OPERATIONAL
            <span style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}> ▋</span>
          </div>
          <div style={{ fontFamily: mono, fontSize: 8, color: C.textDim, marginTop: 8 }}>
            svrn-alpha.ai · v2.0.4
          </div>
        </div>
      </aside>

      {/* ═══ MAIN CONTENT ═══ */}
      <main style={{
        flex: 1, marginLeft: 220, padding: "32px 40px",
        minHeight: "100vh",
      }}>
        <ActiveView />
      </main>
    </div>
  );
}
