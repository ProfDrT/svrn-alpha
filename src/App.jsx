import { useState } from "react";

// ─── SVRN ALPHA ─── Sovereign Intelligence.

const THEME = {
  black: "#020408",
  surface: "#0A0F1C",
  card: "#111827",
  border: "#1E293B",
  borderHover: "#334155",
  primary: "#38BDF8", // Light Blue / Sky
  primaryDim: "#0284C7",
  accent: "#94A3B8", // Slate
  accentDim: "#64748B",
  text: "#F8FAFC",
  textSoft: "#CBD5E1",
  textMuted: "#64748B",
  textDim: "#334155",
};

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";

export default function SVRNAlphaColorways() {
  const [hoverPillar, setHoverPillar] = useState(null);
  const [hoverNav, setHoverNav] = useState(null);
  const [hoverUse, setHoverUse] = useState(null);

  const C = THEME;

  const Badge = ({ children, variant = "primary" }) => {
    const color = variant === "accent" ? C.accent : C.primary;
    return (
      <span style={{
        display: "inline-block", padding: "4px 10px", borderRadius: 4,
        border: `1px solid ${color}30`, background: `${color}10`,
        fontFamily: sans, fontSize: 11, fontWeight: 600, color, letterSpacing: "0.05em",
      }}>{children}</span>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: C.black, color: C.text, fontFamily: sans }}>

      {/* ═══ NAV ═══ */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 60px", borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 100,
        background: `${C.black}F0`, backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 12, color: C.black,
            letterSpacing: "0.08em", flexShrink: 0,
          }}>SA</div>
          <span style={{ fontFamily: sans, fontWeight: 700, letterSpacing: "-0.02em", fontSize: 18 }}>
            SVRN <span style={{ color: C.primary }}>ALPHA</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Vision", "Founder", "Framework", "Case Studies"].map((item, i) => (
            <span
              key={item}
              onMouseEnter={() => setHoverNav(i)}
              onMouseLeave={() => setHoverNav(null)}
              style={{
                fontSize: 14, fontWeight: 500,
                color: hoverNav === i ? C.text : C.textMuted,
                cursor: "pointer", transition: "color 0.2s",
              }}
            >{item}</span>
          ))}
          <div style={{
            padding: "10px 24px", borderRadius: 6,
            background: C.primary, color: C.black,
            fontSize: 13, fontWeight: 600,
            cursor: "pointer",
          }}>Request Briefing</div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{
        padding: "120px 60px 100px",
        textAlign: "center", position: "relative",
        background: `radial-gradient(circle at 50% 0%, ${C.surface} 0%, ${C.black} 70%)`
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 32 }}>
            <Badge>SOVEREIGN INTELLIGENCE</Badge>
            <Badge variant="accent">INVESTMENT BANKING</Badge>
          </div>

          <h1 style={{
            fontFamily: sans, fontSize: 64, fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.03em",
            margin: "0 auto 32px", color: C.text, maxWidth: 900
          }}>
            Stop Buying Tools.<br />
            <span style={{ color: C.textSoft }}>Start Building</span> <span style={{ color: C.primary }}>Moats.</span>
          </h1>

          <p style={{
            fontSize: 20, color: C.textMuted, maxWidth: 640,
            margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 400
          }}>
            Every bank has access to the same AI models. The edge isn't the technology —
            it's what you do with what only you know. SVRN ALPHA turns your
            proprietary knowledge into sovereign infrastructure.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <div style={{
              padding: "16px 40px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontSize: 15, fontWeight: 600,
              cursor: "pointer",
            }}>Schedule Briefing</div>
            <div style={{
              padding: "16px 40px", borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.card,
              color: C.text, fontSize: 15, fontWeight: 500, cursor: "pointer",
            }}>Read the Whitepaper</div>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER & LEADERSHIP (MOVED UP) ═══ */}
      <section style={{
        padding: "100px 60px",
        background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Badge variant="accent">LEADERSHIP</Badge>
            <h2 style={{
              fontSize: 42, fontWeight: 700, color: C.text,
              margin: "24px 0 24px", letterSpacing: "-0.02em", lineHeight: 1.1
            }}>
              Founded on Academic Rigor.<br />Built for the Real World.
            </h2>
            <p style={{ fontSize: 18, color: C.textMuted, lineHeight: 1.7, marginBottom: 32 }}>
              "We don't sell software. We engineer sovereignty. In an era where AI is a commodity,
              your only defensible asset is your proprietary data structure and process knowledge."
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: C.card, border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, fontWeight: 700, color: C.primary
              }}>TB</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Prof. Dr. Tobias Blask</div>
                <div style={{ fontSize: 14, color: C.textMuted }}>Founder & Chairman</div>
              </div>
            </div>
          </div>

          <div style={{
            padding: 40, borderRadius: 24,
            background: C.card, border: `1px solid ${C.border}`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.3)`
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: C.text, marginBottom: 16 }}>The Chairman's Thesis</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "AI is an organizational transformation, not an IT project.",
                "70% of value comes from process re-engineering, not prompts.",
                "Sovereignty is the new Alpha in a commoditized world."
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: C.textSoft, lineHeight: 1.5 }}>
                  <span style={{ color: C.primary, marginTop: 4 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY (MPCM) ═══ */}
      <section style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>
            Proven in Production
          </p>

          <div style={{
            background: `linear-gradient(180deg, ${C.card} 0%, ${C.surface} 100%)`,
            border: `1px solid ${C.border}`, borderRadius: 24, padding: "60px",
            display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, textAlign: "left"
          }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: "-0.02em", marginBottom: 8
              }}>
                MP Capital Markets
              </div>
              <div style={{ fontSize: 14, color: C.textMuted, marginBottom: 32 }}>Hamburg, Germany</div>

              <div style={{ fontSize: 48, fontWeight: 800, color: C.primary, lineHeight: 1 }}>+340<span style={{ fontSize: 24 }}>bps</span></div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.textSoft, marginTop: 8 }}>Alpha Generated vs. Benchmark</div>
            </div>

            <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: 60, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 16 }}>
                "SVRN ALPHA didn't just give us tools. They gave us a sovereign capability."
              </h3>
              <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 24 }}>
                Münchmeier Petersen Capital Markets (MPCM) has fully integrated the SVRN ALPHA framework.
                By shifting analysts from creators to curators, they have reallocated 70% of human capital
                to strategic, alpha-generating activities.
              </p>
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>100%</div>
                  <div style={{ fontSize: 13, color: C.textMuted }}>Data Sovereignty</div>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>EU AI Act</div>
                  <div style={{ fontSize: 13, color: C.textMuted }}>Fully Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section style={{
        padding: "100px 60px",
        background: C.surface, borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge>FRAMEWORK</Badge>
            <h2 style={{
              fontSize: 42, fontWeight: 700, color: C.text,
              margin: "24px 0 16px", letterSpacing: "-0.02em"
            }}>The Three-Pillar Model</h2>
            <p style={{ fontSize: 18, color: C.textMuted }}>
              Education. Processes. Technology. In that order.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              {
                num: "01", title: "Education", sub: "Spirit",
                desc: "Creator to Curator. We build AI fluency at every level, from the trading floor to the boardroom.",
                detail: "70% of success depends on people.",
              },
              {
                num: "02", title: "Processes", sub: "Workflow",
                desc: "The 70/30 Flip. We invert the workflow. Sovereign workflows that reallocate human capital to where it creates alpha.",
                detail: "Routine → Strategic Intelligence.",
              },
              {
                num: "03", title: "Technology", sub: "Architecture",
                desc: "Human-in-the-Loop. Sovereign architecture that keeps proprietary data inside your fortress.",
                detail: "Technology as enabler, not driver.",
              },
            ].map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverPillar(i)}
                onMouseLeave={() => setHoverPillar(null)}
                style={{
                  padding: 40, borderRadius: 16,
                  background: hoverPillar === i ? C.card : "transparent",
                  border: `1px solid ${hoverPillar === i ? C.borderHover : C.border}`,
                  transition: "all 0.3s", cursor: "default",
                }}
              >
                <span style={{
                  fontFamily: mono, fontSize: 48, fontWeight: 800,
                  color: C.primary, opacity: 0.2, lineHeight: 1, display: "block", marginBottom: 24,
                }}>{p.num}</span>
                <h3 style={{
                  fontSize: 22, fontWeight: 700,
                  color: C.text, margin: "0 0 8px",
                }}>{p.title}</h3>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: C.accent,
                  textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16,
                }}>{p.sub}</div>
                <p style={{
                  fontSize: 15, color: C.textSoft, lineHeight: 1.7, margin: "0 0 24px",
                }}>{p.desc}</p>
                <div style={{
                  padding: "10px 14px", borderRadius: 6,
                  background: `${C.primary}10`, border: `1px solid ${C.primary}20`,
                  fontSize: 12, fontWeight: 500, color: C.primary
                }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA FORTRESS ═══ */}
      <section style={{ padding: "100px 60px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge variant="accent">DATA FORTRESS</Badge>
            <h2 style={{
              fontSize: 42, fontWeight: 700, color: C.text,
              margin: "24px 0 16px", letterSpacing: "-0.02em"
            }}>Your Moat. Your Fortress.</h2>
            <p style={{ fontSize: 18, color: C.textMuted, maxWidth: 600, margin: "0 auto" }}>
              Tools are commodities. Knowledge is sovereign.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "EU AI Act Compliance", status: "VERIFIED" },
              { label: "MiFID II Regulatory Framework", status: "VERIFIED" },
              { label: "Market Abuse Regulation (MAR)", status: "VERIFIED" },
              { label: "GDPR Data Sovereignty", status: "VERIFIED" },
              { label: "On-Premise / Private Cloud Residency", status: "SOVEREIGN" },
              { label: "Human-in-the-Loop Governance", status: "MANDATORY" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "20px 24px", borderRadius: 12,
                background: C.card, border: `1px solid ${C.border}`,
              }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: C.textSoft }}>{item.label}</span>
                <span style={{
                  fontFamily: mono, fontSize: 12, fontWeight: 700,
                  color: item.status === "SOVEREIGN" ? C.accent : C.primary, letterSpacing: "0.05em",
                }}>{item.status}</span>
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
        background: `linear-gradient(180deg, ${C.black} 0%, ${C.surface} 100%)`
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: sans, fontSize: 48, fontWeight: 800,
            color: C.text, margin: "0 0 24px", letterSpacing: "-0.02em",
          }}>Ready to secure your alpha?</h2>
          <p style={{
            fontSize: 18, color: C.textMuted, maxWidth: 500,
            margin: "0 auto 48px", lineHeight: 1.6,
          }}>
            Schedule a confidential briefing with our team in Hamburg.
            Your data stays sovereign. Your edge stays yours.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <div style={{
              padding: "16px 48px", borderRadius: 8,
              background: C.primary, color: C.black,
              fontSize: 15, fontWeight: 700,
              cursor: "pointer",
            }}>Schedule Briefing</div>
            <div style={{
              padding: "16px 48px", borderRadius: 8,
              border: `1px solid ${C.border}`, color: C.textSoft,
              fontSize: 15, fontWeight: 500, cursor: "pointer",
            }}>Download Whitepaper</div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        padding: "40px 60px", borderTop: `1px solid ${C.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 13, color: C.textDim
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontWeight: 800, fontSize: 10, color: C.black,
          }}>SA</div>
          <span style={{ fontWeight: 700, letterSpacing: "-0.01em", color: C.textSoft }}>
            SVRN ALPHA
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