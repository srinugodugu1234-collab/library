// // import { useState, useEffect, useRef } from "react";

// // // ─── PALETTE: Deep Espresso + Warm Amber + Sage ──────────────────────────────
// // const C = {
// //   bg:         "#0e0c0a",
// //   surface:    "#1a1713",
// //   elevated:   "#232019",
// //   border:     "#2e2a22",
// //   borderHi:   "#3d3828",
// //   amber:      "#d4843a",
// //   amberHi:    "#e8a04e",
// //   amberDim:   "#a86428",
// //   amberGlow:  "rgba(212,132,58,0.12)",
// //   sage:       "#4a7c6a",
// //   sageLt:     "#5e9e89",
// //   sageDim:    "#2d5048",
// //   sageGlow:   "rgba(74,124,106,0.12)",
// //   rose:       "#c4524a",
// //   roseLt:     "#d96860",
// //   roseGlow:   "rgba(196,82,74,0.12)",
// //   indigo:     "#5a6ec4",
// //   indigoLt:   "#7082d6",
// //   indigoGlow: "rgba(90,110,196,0.12)",
// //   textPri:    "#f0ead8",
// //   textSec:    "#9a8f7a",
// //   textMut:    "#5a5248",
// // };

// // const CATEGORIES = {
// //   private: {
// //     label: "Private Sector",
// //     icon: "🏢",
// //     color: C.amber,
// //     bg: C.amberGlow,
// //     border: C.amberDim,
// //     sub: ["IT", "Banking", "Healthcare", "Marketing", "Finance", "Consulting"],
// //   },
// //   government: {
// //     label: "Government Exams",
// //     icon: "🏛️",
// //     color: C.sage,
// //     bg: C.sageGlow,
// //     border: C.sageDim,
// //     sub: ["UPSC", "SSC", "Banking (Govt)", "Railways", "Defence", "State PSC"],
// //   },
// //   higher: {
// //     label: "Higher Education",
// //     icon: "🎓",
// //     color: C.indigo,
// //     bg: C.indigoGlow,
// //     border: C.indigo + "44",
// //     sub: ["GATE", "CAT/MBA", "GRE/GMAT", "Study Abroad", "Research", "PhD"],
// //   },
// // };

// // const INIT_STUDENTS = [
// //   { id: "s1", name: "Arjun Sharma", email: "arjun@email.com", joined: "2024-01-15", completed: 3, avatar: "AS" },
// //   { id: "s2", name: "Priya Reddy",  email: "priya@email.com",  joined: "2024-02-20", completed: 1, avatar: "PR" },
// //   { id: "s3", name: "Rahul Gupta",  email: "rahul@email.com",  joined: "2024-03-10", completed: 0, avatar: "RG" },
// // ];

// // const ALL_MATERIALS = [
// //   { id: 1,  title: "Java Programming",       category: "private",    sub: "IT",            type: "free",    thumb: "☕", topics: 12, progress: 70, pages: 340, downloads: 1240, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 2,  title: "Banking Fundamentals",   category: "private",    sub: "Banking",       type: "free",    thumb: "🏦", topics: 8,  progress: 50, pages: 210, downloads: 980,  bookmarked: true,  studentId: null, uploadType: null, fileLink: "" },
// //   { id: 3,  title: "Data Structures & Algo", category: "private",    sub: "IT",            type: "premium", thumb: "🌲", topics: 15, progress: 30, pages: 480, downloads: 2100, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/dsa.pdf" },
// //   { id: 4,  title: "UPSC History Notes",     category: "government", sub: "UPSC",          type: "free",    thumb: "📜", topics: 20, progress: 60, pages: 600, downloads: 3400, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 5,  title: "SSC Mathematics",        category: "government", sub: "SSC",           type: "free",    thumb: "📐", topics: 10, progress: 0,  pages: 280, downloads: 1800, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 6,  title: "IBPS PO Guide",          category: "government", sub: "Banking (Govt)",type: "premium", thumb: "🏧", topics: 14, progress: 0,  pages: 390, downloads: 2200, bookmarked: true,  studentId: null, uploadType: "link", fileLink: "https://ibps.in/study-material" },
// //   { id: 7,  title: "CAT Verbal Ability",     category: "higher",     sub: "CAT/MBA",       type: "premium", thumb: "📝", topics: 9,  progress: 20, pages: 240, downloads: 760,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 8,  title: "GRE Vocabulary",         category: "higher",     sub: "GRE/GMAT",      type: "free",    thumb: "🔤", topics: 6,  progress: 40, pages: 180, downloads: 540,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 9,  title: "Agricultural Science",   category: "government", sub: "State PSC",     type: "free",    thumb: "🌾", topics: 11, progress: 0,  pages: 320, downloads: 890,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 10, title: "Python for Beginners",   category: "private",    sub: "IT",            type: "free",    thumb: "🐍", topics: 10, progress: 85, pages: 290, downloads: 3100, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 11, title: "Railway RRB Guide",      category: "government", sub: "Railways",      type: "premium", thumb: "🚂", topics: 13, progress: 0,  pages: 410, downloads: 1650, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/rrb.pdf" },
// //   { id: 12, title: "MBA Case Studies",       category: "higher",     sub: "CAT/MBA",       type: "premium", thumb: "💼", topics: 8,  progress: 0,  pages: 200, downloads: 430,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 13, title: "Digital Marketing",      category: "private",    sub: "Marketing",     type: "free",    thumb: "📊", topics: 7,  progress: 55, pages: 190, downloads: 670,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 14, title: "Research Methodology",   category: "higher",     sub: "Research",      type: "free",    thumb: "🔬", topics: 5,  progress: 10, pages: 160, downloads: 310,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// //   { id: 15, title: "Defence NDA Prep",       category: "government", sub: "Defence",       type: "premium", thumb: "⚔️", topics: 16, progress: 0,  pages: 500, downloads: 1200, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// // ];

// // const JAVA_TOPICS = [
// //   { id: 1,  title: "Introduction to Java",        done: true,  pages: 28 },
// //   { id: 2,  title: "OOP Concepts",                done: true,  pages: 45 },
// //   { id: 3,  title: "Classes & Objects",           done: true,  pages: 35 },
// //   { id: 4,  title: "Inheritance & Polymorphism",  done: false, pages: 52 },
// //   { id: 5,  title: "Exception Handling",          done: false, pages: 30 },
// //   { id: 6,  title: "Collections Framework",       done: false, pages: 60 },
// //   { id: 7,  title: "Multithreading",              done: false, pages: 40 },
// //   { id: 8,  title: "File I/O",                    done: false, pages: 25 },
// //   { id: 9,  title: "JDBC & Databases",            done: false, pages: 38 },
// //   { id: 10, title: "Spring Boot Basics",          done: false, pages: 55 },
// //   { id: 11, title: "REST APIs with Java",         done: false, pages: 48 },
// //   { id: 12, title: "Java 17+ Features",           done: false, pages: 32 },
// // ];

// // // ─── SHARED STATE CONTEXT (global via closure) ───────────────────────────────
// // let _globalRequests = [
// //   { id: "r1", studentId: "s1", studentName: "Arjun Sharma", title: "AI & Machine Learning 2025", category: "private", sub: "IT", reason: "Need latest trending AI material for interviews", status: "pending", date: "2024-12-01" },
// //   { id: "r2", studentId: "s2", studentName: "Priya Reddy",  title: "UPSC Ethics GS4 Deep Dive", category: "government", sub: "UPSC", reason: "Comprehensive ethics module not available anywhere", status: "pending", date: "2024-12-05" },
// // ];
// // let _globalMaterials = ALL_MATERIALS.map(m => ({ ...m }));
// // let _globalStudents  = INIT_STUDENTS.map(s => ({ ...s }));

// // // ─── TOAST SYSTEM ─────────────────────────────────────────────────────────────
// // function useToast() {
// //   const [toasts, setToasts] = useState([]);
// //   const add = (msg, type = "success") => {
// //     const id = Date.now();
// //     setToasts(p => [...p, { id, msg, type }]);
// //     setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3200);
// //   };
// //   return { toasts, add };
// // }

// // function ToastContainer({ toasts }) {
// //   const icons = { success: "✅", warn: "⚠️", error: "❌", info: "ℹ️" };
// //   const colors = {
// //     success: { bg: C.sageDim,   border: C.sage,   text: "#a8d8c8" },
// //     warn:    { bg: "#3d2a0a",   border: C.amber,  text: "#e8c880" },
// //     error:   { bg: "#3a1010",   border: C.rose,   text: "#f4a0a0" },
// //     info:    { bg: "#1a1d3a",   border: C.indigo, text: "#a0a8f4" },
// //   };
// //   return (
// //     <div style={{ position: "fixed", top: 20, right: 20, zIndex: 99999, display: "flex", flexDirection: "column", gap: 10 }}>
// //       {toasts.map(t => {
// //         const s = colors[t.type] || colors.info;
// //         return (
// //           <div key={t.id} style={{
// //             background: s.bg, border: `1px solid ${s.border}`, color: s.text,
// //             borderRadius: 12, padding: "12px 18px", fontSize: 13, fontWeight: 600,
// //             maxWidth: 340, boxShadow: `0 8px 32px rgba(0,0,0,0.5)`,
// //             animation: "toastIn 0.35s cubic-bezier(.4,0,.2,1)",
// //             display: "flex", alignItems: "center", gap: 10,
// //           }}>
// //             <span style={{ fontSize: 16 }}>{icons[t.type]}</span>
// //             {t.msg}
// //           </div>
// //         );
// //       })}
// //       <style>{`@keyframes toastIn { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }`}</style>
// //     </div>
// //   );
// // }

// // // ─── PROGRESS RING ─────────────────────────────────────────────────────────────
// // function Ring({ pct, size = 48, stroke = 4, color = C.amber }) {
// //   const r = (size - stroke * 2) / 2;
// //   const circ = 2 * Math.PI * r;
// //   return (
// //     <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
// //       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke} />
// //       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
// //         strokeDasharray={circ} strokeDashoffset={circ - (pct/100)*circ}
// //         style={{ transition: "stroke-dashoffset 0.9s cubic-bezier(.4,0,.2,1)" }} />
// //       <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
// //         style={{ transform:`rotate(90deg) translate(0,-${size}px)`, fontSize:11, fontWeight:700, transformOrigin:`${size/2}px ${size/2}px` }}>
// //         {pct}%
// //       </text>
// //     </svg>
// //   );
// // }

// // // ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
// // const CURRENT_STUDENT = { id: "s1", name: "Arjun Sharma" };

// // function StudentDashboard({ onBack }) {
// //   const [materials, setMaterials]     = useState(() => _globalMaterials.filter(m => m.studentId === null || m.studentId === CURRENT_STUDENT.id));
// //   const [requests, setRequests]       = useState(() => _globalRequests.filter(r => r.studentId === CURRENT_STUDENT.id));
// //   const [search, setSearch]           = useState("");
// //   const [activeCategory, setActiveCat]= useState("all");
// //   const [activeSub, setActiveSub]     = useState("all");
// //   const [openMaterial, setOpenMat]    = useState(null);
// //   const [showReqModal, setShowReqModal] = useState(false);
// //   const [activeView, setActiveView]   = useState("library"); // library | requests
// //   const { toasts, add: toast }        = useToast();
// //   const [animIn, setAnimIn]           = useState(false);
// //   const completedCount = 3;

// //   useEffect(() => { setTimeout(() => setAnimIn(true), 50); }, []);

// //   // Sync from global on mount
// //   useEffect(() => {
// //     setMaterials(_globalMaterials.filter(m => m.studentId === null || m.studentId === CURRENT_STUDENT.id));
// //     setRequests(_globalRequests.filter(r => r.studentId === CURRENT_STUDENT.id));
// //   }, []);

// //   const filtered = materials.filter(m => {
// //     const q = search.toLowerCase();
// //     return (m.title.toLowerCase().includes(q) || m.sub.toLowerCase().includes(q)) &&
// //       (activeCategory === "all" || m.category === activeCategory) &&
// //       (activeSub === "all" || m.sub === activeSub);
// //   });

// //   const toggleBookmark = id => {
// //     setMaterials(p => p.map(m => m.id === id ? { ...m, bookmarked: !m.bookmarked } : m));
// //     toast("Bookmark updated!", "info");
// //   };

// //   const handleOpen = m => {
// //     if (m.type === "premium" && completedCount < 3) { toast("Complete 3 free materials to unlock premium!", "warn"); return; }
// //     setOpenMat(m);
// //   };

// //   const handleDownload = m => {
// //     if (m.type === "premium" && completedCount < 3) { toast("Complete 3 materials to unlock premium downloads", "warn"); return; }
// //     if (m.uploadType === "pdf" && m.fileLink) {
// //       toast(`Opening PDF: ${m.title}`, "success");
// //       return;
// //     }
// //     if (m.uploadType === "link" && m.fileLink) {
// //       toast(`Opening external link for: ${m.title}`, "info");
// //       return;
// //     }
// //     toast(`"${m.title}" registered for download`, "success");
// //   };

// //   const submitRequest = (data) => {
// //     const newReq = { id: `r${Date.now()}`, studentId: CURRENT_STUDENT.id, studentName: CURRENT_STUDENT.name, ...data, status: "pending", date: new Date().toISOString().slice(0,10) };
// //     _globalRequests = [..._globalRequests, newReq];
// //     setRequests(p => [...p, newReq]);
// //     setShowReqModal(false);
// //     toast("📨 Your material request has been sent to admin!", "success");
// //   };

// //   const subOptions = activeCategory !== "all" ? ["all", ...CATEGORIES[activeCategory].sub] : ["all"];
// //   const myApproved = requests.filter(r => r.status === "approved").length;
// //   const myPending  = requests.filter(r => r.status === "pending").length;

// //   return (
// //     <div style={{ minHeight: "100vh", background: C.bg, color: C.textPri, fontFamily: "'Georgia', serif" }}>
// //       <ToastContainer toasts={toasts} />

// //       {/* HEADER */}
// //       <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 28px" }}>
// //         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// //             <button onClick={onBack} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>← Home</button>
// //             <span style={{ color: C.amber, fontSize: 20, fontWeight: 700, letterSpacing: -0.5 }}>📚 OYS E-Library</span>
// //           </div>
// //           <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
// //             <div style={{ background: completedCount >= 3 ? C.sageGlow : C.elevated, border: `1px solid ${completedCount >= 3 ? C.sage : C.border}`, borderRadius: 20, padding: "5px 14px", color: completedCount >= 3 ? C.sageLt : C.textSec, fontSize: 12, fontFamily: "'system-ui', sans-serif" }}>
// //               {completedCount >= 3 ? "🔓 Premium Unlocked after completion of 3 materials" : `✅ ${completedCount}/3 for Premium`}
// //             </div>
// //             <button onClick={() => setShowReqModal(true)} style={{ background: C.amberGlow, border: `1px solid ${C.amberDim}`, color: C.amberHi, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit" }}>
// //               + Request Material
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* SUB NAV */}
// //       <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 28px" }}>
// //         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 0 }}>
// //           {[["library","📖 Library"], ["requests","📨 My Requests"]].map(([v,l]) => (
// //             <button key={v} onClick={() => setActiveView(v)} style={{
// //               background: "none", border: "none", padding: "14px 20px",
// //               color: activeView === v ? C.amber : C.textSec,
// //               borderBottom: `2px solid ${activeView === v ? C.amber : "transparent"}`,
// //               cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit",
// //               transition: "all 0.2s"
// //             }}>{l} {v==="requests" && myPending > 0 && <span style={{ background: C.rose, color: "#fff", borderRadius: 10, padding: "1px 6px", fontSize: 10, marginLeft: 6 }}>{myPending}</span>}</button>
// //           ))}
// //         </div>
// //       </div>

// //       <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 28px", opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease" }}>

// //         {/* REQUESTS VIEW */}
// //         {activeView === "requests" && (
// //           <div>
// //             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
// //               <h2 style={{ margin: 0, color: C.textPri, fontSize: 18, fontWeight: 600 }}>My Material Requests</h2>
// //               <button onClick={() => setShowReqModal(true)} style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>+ New Request</button>
// //             </div>
// //             {requests.length === 0 ? (
// //               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}>
// //                 <div style={{ fontSize: 48, marginBottom: 12 }}>📭</div>
// //                 <div style={{ fontSize: 16 }}>No requests yet. Ask admin for new materials!</div>
// //               </div>
// //             ) : (
// //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //                 {requests.map(r => (
// //                   <div key={r.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20 }}>
// //                     <div style={{ flex: 1 }}>
// //                       <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: C.textPri }}>{r.title}</div>
// //                       <div style={{ fontSize: 12, color: C.textSec, marginBottom: 6 }}>{CATEGORIES[r.category]?.label} → {r.sub}</div>
// //                       <div style={{ fontSize: 12, color: C.textMut, fontStyle: "italic" }}>"{r.reason}"</div>
// //                     </div>
// //                     <div style={{ textAlign: "right" }}>
// //                       <div style={{
// //                         display: "inline-block", borderRadius: 8, padding: "5px 14px", fontSize: 12, fontWeight: 700,
// //                         background: r.status === "approved" ? C.sageGlow : r.status === "rejected" ? C.roseGlow : C.amberGlow,
// //                         color: r.status === "approved" ? C.sageLt : r.status === "rejected" ? C.roseLt : C.amberHi,
// //                         border: `1px solid ${r.status === "approved" ? C.sageDim : r.status === "rejected" ? C.rose : C.amberDim}`,
// //                       }}>
// //                         {r.status === "approved" ? "✅ Approved" : r.status === "rejected" ? "❌ Rejected" : "⏳ Pending"}
// //                       </div>
// //                       <div style={{ fontSize: 11, color: C.textMut, marginTop: 6 }}>{r.date}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* LIBRARY VIEW */}
// //         {activeView === "library" && (
// //           <>
// //             {/* SEARCH */}
// //             <div style={{ position: "relative", marginBottom: 24 }}>
// //               <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: C.textMut }}>🔍</span>
// //               <input value={search} onChange={e => setSearch(e.target.value)}
// //                 placeholder="Search by subject, course, topic..."
// //                 style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 14, border: `1px solid ${search ? C.amber : C.border}`, background: C.surface, color: C.textPri, fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.3s" }} />
// //               {search && <button onClick={() => setSearch("")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: C.textMut }}>✕</button>}
// //             </div>

// //             {/* CATEGORY CARDS */}
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 24 }}>
// //               {Object.entries(CATEGORIES).map(([key, cat]) => (
// //                 <div key={key} onClick={() => { setActiveCat(activeCategory === key ? "all" : key); setActiveSub("all"); }}
// //                   style={{ background: activeCategory === key ? `${cat.color}18` : C.surface, border: `1px solid ${activeCategory === key ? cat.color : C.border}`, borderRadius: 14, padding: "18px 22px", cursor: "pointer", transition: "all 0.22s", transform: activeCategory === key ? "translateY(-3px)" : "translateY(0)" }}>
// //                   <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
// //                   <div style={{ fontWeight: 700, fontSize: 15, color: activeCategory === key ? cat.color : C.textPri }}>{cat.label}</div>
// //                   <div style={{ fontSize: 12, marginTop: 4, color: C.textSec }}>{cat.sub.length} streams · {_globalMaterials.filter(m => m.category === key && (m.studentId === null || m.studentId === CURRENT_STUDENT.id)).length} materials</div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* FILTERS */}
// //             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 22, flexWrap: "wrap" }}>
// //               {activeCategory !== "all" && (
// //                 <select value={activeSub} onChange={e => setActiveSub(e.target.value)}
// //                   style={{ padding: "9px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", outline: "none", fontFamily: "inherit" }}>
// //                   {subOptions.map(s => <option key={s} value={s}>{s === "all" ? "All Sub-categories" : s}</option>)}
// //                 </select>
// //               )}
// //               <div style={{ marginLeft: "auto", color: C.textMut, fontSize: 13 }}>Showing {filtered.length} materials</div>
// //             </div>

// //             {/* MATERIALS GRID */}
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))", gap: 18 }}>
// //               {filtered.map((m, i) => {
// //                 const cat = CATEGORIES[m.category];
// //                 const locked = m.type === "premium" && completedCount < 3;
// //                 const isPersonal = m.studentId === CURRENT_STUDENT.id;
// //                 return (
// //                   <div key={m.id} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${m.bookmarked ? C.amber : isPersonal ? C.sage : C.border}`, overflow: "hidden", cursor: "pointer", transition: "all 0.22s", animation: `cardIn 0.4s ease ${i*0.04}s both`, position: "relative" }}
// //                     onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = cat.color; }}
// //                     onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = m.bookmarked ? C.amber : isPersonal ? C.sage : C.border; }}>
// //                     {/* THUMB */}
// //                     <div style={{ background: cat.bg, padding: "24px 0", textAlign: "center", fontSize: 48, position: "relative" }}>
// //                       {m.thumb}
// //                       {isPersonal && <div style={{ position: "absolute", top: 8, left: 8, background: C.sageGlow, border: `1px solid ${C.sageDim}`, color: C.sageLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>⭐ YOURS</div>}
// //                       {locked && <div style={{ position: "absolute", top: 8, left: isPersonal ? 64 : 8, background: "#3d2a0a", border: `1px solid ${C.amberDim}`, color: C.amberHi, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>🔒 PREMIUM</div>}
// //                       {!locked && m.type === "premium" && <div style={{ position: "absolute", top: 8, left: 8, background: C.sageGlow, border: `1px solid ${C.sageDim}`, color: C.sageLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>✨ PREMIUM</div>}
// //                       {m.uploadType === "pdf"  && <div style={{ position: "absolute", bottom: 8, right: 8, background: "#3a1010", border: `1px solid ${C.rose}`, color: C.roseLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>📄 PDF</div>}
// //                       {m.uploadType === "link" && <div style={{ position: "absolute", bottom: 8, right: 8, background: C.indigoGlow, border: `1px solid ${C.indigo}`, color: C.indigoLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>🔗 LINK</div>}
// //                       <button onClick={e => { e.stopPropagation(); toggleBookmark(m.id); }} style={{ position: "absolute", top: 8, right: 8, background: m.bookmarked ? C.amberGlow : "rgba(255,255,255,0.06)", border: `1px solid ${m.bookmarked ? C.amberDim : C.border}`, borderRadius: 7, padding: "5px 7px", cursor: "pointer", fontSize: 13 }}>
// //                         {m.bookmarked ? "🔖" : "🏷️"}
// //                       </button>
// //                     </div>
// //                     {/* CONTENT */}
// //                     <div style={{ padding: 14 }}>
// //                       <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: C.textPri }}>{m.title}</div>
// //                       <div style={{ fontSize: 11, color: C.textSec, marginBottom: 10 }}>
// //                         <span style={{ background: cat.bg, color: cat.color, borderRadius: 5, padding: "2px 7px", fontWeight: 600, border: `1px solid ${cat.border}` }}>{m.sub}</span>
// //                         &nbsp;· {m.pages}p · {m.topics}t
// //                       </div>
// //                       {m.progress > 0 && (
// //                         <div style={{ marginBottom: 10 }}>
// //                           <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textMut, marginBottom: 3 }}>
// //                             <span>Progress</span><span style={{ color: cat.color }}>{m.progress}%</span>
// //                           </div>
// //                           <div style={{ height: 5, background: C.border, borderRadius: 8, overflow: "hidden" }}>
// //                             <div style={{ width: `${m.progress}%`, height: "100%", background: cat.color, borderRadius: 8, transition: "width 1s ease" }} />
// //                           </div>
// //                         </div>
// //                       )}
// //                       <div style={{ display: "flex", gap: 7 }}>
// //                         <button onClick={() => handleOpen(m)} style={{ flex: 1, background: locked ? C.elevated : `${cat.color}22`, color: locked ? C.textMut : cat.color, border: `1px solid ${locked ? C.border : cat.border}`, borderRadius: 8, padding: "8px 0", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
// //                           {locked ? "🔒 Locked" : "📖 Open"}
// //                         </button>
// //                         <button onClick={() => handleDownload(m)} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 11px", cursor: "pointer", fontSize: 13, color: C.textSec }} title="Download">⬇️</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //             {filtered.length === 0 && (
// //               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}>
// //                 <div style={{ fontSize: 44, marginBottom: 10 }}>🔍</div>
// //                 <div style={{ fontSize: 16, fontWeight: 600, color: C.textSec }}>No materials found</div>
// //                 <div style={{ fontSize: 13, marginTop: 4 }}>Try a different search or category</div>
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>

// //       {openMaterial && <MaterialModal material={openMaterial} onClose={() => setOpenMat(null)} toast={toast} />}
// //       {showReqModal && <RequestMaterialModal onClose={() => setShowReqModal(false)} onSubmit={submitRequest} />}

// //       <style>{`
// //         @keyframes cardIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
// //       `}</style>
// //     </div>
// //   );
// // }

