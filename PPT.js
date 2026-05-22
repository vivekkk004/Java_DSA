const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// ─── Load college logo ───────────────────────────────────────────
const logoB64 = "image/jpeg;base64," + fs.readFileSync("/home/claude/college_logo.jpg").toString("base64");

// ─── THEME ───────────────────────────────────────────────────────
const C = {
  navy:      "1A2B5F",   // deep navy — primary
  steel:     "2E75B6",   // steel blue — headers/lines
  red:       "C0392B",   // threat red — accents
  orange:    "E67E22",   // orange — warning
  green:     "1E8449",   // safe green
  white:     "FFFFFF",
  offwhite:  "F4F6FA",
  light:     "EAF1FB",
  muted:     "7F8C8D",
  dark:      "1C1C1C",
  midgray:   "BDC3C7",
  cardBg:    "FFFFFF",
  lineBlue:  "2E75B6",
  lineGold:  "C9A227",
};

const FONT_TITLE  = "Calibri";
const FONT_BODY   = "Calibri";

// ─── PPTX Setup ──────────────────────────────────────────────────
let pres = new pptxgen();
pres.layout  = "LAYOUT_16x9";
pres.author  = "Vivek Muthe";
pres.title   = "FALANTIR — Hybrid Vision-Language Pipeline";
pres.subject = "Final Year B.E. AI & ML Project";

// ─── HELPERS ─────────────────────────────────────────────────────

function addFooter(slide, slideNum, total = 14) {
  // Two-line footer decoration
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.32, w: 10, h: 0.025,
    fill: { color: C.steel }, line: { color: C.steel }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.37, w: 10, h: 0.01,
    fill: { color: C.lineGold }, line: { color: C.lineGold }
  });
  // College logo
  slide.addImage({ data: logoB64, x: 0.12, y: 5.1, w: 0.42, h: 0.41 });
  // College name
  slide.addText("Parvatibai Genba Moze College of Engineering, Wagholi, Pune — Dept. of AI & ML", {
    x: 0.62, y: 5.14, w: 6.5, h: 0.26,
    fontSize: 7.5, color: C.navy, fontFace: FONT_BODY, bold: false,
    margin: 0
  });
  // Slide number
  slide.addText(`${slideNum} / ${total}`, {
    x: 8.5, y: 5.14, w: 1.3, h: 0.26,
    fontSize: 8, color: C.muted, fontFace: FONT_BODY, align: "right", margin: 0
  });
}

function sectionHeader(slide, text) {
  // Bold title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.68,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  slide.addText(text, {
    x: 0.35, y: 0, w: 9.3, h: 0.68,
    fontSize: 22, fontFace: FONT_TITLE, bold: true, color: C.white,
    valign: "middle", margin: 0
  });
}

function card(slide, x, y, w, h, bgColor, shadow) {
  const opts = {
    x, y, w, h,
    fill: { color: bgColor || C.white },
    line: { color: C.midgray, width: 0.5 },
  };
  if (shadow !== false) {
    opts.shadow = { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.08 };
  }
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { ...opts, rectRadius: 0.07 });
}

function accentCard(slide, x, y, w, h, accentColor) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: C.white },
    line: { color: C.midgray, width: 0.5 },
    shadow: { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.06, h,
    fill: { color: accentColor }, line: { color: accentColor }
  });
}

// ════════════════════════════════════════════════════════════════
// SLIDE 1 — TITLE
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  // Dark navy bg
  s.background = { color: C.navy };

  // Subtle grid pattern via shapes
  for (let i = 0; i <= 10; i += 0.5) {
    s.addShape(pres.shapes.LINE, {
      x: i, y: 0, w: 0, h: 5.625,
      line: { color: "FFFFFF", width: 0.3, transparency: 85 }
    });
  }
  for (let j = 0; j <= 5.625; j += 0.5) {
    s.addShape(pres.shapes.LINE, {
      x: 0, y: j, w: 10, h: 0,
      line: { color: "FFFFFF", width: 0.3, transparency: 85 }
    });
  }

  // Red accent top bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.07,
    fill: { color: C.red }, line: { color: C.red }
  });

  // Camera icon (SVG circle + rect)
  s.addShape(pres.shapes.OVAL, {
    x: 4.3, y: 0.35, w: 1.4, h: 1.4,
    fill: { color: "243360" }, line: { color: C.steel, width: 2 }
  });
  s.addShape(pres.shapes.OVAL, {
    x: 4.55, y: 0.6, w: 0.9, h: 0.9,
    fill: { color: C.steel }, line: { color: C.steel }
  });
  s.addShape(pres.shapes.OVAL, {
    x: 4.73, y: 0.78, w: 0.54, h: 0.54,
    fill: { color: C.navy }, line: { color: "7EC8E3" }
  });
  // Lens glint
  s.addShape(pres.shapes.OVAL, {
    x: 4.82, y: 0.82, w: 0.12, h: 0.12,
    fill: { color: C.white }, line: { color: C.white }
  });

  // Main title
  s.addText("FALANTIR", {
    x: 0.5, y: 1.95, w: 9, h: 0.95,
    fontSize: 52, fontFace: FONT_TITLE, bold: true, color: C.white,
    align: "center", charSpacing: 10, margin: 0
  });

  // Red underline bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 2.92, w: 3, h: 0.05,
    fill: { color: C.red }, line: { color: C.red }
  });

  s.addText("A Hybrid Vision–Language Pipeline for Real-Time Retail Threat Detection\nwith Knowledge-Distilled Edge Fallback", {
    x: 0.5, y: 3.02, w: 9, h: 0.7,
    fontSize: 13, fontFace: FONT_BODY, color: "A8C4E0", align: "center",
    italic: true, margin: 0
  });

  // Info box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 2.3, y: 3.85, w: 5.4, h: 1.1,
    fill: { color: "243360" }, line: { color: C.steel, width: 1 }
  });
  s.addText([
    { text: "Final Year Project — B.E. in Artificial Intelligence & Machine Learning\n", options: { color: C.white, fontSize: 11 } },
    { text: "Submitted by: ", options: { color: C.midgray, fontSize: 10 } },
    { text: "Vivek Muthe", options: { color: "F9D342", fontSize: 10, bold: true } },
    { text: "\nGuide: [Project Guide Name]  |  Academic Year 2025–2026", options: { color: C.midgray, fontSize: 9.5 } },
  ], { x: 2.35, y: 3.9, w: 5.3, h: 1.0, align: "center", valign: "middle", margin: 0 });

  // College logo + name at bottom
  s.addImage({ data: logoB64, x: 0.2, y: 5.05, w: 0.42, h: 0.41 });
  s.addText("Parvatibai Genba Moze College of Engineering, Wagholi, Pune", {
    x: 0.72, y: 5.08, w: 5.5, h: 0.28,
    fontSize: 8, color: "8AABCA", fontFace: FONT_BODY, margin: 0
  });

  // Dept badge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 5.0, w: 2.3, h: 0.55,
    fill: { color: "243360" }, line: { color: C.steel, width: 1 }
  });
  s.addText("Dept. of AI & ML", {
    x: 7.5, y: 5.0, w: 2.3, h: 0.55,
    fontSize: 9.5, color: C.white, align: "center", valign: "middle", fontFace: FONT_BODY, margin: 0
  });
}

