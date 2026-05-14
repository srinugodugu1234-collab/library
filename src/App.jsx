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

// ─── SERVICES DATA ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "resume",
    name: "Resume Maker",
    icon: "📄",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
    gradient: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
    users: 4820,
    topCollege: "IIT Bombay",
    description: "AI-powered resume builder with ATS optimization",
    stats: { created: 4820, downloaded: 3940, templates: 24, avgScore: 87 },
    trend: "+18%",
    trendUp: true,
  },
  {
    id: "alerts",
    name: "Alerts",
    icon: "🔔",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    gradient: "linear-gradient(135deg,#fef3c7,#fde68a)",
    users: 7210,
    topCollege: "NIT Warangal",
    description: "Real-time job & exam notifications system",
    stats: { sent: 52400, read: 41200, active: 7210, categories: 12 },
    trend: "+32%",
    trendUp: true,
  },
  {
    id: "calendar",
    name: "E-Calendar",
    icon: "📅",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    gradient: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    users: 3650,
    topCollege: "BITS Pilani",
    description: "Exam schedules, deadlines & study planner",
    stats: { events: 1840, reminders: 9300, synced: 3650, upcoming: 124 },
    trend: "+9%",
    trendUp: true,
  },
  {
    id: "crash",
    name: "Crash Course",
    icon: "⚡",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    gradient: "linear-gradient(135deg,#fee2e2,#fecaca)",
    users: 5930,
    topCollege: "VIT Vellore",
    description: "Intensive last-minute exam preparation modules",
    stats: { courses: 48, enrolled: 5930, completed: 3210, avgHours: 6.4 },
    trend: "+41%",
    trendUp: true,
  },
  {
    id: "elibrary",
    name: "E-Library",
    icon: "📚",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
    users: 6840,
    topCollege: "JNTU Hyderabad",
    description: "Digital library with 15+ curated study materials",
    stats: {
      materials: 15,
      downloads: 19870,
      requests: 24,
      pending: 2,
      approved: 20,
      rejected: 2,
      topCollege: "JNTU Hyderabad",
      collegeStats: [
        { name: "JNTU Hyderabad", downloads: 4200, users: 1240 },
        { name: "Osmania University", downloads: 3100, users: 980 },
        { name: "IIT Bombay", downloads: 2800, users: 760 },
        { name: "NIT Warangal", downloads: 2400, users: 640 },
        { name: "VIT Vellore", downloads: 1900, users: 520 },
      ],
    },
    trend: "+27%",
    trendUp: true,
  },
  {
    id: "eprep",
    name: "E-Preparation",
    icon: "🎯",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    gradient: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
    users: 8120,
    topCollege: "Osmania University",
    description: "Mock tests, quizzes & performance analytics",
    stats: { tests: 980, attempts: 41200, avgScore: 72, toppers: 340 },
    trend: "+55%",
    trendUp: true,
  },
  {
    id: "counseling",
    name: "Career Counseling",
    icon: "🧭",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    users: 2340,
    topCollege: "Hyderabad Central University",
    description: "1-on-1 mentorship & career guidance sessions",
    stats: { sessions: 2340, mentors: 48, avgRating: 4.8, placed: 1820 },
    trend: "+14%",
    trendUp: true,
  },
  {
    id: "c3arena",
    name: "C3 Arena",
    icon: "🏆",
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    gradient: "linear-gradient(135deg,#ffedd5,#fed7aa)",
    users: 3980,
    topCollege: "IIT Hyderabad",
    description: "Competitive coding, hackathons & leaderboards",
    stats: { contests: 84, participants: 3980, problems: 1240, winners: 252 },
    trend: "+63%",
    trendUp: true,
  },
];

const PIE_COLORS = [
  "#3b82f6","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#f97316","#6366f1"
];

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

const HIGHER_INDIA_ABROAD = {
  "GATE": "India",
  "CAT/MBA": "India",
  "GRE/GMAT": "Abroad",
  "Study Abroad": "Abroad",
  "Research": "Both",
  "PhD": "Both",
};

const INIT_STUDENTS = [
  { id: "s1", name: "Arjun Sharma", email: "arjun@email.com", joined: "2024-01-15", completed: 3, avatar: "AS", college: "JNTU Hyderabad" },
  { id: "s2", name: "Priya Reddy",  email: "priya@email.com",  joined: "2024-02-20", completed: 1, avatar: "PR", college: "Osmania University" },
  { id: "s3", name: "Rahul Gupta",  email: "rahul@email.com",  joined: "2024-03-10", completed: 0, avatar: "RG", college: "IIT Bombay" },
];