// // function MaterialModal({ material: m, onClose, toast }) {
// //   const [topics, setTopics] = useState(JAVA_TOPICS);
// //   const [activeTab, setActiveTab] = useState("topics");
// //   const cat = CATEGORIES[m.category];
// //   const done = topics.filter(t => t.done).length;
// //   const pct  = Math.round((done / topics.length) * 100);
// //   return (
// //     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
// //       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 660, width: "100%", maxHeight: "90vh", overflow: "auto", border: `1px solid ${C.border}` }}>
// //         <div style={{ background: cat.bg, padding: "26px 28px 20px", borderRadius: "18px 18px 0 0", position: "relative", borderBottom: `1px solid ${cat.border}` }}>
// //           <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 8, padding: "5px 9px", cursor: "pointer", fontSize: 14, color: C.textSec }}>✕</button>
// //           <div style={{ fontSize: 48 }}>{m.thumb}</div>
// //           <h2 style={{ margin: "10px 0 4px", color: cat.color, fontSize: 20, fontWeight: 700 }}>{m.title}</h2>
// //           <div style={{ fontSize: 12, color: C.textSec }}>{m.sub} · {m.pages} pages · {m.topics} topics
// //             {m.uploadType === "pdf"  && <span style={{ marginLeft: 10, background: "#3a1010", color: C.roseLt, borderRadius: 5, padding: "1px 8px", fontSize: 10, border: `1px solid ${C.rose}` }}>📄 PDF available</span>}
// //             {m.uploadType === "link" && <span style={{ marginLeft: 10, background: C.indigoGlow, color: C.indigoLt, borderRadius: 5, padding: "1px 8px", fontSize: 10, border: `1px solid ${C.indigo}` }}>🔗 External link</span>}
// //           </div>
// //           <div style={{ display: "flex", gap: 14, marginTop: 14, alignItems: "center" }}>
// //             <Ring pct={pct} size={56} stroke={5} color={cat.color} />
// //             <div>
// //               <div style={{ fontWeight: 700, fontSize: 15, color: cat.color }}>{pct}% complete</div>
// //               <div style={{ fontSize: 12, color: C.textSec }}>{done}/{topics.length} topics done</div>
// //             </div>
// //           </div>
// //         </div>
// //         <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, padding: "0 24px" }}>
// //           {["topics","test","notes"].map(t => (
// //             <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "12px 18px", border: "none", background: "none", fontWeight: 600, fontSize: 13, cursor: "pointer", color: activeTab === t ? cat.color : C.textSec, borderBottom: `2px solid ${activeTab === t ? cat.color : "transparent"}`, textTransform: "capitalize", fontFamily: "inherit" }}>
// //               {t === "topics" ? "📚 Topics" : t === "test" ? "📝 Mock Test" : "🗒️ Notes"}
// //             </button>
// //           ))}
// //         </div>
// //         <div style={{ padding: 24 }}>
// //           {activeTab === "topics" && topics.map((t, i) => (
// //             <div key={t.id} onClick={() => setTopics(p => p.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
// //               style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, marginBottom: 7, cursor: "pointer", background: t.done ? cat.bg : C.elevated, border: `1px solid ${t.done ? cat.border : C.border}`, transition: "all 0.18s" }}>
// //               <div style={{ width: 26, height: 26, borderRadius: "50%", background: t.done ? cat.color : "transparent", border: `2px solid ${t.done ? cat.color : C.borderHi}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.done ? C.bg : C.textMut, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
// //                 {t.done ? "✓" : i+1}
// //               </div>
// //               <div style={{ flex: 1 }}>
// //                 <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{t.title}</div>
// //                 <div style={{ fontSize: 11, color: C.textMut }}>{t.pages} pages</div>
// //               </div>
// //               {t.done && <span style={{ fontSize: 10, background: cat.color, color: C.bg, borderRadius: 5, padding: "2px 7px", fontWeight: 700 }}>Done</span>}
// //             </div>
// //           ))}
// //           {activeTab === "test" && (
// //             <div style={{ textAlign: "center", padding: "20px 0" }}>
// //               <div style={{ fontSize: 48, marginBottom: 14 }}>📝</div>
// //               <h3 style={{ color: C.textPri, marginBottom: 8, fontWeight: 700 }}>Mock Test – {m.title}</h3>
// //               <p style={{ color: C.textSec, marginBottom: 22, fontSize: 14 }}>30 questions · 45 minutes · Results saved to profile</p>
// //               <button onClick={() => { toast("Mock test started! Results will be saved.", "success"); onClose(); }} style={{ background: cat.color, color: C.bg, border: "none", borderRadius: 10, padding: "13px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>🚀 Start Mock Test</button>
// //             </div>
// //           )}
// //           {activeTab === "notes" && (
// //             <div>
// //               <textarea placeholder="Write your personal notes here..." style={{ width: "100%", minHeight: 150, borderRadius: 10, padding: 14, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, resize: "vertical", boxSizing: "border-box", outline: "none", fontFamily: "inherit" }} />
// //               <button onClick={() => toast("Notes saved!", "success")} style={{ marginTop: 10, background: cat.color, color: C.bg, border: "none", borderRadius: 9, padding: "9px 22px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>💾 Save Notes</button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function RequestMaterialModal({ onClose, onSubmit }) {
// //   const [form, setForm] = useState({ title: "", category: "private", sub: "IT", reason: "" });
// //   const s = f => v => setForm(p => ({ ...p, [f]: v }));
// //   const valid = form.title.trim() && form.reason.trim();
// //   return (
// //     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
// //       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 480, width: "100%", border: `1px solid ${C.border}` }}>
// //         <div style={{ padding: "22px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //           <h2 style={{ margin: 0, color: C.amber, fontSize: 17, fontWeight: 700 }}>📨 Request New Material</h2>
// //           <button onClick={onClose} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 13 }}>✕</button>
// //         </div>
// //         <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 16 }}>
// //           <div>
// //             <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Material Title *</label>
// //             <input value={form.title} onChange={e => s("title")(e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
// //           </div>
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// //             <div>
// //               <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Category</label>
// //               <select value={form.category} onChange={e => { s("category")(e.target.value); s("sub")(CATEGORIES[e.target.value].sub[0]); }} style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //                 {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
// //               </select>
// //             </div>
// //             <div>
// //               <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Sub-category</label>
// //               <select value={form.sub} onChange={e => s("sub")(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //                 {CATEGORIES[form.category].sub.map(s => <option key={s} value={s}>{s}</option>)}
// //               </select>
// //             </div>
// //           </div>
// //           <div>
// //             <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Why do you need this? *</label>
// //             <textarea value={form.reason} onChange={e => s("reason")(e.target.value)} placeholder="Describe why this material would help your studies..." rows={3} style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, resize: "vertical", boxSizing: "border-box", outline: "none", fontFamily: "inherit" }} />
// //           </div>
// //           <div style={{ display: "flex", gap: 10 }}>
// //             <button onClick={onClose} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 600, fontFamily: "inherit", fontSize: 13 }}>Cancel</button>
// //             <button onClick={() => valid && onSubmit(form)} style={{ flex: 2, background: valid ? C.amber : C.elevated, color: valid ? C.bg : C.textMut, border: "none", borderRadius: 9, padding: 12, cursor: valid ? "pointer" : "not-allowed", fontWeight: 700, fontFamily: "inherit", fontSize: 13 }}>📨 Send Request to Admin</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
// // function AdminDashboard({ onBack }) {
// //   const [materials, setMaterials] = useState(() => _globalMaterials.map(m => ({...m})));
// //   const [requests, setRequests]   = useState(() => [..._globalRequests]);
// //   const [students]                = useState(() => _globalStudents.map(s => ({...s})));
// //   const [activeTab, setActiveTab] = useState("overview");
// //   const [filterCat, setFilterCat] = useState("all");
// //   const [filterType, setFilterType]= useState("all");
// //   const [search, setSearch]       = useState("");
// //   const [showAddModal, setShowAdd]= useState(false);
// //   const [editItem, setEditItem]   = useState(null);
// //   const [previewItem, setPreview] = useState(null);
// //   const [deleteConfirm, setDelConf]= useState(null);
// //   const [selectedStudent, setSelStu]= useState(null);
// //   const [animIn, setAnimIn]       = useState(false);
// //   const { toasts, add: toast }    = useToast();

// //   useEffect(() => {
// //     setTimeout(() => setAnimIn(true), 50);
// //     // poll for new requests
// //     const t = setInterval(() => setRequests([..._globalRequests]), 2000);
// //     return () => clearInterval(t);
// //   }, []);

// //   const handleDelete = id => {
// //     const updated = materials.filter(m => m.id !== id);
// //     setMaterials(updated);
// //     _globalMaterials = updated;
// //     setDelConf(null);
// //     toast("Material deleted", "error");
// //   };

// //   const handleSave = data => {
// //     if (editItem) {
// //       const updated = materials.map(m => m.id === editItem.id ? {...m, ...data} : m);
// //       setMaterials(updated);
// //       _globalMaterials = updated;
// //       toast("Material updated!", "success");
// //     } else {
// //       const newM = { ...data, id: Date.now(), progress: 0, bookmarked: false, downloads: 0 };
// //       const updated = [...materials, newM];
// //       setMaterials(updated);
// //       _globalMaterials = updated;
// //       toast("Material added!", "success");
// //     }
// //     setShowAdd(false);
// //     setEditItem(null);
// //   };

// //   const approveRequest = (req, addToStudentOnly) => {
// //     const newM = {
// //       id: Date.now(),
// //       title: req.title,
// //       category: req.category,
// //       sub: req.sub,
// //       type: "free",
// //       thumb: "📄",
// //       topics: 5,
// //       progress: 0,
// //       pages: 100,
// //       downloads: 0,
// //       bookmarked: false,
// //       studentId: addToStudentOnly ? req.studentId : null,
// //       uploadType: null,
// //       fileLink: "",
// //     };
// //     const updatedM = [...materials, newM];
// //     setMaterials(updatedM);
// //     _globalMaterials = updatedM;
// //     const updatedR = _globalRequests.map(r => r.id === req.id ? {...r, status: "approved"} : r);
// //     _globalRequests = updatedR;
// //     setRequests([...updatedR]);
// //     toast(`✅ "${req.title}" approved & added ${addToStudentOnly ? "for " + req.studentName + " only" : "for all students"}!`, "success");
// //   };

// //   const rejectRequest = id => {
// //     const updatedR = _globalRequests.map(r => r.id === id ? {...r, status: "rejected"} : r);
// //     _globalRequests = updatedR;
// //     setRequests([...updatedR]);
// //     toast("Request rejected", "error");
// //   };

// //   const filtered = materials.filter(m => {
// //     return m.title.toLowerCase().includes(search.toLowerCase()) &&
// //       (filterCat === "all" || m.category === filterCat) &&
// //       (filterType === "all" || m.type === filterType);
// //   });

// //   const pendingReqs = requests.filter(r => r.status === "pending");

// //   const stats = {
// //     total: materials.length,
// //     free: materials.filter(m => m.type === "free").length,
// //     premium: materials.filter(m => m.type === "premium").length,
// //     downloads: materials.reduce((a,m) => a + m.downloads, 0),
// //     students: students.length,
// //     pending: pendingReqs.length,
// //   };

// //   const TABS = [
// //     { id: "overview",   label: "📊 Overview" },
// //     { id: "materials",  label: "📚 Materials" },
// //     { id: "requests",   label: `📨 Requests ${stats.pending > 0 ? `(${stats.pending})` : ""}` },
// //     { id: "students",   label: "👥 Students" },
// //     { id: "categories", label: "🏷️ Categories" },
// //   ];

// //   return (
// //     <div style={{ minHeight: "100vh", background: "#080807", color: C.textPri, fontFamily: "'Georgia', serif" }}>
// //       <ToastContainer toasts={toasts} />

// //       {/* SIDEBAR */}
// //       <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 210, background: C.surface, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", zIndex: 100 }}>
// //         <div style={{ padding: "22px 18px", borderBottom: `1px solid ${C.border}` }}>
// //           <div style={{ fontSize: 11, color: C.textMut, fontWeight: 700, marginBottom: 3, letterSpacing: 1.5, fontFamily: "system-ui" }}>OYS E-LIBRARY</div>
// //           <div style={{ fontSize: 17, fontWeight: 700, color: C.amber }}>Admin Panel</div>
// //         </div>
// //         <nav style={{ padding: "14px 10px", flex: 1 }}>
// //           {TABS.map(t => (
// //             <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ width: "100%", textAlign: "left", padding: "11px 13px", borderRadius: 9, border: "none", cursor: "pointer", marginBottom: 3, background: activeTab === t.id ? C.amberGlow : "transparent", color: activeTab === t.id ? C.amberHi : C.textSec, fontWeight: activeTab === t.id ? 700 : 400, fontSize: 13, transition: "all 0.18s", borderLeft: `2px solid ${activeTab === t.id ? C.amber : "transparent"}`, fontFamily: "inherit" }}>
// //               {t.label}
// //             </button>
// //           ))}
// //         </nav>
// //         <div style={{ padding: "14px 10px", borderTop: `1px solid ${C.border}` }}>
// //           <button onClick={onBack} style={{ width: "100%", padding: "10px 13px", borderRadius: 9, background: C.roseGlow, border: `1px solid ${C.rose}40`, color: C.roseLt, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Back to Home</button>
// //         </div>
// //       </div>

// //       {/* MAIN */}
// //       <div style={{ marginLeft: 210, padding: "28px 30px", opacity: animIn ? 1 : 0, transition: "opacity 0.5s ease" }}>

// //         {/* ── OVERVIEW ── */}
// //         {activeTab === "overview" && (
// //           <div>
// //             <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: C.textPri }}>Dashboard Overview</h1>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
// //               {[
// //                 { label: "Total Materials", value: stats.total,                  icon: "📚", color: C.amber,  glow: C.amberGlow },
// //                 { label: "Free Materials",  value: stats.free,                   icon: "🆓", color: C.sage,   glow: C.sageGlow },
// //                 { label: "Premium",         value: stats.premium,                icon: "✨", color: C.indigo, glow: C.indigoGlow },
// //                 { label: "Total Downloads", value: stats.downloads.toLocaleString(), icon: "⬇️", color: C.rose,   glow: C.roseGlow },
// //                 { label: "Students",        value: stats.students,               icon: "👥", color: C.sageLt, glow: C.sageGlow },
// //                 { label: "Pending Requests",value: stats.pending,               icon: "⏳", color: C.amberHi,glow: C.amberGlow },
// //               ].map((s,i) => (
// //                 <div key={i} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, padding: "18px 20px", animation: `cardIn 0.4s ease ${i*0.07}s both` }}>
// //                   <div style={{ background: s.glow, borderRadius: 10, padding: "7px 9px", fontSize: 18, display: "inline-block", marginBottom: 10 }}>{s.icon}</div>
// //                   <div style={{ fontSize: 26, fontWeight: 800, color: s.color, fontFamily: "system-ui" }}>{s.value}</div>
// //                   <div style={{ fontSize: 12, color: C.textMut, marginTop: 3, fontFamily: "system-ui" }}>{s.label}</div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* ANALYTICS CHART */}
// //             <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: C.textSec }}>Downloads by Category</h2>
// //             <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
// //               {Object.entries(CATEGORIES).map(([key, cat]) => {
// //                 const count = materials.filter(m => m.category === key).reduce((a,m) => a+m.downloads, 0);
// //                 const max   = materials.reduce((a,m) => a+m.downloads, 0);
// //                 const pct   = max ? Math.round((count/max)*100) : 0;
// //                 return (
// //                   <div key={key} style={{ marginBottom: 16 }}>
// //                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
// //                       <span style={{ color: C.textSec }}>{cat.icon} {cat.label}</span>
// //                       <span style={{ color: cat.color, fontWeight: 700, fontFamily: "system-ui" }}>{count.toLocaleString()} downloads ({pct}%)</span>
// //                     </div>
// //                     <div style={{ height: 8, background: C.border, borderRadius: 8, overflow: "hidden" }}>
// //                       <div style={{ width: `${pct}%`, height: "100%", background: cat.color, borderRadius: 8, transition: "width 1.2s ease", transitionDelay: "0.3s" }} />
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* RECENT PENDING REQUESTS */}
// //             {pendingReqs.length > 0 && (
// //               <>
// //                 <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: C.textSec }}>⏳ Pending Requests</h2>
// //                 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
// //                   {pendingReqs.slice(0,3).map(r => (
// //                     <div key={r.id} style={{ background: C.surface, border: `1px solid ${C.amberDim}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 16 }}>
// //                       <div style={{ flex: 1 }}>
// //                         <span style={{ fontWeight: 700, color: C.amber }}>{r.title}</span>
// //                         <span style={{ color: C.textMut, fontSize: 12, marginLeft: 10 }}>by {r.studentName}</span>
// //                       </div>
// //                       <button onClick={() => setActiveTab("requests")} style={{ background: C.amberGlow, border: `1px solid ${C.amberDim}`, color: C.amberHi, borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit" }}>Review →</button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         )}