// ════════════════════════════════════════════════════════════════
// SLIDE 2 — INTRODUCTION
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Introduction — What is Falantir?");

  // Key stat cards row
  const stats = [
    { val: "$112B", lbl: "Annual retail theft loss (US)", color: C.red },
    { val: "20–30\nmin", lbl: "Guard attention span on CCTV", color: C.orange },
    { val: "97.29%", lbl: "Falantir validation accuracy", color: C.green },
    { val: "~1–3¢", lbl: "Cost per camera per day", color: C.steel },
  ];
  stats.forEach((st, i) => {
    const x = 0.3 + i * 2.37;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 0.78, w: 2.2, h: 1.05,
      fill: { color: st.color }, line: { color: st.color },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.15 }
    });
    s.addText(st.val, {
      x: x + 0.05, y: 0.8, w: 2.1, h: 0.6,
      fontSize: 26, bold: true, color: C.white, align: "center", fontFace: FONT_TITLE, margin: 0
    });
    s.addText(st.lbl, {
      x: x + 0.05, y: 1.38, w: 2.1, h: 0.42,
      fontSize: 9, color: C.white, align: "center", fontFace: FONT_BODY, margin: 0
    });
  });

  // Two columns of content
  // Left col — Problem
  accentCard(s, 0.25, 2.02, 4.6, 2.82, C.red);
  s.addText("THE PROBLEM", {
    x: 0.38, y: 2.1, w: 4.3, h: 0.3,
    fontSize: 11, bold: true, color: C.red, fontFace: FONT_TITLE, margin: 0
  });
  s.addText([
    { text: "Traditional CCTV only records — it doesn't prevent theft\n", options: { bullet: true } },
    { text: "Human guards lose focus within 20–30 minutes\n", options: { bullet: true } },
    { text: "Cloud AI (Gemini/GPT-4V) is too expensive per frame\n", options: { bullet: true } },
    { text: "Big chains (Walmart) spend $200–$500/camera/month\n", options: { bullet: true } },
    { text: "Small retailers have no affordable AI solution\n", options: { bullet: true } },
  ], {
    x: 0.38, y: 2.44, w: 4.35, h: 2.3,
    fontSize: 11.5, color: C.dark, fontFace: FONT_BODY, lineSpacingMultiple: 1.2
  });

  // Right col — Falantir solution
  accentCard(s, 5.15, 2.02, 4.6, 2.82, C.green);
  s.addText("FALANTIR SOLUTION", {
    x: 5.28, y: 2.1, w: 4.3, h: 0.3,
    fontSize: 11, bold: true, color: C.green, fontFace: FONT_TITLE, margin: 0
  });
  s.addText([
    { text: "AI-powered system watching CCTV 24/7 in real time\n", options: { bullet: true } },
    { text: "Classifies every frame: Safe / Suspicious / Critical\n", options: { bullet: true } },
    { text: "Sends alerts via Dashboard, Email & SMS instantly\n", options: { bullet: true } },
    { text: "Smart cascade: use Gemini only when needed (saves cost)\n", options: { bullet: true } },
    { text: "Open & affordable — designed for small retailers\n", options: { bullet: true } },
  ], {
    x: 5.28, y: 2.44, w: 4.35, h: 2.3,
    fontSize: 11.5, color: C.dark, fontFace: FONT_BODY, lineSpacingMultiple: 1.2
  });

  // Key quote
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 4.92, w: 9.5, h: 0.35,
    fill: { color: "FEF9E7" }, line: { color: C.orange, width: 1 }
  });
  s.addText("\"Traditional CCTV is forensic — it helps after the theft. Falantir is preventive — it stops the theft.\"", {
    x: 0.35, y: 4.93, w: 9.3, h: 0.33,
    fontSize: 9.5, italic: true, color: C.navy, align: "center", fontFace: FONT_BODY, margin: 0
  });

  addFooter(s, 2);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 3 — LITERATURE SURVEY
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Literature Survey — What Work Was Done Before This?");

  // Table header
  const headers = [
    [
      { text: "Research / System", options: { bold: true, color: C.white, fontSize: 10.5, fill: { color: C.navy } } },
      { text: "What They Did", options: { bold: true, color: C.white, fontSize: 10.5, fill: { color: C.navy } } },
      { text: "Gap / Limitation", options: { bold: true, color: C.white, fontSize: 10.5, fill: { color: C.navy } } },
    ]
  ];

  const rows = [
    ["Sultani et al. (2018) — UCF-Crime", "Detected theft in pre-recorded videos", "Works offline only — no real-time detection"],
    ["Liu et al. (2018) — Future Frame", "Flags unusual motion automatically", "Cannot explain events; many false alarms"],
    ["MobileNetV3 (Howard, 2019)", "Fast image classification on mobile", "Single-frame only — misses motion patterns"],
    ["I3D (Carreira, 2017)", "Understands short video clips", "Too heavy for low-cost edge hardware"],
    ["Hinton et al. (2015) — KD", "Big model teaches a small model", "Only for training, not real-time routing"],
    ["GPT-4V / Gemini / Claude", "Understands scenes in natural language", "Very expensive — 2–3 sec per frame"],
    ["Veesion / Sensormatic (Commercial)", "Real-time AI detection for retail", "Closed source, $100s/camera/month"],
  ];

  const tableData = [
    ...headers,
    ...rows.map((row, i) => row.map((cell, ci) => ({
      text: cell,
      options: {
        fontSize: 9.5, color: ci === 2 ? C.red : C.dark,
        fill: { color: i % 2 === 0 ? "F4F6FA" : C.white },
        bold: ci === 0,
      }
    })))
  ];

  s.addTable(tableData, {
    x: 0.25, y: 0.82, w: 9.5, h: 4.0,
    border: { pt: 0.5, color: C.midgray },
    colW: [2.9, 3.1, 3.5],
    autoPage: false,
  });

  // Bottom note
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 4.88, w: 9.5, h: 0.35,
    fill: { color: "EBF5FB" }, line: { color: C.steel }
  });
  s.addText("KEY INSIGHT: No existing system combines low cost + real-time + smart explanation + offline fallback. Falantir fills this gap.", {
    x: 0.35, y: 4.89, w: 9.3, h: 0.33,
    fontSize: 9.5, bold: true, color: C.navy, align: "center", fontFace: FONT_BODY, margin: 0
  });
  addFooter(s, 3);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 4 — PROBLEM STATEMENT
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Problem Statement — What Problem Are We Solving?");

  // Core problem
  s.addText("The Core Problem", {
    x: 0.3, y: 0.82, w: 9.4, h: 0.3,
    fontSize: 13, bold: true, color: C.navy, fontFace: FONT_TITLE, margin: 0
  });

  const probs = [
    { icon: "📷", txt: "Store cameras record theft but no one is watching closely enough to stop it" },
    { icon: "💸", txt: "Cloud AI like Gemini can understand scenes but costs too much for every frame" },
    { icon: "📶", txt: "If internet goes down, the entire AI system stops working completely" },
  ];
  probs.forEach((p, i) => {
    accentCard(s, 0.25, 1.17 + i * 0.82, 9.5, 0.72, C.red);
    s.addText(p.icon + "  " + p.txt, {
      x: 0.42, y: 1.22 + i * 0.82, w: 9.1, h: 0.62,
      fontSize: 12.5, color: C.dark, fontFace: FONT_BODY, valign: "middle", margin: 0
    });
  });

  // 3 sub-problems
  s.addText("Formal Sub-Problems", {
    x: 0.3, y: 3.62, w: 9.4, h: 0.28,
    fontSize: 12, bold: true, color: C.navy, fontFace: FONT_TITLE, margin: 0
  });

  const subs = [
    { num: "01", label: "Classification", color: C.steel,
      txt: "Train a model to correctly label camera frames as Safe, Suspicious, or Critical — without too many false alerts." },
    { num: "02", label: "Cost Control", color: C.orange,
      txt: "Route frames smartly — use expensive cloud AI only when needed, saving at least 50% of Gemini API calls." },
    { num: "03", label: "System Engineering", color: C.green,
      txt: "Build a full web application (Flask + MongoDB + React) for store owners with login, cameras, alerts, and analytics." },
  ];
  subs.forEach((sub, i) => {
    const x = 0.25 + i * 3.22;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 3.96, w: 3.1, h: 1.08,
      fill: { color: sub.color }, line: { color: sub.color }
    });
    s.addText(`SP-${sub.num}`, {
      x: x + 0.08, y: 3.99, w: 1.0, h: 0.4,
      fontSize: 16, bold: true, color: C.white, fontFace: FONT_TITLE, margin: 0
    });
    s.addText(sub.label, {
      x: x + 1.0, y: 4.0, w: 2.0, h: 0.38,
      fontSize: 11, bold: true, color: C.white, fontFace: FONT_TITLE, valign: "middle", margin: 0
    });
    s.addText(sub.txt, {
      x: x + 0.08, y: 4.42, w: 2.95, h: 0.6,
      fontSize: 8.5, color: C.white, fontFace: FONT_BODY, margin: 0
    });
  });

  // Not in scope
  s.addText("Not in Scope: Face recognition  |  Item-level inventory  |  Cross-camera tracking", {
    x: 0.25, y: 5.09, w: 9.5, h: 0.22,
    fontSize: 8.5, color: C.muted, italic: true, align: "center", fontFace: FONT_BODY, margin: 0
  });

  addFooter(s, 4);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 5 — EXISTING vs PROPOSED
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Existing vs Proposed System");

  // Comparison table
  const tHeaders = [
    [
      { text: "Feature", options: { bold: true, color: C.white, fontSize: 10, fill: { color: C.navy } } },
      { text: "Existing System (CCTV)", options: { bold: true, color: C.white, fontSize: 10, fill: { color: "8B0000" } } },
      { text: "Falantir (Proposed)", options: { bold: true, color: C.white, fontSize: 10, fill: { color: "1A5E20" } } },
    ]
  ];
  const cmpRows = [
    ["Detection Speed", "After incident (too late)", "Real-time — 0.20 sec avg"],
    ["Alert Type", "None", "Dashboard + Email + SMS"],
    ["Daily Cost / Camera", "Staff salary (expensive)", "~1–3 US cents"],
    ["Internet Required", "No", "Only for Gemini (has fallback)"],
    ["Explanation", "None", "Full AI scene description"],
    ["Accuracy", "Human-dependent", "97.29% validated"],
    ["Scalability", "Linear staff cost", "1 to 50+ cameras, same backend"],
  ];
  const tableData = [
    ...tHeaders,
    ...cmpRows.map((row, i) => [
      { text: row[0], options: { bold: true, fontSize: 10, color: C.navy, fill: { color: i % 2 === 0 ? "F4F6FA" : C.white } } },
      { text: row[1], options: { fontSize: 10, color: "8B0000", fill: { color: i % 2 === 0 ? "FFF5F5" : "FFF0F0" } } },
      { text: row[2], options: { fontSize: 10, color: "1A5E20", fill: { color: i % 2 === 0 ? "F0FFF0" : "EAFAEA" } } },
    ])
  ];
  s.addTable(tableData, {
    x: 0.25, y: 0.82, w: 9.5, h: 3.5,
    border: { pt: 0.5, color: C.midgray },
    colW: [2.4, 3.3, 3.8],
  });

  // Flow diagrams — OLD vs NEW
  s.addText("OLD WAY", { x: 1.0, y: 4.42, w: 2.5, h: 0.28, fontSize: 10, bold: true, color: "8B0000", align: "center", margin: 0 });
  const oldSteps = ["Camera\nRecords", "Guard\nWatches", "Theft\nHappens", "Review\nFootage"];
  oldSteps.forEach((st, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.18 + i * 1.05, y: 4.72, w: 0.92, h: 0.5,
      fill: { color: "FFCCCC" }, line: { color: "CC0000" }, rectRadius: 0.05
    });
    s.addText(st, { x: 0.18 + i * 1.05, y: 4.72, w: 0.92, h: 0.5, fontSize: 7.5, align: "center", color: "8B0000", valign: "middle", margin: 0 });
    if (i < 3) s.addShape(pres.shapes.LINE, {
      x: 1.1 + i * 1.05, y: 4.97, w: 0.13, h: 0,
      line: { color: "CC0000", width: 1.5 }
    });
  });

  s.addText("FALANTIR WAY", { x: 5.45, y: 4.42, w: 4.3, h: 0.28, fontSize: 10, bold: true, color: C.green, align: "center", margin: 0 });
  const newSteps = ["Frame\nUploaded", "Local AI\n0.05s", "Gemini\n(if needed)", "Alert\nSent!"];
  const newColors = [C.steel, C.green, C.orange, C.red];
  newSteps.forEach((st, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.08 + i * 1.13, y: 4.72, w: 0.99, h: 0.5,
      fill: { color: "E8F5E9" }, line: { color: newColors[i] }, rectRadius: 0.05
    });
    s.addText(st, { x: 5.08 + i * 1.13, y: 4.72, w: 0.99, h: 0.5, fontSize: 7.5, align: "center", color: newColors[i], valign: "middle", margin: 0 });
    if (i < 3) s.addShape(pres.shapes.LINE, {
      x: 6.07 + i * 1.13, y: 4.97, w: 0.14, h: 0,
      line: { color: C.green, width: 1.5 }
    });
  });

  // vs divider
  s.addShape(pres.shapes.LINE, { x: 4.7, y: 4.38, w: 0, h: 0.9, line: { color: C.midgray, width: 1.5 } });
  s.addText("VS", { x: 4.58, y: 4.58, w: 0.35, h: 0.35, fontSize: 11, bold: true, color: C.muted, align: "center", margin: 0 });

  addFooter(s, 5);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 6 — OBJECTIVE
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Objectives — What Did We Set Out to Build?");

  const objs = [
    { n: "01", title: "Train Smart AI Model", color: C.steel,
      pts: ["MobileNetV3-Large on DCSASS dataset", ">90% accuracy on all 3 classes", "<100ms per frame inference"] },
    { n: "02", title: "Integrate Google Gemini", color: C.navy,
      pts: ["Understand complex CCTV scenes", "Structured: label + description + boxes", "Graceful fallback on API failure"] },
    { n: "03", title: "Smart Cascade (Save Cost)", color: C.orange,
      pts: ["Local AI first, Gemini only when needed", "Save ≥50% of Gemini API calls", "Never miss a critical event"] },
    { n: "04", title: "Full Web Application", color: C.green,
      pts: ["Flask + MongoDB + React stack", "Multi-user with role-based login", "Live dashboard with real-time updates"] },
    { n: "05", title: "Multi-Channel Alerts", color: "7D3C98",
      pts: ["WebSocket push (instant dashboard)", "Email via SMTP", "SMS via Twilio"] },
    { n: "06", title: "Evaluate Everything", color: C.red,
      pts: ["Real data — accuracy, speed, cost", "User testing with 6 real people", "Load testing up to 50 cameras"] },
  ];

  const cols = 3, rows_c = 2;
  objs.forEach((obj, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.25 + col * 3.22;
    const y = 0.82 + row * 2.08;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 3.1, h: 2.0,
      fill: { color: C.white }, line: { color: C.midgray, width: 0.5 },
      shadow: { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.07 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 3.1, h: 0.45,
      fill: { color: obj.color }, line: { color: obj.color }
    });
    s.addText(`${obj.n}  ${obj.title}`, {
      x: x + 0.1, y: y, w: 2.9, h: 0.45,
      fontSize: 10.5, bold: true, color: C.white, valign: "middle", fontFace: FONT_TITLE, margin: 0
    });
    s.addText(obj.pts.map(p => p).join("\n"), {
      x: x + 0.12, y: y + 0.5, w: 2.9, h: 1.4,
      fontSize: 10, color: C.dark, fontFace: FONT_BODY,
      bullet: false, valign: "top", margin: 0
    });
    // bullet dots
    obj.pts.forEach((pt, pi) => {
      s.addShape(pres.shapes.OVAL, {
        x: x + 0.12, y: y + 0.56 + pi * 0.44, w: 0.07, h: 0.07,
        fill: { color: obj.color }, line: { color: obj.color }
      });
      s.addText(pt, {
        x: x + 0.23, y: y + 0.5 + pi * 0.44, w: 2.78, h: 0.4,
        fontSize: 10, color: C.dark, fontFace: FONT_BODY, margin: 0
      });
    });
  });

  addFooter(s, 6);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 7 — PROPOSED SYSTEM ARCHITECTURE
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Proposed System Architecture & Methodology");

  // 3-Tier Architecture diagram (left side)
  s.addText("Three-Tier Architecture", {
    x: 0.25, y: 0.82, w: 4.5, h: 0.28,
    fontSize: 11, bold: true, color: C.navy, margin: 0
  });

  const tiers = [
    { name: "TIER 1 — FRONTEND", color: C.green, tech: "React 18 + Vite + Redux + Tailwind CSS", pts: "Dashboard • Camera Mgmt • Analytics • Alerts" },
    { name: "TIER 2 — BACKEND", color: C.steel, tech: "Python + Flask + JWT + Socket.IO", pts: "Auth • Detection Pipeline • Cascade • Notifications" },
    { name: "TIER 3 — DATABASE", color: C.navy, tech: "MongoDB (5 collections)", pts: "Users • Agents • Incidents • RL Feedback • Analytics" },
  ];
  tiers.forEach((t, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.25, y: 1.17 + i * 1.1, w: 4.55, h: 0.95,
      fill: { color: t.color }, line: { color: t.color }
    });
    s.addText(t.name, {
      x: 0.35, y: 1.19 + i * 1.1, w: 4.35, h: 0.3,
      fontSize: 10.5, bold: true, color: C.white, margin: 0
    });
    s.addText(t.tech, {
      x: 0.35, y: 1.49 + i * 1.1, w: 4.35, h: 0.26,
      fontSize: 9, color: C.white, italic: true, margin: 0
    });
    s.addText(t.pts, {
      x: 0.35, y: 1.72 + i * 1.1, w: 4.35, h: 0.18,
      fontSize: 8, color: "D5E8D4", margin: 0
    });
    if (i < 2) {
      s.addShape(pres.shapes.LINE, {
        x: 2.25, y: 2.12 + i * 1.1, w: 0, h: 0.15,
        line: { color: C.midgray, width: 1.5 }
      });
    }
  });
  // External services
  s.addText("External Services", { x: 0.25, y: 4.5, w: 4.55, h: 0.22, fontSize: 8.5, bold: true, color: C.muted, margin: 0 });
  const exts = [
    { name: "Google Gemini", color: "4285F4" },
    { name: "Gmail SMTP", color: "EA4335" },
    { name: "Twilio SMS", color: "F22F46" },
    { name: "DCSASS Dataset", color: C.orange },
  ];
  exts.forEach((e, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.25 + i * 1.13, y: 4.72, w: 1.05, h: 0.3,
      fill: { color: e.color }, line: { color: e.color }, rectRadius: 0.04
    });
    s.addText(e.name, {
      x: 0.25 + i * 1.13, y: 4.72, w: 1.05, h: 0.3,
      fontSize: 7.5, color: C.white, align: "center", valign: "middle", margin: 0
    });
  });

  // Right — AI Detection Pipeline
  s.addText("AI Detection Pipeline", {
    x: 5.05, y: 0.82, w: 4.7, h: 0.28,
    fontSize: 11, bold: true, color: C.navy, margin: 0
  });
  const pipeline = [
    { step: "1", label: "Camera uploads frame", color: C.steel, detail: "/api/detection/upload" },
    { step: "2", label: "OpenCV samples 12 frames", color: "5D6D7E", detail: "Evenly sampled from video clip" },
    { step: "3", label: "MobileNetV3 classifies frame", color: C.green, detail: "Safe / Suspicious / Critical (0.05s)" },
    { step: "4", label: "Smart Cascade check", color: C.orange, detail: "If Safe + conf ≥ 85% → skip Gemini" },
    { step: "5", label: "Google Gemini analysis", color: "4285F4", detail: "Label + description + bounding boxes" },
    { step: "6", label: "Save to MongoDB", color: C.navy, detail: "Incident stored with all metadata" },
    { step: "7", label: "Alert via WS + Email + SMS", color: C.red, detail: "Real-time multi-channel notification" },
  ];
  pipeline.forEach((p, i) => {
    const y = 1.17 + i * 0.54;
    s.addShape(pres.shapes.OVAL, {
      x: 5.05, y: y + 0.1, w: 0.3, h: 0.3,
      fill: { color: p.color }, line: { color: p.color }
    });
    s.addText(p.step, { x: 5.05, y: y + 0.1, w: 0.3, h: 0.3, fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(p.label, { x: 5.44, y: y + 0.08, w: 2.7, h: 0.22, fontSize: 10, bold: true, color: C.dark, margin: 0 });
    s.addText(p.detail, { x: 5.44, y: y + 0.28, w: 2.7, h: 0.2, fontSize: 8.5, color: C.muted, italic: true, margin: 0 });
    if (i < pipeline.length - 1) {
      s.addShape(pres.shapes.LINE, { x: 5.19, y: y + 0.42, w: 0, h: 0.14, line: { color: C.midgray, width: 1 } });
    }
  });

  addFooter(s, 7);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 8 — SYSTEM DESIGN
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "System Design — Data Flow & Database Design");

  // Data flow diagram (left half)
  s.addText("Data Flow Diagram", { x: 0.25, y: 0.82, w: 4.6, h: 0.28, fontSize: 11, bold: true, color: C.navy, margin: 0 });

  const dfdNodes = [
    { label: "Store Owner", x: 1.8, y: 1.25, color: C.steel },
    { label: "P1: Authenticate", x: 0.4, y: 2.05, color: C.navy },
    { label: "P2: Manage Cameras", x: 3.2, y: 2.05, color: C.navy },
    { label: "P3: Receive Frame", x: 0.4, y: 2.85, color: C.navy },
    { label: "P4: AI Detection", x: 3.2, y: 2.85, color: C.orange },
    { label: "P5: Save Incident", x: 1.8, y: 3.65, color: C.navy },
    { label: "P6: Send Alerts", x: 3.2, y: 4.4, color: C.red },
    { label: "MongoDB", x: 0.4, y: 4.4, color: "7D3C98" },
  ];
  dfdNodes.forEach(n => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: n.x, y: n.y, w: 1.5, h: 0.4,
      fill: { color: n.color }, line: { color: n.color }, rectRadius: 0.05
    });
    s.addText(n.label, { x: n.x, y: n.y, w: 1.5, h: 0.4, fontSize: 8, color: C.white, align: "center", valign: "middle", margin: 0 });
  });
  // Arrows (key ones)
  const arrows = [
    [2.55, 1.46, 2.55, 2.05], // Owner→P1
    [1.9, 2.46, 1.9, 2.85], // P1→P3
    [3.95, 2.46, 3.95, 2.85], // P2→P4
    [3.2, 3.06, 2.55, 3.65], // P4→P5
    [2.55, 4.06, 2.55, 4.4], // P5→P6+DB
  ];
  arrows.forEach(([x, y, x2, y2]) => {
    s.addShape(pres.shapes.LINE, { x, y, w: x2 - x, h: y2 - y, line: { color: C.midgray, width: 1 } });
  });

  // DB Design (right half)
  s.addText("Database Design (MongoDB — 5 Collections)", {
    x: 5.05, y: 0.82, w: 4.7, h: 0.28, fontSize: 11, bold: true, color: C.navy, margin: 0
  });

  const collections = [
    { name: "users", fields: "email, password (hashed), role (owner/manager/staff)", color: C.steel },
    { name: "agents", fields: "camera name, location, stream URL, status", color: C.green },
    { name: "incidents", fields: "label, description, screenshot, bounding_boxes, timestamp", color: C.red },
    { name: "rl_feedback", fields: "staff marking: True Positive / False Positive / Ambiguous", color: C.orange },
    { name: "analytics", fields: "daily/hourly incident counts for dashboard charts", color: "7D3C98" },
  ];
  collections.forEach((c, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: 1.17 + i * 0.78, w: 4.7, h: 0.7,
      fill: { color: C.white }, line: { color: C.midgray, width: 0.5 },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: 1.17 + i * 0.78, w: 1.5, h: 0.7,
      fill: { color: c.color }, line: { color: c.color }
    });
    s.addText(c.name, {
      x: 5.05, y: 1.17 + i * 0.78, w: 1.5, h: 0.7,
      fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle", fontFace: "Consolas", margin: 0
    });
    s.addText(c.fields, {
      x: 6.63, y: 1.22 + i * 0.78, w: 3.05, h: 0.62,
      fontSize: 9, color: C.dark, valign: "middle", fontFace: FONT_BODY, margin: 0
    });
  });

  // Key classes
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 5.08, w: 4.7, h: 0.22,
    fill: { color: "EAF1FB" }, line: { color: C.steel }
  });
  s.addText("Key Classes: VisionProvider | SmartCascade | IncidentService | NotifyWorker", {
    x: 5.1, y: 5.09, w: 4.6, h: 0.2,
    fontSize: 8, color: C.navy, align: "center", fontFace: "Consolas", margin: 0
  });

  addFooter(s, 8);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 9 — ALGORITHM & GUI
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Algorithm & GUI Implementation");

  // Left: Cascade Algorithm flowchart
  s.addText("Smart Cascade Algorithm", { x: 0.25, y: 0.82, w: 4.6, h: 0.28, fontSize: 11, bold: true, color: C.navy, margin: 0 });

  // Flowchart shapes
  const flowItems = [
    { type: "rect", label: "Frame Arrives", x: 0.9, y: 1.15, w: 2.7, h: 0.38, color: C.steel },
    { type: "rect", label: "MobileNetV3 → (label, confidence)", x: 0.9, y: 1.75, w: 2.7, h: 0.38, color: C.steel },
    { type: "diamond", label: "Safe +\nconf ≥ 85%?", x: 1.15, y: 2.35, w: 2.2, h: 0.65, color: C.orange },
    { type: "rect", label: "Return Local Result\n(Save Cost!)", x: 0.2, y: 3.25, w: 1.8, h: 0.52, color: C.green },
    { type: "rect", label: "Send to Gemini AI", x: 2.5, y: 3.25, w: 1.8, h: 0.52, color: "4285F4" },
    { type: "diamond", label: "Gemini\nSucceeds?", x: 2.6, y: 4.0, w: 1.6, h: 0.6, color: "4285F4" },
    { type: "rect", label: "Return Gemini\nResult", x: 2.5, y: 4.83, w: 1.8, h: 0.42, color: C.green },
    { type: "rect", label: "Fallback: Local\n+ 'degraded' flag", x: 0.2, y: 4.4, w: 1.8, h: 0.42, color: C.red },
  ];
  flowItems.forEach(fi => {
    if (fi.type === "rect") {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: fi.x, y: fi.y, w: fi.w, h: fi.h,
        fill: { color: fi.color }, line: { color: fi.color }, rectRadius: 0.05
      });
      s.addText(fi.label, { x: fi.x, y: fi.y, w: fi.w, h: fi.h, fontSize: 8.5, color: C.white, align: "center", valign: "middle", margin: 0 });
    } else if (fi.type === "diamond") {
      // Use RECTANGLE rotated... let's use an irregular polygon via multiple shapes
      // Actually let's just use a rectangle with a distinct color
      s.addShape(pres.shapes.RECTANGLE, {
        x: fi.x, y: fi.y, w: fi.w, h: fi.h,
        fill: { color: fi.color }, line: { color: fi.color }
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: fi.x, y: fi.y, w: fi.w, h: 0.04,
        fill: { color: "F39C12" }, line: { color: "F39C12" }
      });
      s.addText(fi.label, { x: fi.x, y: fi.y, w: fi.w, h: fi.h, fontSize: 8.5, color: C.white, align: "center", valign: "middle", margin: 0, bold: true });
    }
  });
  // Arrow lines
  const lines = [
    [2.25, 1.53, 2.25, 1.75], // Frame→MobileNet
    [2.25, 2.13, 2.25, 2.35], // MobileNet→Decision
    [1.15, 2.67, 1.1, 3.25],  // YES→Local
    [3.35, 2.67, 3.4, 3.25],  // NO→Gemini
    [3.4, 3.77, 3.4, 4.0],    // Gemini→Decision2
    [3.4, 4.6, 3.4, 4.83],    // YES→GeminiResult
    [2.6, 4.3, 2.0, 4.61],    // NO→Fallback
  ];
  lines.forEach(([x1, y1, x2, y2]) => {
    s.addShape(pres.shapes.LINE, { x: x1, y: y1, w: x2 - x1, h: y2 - y1, line: { color: C.midgray, width: 1.2 } });
  });
  s.addText("YES", { x: 0.6, y: 2.95, w: 0.5, h: 0.2, fontSize: 7.5, color: C.green, bold: true, margin: 0 });
  s.addText("NO", { x: 3.35, y: 2.95, w: 0.5, h: 0.2, fontSize: 7.5, color: C.red, bold: true, margin: 0 });

  // Right: GUI Screens
  s.addText("GUI Screens Implemented", { x: 5.05, y: 0.82, w: 4.7, h: 0.28, fontSize: 11, bold: true, color: C.navy, margin: 0 });

  const screens = [
    { n: "01", name: "Login / Register", desc: "JWT-based auth — Email + password. Roles: Owner, Manager, Staff", color: C.navy },
    { n: "02", name: "Dashboard Home", desc: "Left: Camera list | Centre: Live incident feed | Right: Analytics charts", color: C.steel },
    { n: "03", name: "Camera Management", desc: "Add/edit/delete cameras. Shows status: Active / Paused / Error", color: C.green },
    { n: "04", name: "Incident Detail", desc: "Bounding boxes + AI description. Mark: True/False Positive / Ambiguous", color: C.orange },
    { n: "05", name: "Analytics Page", desc: "Pie + Line + Bar charts: incident distribution, trends, top cameras", color: "7D3C98" },
  ];
  screens.forEach((sc, i) => {
    accentCard(s, 5.05, 1.17 + i * 0.76, 4.7, 0.68, sc.color);
    s.addText(`Screen ${sc.n}`, { x: 5.13, y: 1.2 + i * 0.76, w: 0.8, h: 0.25, fontSize: 8, bold: true, color: sc.color, margin: 0 });
    s.addText(sc.name, { x: 5.95, y: 1.2 + i * 0.76, w: 3.7, h: 0.25, fontSize: 10, bold: true, color: C.dark, margin: 0 });
    s.addText(sc.desc, { x: 5.13, y: 1.46 + i * 0.76, w: 4.55, h: 0.32, fontSize: 8.5, color: C.muted, margin: 0 });
  });

  addFooter(s, 9);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 10 — RESULTS & DISCUSSION
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Results & Discussion — What Did We Achieve?");

  // Training chart
  s.addText("Training Accuracy Progression", { x: 0.25, y: 0.82, w: 4.5, h: 0.26, fontSize: 10.5, bold: true, color: C.navy, margin: 0 });
  s.addChart(pres.charts.LINE, [
    { name: "Val Accuracy (%)", labels: ["Ep 1", "Ep 5", "Ep 10", "Ep 15", "Ep 20", "Ep 23*", "Ep 30"], values: [68.1, 83.5, 91.7, 94.8, 96.2, 97.29, 96.95] },
    { name: "Macro F1", labels: ["Ep 1", "Ep 5", "Ep 10", "Ep 15", "Ep 20", "Ep 23*", "Ep 30"], values: [66, 82, 90, 92, 93, 94, 93] },
  ], {
    x: 0.25, y: 1.1, w: 4.5, h: 2.7,
    chartColors: [C.steel, C.orange],
    chartArea: { fill: { color: C.white }, roundedCorners: true },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showLegend: true, legendPos: "b",
    lineSize: 2, lineSmooth: true,
  });

  // F1 scores table
  s.addText("Per-Class F1 Scores", { x: 0.25, y: 3.85, w: 4.5, h: 0.26, fontSize: 10, bold: true, color: C.navy, margin: 0 });
  s.addTable([
    [
      { text: "Class", options: { bold: true, color: C.white, fill: { color: C.navy }, fontSize: 10 } },
      { text: "F1 Score", options: { bold: true, color: C.white, fill: { color: C.navy }, fontSize: 10 } },
      { text: "Status", options: { bold: true, color: C.white, fill: { color: C.navy }, fontSize: 10 } },
    ],
    [{ text: "✅ Safe", options: { fontSize: 10 } }, { text: "0.97", options: { fontSize: 10, bold: true, color: C.green } }, { text: "Excellent", options: { fontSize: 9.5, color: C.green } }],
    [{ text: "⚠️ Suspicious", options: { fontSize: 10 } }, { text: "0.88", options: { fontSize: 10, bold: true, color: C.orange } }, { text: "Good (less data)", options: { fontSize: 9.5, color: C.orange } }],
    [{ text: "🚨 Critical", options: { fontSize: 10 } }, { text: "0.98", options: { fontSize: 10, bold: true, color: C.red } }, { text: "Excellent", options: { fontSize: 9.5, color: C.green } }],
    [{ text: "Macro Avg", options: { fontSize: 10, bold: true } }, { text: "0.94", options: { fontSize: 10, bold: true, color: C.navy } }, { text: "Target: >0.90 ✓", options: { fontSize: 9.5, color: C.green } }],
  ], { x: 0.25, y: 4.12, w: 4.5, h: 1.0, border: { pt: 0.5, color: C.midgray } });

  // Right side: Speed + Cost + User Testing
  s.addText("System Performance", { x: 5.05, y: 0.82, w: 4.7, h: 0.26, fontSize: 10.5, bold: true, color: C.navy, margin: 0 });

  // Speed cards
  const speedData = [
    { mode: "Local Only", speed: "0.05s", note: "No cloud — ultra fast", color: C.green },
    { mode: "Smart Cascade", speed: "0.20s", note: "73% skip Gemini", color: C.steel },
    { mode: "Gemini Only", speed: "2.6s", note: "Expensive benchmark", color: C.red },
  ];
  speedData.forEach((sp, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05 + i * 1.58, y: 1.1, w: 1.5, h: 0.9,
      fill: { color: sp.color }, line: { color: sp.color }
    });
    s.addText(sp.speed, { x: 5.05 + i * 1.58, y: 1.12, w: 1.5, h: 0.5, fontSize: 22, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText(sp.mode + "\n" + sp.note, { x: 5.05 + i * 1.58, y: 1.6, w: 1.5, h: 0.38, fontSize: 7.5, color: C.white, align: "center", margin: 0 });
  });

  // Cost bar chart
  s.addText("Cost Saving", { x: 5.05, y: 2.1, w: 4.7, h: 0.24, fontSize: 10, bold: true, color: C.navy, margin: 0 });
  s.addChart(pres.charts.BAR, [{
    name: "Cost (x)", labels: ["Gemini Only (4x)", "Smart Cascade (1x)"], values: [4, 1]
  }], {
    x: 5.05, y: 2.35, w: 4.7, h: 1.3,
    barDir: "bar",
    chartColors: [C.red, C.green],
    chartArea: { fill: { color: C.white } },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    showValue: true, dataLabelColor: C.dark,
    valGridLine: { style: "none" }, catGridLine: { style: "none" },
    showLegend: false,
  });

  // User Testing
  s.addText("User Testing (6 participants)", { x: 5.05, y: 3.72, w: 4.7, h: 0.24, fontSize: 10, bold: true, color: C.navy, margin: 0 });
  s.addChart(pres.charts.BAR, [{
    name: "Rating (/5)", labels: ["Dashboard Clarity", "Incident Cards", "Overall Usefulness", "Shop Owner Rating"],
    values: [4.2, 4.5, 4.0, 5.0]
  }], {
    x: 5.05, y: 3.97, w: 4.7, h: 1.15,
    barDir: "bar",
    chartColors: [C.steel],
    chartArea: { fill: { color: C.white } },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    showValue: true, dataLabelColor: C.dark,
    valGridLine: { style: "none" }, catGridLine: { style: "none" },
    showLegend: false,
  });

  addFooter(s, 10);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 11 — ADVANTAGES & DISADVANTAGES
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Advantages & Disadvantages");

  // Left — Advantages
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 0.82, w: 4.6, h: 0.32,
    fill: { color: C.green }, line: { color: C.green }
  });
  s.addText("✅  ADVANTAGES", { x: 0.3, y: 0.82, w: 4.5, h: 0.32, fontSize: 11, bold: true, color: C.white, valign: "middle", margin: 0 });

  const advs = [
    "Very fast — 0.05s local, 0.20s avg with cascade",
    "Saves money — 73% fewer cloud calls, ~1–3¢/camera/day",
    "Works offline — falls back to local model when Gemini is down",
    "Smart explanations — Gemini describes scene in plain English",
    "Multi-channel alerts — Dashboard + Email + SMS simultaneously",
    "High accuracy — 97.29% accuracy, 0.94 macro-F1 score",
    "Easy to extend — swap AI providers or add alert channels easily",
    "Open & affordable — perfect for small retailers",
    "Role-based access — Owner / Manager / Staff permissions",
    "Scalable — works for 1 camera or 50+ cameras",
  ];
  advs.forEach((adv, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 0.3, y: 1.21 + i * 0.37, w: 0.14, h: 0.14,
      fill: { color: C.green }, line: { color: C.green }
    });
    s.addText(adv, {
      x: 0.5, y: 1.17 + i * 0.37, w: 4.27, h: 0.35,
      fontSize: 10, color: C.dark, fontFace: FONT_BODY, valign: "middle", margin: 0
    });
  });

  // Right — Disadvantages
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 0.82, w: 4.6, h: 0.32,
    fill: { color: C.red }, line: { color: C.red }
  });
  s.addText("❌  LIMITATIONS", { x: 5.2, y: 0.82, w: 4.5, h: 0.32, fontSize: 11, bold: true, color: C.white, valign: "middle", margin: 0 });

  const disadvs = [
    "Frame-by-frame only — no temporal motion understanding",
    "Single cloud provider — no multi-cloud fallback if Gemini is down",
    "Single-server — no high-availability clustering or auto-backup",
    "Security gaps — no refresh tokens, no SSO (Google/Microsoft login)",
    "Suspicious class lower accuracy — F1=0.88 (fewer training samples)",
    "No on-device inference — frames must be uploaded via internet",
    "No face recognition — cannot identify who the thief is",
    "No cross-camera tracking — person tracked as separate incidents",
  ];
  disadvs.forEach((d, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 5.2, y: 1.21 + i * 0.46, w: 0.14, h: 0.14,
      fill: { color: C.red }, line: { color: C.red }
    });
    s.addText(d, {
      x: 5.4, y: 1.17 + i * 0.46, w: 4.27, h: 0.42,
      fontSize: 10, color: C.dark, fontFace: FONT_BODY, valign: "middle", margin: 0
    });
  });

  addFooter(s, 11);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 12 — APPLICATIONS
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Applications — Where Can Falantir Be Used?");

  const apps = [
    { icon: "🛒", title: "Small Retail Shops", desc: "Affordable AI theft detection without extra guards. Instant alerts on shoplifting.", color: C.green },
    { icon: "🏬", title: "Supermarkets & Malls", desc: "Manage dozens of cameras from one dashboard. Analytics on high-incident zones.", color: C.steel },
    { icon: "💊", title: "Pharmacies", desc: "Detect concealment of restricted medicines. Maintain incident logs for compliance.", color: "7D3C98" },
    { icon: "⛽", title: "Petrol Stations", desc: "After-hours monitoring. SMS alerts to owner's phone for critical events.", color: C.orange },
    { icon: "📦", title: "Warehouses", desc: "Monitor employee access areas. Detect unauthorized handling of inventory.", color: "5D6D7E" },
    { icon: "🏦", title: "Banks & ATM Areas", desc: "Suspicious loitering detection. Real-time alert before robbery attempt.", color: C.red },
  ];

  const cols = 3;
  apps.forEach((app, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.25 + col * 3.22;
    const y = 0.87 + row * 1.65;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 3.1, h: 1.55,
      fill: { color: C.white }, line: { color: C.midgray, width: 0.5 },
      shadow: { type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.07 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 3.1, h: 0.08,
      fill: { color: app.color }, line: { color: app.color }
    });
    s.addText(app.icon, { x: x + 0.1, y: y + 0.15, w: 0.55, h: 0.55, fontSize: 22, align: "center", margin: 0 });
    s.addText(app.title, { x: x + 0.7, y: y + 0.17, w: 2.3, h: 0.3, fontSize: 11, bold: true, color: app.color, fontFace: FONT_TITLE, margin: 0 });
    s.addText(app.desc, { x: x + 0.1, y: y + 0.72, w: 2.9, h: 0.75, fontSize: 9.5, color: C.dark, fontFace: FONT_BODY, margin: 0 });
  });

  // Future apps row
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 5.02, w: 9.5, h: 0.27,
    fill: { color: "EAF1FB" }, line: { color: C.steel }
  });
  s.addText("Future: 🏙️ Smart Cities   🎓 College Campuses   🏥 Hospitals   🏛️ Museums & Galleries", {
    x: 0.35, y: 5.03, w: 9.3, h: 0.25,
    fontSize: 9, color: C.navy, align: "center", fontFace: FONT_BODY, margin: 0
  });

  addFooter(s, 12);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 13 — CONCLUSION & FUTURE SCOPE
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "Conclusion & Future Scope");

  // Conclusion left
  s.addText("Conclusion", { x: 0.25, y: 0.82, w: 4.6, h: 0.28, fontSize: 11.5, bold: true, color: C.navy, margin: 0 });

  const conclusions = [
    { icon: "🎯", txt: "97.29% validation accuracy — all 6 objectives met or exceeded" },
    { icon: "💰", txt: "73% reduction in cloud AI calls — cost target of 50% exceeded" },
    { icon: "🔌", txt: "Works even when internet is down — degraded mode with local AI" },
    { icon: "🌐", txt: "Complete, usable web application — not just an academic model" },
    { icon: "🚀", txt: "Smart cascade proves affordable + reliable AI surveillance is possible" },
  ];
  conclusions.forEach((c, i) => {
    accentCard(s, 0.25, 1.15 + i * 0.64, 4.6, 0.57, C.steel);
    s.addText(c.icon + "  " + c.txt, {
      x: 0.42, y: 1.19 + i * 0.64, w: 4.35, h: 0.49,
      fontSize: 11, color: C.dark, valign: "middle", fontFace: FONT_BODY, margin: 0
    });
  });

  // Key takeaway
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 4.35, w: 4.6, h: 0.62,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("\"The future of retail security is not just better cameras — it's smarter AI that knows when to think locally and when to ask the cloud.\"", {
    x: 0.3, y: 4.37, w: 4.5, h: 0.58,
    fontSize: 9.5, italic: true, color: C.white, align: "center", valign: "middle", fontFace: FONT_BODY, margin: 0
  });

  // Future scope right
  s.addText("Future Scope", { x: 5.05, y: 0.82, w: 4.7, h: 0.28, fontSize: 11.5, bold: true, color: C.navy, margin: 0 });

  const future = [
    { timeline: "Short-Term\n(0–6 mo)", items: ["RLHF threshold tuning per store", "CSV export of incident history", "Refresh token + Google/Microsoft login"], color: C.green },
    { timeline: "Mid-Term\n(6–12 mo)", items: ["On-device edge — Raspberry Pi / Jetson Nano", "Multi-camera correlation to merge incidents", "Quantized int8 MobileNetV3 model"], color: C.orange },
    { timeline: "Long-Term\n(12+ mo)", items: ["Person re-identification across cameras", "WhatsApp / Slack / Teams webhook alerts", "Multi-tenant SaaS deployment"], color: C.red },
  ];
  future.forEach((ft, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: 1.15 + i * 1.28, w: 4.7, h: 1.2,
      fill: { color: C.white }, line: { color: ft.color, width: 1.5 },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: 1.15 + i * 1.28, w: 1.25, h: 1.2,
      fill: { color: ft.color }, line: { color: ft.color }
    });
    s.addText(ft.timeline, {
      x: 5.05, y: 1.15 + i * 1.28, w: 1.25, h: 1.2,
      fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle", fontFace: FONT_TITLE, margin: 0
    });
    ft.items.forEach((item, j) => {
      s.addShape(pres.shapes.OVAL, {
        x: 6.38, y: 1.27 + i * 1.28 + j * 0.35, w: 0.1, h: 0.1,
        fill: { color: ft.color }, line: { color: ft.color }
      });
      s.addText(item, {
        x: 6.52, y: 1.22 + i * 1.28 + j * 0.35, w: 3.15, h: 0.33,
        fontSize: 9.5, color: C.dark, fontFace: FONT_BODY, margin: 0
      });
    });
  });

  addFooter(s, 13);
}