const ALL_MATERIALS = [
  { id: 1,  title: "Java Programming",       category: "private",    sub: "IT",            type: "free",    emoji:"☕", topics: 12, progress: 70, pages: 340, downloads: 1240, bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 2,  title: "Banking Fundamentals",   category: "private",    sub: "Banking",       type: "free",    emoji:"🏦", topics: 8,  progress: 50, pages: 210, downloads: 980,  bookmarked: true,  studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 3,  title: "Data Structures & Algo", category: "private",    sub: "IT",            type: "premium", emoji:"🌲", topics: 15, progress: 30, pages: 480, downloads: 2100, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/dsa.pdf", indiaOrAbroad: null },
  { id: 4,  title: "UPSC History Notes",     category: "government", sub: "UPSC",          type: "free",    emoji:"📜", topics: 20, progress: 60, pages: 600, downloads: 3400, bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 5,  title: "SSC Mathematics",        category: "government", sub: "SSC",           type: "free",    emoji:"📐", topics: 10, progress: 0,  pages: 280, downloads: 1800, bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 6,  title: "IBPS PO Guide",          category: "government", sub: "Banking (Govt)",type: "premium", emoji:"🏧", topics: 14, progress: 0,  pages: 390, downloads: 2200, bookmarked: true,  studentId: null, uploadType: "link", fileLink: "https://ibps.in/study-material", indiaOrAbroad: null },
  { id: 7,  title: "CAT Verbal Ability",     category: "higher",     sub: "CAT/MBA",       type: "premium", emoji:"📝", topics: 9,  progress: 20, pages: 240, downloads: 760,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: "India" },
  { id: 8,  title: "GRE Vocabulary",         category: "higher",     sub: "GRE/GMAT",      type: "free",    emoji:"🔤", topics: 6,  progress: 40, pages: 180, downloads: 540,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: "Abroad" },
  { id: 9,  title: "Agricultural Science",   category: "government", sub: "State PSC",     type: "free",    emoji:"🌾", topics: 11, progress: 0,  pages: 320, downloads: 890,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 10, title: "Python for Beginners",   category: "private",    sub: "IT",            type: "free",    emoji:"🐍", topics: 10, progress: 85, pages: 290, downloads: 3100, bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 11, title: "Railway RRB Guide",      category: "government", sub: "Railways",      type: "premium", emoji:"🚂", topics: 13, progress: 0,  pages: 410, downloads: 1650, bookmarked: false, studentId: null, uploadType: "pdf",  fileLink: "https://example.com/rrb.pdf", indiaOrAbroad: null },
  { id: 12, title: "MBA Case Studies",       category: "higher",     sub: "CAT/MBA",       type: "premium", emoji:"💼", topics: 8,  progress: 0,  pages: 200, downloads: 430,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: "India" },
  { id: 13, title: "Digital Marketing",      category: "private",    sub: "Marketing",     type: "free",    emoji:"📊", topics: 7,  progress: 55, pages: 190, downloads: 670,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
  { id: 14, title: "Research Methodology",   category: "higher",     sub: "Research",      type: "free",    emoji:"🔬", topics: 5,  progress: 10, pages: 160, downloads: 310,  bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: "Both" },
  { id: 15, title: "Defence NDA Prep",       category: "government", sub: "Defence",       type: "premium", emoji:"⚔️", topics: 16, progress: 0,  pages: 500, downloads: 1200, bookmarked: false, studentId: null, uploadType: null, fileLink: "", indiaOrAbroad: null },
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

const COLLEGE_READING_DATA = [
  { college: "JNTU Hyderabad",           readers: 1240, materials: ["Java Programming","Python for Beginners","DSA","UPSC History Notes","SSC Mathematics"] },
  { college: "Osmania University",        readers: 980,  materials: ["Banking Fundamentals","IBPS PO Guide","CAT Verbal Ability","Research Methodology"] },
  { college: "IIT Bombay",               readers: 760,  materials: ["Data Structures & Algo","Python for Beginners","Java Programming","GRE Vocabulary"] },
  { college: "NIT Warangal",             readers: 640,  materials: ["Java Programming","DSA","Digital Marketing","Railway RRB Guide"] },
  { college: "VIT Vellore",              readers: 520,  materials: ["Python for Beginners","Java Programming","CAT Verbal Ability","MBA Case Studies"] },
  { college: "BITS Pilani",              readers: 480,  materials: ["Data Structures & Algo","Research Methodology","GRE Vocabulary","MBA Case Studies"] },
  { college: "Hyderabad Central Univ",   readers: 340,  materials: ["UPSC History Notes","SSC Mathematics","Agricultural Science","Defence NDA Prep"] },
  { college: "IIT Hyderabad",            readers: 290,  materials: ["Python for Beginners","Java Programming","DSA","Digital Marketing"] },
];

const MOST_VIEWED_MATERIALS = [
  { id: 4,  title: "UPSC History Notes",     views: 8420, reads: 6200, category: "government", emoji: "📜" },
  { id: 10, title: "Python for Beginners",   views: 7890, reads: 5900, category: "private",    emoji: "🐍" },
  { id: 1,  title: "Java Programming",       views: 6540, reads: 4800, category: "private",    emoji: "☕" },
  { id: 3,  title: "Data Structures & Algo", views: 5930, reads: 3900, category: "private",    emoji: "🌲" },
  { id: 5,  title: "SSC Mathematics",        views: 4820, reads: 3400, category: "government", emoji: "📐" },
];

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

// ─── PIE CHART ─────────────────────────────────────────────────────────────────
function PieChart({ services, onClose }) {
  const [hovered, setHovered] = useState(null);
  const total = services.reduce((a, s) => a + s.users, 0);
  const size = 280;
  const cx = size / 2, cy = size / 2, r = 100, innerR = 55;

  let startAngle = -Math.PI / 2;
  const slices = services.map((s, i) => {
    const pct = s.users / total;
    const angle = pct * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const xi1 = cx + innerR * Math.cos(startAngle);
    const yi1 = cy + innerR * Math.sin(startAngle);
    const xi2 = cx + innerR * Math.cos(endAngle);
    const yi2 = cy + innerR * Math.sin(endAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const midAngle = startAngle + angle / 2;
    const labelR = r + 26;
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);
    const slice = { ...s, pct: Math.round(pct * 100), x1, y1, x2, y2, xi1, yi1, xi2, yi2, largeArc, lx, ly, midAngle, startAngle, endAngle, color: PIE_COLORS[i] };
    startAngle = endAngle;
    return slice;
  });

  const hov = hovered !== null ? slices[hovered] : null;

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:C.surface,borderRadius:24,maxWidth:820,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)",overflow:"hidden"}}>
        <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",borderBottom:`1px solid #bfdbfe`,padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:3}}>Analytics Overview</div>
            <h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#1e3a8a"}}>📊 Service Usage Distribution</h2>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:14,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
        </div>
        <div style={{padding:"28px 32px",display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"}}>
          <div style={{position:"relative",flexShrink:0}}>
            <svg width={size} height={size} style={{filter:"drop-shadow(0 8px 24px rgba(59,130,246,0.15))"}}>
              {slices.map((sl, i) => {
                const isHov = hovered === i;
                const ox = isHov ? Math.cos(sl.midAngle) * 8 : 0;
                const oy = isHov ? Math.sin(sl.midAngle) * 8 : 0;
                return (
                  <g key={i} style={{cursor:"pointer",transform:`translate(${ox}px,${oy}px)`,transition:"transform 0.25s ease"}}
                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                    <path
                      d={`M ${cx} ${cy} L ${sl.x1} ${sl.y1} A ${r} ${r} 0 ${sl.largeArc} 1 ${sl.x2} ${sl.y2} Z`}
                      fill={sl.color} opacity={isHov ? 1 : 0.88}
                      stroke="#fff" strokeWidth={2}
                      style={{transition:"opacity 0.2s"}}
                    />
                    <path
                      d={`M ${sl.xi1} ${sl.yi1} A ${innerR} ${innerR} 0 ${sl.largeArc} 1 ${sl.xi2} ${sl.yi2} L ${sl.x2} ${sl.y2} A ${r} ${r} 0 ${sl.largeArc} 0 ${sl.x1} ${sl.y1} Z`}
                      fill="#fff" opacity={0.18}
                    />
                  </g>
                );
              })}
              <circle cx={cx} cy={cy} r={innerR} fill={C.surface}/>
              {hov ? (
                <>
                  <text x={cx} y={cy-10} textAnchor="middle" fontSize={11} fontWeight={800} fill={hov.color}>{hov.icon}</text>
                  <text x={cx} y={cy+6} textAnchor="middle" fontSize={18} fontWeight={900} fill={hov.color}>{hov.pct}%</text>
                  <text x={cx} y={cy+22} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.textMut}>{hov.users.toLocaleString()}</text>
                </>
              ) : (
                <>
                  <text x={cx} y={cy-5} textAnchor="middle" fontSize={13} fontWeight={900} fill={C.textPri}>Total</text>
                  <text x={cx} y={cy+13} textAnchor="middle" fontSize={17} fontWeight={900} fill={C.amber}>{(total/1000).toFixed(1)}K</text>
                </>
              )}
            </svg>
          </div>
          <div style={{flex:1,minWidth:280}}>
            <div style={{fontSize:12,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Service Breakdown</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {slices.map((sl, i) => (
                <div key={i}
                  onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                  style={{
                    display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,cursor:"pointer",
                    background: hovered===i ? sl.bg : C.elevated,
                    border:`1.5px solid ${hovered===i ? sl.border : C.border}`,
                    transition:"all 0.2s",transform: hovered===i ? "translateX(6px)" : "translateX(0)",
                  }}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:sl.color,flexShrink:0,boxShadow:`0 0 6px ${sl.color}66`}}/>
                  <span style={{fontSize:15}}>{sl.icon}</span>
                  <span style={{fontWeight:700,fontSize:13,color:C.textPri,flex:1}}>{sl.name}</span>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:13,fontWeight:800,color:sl.color}}>{sl.pct}%</div>
                    <div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{sl.users.toLocaleString()} users</div>
                  </div>
                  <div style={{width:60,height:6,background:C.border,borderRadius:6,overflow:"hidden"}}>
                    <div style={{width:`${sl.pct}%`,height:"100%",background:sl.color,borderRadius:6,transition:"width 1s ease"}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ADDING SOON POPUP (replaces reject) ─────────────────────────────────────
function AddingSoonPopup({ request, onConfirm, onClose }) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99500,backdropFilter:"blur(6px)",padding:20}}>
      <div style={{background:C.surface,borderRadius:24,maxWidth:460,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.35s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{height:5,background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)"}}/>
        <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
          <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,animation:"orbPulse 2s ease-in-out infinite"}}>
            📅
          </div>
          <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Material Status Update</div>
          <h2 style={{margin:"0 0 10px",fontSize:19,fontWeight:900,color:C.textPri}}>Notify Student</h2>
          <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:12,color:"#1e40af",fontWeight:700,marginBottom:6}}>📨 Notification to be sent:</div>
            <p style={{margin:0,fontSize:13,color:"#1e3a8a",fontWeight:600,lineHeight:1.6}}>
              "Hi <strong>{request.studentName}</strong>, your requested material <strong>"{request.title}"</strong> is currently being prepared and will be added to the library soon. Stay tuned! 🎉"
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
            {[
              {icon:"👤",label:"Student",val:request.studentName},
              {icon:"📚",label:"Material",val:request.title,small:true},
            ].map((item,i)=>(
              <div key={i} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"left"}}>
                <div style={{fontSize:18,marginBottom:4}}>{item.icon}</div>
                <div style={{fontSize:item.small?11:12,fontWeight:700,color:C.textPri,lineHeight:1.3}}>{item.val}</div>
                <div style={{fontSize:10,color:C.textMut,fontWeight:600,marginTop:2}}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:10}}>
            <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>Cancel</button>
            <button onClick={onConfirm} style={{flex:2,background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:"0 4px 18px rgba(59,130,246,0.35)",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
              📅 Send Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── E-Library Detail Modal ───────────────────────────────────────────────────
function ELibraryDetailModal({ service: s, onClose }) {
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 40); }, []);

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:C.surface,borderRadius:24,maxWidth:780,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
        <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:`radial-gradient(circle,${s.color}22,transparent)`,animation:"orbPulse 4s ease-in-out infinite"}}/>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700,backdropFilter:"blur(4px)"}}>✕ Close</button>
          <div style={{display:"flex",alignItems:"center",gap:18}}>
            <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
            <div>
              <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
              <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
              <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
                <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
                <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
              </div>
            </div>
          </div>
          <div style={{marginTop:16,background:"rgba(255,255,255,0.6)",borderRadius:10,padding:"8px 14px",backdropFilter:"blur(4px)",border:`1px solid ${s.border}`}}>
            <span style={{fontSize:12,color:C.textSec,fontWeight:700}}>🏆 Most active college: </span>
            <span style={{fontSize:13,fontWeight:900,color:s.color}}>{s.topCollege}</span>
          </div>
        </div>
        <div style={{padding:"24px 26px"}}>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📊 Key Metrics</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:26}}>
            {[
              {icon:"📚",label:"Materials",value:s.stats.materials,color:s.color,bg:s.bg},
              {icon:"⬇️",label:"Total Downloads",value:s.stats.downloads.toLocaleString(),color:"#1e40af",bg:"#eff6ff"},
              {icon:"📨",label:"Total Requests",value:s.stats.requests,color:"#92400e",bg:"#fffbeb"},
              {icon:"✅",label:"Approved",value:s.stats.approved,color:"#166534",bg:"#f0fdf4"},
              {icon:"⏳",label:"Pending",value:s.stats.pending,color:"#d97706",bg:"#fffbeb"},
              {icon:"📅",label:"Adding Soon",value:s.stats.rejected,color:"#1e40af",bg:"#eff6ff"},
            ].map((item,i)=>(
              <div key={i} style={{background:item.bg,border:`1.5px solid ${item.color}33`,borderRadius:14,padding:"16px 18px",animation:`cardIn 0.35s ease ${i*0.06}s both`}}>
                <div style={{fontSize:20,marginBottom:6}}>{item.icon}</div>
                <div style={{fontSize:22,fontWeight:900,color:item.color}}>{item.value}</div>
                <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ College-wise Downloads & Users</div>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:26}}>
            {s.stats.collegeStats.map((clg, i) => {
              const maxDl = s.stats.collegeStats[0].downloads;
              const pct = Math.round((clg.downloads / maxDl) * 100);
              const medals = ["🥇","🥈","🥉"];
              return (
                <div key={clg.name} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 18px",animation:`cardIn 0.35s ease ${i*0.07}s both`}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:16}}>{medals[i]||`#${i+1}`}</span>
                      <div>
                        <div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.name}</div>
                        <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>👥 {clg.users.toLocaleString()} active readers</div>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:14,fontWeight:900,color:s.color}}>⬇️ {clg.downloads.toLocaleString()}</div>
                      <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>downloads</div>
                    </div>
                  </div>
                  <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}>
                    <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${s.color},${s.color}77)`,borderRadius:8,transition:"width 1.2s ease"}}/>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📖 Most Viewed Materials</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {MOST_VIEWED_MATERIALS.map((mat,i)=>{
              const cat = CATEGORIES[mat.category];
              const readPct = Math.round((mat.reads/mat.views)*100);
              return (
                <div key={mat.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:14,animation:`cardIn 0.3s ease ${i*0.06}s both`}}>
                  <div style={{width:36,height:36,borderRadius:10,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{mat.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:13,marginBottom:3}}>{mat.title}</div>
                    <div style={{display:"flex",gap:12,fontSize:11,color:C.textMut,fontWeight:600}}>
                      <span>👁 {mat.views.toLocaleString()} views</span>
                      <span>📖 {mat.reads.toLocaleString()} reads</span>
                      <span style={{color:cat.color,fontWeight:700}}>{readPct}% read rate</span>
                    </div>
                  </div>
                  <div style={{width:80}}>
                    <div style={{height:6,background:C.border,borderRadius:6,overflow:"hidden"}}>
                      <div style={{width:`${readPct}%`,height:"100%",background:cat.color,borderRadius:6}}/>
                    </div>
                  </div>
                  <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"3px 10px",fontSize:10,fontWeight:700,border:`1px solid ${cat.border}`,flexShrink:0}}>#{i+1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SERVICE DETAIL MODAL ──────────────────────────────────────────────────────
function ServiceDetailModal({ service: s, onClose }) {
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 40); }, []);
  const statEntries = Object.entries(s.stats).filter(([k]) => !["collegeStats","topCollege"].includes(k));
  const statLabels = {
    materials:"Materials",downloads:"Total Downloads",requests:"Requests",pending:"Pending",approved:"Approved",rejected:"Adding Soon",
    created:"Created",downloaded:"Downloaded",templates:"Templates",avgScore:"Avg Score",
    sent:"Alerts Sent",read:"Read",active:"Active Users",categories:"Categories",
    events:"Events",reminders:"Reminders",synced:"Synced",upcoming:"Upcoming",
    courses:"Courses",enrolled:"Enrolled",completed:"Completed",avgHours:"Avg Hours",
    tests:"Tests",attempts:"Attempts",toppers:"Toppers",
    sessions:"Sessions",mentors:"Mentors",avgRating:"Avg Rating",placed:"Placed",
    contests:"Contests",participants:"Participants",problems:"Problems",winners:"Winners",
  };
  const statIcons = {
    materials:"📚",downloads:"⬇️",requests:"📨",pending:"⏳",approved:"✅",rejected:"📅",
    created:"📄",downloaded:"⬇️",templates:"🎨",avgScore:"🎯",
    sent:"📤",read:"👁",active:"👥",categories:"🏷️",
    events:"📅",reminders:"🔔",synced:"🔄",upcoming:"📆",
    courses:"⚡",enrolled:"👥",completed:"🏅",avgHours:"⏱️",
    tests:"📝",attempts:"🔢",toppers:"🏆",
    sessions:"💬",mentors:"🧑‍🏫",avgRating:"⭐",placed:"💼",
    contests:"🏆",participants:"👥",problems:"🧩",winners:"🥇",
  };
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:C.surface,borderRadius:24,maxWidth:640,width:"100%",maxHeight:"90vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
        <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕</button>
          <div style={{display:"flex",alignItems:"center",gap:18}}>
            <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
            <div>
              <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
              <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
              <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center"}}>
                <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
                <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:"24px 26px"}}>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Key Metrics</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
            {statEntries.map(([k,v],i) => (
              <div key={k} style={{background:C.elevated,border:`1.5px solid ${C.border}`,borderRadius:14,padding:"16px 18px",animation:`cardIn 0.35s ease ${i*0.06}s both`}}>
                <div style={{fontSize:20,marginBottom:6}}>{statIcons[k]||"📊"}</div>
                <div style={{fontSize:22,fontWeight:900,color:s.color}}>{typeof v==="number"?v.toLocaleString():v}</div>
                <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{statLabels[k]||k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── OVERALL SERVICES DASHBOARD ───────────────────────────────────────────────
function OverallDashboard({ onBack }) {
  const [animIn, setAnimIn] = useState(false);
  const [showPie, setShowPie] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  const totalUsers = SERVICES.reduce((a, s) => a + s.users, 0);
  const mostUsed = [...SERVICES].sort((a, b) => b.users - a.users)[0];
  const animStyle = (i) => ({
    opacity: animIn ? 1 : 0,
    transform: animIn ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
    transition: `all 0.5s cubic-bezier(.4,0,.2,1) ${i * 0.07}s`,
  });
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 40%,#f0fdf4 100%)", fontFamily: "'Nunito',sans-serif", color: C.textPri }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes cardIn{from{opacity:0;transform:translateY(16px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0.3)}50%{box-shadow:0 0 0 10px rgba(59,130,246,0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .svc-card:hover{transform:translateY(-8px) scale(1.02)!important;box-shadow:0 24px 60px rgba(15,23,42,0.14)!important;}
        .svc-card{transition:all 0.3s cubic-bezier(.4,0,.2,1)!important;}
      `}</style>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "0 32px", boxShadow: "0 2px 14px rgba(15,23,42,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={onBack} style={{ background: C.elevated, border: `1px solid ${C.border}`, color: C.textSec, borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: 700 }}>← Home</button>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 28, animation: "float 3s ease-in-out infinite" }}>🌐</span>
              <div>
                <div style={{ fontWeight: 900, fontSize: 18, color: "#1e40af" }}>OYS Platform</div>
                <div style={{ fontSize: 11, color: C.textMut, fontWeight: 600 }}>Overall Services Dashboard</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)", border: "1.5px solid #93c5fd", borderRadius: 12, padding: "8px 18px", fontSize: 13, fontWeight: 800, color: "#1e40af" }}>
              👥 {(totalUsers / 1000).toFixed(1)}K Total Users
            </div>
            <button onClick={() => setShowPie(true)} style={{ background: "linear-gradient(135deg,#3b82f6,#6366f1)", color: "#fff", border: "none", borderRadius: 12, padding: "10px 20px", cursor: "pointer", fontSize: 13, fontWeight: 800, fontFamily: "inherit", boxShadow: "0 4px 18px rgba(59,130,246,0.4)", display: "flex", alignItems: "center", gap: 7 }}>
              📊 View Pie Chart
            </button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 32px" }}>
        <div style={{ ...animStyle(0), marginBottom: 36 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, margin: "0 0 6px", color: C.textPri }}>All Services Overview</h1>
          <p style={{ color: C.textSec, fontSize: 15, margin: 0, fontWeight: 600 }}>Real-time usage analytics across all OYS platform services</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 40, ...animStyle(1) }}>
          {[
            { label: "Total Services", value: "8", icon: "🌐", color: "#3b82f6", bg: "#eff6ff", border: "#bfdbfe" },
            { label: "Total Users", value: `${(totalUsers/1000).toFixed(1)}K`, icon: "👥", color: "#10b981", bg: "#f0fdf4", border: "#a7f3d0" },
            { label: "Most Used", value: mostUsed.name, icon: mostUsed.icon, color: "#f59e0b", bg: "#fffbeb", border: "#fde68a", small: true },
            { label: "Active This Month", value: "42.1K", icon: "📈", color: "#6366f1", bg: "#eff6ff", border: "#c7d2fe" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.surface, border: `1.5px solid ${s.border}`, borderRadius: 18, padding: "20px 22px", boxShadow: "0 4px 20px rgba(15,23,42,0.06)", animation: `cardIn 0.4s ease ${i * 0.08}s both` }}>
              <div style={{ background: s.bg, borderRadius: 10, padding: "8px 10px", fontSize: 22, display: "inline-block", marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: s.small ? 16 : 26, fontWeight: 900, color: s.color, lineHeight: 1.2, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: C.textMut, fontWeight: 700 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {SERVICES.map((s, i) => {
            const isHov = hoveredCard === i;
            const pct = Math.round((s.users / totalUsers) * 100);
            const isLibrary = s.id === "elibrary";
            return (
              <div key={s.id} className="svc-card"
                onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedService(s)}
                style={{ background: C.surface, borderRadius: 20, border: `2px solid ${isHov ? s.color : C.border}`, overflow: "hidden", cursor: "pointer", boxShadow: C.shadow, animation: `cardIn 0.45s ease ${i * 0.06}s both`, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: 6, alignSelf: "stretch", background: s.color, flexShrink: 0, borderRadius: "20px 0 0 20px" }} />
                  <div style={{ background: s.gradient, padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, border: `2px solid ${s.border}` }}>{s.icon}</div>
                  </div>
                  <div style={{ flex: 1, padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                      <div>
                        <div style={{ fontWeight: 900, fontSize: 17, color: C.textPri, marginBottom: 3 }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: C.textSec, fontWeight: 600 }}>{s.description}</div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: s.color }}>{s.users.toLocaleString()}</div>
                        <div style={{ fontSize: 11, color: C.textMut, fontWeight: 600 }}>total users</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ height: 7, background: C.border, borderRadius: 8, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,${s.color},${s.color}99)`, borderRadius: 8 }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                      <div style={{ fontSize: 12, color: C.textSec, fontWeight: 700 }}>🏆 {s.topCollege}</div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: "#166534", background: "#f0fdf4", padding: "3px 10px", borderRadius: 7, border: "1px solid #86efac" }}>↑ {s.trend}</div>
                      <div style={{ marginLeft: "auto", color: s.color, fontSize: 13, fontWeight: 800, opacity: isHov ? 1 : 0, transition: "opacity 0.2s" }}>View Details →</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showPie && <PieChart services={SERVICES} onClose={() => setShowPie(false)} />}
      {selectedService && selectedService.id === "elibrary" && <ELibraryDetailModal service={selectedService} onClose={() => setSelectedService(null)} />}
      {selectedService && selectedService.id !== "elibrary" && <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </div>
  );
}

// ─── PREMIUM UNLOCK BANNER ────────────────────────────────────────────────────
function PremiumBanner({ completedCount, premiumMaterials, onOpen }) {
  const unlocked = completedCount >= 3;
  const needed = 3 - completedCount;
  return (
    <div style={{
      background: unlocked ? "linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)" : "linear-gradient(135deg,#f1f5f9,#e2e8f0)",
      border: `2px solid ${unlocked ? "#f59e0b" : C.border}`,
      borderRadius: 20, padding: "24px 28px", marginBottom: 28,
      position: "relative", overflow: "hidden", animation: "slideDown 0.5s ease",
    }}>
      {unlocked && <div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)",animation:"shimmer 2.5s infinite"}}/>}
      <div style={{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",position:"relative"}}>
        <div style={{fontSize:48,animation:unlocked?"bounce 1s ease infinite":"none"}}>{unlocked ? "🔓" : "🔒"}</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:18,color:unlocked?"#92400e":C.textSec,marginBottom:4}}>
            {unlocked ? "✨ Premium Unlocked! You've completed 3 materials" : `${needed} more material${needed>1?"s":""} to unlock Premium`}
          </div>
          <div style={{fontSize:13,color:unlocked?"#b45309":C.textMut}}>
            {unlocked ? `${premiumMaterials.length} premium materials now available — click any to open!` : `Complete ${needed} more free material${needed>1?"s":""} to get access to all premium content`}
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
              <button key={m.id} onClick={()=>onOpen(m)} style={{background:"rgba(255,255,255,0.7)",border:"1.5px solid #f59e0b",borderRadius:12,padding:"10px 12px",cursor:"pointer",textAlign:"center",backdropFilter:"blur(8px)"}}>
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

// ─── E-PREP ROUTING POPUP ─────────────────────────────────────────────────────
function EPrepRoutingPopup({ material, onClose }) {
  const [countdown, setCountdown] = useState(10);
  const [messages] = useState([
    "🎯 Preparing your personalised E-Preparation session...",
    "📊 Loading quiz modules and practice sets...",
    "🔄 Syncing your progress and bookmarks...",
    "✅ All set! Redirecting to E-Preparation platform...",
  ]);
  const [msgIndex, setMsgIndex] = useState(0);
  const eprepUrl = EPREP_LINKS[material.id] || "https://www.javatpoint.com/java-quiz";

  useEffect(() => {
    const msgInterval = setInterval(() => { setMsgIndex(p => Math.min(p + 1, messages.length - 1)); }, 2500);
    const countInterval = setInterval(() => {
      setCountdown(p => {
        if (p <= 1) { clearInterval(countInterval); clearInterval(msgInterval); window.open(eprepUrl, "_blank"); setTimeout(onClose, 300); return 0; }
        return p - 1;
      });
    }, 1000);
    return () => { clearInterval(msgInterval); clearInterval(countInterval); };
  }, []);

  const pct = ((10 - countdown) / 10) * 100;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(8px)",padding:20}}>
      <div style={{background:C.surface,borderRadius:24,maxWidth:480,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{height:6,background:`linear-gradient(90deg,#1e40af,#6366f1,#8b5cf6)`,width:"100%"}}/>
        <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
          <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,animation:"orbPulse 2s ease-in-out infinite"}}>🎯</div>
          <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Redirecting to</div>
          <h2 style={{margin:"0 0 6px",fontSize:20,fontWeight:900,color:C.textPri}}>E-Preparation Platform</h2>
          <p style={{margin:"0 0 24px",fontSize:13,color:C.textSec,fontWeight:600}}>{material.title}</p>
          <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:24,minHeight:52,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <p style={{margin:0,fontSize:13,color:"#1e40af",fontWeight:700}}>{messages[msgIndex]}</p>
          </div>
          <div style={{marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:10}}>
              <div style={{width:48,height:48,position:"relative",flexShrink:0}}>
                <svg width={48} height={48} style={{transform:"rotate(-90deg)"}}>
                  <circle cx={24} cy={24} r={20} fill="none" stroke={C.border} strokeWidth={4}/>
                  <circle cx={24} cy={24} r={20} fill="none" stroke="#1e40af" strokeWidth={4} strokeDasharray={125.6} strokeDashoffset={125.6-(pct/100)*125.6} style={{transition:"stroke-dashoffset 0.9s linear",strokeLinecap:"round"}}/>
                </svg>
                <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,color:"#1e40af"}}>{countdown}</div>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:13,fontWeight:800,color:C.textPri}}>Redirecting in {countdown}s</div>
                <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>Opens in new tab automatically</div>
              </div>
            </div>
            <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}>
              <div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#6366f1)",borderRadius:8,transition:"width 0.9s linear"}}/>
            </div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>✕ Cancel</button>
            <a href={eprepUrl} target="_blank" rel="noreferrer" onClick={onClose} style={{flex:2,background:"linear-gradient(135deg,#1e40af,#3b82f6)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6,boxShadow:"0 4px 18px rgba(30,64,175,0.35)"}}>
              🚀 Go Now
            </a>
          </div>
        </div>
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
  const [eprepPopup, setEprepPopup]     = useState(null);
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

  const handleEprepClick = (m, e) => {
    if (m.id === 1) { e.preventDefault(); setEprepPopup(m); }
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

  const getStatusBadge = (status) => {
    if (status === "approved") return { bg:"#f0fdf4", color:"#166534", border:"#86efac", text:"✅ Approved" };
    if (status === "coming_soon") return { bg:"#eff6ff", color:"#1e40af", border:"#93c5fd", text:"📅 Adding Soon" };
    return { bg:"#fffbeb", color:"#92400e", border:"#fcd34d", text:"⏳ Pending" };
  };

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
        @keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}
        @keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
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
            <div style={{background:completedCount>=3?"#f0fdf4":"#fffbeb",border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`,borderRadius:20,padding:"6px 16px",color:completedCount>=3?"#166534":"#92400e",fontSize:12,fontWeight:700,fontFamily:"inherit",animation:completedCount>=3?"pulse 2s infinite":"none"}}>
              {completedCount>=3?"🔓 Premium Unlocked!!":"✅ "+completedCount+"/3 for Premium"}
            </div>
            <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 18px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>
              + Request Material
            </button>
          </div>
        </div>
      </div>

      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px"}}>
        <div style={{maxWidth:1300,margin:"0 auto",display:"flex",gap:0}}>
          {[["library","📖 Library"],["requests","📨 My Requests"]].map(([v,l])=>(
            <button key={v} onClick={()=>setActiveView(v)} style={{background:"none",border:"none",padding:"14px 22px",color:activeView===v?C.amber:C.textSec,borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`,cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s"}}>
              {l} {v==="requests"&&myPending>0&&<span style={{background:C.rose,color:"#fff",borderRadius:10,padding:"1px 7px",fontSize:10,marginLeft:6}}>{myPending}</span>}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:"28px",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.5s ease"}}>

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
                {requests.map(r=>{
                  const badge = getStatusBadge(r.status);
                  return (
                    <div key={r.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"20px 26px",display:"flex",alignItems:"center",gap:20,boxShadow:C.shadow,animation:"cardIn 0.4s ease"}}>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:800,fontSize:15,marginBottom:4}}>{r.title}</div>
                        <div style={{fontSize:12,color:C.textSec,marginBottom:6}}>{CATEGORIES[r.category]?.label} → {r.sub}</div>
                        <div style={{fontSize:12,color:C.textMut,fontStyle:"italic"}}>"{r.reason}"</div>
                      </div>
                      <div style={{textAlign:"right"}}>
                        <div style={{display:"inline-block",borderRadius:10,padding:"6px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>{badge.text}</div>
                        <div style={{fontSize:11,color:C.textMut,marginTop:6}}>{r.date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeView==="library"&&(
          <>
            <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>
            <div style={{position:"relative",marginBottom:24}}>
              <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontSize:16,color:C.textMut}}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by subject, course, topic..."
                style={{width:"100%",padding:"14px 16px 14px 46px",borderRadius:14,border:`1.5px solid ${search?C.amber:C.border}`,background:C.surface,color:C.textPri,fontSize:15,outline:"none",boxSizing:"border-box",fontFamily:"inherit",boxShadow:C.shadow,transition:"border-color 0.25s"}}/>
              {search&&<button onClick={()=>setSearch("")} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:16,color:C.textMut}}>✕</button>}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:24}}>
              {Object.entries(CATEGORIES).map(([key,cat])=>(
                <div key={key} className="cat-card" onClick={()=>{setActiveCat(activeCategory===key?"all":key);setActiveSub("all");}}
                  style={{background:activeCategory===key?cat.gradient:C.surface,border:`1.5px solid ${activeCategory===key?cat.color:C.border}`,borderRadius:16,padding:"20px 24px",cursor:"pointer",boxShadow:activeCategory===key?`0 8px 32px ${cat.color}22`:C.shadow}}>
                  <div style={{fontSize:36,marginBottom:10}}>{cat.icon}</div>
                  <div style={{fontWeight:800,fontSize:15,color:activeCategory===key?cat.color:C.textPri}}>{cat.label}</div>
                  <div style={{fontSize:12,marginTop:4,color:C.textSec}}>{CATEGORY_SUBS[key].length} streams · {_globalMaterials.filter(m=>m.category===key).length} materials</div>
                  {/* India/Abroad indicator for Higher Education */}
                  {key==="higher"&&(
                    <div style={{marginTop:8,display:"flex",gap:5,flexWrap:"wrap"}}>
                      <span style={{background:"#f0fdf4",color:"#166534",borderRadius:6,padding:"2px 7px",fontSize:10,fontWeight:700,border:"1px solid #86efac"}}>🇮🇳 India</span>
                      <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:6,padding:"2px 7px",fontSize:10,fontWeight:700,border:"1px solid #93c5fd"}}>✈️ Abroad</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Higher Education India/Abroad sub-filter */}
            {activeCategory==="higher"&&(
              <div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:14,padding:"14px 18px",marginBottom:18,display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
                <span style={{fontSize:13,fontWeight:800,color:"#5b21b6"}}>🌍 Filter by Destination:</span>
                {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"],].map(([v,l])=>(
                  <button key={v} onClick={()=>setActiveSub(v==="all"?"all":v)} style={{padding:"7px 14px",borderRadius:9,border:`1.5px solid ${activeSub===(v==="all"?"all":v)?"#7c3aed":"#c4b5fd"}`,background:activeSub===(v==="all"?"all":v)?"#7c3aed":"rgba(255,255,255,0.7)",color:activeSub===(v==="all"?"all":v)?"#fff":"#5b21b6",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.18s"}}>
                    {l}
                  </button>
                ))}
              </div>
            )}

            <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:22,flexWrap:"wrap"}}>
              {activeCategory!=="all"&&activeCategory!=="higher"&&(
                <select value={activeSub} onChange={e=>setActiveSub(e.target.value)} style={{padding:"9px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",outline:"none",fontFamily:"inherit"}}>
                  {["all",...CATEGORY_SUBS[activeCategory]].map(s=><option key={s} value={s}>{s==="all"?"All Sub-categories":s}</option>)}
                </select>
              )}
              <div style={{marginLeft:"auto",color:C.textMut,fontSize:13,fontWeight:600}}>
                {filtered.filter(m => {
                  if (activeCategory !== "higher") return true;
                  if (activeSub === "all") return true;
                  if (activeSub === "India" || activeSub === "Abroad") return m.indiaOrAbroad === activeSub || m.indiaOrAbroad === "Both";
                  if (activeSub === "Both") return m.indiaOrAbroad === "Both";
                  return true;
                }).length} materials
              </div>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:20}}>
              {filtered.filter(m => {
                if (activeCategory !== "higher") return true;
                if (activeSub === "all") return true;
                if (activeSub === "India") return m.indiaOrAbroad === "India" || m.indiaOrAbroad === "Both";
                if (activeSub === "Abroad") return m.indiaOrAbroad === "Abroad" || m.indiaOrAbroad === "Both";
                if (activeSub === "Both") return m.indiaOrAbroad === "Both";
                return true;
              }).map((m,i)=>{
                const cat=CATEGORIES[m.category];
                const locked=m.type==="premium"&&completedCount<3;
                const crash=CRASH_COURSES[m.id];
                const isJava = m.id === 1;
                return (
                  <div key={m.id} className="mat-card" style={{background:C.surface,borderRadius:18,border:`1.5px solid ${m.bookmarked?C.amber:C.border}`,overflow:"hidden",animation:`cardIn 0.45s ease ${i*0.05}s both`,boxShadow:C.shadow,position:"relative"}}>
                    <div style={{background:cat.gradient,padding:"28px 0 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,position:"relative",minHeight:130}}>
                      <MatThumb m={m} size={80}/>
                      {locked&&<div style={{position:"absolute",top:10,left:10,background:"#92400e",color:"#fef3c7",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>🔒 PREMIUM</div>}
                      {!locked&&m.type==="premium"&&<div style={{position:"absolute",top:10,left:10,background:cat.color,color:"#fff",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>✨ PREMIUM</div>}
                      {m.uploadType==="pdf"&&<div style={{position:"absolute",bottom:10,right:10,background:"#fef2f2",color:"#991b1b",border:"1px solid #fca5a5",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>📄 PDF</div>}
                      {m.uploadType==="link"&&<div style={{position:"absolute",bottom:10,right:10,background:"#eff6ff",color:"#1e40af",border:"1px solid #93c5fd",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>🔗 Link</div>}
                      {m.category==="higher"&&m.indiaOrAbroad&&(
                        <div style={{position:"absolute",bottom:10,left:10,background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",border:`1px solid ${m.indiaOrAbroad==="India"?"#86efac":m.indiaOrAbroad==="Abroad"?"#93c5fd":"#c4b5fd"}`,fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>
                          {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
                        </div>
                      )}
                      <button onClick={e=>{e.stopPropagation();toggleBookmark(m.id);}} style={{position:"absolute",top:10,right:10,background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)",border:`1px solid ${m.bookmarked?C.amber:C.border}`,borderRadius:8,padding:"5px 8px",cursor:"pointer",fontSize:14,backdropFilter:"blur(4px)"}}>
                        {m.bookmarked?"🔖":"🏷️"}
                      </button>
                    </div>
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
                      <div style={{display:"flex",gap:7,marginBottom:8}}>
                        <button className="btn-hover" onClick={()=>handleOpen(m)} style={{flex:1,background:locked?"#f1f5f9":`linear-gradient(135deg,${cat.color},${cat.color}dd)`,color:locked?C.textMut:"#fff",border:"none",borderRadius:10,padding:"9px 0",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",boxShadow:locked?"none":`0 4px 14px ${cat.color}33`}}>
                          {locked?"🔒 Locked":"📖 Open"}
                        </button>
                        <button className="btn-hover" onClick={()=>handleDownload(m)} style={{background:"#f1f5f9",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",cursor:"pointer",fontSize:13,color:C.textSec}} title="Download">⬇️</button>
                      </div>
                      {!locked&&(
                        <div style={{display:"flex",gap:7}}>
                          {isJava ? (
                            <button onClick={()=>setEprepPopup(m)} style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",fontFamily:"inherit"}}>🎯 E-Prep</button>
                          ) : (
                            <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",textDecoration:"none"}}>🎯 E-Prep</a>
                          )}
                          {crash&&(
                            <a href={crash.url} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#fff7ed,#ffedd5)",border:"1.5px solid #fdba74",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#c2410c",textDecoration:"none"}}>⚡ Crash Course</a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {openMaterial&&<MaterialModal material={openMaterial} onClose={()=>setOpenMat(null)} toast={toast} onEprepClick={m=>setEprepPopup(m)}/>}
      {showReqModal&&<RequestMaterialModal onClose={()=>setShowReqModal(false)} onSubmit={submitRequest}/>}
      {eprepPopup&&<EPrepRoutingPopup material={eprepPopup} onClose={()=>setEprepPopup(null)}/>}
    </div>
  );
}

// ─── MATERIAL MODAL (Mock Test tab REMOVED) ───────────────────────────────────
function MaterialModal({ material:m, onClose, toast, onEprepClick }) {
  const [topics, setTopics] = useState(JAVA_TOPICS);
  const [activeTab, setActiveTab] = useState("topics");
  const cat = CATEGORIES[m.category];
  const done = topics.filter(t=>t.done).length;
  const pct  = Math.round((done/topics.length)*100);
  const crash = CRASH_COURSES[m.id];
  const allDone = done === topics.length;
  const isJava = m.id === 1;

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease"}}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:C.surface,borderRadius:22,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease"}}>
        <div style={{background:cat.gradient,padding:"28px 28px 22px",borderRadius:"22px 22px 0 0",position:"relative",borderBottom:`1px solid ${cat.border}`}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:14,color:C.textSec,backdropFilter:"blur(4px)"}}>✕</button>
          <div style={{display:"flex",alignItems:"center",gap:18}}>
            <MatThumb m={m} size={72}/>
            <div>
              <h2 style={{margin:"0 0 6px",color:cat.color,fontSize:20,fontWeight:800}}>{m.title}</h2>
              <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {isJava ? (
                  <button onClick={()=>onEprepClick(m)} style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,border:"none",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(30,64,175,0.35)"}}>
                    🎯 E-Preparation
                  </button>
                ) : (
                  <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:"0 4px 14px rgba(30,64,175,0.35)"}}>
                    🎯 E-Preparation
                  </a>
                )}
                {crash&&(
                  <a href={crash.url} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:crash.color,color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:`0 4px 14px ${crash.color}44`}}>
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
        {/* TABS: mock test removed */}
        <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,padding:"0 24px"}}>
          {[["topics","📚 Topics"],["notes","🗒️ Notes"]].map(([t,l])=>(
            <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"13px 20px",border:"none",background:"none",fontWeight:700,fontSize:13,cursor:"pointer",color:activeTab===t?cat.color:C.textSec,borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`,fontFamily:"inherit",transition:"all 0.2s"}}>
              {l}
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

// ─── STUDENT ANALYTICS DASHBOARD (Department-wise replaces By Material) ───────
function StudentAnalyticsDashboard({ materials, students }) {
  // views: "college" | "private" | "government" | "higher"
  const [view, setView] = useState("college");
  const [higherFilter, setHigherFilter] = useState("all"); // all | India | Abroad | Both

  const getDeptMaterials = (cat) => {
    return materials.filter(m => m.category === cat).sort((a,b)=>b.downloads-a.downloads);
  };

  const getHigherMaterials = () => {
    return materials.filter(m => {
      if (m.category !== "higher") return false;
      if (higherFilter === "all") return true;
      if (higherFilter === "India") return m.indiaOrAbroad === "India" || m.indiaOrAbroad === "Both";
      if (higherFilter === "Abroad") return m.indiaOrAbroad === "Abroad" || m.indiaOrAbroad === "Both";
      if (higherFilter === "Both") return m.indiaOrAbroad === "Both";
      return true;
    }).sort((a,b)=>b.downloads-a.downloads);
  };

  const deptTabs = [
    { id: "college", label: "🏛️ By College", color: C.amber },
    { id: "private", label: "🏢 Private Sector", color: "#f59e0b" },
    { id: "government", label: "🏛️ Government", color: "#10b981" },
    { id: "higher", label: "🎓 Higher Education", color: "#6366f1" },
  ];

  const renderDeptMaterials = (mats, cat) => {
    const catInfo = CATEGORIES[cat];
    if (mats.length === 0) {
      return (
        <div style={{textAlign:"center",padding:"40px 0",color:C.textMut}}>
          <div style={{fontSize:40,marginBottom:10}}>📭</div>
          <div style={{fontSize:14,fontWeight:600}}>No materials found</div>
        </div>
      );
    }
    const maxDl = mats[0]?.downloads || 1;
    return (
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {mats.map((m, i) => {
          const pct = Math.round((m.downloads / maxDl) * 100);
          const medals = ["🥇","🥈","🥉"];
          // Get views from MOST_VIEWED_MATERIALS if available
          const viewed = MOST_VIEWED_MATERIALS.find(v => v.id === m.id);
          return (
            <div key={m.id} style={{background:C.surface,border:`1.5px solid ${catInfo.color}22`,borderRadius:14,padding:"18px 20px",animation:`cardIn 0.35s ease ${i*0.06}s both`,boxShadow:C.shadow}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
                <div style={{width:48,height:48,borderRadius:12,background:catInfo.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,border:`1px solid ${catInfo.border}`}}>{m.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                    <span style={{fontWeight:800,fontSize:14}}>{m.title}</span>
                    <span style={{fontSize:16,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
                    {m.category==="higher"&&m.indiaOrAbroad&&(
                      <span style={{background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:`1px solid ${m.indiaOrAbroad==="India"?"#86efac":m.indiaOrAbroad==="Abroad"?"#93c5fd":"#c4b5fd"}`}}>
                        {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
                      </span>
                    )}
                  </div>
                  <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
                    <span style={{background:catInfo.bg,color:catInfo.color,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,border:`1px solid ${catInfo.border}`}}>{m.sub}</span>
                    <span style={{fontSize:12,color:C.textSec,fontWeight:700}}>⬇️ {m.downloads.toLocaleString()} downloads</span>
                    {viewed&&<span style={{fontSize:12,color:C.textSec,fontWeight:700}}>👁 {viewed.views.toLocaleString()} views</span>}
                    {viewed&&<span style={{fontSize:12,fontWeight:800,color:Math.round((viewed.reads/viewed.views)*100)>=70?"#166534":"#92400e",background:Math.round((viewed.reads/viewed.views)*100)>=70?"#f0fdf4":"#fffbeb",borderRadius:6,padding:"2px 8px"}}>{Math.round((viewed.reads/viewed.views)*100)}% read rate</span>}
                  </div>
                </div>
                <div style={{background:catInfo.bg,color:catInfo.color,borderRadius:10,padding:"6px 14px",fontSize:13,fontWeight:900,border:`1px solid ${catInfo.border}`,flexShrink:0}}>#{i+1}</div>
              </div>
              <div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:C.textMut,marginBottom:3}}>
                  <span>Downloads</span><span style={{fontWeight:700,color:catInfo.color}}>{pct}% of top</span>
                </div>
                <div style={{height:7,background:C.border,borderRadius:8,overflow:"hidden"}}>
                  <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${catInfo.color},${catInfo.color}88)`,borderRadius:8,transition:"width 1.2s ease"}}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22,flexWrap:"wrap",gap:12}}>
        <h1 style={{fontSize:22,fontWeight:900,margin:0}}>📊 Student Analytics</h1>
        <div style={{display:"flex",gap:6,background:C.elevated,borderRadius:12,padding:4,border:`1px solid ${C.border}`,flexWrap:"wrap"}}>
          {deptTabs.map(tab=>(
            <button key={tab.id} onClick={()=>{setView(tab.id);setHigherFilter("all");}} style={{padding:"8px 14px",borderRadius:9,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:view===tab.id?`linear-gradient(135deg,#fffbeb,#fef3c7)`:C.elevated,color:view===tab.id?C.amberDim:C.textSec,transition:"all 0.18s",whiteSpace:"nowrap"}}>{tab.label}</button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:28}}>
        {[
          {icon:"👥",label:"Total Readers",value:COLLEGE_READING_DATA.reduce((a,c)=>a+c.readers,0).toLocaleString(),color:"#3b82f6",bg:"#eff6ff"},
          {icon:"🏛️",label:"Colleges Active",value:COLLEGE_READING_DATA.length,color:"#10b981",bg:"#f0fdf4"},
          {icon:"📖",label:"Most Read",value:"UPSC History",color:"#f59e0b",bg:"#fffbeb",small:true},
          {icon:"📈",label:"Avg Read Rate",value:"74%",color:"#6366f1",bg:"#eff6ff"},
        ].map((s,i)=>(
          <div key={i} style={{background:C.surface,border:`1.5px solid ${s.color}33`,borderRadius:14,padding:"18px 20px",animation:`cardIn 0.4s ease ${i*0.07}s both`,transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
            <div style={{background:s.bg,borderRadius:10,padding:"7px 9px",fontSize:18,display:"inline-block",marginBottom:10}}>{s.icon}</div>
            <div style={{fontSize:s.small?14:22,fontWeight:900,color:s.color,lineHeight:1.2,marginBottom:3}}>{s.value}</div>
            <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* By College View */}
      {view==="college" && (
        <div>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Readers by College</div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {COLLEGE_READING_DATA.map((clg,i)=>{
              const maxR = COLLEGE_READING_DATA[0].readers;
              const pct = Math.round((clg.readers/maxR)*100);
              const medals = ["🥇","🥈","🥉"];
              return (
                <div key={clg.college} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px 20px",animation:`cardIn 0.35s ease ${i*0.06}s both`,boxShadow:C.shadow}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <span style={{fontSize:18,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
                      <div>
                        <div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.college}</div>
                        <div style={{fontSize:11,color:C.textMut,fontWeight:600,marginTop:2}}>📚 Reading: {clg.materials.slice(0,3).join(", ")}{clg.materials.length>3?` +${clg.materials.length-3} more`:""}</div>
                      </div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{fontSize:18,fontWeight:900,color:C.amber}}>{clg.readers.toLocaleString()}</div>
                      <div style={{fontSize:10,color:C.textMut,fontWeight:600}}>active readers</div>
                    </div>
                  </div>
                  <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}>
                    <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${C.amber},${C.amberHi})`,borderRadius:8,transition:"width 1.2s ease"}}/>
                  </div>
                  <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
                    {clg.materials.map(mat=>(
                      <span key={mat} style={{background:"#fffbeb",color:"#92400e",border:"1px solid #fde68a",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700}}>{mat}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Private Sector View */}
      {view==="private" && (
        <div>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏢 Private Sector — Most Viewed Materials</div>
          {renderDeptMaterials(getDeptMaterials("private"), "private")}
        </div>
      )}

      {/* Government View */}
      {view==="government" && (
        <div>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Government Exams — Most Viewed Materials</div>
          {renderDeptMaterials(getDeptMaterials("government"), "government")}
        </div>
      )}

      {/* Higher Education View with India/Abroad filter */}
      {view==="higher" && (
        <div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,flexWrap:"wrap",gap:10}}>
            <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1}}>🎓 Higher Education — Most Viewed Materials</div>
            {/* India/Abroad filter */}
            <div style={{display:"flex",gap:6,background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",borderRadius:12,padding:"6px 8px",border:"1.5px solid #c4b5fd"}}>
              {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"],["Both","🌐 Both"]].map(([v,l])=>(
                <button key={v} onClick={()=>setHigherFilter(v)} style={{padding:"6px 12px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",background:higherFilter===v?"#7c3aed":"rgba(255,255,255,0.6)",color:higherFilter===v?"#fff":"#5b21b6",transition:"all 0.18s",whiteSpace:"nowrap"}}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          {/* Stats breakdown for higher */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:18}}>
            {[
              {label:"India Materials",value:materials.filter(m=>m.category==="higher"&&(m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both")).length,icon:"🇮🇳",color:"#166534",bg:"#f0fdf4"},
              {label:"Abroad Materials",value:materials.filter(m=>m.category==="higher"&&(m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both")).length,icon:"✈️",color:"#1e40af",bg:"#eff6ff"},
              {label:"Total Higher Ed",value:materials.filter(m=>m.category==="higher").length,icon:"🎓",color:"#5b21b6",bg:"#f5f3ff"},
            ].map((s,i)=>(
              <div key={i} style={{background:s.bg,border:`1px solid ${s.color}33`,borderRadius:12,padding:"14px 16px",animation:`cardIn 0.3s ease ${i*0.07}s both`}}>
                <div style={{fontSize:20,marginBottom:6}}>{s.icon}</div>
                <div style={{fontSize:22,fontWeight:900,color:s.color}}>{s.value}</div>
                <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{s.label}</div>
              </div>
            ))}
          </div>
          {renderDeptMaterials(getHigherMaterials(), "higher")}
        </div>
      )}
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
  const [addingSoonPopup, setAddingSoonPopup] = useState(null); // ← new
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
    const newM={id:Date.now(),title:req.title,category:req.category,sub:req.sub,type:"free",emoji:"📄",topics:5,progress:0,pages:100,downloads:0,bookmarked:false,studentId:studentOnly?req.studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null};
    const updatedM=[...materials,newM];setMaterials(updatedM);_globalMaterials=updatedM;
    const updatedR=_globalRequests.map(r=>r.id===req.id?{...r,status:"approved"}:r);
    _globalRequests=updatedR;setRequests([...updatedR]);
    toast(`✅ "${req.title}" approved!`,"success");
  };

  // Replace rejectRequest with markAddingSoon
  const markAddingSoon = (id) => {
    const updatedR = _globalRequests.map(r => r.id === id ? {...r, status:"coming_soon"} : r);
    _globalRequests = updatedR;
    setRequests([...updatedR]);
    setAddingSoonPopup(null);
    toast("📅 Student notified! Material is being added soon.","info");
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
    {id:"students",label:"👥 Students"},
    {id:"student-analytics",label:"📈 Student Analytics"},
    {id:"categories",label:"🏷️ Categories"},
  ];

  const getStatusBadge = (status) => {
    if (status === "approved") return { bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved" };
    if (status === "coming_soon") return { bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon" };
    return { bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending" };
  };

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        @keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
        .row-hover:hover{background:#f8fafc!important;}
        .btn-sm:hover{filter:brightness(1.08);transform:translateY(-1px);}
        .btn-sm{transition:all 0.15s ease;}
      `}</style>
      <ToastContainer toasts={toasts}/>

      <div style={{position:"fixed",left:0,top:0,bottom:0,width:232,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",zIndex:100,boxShadow:"2px 0 12px rgba(15,23,42,0.06)"}}>
        <div style={{padding:"24px 20px",borderBottom:`1px solid ${C.border}`}}>
          <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:4,letterSpacing:1.5,textTransform:"uppercase"}}>OYS E-LIBRARY</div>
          <div style={{fontSize:18,fontWeight:900,color:C.amber}}>Admin Panel</div>
        </div>
        <nav style={{padding:"16px 12px",flex:1,overflowY:"auto"}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{width:"100%",textAlign:"left",padding:"11px 14px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:4,
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

      <div style={{marginLeft:232,padding:"28px 32px",opacity:animIn?1:0,transition:"opacity 0.5s ease"}}>

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
                              <div style={{fontSize:11,color:C.textMut}}>{m.pages}p
                                {m.category==="higher"&&m.indiaOrAbroad&&(
                                  <span style={{marginLeft:6,background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",borderRadius:4,padding:"1px 6px",fontSize:9,fontWeight:700}}>{m.indiaOrAbroad==="India"?"🇮🇳":m.indiaOrAbroad==="Abroad"?"✈️":"🌐"} {m.indiaOrAbroad}</span>
                                )}
                              </div>
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
                  const badge = getStatusBadge(r.status);
                  return (
                    <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:16,padding:"20px 24px",boxShadow:C.shadow,animation:`cardIn 0.35s ease ${i*0.05}s both`}}>
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
                              {/* REPLACED REJECT with Adding Soon notification */}
                              <button className="btn-sm" onClick={()=>setAddingSoonPopup(r)} style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>📅 Adding Soon</button>
                            </div>
                          ):(
                            <div style={{display:"inline-block",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>
                              {badge.text}
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
                        {s.college&&<div style={{fontSize:11,color:C.textMut,marginTop:2}}>🏛️ {s.college}</div>}
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
          <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={()=>setSelStu(null)} onApprove={approveRequest} onMarkAddingSoon={(id)=>{ const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r); _globalRequests=updatedR; setRequests([...updatedR]); toast("📅 Student notified!","info"); }} toast={toast}/>
        )}

        {activeTab==="student-analytics"&&(
          <StudentAnalyticsDashboard materials={materials} students={students}/>
        )}

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
                      {CATEGORY_SUBS[key].map(s=>(
                        <div key={s} style={{position:"relative"}}>
                          <span style={{background:C.elevated,color:C.textSec,borderRadius:7,padding:"5px 11px",fontSize:12,border:`1px solid ${C.border}`,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5}}>
                            {s}
                            {key==="higher"&&(
                              <span style={{background:HIGHER_INDIA_ABROAD[s]==="India"?"#f0fdf4":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#eff6ff":"#f5f3ff",color:HIGHER_INDIA_ABROAD[s]==="India"?"#166534":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#1e40af":"#5b21b6",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:800}}>
                                {HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳 IN":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️ Abroad":"🌐 Both"}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    {key==="higher"&&(
                      <div style={{marginBottom:14,background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1px solid #c4b5fd",borderRadius:10,padding:"12px 14px"}}>
                        <div style={{fontSize:11,color:"#5b21b6",fontWeight:800,marginBottom:8,textTransform:"uppercase",letterSpacing:0.5}}>🌍 Filter by Destination</div>
                        <div style={{display:"flex",gap:8}}>
                          <div style={{flex:1}}>
                            <label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:4}}>Category</label>
                            <select style={{width:"100%",padding:"7px 10px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.8)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>
                              <option value="">All</option>
                              <option value="India">🇮🇳 India</option>
                              <option value="Abroad">✈️ Abroad</option>
                              <option value="Both">🌐 Both</option>
                            </select>
                          </div>
                          <div style={{flex:1}}>
                            <label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:4}}>Study Type</label>
                            <select style={{width:"100%",padding:"7px 10px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.8)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>
                              <option value="">All Types</option>
                              <option value="Masters">Masters</option>
                              <option value="PhD">PhD</option>
                              <option value="Undergraduate">Undergraduate</option>
                              <option value="Certificate">Certificate</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
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
      {/* Adding Soon Popup */}
      {addingSoonPopup && (
        <AddingSoonPopup
          request={addingSoonPopup}
          onConfirm={() => markAddingSoon(addingSoonPopup.id)}
          onClose={() => setAddingSoonPopup(null)}
        />
      )}
    </div>
  );
}

function StudentDetail({ student:s, materials, requests, onBack, onApprove, onMarkAddingSoon, toast }) {
  const stuMats=materials.filter(m=>m.studentId===s.id);
  const stuReqs=requests.filter(r=>r.studentId===s.id);
  const getStatusBadge = (status) => {
    if (status === "approved") return { bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved" };
    if (status === "coming_soon") return { bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon" };
    return null;
  };
  return (
    <div>
      <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"8px 16px",cursor:"pointer",fontSize:12,marginBottom:22,fontFamily:"inherit",fontWeight:700}}>← All Students</button>
      <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:26,background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:"24px 26px",boxShadow:C.shadow}}>
        <div style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:900,fontSize:18}}>{s.avatar}</div>
        <div>
          <h2 style={{margin:0,fontSize:20,fontWeight:900}}>{s.name}</h2>
          <div style={{color:C.textSec,fontSize:13,fontWeight:600}}>{s.email} · Joined {s.joined}</div>
          {s.college&&<div style={{fontSize:12,color:C.textMut,marginTop:3}}>🏛️ {s.college}</div>}
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
          {stuReqs.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No requests yet</div>:stuReqs.map(r=>{
            const badge = getStatusBadge(r.status);
            return (
              <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:12,padding:"13px 15px",marginBottom:9,boxShadow:C.shadow}}>
                <div style={{fontWeight:700,fontSize:13,marginBottom:4}}>{r.title}</div>
                <div style={{fontSize:11,color:C.textMut,fontStyle:"italic",marginBottom:9}}>"{r.reason}"</div>
                {r.status==="pending"?(
                  <div style={{display:"flex",gap:7}}>
                    <button onClick={()=>{onApprove(r,true);toast(`Approved for ${s.name}`,"success");}} style={{flex:1,background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>✅ Approve</button>
                    <button onClick={()=>onMarkAddingSoon(r.id)} style={{flex:1,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>📅 Soon</button>
                  </div>
                ):(
                  badge && <span style={{fontSize:11,fontWeight:700,color:badge.color,background:badge.bg,border:`1px solid ${badge.border}`,borderRadius:7,padding:"4px 10px"}}>{badge.text}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AddMaterialModal({ item, students, onClose, onSave }) {
  const [form, setForm] = useState({
    title:item?.title||"",category:item?.category||"private",sub:item?.sub||"IT",
    type:item?.type||"free",pages:item?.pages||"",topics:item?.topics||"",
    emoji:item?.emoji||"📄",uploadType:item?.uploadType||"",fileLink:item?.fileLink||"",
    studentId:item?.studentId||"",indiaOrAbroad:item?.indiaOrAbroad||"",
  });
  const set=(k,v)=>setForm(p=>({...p,[k]:v}));
  const EMOJIS=["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
  const isHigher = form.category === "higher";
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
                <select value={form[key]} onChange={e=>{set(key,e.target.value);if(key==="category"){set("sub",CATEGORY_SUBS[e.target.value][0]);set("indiaOrAbroad","");}}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
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
          {isHigher&&(
            <div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:12,padding:"14px 16px"}}>
              <div style={{fontSize:11,color:"#5b21b6",fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>🌍 Higher Education Destination</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div>
                  <label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:5}}>India or Abroad?</label>
                  <select value={form.indiaOrAbroad} onChange={e=>set("indiaOrAbroad",e.target.value)} style={{width:"100%",padding:"9px 11px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.85)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>
                    <option value="">Select</option>
                    <option value="India">🇮🇳 India</option>
                    <option value="Abroad">✈️ Abroad</option>
                    <option value="Both">🌐 Both</option>
                  </select>
                </div>
                <div>
                  <label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:5}}>Study Type</label>
                  <select style={{width:"100%",padding:"9px 11px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.85)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}>
                    <option value="">All Types</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Certificate">Certificate</option>
                  </select>
                </div>
              </div>
            </div>
          )}
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
            {[
              ["Category",cat.label],["Type",m.type],
              ["Downloads",m.downloads.toLocaleString()],["Progress",`${m.progress}%`],
              ["Upload",m.uploadType||"None"],["Assigned To",stu?.name||"All Students"],
              ...(m.category==="higher"&&m.indiaOrAbroad?[["Destination",m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"]]:[]),
            ].map(([k,v])=>(
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

// ─── HOME (Overall Dashboard button REMOVED) ─────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [animIn, setAnimIn] = useState(false);
  useEffect(()=>{ setTimeout(()=>setAnimIn(true),80); },[]);

  if(screen==="student")  return <StudentDashboard onBack={()=>setScreen("home")}/>;
  if(screen==="admin")    return <AdminDashboard   onBack={()=>setScreen("home")}/>;

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

      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)",top:"-10%",left:"-5%",animation:"orbPulse 6s ease-in-out infinite"}}/>
      <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)",bottom:"0%",right:"-5%",animation:"orbPulse 6s ease-in-out infinite 2s"}}/>
      <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(16,185,129,0.10) 0%,transparent 70%)",top:"40%",right:"15%",animation:"orbPulse 8s ease-in-out infinite 1s"}}/>

      <div style={{textAlign:"center",zIndex:1,padding:"0 20px",opacity:animIn?1:0,transform:animIn?"scale(1)":"scale(0.94)",transition:"all 0.6s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{fontSize:80,marginBottom:16,animation:"float 3.5s ease-in-out infinite",filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))"}}>📚</div>
        <div style={{fontSize:11,letterSpacing:5,color:C.amberDim,marginBottom:10,textTransform:"uppercase",fontWeight:800,animation:"fadeUp 0.7s ease 0.2s both"}}>One Year Series</div>
        <h1 style={{fontSize:54,fontWeight:900,color:C.textPri,margin:"0 0 8px",letterSpacing:-2,lineHeight:1.1,animation:"fadeUp 0.7s ease 0.3s both"}}>
          <span style={{color:C.amber}}>OYS</span> Platform
        </h1>
        <p style={{color:C.textSec,fontSize:17,marginBottom:52,maxWidth:480,margin:"0 auto 52px",lineHeight:1.6,fontWeight:600,animation:"fadeUp 0.7s ease 0.4s both"}}>
          Your complete digital learning hub — study materials, mock tests, crash courses, career guidance & more
        </p>

        {/* Only 2 buttons — Overall Dashboard removed */}
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.5s both"}}>
          <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"#fff",border:"none",borderRadius:16,padding:"18px 48px",fontSize:16,fontWeight:900,cursor:"pointer",boxShadow:"0 10px 36px rgba(245,158,11,0.4)",transition:"all 0.25s",fontFamily:"inherit"}}
            onMouseEnter={e=>{e.target.style.transform="translateY(-4px) scale(1.03)";e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)";}}
            onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)";}}>
            🎓 Student Dashboard
          </button>

          <button onClick={()=>setScreen("admin")} style={{background:"#fff",color:C.textPri,border:"1.5px solid #e2e8f0",borderRadius:16,padding:"18px 48px",fontSize:16,fontWeight:900,cursor:"pointer",boxShadow:"0 8px 28px rgba(15,23,42,0.1)",transition:"all 0.25s",fontFamily:"inherit"}}
            onMouseEnter={e=>{e.target.style.transform="translateY(-4px)";e.target.style.borderColor=C.amber;e.target.style.color=C.amber;e.target.style.boxShadow="0 16px 44px rgba(15,23,42,0.14)";}}
            onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.borderColor="#e2e8f0";e.target.style.color=C.textPri;e.target.style.boxShadow="0 8px 28px rgba(15,23,42,0.1)";}}>
            ⚙️ Admin Panel
          </button>
        </div>

        <div style={{display:"flex",gap:20,justifyContent:"center",marginTop:44,flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.65s both"}}>
          {[
            {icon:"📄",label:"Resume Maker"},
            {icon:"🔔",label:"Alerts"},
            {icon:"📅",label:"E-Calendar"},
            {icon:"⚡",label:"Crash Course"},
            {icon:"📚",label:"E-Library"},
            {icon:"🎯",label:"E-Prep"},
            {icon:"🧭",label:"Career Counseling"},
            {icon:"🏆",label:"C3 Arena"},
          ].map((f,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:6,color:C.textSec,fontSize:12,fontWeight:700,background:"rgba(255,255,255,0.7)",borderRadius:20,padding:"6px 14px",border:"1px solid rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",boxShadow:"0 2px 8px rgba(15,23,42,0.06)",transition:"all 0.2s",cursor:"default"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.95)";e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.7)";e.currentTarget.style.transform="translateY(0)";}}>
              <span style={{fontSize:14}}>{f.icon}</span> {f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}