// //         {/* ── MATERIALS ── */}
// //         {activeTab === "materials" && (
// //           <div>
// //             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
// //               <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, margin: 0 }}>Manage Materials</h1>
// //               <button onClick={() => { setEditItem(null); setShowAdd(true); }} style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>+ Add Material</button>
// //             </div>
// //             <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
// //               <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search materials..."
// //                 style={{ flex: 1, minWidth: 200, padding: "9px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, outline: "none", fontFamily: "inherit" }} />
// //               <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //                 <option value="all">All Categories</option>
// //                 {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
// //               </select>
// //               <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //                 <option value="all">All Types</option>
// //                 <option value="free">Free</option>
// //                 <option value="premium">Premium</option>
// //               </select>
// //             </div>
// //             <div style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden" }}>
// //               <table style={{ width: "100%", borderCollapse: "collapse" }}>
// //                 <thead>
// //                   <tr style={{ background: C.bg }}>
// //                     {["Material","Category","Sub","Type","Upload","Student","Downloads","Actions"].map(h => (
// //                       <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.textMut, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{h}</th>
// //                     ))}
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filtered.map((m, i) => {
// //                     const cat = CATEGORIES[m.category];
// //                     const stu = m.studentId ? students.find(s => s.id === m.studentId) : null;
// //                     return (
// //                       <tr key={m.id} style={{ borderTop: `1px solid ${C.border}`, animation: `cardIn 0.3s ease ${i*0.03}s both` }}
// //                         onMouseEnter={e => e.currentTarget.style.background = C.elevated}
// //                         onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
// //                         <td style={{ padding: "12px 14px" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
// //                             <span style={{ fontSize: 20 }}>{m.thumb}</span>
// //                             <div>
// //                               <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{m.title}</div>
// //                               <div style={{ fontSize: 11, color: C.textMut }}>{m.pages}p</div>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td style={{ padding: "12px 14px" }}><span style={{ background: cat.bg, color: cat.color, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
// //                         <td style={{ padding: "12px 14px", color: C.textSec, fontSize: 12 }}>{m.sub}</td>
// //                         <td style={{ padding: "12px 14px" }}><span style={{ background: m.type === "premium" ? C.amberGlow : C.sageGlow, color: m.type === "premium" ? C.amberHi : C.sageLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600 }}>{m.type === "premium" ? "✨ Premium" : "🆓 Free"}</span></td>
// //                         <td style={{ padding: "12px 14px" }}>
// //                           {m.uploadType === "pdf"  && <span style={{ background: "#3a1010", color: C.roseLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${C.rose}40` }}>📄 PDF</span>}
// //                           {m.uploadType === "link" && <span style={{ background: C.indigoGlow, color: C.indigoLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600 }}>🔗 Link</span>}
// //                           {!m.uploadType && <span style={{ color: C.textMut, fontSize: 11 }}>—</span>}
// //                         </td>
// //                         <td style={{ padding: "12px 14px" }}>
// //                           {stu ? <span style={{ background: C.sageGlow, color: C.sageLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${C.sageDim}` }}>👤 {stu.name.split(" ")[0]}</span>
// //                                : <span style={{ color: C.textMut, fontSize: 11 }}>All</span>}
// //                         </td>
// //                         <td style={{ padding: "12px 14px", color: C.textSec, fontSize: 12, fontFamily: "system-ui" }}>{m.downloads.toLocaleString()}</td>
// //                         <td style={{ padding: "12px 14px" }}>
// //                           <div style={{ display: "flex", gap: 5 }}>
// //                             <button onClick={() => setPreview(m)} style={{ background: C.indigoGlow, color: C.indigoLt, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>👁</button>
// //                             <button onClick={() => { setEditItem(m); setShowAdd(true); }} style={{ background: C.amberGlow, color: C.amberHi, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>✏️</button>
// //                             <button onClick={() => setDelConf(m.id)} style={{ background: C.roseGlow, color: C.roseLt, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>🗑</button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     );
// //                   })}
// //                 </tbody>
// //               </table>
// //               {filtered.length === 0 && <div style={{ textAlign: "center", padding: 40, color: C.textMut }}>No materials found</div>}
// //             </div>
// //           </div>
// //         )}

// //         {/* ── REQUESTS ── */}
// //         {activeTab === "requests" && (
// //           <div>
// //             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Material Requests</h1>
// //             {requests.length === 0 ? (
// //               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}><div style={{ fontSize: 44, marginBottom: 10 }}>📭</div><div>No requests yet</div></div>
// //             ) : (
// //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //                 {requests.map((r, i) => {
// //                   const cat = CATEGORIES[r.category];
// //                   const stu = students.find(s => s.id === r.studentId);
// //                   return (
// //                     <div key={r.id} style={{ background: C.surface, border: `1px solid ${r.status === "pending" ? C.amberDim : r.status === "approved" ? C.sageDim : C.rose+"44"}`, borderRadius: 14, padding: "18px 22px", animation: `cardIn 0.35s ease ${i*0.05}s both` }}>
// //                       <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
// //                         <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 13, flexShrink: 0, fontFamily: "system-ui" }}>{stu?.avatar || "??"}</div>
// //                         <div style={{ flex: 1 }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
// //                             <span style={{ fontWeight: 700, fontSize: 15, color: C.textPri }}>{r.title}</span>
// //                             <span style={{ background: cat.bg, color: cat.color, borderRadius: 5, padding: "1px 8px", fontSize: 11, fontWeight: 600, border: `1px solid ${cat.border}` }}>{cat.icon} {r.sub}</span>
// //                           </div>
// //                           <div style={{ fontSize: 12, color: C.textSec, marginBottom: 6 }}>
// //                             By <strong style={{ color: C.textPri }}>{r.studentName}</strong> · {r.date}
// //                             {stu && <span style={{ marginLeft: 8, color: C.textMut }}>({stu.email})</span>}
// //                           </div>
// //                           <div style={{ fontSize: 12, color: C.textMut, fontStyle: "italic", background: C.elevated, padding: "8px 12px", borderRadius: 8, borderLeft: `3px solid ${C.amberDim}` }}>"{r.reason}"</div>
// //                         </div>
// //                         <div style={{ textAlign: "right", flexShrink: 0 }}>
// //                           {r.status === "pending" ? (
// //                             <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
// //                               <button onClick={() => approveRequest(r, true)} style={{ background: C.sageGlow, color: C.sageLt, border: `1px solid ${C.sageDim}`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit", whiteSpace: "nowrap" }}>✅ Approve for {r.studentName.split(" ")[0]} only</button>
// //                               <button onClick={() => approveRequest(r, false)} style={{ background: C.amberGlow, color: C.amberHi, border: `1px solid ${C.amberDim}`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit", whiteSpace: "nowrap" }}>🌐 Approve for All Students</button>
// //                               <button onClick={() => rejectRequest(r.id)} style={{ background: C.roseGlow, color: C.roseLt, border: `1px solid ${C.rose}44`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>❌ Reject</button>
// //                             </div>
// //                           ) : (
// //                             <div style={{ display: "inline-block", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, background: r.status === "approved" ? C.sageGlow : C.roseGlow, color: r.status === "approved" ? C.sageLt : C.roseLt, border: `1px solid ${r.status === "approved" ? C.sageDim : C.rose+"44"}` }}>
// //                               {r.status === "approved" ? "✅ Approved" : "❌ Rejected"}
// //                             </div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* ── STUDENTS ── */}
// //         {activeTab === "students" && !selectedStudent && (
// //           <div>
// //             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Student Management</h1>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 16 }}>
// //               {students.map((s, i) => {
// //                 const stuMats   = materials.filter(m => m.studentId === s.id);
// //                 const stuReqs   = requests.filter(r => r.studentId === s.id);
// //                 const stuPending= stuReqs.filter(r => r.status === "pending").length;
// //                 return (
// //                   <div key={s.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 22px", animation: `cardIn 0.35s ease ${i*0.07}s both`, cursor: "pointer", transition: "border-color 0.2s" }}
// //                     onMouseEnter={e => e.currentTarget.style.borderColor = C.amber}
// //                     onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
// //                     onClick={() => setSelStu(s)}>
// //                     <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
// //                       <div style={{ width: 46, height: 46, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: "system-ui" }}>{s.avatar}</div>
// //                       <div>
// //                         <div style={{ fontWeight: 700, fontSize: 15, color: C.textPri }}>{s.name}</div>
// //                         <div style={{ fontSize: 12, color: C.textSec }}>{s.email}</div>
// //                       </div>
// //                     </div>
// //                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
// //                       {[["📚", stuMats.length, "Personal Mats"], ["✅", s.completed, "Completed"], ["📨", stuReqs.length, "Requests"]].map(([icon, val, lbl]) => (
// //                         <div key={lbl} style={{ background: C.elevated, borderRadius: 9, padding: "10px 0", textAlign: "center", border: `1px solid ${C.border}` }}>
// //                           <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
// //                           <div style={{ fontSize: 18, fontWeight: 800, color: C.amber, fontFamily: "system-ui" }}>{val}</div>
// //                           <div style={{ fontSize: 10, color: C.textMut, fontFamily: "system-ui" }}>{lbl}</div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     {stuPending > 0 && <div style={{ marginTop: 12, background: C.amberGlow, border: `1px solid ${C.amberDim}`, borderRadius: 8, padding: "7px 12px", fontSize: 12, color: C.amberHi, fontWeight: 600 }}>⏳ {stuPending} pending request{stuPending > 1 ? "s" : ""}</div>}
// //                     <div style={{ marginTop: 10, fontSize: 11, color: C.textMut }}>Joined: {s.joined}</div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}

// //         {/* STUDENT DETAIL PAGE */}
// //         {activeTab === "students" && selectedStudent && (
// //           <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={() => setSelStu(null)} onApprove={approveRequest} onReject={rejectRequest} toast={toast} />
// //         )}

// //         {/* ── CATEGORIES ── */}
// //         {activeTab === "categories" && (
// //           <div>
// //             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Category Management</h1>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
// //               {Object.entries(CATEGORIES).map(([key, cat]) => (
// //                 <div key={key} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden" }}>
// //                   <div style={{ background: `${cat.color}22`, borderBottom: `1px solid ${cat.border}`, padding: "18px 20px", display: "flex", alignItems: "center", gap: 10 }}>
// //                     <span style={{ fontSize: 28 }}>{cat.icon}</span>
// //                     <div>
// //                       <div style={{ color: cat.color, fontWeight: 700, fontSize: 15 }}>{cat.label}</div>
// //                       <div style={{ color: C.textSec, fontSize: 12 }}>{materials.filter(m => m.category === key).length} materials</div>
// //                     </div>
// //                   </div>
// //                   <div style={{ padding: 16 }}>
// //                     <div style={{ fontSize: 11, color: C.textMut, fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Sub-categories</div>
// //                     <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
// //                       {cat.sub.map(s => <span key={s} style={{ background: C.elevated, color: C.textSec, borderRadius: 6, padding: "4px 10px", fontSize: 12, border: `1px solid ${C.border}` }}>{s}</span>)}
// //                     </div>
// //                     <button onClick={() => toast(`${cat.label} updated`, "info")} style={{ width: "100%", background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.border}`, borderRadius: 8, padding: "8px 0", cursor: "pointer", fontWeight: 600, fontSize: 12, fontFamily: "inherit" }}>+ Add Sub-category</button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {showAddModal && <AddMaterialModal item={editItem} students={students} onClose={() => { setShowAdd(false); setEditItem(null); }} onSave={handleSave} />}
// //       {previewItem && <PreviewModal item={previewItem} students={students} onClose={() => setPreview(null)} />}
// //       {deleteConfirm && (
// //         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000 }}>
// //           <div style={{ background: C.surface, borderRadius: 14, padding: 28, maxWidth: 340, width: "90%", border: `1px solid ${C.rose}44`, textAlign: "center" }}>
// //             <div style={{ fontSize: 36, marginBottom: 10 }}>⚠️</div>
// //             <h3 style={{ color: C.textPri, marginBottom: 8, fontWeight: 700 }}>Delete Material?</h3>
// //             <p style={{ color: C.textSec, fontSize: 13, marginBottom: 22 }}>This action cannot be undone.</p>
// //             <div style={{ display: "flex", gap: 10 }}>
// //               <button onClick={() => setDelConf(null)} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 11, cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>Cancel</button>
// //               <button onClick={() => handleDelete(deleteConfirm)} style={{ flex: 1, background: C.rose, color: "#fff", border: "none", borderRadius: 9, padding: 11, cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>Delete</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style>{`@keyframes cardIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }`}</style>
// //     </div>
// //   );
// // }

// // function StudentDetail({ student: s, materials, requests, onBack, onApprove, onReject, toast }) {
// //   const stuMats = materials.filter(m => m.studentId === s.id);
// //   const stuReqs = requests.filter(r => r.studentId === s.id);
// //   return (
// //     <div>
// //       <button onClick={onBack} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, marginBottom: 20, fontFamily: "inherit" }}>← All Students</button>
// //       <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 24px" }}>
// //         <div style={{ width: 58, height: 58, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 18, fontFamily: "system-ui" }}>{s.avatar}</div>
// //         <div>
// //           <h2 style={{ margin: 0, color: C.textPri, fontSize: 20, fontWeight: 700 }}>{s.name}</h2>
// //           <div style={{ color: C.textSec, fontSize: 13 }}>{s.email} · Joined {s.joined}</div>
// //         </div>
// //         <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
// //           {[["✅", s.completed, "Completed"],["📚", stuMats.length, "Personal"],["📨", stuReqs.length, "Requests"]].map(([icon, val, lbl]) => (
// //             <div key={lbl} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 16px", textAlign: "center" }}>
// //               <div style={{ fontSize: 18 }}>{icon}</div>
// //               <div style={{ fontSize: 20, fontWeight: 800, color: C.amber, fontFamily: "system-ui" }}>{val}</div>
// //               <div style={{ fontSize: 11, color: C.textMut, fontFamily: "system-ui" }}>{lbl}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
// //         <div>
// //           <h3 style={{ color: C.textSec, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>⭐ Personal Materials ({stuMats.length})</h3>
// //           {stuMats.length === 0 ? <div style={{ color: C.textMut, fontSize: 13, padding: "20px 0" }}>No personal materials yet</div> : stuMats.map(m => (
// //             <div key={m.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
// //               <span style={{ fontSize: 22 }}>{m.thumb}</span>
// //               <div style={{ flex: 1 }}>
// //                 <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{m.title}</div>
// //                 <div style={{ fontSize: 11, color: C.textSec }}>{m.sub} · {m.type}</div>
// //               </div>
// //               {m.uploadType && <span style={{ fontSize: 10, background: C.elevated, color: C.textSec, borderRadius: 5, padding: "2px 6px" }}>{m.uploadType === "pdf" ? "📄" : "🔗"}</span>}
// //             </div>
// //           ))}
// //         </div>
// //         <div>
// //           <h3 style={{ color: C.textSec, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>📨 Requests ({stuReqs.length})</h3>
// //           {stuReqs.length === 0 ? <div style={{ color: C.textMut, fontSize: 13, padding: "20px 0" }}>No requests yet</div> : stuReqs.map(r => (
// //             <div key={r.id} style={{ background: C.surface, border: `1px solid ${r.status === "pending" ? C.amberDim : r.status === "approved" ? C.sageDim : C.rose+"44"}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8 }}>
// //               <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri, marginBottom: 4 }}>{r.title}</div>
// //               <div style={{ fontSize: 11, color: C.textMut, fontStyle: "italic", marginBottom: 8 }}>"{r.reason}"</div>
// //               {r.status === "pending" ? (
// //                 <div style={{ display: "flex", gap: 6 }}>
// //                   <button onClick={() => { onApprove(r, true); toast(`Approved for ${s.name}`, "success"); }} style={{ flex: 1, background: C.sageGlow, color: C.sageLt, border: `1px solid ${C.sageDim}`, borderRadius: 7, padding: "6px 0", cursor: "pointer", fontSize: 11, fontWeight: 700, fontFamily: "inherit" }}>✅ Approve (Personal)</button>
// //                   <button onClick={() => { onReject(r.id); }} style={{ background: C.roseGlow, color: C.roseLt, border: `1px solid ${C.rose}44`, borderRadius: 7, padding: "6px 10px", cursor: "pointer", fontSize: 11, fontFamily: "inherit" }}>✕</button>
// //                 </div>
// //               ) : (
// //                 <span style={{ fontSize: 11, fontWeight: 700, color: r.status === "approved" ? C.sageLt : C.roseLt }}>{r.status === "approved" ? "✅ Approved" : "❌ Rejected"}</span>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function AddMaterialModal({ item, students, onClose, onSave }) {
// //   const [form, setForm] = useState({
// //     title:      item?.title      || "",
// //     category:   item?.category   || "private",
// //     sub:        item?.sub        || "IT",
// //     type:       item?.type       || "free",
// //     pages:      item?.pages      || "",
// //     topics:     item?.topics     || "",
// //     thumb:      item?.thumb      || "📄",
// //     uploadType: item?.uploadType || "",
// //     fileLink:   item?.fileLink   || "",
// //     studentId:  item?.studentId  || "",
// //   });
// //   const set = (k,v) => setForm(p => ({ ...p, [k]: v }));
// //   const EMOJIS = ["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
// //   return (
// //     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
// //       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 540, width: "100%", border: `1px solid ${C.border}`, maxHeight: "90vh", overflow: "auto" }}>
// //         <div style={{ padding: "20px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //           <h2 style={{ margin: 0, color: C.amber, fontSize: 16, fontWeight: 700 }}>{item ? "✏️ Edit Material" : "➕ Add New Material"}</h2>
// //           <button onClick={onClose} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 7, padding: "5px 9px", cursor: "pointer" }}>✕</button>
// //         </div>
// //         <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
// //           {[{ label: "Title", key: "title", type: "text", ph: "e.g. Java Programming" }, { label: "Pages", key: "pages", type: "number", ph: "e.g. 340" }, { label: "Topics", key: "topics", type: "number", ph: "e.g. 12" }].map(f => (
// //             <div key={f.key}>
// //               <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{f.label}</label>
// //               <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} type={f.type} placeholder={f.ph}
// //                 style={{ width: "100%", padding: "10px 13px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
// //             </div>
// //           ))}
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// //             {[["Category","category", Object.entries(CATEGORIES).map(([k,v]) => [k,v.label])],
// //               ["Type","type", [["free","Free"],["premium","Premium"]]]
// //             ].map(([label, key, opts]) => (
// //               <div key={key}>
// //                 <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{label}</label>
// //                 <select value={form[key]} onChange={e => { set(key, e.target.value); if (key === "category") set("sub", CATEGORIES[e.target.value].sub[0]); }} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //                   {opts.map(([v,l]) => <option key={v} value={v}>{l}</option>)}
// //                 </select>
// //               </div>
// //             ))}
// //           </div>
// //           <div>
// //             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Sub-category</label>
// //             <select value={form.sub} onChange={e => set("sub", e.target.value)} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //               {CATEGORIES[form.category].sub.map(s => <option key={s} value={s}>{s}</option>)}
// //             </select>
// //           </div>

// //           {/* UPLOAD TYPE */}
// //           <div>
// //             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Content Type</label>
// //             <div style={{ display: "flex", gap: 8, marginBottom: form.uploadType ? 10 : 0 }}>
// //               {[["","📁 None"], ["pdf","📄 PDF Link"], ["link","🔗 Web Link"]].map(([v,l]) => (
// //                 <button key={v} onClick={() => set("uploadType", v)} style={{ flex: 1, background: form.uploadType === v ? C.amberGlow : C.elevated, color: form.uploadType === v ? C.amberHi : C.textSec, border: `1px solid ${form.uploadType === v ? C.amberDim : C.border}`, borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>{l}</button>
// //               ))}
// //             </div>
// //             {form.uploadType && (
// //               <input value={form.fileLink} onChange={e => set("fileLink", e.target.value)}
// //                 placeholder={form.uploadType === "pdf" ? "https://example.com/file.pdf" : "https://example.com/resource"}
// //                 style={{ width: "100%", padding: "10px 13px", borderRadius: 9, border: `1px solid ${C.amberDim}`, background: C.elevated, color: C.textPri, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
// //             )}
// //           </div>

// //           {/* ASSIGN TO STUDENT */}
// //           <div>
// //             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Assign to Student (optional)</label>
// //             <select value={form.studentId} onChange={e => set("studentId", e.target.value)} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
// //               <option value="">All Students (Public)</option>
// //               {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
// //             </select>
// //           </div>

// //           {/* EMOJI PICKER */}
// //           <div>
// //             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Thumbnail Icon</label>
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
// //               {EMOJIS.map(e => (
// //                 <button key={e} onClick={() => set("thumb", e)} style={{ width: 38, height: 38, fontSize: 18, borderRadius: 7, border: `1.5px solid ${form.thumb === e ? C.amber : C.border}`, background: form.thumb === e ? C.amberGlow : C.elevated, cursor: "pointer" }}>{e}</button>
// //               ))}
// //             </div>
// //           </div>

// //           <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
// //             <button onClick={onClose} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>Cancel</button>
// //             <button onClick={() => onSave(form)} style={{ flex: 2, background: C.amber, color: C.bg, border: "none", borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 700, fontFamily: "inherit", fontSize: 14 }}>{item ? "💾 Update" : "✅ Add Material"}</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function PreviewModal({ item: m, students, onClose }) {
// //   const cat = CATEGORIES[m.category];
// //   const stu = m.studentId ? students.find(s => s.id === m.studentId) : null;
// //   return (
// //     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
// //       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 460, width: "100%", border: `1px solid ${C.border}` }}>
// //         <div style={{ background: cat.bg, padding: "24px 24px 18px", borderRadius: "18px 18px 0 0", borderBottom: `1px solid ${cat.border}`, textAlign: "center" }}>
// //           <div style={{ fontSize: 52, marginBottom: 8 }}>{m.thumb}</div>
// //           <h2 style={{ color: cat.color, margin: "0 0 4px", fontSize: 18, fontWeight: 700 }}>{m.title}</h2>
// //           <div style={{ color: C.textSec, fontSize: 12 }}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
// //         </div>
// //         <div style={{ padding: 22 }}>
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
// //             {[["Category", cat.label], ["Type", m.type], ["Downloads", m.downloads.toLocaleString()], ["Progress", `${m.progress}%`], ["Upload", m.uploadType || "None"], ["Assigned To", stu?.name || "All Students"]].map(([k,v]) => (
// //               <div key={k} style={{ background: C.elevated, borderRadius: 9, padding: "10px 13px" }}>
// //                 <div style={{ fontSize: 10, color: C.textMut, fontWeight: 700, textTransform: "uppercase", marginBottom: 3, fontFamily: "system-ui" }}>{k}</div>
// //                 <div style={{ fontSize: 14, color: C.textPri, fontWeight: 600 }}>{v}</div>
// //               </div>
// //             ))}
// //           </div>
// //           {m.fileLink && <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 9, padding: "10px 13px", marginBottom: 14 }}>
// //             <div style={{ fontSize: 10, color: C.textMut, fontWeight: 700, textTransform: "uppercase", marginBottom: 3 }}>File Link</div>
// //             <div style={{ fontSize: 12, color: C.indigoLt, wordBreak: "break-all" }}>{m.fileLink}</div>
// //           </div>}
// //           <button onClick={onClose} style={{ width: "100%", background: C.elevated, color: C.textPri, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>Close</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── HOME ─────────────────────────────────────────────────────────────────────
// // export default function App() {
// //   const [screen, setScreen] = useState("home");
// //   const [animIn, setAnimIn] = useState(false);
// //   useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

// //   if (screen === "student") return <StudentDashboard onBack={() => setScreen("home")} />;
// //   if (screen === "admin")   return <AdminDashboard   onBack={() => setScreen("home")} />;

// //   return (
// //     <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", position: "relative", overflow: "hidden" }}>
// //       {/* AMBIENT ORBS */}
// //       <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.amberGlow} 0%, transparent 68%)`, top: "5%", left: "5%", animation: "orb 7s ease-in-out infinite" }} />
// //       <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${C.sageGlow} 0%, transparent 70%)`, bottom: "10%", right: "8%", animation: "orb 7s ease-in-out infinite 3s" }} />
// //       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

// //       <div style={{ textAlign: "center", zIndex: 1, opacity: animIn ? 1 : 0, transform: animIn ? "scale(1)" : "scale(0.92)", transition: "all 0.6s cubic-bezier(.4,0,.2,1)" }}>
// //         <div style={{ fontSize: 72, marginBottom: 16, animation: "float 3.5s ease-in-out infinite" }}>📚</div>
// //         <div style={{ fontSize: 11, letterSpacing: 4, color: C.amberDim, marginBottom: 8, textTransform: "uppercase", fontFamily: "system-ui", fontWeight: 700 }}>One Year Series</div>
// //         <h1 style={{ fontSize: 48, fontWeight: 700, color: C.textPri, margin: "0 0 6px", letterSpacing: -1.5, lineHeight: 1.1 }}>
// //           <span style={{ color: C.amber }}>OYS</span> E-Library
// //         </h1>
// //         <p style={{ color: C.textSec, fontSize: 16, marginBottom: 48, maxWidth: 400, lineHeight: 1.6 }}>
// //           Your complete digital learning hub — study materials, mock tests & progress tracking
// //         </p>

// //         <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
// //           <button onClick={() => setScreen("student")}
// //             style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 14, padding: "20px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit", boxShadow: `0 8px 30px ${C.amberDim}` }}
// //             onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = `0 14px 40px ${C.amberDim}`; }}
// //             onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 8px 30px ${C.amberDim}`; }}>
// //             🎓 Student Dashboard
// //           </button>
// //           <button onClick={() => setScreen("admin")}
// //             style={{ background: "transparent", color: C.textPri, border: `1px solid ${C.borderHi}`, borderRadius: 14, padding: "20px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit" }}
// //             onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.borderColor = C.amber; e.target.style.color = C.amberHi; }}
// //             onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.borderColor = C.borderHi; e.target.style.color = C.textPri; }}>
// //             ⚙️ Admin & Backend
// //           </button>
// //         </div>

// //         <div style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 48, color: C.textMut, fontSize: 13, fontFamily: "system-ui" }}>
// //           {["15 Materials", "3 Categories", "Premium Unlock", "Request System"].map((f,i) => (
// //             <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
// //               <span style={{ color: C.sage }}>✓</span> {f}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes orb { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
// //         @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
// //       `}</style>
// //     </div>
// //   );
// // }



// import { useState, useEffect, useRef } from "react";

// // ─── PALETTE: Deep Espresso + Warm Amber + Sage ──────────────────────────────
// const C = {
//   bg:         "#0e0c0a",
//   surface:    "#1a1713",
//   elevated:   "#232019",
//   border:     "#2e2a22",
//   borderHi:   "#3d3828",
//   amber:      "#d4843a",
//   amberHi:    "#e8a04e",
//   amberDim:   "#a86428",
//   amberGlow:  "rgba(212,132,58,0.12)",
//   sage:       "#4a7c6a",
//   sageLt:     "#5e9e89",
//   sageDim:    "#2d5048",
//   sageGlow:   "rgba(74,124,106,0.12)",
//   rose:       "#c4524a",
//   roseLt:     "#d96860",
//   roseGlow:   "rgba(196,82,74,0.12)",
//   indigo:     "#5a6ec4",
//   indigoLt:   "#7082d6",
//   indigoGlow: "rgba(90,110,196,0.12)",
//   textPri:    "#f0ead8",
//   textSec:    "#9a8f7a",
//   textMut:    "#5a5248",
// };

// const CATEGORIES = {
//   private: {
//     label: "Private Sector",
//     icon: "🏢",
//     color: C.amber,
//     bg: C.amberGlow,
//     border: C.amberDim,
//     sub: ["IT", "Banking", "Healthcare", "Marketing", "Finance", "Consulting"],
//   },
//   government: {
//     label: "Government Exams",
//     icon: "🏛️",
//     color: C.sage,
//     bg: C.sageGlow,
//     border: C.sageDim,
//     sub: ["UPSC", "SSC", "Banking (Govt)", "Railways", "Defence", "State PSC"],
//   },
//   higher: {
//     label: "Higher Education",
//     icon: "🎓",
//     color: C.indigo,
//     bg: C.indigoGlow,
//     border: C.indigo + "44",
//     sub: ["GATE", "CAT/MBA", "GRE/GMAT", "Study Abroad", "Research", "PhD"],
//   },
// };

// const INIT_STUDENTS = [
//   { id: "s1", name: "Arjun Sharma", email: "arjun@email.com", joined: "2024-01-15", completed: 3, avatar: "AS" },
//   { id: "s2", name: "Priya Reddy",  email: "priya@email.com",  joined: "2024-02-20", completed: 1, avatar: "PR" },
//   { id: "s3", name: "Rahul Gupta",  email: "rahul@email.com",  joined: "2024-03-10", completed: 0, avatar: "RG" },
// ];

// const ALL_MATERIALS = [
//   { id: 1,  title: "Java Programming",       category: "private",    sub: "IT",            type: "free",    thumb: "☕", topics: 12, progress: 70, pages: 340, downloads: 1240, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 2,  title: "Banking Fundamentals",   category: "private",    sub: "Banking",       type: "free",    thumb: "🏦", topics: 8,  progress: 50, pages: 210, downloads: 980,  bookmarked: true,  studentId: null, uploadType: null, fileLink: "" },
//   { id: 3,  title: "Data Structures & Algo", category: "private",    sub: "IT",            type: "premium", thumb: "🌲", topics: 15, progress: 30, pages: 480, downloads: 2100, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/dsa.pdf" },
//   { id: 4,  title: "UPSC History Notes",     category: "government", sub: "UPSC",          type: "free",    thumb: "📜", topics: 20, progress: 60, pages: 600, downloads: 3400, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 5,  title: "SSC Mathematics",        category: "government", sub: "SSC",           type: "free",    thumb: "📐", topics: 10, progress: 0,  pages: 280, downloads: 1800, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 6,  title: "IBPS PO Guide",          category: "government", sub: "Banking (Govt)",type: "premium", thumb: "🏧", topics: 14, progress: 0,  pages: 390, downloads: 2200, bookmarked: true,  studentId: null, uploadType: "link", fileLink: "https://ibps.in/study-material" },
//   { id: 7,  title: "CAT Verbal Ability",     category: "higher",     sub: "CAT/MBA",       type: "premium", thumb: "📝", topics: 9,  progress: 20, pages: 240, downloads: 760,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 8,  title: "GRE Vocabulary",         category: "higher",     sub: "GRE/GMAT",      type: "free",    thumb: "🔤", topics: 6,  progress: 40, pages: 180, downloads: 540,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 9,  title: "Agricultural Science",   category: "government", sub: "State PSC",     type: "free",    thumb: "🌾", topics: 11, progress: 0,  pages: 320, downloads: 890,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 10, title: "Python for Beginners",   category: "private",    sub: "IT",            type: "free",    thumb: "🐍", topics: 10, progress: 85, pages: 290, downloads: 3100, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 11, title: "Railway RRB Guide",      category: "government", sub: "Railways",      type: "premium", thumb: "🚂", topics: 13, progress: 0,  pages: 410, downloads: 1650, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/rrb.pdf" },
//   { id: 12, title: "MBA Case Studies",       category: "higher",     sub: "CAT/MBA",       type: "premium", thumb: "💼", topics: 8,  progress: 0,  pages: 200, downloads: 430,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 13, title: "Digital Marketing",      category: "private",    sub: "Marketing",     type: "free",    thumb: "📊", topics: 7,  progress: 55, pages: 190, downloads: 670,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 14, title: "Research Methodology",   category: "higher",     sub: "Research",      type: "free",    thumb: "🔬", topics: 5,  progress: 10, pages: 160, downloads: 310,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
//   { id: 15, title: "Defence NDA Prep",       category: "government", sub: "Defence",       type: "premium", thumb: "⚔️", topics: 16, progress: 0,  pages: 500, downloads: 1200, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
// ];

// const JAVA_TOPICS = [
//   { id: 1,  title: "Introduction to Java",        done: true,  pages: 28 },
//   { id: 2,  title: "OOP Concepts",                done: true,  pages: 45 },
//   { id: 3,  title: "Classes & Objects",           done: true,  pages: 35 },
//   { id: 4,  title: "Inheritance & Polymorphism",  done: false, pages: 52 },
//   { id: 5,  title: "Exception Handling",          done: false, pages: 30 },
//   { id: 6,  title: "Collections Framework",       done: false, pages: 60 },
//   { id: 7,  title: "Multithreading",              done: false, pages: 40 },
//   { id: 8,  title: "File I/O",                    done: false, pages: 25 },
//   { id: 9,  title: "JDBC & Databases",            done: false, pages: 38 },
//   { id: 10, title: "Spring Boot Basics",          done: false, pages: 55 },
//   { id: 11, title: "REST APIs with Java",         done: false, pages: 48 },
//   { id: 12, title: "Java 17+ Features",           done: false, pages: 32 },
// ];

// // ─── SHARED STATE CONTEXT (global via closure) ───────────────────────────────
// let _globalRequests = [
//   { id: "r1", studentId: "s1", studentName: "Arjun Sharma", title: "AI & Machine Learning 2025", category: "private", sub: "IT", reason: "Need latest trending AI material for interviews", status: "pending", date: "2024-12-01" },
//   { id: "r2", studentId: "s2", studentName: "Priya Reddy",  title: "UPSC Ethics GS4 Deep Dive", category: "government", sub: "UPSC", reason: "Comprehensive ethics module not available anywhere", status: "pending", date: "2024-12-05" },
// ];
// let _globalMaterials = ALL_MATERIALS.map(m => ({ ...m }));
// let _globalStudents  = INIT_STUDENTS.map(s => ({ ...s }));

// // ─── TOAST SYSTEM ─────────────────────────────────────────────────────────────
// function useToast() {
//   const [toasts, setToasts] = useState([]);
//   const add = (msg, type = "success") => {
//     const id = Date.now();
//     setToasts(p => [...p, { id, msg, type }]);
//     setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3200);
//   };
//   return { toasts, add };
// }

// function ToastContainer({ toasts }) {
//   const icons = { success: "✅", warn: "⚠️", error: "❌", info: "ℹ️" };
//   const colors = {
//     success: { bg: C.sageDim,   border: C.sage,   text: "#a8d8c8" },
//     warn:    { bg: "#3d2a0a",   border: C.amber,  text: "#e8c880" },
//     error:   { bg: "#3a1010",   border: C.rose,   text: "#f4a0a0" },
//     info:    { bg: "#1a1d3a",   border: C.indigo, text: "#a0a8f4" },
//   };
//   return (
//     <div style={{ position: "fixed", top: 20, right: 20, zIndex: 99999, display: "flex", flexDirection: "column", gap: 10 }}>
//       {toasts.map(t => {
//         const s = colors[t.type] || colors.info;
//         return (
//           <div key={t.id} style={{
//             background: s.bg, border: `1px solid ${s.border}`, color: s.text,
//             borderRadius: 12, padding: "12px 18px", fontSize: 13, fontWeight: 600,
//             maxWidth: 340, boxShadow: `0 8px 32px rgba(0,0,0,0.5)`,
//             animation: "toastIn 0.35s cubic-bezier(.4,0,.2,1)",
//             display: "flex", alignItems: "center", gap: 10,
//           }}>
//             <span style={{ fontSize: 16 }}>{icons[t.type]}</span>
//             {t.msg}
//           </div>
//         );
//       })}
//       <style>{`@keyframes toastIn { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }`}</style>
//     </div>
//   );
// }

// // ─── PROGRESS RING ─────────────────────────────────────────────────────────────
// function Ring({ pct, size = 48, stroke = 4, color = C.amber }) {
//   const r = (size - stroke * 2) / 2;
//   const circ = 2 * Math.PI * r;
//   return (
//     <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke} />
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
//         strokeDasharray={circ} strokeDashoffset={circ - (pct/100)*circ}
//         style={{ transition: "stroke-dashoffset 0.9s cubic-bezier(.4,0,.2,1)" }} />
//       <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
//         style={{ transform:`rotate(90deg) translate(0,-${size}px)`, fontSize:11, fontWeight:700, transformOrigin:`${size/2}px ${size/2}px` }}>
//         {pct}%
//       </text>
//     </svg>
//   );
// }

// // ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
// const CURRENT_STUDENT = { id: "s1", name: "Arjun Sharma" };

// function StudentDashboard({ onBack }) {
//   const [materials, setMaterials]     = useState(() => _globalMaterials.filter(m => m.studentId === null || m.studentId === CURRENT_STUDENT.id));
//   const [requests, setRequests]       = useState(() => _globalRequests.filter(r => r.studentId === CURRENT_STUDENT.id));
//   const [search, setSearch]           = useState("");
//   const [activeCategory, setActiveCat]= useState("all");
//   const [activeSub, setActiveSub]     = useState("all");
//   const [openMaterial, setOpenMat]    = useState(null);
//   const [showReqModal, setShowReqModal] = useState(false);
//   const [activeView, setActiveView]   = useState("library"); // library | requests
//   const { toasts, add: toast }        = useToast();
//   const [animIn, setAnimIn]           = useState(false);
//   const completedCount = 3;

//   useEffect(() => { setTimeout(() => setAnimIn(true), 50); }, []);

//   // Sync from global on mount
//   useEffect(() => {
//     setMaterials(_globalMaterials.filter(m => m.studentId === null || m.studentId === CURRENT_STUDENT.id));
//     setRequests(_globalRequests.filter(r => r.studentId === CURRENT_STUDENT.id));
//   }, []);

//   const filtered = materials.filter(m => {
//     const q = search.toLowerCase();
//     return (m.title.toLowerCase().includes(q) || m.sub.toLowerCase().includes(q)) &&
//       (activeCategory === "all" || m.category === activeCategory) &&
//       (activeSub === "all" || m.sub === activeSub);
//   });

//   const toggleBookmark = id => {
//     setMaterials(p => p.map(m => m.id === id ? { ...m, bookmarked: !m.bookmarked } : m));
//     toast("Bookmark updated!", "info");
//   };

//   const handleOpen = m => {
//     if (m.type === "premium" && completedCount < 3) { toast("Complete 3 free materials to unlock premium!", "warn"); return; }
//     setOpenMat(m);
//   };

//   const handleDownload = m => {
//     if (m.type === "premium" && completedCount < 3) { toast("Complete 3 materials to unlock premium downloads", "warn"); return; }
//     if (m.uploadType === "pdf" && m.fileLink) {
//       toast(`Opening PDF: ${m.title}`, "success");
//       return;
//     }
//     if (m.uploadType === "link" && m.fileLink) {
//       toast(`Opening external link for: ${m.title}`, "info");
//       return;
//     }
//     toast(`"${m.title}" registered for download`, "success");
//   };

//   const submitRequest = (data) => {
//     const newReq = { id: `r${Date.now()}`, studentId: CURRENT_STUDENT.id, studentName: CURRENT_STUDENT.name, ...data, status: "pending", date: new Date().toISOString().slice(0,10) };
//     _globalRequests = [..._globalRequests, newReq];
//     setRequests(p => [...p, newReq]);
//     setShowReqModal(false);
//     toast("📨 Your material request has been sent to admin!", "success");
//   };

//   const subOptions = activeCategory !== "all" ? ["all", ...CATEGORIES[activeCategory].sub] : ["all"];
//   const myApproved = requests.filter(r => r.status === "approved").length;
//   const myPending  = requests.filter(r => r.status === "pending").length;

//   return (
//     <div style={{ minHeight: "100vh", background: C.bg, color: C.textPri, fontFamily: "'Georgia', serif" }}>
//       <ToastContainer toasts={toasts} />

//       {/* HEADER */}
//       <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 28px" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//             <button onClick={onBack} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>← Home</button>
//             <span style={{ color: C.amber, fontSize: 20, fontWeight: 700, letterSpacing: -0.5 }}>📚 OYS E-Library</span>
//           </div>
//           <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//             <div style={{ background: completedCount >= 3 ? C.sageGlow : C.elevated, border: `1px solid ${completedCount >= 3 ? C.sage : C.border}`, borderRadius: 20, padding: "5px 14px", color: completedCount >= 3 ? C.sageLt : C.textSec, fontSize: 12, fontFamily: "'system-ui', sans-serif" }}>
//               {completedCount >= 3 ? "🔓 Premium Unlocked" : `✅ ${completedCount}/3 for Premium`}
//             </div>
//             <button onClick={() => setShowReqModal(true)} style={{ background: C.amberGlow, border: `1px solid ${C.amberDim}`, color: C.amberHi, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit" }}>
//               + Request Material
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* SUB NAV */}
//       <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 28px" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 0 }}>
//           {[["library","📖 Library"], ["requests","📨 My Requests"]].map(([v,l]) => (
//             <button key={v} onClick={() => setActiveView(v)} style={{
//               background: "none", border: "none", padding: "14px 20px",
//               color: activeView === v ? C.amber : C.textSec,
//               borderBottom: `2px solid ${activeView === v ? C.amber : "transparent"}`,
//               cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit",
//               transition: "all 0.2s"
//             }}>{l} {v==="requests" && myPending > 0 && <span style={{ background: C.rose, color: "#fff", borderRadius: 10, padding: "1px 6px", fontSize: 10, marginLeft: 6 }}>{myPending}</span>}</button>
//           ))}
//         </div>
//       </div>

//       <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 28px", opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease" }}>

//         {/* REQUESTS VIEW */}
//         {activeView === "requests" && (
//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
//               <h2 style={{ margin: 0, color: C.textPri, fontSize: 18, fontWeight: 600 }}>My Material Requests</h2>
//               <button onClick={() => setShowReqModal(true)} style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>+ New Request</button>
//             </div>
//             {requests.length === 0 ? (
//               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}>
//                 <div style={{ fontSize: 48, marginBottom: 12 }}>📭</div>
//                 <div style={{ fontSize: 16 }}>No requests yet. Ask admin for new materials!</div>
//               </div>
//             ) : (
//               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                 {requests.map(r => (
//                   <div key={r.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20 }}>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: C.textPri }}>{r.title}</div>
//                       <div style={{ fontSize: 12, color: C.textSec, marginBottom: 6 }}>{CATEGORIES[r.category]?.label} → {r.sub}</div>
//                       <div style={{ fontSize: 12, color: C.textMut, fontStyle: "italic" }}>"{r.reason}"</div>
//                     </div>
//                     <div style={{ textAlign: "right" }}>
//                       <div style={{
//                         display: "inline-block", borderRadius: 8, padding: "5px 14px", fontSize: 12, fontWeight: 700,
//                         background: r.status === "approved" ? C.sageGlow : r.status === "rejected" ? C.roseGlow : C.amberGlow,
//                         color: r.status === "approved" ? C.sageLt : r.status === "rejected" ? C.roseLt : C.amberHi,
//                         border: `1px solid ${r.status === "approved" ? C.sageDim : r.status === "rejected" ? C.rose : C.amberDim}`,
//                       }}>
//                         {r.status === "approved" ? "✅ Approved" : r.status === "rejected" ? "❌ Rejected" : "⏳ Pending"}
//                       </div>
//                       <div style={{ fontSize: 11, color: C.textMut, marginTop: 6 }}>{r.date}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* LIBRARY VIEW */}
//         {activeView === "library" && (
//           <>
//             {/* SEARCH */}
//             <div style={{ position: "relative", marginBottom: 24 }}>
//               <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: C.textMut }}>🔍</span>
//               <input value={search} onChange={e => setSearch(e.target.value)}
//                 placeholder="Search by subject, course, topic..."
//                 style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 14, border: `1px solid ${search ? C.amber : C.border}`, background: C.surface, color: C.textPri, fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.3s" }} />
//               {search && <button onClick={() => setSearch("")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: C.textMut }}>✕</button>}
//             </div>

//             {/* CATEGORY CARDS */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 24 }}>
//               {Object.entries(CATEGORIES).map(([key, cat]) => (
//                 <div key={key} onClick={() => { setActiveCat(activeCategory === key ? "all" : key); setActiveSub("all"); }}
//                   style={{ background: activeCategory === key ? `${cat.color}18` : C.surface, border: `1px solid ${activeCategory === key ? cat.color : C.border}`, borderRadius: 14, padding: "18px 22px", cursor: "pointer", transition: "all 0.22s", transform: activeCategory === key ? "translateY(-3px)" : "translateY(0)" }}>
//                   <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
//                   <div style={{ fontWeight: 700, fontSize: 15, color: activeCategory === key ? cat.color : C.textPri }}>{cat.label}</div>
//                   <div style={{ fontSize: 12, marginTop: 4, color: C.textSec }}>{cat.sub.length} streams · {_globalMaterials.filter(m => m.category === key && (m.studentId === null || m.studentId === CURRENT_STUDENT.id)).length} materials</div>
//                 </div>
//               ))}
//             </div>

//             {/* FILTERS */}
//             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 22, flexWrap: "wrap" }}>
//               {activeCategory !== "all" && (
//                 <select value={activeSub} onChange={e => setActiveSub(e.target.value)}
//                   style={{ padding: "9px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", outline: "none", fontFamily: "inherit" }}>
//                   {subOptions.map(s => <option key={s} value={s}>{s === "all" ? "All Sub-categories" : s}</option>)}
//                 </select>
//               )}
//               <div style={{ marginLeft: "auto", color: C.textMut, fontSize: 13 }}>Showing {filtered.length} materials</div>
//             </div>

//             {/* MATERIALS GRID */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))", gap: 18 }}>
//               {filtered.map((m, i) => {
//                 const cat = CATEGORIES[m.category];
//                 const locked = m.type === "premium" && completedCount < 3;
//                 const isPersonal = m.studentId === CURRENT_STUDENT.id;
//                 return (
//                   <div key={m.id} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${m.bookmarked ? C.amber : isPersonal ? C.sage : C.border}`, overflow: "hidden", cursor: "pointer", transition: "all 0.22s", animation: `cardIn 0.4s ease ${i*0.04}s both`, position: "relative" }}
//                     onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = cat.color; }}
//                     onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = m.bookmarked ? C.amber : isPersonal ? C.sage : C.border; }}>
//                     {/* THUMB */}
//                     <div style={{ background: cat.bg, padding: "24px 0", textAlign: "center", fontSize: 48, position: "relative" }}>
//                       {m.thumb}
//                       {isPersonal && <div style={{ position: "absolute", top: 8, left: 8, background: C.sageGlow, border: `1px solid ${C.sageDim}`, color: C.sageLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>⭐ YOURS</div>}
//                       {locked && <div style={{ position: "absolute", top: 8, left: isPersonal ? 64 : 8, background: "#3d2a0a", border: `1px solid ${C.amberDim}`, color: C.amberHi, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>🔒 PREMIUM</div>}
//                       {!locked && m.type === "premium" && <div style={{ position: "absolute", top: 8, left: 8, background: C.sageGlow, border: `1px solid ${C.sageDim}`, color: C.sageLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>✨ PREMIUM</div>}
//                       {m.uploadType === "pdf"  && <div style={{ position: "absolute", bottom: 8, right: 8, background: "#3a1010", border: `1px solid ${C.rose}`, color: C.roseLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>📄 PDF</div>}
//                       {m.uploadType === "link" && <div style={{ position: "absolute", bottom: 8, right: 8, background: C.indigoGlow, border: `1px solid ${C.indigo}`, color: C.indigoLt, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 7px" }}>🔗 LINK</div>}
//                       <button onClick={e => { e.stopPropagation(); toggleBookmark(m.id); }} style={{ position: "absolute", top: 8, right: 8, background: m.bookmarked ? C.amberGlow : "rgba(255,255,255,0.06)", border: `1px solid ${m.bookmarked ? C.amberDim : C.border}`, borderRadius: 7, padding: "5px 7px", cursor: "pointer", fontSize: 13 }}>
//                         {m.bookmarked ? "🔖" : "🏷️"}
//                       </button>
//                     </div>
//                     {/* CONTENT */}
//                     <div style={{ padding: 14 }}>
//                       <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: C.textPri }}>{m.title}</div>
//                       <div style={{ fontSize: 11, color: C.textSec, marginBottom: 10 }}>
//                         <span style={{ background: cat.bg, color: cat.color, borderRadius: 5, padding: "2px 7px", fontWeight: 600, border: `1px solid ${cat.border}` }}>{m.sub}</span>
//                         &nbsp;· {m.pages}p · {m.topics}t
//                       </div>
//                       {m.progress > 0 && (
//                         <div style={{ marginBottom: 10 }}>
//                           <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textMut, marginBottom: 3 }}>
//                             <span>Progress</span><span style={{ color: cat.color }}>{m.progress}%</span>
//                           </div>
//                           <div style={{ height: 5, background: C.border, borderRadius: 8, overflow: "hidden" }}>
//                             <div style={{ width: `${m.progress}%`, height: "100%", background: cat.color, borderRadius: 8, transition: "width 1s ease" }} />
//                           </div>
//                         </div>
//                       )}
//                       <div style={{ display: "flex", gap: 7 }}>
//                         <button onClick={() => handleOpen(m)} style={{ flex: 1, background: locked ? C.elevated : `${cat.color}22`, color: locked ? C.textMut : cat.color, border: `1px solid ${locked ? C.border : cat.border}`, borderRadius: 8, padding: "8px 0", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
//                           {locked ? "🔒 Locked" : "📖 Open"}
//                         </button>
//                         <button onClick={() => handleDownload(m)} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 11px", cursor: "pointer", fontSize: 13, color: C.textSec }} title="Download">⬇️</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             {filtered.length === 0 && (
//               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}>
//                 <div style={{ fontSize: 44, marginBottom: 10 }}>🔍</div>
//                 <div style={{ fontSize: 16, fontWeight: 600, color: C.textSec }}>No materials found</div>
//                 <div style={{ fontSize: 13, marginTop: 4 }}>Try a different search or category</div>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {openMaterial && <MaterialModal material={openMaterial} onClose={() => setOpenMat(null)} toast={toast} />}
//       {showReqModal && <RequestMaterialModal onClose={() => setShowReqModal(false)} onSubmit={submitRequest} />}

//       <style>{`
//         @keyframes cardIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
//       `}</style>
//     </div>
//   );
// }

// function MaterialModal({ material: m, onClose, toast }) {
//   const [topics, setTopics] = useState(JAVA_TOPICS);
//   const [activeTab, setActiveTab] = useState("topics");
//   const cat = CATEGORIES[m.category];
//   const done = topics.filter(t => t.done).length;
//   const pct  = Math.round((done / topics.length) * 100);
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
//       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 660, width: "100%", maxHeight: "90vh", overflow: "auto", border: `1px solid ${C.border}` }}>
//         <div style={{ background: cat.bg, padding: "26px 28px 20px", borderRadius: "18px 18px 0 0", position: "relative", borderBottom: `1px solid ${cat.border}` }}>
//           <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 8, padding: "5px 9px", cursor: "pointer", fontSize: 14, color: C.textSec }}>✕</button>
//           <div style={{ fontSize: 48 }}>{m.thumb}</div>
//           <h2 style={{ margin: "10px 0 4px", color: cat.color, fontSize: 20, fontWeight: 700 }}>{m.title}</h2>
//           <div style={{ fontSize: 12, color: C.textSec }}>{m.sub} · {m.pages} pages · {m.topics} topics
//             {m.uploadType === "pdf"  && <span style={{ marginLeft: 10, background: "#3a1010", color: C.roseLt, borderRadius: 5, padding: "1px 8px", fontSize: 10, border: `1px solid ${C.rose}` }}>📄 PDF available</span>}
//             {m.uploadType === "link" && <span style={{ marginLeft: 10, background: C.indigoGlow, color: C.indigoLt, borderRadius: 5, padding: "1px 8px", fontSize: 10, border: `1px solid ${C.indigo}` }}>🔗 External link</span>}
//           </div>
//           <div style={{ display: "flex", gap: 14, marginTop: 14, alignItems: "center" }}>
//             <Ring pct={pct} size={56} stroke={5} color={cat.color} />
//             <div>
//               <div style={{ fontWeight: 700, fontSize: 15, color: cat.color }}>{pct}% complete</div>
//               <div style={{ fontSize: 12, color: C.textSec }}>{done}/{topics.length} topics done</div>
//             </div>
//           </div>
//         </div>
//         <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, padding: "0 24px" }}>
//           {["topics","test","notes"].map(t => (
//             <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "12px 18px", border: "none", background: "none", fontWeight: 600, fontSize: 13, cursor: "pointer", color: activeTab === t ? cat.color : C.textSec, borderBottom: `2px solid ${activeTab === t ? cat.color : "transparent"}`, textTransform: "capitalize", fontFamily: "inherit" }}>
//               {t === "topics" ? "📚 Topics" : t === "test" ? "📝 Mock Test" : "🗒️ Notes"}
//             </button>
//           ))}
//         </div>
//         <div style={{ padding: 24 }}>
//           {activeTab === "topics" && topics.map((t, i) => (
//             <div key={t.id} onClick={() => setTopics(p => p.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
//               style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, marginBottom: 7, cursor: "pointer", background: t.done ? cat.bg : C.elevated, border: `1px solid ${t.done ? cat.border : C.border}`, transition: "all 0.18s" }}>
//               <div style={{ width: 26, height: 26, borderRadius: "50%", background: t.done ? cat.color : "transparent", border: `2px solid ${t.done ? cat.color : C.borderHi}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.done ? C.bg : C.textMut, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
//                 {t.done ? "✓" : i+1}
//               </div>
//               <div style={{ flex: 1 }}>
//                 <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{t.title}</div>
//                 <div style={{ fontSize: 11, color: C.textMut }}>{t.pages} pages</div>
//               </div>
//               {t.done && <span style={{ fontSize: 10, background: cat.color, color: C.bg, borderRadius: 5, padding: "2px 7px", fontWeight: 700 }}>Done</span>}
//             </div>
//           ))}
//           {activeTab === "test" && (
//             <div style={{ textAlign: "center", padding: "20px 0" }}>
//               <div style={{ fontSize: 48, marginBottom: 14 }}>📝</div>
//               <h3 style={{ color: C.textPri, marginBottom: 8, fontWeight: 700 }}>Mock Test – {m.title}</h3>
//               <p style={{ color: C.textSec, marginBottom: 22, fontSize: 14 }}>30 questions · 45 minutes · Results saved to profile</p>
//               <button onClick={() => { toast("Mock test started! Results will be saved.", "success"); onClose(); }} style={{ background: cat.color, color: C.bg, border: "none", borderRadius: 10, padding: "13px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>🚀 Start Mock Test</button>
//             </div>
//           )}
//           {activeTab === "notes" && (
//             <div>
//               <textarea placeholder="Write your personal notes here..." style={{ width: "100%", minHeight: 150, borderRadius: 10, padding: 14, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, resize: "vertical", boxSizing: "border-box", outline: "none", fontFamily: "inherit" }} />
//               <button onClick={() => toast("Notes saved!", "success")} style={{ marginTop: 10, background: cat.color, color: C.bg, border: "none", borderRadius: 9, padding: "9px 22px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>💾 Save Notes</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function RequestMaterialModal({ onClose, onSubmit }) {
//   const [form, setForm] = useState({ title: "", category: "private", sub: "IT", reason: "" });
//   const s = f => v => setForm(p => ({ ...p, [f]: v }));
//   const valid = form.title.trim() && form.reason.trim();
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
//       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 480, width: "100%", border: `1px solid ${C.border}` }}>
//         <div style={{ padding: "22px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h2 style={{ margin: 0, color: C.amber, fontSize: 17, fontWeight: 700 }}>📨 Request New Material</h2>
//           <button onClick={onClose} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 13 }}>✕</button>
//         </div>
//         <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 16 }}>
//           <div>
//             <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Material Title *</label>
//             <input value={form.title} onChange={e => s("title")(e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//             <div>
//               <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Category</label>
//               <select value={form.category} onChange={e => { s("category")(e.target.value); s("sub")(CATEGORIES[e.target.value].sub[0]); }} style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//                 {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Sub-category</label>
//               <select value={form.sub} onChange={e => s("sub")(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//                 {CATEGORIES[form.category].sub.map(s => <option key={s} value={s}>{s}</option>)}
//               </select>
//             </div>
//           </div>
//           <div>
//             <label style={{ fontSize: 12, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Why do you need this? *</label>
//             <textarea value={form.reason} onChange={e => s("reason")(e.target.value)} placeholder="Describe why this material would help your studies..." rows={3} style={{ width: "100%", padding: "11px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, resize: "vertical", boxSizing: "border-box", outline: "none", fontFamily: "inherit" }} />
//           </div>
//           <div style={{ display: "flex", gap: 10 }}>
//             <button onClick={onClose} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 600, fontFamily: "inherit", fontSize: 13 }}>Cancel</button>
//             <button onClick={() => valid && onSubmit(form)} style={{ flex: 2, background: valid ? C.amber : C.elevated, color: valid ? C.bg : C.textMut, border: "none", borderRadius: 9, padding: 12, cursor: valid ? "pointer" : "not-allowed", fontWeight: 700, fontFamily: "inherit", fontSize: 13 }}>📨 Send Request to Admin</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
// function AdminDashboard({ onBack }) {
//   const [materials, setMaterials] = useState(() => _globalMaterials.map(m => ({...m})));
//   const [requests, setRequests]   = useState(() => [..._globalRequests]);
//   const [students]                = useState(() => _globalStudents.map(s => ({...s})));
//   const [activeTab, setActiveTab] = useState("overview");
//   const [filterCat, setFilterCat] = useState("all");
//   const [filterType, setFilterType]= useState("all");
//   const [search, setSearch]       = useState("");
//   const [showAddModal, setShowAdd]= useState(false);
//   const [editItem, setEditItem]   = useState(null);
//   const [previewItem, setPreview] = useState(null);
//   const [deleteConfirm, setDelConf]= useState(null);
//   const [selectedStudent, setSelStu]= useState(null);
//   const [animIn, setAnimIn]       = useState(false);
//   const { toasts, add: toast }    = useToast();

//   useEffect(() => {
//     setTimeout(() => setAnimIn(true), 50);
//     // poll for new requests
//     const t = setInterval(() => setRequests([..._globalRequests]), 2000);
//     return () => clearInterval(t);
//   }, []);

//   const handleDelete = id => {
//     const updated = materials.filter(m => m.id !== id);
//     setMaterials(updated);
//     _globalMaterials = updated;
//     setDelConf(null);
//     toast("Material deleted", "error");
//   };

//   const handleSave = data => {
//     if (editItem) {
//       const updated = materials.map(m => m.id === editItem.id ? {...m, ...data} : m);
//       setMaterials(updated);
//       _globalMaterials = updated;
//       toast("Material updated!", "success");
//     } else {
//       const newM = { ...data, id: Date.now(), progress: 0, bookmarked: false, downloads: 0 };
//       const updated = [...materials, newM];
//       setMaterials(updated);
//       _globalMaterials = updated;
//       toast("Material added!", "success");
//     }
//     setShowAdd(false);
//     setEditItem(null);
//   };

//   const approveRequest = (req, addToStudentOnly) => {
//     const newM = {
//       id: Date.now(),
//       title: req.title,
//       category: req.category,
//       sub: req.sub,
//       type: "free",
//       thumb: "📄",
//       topics: 5,
//       progress: 0,
//       pages: 100,
//       downloads: 0,
//       bookmarked: false,
//       studentId: addToStudentOnly ? req.studentId : null,
//       uploadType: null,
//       fileLink: "",
//     };
//     const updatedM = [...materials, newM];
//     setMaterials(updatedM);
//     _globalMaterials = updatedM;
//     const updatedR = _globalRequests.map(r => r.id === req.id ? {...r, status: "approved"} : r);
//     _globalRequests = updatedR;
//     setRequests([...updatedR]);
//     toast(`✅ "${req.title}" approved & added ${addToStudentOnly ? "for " + req.studentName + " only" : "for all students"}!`, "success");
//   };

//   const rejectRequest = id => {
//     const updatedR = _globalRequests.map(r => r.id === id ? {...r, status: "rejected"} : r);
//     _globalRequests = updatedR;
//     setRequests([...updatedR]);
//     toast("Request rejected", "error");
//   };

//   const filtered = materials.filter(m => {
//     return m.title.toLowerCase().includes(search.toLowerCase()) &&
//       (filterCat === "all" || m.category === filterCat) &&
//       (filterType === "all" || m.type === filterType);
//   });

//   const pendingReqs = requests.filter(r => r.status === "pending");

//   const stats = {
//     total: materials.length,
//     free: materials.filter(m => m.type === "free").length,
//     premium: materials.filter(m => m.type === "premium").length,
//     downloads: materials.reduce((a,m) => a + m.downloads, 0),
//     students: students.length,
//     pending: pendingReqs.length,
//   };

//   const TABS = [
//     { id: "overview",   label: "📊 Overview" },
//     { id: "materials",  label: "📚 Materials" },
//     { id: "requests",   label: `📨 Requests ${stats.pending > 0 ? `(${stats.pending})` : ""}` },
//     { id: "students",   label: "👥 Students" },
//     { id: "categories", label: "🏷️ Categories" },
//   ];

//   return (
//     <div style={{ minHeight: "100vh", background: "#080807", color: C.textPri, fontFamily: "'Georgia', serif" }}>
//       <ToastContainer toasts={toasts} />

//       {/* SIDEBAR */}
//       <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 210, background: C.surface, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", zIndex: 100 }}>
//         <div style={{ padding: "22px 18px", borderBottom: `1px solid ${C.border}` }}>
//           <div style={{ fontSize: 11, color: C.textMut, fontWeight: 700, marginBottom: 3, letterSpacing: 1.5, fontFamily: "system-ui" }}>OYS E-LIBRARY</div>
//           <div style={{ fontSize: 17, fontWeight: 700, color: C.amber }}>Admin Panel</div>
//         </div>
//         <nav style={{ padding: "14px 10px", flex: 1 }}>
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ width: "100%", textAlign: "left", padding: "11px 13px", borderRadius: 9, border: "none", cursor: "pointer", marginBottom: 3, background: activeTab === t.id ? C.amberGlow : "transparent", color: activeTab === t.id ? C.amberHi : C.textSec, fontWeight: activeTab === t.id ? 700 : 400, fontSize: 13, transition: "all 0.18s", borderLeft: `2px solid ${activeTab === t.id ? C.amber : "transparent"}`, fontFamily: "inherit" }}>
//               {t.label}
//             </button>
//           ))}
//         </nav>
//         <div style={{ padding: "14px 10px", borderTop: `1px solid ${C.border}` }}>
//           <button onClick={onBack} style={{ width: "100%", padding: "10px 13px", borderRadius: 9, background: C.roseGlow, border: `1px solid ${C.rose}40`, color: C.roseLt, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Back to Home</button>
//         </div>
//       </div>