// ════════════════════════════════════════════════════════════════
// SLIDE 14 — REFERENCES
// ════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.white };
  sectionHeader(s, "References");

  const refs = [
    "[1] Sultani, Chen, Shah — "Real-World Anomaly Detection in Surveillance Videos" — CVPR 2018",
    "[2] Liu, Luo, Lian, Gao — "Future Frame Prediction for Anomaly Detection" — CVPR 2018",
    "[3] Howard et al. — "Searching for MobileNetV3" — ICCV 2019",
    "[4] Carreira & Zisserman — "Quo Vadis, Action Recognition? I3D" — CVPR 2017",
    "[5] Hinton, Vinyals, Dean — "Distilling the Knowledge in a Neural Network" — NeurIPS 2014",
    "[6] Radford et al. — "CLIP: Learning Transferable Visual Models" — ICML 2021",
    "[7] OpenAI — "GPT-4 Technical Report" — 2023",
    "[8] Google DeepMind — "Gemini: A Family of Highly Capable Multimodal Models" — 2023",
    "[9] National Retail Federation — "2023 National Retail Security Survey" — NRF 2023",
    "[10] Paszke et al. — "PyTorch: An Imperative Deep Learning Library" — NeurIPS 2019",
    "[11] Bradski — "The OpenCV Library" — Dr. Dobb's Journal 2000",
    "[12] MongoDB Inc. — "MongoDB Manual" — v6.0+ — mongodb.com/docs",
    "[13] Pallets Projects — "Flask Documentation" — v3.x — flask.palletsprojects.com",
    "[14] Meta Platforms — "React Documentation" — v18 — react.dev",
    "[15] Twilio Inc. — "Twilio Programmable Messaging API" — twilio.com/docs",
    "[16] Jones, Bradley, Sakimura — "JSON Web Token (JWT)" — RFC 7519 — IETF 2015",
    "[17] OWASP Foundation — "Application Security Verification Standard (ASVS)" — v4.0.3 — 2022",
  ];

  // Two columns
  const col1 = refs.slice(0, 9);
  const col2 = refs.slice(9);

  col1.forEach((r, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.25, y: 0.87 + i * 0.48, w: 4.65, h: 0.44,
      fill: { color: i % 2 === 0 ? "F4F6FA" : C.white }, line: { color: C.midgray, width: 0.3 }
    });
    s.addText(r, {
      x: 0.32, y: 0.89 + i * 0.48, w: 4.52, h: 0.41,
      fontSize: 8.5, color: C.dark, fontFace: FONT_BODY, valign: "middle", margin: 0
    });
  });

  col2.forEach((r, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: 0.87 + i * 0.48, w: 4.65, h: 0.44,
      fill: { color: i % 2 === 0 ? "F4F6FA" : C.white }, line: { color: C.midgray, width: 0.3 }
    });
    s.addText(r, {
      x: 5.17, y: 0.89 + i * 0.48, w: 4.52, h: 0.41,
      fontSize: 8.5, color: C.dark, fontFace: FONT_BODY, valign: "middle", margin: 0
    });
  });

  // Thank you footer
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.85, w: 10, h: 0.42,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Thank You! — Project by Vivek Muthe | B.E. AI & ML | Parvatibai Genba Moze College of Engineering", {
    x: 0.3, y: 4.87, w: 9.4, h: 0.38,
    fontSize: 10.5, bold: true, color: C.white, align: "center", valign: "middle", fontFace: FONT_TITLE, margin: 0
  });

  addFooter(s, 14);
}

// ─── WRITE FILE ───────────────────────────────────────────────
pres.writeFile({ fileName: "/home/claude/FALANTIR_Presentation.pptx" })
  .then(() => console.log("✅ FALANTIR_Presentation.pptx created"))
  .catch(e => console.error("ERROR:", e));