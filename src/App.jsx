import { useState } from "react";

// ─── SVRN ALPHA ─── Sovereign Intelligence.

// STRATEGY: Hybrid "Sovereign Terminal"
// Use the professional layout but with the original "Terminal" color palette
// and monospace accents to bring back the "Vibe Coding" / Engineering feel.

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
};

const mono = "JetBrains Mono, SF Mono, Fira Code, monospace";
const sans = "Inter, -apple-system, system-ui, sans-serif";

export default function SVRNAlpha() {
  const [hoverPillar, setHoverPillar] = useState(null);
  const [hoverNav, setHoverNav] = useState(null);

  const C = THEME;

  const Badge = ({ children, variant = "primary" }) => {
    const color = variant === "accent" ? C.accent : C.primary;
    return (
      <span style={{
        display: "inline-block", padding: "4px 10px", borderRadius: 4,
        border: `1px solid ${color}40`, background: `${color}10`,
        fontFamily: mono, fontSize: 11, fontWeight: 600, color, letterSpacing: "0.05em",
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
          {["Vision", "Founder", "Framework", "Case Studies"].map((item, i) => (
            <span
              key={item}
              onMouseEnter={() => setHoverNav(i)}
              onMouseLeave={() => setHoverNav(null)}
              style={{
                fontSize: 13, fontWeight: 500, fontFamily: mono,
                color: hoverNav === i ? C.primary : C.textMuted,
                cursor: "pointer", transition: "color 0.2s",
              }}
            >{item}</span>
          ))}
          <div style={{
            padding: "10px 24px", borderRadius: 4,
            border: `1px solid ${C.primary}`,
            background: `${C.primary}10`, color: C.primary,
            fontSize: 12, fontWeight: 600, fontFamily: mono,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = C.black; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${C.primary}10`; e.currentTarget.style.color = C.primary; }}
          >INITIALIZE_BRIEFING</div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{
        padding: "120px 60px 100px",
        textAlign: "center", position: "relative",
        background: `radial-gradient(circle at 50% 10%, ${C.surface} 0%, ${C.black} 70%)`
      }}>
        {/* Grid overlay for "tech" feel */}
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
            }}>{`> EXECUTE_BRIEFING`}</div>
            <div style={{
              padding: "16px 40px", borderRadius: 4,
              border: `1px solid ${C.border}`,
              background: C.card,
              color: C.textSoft, fontSize: 14, fontWeight: 500, fontFamily: mono, cursor: "pointer",
            }}>READ_WHITEPAPER</div>
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

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 4,
                background: C.card, border: `1px solid ${C.primaryDim}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 700, color: C.primary, fontFamily: mono
              }}>TB</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: mono }}>Prof. Dr. Tobias Blask</div>
                <div style={{ fontSize: 13, color: C.textMuted, fontFamily: mono }}>Founder & Chairman</div>
              </div>
            </div>
          </div>

          {/* Terminal Window: Success Log */}
          <div style={{
            borderRadius: 8,
            background: C.black, border: `1px solid ${C.border}`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)`,
            overflow: "hidden"
          }}>
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
              <div style={{ color: C.textMuted, marginBottom: 12 }}># EXECUTION REPORT: MÜNCHMEIER PETERSEN CAPITAL MARKETS</div>

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
                Alpha Generated: <span style={{ color: C.primary, fontWeight: 700 }}>+340bps</span> vs. Benchmark<br />
                Capacity Reallocated: <span style={{ color: C.text }}>70% Routine → Strategic</span>
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
                detail: "DEPENDENCY: PEOPLE (70%)",
              },
              {
                num: "02", title: "PROCESSES", sub: "Logic_Layer",
                desc: "The 70/30 Flip. Inverting the workflow. Sovereign workflows that reallocate human capital to alpha generation.",
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
            }}>{`> SCHEDULE_BRIEFING`}</div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
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
            SVRN_ALPHA <span style={{ opacity: 0.5 }}>v2.0.5</span>
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