//       {/* MAIN */}
//       <div style={{ marginLeft: 210, padding: "28px 30px", opacity: animIn ? 1 : 0, transition: "opacity 0.5s ease" }}>

//         {/* ── OVERVIEW ── */}
//         {activeTab === "overview" && (
//           <div>
//             <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: C.textPri }}>Dashboard Overview</h1>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
//               {[
//                 { label: "Total Materials", value: stats.total,                  icon: "📚", color: C.amber,  glow: C.amberGlow },
//                 { label: "Free Materials",  value: stats.free,                   icon: "🆓", color: C.sage,   glow: C.sageGlow },
//                 { label: "Premium",         value: stats.premium,                icon: "✨", color: C.indigo, glow: C.indigoGlow },
//                 { label: "Total Downloads", value: stats.downloads.toLocaleString(), icon: "⬇️", color: C.rose,   glow: C.roseGlow },
//                 { label: "Students",        value: stats.students,               icon: "👥", color: C.sageLt, glow: C.sageGlow },
//                 { label: "Pending Requests",value: stats.pending,               icon: "⏳", color: C.amberHi,glow: C.amberGlow },
//               ].map((s,i) => (
//                 <div key={i} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, padding: "18px 20px", animation: `cardIn 0.4s ease ${i*0.07}s both` }}>
//                   <div style={{ background: s.glow, borderRadius: 10, padding: "7px 9px", fontSize: 18, display: "inline-block", marginBottom: 10 }}>{s.icon}</div>
//                   <div style={{ fontSize: 26, fontWeight: 800, color: s.color, fontFamily: "system-ui" }}>{s.value}</div>
//                   <div style={{ fontSize: 12, color: C.textMut, marginTop: 3, fontFamily: "system-ui" }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* ANALYTICS CHART */}
//             <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: C.textSec }}>Downloads by Category</h2>
//             <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
//               {Object.entries(CATEGORIES).map(([key, cat]) => {
//                 const count = materials.filter(m => m.category === key).reduce((a,m) => a+m.downloads, 0);
//                 const max   = materials.reduce((a,m) => a+m.downloads, 0);
//                 const pct   = max ? Math.round((count/max)*100) : 0;
//                 return (
//                   <div key={key} style={{ marginBottom: 16 }}>
//                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
//                       <span style={{ color: C.textSec }}>{cat.icon} {cat.label}</span>
//                       <span style={{ color: cat.color, fontWeight: 700, fontFamily: "system-ui" }}>{count.toLocaleString()} downloads ({pct}%)</span>
//                     </div>
//                     <div style={{ height: 8, background: C.border, borderRadius: 8, overflow: "hidden" }}>
//                       <div style={{ width: `${pct}%`, height: "100%", background: cat.color, borderRadius: 8, transition: "width 1.2s ease", transitionDelay: "0.3s" }} />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* RECENT PENDING REQUESTS */}
//             {pendingReqs.length > 0 && (
//               <>
//                 <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: C.textSec }}>⏳ Pending Requests</h2>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                   {pendingReqs.slice(0,3).map(r => (
//                     <div key={r.id} style={{ background: C.surface, border: `1px solid ${C.amberDim}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 16 }}>
//                       <div style={{ flex: 1 }}>
//                         <span style={{ fontWeight: 700, color: C.amber }}>{r.title}</span>
//                         <span style={{ color: C.textMut, fontSize: 12, marginLeft: 10 }}>by {r.studentName}</span>
//                       </div>
//                       <button onClick={() => setActiveTab("requests")} style={{ background: C.amberGlow, border: `1px solid ${C.amberDim}`, color: C.amberHi, borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit" }}>Review →</button>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         )}

