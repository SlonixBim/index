// ═══════════════════════════════════════════════════════════════
// SLONIX CMS — Dribbble Award-Winning Course Preview v2
// 100% inline styles. Two-column layout like Udemy/Coursera.
// ═══════════════════════════════════════════════════════════════

var CoursePreview = createClass({
  render: function () {
    var entry = this.props.entry;

    var title = entry.getIn(["data", "title"]) || "Course Title";
    var description = entry.getIn(["data", "description"]) || "";
    var category = entry.getIn(["data", "category"]) || "Category";
    var duration = entry.getIn(["data", "duration"]) || "12 weeks";
    var level = entry.getIn(["data", "level"]) || "Beginner";
    var image = entry.getIn(["data", "image"]) || "";
    var instructor = entry.getIn(["data", "instructor"]) || "Instructor";
    var rating = entry.getIn(["data", "rating"]) || 4.8;
    var students = entry.getIn(["data", "students"]) || 0;
    var fullDescription = this.props.widgetFor("fullDescription");

    // Gradient mapping
    var gMap = {
      "from-blue-600 to-blue-500": "#2563eb, #3b82f6",
      "from-red-600 to-red-500": "#dc2626, #ef4444",
      "from-red-500 to-pink-500": "#ef4444, #ec4899",
      "from-purple-600 to-purple-500": "#9333ea, #a855f7",
      "from-green-600 to-green-500": "#16a34a, #22c55e",
      "from-orange-600 to-orange-500": "#ea580c, #f97316",
      "from-teal-600 to-teal-500": "#0d9488, #14b8a6",
      "from-indigo-600 to-indigo-500": "#4f46e5, #6366f1",
      "from-cyan-600 to-cyan-500": "#0891b2, #06b6d4",
      "from-emerald-600 to-emerald-500": "#059669, #10b981",
      "from-yellow-600 to-yellow-500": "#ca8a04, #eab308",
    };
    var gRaw = entry.getIn(["data", "gradient"]) || "from-blue-600 to-blue-500";
    var gColors = gMap[gRaw] || "#2563eb, #3b82f6";

    var ff = "'Inter', -apple-system, sans-serif";
    var hf = "'Space Grotesk', 'Inter', sans-serif";

    // ── Helper: create a chip ──
    function chip(icon, text, bgColor) {
      return h("span", {
        style: {
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "6px 14px", borderRadius: "8px", fontSize: "12px",
          fontWeight: 600, fontFamily: ff, background: bgColor || "rgba(255,255,255,0.12)",
          color: "#fff", border: "1px solid rgba(255,255,255,0.15)",
        },
      }, icon, " ", text);
    }

    // ── Helper: feature item ──
    function featureItem(text) {
      return h("div", {
        style: {
          display: "flex", alignItems: "center", gap: "10px",
          padding: "11px 0", fontSize: "13px", color: "#475569",
          fontFamily: ff, borderBottom: "1px solid #f1f5f9",
        },
      },
        h("span", {
          style: {
            width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #f14625, #ff6b35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: "11px", fontWeight: 900,
          },
        }, "✓"),
        text
      );
    }

    // ═══════════════════════════════════════
    //   RENDER
    // ═══════════════════════════════════════

    return h("div", { style: { margin: 0, padding: 0, fontFamily: ff, background: "#fff" } },

      // ══ HERO SECTION ══
      h("div", {
        style: {
          background: "linear-gradient(135deg, " + gColors + ")",
          position: "relative", overflow: "hidden", padding: "44px 36px 36px",
        },
      },
        // Dark overlay
        h("div", {
          style: {
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%)",
            zIndex: 1,
          },
        }),
        // BG image
        image ? h("img", {
          src: image,
          style: {
            position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.2, zIndex: 0,
          },
        }) : null,
        // Content
        h("div", { style: { position: "relative", zIndex: 2, maxWidth: "680px" } },
          // Category
          h("span", {
            style: {
              display: "inline-block", padding: "5px 14px", borderRadius: "100px",
              background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)",
              fontSize: "11px", fontWeight: 700, color: "#fff", textTransform: "uppercase",
              letterSpacing: "0.06em", marginBottom: "16px",
              border: "1px solid rgba(255,255,255,0.25)", fontFamily: ff,
            },
          }, category),
          // Title
          h("h1", {
            style: {
              fontFamily: hf, fontSize: "32px", fontWeight: 900, color: "#fff",
              lineHeight: 1.2, margin: "0 0 12px 0", letterSpacing: "-0.02em",
            },
          }, title),
          // Description
          description ? h("p", {
            style: {
              fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.88)",
              margin: "0 0 20px 0", fontFamily: ff,
            },
          }, description) : null,
          // Meta chips
          h("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" } },
            chip("⭐", rating + " rating", "rgba(251,191,36,0.2)"),
            chip("👥", (students || 0).toLocaleString() + " students"),
            chip("⏱", duration),
            chip("📈", level)
          ),
          // Instructor
          h("div", {
            style: { fontSize: "13px", color: "rgba(255,255,255,0.7)", fontFamily: ff },
          },
            "Created by ",
            h("span", { style: { color: "#fbbf24", fontWeight: 700 } }, instructor)
          )
        )
      ),

      // ══ CONTENT AREA (Two-column on desktop) ══
      h("div", {
        style: {
          display: "flex", gap: "32px", padding: "32px 36px 40px",
          maxWidth: "100%", flexWrap: "wrap",
        },
      },
        // LEFT: Course content
        h("div", { style: { flex: "1 1 58%", minWidth: "280px" } },
          h("h2", {
            style: {
              fontFamily: hf, fontSize: "20px", fontWeight: 800, color: "#0f172a",
              margin: "0 0 16px 0", letterSpacing: "-0.01em",
            },
          }, "About this Course"),
          h("div", {
            style: {
              fontFamily: ff, fontSize: "14px", lineHeight: 1.8, color: "#475569",
            },
          }, fullDescription)
        ),

        // RIGHT: Enrollment card
        h("div", { style: { flex: "0 0 280px", minWidth: "260px" } },
          h("div", {
            style: {
              background: "#fff", borderRadius: "16px", overflow: "hidden",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            },
          },
            // Card image
            image ? h("img", {
              src: image,
              style: { width: "100%", height: "170px", objectFit: "cover", display: "block" },
            }) : null,
            // Card body
            h("div", { style: { padding: "20px" } },
              // Enroll button
              h("div", {
                style: {
                  display: "block", width: "100%", padding: "14px",
                  background: "linear-gradient(135deg, #f14625, #ff6b35)",
                  color: "#fff", border: "none", borderRadius: "12px",
                  fontFamily: hf, fontSize: "15px", fontWeight: 800,
                  textAlign: "center", letterSpacing: "-0.01em",
                  boxShadow: "0 6px 20px rgba(241, 70, 37, 0.3)",
                },
              }, "Enroll This Course"),
              // Features
              h("div", { style: { marginTop: "16px" } },
                featureItem("Hands-on projects & assignments"),
                featureItem("Certificate of completion"),
                featureItem("Lifetime access to materials"),
                featureItem("Expert instructor support")
              )
            )
          )
        )
      )
    );
  },
});

CMS.registerPreviewTemplate("courses", CoursePreview);
