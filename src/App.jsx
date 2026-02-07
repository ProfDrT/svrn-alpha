import { useState, useEffect } from "react";

// ─── SVRN ALPHA ─── One name. Indivisible. 6 Color Schemes.

const schemes = [
  {
    id: "terminal",
    name: "Terminal",
    desc: "Signal Green × Alpha Gold — Bloomberg-Terminal-Energie, Hacker-Precision",
    colors: {
      black: "#050505", surface: "#0A0A0B", card: "#111113",
      border: "#1A1A1E", borderHover: "#2A2A30",
      primary: "#10B981", primaryDim: "#065F46",
      accent: "#D4AF37", accentDim: "#92751E",
      text: "#F4F4F5", textSoft: "#A1A1AA", textMuted: "#52525B", textDim: "#3F3F46",
    },
    preview: ["#050505", "#10B981", "#D4AF37", "#111113", "#F4F4F5"],
  },
  {
    id: "navy",
    name: "Navy Institutional",
    desc: "Deep Navy × Platinum Silver — Bulge-Bracket-Gravitas, Goldman-DNA",
    colors: {
      black: "#070B14", surface: "#0C1220", card: "#111827",
      border: "#1E293B", borderHover: "#334155",
      primary: "#94A3B8", primaryDim: "#64748B",
      accent: "#E2E8F0", accentDim: "#CBD5E1",
      text: "#F1F5F9", textSoft: "#94A3B8", textMuted: "#475569", textDim: "#334155",
    },
    preview: ["#070B14", "#94A3B8", "#E2E8F0", "#111827", "#F1F5F9"],
  },
  {
    id: "electric",
    name: "Electric Blue",
    desc: "Midnight × Electric Blue — Modernes Fintech, Stripe-meets-Bloomberg",
    colors: {
      black: "#050510", surface: "#0A0A1A", card: "#10102A",
      border: "#1A1A3E", borderHover: "#2A2A5E",
      primary: "#3B82F6", primaryDim: "#1D4ED8",
      accent: "#60A5FA", accentDim: "#3B82F6",
      text: "#F0F4FF", textSoft: "#A5B4FC", textMuted: "#4F46E5", textDim: "#3730A3",
    },
    preview: ["#050510", "#3B82F6", "#60A5FA", "#10102A", "#F0F4FF"],
  },
  {
    id: "copper",
    name: "Dark Copper",
    desc: "Obsidian × Aged Copper — Old Money trifft New Tech, Patina-Luxus",
    colors: {
      black: "#0A0806", surface: "#0F0C0A", card: "#1A1510",
      border: "#2A2218", borderHover: "#3D3225",
      primary: "#C07840", primaryDim: "#8B5A2B",
      accent: "#E8A060", accentDim: "#C07840",
      text: "#F5EDE4", textSoft: "#C4AA8C", textMuted: "#7D6550", textDim: "#5C4A38",
    },
    preview: ["#0A0806", "#C07840", "#E8A060", "#1A1510", "#F5EDE4"],
  },
  {
    id: "arctic",
    name: "Arctic Cyan",
    desc: "Polar Night × Nordlicht-Cyan — Hamburg-Hafen, Nordische Klarheit",
    colors: {
      black: "#050A10", surface: "#0A1018", card: "#0F1820",
      border: "#162232", borderHover: "#1E3044",
      primary: "#06B6D4", primaryDim: "#0E7490",
      accent: "#22D3EE", accentDim: "#06B6D4",
      text: "#ECFEFF", textSoft: "#67E8F9", textMuted: "#155E75", textDim: "#164E63",
    },
    preview: ["#050A10", "#06B6D4", "#22D3EE", "#0F1820", "#ECFEFF"],
  },
  {
    id: "amber",
    name: "Obsidian Amber",
    desc: "Tiefschwarz × Bernstein-Gold — Trading-Floor-Urgency, Warnfarbe als Accent",
    colors: {
      black: "#050505", surface: "#0A0A08", card: "#141210",
      border: "#1F1C18", borderHover: "#2D2820",
      primary: "#F59E0B", primaryDim: "#B45309",
      accent: "#FBBF24", accentDim: "#F59E0B",
      text: "#FFFBEB", textSoft: "#FCD34D", textMuted: "#92400E", textDim: "#78350F",
    },
    preview: ["#050505", "#F59E0B", "#FBBF24", "#141210", "#FFFBEB"],
  },
];

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";