//         {/* ── MATERIALS ── */}
//         {activeTab === "materials" && (
//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
//               <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, margin: 0 }}>Manage Materials</h1>
//               <button onClick={() => { setEditItem(null); setShowAdd(true); }} style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>+ Add Material</button>
//             </div>
//             <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
//               <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search materials..."
//                 style={{ flex: 1, minWidth: 200, padding: "9px 14px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, outline: "none", fontFamily: "inherit" }} />
//               <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//                 <option value="all">All Categories</option>
//                 {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
//               </select>
//               <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: "9px 12px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//                 <option value="all">All Types</option>
//                 <option value="free">Free</option>
//                 <option value="premium">Premium</option>
//               </select>
//             </div>
//             <div style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden" }}>
//               <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                   <tr style={{ background: C.bg }}>
//                     {["Material","Category","Sub","Type","Upload","Student","Downloads","Actions"].map(h => (
//                       <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.textMut, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.map((m, i) => {
//                     const cat = CATEGORIES[m.category];
//                     const stu = m.studentId ? students.find(s => s.id === m.studentId) : null;
//                     return (
//                       <tr key={m.id} style={{ borderTop: `1px solid ${C.border}`, animation: `cardIn 0.3s ease ${i*0.03}s both` }}
//                         onMouseEnter={e => e.currentTarget.style.background = C.elevated}
//                         onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
//                         <td style={{ padding: "12px 14px" }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
//                             <span style={{ fontSize: 20 }}>{m.thumb}</span>
//                             <div>
//                               <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{m.title}</div>
//                               <div style={{ fontSize: 11, color: C.textMut }}>{m.pages}p</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td style={{ padding: "12px 14px" }}><span style={{ background: cat.bg, color: cat.color, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
//                         <td style={{ padding: "12px 14px", color: C.textSec, fontSize: 12 }}>{m.sub}</td>
//                         <td style={{ padding: "12px 14px" }}><span style={{ background: m.type === "premium" ? C.amberGlow : C.sageGlow, color: m.type === "premium" ? C.amberHi : C.sageLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600 }}>{m.type === "premium" ? "✨ Premium" : "🆓 Free"}</span></td>
//                         <td style={{ padding: "12px 14px" }}>
//                           {m.uploadType === "pdf"  && <span style={{ background: "#3a1010", color: C.roseLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${C.rose}40` }}>📄 PDF</span>}
//                           {m.uploadType === "link" && <span style={{ background: C.indigoGlow, color: C.indigoLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600 }}>🔗 Link</span>}
//                           {!m.uploadType && <span style={{ color: C.textMut, fontSize: 11 }}>—</span>}
//                         </td>
//                         <td style={{ padding: "12px 14px" }}>
//                           {stu ? <span style={{ background: C.sageGlow, color: C.sageLt, borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 600, border: `1px solid ${C.sageDim}` }}>👤 {stu.name.split(" ")[0]}</span>
//                                : <span style={{ color: C.textMut, fontSize: 11 }}>All</span>}
//                         </td>
//                         <td style={{ padding: "12px 14px", color: C.textSec, fontSize: 12, fontFamily: "system-ui" }}>{m.downloads.toLocaleString()}</td>
//                         <td style={{ padding: "12px 14px" }}>
//                           <div style={{ display: "flex", gap: 5 }}>
//                             <button onClick={() => setPreview(m)} style={{ background: C.indigoGlow, color: C.indigoLt, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>👁</button>
//                             <button onClick={() => { setEditItem(m); setShowAdd(true); }} style={{ background: C.amberGlow, color: C.amberHi, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>✏️</button>
//                             <button onClick={() => setDelConf(m.id)} style={{ background: C.roseGlow, color: C.roseLt, border: "none", borderRadius: 7, padding: "5px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>🗑</button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//               {filtered.length === 0 && <div style={{ textAlign: "center", padding: 40, color: C.textMut }}>No materials found</div>}
//             </div>
//           </div>
//         )}

//         {/* ── REQUESTS ── */}
//         {activeTab === "requests" && (
//           <div>
//             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Material Requests</h1>
//             {requests.length === 0 ? (
//               <div style={{ textAlign: "center", padding: "60px 0", color: C.textMut }}><div style={{ fontSize: 44, marginBottom: 10 }}>📭</div><div>No requests yet</div></div>
//             ) : (
//               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                 {requests.map((r, i) => {
//                   const cat = CATEGORIES[r.category];
//                   const stu = students.find(s => s.id === r.studentId);
//                   return (
//                     <div key={r.id} style={{ background: C.surface, border: `1px solid ${r.status === "pending" ? C.amberDim : r.status === "approved" ? C.sageDim : C.rose+"44"}`, borderRadius: 14, padding: "18px 22px", animation: `cardIn 0.35s ease ${i*0.05}s both` }}>
//                       <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
//                         <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 13, flexShrink: 0, fontFamily: "system-ui" }}>{stu?.avatar || "??"}</div>
//                         <div style={{ flex: 1 }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
//                             <span style={{ fontWeight: 700, fontSize: 15, color: C.textPri }}>{r.title}</span>
//                             <span style={{ background: cat.bg, color: cat.color, borderRadius: 5, padding: "1px 8px", fontSize: 11, fontWeight: 600, border: `1px solid ${cat.border}` }}>{cat.icon} {r.sub}</span>
//                           </div>
//                           <div style={{ fontSize: 12, color: C.textSec, marginBottom: 6 }}>
//                             By <strong style={{ color: C.textPri }}>{r.studentName}</strong> · {r.date}
//                             {stu && <span style={{ marginLeft: 8, color: C.textMut }}>({stu.email})</span>}
//                           </div>
//                           <div style={{ fontSize: 12, color: C.textMut, fontStyle: "italic", background: C.elevated, padding: "8px 12px", borderRadius: 8, borderLeft: `3px solid ${C.amberDim}` }}>"{r.reason}"</div>
//                         </div>
//                         <div style={{ textAlign: "right", flexShrink: 0 }}>
//                           {r.status === "pending" ? (
//                             <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
//                               <button onClick={() => approveRequest(r, true)} style={{ background: C.sageGlow, color: C.sageLt, border: `1px solid ${C.sageDim}`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit", whiteSpace: "nowrap" }}>✅ Approve for {r.studentName.split(" ")[0]} only</button>
//                               <button onClick={() => approveRequest(r, false)} style={{ background: C.amberGlow, color: C.amberHi, border: `1px solid ${C.amberDim}`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "inherit", whiteSpace: "nowrap" }}>🌐 Approve for All Students</button>
//                               <button onClick={() => rejectRequest(r.id)} style={{ background: C.roseGlow, color: C.roseLt, border: `1px solid ${C.rose}44`, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>❌ Reject</button>
//                             </div>
//                           ) : (
//                             <div style={{ display: "inline-block", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, background: r.status === "approved" ? C.sageGlow : C.roseGlow, color: r.status === "approved" ? C.sageLt : C.roseLt, border: `1px solid ${r.status === "approved" ? C.sageDim : C.rose+"44"}` }}>
//                               {r.status === "approved" ? "✅ Approved" : "❌ Rejected"}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         )}

//         {/* ── STUDENTS ── */}
//         {activeTab === "students" && !selectedStudent && (
//           <div>
//             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Student Management</h1>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 16 }}>
//               {students.map((s, i) => {
//                 const stuMats   = materials.filter(m => m.studentId === s.id);
//                 const stuReqs   = requests.filter(r => r.studentId === s.id);
//                 const stuPending= stuReqs.filter(r => r.status === "pending").length;
//                 return (
//                   <div key={s.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 22px", animation: `cardIn 0.35s ease ${i*0.07}s both`, cursor: "pointer", transition: "border-color 0.2s" }}
//                     onMouseEnter={e => e.currentTarget.style.borderColor = C.amber}
//                     onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
//                     onClick={() => setSelStu(s)}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
//                       <div style={{ width: 46, height: 46, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: "system-ui" }}>{s.avatar}</div>
//                       <div>
//                         <div style={{ fontWeight: 700, fontSize: 15, color: C.textPri }}>{s.name}</div>
//                         <div style={{ fontSize: 12, color: C.textSec }}>{s.email}</div>
//                       </div>
//                     </div>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
//                       {[["📚", stuMats.length, "Personal Mats"], ["✅", s.completed, "Completed"], ["📨", stuReqs.length, "Requests"]].map(([icon, val, lbl]) => (
//                         <div key={lbl} style={{ background: C.elevated, borderRadius: 9, padding: "10px 0", textAlign: "center", border: `1px solid ${C.border}` }}>
//                           <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
//                           <div style={{ fontSize: 18, fontWeight: 800, color: C.amber, fontFamily: "system-ui" }}>{val}</div>
//                           <div style={{ fontSize: 10, color: C.textMut, fontFamily: "system-ui" }}>{lbl}</div>
//                         </div>
//                       ))}
//                     </div>
//                     {stuPending > 0 && <div style={{ marginTop: 12, background: C.amberGlow, border: `1px solid ${C.amberDim}`, borderRadius: 8, padding: "7px 12px", fontSize: 12, color: C.amberHi, fontWeight: 600 }}>⏳ {stuPending} pending request{stuPending > 1 ? "s" : ""}</div>}
//                     <div style={{ marginTop: 10, fontSize: 11, color: C.textMut }}>Joined: {s.joined}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* STUDENT DETAIL PAGE */}
//         {activeTab === "students" && selectedStudent && (
//           <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={() => setSelStu(null)} onApprove={approveRequest} onReject={rejectRequest} toast={toast} />
//         )}

//         {/* ── CATEGORIES ── */}
//         {activeTab === "categories" && (
//           <div>
//             <h1 style={{ fontSize: 22, fontWeight: 700, color: C.textPri, marginBottom: 22 }}>Category Management</h1>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
//               {Object.entries(CATEGORIES).map(([key, cat]) => (
//                 <div key={key} style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden" }}>
//                   <div style={{ background: `${cat.color}22`, borderBottom: `1px solid ${cat.border}`, padding: "18px 20px", display: "flex", alignItems: "center", gap: 10 }}>
//                     <span style={{ fontSize: 28 }}>{cat.icon}</span>
//                     <div>
//                       <div style={{ color: cat.color, fontWeight: 700, fontSize: 15 }}>{cat.label}</div>
//                       <div style={{ color: C.textSec, fontSize: 12 }}>{materials.filter(m => m.category === key).length} materials</div>
//                     </div>
//                   </div>
//                   <div style={{ padding: 16 }}>
//                     <div style={{ fontSize: 11, color: C.textMut, fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Sub-categories</div>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
//                       {cat.sub.map(s => <span key={s} style={{ background: C.elevated, color: C.textSec, borderRadius: 6, padding: "4px 10px", fontSize: 12, border: `1px solid ${C.border}` }}>{s}</span>)}
//                     </div>
//                     <button onClick={() => toast(`${cat.label} updated`, "info")} style={{ width: "100%", background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.border}`, borderRadius: 8, padding: "8px 0", cursor: "pointer", fontWeight: 600, fontSize: 12, fontFamily: "inherit" }}>+ Add Sub-category</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showAddModal && <AddMaterialModal item={editItem} students={students} onClose={() => { setShowAdd(false); setEditItem(null); }} onSave={handleSave} />}
//       {previewItem && <PreviewModal item={previewItem} students={students} onClose={() => setPreview(null)} />}
//       {deleteConfirm && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000 }}>
//           <div style={{ background: C.surface, borderRadius: 14, padding: 28, maxWidth: 340, width: "90%", border: `1px solid ${C.rose}44`, textAlign: "center" }}>
//             <div style={{ fontSize: 36, marginBottom: 10 }}>⚠️</div>
//             <h3 style={{ color: C.textPri, marginBottom: 8, fontWeight: 700 }}>Delete Material?</h3>
//             <p style={{ color: C.textSec, fontSize: 13, marginBottom: 22 }}>This action cannot be undone.</p>
//             <div style={{ display: "flex", gap: 10 }}>
//               <button onClick={() => setDelConf(null)} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 11, cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>Cancel</button>
//               <button onClick={() => handleDelete(deleteConfirm)} style={{ flex: 1, background: C.rose, color: "#fff", border: "none", borderRadius: 9, padding: 11, cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`@keyframes cardIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }`}</style>
//     </div>
//   );
// }

// function StudentDetail({ student: s, materials, requests, onBack, onApprove, onReject, toast }) {
//   const stuMats = materials.filter(m => m.studentId === s.id);
//   const stuReqs = requests.filter(r => r.studentId === s.id);
//   return (
//     <div>
//       <button onClick={onBack} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, marginBottom: 20, fontFamily: "inherit" }}>← All Students</button>
//       <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 24px" }}>
//         <div style={{ width: 58, height: 58, borderRadius: "50%", background: C.amberGlow, border: `1px solid ${C.amberDim}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber, fontWeight: 700, fontSize: 18, fontFamily: "system-ui" }}>{s.avatar}</div>
//         <div>
//           <h2 style={{ margin: 0, color: C.textPri, fontSize: 20, fontWeight: 700 }}>{s.name}</h2>
//           <div style={{ color: C.textSec, fontSize: 13 }}>{s.email} · Joined {s.joined}</div>
//         </div>
//         <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
//           {[["✅", s.completed, "Completed"],["📚", stuMats.length, "Personal"],["📨", stuReqs.length, "Requests"]].map(([icon, val, lbl]) => (
//             <div key={lbl} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 16px", textAlign: "center" }}>
//               <div style={{ fontSize: 18 }}>{icon}</div>
//               <div style={{ fontSize: 20, fontWeight: 800, color: C.amber, fontFamily: "system-ui" }}>{val}</div>
//               <div style={{ fontSize: 11, color: C.textMut, fontFamily: "system-ui" }}>{lbl}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//         <div>
//           <h3 style={{ color: C.textSec, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>⭐ Personal Materials ({stuMats.length})</h3>
//           {stuMats.length === 0 ? <div style={{ color: C.textMut, fontSize: 13, padding: "20px 0" }}>No personal materials yet</div> : stuMats.map(m => (
//             <div key={m.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
//               <span style={{ fontSize: 22 }}>{m.thumb}</span>
//               <div style={{ flex: 1 }}>
//                 <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri }}>{m.title}</div>
//                 <div style={{ fontSize: 11, color: C.textSec }}>{m.sub} · {m.type}</div>
//               </div>
//               {m.uploadType && <span style={{ fontSize: 10, background: C.elevated, color: C.textSec, borderRadius: 5, padding: "2px 6px" }}>{m.uploadType === "pdf" ? "📄" : "🔗"}</span>}
//             </div>
//           ))}
//         </div>
//         <div>
//           <h3 style={{ color: C.textSec, fontSize: 14, fontWeight: 600, marginBottom: 12 }}>📨 Requests ({stuReqs.length})</h3>
//           {stuReqs.length === 0 ? <div style={{ color: C.textMut, fontSize: 13, padding: "20px 0" }}>No requests yet</div> : stuReqs.map(r => (
//             <div key={r.id} style={{ background: C.surface, border: `1px solid ${r.status === "pending" ? C.amberDim : r.status === "approved" ? C.sageDim : C.rose+"44"}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8 }}>
//               <div style={{ fontWeight: 600, fontSize: 13, color: C.textPri, marginBottom: 4 }}>{r.title}</div>
//               <div style={{ fontSize: 11, color: C.textMut, fontStyle: "italic", marginBottom: 8 }}>"{r.reason}"</div>
//               {r.status === "pending" ? (
//                 <div style={{ display: "flex", gap: 6 }}>
//                   <button onClick={() => { onApprove(r, true); toast(`Approved for ${s.name}`, "success"); }} style={{ flex: 1, background: C.sageGlow, color: C.sageLt, border: `1px solid ${C.sageDim}`, borderRadius: 7, padding: "6px 0", cursor: "pointer", fontSize: 11, fontWeight: 700, fontFamily: "inherit" }}>✅ Approve (Personal)</button>
//                   <button onClick={() => { onReject(r.id); }} style={{ background: C.roseGlow, color: C.roseLt, border: `1px solid ${C.rose}44`, borderRadius: 7, padding: "6px 10px", cursor: "pointer", fontSize: 11, fontFamily: "inherit" }}>✕</button>
//                 </div>
//               ) : (
//                 <span style={{ fontSize: 11, fontWeight: 700, color: r.status === "approved" ? C.sageLt : C.roseLt }}>{r.status === "approved" ? "✅ Approved" : "❌ Rejected"}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AddMaterialModal({ item, students, onClose, onSave }) {
//   const [form, setForm] = useState({
//     title:      item?.title      || "",
//     category:   item?.category   || "private",
//     sub:        item?.sub        || "IT",
//     type:       item?.type       || "free",
//     pages:      item?.pages      || "",
//     topics:     item?.topics     || "",
//     thumb:      item?.thumb      || "📄",
//     uploadType: item?.uploadType || "",
//     fileLink:   item?.fileLink   || "",
//     studentId:  item?.studentId  || "",
//   });
//   const set = (k,v) => setForm(p => ({ ...p, [k]: v }));
//   const EMOJIS = ["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
//       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 540, width: "100%", border: `1px solid ${C.border}`, maxHeight: "90vh", overflow: "auto" }}>
//         <div style={{ padding: "20px 26px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h2 style={{ margin: 0, color: C.amber, fontSize: 16, fontWeight: 700 }}>{item ? "✏️ Edit Material" : "➕ Add New Material"}</h2>
//           <button onClick={onClose} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 7, padding: "5px 9px", cursor: "pointer" }}>✕</button>
//         </div>
//         <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
//           {[{ label: "Title", key: "title", type: "text", ph: "e.g. Java Programming" }, { label: "Pages", key: "pages", type: "number", ph: "e.g. 340" }, { label: "Topics", key: "topics", type: "number", ph: "e.g. 12" }].map(f => (
//             <div key={f.key}>
//               <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{f.label}</label>
//               <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} type={f.type} placeholder={f.ph}
//                 style={{ width: "100%", padding: "10px 13px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
//             </div>
//           ))}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//             {[["Category","category", Object.entries(CATEGORIES).map(([k,v]) => [k,v.label])],
//               ["Type","type", [["free","Free"],["premium","Premium"]]]
//             ].map(([label, key, opts]) => (
//               <div key={key}>
//                 <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>{label}</label>
//                 <select value={form[key]} onChange={e => { set(key, e.target.value); if (key === "category") set("sub", CATEGORIES[e.target.value].sub[0]); }} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//                   {opts.map(([v,l]) => <option key={v} value={v}>{l}</option>)}
//                 </select>
//               </div>
//             ))}
//           </div>
//           <div>
//             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Sub-category</label>
//             <select value={form.sub} onChange={e => set("sub", e.target.value)} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//               {CATEGORIES[form.category].sub.map(s => <option key={s} value={s}>{s}</option>)}
//             </select>
//           </div>

//           {/* UPLOAD TYPE */}
//           <div>
//             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Content Type</label>
//             <div style={{ display: "flex", gap: 8, marginBottom: form.uploadType ? 10 : 0 }}>
//               {[["","📁 None"], ["pdf","📄 PDF Link"], ["link","🔗 Web Link"]].map(([v,l]) => (
//                 <button key={v} onClick={() => set("uploadType", v)} style={{ flex: 1, background: form.uploadType === v ? C.amberGlow : C.elevated, color: form.uploadType === v ? C.amberHi : C.textSec, border: `1px solid ${form.uploadType === v ? C.amberDim : C.border}`, borderRadius: 8, padding: "8px 0", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>{l}</button>
//               ))}
//             </div>
//             {form.uploadType && (
//               <input value={form.fileLink} onChange={e => set("fileLink", e.target.value)}
//                 placeholder={form.uploadType === "pdf" ? "https://example.com/file.pdf" : "https://example.com/resource"}
//                 style={{ width: "100%", padding: "10px 13px", borderRadius: 9, border: `1px solid ${C.amberDim}`, background: C.elevated, color: C.textPri, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
//             )}
//           </div>

//           {/* ASSIGN TO STUDENT */}
//           <div>
//             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Assign to Student (optional)</label>
//             <select value={form.studentId} onChange={e => set("studentId", e.target.value)} style={{ width: "100%", padding: "10px 11px", borderRadius: 9, border: `1px solid ${C.border}`, background: C.elevated, color: C.textPri, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
//               <option value="">All Students (Public)</option>
//               {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
//             </select>
//           </div>

//           {/* EMOJI PICKER */}
//           <div>
//             <label style={{ fontSize: 11, fontWeight: 700, color: C.textSec, display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "system-ui" }}>Thumbnail Icon</label>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//               {EMOJIS.map(e => (
//                 <button key={e} onClick={() => set("thumb", e)} style={{ width: 38, height: 38, fontSize: 18, borderRadius: 7, border: `1.5px solid ${form.thumb === e ? C.amber : C.border}`, background: form.thumb === e ? C.amberGlow : C.elevated, cursor: "pointer" }}>{e}</button>
//               ))}
//             </div>
//           </div>

//           <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
//             <button onClick={onClose} style={{ flex: 1, background: C.elevated, color: C.textSec, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 600, fontFamily: "inherit" }}>Cancel</button>
//             <button onClick={() => onSave(form)} style={{ flex: 2, background: C.amber, color: C.bg, border: "none", borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 700, fontFamily: "inherit", fontSize: 14 }}>{item ? "💾 Update" : "✅ Add Material"}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PreviewModal({ item: m, students, onClose }) {
//   const cat = CATEGORIES[m.category];
//   const stu = m.studentId ? students.find(s => s.id === m.studentId) : null;
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9000, padding: 20 }}>
//       <div style={{ background: C.surface, borderRadius: 18, maxWidth: 460, width: "100%", border: `1px solid ${C.border}` }}>
//         <div style={{ background: cat.bg, padding: "24px 24px 18px", borderRadius: "18px 18px 0 0", borderBottom: `1px solid ${cat.border}`, textAlign: "center" }}>
//           <div style={{ fontSize: 52, marginBottom: 8 }}>{m.thumb}</div>
//           <h2 style={{ color: cat.color, margin: "0 0 4px", fontSize: 18, fontWeight: 700 }}>{m.title}</h2>
//           <div style={{ color: C.textSec, fontSize: 12 }}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
//         </div>
//         <div style={{ padding: 22 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
//             {[["Category", cat.label], ["Type", m.type], ["Downloads", m.downloads.toLocaleString()], ["Progress", `${m.progress}%`], ["Upload", m.uploadType || "None"], ["Assigned To", stu?.name || "All Students"]].map(([k,v]) => (
//               <div key={k} style={{ background: C.elevated, borderRadius: 9, padding: "10px 13px" }}>
//                 <div style={{ fontSize: 10, color: C.textMut, fontWeight: 700, textTransform: "uppercase", marginBottom: 3, fontFamily: "system-ui" }}>{k}</div>
//                 <div style={{ fontSize: 14, color: C.textPri, fontWeight: 600 }}>{v}</div>
//               </div>
//             ))}
//           </div>
//           {m.fileLink && <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 9, padding: "10px 13px", marginBottom: 14 }}>
//             <div style={{ fontSize: 10, color: C.textMut, fontWeight: 700, textTransform: "uppercase", marginBottom: 3 }}>File Link</div>
//             <div style={{ fontSize: 12, color: C.indigoLt, wordBreak: "break-all" }}>{m.fileLink}</div>
//           </div>}
//           <button onClick={onClose} style={{ width: "100%", background: C.elevated, color: C.textPri, border: `1px solid ${C.border}`, borderRadius: 9, padding: 12, cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── HOME ─────────────────────────────────────────────────────────────────────
// export default function App() {
//   const [screen, setScreen] = useState("home");
//   const [animIn, setAnimIn] = useState(false);
//   useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

//   if (screen === "student") return <StudentDashboard onBack={() => setScreen("home")} />;
//   if (screen === "admin")   return <AdminDashboard   onBack={() => setScreen("home")} />;

//   return (
//     <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", position: "relative", overflow: "hidden" }}>
//       {/* AMBIENT ORBS */}
//       <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.amberGlow} 0%, transparent 68%)`, top: "5%", left: "5%", animation: "orb 7s ease-in-out infinite" }} />
//       <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${C.sageGlow} 0%, transparent 70%)`, bottom: "10%", right: "8%", animation: "orb 7s ease-in-out infinite 3s" }} />
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

//       <div style={{ textAlign: "center", zIndex: 1, opacity: animIn ? 1 : 0, transform: animIn ? "scale(1)" : "scale(0.92)", transition: "all 0.6s cubic-bezier(.4,0,.2,1)" }}>
//         <div style={{ fontSize: 72, marginBottom: 16, animation: "float 3.5s ease-in-out infinite" }}>📚</div>
//         <div style={{ fontSize: 11, letterSpacing: 4, color: C.amberDim, marginBottom: 8, textTransform: "uppercase", fontFamily: "system-ui", fontWeight: 700 }}>One Year Series</div>
//         <h1 style={{ fontSize: 48, fontWeight: 700, color: C.textPri, margin: "0 0 6px", letterSpacing: -1.5, lineHeight: 1.1 }}>
//           <span style={{ color: C.amber }}>OYS</span> E-Library
//         </h1>
//         <p style={{ color: C.textSec, fontSize: 16, marginBottom: 48, maxWidth: 400, lineHeight: 1.6 }}>
//           Your complete digital learning hub — study materials, mock tests & progress tracking
//         </p>

//         <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
//           <button onClick={() => setScreen("student")}
//             style={{ background: C.amber, color: C.bg, border: "none", borderRadius: 14, padding: "20px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit", boxShadow: `0 8px 30px ${C.amberDim}` }}
//             onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = `0 14px 40px ${C.amberDim}`; }}
//             onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 8px 30px ${C.amberDim}`; }}>
//             🎓 Student Dashboard
//           </button>
//           <button onClick={() => setScreen("admin")}
//             style={{ background: "transparent", color: C.textPri, border: `1px solid ${C.borderHi}`, borderRadius: 14, padding: "20px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit" }}
//             onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.borderColor = C.amber; e.target.style.color = C.amberHi; }}
//             onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.borderColor = C.borderHi; e.target.style.color = C.textPri; }}>
//             ⚙️ Admin & Backend
//           </button>
//         </div>

//         <div style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 48, color: C.textMut, fontSize: 13, fontFamily: "system-ui" }}>
//           {["15 Materials", "3 Categories", "Premium Unlock", "Request System"].map((f,i) => (
//             <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
//               <span style={{ color: C.sage }}>✓</span> {f}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes orb { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
//         @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//       `}</style>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";

// ─── PALETTE: Clean Light Theme ───────────────────────────────────────────────
const C = {
  bg:         "#f0f4f8",
  surface:    "#ffffff",
  elevated:   "#f8fafc",
  border:     "#e2e8f0",
  borderHi:   "#cbd5e1",
  amber:      "#f59e0b",
  amberHi:    "#fbbf24",
  amberDim:   "#d97706",
  amberGlow:  "rgba(245,158,11,0.12)",
  sage:       "#10b981",
  sageLt:     "#34d399",
  sageDim:    "#059669",
  sageGlow:   "rgba(16,185,129,0.12)",
  rose:       "#ef4444",
  roseLt:     "#f87171",
  roseGlow:   "rgba(239,68,68,0.10)",
  indigo:     "#6366f1",
  indigoLt:   "#818cf8",
  indigoGlow: "rgba(99,102,241,0.12)",
  blue:       "#3b82f6",
  blueGlow:   "rgba(59,130,246,0.12)",
  textPri:    "#0f172a",
  textSec:    "#475569",
  textMut:    "#94a3b8",
  shadow:     "0 4px 24px rgba(15,23,42,0.08)",
  shadowLg:   "0 12px 48px rgba(15,23,42,0.14)",
};

// ─── REAL THUMBNAIL IMAGES ────────────────────────────────────────────────────
const THUMB_IMAGES = {
  1:  "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  2:  "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
  3:  "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
  4:  "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
  5:  "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  6:  "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
  7:  "https://cdn-icons-png.flaticon.com/512/3281/3281295.png",
  8:  "https://cdn-icons-png.flaticon.com/512/3132/3132004.png",
  9:  "https://cdn-icons-png.flaticon.com/512/3953/3953227.png",
  10: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  11: "https://cdn-icons-png.flaticon.com/512/3225/3225194.png",
  12: "https://cdn-icons-png.flaticon.com/512/3281/3281306.png",
  13: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  14: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
  15: "https://cdn-icons-png.flaticon.com/512/2965/2965967.png",
};

// ─── CRASH COURSE & E-PREP CONTENT ───────────────────────────────────────────
const CRASH_COURSES = {
  1:  { title: "Java Crash Course", url: "https://www.youtube.com/results?search_query=java+crash+course", color: "#ef4444" },
  2:  { title: "Banking Crash Course", url: "https://www.youtube.com/results?search_query=banking+fundamentals+crash+course", color: "#f59e0b" },
  3:  { title: "DSA Crash Course", url: "https://www.youtube.com/results?search_query=data+structures+algorithms+crash+course", color: "#10b981" },
  4:  { title: "UPSC History Crash", url: "https://www.youtube.com/results?search_query=upsc+history+crash+course", color: "#6366f1" },
  5:  { title: "SSC Math Crash", url: "https://www.youtube.com/results?search_query=ssc+mathematics+crash+course", color: "#3b82f6" },
  6:  { title: "IBPS PO Crash", url: "https://www.youtube.com/results?search_query=ibps+po+crash+course", color: "#f59e0b" },
  7:  { title: "CAT Verbal Crash", url: "https://www.youtube.com/results?search_query=cat+verbal+ability+crash+course", color: "#8b5cf6" },
  8:  { title: "GRE Vocab Crash", url: "https://www.youtube.com/results?search_query=gre+vocabulary+crash+course", color: "#ec4899" },
  9:  { title: "Agri Science Crash", url: "https://www.youtube.com/results?search_query=agricultural+science+crash+course", color: "#10b981" },
  10: { title: "Python Crash Course", url: "https://www.youtube.com/results?search_query=python+crash+course+beginners", color: "#3b82f6" },
  11: { title: "RRB Crash Course", url: "https://www.youtube.com/results?search_query=railway+rrb+crash+course", color: "#f59e0b" },
  12: { title: "MBA Case Crash", url: "https://www.youtube.com/results?search_query=mba+case+studies+crash+course", color: "#6366f1" },
  13: { title: "Digital Mktg Crash", url: "https://www.youtube.com/results?search_query=digital+marketing+crash+course", color: "#ef4444" },
  14: { title: "Research Crash", url: "https://www.youtube.com/results?search_query=research+methodology+crash+course", color: "#10b981" },
  15: { title: "NDA Crash Course", url: "https://www.youtube.com/results?search_query=nda+defence+crash+course", color: "#6366f1" },
};

const EPREP_LINKS = {
  1:  "https://www.javatpoint.com/java-quiz",
  2:  "https://www.bankersadda.com/quiz",
  3:  "https://www.geeksforgeeks.org/data-structure-gq/",
  4:  "https://www.drishtiias.com/quiz",
  5:  "https://www.sscadda.com/quiz",
  6:  "https://www.ibpsonline.in/quiz",
  7:  "https://www.indiabix.com/verbal-ability/questions-and-answers/",
  8:  "https://www.majortests.com/gre/",
  9:  "https://www.agriculturalquiz.com",
  10: "https://www.w3schools.com/python/exercise.asp",
  11: "https://www.railwayrecruitment.org/quiz",
  12: "https://www.mba.com/practice-tests",
  13: "https://www.hubspot.com/marketing-certification",
  14: "https://www.researchmethodologyquiz.com",
  15: "https://www.nda.nic.in/preparation",
};

const CATEGORIES = {
  private: {
    label: "Private Sector",
    icon: "🏢",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
    gradient: "linear-gradient(135deg,#fef3c7,#fde68a)",
  },
  government: {
    label: "Government Exams",
    icon: "🏛️",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
    gradient: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
  },
  higher: {
    label: "Higher Education",
    icon: "🎓",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.25)",
    gradient: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
  },
};

const CATEGORY_SUBS = {
  private: ["IT", "Banking", "Healthcare", "Marketing", "Finance", "Consulting"],
  government: ["UPSC", "SSC", "Banking (Govt)", "Railways", "Defence", "State PSC"],
  higher: ["GATE", "CAT/MBA", "GRE/GMAT", "Study Abroad", "Research", "PhD"],
};

const INIT_STUDENTS = [
  { id: "s1", name: "Arjun Sharma", email: "arjun@email.com", joined: "2024-01-15", completed: 3, avatar: "AS" },
  { id: "s2", name: "Priya Reddy",  email: "priya@email.com",  joined: "2024-02-20", completed: 1, avatar: "PR" },
  { id: "s3", name: "Rahul Gupta",  email: "rahul@email.com",  joined: "2024-03-10", completed: 0, avatar: "RG" },
];

const ALL_MATERIALS = [
  { id: 1,  title: "Java Programming",       category: "private",    sub: "IT",            type: "free",    emoji:"☕", topics: 12, progress: 70, pages: 340, downloads: 1240, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 2,  title: "Banking Fundamentals",   category: "private",    sub: "Banking",       type: "free",    emoji:"🏦", topics: 8,  progress: 50, pages: 210, downloads: 980,  bookmarked: true,  studentId: null, uploadType: null, fileLink: "" },
  { id: 3,  title: "Data Structures & Algo", category: "private",    sub: "IT",            type: "premium", emoji:"🌲", topics: 15, progress: 30, pages: 480, downloads: 2100, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/dsa.pdf" },
  { id: 4,  title: "UPSC History Notes",     category: "government", sub: "UPSC",          type: "free",    emoji:"📜", topics: 20, progress: 60, pages: 600, downloads: 3400, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 5,  title: "SSC Mathematics",        category: "government", sub: "SSC",           type: "free",    emoji:"📐", topics: 10, progress: 0,  pages: 280, downloads: 1800, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 6,  title: "IBPS PO Guide",          category: "government", sub: "Banking (Govt)",type: "premium", emoji:"🏧", topics: 14, progress: 0,  pages: 390, downloads: 2200, bookmarked: true,  studentId: null, uploadType: "link", fileLink: "https://ibps.in/study-material" },
  { id: 7,  title: "CAT Verbal Ability",     category: "higher",     sub: "CAT/MBA",       type: "premium", emoji:"📝", topics: 9,  progress: 20, pages: 240, downloads: 760,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 8,  title: "GRE Vocabulary",         category: "higher",     sub: "GRE/GMAT",      type: "free",    emoji:"🔤", topics: 6,  progress: 40, pages: 180, downloads: 540,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 9,  title: "Agricultural Science",   category: "government", sub: "State PSC",     type: "free",    emoji:"🌾", topics: 11, progress: 0,  pages: 320, downloads: 890,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 10, title: "Python for Beginners",   category: "private",    sub: "IT",            type: "free",    emoji:"🐍", topics: 10, progress: 85, pages: 290, downloads: 3100, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 11, title: "Railway RRB Guide",      category: "government", sub: "Railways",      type: "premium", emoji:"🚂", topics: 13, progress: 0,  pages: 410, downloads: 1650, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/rrb.pdf" },
  { id: 12, title: "MBA Case Studies",       category: "higher",     sub: "CAT/MBA",       type: "premium", emoji:"💼", topics: 8,  progress: 0,  pages: 200, downloads: 430,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 13, title: "Digital Marketing",      category: "private",    sub: "Marketing",     type: "free",    emoji:"📊", topics: 7,  progress: 55, pages: 190, downloads: 670,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 14, title: "Research Methodology",   category: "higher",     sub: "Research",      type: "free",    emoji:"🔬", topics: 5,  progress: 10, pages: 160, downloads: 310,  bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
  { id: 15, title: "Defence NDA Prep",       category: "government", sub: "Defence",       type: "premium", emoji:"⚔️", topics: 16, progress: 0,  pages: 500, downloads: 1200, bookmarked: false, studentId: null, uploadType: null, fileLink: "" },
];

const JAVA_TOPICS = [
  { id: 1,  title: "Introduction to Java",        done: true,  pages: 28 },
  { id: 2,  title: "OOP Concepts",                done: true,  pages: 45 },
  { id: 3,  title: "Classes & Objects",           done: true,  pages: 35 },
  { id: 4,  title: "Inheritance & Polymorphism",  done: false, pages: 52 },
  { id: 5,  title: "Exception Handling",          done: false, pages: 30 },
  { id: 6,  title: "Collections Framework",       done: false, pages: 60 },
  { id: 7,  title: "Multithreading",              done: false, pages: 40 },
  { id: 8,  title: "File I/O",                    done: false, pages: 25 },
  { id: 9,  title: "JDBC & Databases",            done: false, pages: 38 },
  { id: 10, title: "Spring Boot Basics",          done: false, pages: 55 },
  { id: 11, title: "REST APIs with Java",         done: false, pages: 48 },
  { id: 12, title: "Java 17+ Features",           done: false, pages: 32 },
];

let _globalRequests = [
  { id: "r1", studentId: "s1", studentName: "Arjun Sharma", title: "AI & Machine Learning 2025", category: "private", sub: "IT", reason: "Need latest trending AI material for interviews", status: "pending", date: "2024-12-01" },
  { id: "r2", studentId: "s2", studentName: "Priya Reddy",  title: "UPSC Ethics GS4 Deep Dive", category: "government", sub: "UPSC", reason: "Comprehensive ethics module not available anywhere", status: "pending", date: "2024-12-05" },
];
let _globalMaterials = ALL_MATERIALS.map(m => ({ ...m }));
let _globalStudents  = INIT_STUDENTS.map(s => ({ ...s }));

// ─── TOAST ────────────────────────────────────────────────────────────────────
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (msg, type = "success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  };
  return { toasts, add };
}

function ToastContainer({ toasts }) {
  const cfg = {
    success: { bg: "#f0fdf4", border: "#86efac", text: "#166534", icon: "✅" },
    warn:    { bg: "#fffbeb", border: "#fcd34d", text: "#92400e", icon: "⚠️" },
    error:   { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b", icon: "❌" },
    info:    { bg: "#eff6ff", border: "#93c5fd", text: "#1e40af", icon: "ℹ️" },
  };
  return (
    <div style={{ position:"fixed", top:20, right:20, zIndex:99999, display:"flex", flexDirection:"column", gap:10 }}>
      {toasts.map(t => {
        const s = cfg[t.type] || cfg.info;
        return (
          <div key={t.id} style={{
            background:s.bg, border:`1.5px solid ${s.border}`, color:s.text,
            borderRadius:14, padding:"13px 18px", fontSize:13, fontWeight:600,
            maxWidth:360, boxShadow:"0 8px 32px rgba(0,0,0,0.12)",
            animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)",
            display:"flex", alignItems:"center", gap:10,
          }}>
            <span style={{fontSize:16}}>{s.icon}</span>{t.msg}
          </div>
        );
      })}
      <style>{`@keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}`}</style>
    </div>
  );
}

// ─── PROGRESS RING ─────────────────────────────────────────────────────────────
function Ring({ pct, size=48, stroke=4, color=C.amber }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ}
        style={{transition:"stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)", strokeLinecap:"round"}}/>
      <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
        style={{transform:`rotate(90deg) translate(0,-${size}px)`,fontSize:11,fontWeight:700,transformOrigin:`${size/2}px ${size/2}px`}}>
        {pct}%
      </text>
    </svg>
  );
}

// ─── MATERIAL THUMBNAIL ───────────────────────────────────────────────────────
function MatThumb({ m, size=80 }) {
  const [err, setErr] = useState(false);
  const cat = CATEGORIES[m.category];
  if (!err && THUMB_IMAGES[m.id]) {
    return (
      <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
        <img src={THUMB_IMAGES[m.id]} alt={m.title} onError={()=>setErr(true)}
          style={{width:size*0.75,height:size*0.75,objectFit:"contain",transition:"transform 0.3s ease"}}/>
      </div>
    );
  }
  return (
    <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.45,flexShrink:0}}>
      {m.emoji}
    </div>
  );
}