export default function SVRNAlphaColorways() {
  const [schemeId, setSchemeId] = useState("terminal");
  const [termLine, setTermLine] = useState(0);
  const [hoverPillar, setHoverPillar] = useState(null);
  const [hoverNav, setHoverNav] = useState(null);
  const [hoverUse, setHoverUse] = useState(null);
  const [showCursor, setShowCursor] = useState(true);
  const [schemePicker, setSchemePicker] = useState(false);

  const scheme = schemes.find(s => s.id === schemeId);
  const C = scheme.colors;

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTermLine(p => (p + 1) % 8), 1800);
    return () => clearInterval(t);
  }, []);

  const Cursor = () => (
    <span style={{ opacity: showCursor ? 1 : 0, color: C.primary, transition: "opacity 0.1s" }}>▋</span>
  );

  const Badge = ({ children, variant = "primary" }) => {
    const color = variant === "accent" ? C.accent : C.primary;
    return (
      <span style={{
        display: "inline-block", padding: "4px 10px", borderRadius: 4,
        border: `1px solid ${color}25`, background: `${color}08`,
        fontFamily: mono, fontSize: 10, color, letterSpacing: "0.1em",
      }}>{children}</span>
    );
  };

  const terminalLines = [
    { cmd: "svrn-alpha status", out: "Systems operational. All pillars active.", variant: "primary" },
    { cmd: "svrn-alpha measure --alpha", out: "Alpha: +340bps vs. benchmark (proprietary knowledge edge)", variant: "accent" },
    { cmd: "svrn-alpha moat --depth", out: "Data fortress integrity: 100%. EU AI Act compliant.", variant: "primary" },
    { cmd: "svrn-alpha transform --from=creator --to=curator", out: "Capacity reallocation: 70/30 → 30/70. Complete.", variant: "primary" },
    { cmd: "svrn-alpha pillars --check", out: "Education: ✓  Processes: ✓  Technology: ✓", variant: "primary" },
    { cmd: "svrn-alpha compliance --region=EU", out: "MiFID II ✓  MAR ✓  GDPR ✓  EU AI Act ✓", variant: "primary" },
    { cmd: "svrn-alpha deploy --human-in-loop", out: "Human-in-the-Loop: non-negotiable. Deployed.", variant: "accent" },
    { cmd: "svrn-alpha yield --proprietary", out: "ROI on sovereign knowledge: compounding. ▲", variant: "primary" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.black, color: C.text, fontFamily: sans, transition: "background 0.5s" }}>

      {/* ═══ COLOR SCHEME PICKER (floating) ═══ */}
      <div style={{
        position: "fixed", top: 16, right: 16, zIndex: 200,
      }}>
        <button
          onClick={() => setSchemePicker(p => !p)}
          style={{
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: "10px 16px",
            cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
            fontFamily: mono, fontSize: 11, color: C.textSoft,
            letterSpacing: "0.05em",
          }}
        >
          <div style={{ display: "flex", gap: 3 }}>
            {scheme.preview.slice(0, 3).map((c, i) => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: c, border: `1px solid ${C.border}` }} />
            ))}
          </div>
          {scheme.name} {schemePicker ? "▲" : "▼"}
        </button>

        {schemePicker && (
          <div style={{
            marginTop: 8, background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 12, padding: 12, width: 320,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          }}>
            <div style={{
              fontFamily: mono, fontSize: 9, color: C.textDim,
              letterSpacing: "0.15em", marginBottom: 10, padding: "0 4px",
            }}>FARBSCHEMA WÄHLEN</div>
            {schemes.map(s => (
              <div
                key={s.id}
                onClick={() => { setSchemeId(s.id); setSchemePicker(false); }}
                style={{
                  padding: "10px 12px", borderRadius: 8,
                  background: schemeId === s.id ? `${s.colors.primary}12` : "transparent",
                  border: schemeId === s.id ? `1px solid ${s.colors.primary}30` : "1px solid transparent",
                  cursor: "pointer", marginBottom: 4,
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {s.preview.map((c, i) => (
                      <div key={i} style={{
                        width: 16, height: 16, borderRadius: 4, background: c,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }} />
                    ))}
                  </div>
                  <span style={{
                    fontFamily: mono, fontSize: 12, fontWeight: 700,
                    color: schemeId === s.id ? s.colors.primary : "#A1A1AA",
                  }}>{s.name}</span>
                </div>
                <div style={{ fontSize: 10, color: "#71717A", paddingLeft: 2 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ═══ TICKER BAR ═══ */}
      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "5px 0", overflow: "hidden",
        fontFamily: mono, fontSize: 10, letterSpacing: "0.05em",
        display: "flex", justifyContent: "center", gap: 32,
        transition: "all 0.5s",
      }}>
        {[
          { l: "STATUS", v: "OPERATIONAL", c: C.primary },
          { l: "ALPHA", v: "+340 BPS", c: C.accent },
          { l: "MOAT", v: "SOVEREIGN", c: C.primary },
          { l: "COMPLIANCE", v: "EU ✓", c: C.primary },
          { l: "FRAMEWORK", v: "3-PILLAR", c: C.textMuted },
        ].map((t, i) => (
          <span key={i}>
            <span style={{ color: C.textDim }}>{t.l} </span>
            <span style={{ color: t.c, fontWeight: 600 }}>{t.v}</span>
          </span>
        ))}
      </div>

      {/* ═══ NAV ═══ */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 40px", borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 100,
        background: `${C.black}E8`, backdropFilter: "blur(12px)",
        transition: "all 0.5s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 12, color: C.black,
            letterSpacing: "0.08em", flexShrink: 0,
          }}>SA</div>
          <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.14em", fontSize: 16 }}>
            <span style={{ color: C.primary }}>SVRN</span>
            <span style={{ color: C.textDim, margin: "0 1px", fontWeight: 400 }}>·</span>
            <span style={{ color: C.accent }}>ALPHA</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Platform", "Framework", "Research", "About"].map((item, i) => (
            <span
              key={item}
              onMouseEnter={() => setHoverNav(i)}
              onMouseLeave={() => setHoverNav(null)}
              style={{
                fontFamily: mono, fontSize: 12, letterSpacing: "0.05em",
                color: hoverNav === i ? C.text : C.textMuted,
                cursor: "pointer", transition: "color 0.2s",
              }}
            >{item}</span>
          ))}
          <div style={{
            padding: "8px 20px", borderRadius: 6,
            background: C.primary, color: C.black,
            fontFamily: mono, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.05em", cursor: "pointer",
          }}>Request Access</div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{
        padding: "80px 40px 72px",
        maxWidth: 960, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`,
          backgroundSize: "40px 40px", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28 }}>
            <Badge>B2B AI ENABLEMENT</Badge>
            <Badge variant="accent">INVESTMENT BANKING</Badge>
          </div>

          {/* Brand name — the hero IS the name */}
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.16em" }}>
              <span style={{ fontSize: 48, color: C.primary }}>SVRN</span>
              <span style={{ fontSize: 48, color: C.textDim, margin: "0 2px", fontWeight: 300 }}>·</span>
              <span style={{ fontSize: 48, color: C.accent }}>ALPHA</span>
            </span>
          </div>

          <h1 style={{
            fontFamily: sans, fontSize: 44, fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-0.025em",
            margin: "0 0 20px", color: C.textSoft,
          }}>
            Stop Buying Tools.<br />
            Start Building Moats.
          </h1>

          <p style={{
            fontSize: 17, color: C.textMuted, maxWidth: 560,
            margin: "0 auto 36px", lineHeight: 1.7,
          }}>
            Every bank has access to the same AI. The edge isn't the technology —
            it's what you do with what only you know. SVRN ALPHA turns your
            proprietary knowledge into sovereign infrastructure that compounds.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <div style={{
              padding: "14px 32px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontFamily: mono, fontSize: 13, fontWeight: 700,
              letterSpacing: "0.05em", cursor: "pointer",
            }}>Schedule Briefing</div>
            <div style={{
              padding: "14px 32px", borderRadius: 8,
              border: `1px solid ${C.border}`,
              color: C.textSoft, fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>Read the Whitepaper</div>
          </div>
        </div>
      </section>

      {/* ═══ TERMINAL ═══ */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 40px 64px" }}>
        <div style={{
          background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 12, overflow: "hidden", transition: "all 0.5s",
        }}>
          <div style={{
            padding: "10px 16px", background: C.card,
            borderBottom: `1px solid ${C.border}`,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EAB308" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontFamily: mono, fontSize: 11, color: C.textDim, marginLeft: 8 }}>
              svrn-alpha — intelligence platform
            </span>
          </div>
          <div style={{ padding: "16px 20px", fontFamily: mono, fontSize: 12 }}>
            {terminalLines.map((line, i) => (
              <div key={i} style={{
                marginBottom: 8, opacity: i <= termLine ? 1 : 0.2, transition: "opacity 0.5s",
              }}>
                <div style={{ color: C.textMuted }}>
                  <span style={{ color: C.primary }}>$</span> {line.cmd}
                </div>
                <div style={{ color: line.variant === "accent" ? C.accent : C.primary, paddingLeft: 14 }}>
                  {line.out}
                </div>
              </div>
            ))}
            <div style={{ color: C.primary, marginTop: 4 }}>$ <Cursor /></div>
          </div>
        </div>
      </section>

      {/* ═══ THE NAME EXPLAINED ═══ */}
      <section style={{
        padding: "72px 40px",
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
        background: C.surface, transition: "all 0.5s",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Badge variant="accent">THE NAME</Badge>
            <h2 style={{
              fontFamily: sans, fontSize: 34, fontWeight: 800,
              letterSpacing: "-0.02em", margin: "20px 0 16px",
            }}>
              Why{" "}
              <span style={{ fontFamily: mono, color: C.primary, letterSpacing: "0.1em" }}>SVRN</span>
              {" · "}
              <span style={{ fontFamily: mono, color: C.accent, letterSpacing: "0.1em" }}>ALPHA</span>
              ?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{
              padding: 28, borderRadius: 12,
              border: `1px solid ${C.border}`, background: C.card, transition: "all 0.5s",
            }}>
              <div style={{
                fontFamily: mono, fontSize: 28, fontWeight: 800,
                color: C.primary, letterSpacing: "0.15em", marginBottom: 12,
              }}>SVRN</div>
              <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>
                Sovereign — compressed to its essence. Data sovereignty, self-determination.
                Your proprietary knowledge belongs to you — not to a vendor, not to a platform.
                In the age of AI, sovereignty is the new moat.
              </p>
              <div style={{
                marginTop: 16, padding: "8px 12px", borderRadius: 6,
                background: `${C.primary}08`, border: `1px solid ${C.primary}15`,
                fontFamily: mono, fontSize: 10, color: C.primary,
              }}>
                "Technology Is Interchangeable. Your Proprietary Knowledge Is Not."
              </div>
            </div>
            <div style={{
              padding: 28, borderRadius: 12,
              border: `1px solid ${C.border}`, background: C.card, transition: "all 0.5s",
            }}>
              <div style={{
                fontFamily: mono, fontSize: 28, fontWeight: 800,
                color: C.accent, letterSpacing: "0.15em", marginBottom: 12,
              }}>ALPHA</div>
              <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>
                In finance, alpha is the excess return above benchmark. The edge
                your competitors can't replicate. SVRN ALPHA: the returns you generate
                because your knowledge is sovereign — protected, structured, and compounding.
              </p>
              <div style={{
                marginTop: 16, padding: "8px 12px", borderRadius: 6,
                background: `${C.accent}08`, border: `1px solid ${C.accent}15`,
                fontFamily: mono, fontSize: 10, color: C.accent,
              }}>
                Alpha = f(proprietary knowledge × sovereign infrastructure)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE THESIS ═══ */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Badge variant="accent">CORE THESIS</Badge>
          <h2 style={{
            fontFamily: sans, fontSize: 36, fontWeight: 800,
            letterSpacing: "-0.02em", margin: "20px 0 16px",
          }}>
            This Is Not an IT Project.
          </h2>
          <p style={{
            fontSize: 20, color: C.accent, fontWeight: 500,
            margin: "0 0 16px", fontStyle: "italic",
          }}>
            It is an organizational transformation.
          </p>
          <p style={{
            fontSize: 15, color: C.textMuted, maxWidth: 560,
            margin: "0 auto", lineHeight: 1.7,
          }}>
            Leadership must own this. Not IT. Not consultants. The C-suite.
            SVRN ALPHA provides the framework, the methodology, and the sovereign
            infrastructure — but the transformation is yours.
          </p>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section style={{
        padding: "72px 40px",
        borderTop: `1px solid ${C.border}`, background: C.surface, transition: "all 0.5s",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge>FRAMEWORK</Badge>
            <h2 style={{
              fontFamily: sans, fontSize: 34, fontWeight: 800,
              letterSpacing: "-0.02em", margin: "20px 0 8px",
            }}>The Three-Pillar Model</h2>
            <p style={{ fontSize: 14, color: C.textMuted }}>
              Education. Processes. Technology. In that order. Always.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              {
                num: "01", title: "Education", sub: "Spirit",
                desc: "Creator to Curator. Your people don't need to code — they need to think differently. We build AI fluency at every level, from the trading floor to the boardroom.",
                detail: "70% of transformation success depends on people, not tools.",
              },
              {
                num: "02", title: "Processes", sub: "Workflow",
                desc: "The 70/30 Flip. Today your team spends 70% on routine, 30% on strategy. We invert that. Sovereign workflows that reallocate human capital to where it creates alpha.",
                detail: "Capacity reallocation: routine → strategic intelligence.",
              },
              {
                num: "03", title: "Technology", sub: "Architecture",
                desc: "Human-in-the-Loop. Non-negotiable. Your sovereign architecture keeps proprietary data inside your fortress. EU-compliant, auditable, with humans at every decision point.",
                detail: "Technology is the enabler, never the driver.",
              },
            ].map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverPillar(i)}
                onMouseLeave={() => setHoverPillar(null)}
                style={{
                  padding: 28, borderRadius: 12,
                  background: hoverPillar === i ? C.card : "transparent",
                  border: `1px solid ${hoverPillar === i ? C.borderHover : C.border}`,
                  transition: "all 0.3s", cursor: "default",
                }}
              >
                <span style={{
                  fontFamily: mono, fontSize: 36, fontWeight: 800,
                  color: C.primary, opacity: 0.3, lineHeight: 1, display: "block", marginBottom: 16,
                }}>{p.num}</span>
                <h3 style={{
                  fontFamily: mono, fontSize: 18, fontWeight: 700,
                  color: C.text, letterSpacing: "0.08em", margin: "0 0 4px",
                }}>{p.title.toUpperCase()}</h3>
                <div style={{
                  fontFamily: mono, fontSize: 11, color: C.accent,
                  letterSpacing: "0.1em", marginBottom: 14,
                }}>{p.sub}</div>
                <p style={{
                  fontSize: 13, color: C.textSoft, lineHeight: 1.65, margin: "0 0 14px",
                }}>{p.desc}</p>
                <div style={{
                  padding: "8px 12px", borderRadius: 6,
                  background: `${C.primary}08`, border: `1px solid ${C.primary}15`,
                  fontFamily: mono, fontSize: 10, color: C.primary, lineHeight: 1.4,
                }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA FORTRESS ═══ */}
      <section style={{ padding: "72px 40px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge variant="accent">DATA FORTRESS</Badge>
            <h2 style={{
              fontFamily: sans, fontSize: 34, fontWeight: 800,
              letterSpacing: "-0.02em", margin: "20px 0 8px",
            }}>Your Moat. Your Fortress. Your Alpha.</h2>
            <p style={{ fontSize: 14, color: C.textMuted, maxWidth: 480, margin: "0 auto" }}>
              Tools are commodities. Knowledge is sovereign.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "EU AI Act", status: "COMPLIANT", v: "primary" },
              { label: "MiFID II", status: "COMPLIANT", v: "primary" },
              { label: "MAR", status: "COMPLIANT", v: "primary" },
              { label: "GDPR", status: "COMPLIANT", v: "primary" },
              { label: "Data Residency", status: "EU SOVEREIGN", v: "accent" },
              { label: "Human-in-the-Loop", status: "NON-NEGOTIABLE", v: "accent" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 18px", borderRadius: 8,
                background: C.card, border: `1px solid ${C.border}`, transition: "all 0.5s",
              }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: C.textSoft }}>{item.label}</span>
                <span style={{
                  fontFamily: mono, fontSize: 10, fontWeight: 700,
                  color: item.v === "accent" ? C.accent : C.primary, letterSpacing: "0.1em",
                }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section style={{
        padding: "48px 40px",
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
        background: C.surface, transition: "all 0.5s",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-around" }}>
          {[
            { val: "70%", label: "Capacity Reallocation", sub: "Routine → Strategic", c: C.primary },
            { val: "3", label: "Pillar Framework", sub: "Education · Process · Tech", c: C.accent },
            { val: "100%", label: "EU Compliant", sub: "AI Act · MiFID II · GDPR", c: C.primary },
            { val: "∞", label: "Compounding Alpha", sub: "Knowledge Sovereignty", c: C.accent },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: mono, fontSize: 38, fontWeight: 800, color: stat.c, lineHeight: 1 }}>{stat.val}</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: C.textSoft, letterSpacing: "0.05em", marginTop: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Badge>USE CASES</Badge>
            <h2 style={{
              fontFamily: sans, fontSize: 34, fontWeight: 800,
              letterSpacing: "-0.02em", margin: "20px 0",
            }}>Built for Investment Banking</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { role: "Managing Directors", use: "Strategic AI roadmap. Board-ready transformation narrative." },
              { role: "Research Analysts", use: "Creator-to-Curator shift. 70% time back for alpha-generating research." },
              { role: "Compliance Officers", use: "EU AI Act readiness. Sovereign data architecture. Full audit trail." },
              { role: "Operations", use: "Workflow automation with Human-in-the-Loop governance." },
              { role: "Technology Leaders", use: "Architecture that's sovereign, scalable, and tool-agnostic." },
            ].map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverUse(i)}
                onMouseLeave={() => setHoverUse(null)}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 20px", borderRadius: 8,
                  border: `1px solid ${hoverUse === i ? C.borderHover : C.border}`,
                  background: hoverUse === i ? C.card : "transparent",
                  transition: "all 0.2s", cursor: "default",
                }}
              >
                <span style={{
                  fontFamily: mono, fontSize: 13, fontWeight: 700,
                  color: C.primary, letterSpacing: "0.03em", minWidth: 180,
                }}>{item.role}</span>
                <span style={{ fontSize: 13, color: C.textMuted, flex: 1, marginLeft: 20 }}>{item.use}</span>
                <span style={{ fontFamily: mono, color: C.textDim, marginLeft: 12 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER ═══ */}
      <section style={{
        padding: "72px 40px",
        borderTop: `1px solid ${C.border}`, background: C.surface, transition: "all 0.5s",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <Badge>LEADERSHIP</Badge>
          <h2 style={{
            fontFamily: sans, fontSize: 28, fontWeight: 700,
            margin: "20px 0 20px", letterSpacing: "-0.01em",
          }}>
            Founded on Academic Rigor.<br />Built for the Real World.
          </h2>
          <div style={{
            padding: "24px 28px", borderRadius: 12,
            background: C.card, border: `1px solid ${C.border}`, textAlign: "left",
            transition: "all 0.5s",
          }}>
            <div style={{ fontFamily: mono, fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 4 }}>
              Prof. Dr. Tobias Blask
            </div>
            <div style={{
              fontFamily: mono, fontSize: 11, color: C.accent,
              letterSpacing: "0.05em", marginBottom: 12,
            }}>Founder & Chairman</div>
            <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7, margin: 0 }}>
              Academic researcher turned practitioner. Built the framework from real
              transformation work inside financial institutions — not from theory.
              SVRN ALPHA exists because the industry needs a partner who understands
              both the science and the politics of AI transformation.
            </p>
          </div>
          <div style={{
            fontFamily: mono, fontSize: 10, color: C.textDim,
            marginTop: 16, letterSpacing: "0.05em",
          }}>
            Backed by <span style={{ color: C.textMuted }}>MP Capital Markets</span> · Hamburg, Germany
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{
        padding: "80px 40px",
        borderTop: `1px solid ${C.border}`,
        textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.02,
          backgroundImage: `radial-gradient(${C.primary} 1px, transparent 1px)`,
          backgroundSize: "24px 24px", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: mono, fontWeight: 800, letterSpacing: "0.16em" }}>
              <span style={{ fontSize: 32, color: C.primary }}>SVRN</span>
              <span style={{ fontSize: 32, color: C.textDim, margin: "0 2px", fontWeight: 300 }}>·</span>
              <span style={{ fontSize: 32, color: C.accent }}>ALPHA</span>
            </span>
          </div>
          <h2 style={{
            fontFamily: sans, fontSize: 30, fontWeight: 700,
            color: C.text, margin: "0 0 12px", letterSpacing: "-0.01em",
          }}>Ready to secure your alpha?</h2>
          <p style={{
            fontSize: 14, color: C.textMuted, maxWidth: 400,
            margin: "0 auto 32px", lineHeight: 1.6,
          }}>
            Schedule a confidential briefing with our team in Hamburg.
            Your data stays sovereign. Your edge stays yours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <div style={{
              padding: "14px 36px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontFamily: mono, fontSize: 13, fontWeight: 700,
              letterSpacing: "0.05em", cursor: "pointer",
            }}>Schedule Briefing</div>
            <div style={{
              padding: "14px 36px", borderRadius: 8,
              border: `1px solid ${C.border}`, color: C.textSoft,
              fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>Download Whitepaper</div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        padding: "32px 40px", borderTop: `1px solid ${C.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.5s",
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
        <div style={{ fontFamily: mono, fontSize: 10, color: C.textDim }}>svrn-alpha.ai</div>
      </footer>
    </div>
  );
}