// ─── PREMIUM UNLOCK BANNER ────────────────────────────────────────────────────
function PremiumBanner({ completedCount, premiumMaterials, onOpen }) {
  const unlocked = completedCount >= 3;
  const needed = 3 - completedCount;
  return (
    <div style={{
      background: unlocked
        ? "linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)"
        : "linear-gradient(135deg,#f1f5f9,#e2e8f0)",
      border: `2px solid ${unlocked ? "#f59e0b" : C.border}`,
      borderRadius: 20,
      padding: "24px 28px",
      marginBottom: 28,
      position: "relative",
      overflow: "hidden",
      animation: "slideDown 0.5s ease",
    }}>
      {/* shimmer */}
      {unlocked && <div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)",animation:"shimmer 2.5s infinite"}}/>}
      <div style={{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",position:"relative"}}>
        <div style={{fontSize:48,animation:unlocked?"bounce 1s ease infinite":"none"}}>
          {unlocked ? "🔓" : "🔒"}
        </div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:18,color:unlocked?"#92400e":C.textSec,marginBottom:4}}>
            {unlocked ? "✨ Premium Unlocked! You've completed 3 materials" : `${needed} more material${needed>1?"s":""} to unlock Premium`}
          </div>
          <div style={{fontSize:13,color:unlocked?"#b45309":C.textMut}}>
            {unlocked
              ? `${premiumMaterials.length} premium materials now available — click any to open!`
              : `Complete ${needed} more free material${needed>1?"s":""} to get access to all premium content`}
          </div>
          {!unlocked && (
            <div style={{marginTop:10,background:"#e2e8f0",borderRadius:10,height:8,overflow:"hidden",maxWidth:300}}>
              <div style={{width:`${(completedCount/3)*100}%`,height:"100%",background:"linear-gradient(90deg,#f59e0b,#fbbf24)",borderRadius:10,transition:"width 1s ease"}}/>
            </div>
          )}
        </div>
        {unlocked && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
            {premiumMaterials.slice(0,3).map(m=>(
              <button key={m.id} onClick={()=>onOpen(m)} style={{
                background:"rgba(255,255,255,0.7)",border:"1.5px solid #f59e0b",borderRadius:12,
                padding:"10px 12px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",
                backdropFilter:"blur(8px)",
              }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.95)";e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.7)";e.currentTarget.style.transform="translateY(0)";}}>
                <MatThumb m={m} size={40}/>
                <div style={{fontSize:10,fontWeight:700,color:"#92400e",marginTop:6,lineHeight:1.2}}>{m.title}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
const CURRENT_STUDENT = { id: "s1", name: "Arjun Sharma" };

function StudentDashboard({ onBack }) {
  const [materials, setMaterials]       = useState(() => _globalMaterials.filter(m => m.studentId === null || m.studentId === CURRENT_STUDENT.id));
  const [requests, setRequests]         = useState(() => _globalRequests.filter(r => r.studentId === CURRENT_STUDENT.id));
  const [search, setSearch]             = useState("");
  const [activeCategory, setActiveCat]  = useState("all");
  const [activeSub, setActiveSub]       = useState("all");
  const [openMaterial, setOpenMat]      = useState(null);
  const [showReqModal, setShowReqModal] = useState(false);
  const [activeView, setActiveView]     = useState("library");
  const { toasts, add: toast }          = useToast();
  const [animIn, setAnimIn]             = useState(false);
  const completedCount = 3;

  useEffect(()=>{ setTimeout(()=>setAnimIn(true),80); },[]);
  useEffect(()=>{
    setMaterials(_globalMaterials.filter(m=>m.studentId===null||m.studentId===CURRENT_STUDENT.id));
    setRequests(_globalRequests.filter(r=>r.studentId===CURRENT_STUDENT.id));
  },[]);

  const filtered = materials.filter(m=>{
    const q=search.toLowerCase();
    return (m.title.toLowerCase().includes(q)||m.sub.toLowerCase().includes(q))&&
      (activeCategory==="all"||m.category===activeCategory)&&
      (activeSub==="all"||m.sub===activeSub);
  });

  const premiumMats = materials.filter(m=>m.type==="premium");

  const toggleBookmark = id=>{
    setMaterials(p=>p.map(m=>m.id===id?{...m,bookmarked:!m.bookmarked}:m));
    toast("Bookmark updated","info");
  };

  const handleOpen = m=>{
    if(m.type==="premium"&&completedCount<3){ toast("Complete 3 free materials to unlock premium!","warn"); return; }
    setOpenMat(m);
  };

  const handleDownload = m=>{
    if(m.type==="premium"&&completedCount<3){ toast("Complete 3 materials to unlock downloads","warn"); return; }
    toast(`"${m.title}" download started!`,"success");
  };

  const submitRequest = data=>{
    const newReq={id:`r${Date.now()}`,studentId:CURRENT_STUDENT.id,studentName:CURRENT_STUDENT.name,...data,status:"pending",date:new Date().toISOString().slice(0,10)};
    _globalRequests=[..._globalRequests,newReq];
    setRequests(p=>[...p,newReq]);
    setShowReqModal(false);
    toast("📨 Request sent to admin!","success");
  };

  const subOptions = activeCategory!=="all"?["all",...CATEGORY_SUBS[activeCategory]]:["all"];
  const myPending = requests.filter(r=>r.status==="pending").length;

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
        @keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}
        .mat-card:hover{transform:translateY(-6px) scale(1.02)!important;box-shadow:0 20px 60px rgba(15,23,42,0.15)!important;}
        .mat-card{transition:all 0.25s cubic-bezier(.4,0,.2,1)!important;}
        .cat-card:hover{transform:translateY(-4px)!important;box-shadow:0 12px 40px rgba(15,23,42,0.12)!important;}
        .cat-card{transition:all 0.22s ease!important;}
        .btn-hover:hover{filter:brightness(1.08);transform:translateY(-1px)!important;}
        .btn-hover{transition:all 0.18s ease!important;}
        img{transition:transform 0.35s ease;}
        .mat-card:hover img{transform:scale(1.08);}
      `}</style>
      <ToastContainer toasts={toasts}/>

      {/* HEADER */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px",boxShadow:"0 2px 12px rgba(15,23,42,0.06)"}}>
        <div style={{maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:66}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <button className="btn-hover" onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"7px 14px",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>← Home</button>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:26}}>📚</span>
              <span style={{fontWeight:900,fontSize:20,color:C.amber,letterSpacing:-0.5}}>OYS E-Library</span>
            </div>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <div style={{
              background:completedCount>=3?"#f0fdf4":"#fffbeb",
              border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`,
              borderRadius:20,padding:"6px 16px",
              color:completedCount>=3?"#166534":"#92400e",
              fontSize:12,fontWeight:700,fontFamily:"inherit",
              animation:completedCount>=3?"pulse 2s infinite":"none",
            }}>
              {completedCount>=3?"🔓 Premium Unlocked!!":`✅ ${completedCount}/3 for Premium`}
            </div>
            <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 18px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>
              + Request Material
            </button>
          </div>
        </div>
      </div>

      {/* SUB NAV */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px"}}>
        <div style={{maxWidth:1300,margin:"0 auto",display:"flex",gap:0}}>
          {[["library","📖 Library"],["requests","📨 My Requests"]].map(([v,l])=>(
            <button key={v} onClick={()=>setActiveView(v)} style={{
              background:"none",border:"none",padding:"14px 22px",
              color:activeView===v?C.amber:C.textSec,
              borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`,
              cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s",
            }}>{l} {v==="requests"&&myPending>0&&<span style={{background:C.rose,color:"#fff",borderRadius:10,padding:"1px 7px",fontSize:10,marginLeft:6}}>{myPending}</span>}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:"28px",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.5s ease"}}>

        {/* REQUESTS VIEW */}
        {activeView==="requests"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
              <h2 style={{margin:0,fontSize:20,fontWeight:800}}>My Material Requests</h2>
              <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"10px 22px",fontWeight:700,cursor:"pointer",fontSize:13,fontFamily:"inherit"}}>+ New Request</button>
            </div>
            {requests.length===0?(
              <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}>
                <div style={{fontSize:52,marginBottom:14}}>📭</div>
                <div style={{fontSize:16,fontWeight:600,color:C.textSec}}>No requests yet</div>
              </div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {requests.map(r=>(
                  <div key={r.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"20px 26px",display:"flex",alignItems:"center",gap:20,boxShadow:C.shadow,animation:"cardIn 0.4s ease"}}>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:800,fontSize:15,marginBottom:4}}>{r.title}</div>
                      <div style={{fontSize:12,color:C.textSec,marginBottom:6}}>{CATEGORIES[r.category]?.label} → {r.sub}</div>
                      <div style={{fontSize:12,color:C.textMut,fontStyle:"italic"}}>"{r.reason}"</div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{display:"inline-block",borderRadius:10,padding:"6px 16px",fontSize:12,fontWeight:700,
                        background:r.status==="approved"?"#f0fdf4":r.status==="rejected"?"#fef2f2":"#fffbeb",
                        color:r.status==="approved"?"#166534":r.status==="rejected"?"#991b1b":"#92400e",
                        border:`1.5px solid ${r.status==="approved"?"#86efac":r.status==="rejected"?"#fca5a5":"#fcd34d"}`,
                      }}>
                        {r.status==="approved"?"✅ Approved":r.status==="rejected"?"❌ Rejected":"⏳ Pending"}
                      </div>
                      <div style={{fontSize:11,color:C.textMut,marginTop:6}}>{r.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LIBRARY VIEW */}
        {activeView==="library"&&(
          <>
            {/* PREMIUM BANNER */}
            <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>

            {/* SEARCH */}
            <div style={{position:"relative",marginBottom:24}}>
              <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontSize:16,color:C.textMut}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by subject, course, topic..."
                style={{width:"100%",padding:"14px 16px 14px 46px",borderRadius:14,border:`1.5px solid ${search?C.amber:C.border}`,background:C.surface,color:C.textPri,fontSize:15,outline:"none",boxSizing:"border-box",fontFamily:"inherit",boxShadow:C.shadow,transition:"border-color 0.25s"}}/>
              {search&&<button onClick={()=>setSearch("")} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:16,color:C.textMut}}>✕</button>}
            </div>

            {/* CATEGORY CARDS */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:24}}>
              {Object.entries(CATEGORIES).map(([key,cat])=>(
                <div key={key} className="cat-card" onClick={()=>{setActiveCat(activeCategory===key?"all":key);setActiveSub("all");}}
                  style={{background:activeCategory===key?cat.gradient:C.surface,border:`1.5px solid ${activeCategory===key?cat.color:C.border}`,borderRadius:16,padding:"20px 24px",cursor:"pointer",boxShadow:activeCategory===key?`0 8px 32px ${cat.color}22`:C.shadow}}>
                  <div style={{fontSize:36,marginBottom:10}}>{cat.icon}</div>
                  <div style={{fontWeight:800,fontSize:15,color:activeCategory===key?cat.color:C.textPri}}>{cat.label}</div>
                  <div style={{fontSize:12,marginTop:4,color:C.textSec}}>{CATEGORY_SUBS[key].length} streams · {_globalMaterials.filter(m=>m.category===key).length} materials</div>
                </div>
              ))}
            </div>

            {/* FILTERS */}
            <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:22,flexWrap:"wrap"}}>
              {activeCategory!=="all"&&(
                <select value={activeSub} onChange={e=>setActiveSub(e.target.value)} style={{padding:"9px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",outline:"none",fontFamily:"inherit"}}>
                  {subOptions.map(s=><option key={s} value={s}>{s==="all"?"All Sub-categories":s}</option>)}
                </select>
              )}
              <div style={{marginLeft:"auto",color:C.textMut,fontSize:13,fontWeight:600}}>{filtered.length} materials</div>
            </div>

            {/* MATERIALS GRID */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:20}}>
              {filtered.map((m,i)=>{
                const cat=CATEGORIES[m.category];
                const locked=m.type==="premium"&&completedCount<3;
                const crash=CRASH_COURSES[m.id];
                return (
                  <div key={m.id} className="mat-card" style={{background:C.surface,borderRadius:18,border:`1.5px solid ${m.bookmarked?C.amber:C.border}`,overflow:"hidden",animation:`cardIn 0.45s ease ${i*0.05}s both`,boxShadow:C.shadow,position:"relative"}}>
                    {/* THUMB */}
                    <div style={{background:cat.gradient,padding:"28px 0 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,position:"relative",minHeight:130}}>
                      <MatThumb m={m} size={80}/>
                      {/* badges */}
                      {locked&&<div style={{position:"absolute",top:10,left:10,background:"#92400e",color:"#fef3c7",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>🔒 PREMIUM</div>}
                      {!locked&&m.type==="premium"&&<div style={{position:"absolute",top:10,left:10,background:cat.color,color:"#fff",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>✨ PREMIUM</div>}
                      {m.uploadType==="pdf"&&<div style={{position:"absolute",bottom:10,right:10,background:"#fef2f2",color:"#991b1b",border:"1px solid #fca5a5",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>📄 PDF</div>}
                      {m.uploadType==="link"&&<div style={{position:"absolute",bottom:10,right:10,background:"#eff6ff",color:"#1e40af",border:"1px solid #93c5fd",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>🔗 Link</div>}
                      <button onClick={e=>{e.stopPropagation();toggleBookmark(m.id);}} style={{position:"absolute",top:10,right:10,background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)",border:`1px solid ${m.bookmarked?C.amber:C.border}`,borderRadius:8,padding:"5px 8px",cursor:"pointer",fontSize:14,backdropFilter:"blur(4px)"}}>
                        {m.bookmarked?"🔖":"🏷️"}
                      </button>
                    </div>

                    {/* CONTENT */}
                    <div style={{padding:"14px 16px 16px"}}>
                      <div style={{fontWeight:800,fontSize:14,marginBottom:4,color:C.textPri,lineHeight:1.3}}>{m.title}</div>
                      <div style={{fontSize:11,color:C.textSec,marginBottom:10,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                        <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 8px",fontWeight:700,border:`1px solid ${cat.border}`}}>{m.sub}</span>
                        <span style={{color:C.textMut}}>{m.pages}p · {m.topics} topics</span>
                      </div>

                      {m.progress>0&&(
                        <div style={{marginBottom:12}}>
                          <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.textMut,marginBottom:4}}>
                            <span>Progress</span><span style={{color:cat.color,fontWeight:700}}>{m.progress}%</span>
                          </div>
                          <div style={{height:6,background:C.border,borderRadius:8,overflow:"hidden"}}>
                            <div style={{width:`${m.progress}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}cc)`,borderRadius:8,transition:"width 1s ease"}}/>
                          </div>
                        </div>
                      )}

                      {/* ACTION BUTTONS */}
                      <div style={{display:"flex",gap:7,marginBottom:8}}>
                        <button className="btn-hover" onClick={()=>handleOpen(m)} style={{flex:1,background:locked?"#f1f5f9":`linear-gradient(135deg,${cat.color},${cat.color}dd)`,color:locked?C.textMut:"#fff",border:"none",borderRadius:10,padding:"9px 0",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",boxShadow:locked?"none":`0 4px 14px ${cat.color}33`}}>
                          {locked?"🔒 Locked":"📖 Open"}
                        </button>
                        <button className="btn-hover" onClick={()=>handleDownload(m)} style={{background:"#f1f5f9",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",cursor:"pointer",fontSize:13,color:C.textSec}} title="Download">⬇️</button>
                      </div>

                      {/* E-PREP + CRASH COURSE */}
                      {!locked&&(
                        <div style={{display:"flex",gap:7}}>
                          <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,
                            background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",
                            borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,
                            color:"#1e40af",textDecoration:"none",transition:"all 0.18s",
                          }}
                          onMouseEnter={e=>{e.currentTarget.style.background="linear-gradient(135deg,#dbeafe,#bfdbfe)";e.currentTarget.style.transform="translateY(-1px)";}}
                          onMouseLeave={e=>{e.currentTarget.style.background="linear-gradient(135deg,#eff6ff,#dbeafe)";e.currentTarget.style.transform="translateY(0)";}}>
                            🎯 E-Prep
                          </a>
                          {crash&&(
                            <a href={crash.url} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,
                              background:"linear-gradient(135deg,#fff7ed,#ffedd5)",border:"1.5px solid #fdba74",
                              borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,
                              color:"#c2410c",textDecoration:"none",transition:"all 0.18s",
                            }}
                            onMouseEnter={e=>{e.currentTarget.style.background="linear-gradient(135deg,#ffedd5,#fed7aa)";e.currentTarget.style.transform="translateY(-1px)";}}
                            onMouseLeave={e=>{e.currentTarget.style.background="linear-gradient(135deg,#fff7ed,#ffedd5)";e.currentTarget.style.transform="translateY(0)";}}>
                              ⚡ Crash Course
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filtered.length===0&&(
              <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}>
                <div style={{fontSize:52,marginBottom:12}}>🔍</div>
                <div style={{fontSize:16,fontWeight:700,color:C.textSec}}>No materials found</div>
                <div style={{fontSize:13,marginTop:6}}>Try a different search or category</div>
              </div>
            )}
          </>
        )}
      </div>

      {openMaterial&&<MaterialModal material={openMaterial} onClose={()=>setOpenMat(null)} toast={toast}/>}
      {showReqModal&&<RequestMaterialModal onClose={()=>setShowReqModal(false)} onSubmit={submitRequest}/>}
    </div>
  );
}

// ─── MATERIAL MODAL ───────────────────────────────────────────────────────────
function MaterialModal({ material:m, onClose, toast }) {
  const [topics, setTopics] = useState(JAVA_TOPICS);
  const [activeTab, setActiveTab] = useState("topics");
  const cat = CATEGORIES[m.category];
  const done = topics.filter(t=>t.done).length;
  const pct  = Math.round((done/topics.length)*100);
  const crash = CRASH_COURSES[m.id];
  const allDone = done === topics.length;

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease"}}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:C.surface,borderRadius:22,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease"}}>
        {/* HEADER */}
        <div style={{background:cat.gradient,padding:"28px 28px 22px",borderRadius:"22px 22px 0 0",position:"relative",borderBottom:`1px solid ${cat.border}`}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:14,color:C.textSec,backdropFilter:"blur(4px)"}}>✕</button>
          <div style={{display:"flex",alignItems:"center",gap:18}}>
            <MatThumb m={m} size={72}/>
            <div>
              <h2 style={{margin:"0 0 6px",color:cat.color,fontSize:20,fontWeight:800}}>{m.title}</h2>
              <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
              <div style={{display:"flex",gap:8}}>
                <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:"0 4px 14px rgba(30,64,175,0.35)",transition:"all 0.18s"}}
                  onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                  🎯 E-Preparation
                </a>
                {crash&&(
                  <a href={crash.url} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:crash.color,color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:`0 4px 14px ${crash.color}44`,transition:"all 0.18s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                    ⚡ {crash.title}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:16,marginTop:18,alignItems:"center"}}>
            <Ring pct={pct} size={58} stroke={5} color={cat.color}/>
            <div>
              <div style={{fontWeight:800,fontSize:15,color:cat.color}}>{pct}% complete</div>
              <div style={{fontSize:12,color:C.textSec}}>{done}/{topics.length} topics done</div>
            </div>
            {allDone&&(
              <div style={{marginLeft:"auto",background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:12,padding:"8px 16px",color:"#166534",fontSize:12,fontWeight:700,animation:"bounce 1s ease"}}>
                🎉 Material Completed!
              </div>
            )}
          </div>
        </div>

        {/* TABS */}
        <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,padding:"0 24px"}}>
          {["topics","test","notes"].map(t=>(
            <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"13px 20px",border:"none",background:"none",fontWeight:700,fontSize:13,cursor:"pointer",color:activeTab===t?cat.color:C.textSec,borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`,textTransform:"capitalize",fontFamily:"inherit",transition:"all 0.2s"}}>
              {t==="topics"?"📚 Topics":t==="test"?"📝 Mock Test":"🗒️ Notes"}
            </button>
          ))}
        </div>

        <div style={{padding:24}}>
          {activeTab==="topics"&&topics.map((t,i)=>(
            <div key={t.id} onClick={()=>setTopics(p=>p.map(x=>x.id===t.id?{...x,done:!x.done}:x))}
              style={{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:12,marginBottom:8,cursor:"pointer",background:t.done?cat.gradient:C.elevated,border:`1.5px solid ${t.done?cat.color:C.border}`,transition:"all 0.2s",animation:`cardIn 0.3s ease ${i*0.03}s both`}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:t.done?cat.color:"transparent",border:`2px solid ${t.done?cat.color:C.borderHi}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.done?"#fff":C.textMut,fontWeight:800,fontSize:12,flexShrink:0,transition:"all 0.2s"}}>
                {t.done?"✓":i+1}
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:13,color:C.textPri}}>{t.title}</div>
                <div style={{fontSize:11,color:C.textMut}}>{t.pages} pages</div>
              </div>
              {t.done&&<span style={{fontSize:10,background:cat.color,color:"#fff",borderRadius:6,padding:"3px 9px",fontWeight:700}}>Done</span>}
            </div>
          ))}

          {activeTab==="test"&&(
            <div style={{textAlign:"center",padding:"30px 0"}}>
              <div style={{fontSize:52,marginBottom:16}}>📝</div>
              <h3 style={{color:C.textPri,marginBottom:8,fontWeight:800,fontSize:18}}>Mock Test – {m.title}</h3>
              <p style={{color:C.textSec,marginBottom:28,fontSize:14}}>30 questions · 45 minutes · Results saved to profile</p>
              <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
                <button onClick={()=>{toast("Mock test started!","success");onClose();}} style={{background:cat.color,color:"#fff",border:"none",borderRadius:12,padding:"14px 32px",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",boxShadow:`0 6px 24px ${cat.color}44`}}>🚀 Start Mock Test</button>
                <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,background:"#1e40af",color:"#fff",borderRadius:12,padding:"14px 24px",fontSize:15,fontWeight:700,textDecoration:"none",boxShadow:"0 6px 24px rgba(30,64,175,0.3)"}}>🎯 E-Preparation Platform</a>
              </div>
            </div>
          )}

          {activeTab==="notes"&&(
            <div>
              <textarea placeholder="Write your personal notes here..." style={{width:"100%",minHeight:160,borderRadius:12,padding:14,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
              <button onClick={()=>toast("Notes saved!","success")} style={{marginTop:10,background:cat.color,color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontWeight:700,cursor:"pointer",fontFamily:"inherit",boxShadow:`0 4px 14px ${cat.color}33`}}>💾 Save Notes</button>
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </div>
  );
}

// ─── REQUEST MODAL ────────────────────────────────────────────────────────────
function RequestMaterialModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({title:"",category:"private",sub:"IT",reason:""});
  const s = f=>v=>setForm(p=>({...p,[f]:v}));
  const valid = form.title.trim()&&form.reason.trim();
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
      <div style={{background:C.surface,borderRadius:22,maxWidth:500,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
        <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:800}}>📨 Request New Material</h2>
          <button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer",fontSize:13}}>✕</button>
        </div>
        <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:16}}>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8,fontFamily:"inherit"}}>Material Title *</label>
            <input value={form.title} onChange={e=>s("title")(e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div>
              <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Category</label>
              <select value={form.category} onChange={e=>{s("category")(e.target.value);s("sub")(CATEGORY_SUBS[e.target.value][0]);}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                {Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label>
              <select value={form.sub} onChange={e=>s("sub")(e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                {CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Why do you need this? *</label>
            <textarea value={form.reason} onChange={e=>s("reason")(e.target.value)} placeholder="Describe why this material would help your studies..." rows={3} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
          </div>
          <div style={{display:"flex",gap:10}}>
            <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:13}}>Cancel</button>
            <button onClick={()=>valid&&onSubmit(form)} style={{flex:2,background:valid?C.amber:"#e2e8f0",color:valid?"#fff":C.textMut,border:"none",borderRadius:10,padding:12,cursor:valid?"pointer":"not-allowed",fontWeight:800,fontFamily:"inherit",fontSize:13,boxShadow:valid?"0 4px 14px rgba(245,158,11,0.35)":"none"}}>📨 Send Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
function AdminDashboard({ onBack }) {
  const [materials, setMaterials] = useState(()=>_globalMaterials.map(m=>({...m})));
  const [requests, setRequests]   = useState(()=>[..._globalRequests]);
  const [students]                = useState(()=>_globalStudents.map(s=>({...s})));
  const [activeTab, setActiveTab] = useState("overview");
  const [filterCat, setFilterCat] = useState("all");
  const [filterType, setFilterType]= useState("all");
  const [search, setSearch]       = useState("");
  const [showAddModal, setShowAdd]= useState(false);
  const [editItem, setEditItem]   = useState(null);
  const [previewItem, setPreview] = useState(null);
  const [deleteConfirm, setDelConf]= useState(null);
  const [selectedStudent, setSelStu]= useState(null);
  const [animIn, setAnimIn]       = useState(false);
  const { toasts, add: toast }    = useToast();

  useEffect(()=>{
    setTimeout(()=>setAnimIn(true),80);
    const t=setInterval(()=>setRequests([..._globalRequests]),2000);
    return ()=>clearInterval(t);
  },[]);

  const handleDelete = id=>{
    const updated=materials.filter(m=>m.id!==id);
    setMaterials(updated);_globalMaterials=updated;
    setDelConf(null);toast("Material deleted","error");
  };

  const handleSave = data=>{
    if(editItem){
      const updated=materials.map(m=>m.id===editItem.id?{...m,...data}:m);
      setMaterials(updated);_globalMaterials=updated;toast("Material updated!","success");
    } else {
      const newM={...data,id:Date.now(),progress:0,bookmarked:false,downloads:0,emoji:"📄"};
      const updated=[...materials,newM];
      setMaterials(updated);_globalMaterials=updated;toast("Material added!","success");
    }
    setShowAdd(false);setEditItem(null);
  };

  const approveRequest=(req,studentOnly)=>{
    const newM={id:Date.now(),title:req.title,category:req.category,sub:req.sub,type:"free",emoji:"📄",topics:5,progress:0,pages:100,downloads:0,bookmarked:false,studentId:studentOnly?req.studentId:null,uploadType:null,fileLink:""};
    const updatedM=[...materials,newM];setMaterials(updatedM);_globalMaterials=updatedM;
    const updatedR=_globalRequests.map(r=>r.id===req.id?{...r,status:"approved"}:r);
    _globalRequests=updatedR;setRequests([...updatedR]);
    toast(`✅ "${req.title}" approved!`,"success");
  };

  const rejectRequest=id=>{
    const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"rejected"}:r);
    _globalRequests=updatedR;setRequests([...updatedR]);
    toast("Request rejected","error");
  };

  const filtered=materials.filter(m=>m.title.toLowerCase().includes(search.toLowerCase())&&(filterCat==="all"||m.category===filterCat)&&(filterType==="all"||m.type===filterType));
  const pendingReqs=requests.filter(r=>r.status==="pending");

  const stats={
    total:materials.length,free:materials.filter(m=>m.type==="free").length,
    premium:materials.filter(m=>m.type==="premium").length,
    downloads:materials.reduce((a,m)=>a+m.downloads,0),
    students:students.length,pending:pendingReqs.length,
  };

  const TABS=[
    {id:"overview",label:"📊 Overview"},{id:"materials",label:"📚 Materials"},
    {id:"requests",label:`📨 Requests ${stats.pending>0?`(${stats.pending})`:""}`},
    {id:"students",label:"👥 Students"},{id:"categories",label:"🏷️ Categories"},
  ];

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .row-hover:hover{background:#f8fafc!important;}
        .btn-sm:hover{filter:brightness(1.08);transform:translateY(-1px);}
        .btn-sm{transition:all 0.15s ease;}
      `}</style>
      <ToastContainer toasts={toasts}/>

      {/* SIDEBAR */}
      <div style={{position:"fixed",left:0,top:0,bottom:0,width:220,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",zIndex:100,boxShadow:"2px 0 12px rgba(15,23,42,0.06)"}}>
        <div style={{padding:"24px 20px",borderBottom:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:4,letterSpacing:1.5,textTransform:"uppercase"}}>OYS E-LIBRARY</div>
          <div style={{fontSize:18,fontWeight:900,color:C.amber}}>Admin Panel</div>
        </div>
        <nav style={{padding:"16px 12px",flex:1}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{width:"100%",textAlign:"left",padding:"12px 14px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:4,
              background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent",
              color:activeTab===t.id?C.amberDim:C.textSec,fontWeight:activeTab===t.id?800:600,fontSize:13,
              transition:"all 0.18s",borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`,fontFamily:"inherit"}}>
              {t.label}
            </button>
          ))}
        </nav>
        <div style={{padding:"16px 12px",borderTop:`1px solid ${C.border}`}}>
          <button onClick={onBack} style={{width:"100%",padding:"11px 14px",borderRadius:10,background:"#fef2f2",border:"1.5px solid #fca5a5",color:"#991b1b",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>← Back to Home</button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{marginLeft:220,padding:"28px 32px",opacity:animIn?1:0,transition:"opacity 0.5s ease"}}>

        {/* OVERVIEW */}
        {activeTab==="overview"&&(
          <div>
            <h1 style={{fontSize:24,fontWeight:900,marginBottom:26}}>Dashboard Overview</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:30}}>
              {[
                {label:"Total Materials",value:stats.total,icon:"📚",color:C.amber,bg:"#fffbeb"},
                {label:"Free Materials",value:stats.free,icon:"🆓",color:C.sage,bg:"#f0fdf4"},
                {label:"Premium",value:stats.premium,icon:"✨",color:C.indigo,bg:"#eff6ff"},
                {label:"Total Downloads",value:stats.downloads.toLocaleString(),icon:"⬇️",color:C.rose,bg:"#fef2f2"},
                {label:"Students",value:stats.students,icon:"👥",color:C.blue,bg:"#eff6ff"},
                {label:"Pending Requests",value:stats.pending,icon:"⏳",color:C.amberDim,bg:"#fffbeb"},
              ].map((s,i)=>(
                <div key={i} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,padding:"20px 22px",boxShadow:C.shadow,animation:`cardIn 0.4s ease ${i*0.07}s both`,transition:"transform 0.2s,box-shadow 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}}>
                  <div style={{background:s.bg,borderRadius:10,padding:"8px 10px",fontSize:20,display:"inline-block",marginBottom:12}}>{s.icon}</div>
                  <div style={{fontSize:28,fontWeight:900,color:s.color}}>{s.value}</div>
                  <div style={{fontSize:12,color:C.textMut,marginTop:3,fontWeight:600}}>{s.label}</div>
                </div>
              ))}
            </div>

            <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>Downloads by Category</h2>
            <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px 26px",marginBottom:26,boxShadow:C.shadow}}>
              {Object.entries(CATEGORIES).map(([key,cat])=>{
                const count=materials.filter(m=>m.category===key).reduce((a,m)=>a+m.downloads,0);
                const max=materials.reduce((a,m)=>a+m.downloads,0);
                const pct=max?Math.round((count/max)*100):0;
                return (
                  <div key={key} style={{marginBottom:18}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
                      <span style={{fontWeight:700,color:C.textSec}}>{cat.icon} {cat.label}</span>
                      <span style={{color:cat.color,fontWeight:800}}>{count.toLocaleString()} ({pct}%)</span>
                    </div>
                    <div style={{height:9,background:C.border,borderRadius:8,overflow:"hidden"}}>
                      <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}aa)`,borderRadius:8,transition:"width 1.2s ease 0.3s"}}/>
                    </div>
                  </div>
                );
              })}
            </div>

            {pendingReqs.length>0&&(
              <>
                <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>⏳ Pending Requests</h2>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {pendingReqs.slice(0,3).map(r=>(
                    <div key={r.id} style={{background:C.surface,border:`1.5px solid #fcd34d`,borderRadius:14,padding:"15px 20px",display:"flex",alignItems:"center",gap:16,boxShadow:C.shadow}}>
                      <div style={{flex:1}}>
                        <span style={{fontWeight:800,color:C.amber}}>{r.title}</span>
                        <span style={{color:C.textMut,fontSize:12,marginLeft:10}}>by {r.studentName}</span>
                      </div>
                      <button className="btn-sm" onClick={()=>setActiveTab("requests")} style={{background:"#fffbeb",border:"1.5px solid #fcd34d",color:"#92400e",borderRadius:9,padding:"7px 16px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>Review →</button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* MATERIALS */}
        {activeTab==="materials"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
              <h1 style={{fontSize:22,fontWeight:900,margin:0}}>Manage Materials</h1>
              <button className="btn-sm" onClick={()=>{setEditItem(null);setShowAdd(true);}} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"11px 20px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>+ Add Material</button>
            </div>
            <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search materials..." style={{flex:1,minWidth:200,padding:"10px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,outline:"none",fontFamily:"inherit"}}/>
              <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                <option value="all">All Categories</option>
                {Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
              </select>
              <select value={filterType} onChange={e=>setFilterType(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                <option value="all">All Types</option>
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
              <table style={{width:"100%",borderCollapse:"collapse"}}>
                <thead>
                  <tr style={{background:C.elevated}}>
                    {["Material","Category","Sub","Type","Upload","Downloads","Actions"].map(h=>(
                      <th key={h} style={{padding:"13px 16px",textAlign:"left",fontSize:11,fontWeight:800,color:C.textMut,textTransform:"uppercase",letterSpacing:0.6}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m,i)=>{
                    const cat=CATEGORIES[m.category];
                    return (
                      <tr key={m.id} className="row-hover" style={{borderTop:`1px solid ${C.border}`,animation:`cardIn 0.3s ease ${i*0.03}s both`,transition:"background 0.15s"}}>
                        <td style={{padding:"13px 16px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <MatThumb m={m} size={40}/>
                            <div>
                              <div style={{fontWeight:700,fontSize:13}}>{m.title}</div>
                              <div style={{fontSize:11,color:C.textMut}}>{m.pages}p</div>
                            </div>
                          </div>
                        </td>
                        <td style={{padding:"13px 16px"}}><span style={{background:cat.bg,color:cat.color,borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {cat.label}</span></td>
                        <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub}</td>
                        <td style={{padding:"13px 16px"}}><span style={{background:m.type==="premium"?"#fffbeb":"#f0fdf4",color:m.type==="premium"?"#92400e":"#166534",borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700}}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
                        <td style={{padding:"13px 16px"}}>
                          {m.uploadType==="pdf"&&<span style={{background:"#fef2f2",color:"#991b1b",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>📄 PDF</span>}
                          {m.uploadType==="link"&&<span style={{background:"#eff6ff",color:"#1e40af",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>🔗 Link</span>}
                          {!m.uploadType&&<span style={{color:C.textMut,fontSize:11}}>—</span>}
                        </td>
                        <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:700}}>{m.downloads.toLocaleString()}</td>
                        <td style={{padding:"13px 16px"}}>
                          <div style={{display:"flex",gap:6}}>
                            <button className="btn-sm" onClick={()=>setPreview(m)} style={{background:"#eff6ff",color:"#1e40af",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>👁</button>
                            <button className="btn-sm" onClick={()=>{setEditItem(m);setShowAdd(true);}} style={{background:"#fffbeb",color:"#92400e",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>✏️</button>
                            <button className="btn-sm" onClick={()=>setDelConf(m.id)} style={{background:"#fef2f2",color:"#991b1b",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>🗑</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filtered.length===0&&<div style={{textAlign:"center",padding:40,color:C.textMut}}>No materials found</div>}
            </div>
          </div>
        )}

        {/* REQUESTS */}
        {activeTab==="requests"&&(
          <div>
            <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Material Requests</h1>
            {requests.length===0?(
              <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}><div style={{fontSize:48,marginBottom:12}}>📭</div><div style={{fontWeight:600}}>No requests yet</div></div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {requests.map((r,i)=>{
                  const cat=CATEGORIES[r.category];
                  const stu=students.find(s=>s.id===r.studentId);
                  return (
                    <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#fca5a5"}`,borderRadius:16,padding:"20px 24px",boxShadow:C.shadow,animation:`cardIn 0.35s ease ${i*0.05}s both`}}>
                      <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
                        <div style={{width:44,height:44,borderRadius:"50%",background:"#fffbeb",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:13,flexShrink:0}}>{stu?.avatar||"??"}</div>
                        <div style={{flex:1}}>
                          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4,flexWrap:"wrap"}}>
                            <span style={{fontWeight:800,fontSize:15}}>{r.title}</span>
                            <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {r.sub}</span>
                          </div>
                          <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>By <strong>{r.studentName}</strong> · {r.date}</div>
                          <div style={{fontSize:12,color:C.textMut,fontStyle:"italic",background:C.elevated,padding:"8px 13px",borderRadius:9,borderLeft:`3px solid #fcd34d`}}>"{r.reason}"</div>
                        </div>
                        <div style={{textAlign:"right",flexShrink:0}}>
                          {r.status==="pending"?(
                            <div style={{display:"flex",flexDirection:"column",gap:7}}>
                              <button className="btn-sm" onClick={()=>approveRequest(r,true)} style={{background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>✅ Approve for {r.studentName.split(" ")[0]}</button>
                              <button className="btn-sm" onClick={()=>approveRequest(r,false)} style={{background:"#fffbeb",color:"#92400e",border:"1.5px solid #fcd34d",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>🌐 Approve for All</button>
                              <button className="btn-sm" onClick={()=>rejectRequest(r.id)} style={{background:"#fef2f2",color:"#991b1b",border:"1.5px solid #fca5a5",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit"}}>❌ Reject</button>
                            </div>
                          ):(
                            <div style={{display:"inline-block",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,background:r.status==="approved"?"#f0fdf4":"#fef2f2",color:r.status==="approved"?"#166534":"#991b1b",border:`1.5px solid ${r.status==="approved"?"#86efac":"#fca5a5"}`}}>
                              {r.status==="approved"?"✅ Approved":"❌ Rejected"}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* STUDENTS */}
        {activeTab==="students"&&!selectedStudent&&(
          <div>
            <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Student Management</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18}}>
              {students.map((s,i)=>{
                const stuMats=materials.filter(m=>m.studentId===s.id);
                const stuReqs=requests.filter(r=>r.studentId===s.id);
                const stuPending=stuReqs.filter(r=>r.status==="pending").length;
                return (
                  <div key={s.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px",animation:`cardIn 0.35s ease ${i*0.07}s both`,cursor:"pointer",transition:"all 0.22s",boxShadow:C.shadow}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=C.amber;e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=C.shadowLg;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}}
                    onClick={()=>setSelStu(s)}>
                    <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                      <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:14,flexShrink:0}}>{s.avatar}</div>
                      <div>
                        <div style={{fontWeight:800,fontSize:15}}>{s.name}</div>
                        <div style={{fontSize:12,color:C.textSec}}>{s.email}</div>
                      </div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                      {[["📚",stuMats.length,"Personal"],["✅",s.completed,"Done"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
                        <div key={lbl} style={{background:C.elevated,borderRadius:10,padding:"10px 0",textAlign:"center",border:`1px solid ${C.border}`}}>
                          <div style={{fontSize:16,marginBottom:3}}>{icon}</div>
                          <div style={{fontSize:18,fontWeight:900,color:C.amber}}>{val}</div>
                          <div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{lbl}</div>
                        </div>
                      ))}
                    </div>
                    {stuPending>0&&<div style={{marginTop:12,background:"#fffbeb",border:"1.5px solid #fcd34d",borderRadius:9,padding:"7px 12px",fontSize:12,color:"#92400e",fontWeight:700}}>⏳ {stuPending} pending request{stuPending>1?"s":""}</div>}
                    <div style={{marginTop:10,fontSize:11,color:C.textMut,fontWeight:600}}>Joined: {s.joined}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab==="students"&&selectedStudent&&(
          <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={()=>setSelStu(null)} onApprove={approveRequest} onReject={rejectRequest} toast={toast}/>
        )}

        {/* CATEGORIES */}
        {activeTab==="categories"&&(
          <div>
            <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Category Management</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
              {Object.entries(CATEGORIES).map(([key,cat])=>(
                <div key={key} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
                  <div style={{background:cat.gradient,borderBottom:`1px solid ${cat.border}`,padding:"20px 22px",display:"flex",alignItems:"center",gap:12}}>
                    <span style={{fontSize:30}}>{cat.icon}</span>
                    <div>
                      <div style={{color:cat.color,fontWeight:800,fontSize:15}}>{cat.label}</div>
                      <div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{materials.filter(m=>m.category===key).length} materials</div>
                    </div>
                  </div>
                  <div style={{padding:18}}>
                    <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>Sub-categories</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
                      {cat.sub.map(s=><span key={s} style={{background:C.elevated,color:C.textSec,borderRadius:7,padding:"5px 11px",fontSize:12,border:`1px solid ${C.border}`,fontWeight:600}}>{s}</span>)}
                    </div>
                    <button className="btn-sm" style={{width:"100%",background:cat.gradient,color:cat.color,border:`1.5px solid ${cat.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit"}}>+ Add Sub-category</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showAddModal&&<AddMaterialModal item={editItem} students={students} onClose={()=>{setShowAdd(false);setEditItem(null);}} onSave={handleSave}/>}
      {previewItem&&<PreviewModal item={previewItem} students={students} onClose={()=>setPreview(null)}/>}
      {deleteConfirm&&(
        <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,backdropFilter:"blur(4px)"}}>
          <div style={{background:C.surface,borderRadius:18,padding:32,maxWidth:360,width:"90%",border:"1.5px solid #fca5a5",textAlign:"center",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
            <div style={{fontSize:40,marginBottom:12}}>⚠️</div>
            <h3 style={{fontWeight:800,marginBottom:8}}>Delete Material?</h3>
            <p style={{color:C.textSec,fontSize:13,marginBottom:24}}>This action cannot be undone.</p>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setDelConf(null)} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
              <button onClick={()=>handleDelete(deleteConfirm)} style={{flex:1,background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit"}}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StudentDetail({ student:s, materials, requests, onBack, onApprove, onReject, toast }) {
  const stuMats=materials.filter(m=>m.studentId===s.id);
  const stuReqs=requests.filter(r=>r.studentId===s.id);
  return (
    <div>
      <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"8px 16px",cursor:"pointer",fontSize:12,marginBottom:22,fontFamily:"inherit",fontWeight:700}}>← All Students</button>
      <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:26,background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:"24px 26px",boxShadow:C.shadow}}>
        <div style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:900,fontSize:18}}>{s.avatar}</div>
        <div>
          <h2 style={{margin:0,fontSize:20,fontWeight:900}}>{s.name}</h2>
          <div style={{color:C.textSec,fontSize:13,fontWeight:600}}>{s.email} · Joined {s.joined}</div>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:14}}>
          {[["✅",s.completed,"Completed"],["📚",stuMats.length,"Personal"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
            <div key={lbl} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 18px",textAlign:"center"}}>
              <div style={{fontSize:18}}>{icon}</div>
              <div style={{fontSize:22,fontWeight:900,color:C.amber}}>{val}</div>
              <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22}}>
        <div>
          <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>⭐ Personal Materials ({stuMats.length})</h3>
          {stuMats.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No personal materials yet</div>:stuMats.map(m=>(
            <div key={m.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 17px",marginBottom:9,display:"flex",alignItems:"center",gap:12,boxShadow:C.shadow}}>
              <MatThumb m={m} size={38}/>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:13}}>{m.title}</div>
                <div style={{fontSize:11,color:C.textSec,fontWeight:600}}>{m.sub} · {m.type}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>📨 Requests ({stuReqs.length})</h3>
          {stuReqs.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No requests yet</div>:stuReqs.map(r=>(
            <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#fca5a5"}`,borderRadius:12,padding:"13px 15px",marginBottom:9,boxShadow:C.shadow}}>
              <div style={{fontWeight:700,fontSize:13,marginBottom:4}}>{r.title}</div>
              <div style={{fontSize:11,color:C.textMut,fontStyle:"italic",marginBottom:9}}>"{r.reason}"</div>
              {r.status==="pending"?(
                <div style={{display:"flex",gap:7}}>
                  <button onClick={()=>{onApprove(r,true);toast(`Approved for ${s.name}`,"success");}} style={{flex:1,background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>✅ Approve</button>
                  <button onClick={()=>onReject(r.id)} style={{background:"#fef2f2",color:"#991b1b",border:"1.5px solid #fca5a5",borderRadius:8,padding:"7px 12px",cursor:"pointer",fontSize:11,fontFamily:"inherit"}}>✕</button>
                </div>
              ):(
                <span style={{fontSize:11,fontWeight:700,color:r.status==="approved"?"#166534":"#991b1b"}}>{r.status==="approved"?"✅ Approved":"❌ Rejected"}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddMaterialModal({ item, students, onClose, onSave }) {
  const [form, setForm] = useState({
    title:item?.title||"",category:item?.category||"private",sub:item?.sub||"IT",
    type:item?.type||"free",pages:item?.pages||"",topics:item?.topics||"",
    emoji:item?.emoji||"📄",uploadType:item?.uploadType||"",fileLink:item?.fileLink||"",studentId:item?.studentId||"",
  });
  const set=(k,v)=>setForm(p=>({...p,[k]:v}));
  const EMOJIS=["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
      <div style={{background:C.surface,borderRadius:22,maxWidth:560,width:"100%",boxShadow:C.shadowLg,maxHeight:"92vh",overflow:"auto",animation:"cardIn 0.3s ease"}}>
        <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:900}}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2>
          <button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer"}}>✕</button>
        </div>
        <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:15}}>
          {[{label:"Title",key:"title",type:"text",ph:"e.g. Java Programming"},{label:"Pages",key:"pages",type:"number",ph:"340"},{label:"Topics",key:"topics",type:"number",ph:"12"}].map(f=>(
            <div key={f.key}>
              <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{f.label}</label>
              <input value={form[f.key]} onChange={e=>set(f.key,e.target.value)} type={f.type} placeholder={f.ph} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/>
            </div>
          ))}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {[["Category","category",Object.entries(CATEGORIES).map(([k,v])=>[k,v.label])],["Type","type",[["free","Free"],["premium","Premium"]]]].map(([label,key,opts])=>(
              <div key={key}>
                <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{label}</label>
                <select value={form[key]} onChange={e=>{set(key,e.target.value);if(key==="category")set("sub",CATEGORY_SUBS[e.target.value][0]);}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                  {opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label>
            <select value={form.sub} onChange={e=>set("sub",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
              {CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Content Type</label>
            <div style={{display:"flex",gap:8,marginBottom:form.uploadType?10:0}}>
              {[["","📁 None"],["pdf","📄 PDF"],["link","🔗 Link"]].map(([v,l])=>(
                <button key={v} onClick={()=>set("uploadType",v)} style={{flex:1,background:form.uploadType===v?"#fffbeb":C.elevated,color:form.uploadType===v?"#92400e":C.textSec,border:`1.5px solid ${form.uploadType===v?"#fcd34d":C.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>{l}</button>
              ))}
            </div>
            {form.uploadType&&<input value={form.fileLink} onChange={e=>set("fileLink",e.target.value)} placeholder={form.uploadType==="pdf"?"https://example.com/file.pdf":"https://example.com/resource"} style={{width:"100%",padding:"10px 13px",borderRadius:10,border:`1.5px solid #fcd34d`,background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/>}
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Assign to Student (optional)</label>
            <select value={form.studentId} onChange={e=>set("studentId",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
              <option value="">All Students (Public)</option>
              {students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Thumbnail Icon</label>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {EMOJIS.map(e=>(
                <button key={e} onClick={()=>set("emoji",e)} style={{width:40,height:40,fontSize:18,borderRadius:9,border:`2px solid ${form.emoji===e?C.amber:C.border}`,background:form.emoji===e?"#fffbeb":C.elevated,cursor:"pointer",transition:"all 0.15s"}}>{e}</button>
              ))}
            </div>
          </div>
          <div style={{display:"flex",gap:10,marginTop:4}}>
            <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
            <button onClick={()=>onSave(form)} style={{flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:14,boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>{item?"💾 Update":"✅ Add Material"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function PreviewModal({ item:m, students, onClose }) {
  const cat=CATEGORIES[m.category];
  const stu=m.studentId?students.find(s=>s.id===m.studentId):null;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
      <div style={{background:C.surface,borderRadius:22,maxWidth:480,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
        <div style={{background:cat.gradient,padding:"26px 26px 20px",borderRadius:"22px 22px 0 0",textAlign:"center",borderBottom:`1px solid ${cat.border}`}}>
          <MatThumb m={m} size={80}/>
          <h2 style={{color:cat.color,margin:"14px 0 4px",fontSize:18,fontWeight:900}}>{m.title}</h2>
          <div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
        </div>
        <div style={{padding:24}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
            {[["Category",cat.label],["Type",m.type],["Downloads",m.downloads.toLocaleString()],["Progress",`${m.progress}%`],["Upload",m.uploadType||"None"],["Assigned To",stu?.name||"All Students"]].map(([k,v])=>(
              <div key={k} style={{background:C.elevated,borderRadius:10,padding:"11px 14px",border:`1px solid ${C.border}`}}>
                <div style={{fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3}}>{k}</div>
                <div style={{fontSize:14,fontWeight:700}}>{v}</div>
              </div>
            ))}
          </div>
          {m.fileLink&&<div style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",marginBottom:14}}>
            <div style={{fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3}}>File Link</div>
            <div style={{fontSize:12,color:C.indigo,wordBreak:"break-all"}}>{m.fileLink}</div>
          </div>}
          <button onClick={onClose} style={{width:"100%",background:C.elevated,color:C.textPri,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:14}}>Close</button>
        </div>
      </div>
    </div>
  );
}
// ─── HOME ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [animIn, setAnimIn] = useState(false);
  useEffect(()=>{ setTimeout(()=>setAnimIn(true),80); },[]);

  if(screen==="student") return <StudentDashboard onBack={()=>setScreen("home")}/>;
  if(screen==="admin")   return <AdminDashboard   onBack={()=>setScreen("home")}/>;

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 30%,#fef3c7 70%,#fff7ed 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",position:"relative",overflow:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
        @keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 10px rgba(245,158,11,0)}}
      `}</style>

      {/* BLOBS */}
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)",top:"-10%",left:"-5%",animation:"orbPulse 6s ease-in-out infinite"}}/>
      <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)",bottom:"0%",right:"-5%",animation:"orbPulse 6s ease-in-out infinite 2s"}}/>
      <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(16,185,129,0.10) 0%,transparent 70%)",top:"40%",right:"15%",animation:"orbPulse 8s ease-in-out infinite 1s"}}/>

      <div style={{textAlign:"center",zIndex:1,padding:"0 20px",opacity:animIn?1:0,transform:animIn?"scale(1)":"scale(0.94)",transition:"all 0.6s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{fontSize:80,marginBottom:16,animation:"float 3.5s ease-in-out infinite",filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))"}}>📚</div>
        <div style={{fontSize:11,letterSpacing:5,color:C.amberDim,marginBottom:10,textTransform:"uppercase",fontWeight:800,animation:"fadeUp 0.7s ease 0.2s both"}}>One Year Series</div>
        <h1 style={{fontSize:54,fontWeight:900,color:C.textPri,margin:"0 0 8px",letterSpacing:-2,lineHeight:1.1,animation:"fadeUp 0.7s ease 0.3s both"}}>
          <span style={{color:C.amber}}>OYS</span> E-Library
        </h1>
        <p style={{color:C.textSec,fontSize:17,marginBottom:52,maxWidth:440,margin:"0 auto 52px",lineHeight:1.6,fontWeight:600,animation:"fadeUp 0.7s ease 0.4s both"}}>
          Your complete digital learning hub — study materials, mock tests, crash courses & progress tracking
        </p>

        <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.5s both"}}>
          <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"#fff",border:"none",borderRadius:16,padding:"20px 44px",fontSize:17,fontWeight:900,cursor:"pointer",boxShadow:"0 10px 36px rgba(245,158,11,0.4)",transition:"all 0.25s",fontFamily:"inherit"}}
            onMouseEnter={e=>{e.target.style.transform="translateY(-4px) scale(1.03)";e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)";}}
            onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)";}}>
            🎓 Student Dashboard
          </button>
          <button onClick={()=>setScreen("admin")} style={{background:"#fff",color:C.textPri,border:"1.5px solid #e2e8f0",borderRadius:16,padding:"20px 44px",fontSize:17,fontWeight:900,cursor:"pointer",boxShadow:"0 8px 28px rgba(15,23,42,0.1)",transition:"all 0.25s",fontFamily:"inherit"}}
            onMouseEnter={e=>{e.target.style.transform="translateY(-4px)";e.target.style.borderColor=C.amber;e.target.style.color=C.amber;e.target.style.boxShadow="0 16px 44px rgba(15,23,42,0.14)";}}
            onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.borderColor="#e2e8f0";e.target.style.color=C.textPri;e.target.style.boxShadow="0 8px 28px rgba(15,23,42,0.1)";}}>
            ⚙️ Admin Panel
          </button>
        </div>

        <div style={{display:"flex",gap:32,justifyContent:"center",marginTop:52,flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.6s both"}}>
          {["15 Materials","3 Categories","Premium Unlock","E-Preparation","Crash Courses"].map((f,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:7,color:C.textSec,fontSize:13,fontWeight:700}}>
              <span style={{color:C.sage,fontSize:15}}>✓</span> {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
