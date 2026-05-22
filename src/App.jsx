// import { useState, useEffect, useRef, useCallback } from "react";

// // ─── PALETTE ──────────────────────────────────────────────────────────────────
// const C = {
//   bg:"#f0f4f8",surface:"#ffffff",elevated:"#f8fafc",border:"#e2e8f0",borderHi:"#cbd5e1",
//   amber:"#f59e0b",amberHi:"#fbbf24",amberDim:"#d97706",amberGlow:"rgba(245,158,11,0.12)",
//   sage:"#10b981",sageLt:"#34d399",sageDim:"#059669",sageGlow:"rgba(16,185,129,0.12)",
//   rose:"#ef4444",roseLt:"#f87171",roseGlow:"rgba(239,68,68,0.10)",
//   indigo:"#6366f1",indigoLt:"#818cf8",indigoGlow:"rgba(99,102,241,0.12)",
//   blue:"#3b82f6",blueGlow:"rgba(59,130,246,0.12)",
//   textPri:"#0f172a",textSec:"#475569",textMut:"#94a3b8",
//   shadow:"0 4px 24px rgba(15,23,42,0.08)",shadowLg:"0 12px 48px rgba(15,23,42,0.14)",
// };

// // ─── B.TECH DEPARTMENTS ───────────────────────────────────────────────────────
// const BTECH_DEPARTMENTS = [
//   { id:"cse", name:"Computer Science Engineering", short:"CSE", icon:"💻", color:"#6366f1", bg:"rgba(99,102,241,0.08)", border:"rgba(99,102,241,0.2)" },
//   { id:"it", name:"Information Technology", short:"IT", icon:"🖥️", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.2)" },
//   { id:"ece", name:"Electronics & Communication", short:"ECE", icon:"📡", color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", border:"rgba(139,92,246,0.2)" },
//   { id:"eee", name:"Electrical & Electronics", short:"EEE", icon:"⚡", color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.2)" },
//   { id:"mech", name:"Mechanical Engineering", short:"MECH", icon:"⚙️", color:"#64748b", bg:"rgba(100,116,139,0.08)", border:"rgba(100,116,139,0.2)" },
//   { id:"civil", name:"Civil Engineering", short:"CIVIL", icon:"🏗️", color:"#92400e", bg:"rgba(146,64,14,0.08)", border:"rgba(146,64,14,0.2)" },
//   { id:"chem", name:"Chemical Engineering", short:"CHEM", icon:"🧪", color:"#ef4444", bg:"rgba(239,68,68,0.08)", border:"rgba(239,68,68,0.2)" },
//   { id:"aero", name:"Aeronautical / Aerospace", short:"AERO", icon:"✈️", color:"#06b6d4", bg:"rgba(6,182,212,0.08)", border:"rgba(6,182,212,0.2)" },
//   { id:"auto", name:"Automobile Engineering", short:"AUTO", icon:"🚗", color:"#10b981", bg:"rgba(16,185,129,0.08)", border:"rgba(16,185,129,0.2)" },
//   { id:"bio", name:"Biotechnology Engineering", short:"BIO", icon:"🧬", color:"#ec4899", bg:"rgba(236,72,153,0.08)", border:"rgba(236,72,153,0.2)" },
//   { id:"agri", name:"Agricultural Engineering", short:"AGRI", icon:"🌾", color:"#84cc16", bg:"rgba(132,204,22,0.08)", border:"rgba(132,204,22,0.2)" },
//   { id:"mining", name:"Mining Engineering", short:"MINING", icon:"⛏️", color:"#78716c", bg:"rgba(120,113,108,0.08)", border:"rgba(120,113,108,0.2)" },
//   { id:"petro", name:"Petroleum Engineering", short:"PETRO", icon:"🛢️", color:"#854d0e", bg:"rgba(133,77,14,0.08)", border:"rgba(133,77,14,0.2)" },
//   { id:"marine", name:"Marine Engineering", short:"MARINE", icon:"⚓", color:"#0369a1", bg:"rgba(3,105,161,0.08)", border:"rgba(3,105,161,0.2)" },
//   { id:"metal", name:"Metallurgical Engineering", short:"METAL", icon:"🔩", color:"#475569", bg:"rgba(71,85,105,0.08)", border:"rgba(71,85,105,0.2)" },
//   { id:"industrial", name:"Industrial Engineering", short:"INDUS", icon:"🏭", color:"#7c3aed", bg:"rgba(124,58,237,0.08)", border:"rgba(124,58,237,0.2)" },
//   { id:"prod", name:"Production Engineering", short:"PROD", icon:"🔧", color:"#0891b2", bg:"rgba(8,145,178,0.08)", border:"rgba(8,145,178,0.2)" },
//   { id:"textile", name:"Textile Engineering", short:"TEXT", icon:"🧵", color:"#db2777", bg:"rgba(219,39,119,0.08)", border:"rgba(219,39,119,0.2)" },
//   { id:"food", name:"Food Technology", short:"FOOD", icon:"🍎", color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.2)" },
//   { id:"env", name:"Environmental Engineering", short:"ENV", icon:"🌿", color:"#15803d", bg:"rgba(21,128,61,0.08)", border:"rgba(21,128,61,0.2)" },
// ];

// const BTECH_MATERIALS = {
//   cse: [
//     { id:101, title:"Data Structures & Algorithms", emoji:"🌲", topics:15, pages:480, downloads:2100, type:"free", bookmarked:false, progress:30, uploadType:null, fileLink:"", tags:["dsa","algorithms","trees"] },
//     { id:102, title:"Operating Systems", emoji:"🖥️", topics:12, pages:380, downloads:1800, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["os","kernel","processes"] },
//     { id:103, title:"Database Management Systems", emoji:"🗄️", topics:10, pages:320, downloads:2400, type:"free", bookmarked:false, progress:60, uploadType:null, fileLink:"", tags:["dbms","sql","normalization"] },
//     { id:104, title:"Computer Networks", emoji:"🌐", topics:14, pages:420, downloads:1650, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["networking","tcp","protocols"] },
//     { id:105, title:"Software Engineering", emoji:"⚙️", topics:8, pages:280, downloads:1200, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["sdlc","agile","testing"] },
//   ],
//   it: [
//     { id:201, title:"Web Development Fundamentals", emoji:"🌐", topics:12, pages:350, downloads:3100, type:"free", bookmarked:false, progress:85, uploadType:null, fileLink:"", tags:["html","css","javascript"] },
//     { id:202, title:"Cloud Computing", emoji:"☁️", topics:10, pages:300, downloads:1900, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["aws","azure","gcp"] },
//     { id:203, title:"Cybersecurity Essentials", emoji:"🔐", topics:11, pages:360, downloads:1400, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["security","cryptography","hacking"] },
//   ],
//   ece: [
//     { id:301, title:"Digital Electronics", emoji:"📡", topics:13, pages:400, downloads:1600, type:"free", bookmarked:false, progress:40, uploadType:null, fileLink:"", tags:["logic gates","circuits","flip-flops"] },
//     { id:302, title:"Signals & Systems", emoji:"📶", topics:11, pages:350, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["signals","fourier","laplace"] },
//     { id:303, title:"VLSI Design", emoji:"🔬", topics:9, pages:290, downloads:850, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["vlsi","cmos","layout"] },
//   ],
//   eee: [
//     { id:401, title:"Power Systems Engineering", emoji:"⚡", topics:14, pages:460, downloads:1300, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["power","transmission","generation"] },
//     { id:402, title:"Control Systems", emoji:"🎛️", topics:10, pages:320, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["control","pid","feedback"] },
//   ],
//   mech: [
//     { id:501, title:"Thermodynamics", emoji:"🌡️", topics:12, pages:400, downloads:1500, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["heat","entropy","cycles"] },
//     { id:502, title:"Fluid Mechanics", emoji:"💧", topics:11, pages:370, downloads:1200, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["fluid","bernoulli","flow"] },
//     { id:503, title:"Machine Design", emoji:"⚙️", topics:9, pages:310, downloads:900, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["design","stress","gears"] },
//   ],
//   civil: [
//     { id:601, title:"Structural Analysis", emoji:"🏗️", topics:13, pages:440, downloads:1400, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["structures","beams","loads"] },
//     { id:602, title:"Soil Mechanics", emoji:"🌍", topics:10, pages:330, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["soil","geotechnical","foundation"] },
//   ],
//   chem: [
//     { id:701, title:"Chemical Reaction Engineering", emoji:"🧪", topics:11, pages:380, downloads:950, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["reactions","kinetics","reactor"] },
//   ],
//   aero: [
//     { id:801, title:"Aerodynamics", emoji:"✈️", topics:12, pages:420, downloads:800, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["lift","drag","airfoil"] },
//   ],
//   auto: [
//     { id:901, title:"Automotive Systems", emoji:"🚗", topics:10, pages:340, downloads:750, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["engine","transmission","brakes"] },
//   ],
//   bio: [
//     { id:1001, title:"Genetic Engineering", emoji:"🧬", topics:11, pages:360, downloads:680, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["dna","genes","cloning"] },
//   ],
//   agri: [
//     { id:1101, title:"Agricultural Science Notes", emoji:"🌾", topics:11, pages:320, downloads:890, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["crops","soil","irrigation"] },
//   ],
//   mining: [
//     { id:1201, title:"Mining Methods & Technology", emoji:"⛏️", topics:9, pages:300, downloads:550, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["open cast","underground","blasting"] },
//   ],
//   petro: [
//     { id:1301, title:"Petroleum Reservoir Engineering", emoji:"🛢️", topics:10, pages:340, downloads:620, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["reservoir","drilling","production"] },
//   ],
//   marine: [
//     { id:1401, title:"Naval Architecture", emoji:"⚓", topics:10, pages:360, downloads:490, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["ships","hull","stability"] },
//   ],
//   metal: [
//     { id:1501, title:"Metallurgy & Material Science", emoji:"🔩", topics:11, pages:380, downloads:670, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["metals","alloys","heat treatment"] },
//   ],
//   industrial: [
//     { id:1601, title:"Industrial Engineering & Management", emoji:"🏭", topics:10, pages:320, downloads:780, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["lean","six sigma","operations"] },
//   ],
//   prod: [
//     { id:1701, title:"Production Planning & Control", emoji:"🔧", topics:9, pages:290, downloads:650, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["production","scheduling","quality"] },
//   ],
//   textile: [
//     { id:1801, title:"Textile Processing Technology", emoji:"🧵", topics:10, pages:310, downloads:480, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["weaving","dyeing","finishing"] },
//   ],
//   food: [
//     { id:1901, title:"Food Processing & Preservation", emoji:"🍎", topics:10, pages:300, downloads:580, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["processing","preservation","quality"] },
//   ],
//   env: [
//     { id:2001, title:"Environmental Engineering", emoji:"🌿", topics:11, pages:350, downloads:720, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["pollution","water","waste"] },
//   ],
// };

// // ─── CATEGORIES ───────────────────────────────────────────────────────────────
// const CATEGORIES = {
//   private:{ label:"Private Sector",icon:"🏢",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.25)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
//   government:{ label:"Government Exams",icon:"🏛️",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.25)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
//   higher:{ label:"Higher Education",icon:"🎓",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.25)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
//   btech:{ label:"B.Tech Courses",icon:"🔬",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.25)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)" },
// };

// // ─── GOVERNMENT SECTOR STRUCTURE ─────────────────────────────────────────────
// const GOVT_STRUCTURE = {
//   central: {
//     label:"Central Government",icon:"🏛️",color:"#0369a1",
//     exams:["UPSC IAS","SSC CGL","SSC CHSL","IBPS PO","IBPS Clerk","RBI Grade B","Railways RRB","Defence NDA","NDA CDS","ISRO","DRDO","Staff Selection"]
//   },
//   state: {
//     label:"State Government",icon:"🗺️",color:"#059669",
//     states:{
//       ap:{ label:"Andhra Pradesh",icon:"🌊",color:"#dc2626",exams:["APPSC Group 1","APPSC Group 2","APPSC Group 3","AP Panchayat Secretary","AP Police SI","AP TET","APECET","APPGECET","AP ICET","AP EAMCET"] },
//       telangana:{ label:"Telangana",icon:"🌺",color:"#7c3aed",exams:["TSPSC Group 1","TSPSC Group 2","TSPSC Group 3","TS Panchayat Secretary","Telangana Police SI","TS TET","TSICET","TSEAMCET","TS PGECET","TSGENCO"] },
//       other:{ label:"Other States",icon:"🗾",color:"#0891b2",exams:["Karnataka PSC","Tamil Nadu PSC","Maharashtra PSC","Kerala PSC","Gujarat PSC","Rajasthan PSC","UP PSC","Bihar PSC","MP PSC","West Bengal PSC"] }
//     }
//   }
// };

// const CATEGORY_SUBS = {
//   private:["IT","Banking","Healthcare","Marketing","Finance","Consulting"],
//   government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"],
//   higher:["GATE","CAT/MBA","GRE/GMAT","Study Abroad","Research","PhD"],
//   btech: BTECH_DEPARTMENTS.map(d => d.short),
// };

// const HIGHER_INDIA_ABROAD = {
//   "GATE":"India","CAT/MBA":"India","GRE/GMAT":"Abroad","Study Abroad":"Abroad","Research":"Both","PhD":"Both",
// };

// const PIE_COLORS = ["#3b82f6","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#f97316","#6366f1"];

// const SERVICES = [
//   { id:"resume",name:"Resume Maker",icon:"📄",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:4820,topCollege:"IIT Bombay",description:"AI-powered resume builder with ATS optimization",stats:{created:4820,downloaded:3940,templates:24,avgScore:87},trend:"+18%",trendUp:true },
//   { id:"alerts",name:"Alerts",icon:"🔔",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.2)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)",users:7210,topCollege:"NIT Warangal",description:"Real-time job & exam notifications system",stats:{sent:52400,read:41200,active:7210,categories:12},trend:"+32%",trendUp:true },
//   { id:"calendar",name:"E-Calendar",icon:"📅",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)",users:3650,topCollege:"BITS Pilani",description:"Exam schedules, deadlines & study planner",stats:{events:1840,reminders:9300,synced:3650,upcoming:124},trend:"+9%",trendUp:true },
//   { id:"crash",name:"Crash Course",icon:"⚡",color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",gradient:"linear-gradient(135deg,#fee2e2,#fecaca)",users:5930,topCollege:"VIT Vellore",description:"Intensive last-minute exam preparation modules",stats:{courses:48,enrolled:5930,completed:3210,avgHours:6.4},trend:"+41%",trendUp:true },
//   { id:"elibrary",name:"E-Library",icon:"📚",color:"#3b82f6",bg:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.2)",gradient:"linear-gradient(135deg,#dbeafe,#bfdbfe)",users:6840,topCollege:"JNTU Hyderabad",description:"Digital library with curated study materials",stats:{materials:15,downloads:19870,requests:24,pending:2,approved:20,rejected:2,topCollege:"JNTU Hyderabad",collegeStats:[{name:"JNTU Hyderabad",downloads:4200,users:1240},{name:"Osmania University",downloads:3100,users:980},{name:"IIT Bombay",downloads:2800,users:760},{name:"NIT Warangal",downloads:2400,users:640},{name:"VIT Vellore",downloads:1900,users:520}]},trend:"+27%",trendUp:true },
//   { id:"eprep",name:"E-Preparation",icon:"🎯",color:"#8b5cf6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:8120,topCollege:"Osmania University",description:"Mock tests, quizzes & performance analytics",stats:{tests:980,attempts:41200,avgScore:72,toppers:340},trend:"+55%",trendUp:true },
//   { id:"counseling",name:"Career Counseling",icon:"🧭",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.2)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)",users:2340,topCollege:"Hyderabad Central University",description:"1-on-1 mentorship & career guidance sessions",stats:{sessions:2340,mentors:48,avgRating:4.8,placed:1820},trend:"+14%",trendUp:true },
//   { id:"c3arena",name:"C3 Arena",icon:"🏆",color:"#f97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.2)",gradient:"linear-gradient(135deg,#ffedd5,#fed7aa)",users:3980,topCollege:"IIT Hyderabad",description:"Competitive coding, hackathons & leaderboards",stats:{contests:84,participants:3980,problems:1240,winners:252},trend:"+63%",trendUp:true },
// ];

// // CSV Fields for bulk import
// const BULK_CSV_FIELDS = [
//   { name:"title", required:true, desc:"Material title" },
//   { name:"description", required:false, desc:"Short description" },
//   { name:"category", required:true, desc:"private / government / higher / btech" },
//   { name:"sub_category", required:true, desc:"Sub-category (e.g. IT, CSE, UPSC)" },
//   { name:"dept_id", required:false, desc:"B.Tech dept id: cse,it,ece,eee,mech,civil..." },
//   { name:"govt_type", required:false, desc:"central / state" },
//   { name:"state_id", required:false, desc:"ap / telangana / other" },
//   { name:"material_type", required:false, desc:"PDF / Link / Video" },
//   { name:"thumbnail_icon", required:false, desc:"Emoji icon" },
//   { name:"main_file_url", required:false, desc:"URL to material" },
//   { name:"total_pages", required:false, desc:"Number of pages" },
//   { name:"total_topics", required:false, desc:"Number of topics" },
//   { name:"type", required:true, desc:"free / premium" },
//   { name:"download_allowed", required:false, desc:"true / false" },
//   { name:"tags", required:false, desc:"Comma-separated tags" },
//   { name:"topic_1_title", required:false, desc:"First topic title" },
//   { name:"topic_1_pages", required:false, desc:"Pages for topic 1" },
//   { name:"topic_2_title", required:false, desc:"Second topic title" },
//   { name:"topic_2_pages", required:false, desc:"Pages for topic 2" },
//   { name:"topic_3_title", required:false, desc:"Third topic title" },
//   { name:"topic_3_pages", required:false, desc:"Pages for topic 3" },
//   { name:"topic_4_title", required:false, desc:"Fourth topic title" },
//   { name:"topic_4_pages", required:false, desc:"Pages for topic 4" },
//   { name:"topic_5_title", required:false, desc:"Fifth topic title" },
//   { name:"topic_5_pages", required:false, desc:"Pages for topic 5" },
//   { name:"indiaOrAbroad", required:false, desc:"India / Abroad / Both (for higher)" },
//   { name:"status", required:false, desc:"Published / Draft" },
// ];

// const EPREP_LINKS = {
//   101:"https://www.geeksforgeeks.org/data-structure-gq/",
//   102:"https://www.javatpoint.com/os-tutorial",
//   103:"https://www.javatpoint.com/dbms-tutorial",
//   104:"https://www.javatpoint.com/computer-network-tutorial",
//   201:"https://www.w3schools.com/",
//   1:"https://www.javatpoint.com/java-quiz",
//   2:"https://www.bankersadda.com/quiz",
//   4:"https://www.drishtiias.com/quiz",
//   5:"https://www.sscadda.com/quiz",
// };

// const CRASH_COURSES = {
//   101:{ title:"DSA Crash Course", url:"https://www.youtube.com/results?search_query=dsa+crash+course", color:"#6366f1" },
//   201:{ title:"Web Dev Crash", url:"https://www.youtube.com/results?search_query=web+development+crash+course", color:"#3b82f6" },
//   1:{ title:"Java Crash Course", url:"https://www.youtube.com/results?search_query=java+crash+course", color:"#ef4444" },
//   4:{ title:"UPSC History Crash", url:"https://www.youtube.com/results?search_query=upsc+history+crash+course", color:"#6366f1" },
// };

// // Initial data
// const ALL_MATERIALS = [
//   { id:1, title:"Java Programming", category:"private", sub:"IT", type:"free", emoji:"☕", topics:12, progress:70, pages:340, downloads:1240, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["java","oop","backend"], customTopics:null },
//   { id:2, title:"Banking Fundamentals", category:"private", sub:"Banking", type:"free", emoji:"🏦", topics:8, progress:50, pages:210, downloads:980, bookmarked:true, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["banking","finance"], customTopics:null },
//   { id:3, title:"Data Structures & Algo", category:"private", sub:"IT", type:"premium", emoji:"🌲", topics:15, progress:30, pages:480, downloads:2100, bookmarked:false, uploadType:"pdf", fileLink:"https://example.com/dsa.pdf", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["dsa","algorithms"], customTopics:null },
//   { id:4, title:"UPSC History Notes", category:"government", sub:"UPSC", type:"free", emoji:"📜", topics:20, progress:60, pages:600, downloads:3400, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["upsc","history"], customTopics:null },
//   { id:5, title:"SSC Mathematics", category:"government", sub:"SSC", type:"free", emoji:"📐", topics:10, progress:0, pages:280, downloads:1800, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["ssc","math"], customTopics:null },
//   { id:6, title:"IBPS PO Guide", category:"government", sub:"Banking (Govt)", type:"premium", emoji:"🏧", topics:14, progress:0, pages:390, downloads:2200, bookmarked:true, uploadType:"link", fileLink:"https://ibps.in/study-material", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["ibps","banking"], customTopics:null },
//   { id:7, title:"CAT Verbal Ability", category:"higher", sub:"CAT/MBA", type:"premium", emoji:"📝", topics:9, progress:20, pages:240, downloads:760, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"India", govtType:null, stateId:null, deptId:null, tags:["cat","verbal"], customTopics:null },
//   { id:8, title:"GRE Vocabulary", category:"higher", sub:"GRE/GMAT", type:"free", emoji:"🔤", topics:6, progress:40, pages:180, downloads:540, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Abroad", govtType:null, stateId:null, deptId:null, tags:["gre","vocabulary"], customTopics:null },
//   { id:9, title:"Agricultural Science", category:"government", sub:"State PSC", type:"free", emoji:"🌾", topics:11, progress:0, pages:320, downloads:890, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["agriculture","psc"], customTopics:null },
//   { id:10, title:"Python for Beginners", category:"private", sub:"IT", type:"free", emoji:"🐍", topics:10, progress:85, pages:290, downloads:3100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["python","programming"], customTopics:null },
//   { id:11, title:"APPSC Group 1 Guide", category:"government", sub:"State PSC", type:"free", emoji:"🌊", topics:18, progress:0, pages:550, downloads:1650, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["appsc","group1","ap"], customTopics:null },
//   { id:12, title:"TSPSC Group 2 Complete", category:"government", sub:"State PSC", type:"premium", emoji:"🌺", topics:16, progress:0, pages:480, downloads:1900, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"telangana", deptId:null, tags:["tspsc","group2","telangana"], customTopics:null },
//   { id:13, title:"Digital Marketing", category:"private", sub:"Marketing", type:"free", emoji:"📊", topics:7, progress:55, pages:190, downloads:670, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["marketing","digital"], customTopics:null },
//   { id:14, title:"Research Methodology", category:"higher", sub:"Research", type:"free", emoji:"🔬", topics:5, progress:10, pages:160, downloads:310, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Both", govtType:null, stateId:null, deptId:null, tags:["research","methodology"], customTopics:null },
//   { id:15, title:"Defence NDA Prep", category:"government", sub:"Defence", type:"premium", emoji:"⚔️", topics:16, progress:0, pages:500, downloads:1200, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["nda","defence"], customTopics:null },
//   { id:16, title:"TS Police SI Exam Guide", category:"government", sub:"State PSC", type:"free", emoji:"🌺", topics:12, progress:0, pages:360, downloads:1100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"telangana", deptId:null, tags:["tspsc","police","telangana"], customTopics:null },
//   { id:17, title:"AP EAMCET Preparation", category:"government", sub:"State PSC", type:"free", emoji:"🌊", topics:14, progress:0, pages:420, downloads:2100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["eamcet","ap","engineering"], customTopics:null },
//   { id:18, title:"MBA Case Studies", category:"higher", sub:"CAT/MBA", type:"premium", emoji:"💼", topics:8, progress:0, pages:200, downloads:430, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"India", govtType:null, stateId:null, deptId:null, tags:["mba","case studies"], customTopics:null },
// ];

// const JAVA_TOPICS = [
//   { id:1, title:"Introduction to Java", done:true, pages:28 },
//   { id:2, title:"OOP Concepts", done:true, pages:45 },
//   { id:3, title:"Classes & Objects", done:true, pages:35 },
//   { id:4, title:"Inheritance & Polymorphism", done:false, pages:52 },
//   { id:5, title:"Exception Handling", done:false, pages:30 },
//   { id:6, title:"Collections Framework", done:false, pages:60 },
//   { id:7, title:"Multithreading", done:false, pages:40 },
//   { id:8, title:"File I/O", done:false, pages:25 },
//   { id:9, title:"JDBC & Databases", done:false, pages:38 },
//   { id:10, title:"Spring Boot Basics", done:false, pages:55 },
//   { id:11, title:"REST APIs with Java", done:false, pages:48 },
//   { id:12, title:"Java 17+ Features", done:false, pages:32 },
// ];

// const INIT_STUDENTS = [
//   { id:"s1", name:"Arjun Sharma", email:"arjun@email.com", joined:"2024-01-15", completed:3, avatar:"AS", college:"JNTU Hyderabad" },
//   { id:"s2", name:"Priya Reddy", email:"priya@email.com", joined:"2024-02-20", completed:1, avatar:"PR", college:"Osmania University" },
//   { id:"s3", name:"Rahul Gupta", email:"rahul@email.com", joined:"2024-03-10", completed:0, avatar:"RG", college:"IIT Bombay" },
// ];

// let _globalMaterials = ALL_MATERIALS.map(m=>({...m}));
// let _globalRequests = [
//   { id:"r1", studentId:"s1", studentName:"Arjun Sharma", title:"AI & Machine Learning 2025", category:"private", sub:"IT", reason:"Need latest trending AI material for interviews", status:"pending", date:"2024-12-01" },
//   { id:"r2", studentId:"s2", studentName:"Priya Reddy", title:"UPSC Ethics GS4 Deep Dive", category:"government", sub:"UPSC", reason:"Comprehensive ethics module not available anywhere", status:"pending", date:"2024-12-05" },
// ];
// let _globalStudents = INIT_STUDENTS.map(s=>({...s}));

// // ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
// const GLOBAL_CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
// *{box-sizing:border-box;}
// @keyframes cardIn{from{opacity:0;transform:translateY(18px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
// @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
// @keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
// @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
// @keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
// @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}
// @keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:translateY(0)}}
// @keyframes fadeIn{from{opacity:0}to{opacity:1}}
// @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
// @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
// @keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}
// .svc-card{transition:all 0.3s cubic-bezier(.4,0,.2,1)!important;}
// .svc-card:hover{transform:translateY(-8px) scale(1.02)!important;box-shadow:0 24px 60px rgba(15,23,42,0.14)!important;}
// .mat-card{transition:all 0.25s cubic-bezier(.4,0,.2,1)!important;}
// .mat-card:hover{transform:translateY(-6px) scale(1.02)!important;box-shadow:0 20px 60px rgba(15,23,42,0.15)!important;}
// .cat-card{transition:all 0.22s ease!important;}
// .cat-card:hover{transform:translateY(-4px)!important;box-shadow:0 12px 40px rgba(15,23,42,0.12)!important;}
// .btn-hover{transition:all 0.18s ease!important;}
// .btn-hover:hover{filter:brightness(1.08);transform:translateY(-1px)!important;}
// .row-hover:hover{background:#f8fafc!important;}
// .dept-option{transition:all 0.15s ease;}
// .dept-option:hover{background:rgba(236,72,153,0.08)!important;transform:translateX(4px);}
// ::-webkit-scrollbar{width:6px;height:6px;}
// ::-webkit-scrollbar-track{background:transparent;}
// ::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px;}
// ::-webkit-scrollbar-thumb:hover{background:#94a3b8;}
// @media(max-width:768px){
//   .mobile-stack{flex-direction:column!important;}
//   .mobile-full{width:100%!important;}
//   .mobile-hide{display:none!important;}
//   .mobile-pad{padding:16px!important;}
//   .mobile-grid-1{grid-template-columns:1fr!important;}
//   .mobile-grid-2{grid-template-columns:1fr 1fr!important;}
//   .mobile-text-sm{font-size:13px!important;}
//   .mobile-text-xs{font-size:11px!important;}
// }
// `;

// // ─── TOAST ────────────────────────────────────────────────────────────────────
// function useToast() {
//   const [toasts, setToasts] = useState([]);
//   const add = (msg, type="success") => {
//     const id = Date.now();
//     setToasts(p => [...p, { id, msg, type }]);
//     setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
//   };
//   return { toasts, add };
// }

// function ToastContainer({ toasts }) {
//   const cfg = {
//     success:{ bg:"#f0fdf4", border:"#86efac", text:"#166534", icon:"✅" },
//     warn:{ bg:"#fffbeb", border:"#fcd34d", text:"#92400e", icon:"⚠️" },
//     error:{ bg:"#fef2f2", border:"#fca5a5", text:"#991b1b", icon:"❌" },
//     info:{ bg:"#eff6ff", border:"#93c5fd", text:"#1e40af", icon:"ℹ️" },
//   };
//   return (
//     <div style={{ position:"fixed", top:20, right:20, zIndex:99999, display:"flex", flexDirection:"column", gap:10, maxWidth:360, width:"90%", pointerEvents:"none" }}>
//       {toasts.map(t => {
//         const s = cfg[t.type] || cfg.info;
//         return (
//           <div key={t.id} style={{ background:s.bg, border:`1.5px solid ${s.border}`, color:s.text, borderRadius:14, padding:"13px 18px", fontSize:13, fontWeight:600, boxShadow:"0 8px 32px rgba(0,0,0,0.12)", animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)", display:"flex", alignItems:"center", gap:10, pointerEvents:"auto" }}>
//             <span style={{ fontSize:16 }}>{s.icon}</span>{t.msg}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // ─── PROGRESS RING ────────────────────────────────────────────────────────────
// function Ring({ pct, size=48, stroke=4, color=C.amber }) {
//   const r = (size - stroke*2) / 2, circ = 2 * Math.PI * r;
//   return (
//     <svg width={size} height={size} style={{ transform:"rotate(-90deg)", flexShrink:0 }}>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke}/>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
//         strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ}
//         style={{ transition:"stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)", strokeLinecap:"round" }}/>
//       <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
//         style={{ transform:`rotate(90deg) translate(0,-${size}px)`, fontSize:11, fontWeight:700, transformOrigin:`${size/2}px ${size/2}px` }}>
//         {pct}%
//       </text>
//     </svg>
//   );
// }

// // ─── MATERIAL THUMBNAIL ───────────────────────────────────────────────────────
// function MatThumb({ m, size=80 }) {
//   const cat = CATEGORIES[m.category] || CATEGORIES.private;
//   return (
//     <div style={{ width:size, height:size, borderRadius:12, background:cat.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:size*0.45, flexShrink:0 }}>
//       {m.emoji || "📄"}
//     </div>
//   );
// }

// // ─── BULK IMPORT MODAL (FULLY WORKING CSV) ────────────────────────────────────
// function BulkImportModal({ onClose, onImport, toast }) {
//   const [file, setFile] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [parsed, setParsed] = useState(null);
//   const [importing, setImporting] = useState(false);
//   const [step, setStep] = useState(1);
//   const [progress, setProgress] = useState(0);
//   const [errors, setErrors] = useState([]);
//   const fileRef = useRef(null);

//   const downloadSample = () => {
//     const headers = BULK_CSV_FIELDS.map(f => f.name).join(",");
//     const row1 = [
//       "Java Programming Advanced","Advanced Java for placements","private","IT","","","","PDF","☕","https://example.com/java.pdf","340","12","free","true","java,oop","Introduction to Java","28","OOP Concepts","45","Classes & Objects","35","Inheritance","52","Exception Handling","30","","India","Published"
//     ].join(",");
//     const row2 = [
//       "APPSC Group 1 Complete Guide","Complete study material for APPSC Group 1","government","State PSC","","state","ap","","🌊","","550","18","free","true","appsc,group1,ap","History of AP","60","Indian Constitution","45","Economy","50","Science & Tech","40","Current Affairs","35","","","Published"
//     ].join(",");
//     const row3 = [
//       "TSPSC Group 2 Master Guide","Comprehensive TSPSC Group 2 material","government","State PSC","","state","telangana","PDF","🌺","https://example.com/tspsc.pdf","480","16","premium","true","tspsc,group2,telangana","Telangana History","55","Indian Polity","48","Economy","42","Science","38","Current Affairs","35","","","Published"
//     ].join(",");
//     const row4 = [
//       "DSA for CSE Students","Complete DSA notes for Computer Science","btech","CSE","cse","","","","🌲","","480","15","free","true","dsa,algorithms,cse","Arrays & Strings","40","Linked Lists","38","Trees","45","Graphs","50","Dynamic Programming","55","","","Published"
//     ].join(",");
//     const row5 = [
//       "GRE Quantitative Prep","Complete GRE Quant preparation guide","higher","GRE/GMAT","","","","","📊","","280","10","free","true","gre,quantitative","Arithmetic","30","Algebra","35","Geometry","32","Data Analysis","28","Practice Sets","40","Abroad","","Published"
//     ].join(",");
//     const csv = [headers, row1, row2, row3, row4, row5].join("\n");
//     const blob = new Blob([csv], { type:"text/csv" });
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "oys_bulk_import_sample.csv";
//     a.click();
//     URL.revokeObjectURL(a.href);
//   };

//   const parseCSV = (text) => {
//     const lines = text.split(/\r?\n/).filter(l => l.trim());
//     if (lines.length < 2) return { rows:[], errors:["CSV must have header + at least 1 data row"] };
    
//     // Parse header
//     const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g,"").toLowerCase().trim());
//     const errs = [];
//     const rows = [];

//     lines.slice(1).forEach((line, lineIdx) => {
//       // Handle quoted commas
//       const vals = [];
//       let cur = "", inQuote = false;
//       for (let i = 0; i < line.length; i++) {
//         if (line[i] === '"') { inQuote = !inQuote; }
//         else if (line[i] === ',' && !inQuote) { vals.push(cur.trim()); cur = ""; }
//         else { cur += line[i]; }
//       }
//       vals.push(cur.trim());

//       const row = {};
//       headers.forEach((h, i) => { row[h] = (vals[i] || "").replace(/^"|"$/g,"").trim(); });

//       // Validate required fields
//       if (!row.title) { errs.push(`Row ${lineIdx+2}: Missing 'title'`); return; }
//       if (!row.type || !["free","premium"].includes(row.type.toLowerCase())) {
//         errs.push(`Row ${lineIdx+2}: 'type' must be 'free' or 'premium', got: '${row.type}'`);
//         return;
//       }
//       if (!row.category) { errs.push(`Row ${lineIdx+2}: Missing 'category'`); return; }

//       rows.push(row);
//     });

//     return { rows, errors:errs };
//   };

//   const mapCategory = (cat) => {
//     if (!cat) return "private";
//     const c = cat.toLowerCase();
//     if (c.includes("gov") || c.includes("government")) return "government";
//     if (c.includes("high") || c.includes("higher")) return "higher";
//     if (c.includes("btech") || c.includes("b.tech") || c.includes("engineering")) return "btech";
//     return "private";
//   };

//   const buildTopicsFromRow = (row) => {
//     const topics = [];
//     for (let i = 1; i <= 10; i++) {
//       const titleKey = `topic_${i}_title`;
//       const pagesKey = `topic_${i}_pages`;
//       if (row[titleKey] && row[titleKey].trim()) {
//         topics.push({
//           id: i,
//           title: row[titleKey].trim(),
//           pages: parseInt(row[pagesKey]) || 20,
//           done: false
//         });
//       }
//     }
//     return topics.length > 0 ? topics : null;
//   };

//   const handleFile = (f) => {
//     if (!f) return;
//     if (!f.name.toLowerCase().endsWith(".csv")) {
//       toast("Please upload a .csv file", "warn");
//       return;
//     }
//     setFile(f);
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const { rows, errors:errs } = parseCSV(e.target.result);
//       setErrors(errs);
//       if (rows.length > 0) {
//         setParsed(rows);
//         setStep(2);
//         if (errs.length > 0) toast(`${errs.length} row(s) skipped due to errors`, "warn");
//       } else {
//         toast("No valid rows found in CSV. Check the format.", "error");
//       }
//     };
//     reader.onerror = () => toast("Failed to read file", "error");
//     reader.readAsText(f);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragging(false);
//     handleFile(e.dataTransfer.files[0]);
//   };

//   const handleImport = () => {
//     setImporting(true);
//     let p = 0;
//     const interval = setInterval(() => {
//       p += Math.random() * 20 + 8;
//       setProgress(Math.min(p, 90));
//     }, 150);

//     setTimeout(() => {
//       clearInterval(interval);
//       setProgress(100);

//       const newMaterials = parsed.map((row, i) => {
//         const catKey = mapCategory(row.category);
//         const customTopics = buildTopicsFromRow(row);
//         const deptId = (row.dept_id || "").toLowerCase().trim() || null;
//         const govtType = (row.govt_type || "").toLowerCase().trim() || null;
//         const stateId = (row.state_id || "").toLowerCase().trim() || null;

//         // Sub-category mapping
//         let sub = row.sub_category || "IT";
//         if (catKey === "btech" && deptId) {
//           const dept = BTECH_DEPARTMENTS.find(d => d.id === deptId);
//           if (dept) sub = dept.short;
//         }

//         return {
//           id: Date.now() + i,
//           title: row.title || "Untitled",
//           description: row.description || "",
//           category: catKey,
//           sub: sub,
//           deptId: catKey === "btech" ? deptId : null,
//           govtType: catKey === "government" ? (govtType || "central") : null,
//           stateId: (catKey === "government" && govtType === "state") ? stateId : null,
//           type: (row.type || "free").toLowerCase().includes("prem") ? "premium" : "free",
//           emoji: row.thumbnail_icon || "📄",
//           topics: parseInt(row.total_topics) || (customTopics ? customTopics.length : 5),
//           progress: 0,
//           pages: parseInt(row.total_pages) || 100,
//           downloads: 0,
//           bookmarked: false,
//           uploadType: row.material_type === "PDF" || row.material_type === "pdf" ? "pdf" : (row.main_file_url ? "link" : null),
//           fileLink: row.main_file_url || "",
//           indiaOrAbroad: (row.indiaorAbroad || row.indiaOrAbroad || row["indiaorAbroad"] || "").trim() || null,
//           tags: row.tags ? row.tags.split(",").map(t => t.trim()) : [],
//           status: row.status || "Published",
//           downloadAllowed: row.download_allowed !== "false",
//           customTopics: customTopics,
//           studentId: null,
//         };
//       });

//       // Update global state
//       _globalMaterials = [..._globalMaterials, ...newMaterials];
//       onImport(newMaterials);

//       setTimeout(() => {
//         setImporting(false);
//         onClose();
//       }, 500);
//     }, 2200);
//   };

//   return (
//     <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9500, backdropFilter:"blur(6px)", padding:16, animation:"fadeIn 0.25s ease" }}>
//       <div style={{ background:C.surface, borderRadius:24, maxWidth:700, width:"100%", maxHeight:"95vh", overflow:"auto", boxShadow:C.shadowLg, animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)" }}>
//         {/* Header */}
//         <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", borderBottom:`1px solid #a7f3d0`, padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", borderRadius:"24px 24px 0 0" }}>
//           <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//             <div style={{ width:46, height:46, borderRadius:14, background:"linear-gradient(135deg,#10b981,#059669)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:"0 4px 14px rgba(16,185,129,0.35)" }}>📥</div>
//             <div>
//               <div style={{ fontSize:10, color:"#065f46", fontWeight:800, letterSpacing:2, textTransform:"uppercase" }}>Admin · E-Library</div>
//               <h2 style={{ margin:0, fontSize:17, fontWeight:900, color:"#064e3b" }}>Bulk Import Materials via CSV</h2>
//             </div>
//           </div>
//           <button onClick={onClose} style={{ background:"rgba(255,255,255,0.8)", border:"1px solid #a7f3d0", borderRadius:10, padding:"7px 13px", cursor:"pointer", fontSize:13, color:C.textSec, fontFamily:"inherit", fontWeight:700 }}>✕ Close</button>
//         </div>

//         <div style={{ padding:"22px 24px" }}>
//           {/* Steps */}
//           <div style={{ display:"flex", alignItems:"center", gap:0, marginBottom:20 }}>
//             {[{ n:1, label:"Upload CSV" }, { n:2, label:"Preview & Import" }].map((s, i) => (
//               <div key={s.n} style={{ display:"flex", alignItems:"center", flex:i===0?0:1 }}>
//                 <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//                   <div style={{ width:28, height:28, borderRadius:"50%", background:step>=s.n?"linear-gradient(135deg,#10b981,#059669)":"#e2e8f0", color:step>=s.n?"#fff":C.textMut, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, transition:"all 0.3s" }}>{step>s.n?"✓":s.n}</div>
//                   <span style={{ fontSize:12, fontWeight:700, color:step>=s.n?"#065f46":C.textMut }}>{s.label}</span>
//                 </div>
//                 {i===0 && <div style={{ flex:1, height:2, background:step>1?"linear-gradient(90deg,#10b981,#059669)":C.border, margin:"0 12px", borderRadius:2 }}/>}
//               </div>
//             ))}
//           </div>

//           {step===1 && (
//             <>
//               {/* CSV info box */}
//               <div style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:14, padding:"16px 18px", marginBottom:18 }}>
//                 <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap" }}>
//                   <div style={{ flex:1 }}>
//                     <div style={{ fontSize:12, color:"#1e40af", fontWeight:800, marginBottom:8 }}>📋 Required CSV Columns (required marked with ★):</div>
//                     <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:10 }}>
//                       {BULK_CSV_FIELDS.map(f => (
//                         <span key={f.name} title={f.desc} style={{ background:f.required?"#1e40af":"rgba(59,130,246,0.1)", color:f.required?"#fff":"#1e40af", borderRadius:6, padding:"3px 8px", fontSize:10, fontWeight:700, border:`1px solid ${f.required?"#1e40af":"#93c5fd"}`, cursor:"default" }}>
//                           {f.name}{f.required && " ★"}
//                         </span>
//                       ))}
//                     </div>
//                     <div style={{ fontSize:11, color:"#1e40af", lineHeight:1.5 }}>
//                       <strong>Category values:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>private</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>government</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>higher</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>btech</code><br/>
//                       <strong>govt_type:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>central</code> or <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>state</code> → <strong>state_id:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>ap</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>telangana</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>other</code><br/>
//                       <strong>dept_id (btech):</strong> cse, it, ece, eee, mech, civil, chem, aero, auto, bio, agri...
//                     </div>
//                   </div>
//                   <button onClick={downloadSample} style={{ background:"linear-gradient(135deg,#3b82f6,#1d4ed8)", color:"#fff", border:"none", borderRadius:12, padding:"10px 16px", cursor:"pointer", fontWeight:800, fontSize:12, fontFamily:"inherit", boxShadow:"0 4px 14px rgba(59,130,246,0.35)", display:"flex", alignItems:"center", gap:6, flexShrink:0, whiteSpace:"nowrap" }}>
//                     ⬇️ Sample CSV
//                   </button>
//                 </div>
//               </div>

//               {/* Drop Zone */}
//               <div
//                 onDragOver={e => { e.preventDefault(); setDragging(true); }}
//                 onDragLeave={() => setDragging(false)}
//                 onDrop={handleDrop}
//                 onClick={() => fileRef.current?.click()}
//                 style={{ border:`2.5px dashed ${dragging?"#10b981":"#fbbf24"}`, borderRadius:18, padding:"48px 20px", textAlign:"center", cursor:"pointer", background:dragging?"linear-gradient(135deg,#f0fdf4,#d1fae5)":"linear-gradient(135deg,#fffbeb,#fef3c7)", transition:"all 0.3s ease" }}>
//                 <div style={{ fontSize:48, marginBottom:12, animation:"float 3s ease-in-out infinite" }}>{dragging?"📂":"☁️"}</div>
//                 <div style={{ fontSize:16, fontWeight:800, color:dragging?"#065f46":"#92400e", marginBottom:6 }}>{dragging?"Release to upload!":"Drop your CSV file here"}</div>
//                 <div style={{ fontSize:12, color:dragging?"#059669":"#b45309", fontWeight:600, marginBottom:12 }}>Drag & drop or click to browse</div>
//                 <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.8)", border:`1px solid ${dragging?"#a7f3d0":"#fde68a"}`, borderRadius:8, padding:"6px 14px", fontSize:11, color:C.textMut, fontWeight:700 }}>📎 Only .csv files accepted</div>
//                 <input ref={fileRef} type="file" accept=".csv" style={{ display:"none" }} onChange={e => handleFile(e.target.files[0])}/>
//               </div>
//             </>
//           )}

//           {step===2 && parsed && (
//             <>
//               {/* Parse Summary */}
//               <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:14, padding:"14px 18px", marginBottom:16, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
//                 <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//                   <div style={{ width:40, height:40, borderRadius:10, background:"#10b981", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:"#fff" }}>✅</div>
//                   <div>
//                     <div style={{ fontWeight:800, fontSize:14, color:"#065f46" }}>Ready to import {parsed.length} material{parsed.length!==1?"s":""}</div>
//                     <div style={{ fontSize:11, color:"#059669", fontWeight:600 }}>From: {file?.name}{errors.length>0?` · ${errors.length} rows skipped`:""}</div>
//                   </div>
//                 </div>
//                 <button onClick={() => { setStep(1); setFile(null); setParsed(null); setErrors([]); setProgress(0); }} style={{ background:"rgba(255,255,255,0.8)", border:"1px solid #a7f3d0", borderRadius:9, padding:"7px 14px", cursor:"pointer", fontSize:12, fontWeight:700, color:"#065f46", fontFamily:"inherit" }}>🔄 Re-upload</button>
//               </div>

//               {/* Errors */}
//               {errors.length > 0 && (
//                 <div style={{ background:"#fef2f2", border:"1.5px solid #fca5a5", borderRadius:12, padding:"12px 16px", marginBottom:14 }}>
//                   <div style={{ fontWeight:800, fontSize:12, color:"#991b1b", marginBottom:6 }}>⚠️ {errors.length} row(s) skipped:</div>
//                   {errors.map((e, i) => <div key={i} style={{ fontSize:11, color:"#ef4444", fontWeight:600 }}>• {e}</div>)}
//                 </div>
//               )}

//               {/* Preview table */}
//               <div style={{ border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", marginBottom:16, maxHeight:280, overflowY:"auto" }}>
//                 <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
//                   <thead>
//                     <tr style={{ background:"linear-gradient(135deg,#1e3a8a,#1e40af)", position:"sticky", top:0 }}>
//                       {["#","Title","Category","Sub/Dept","Type","Pages","Topics","Govt","State","Topics Defined"].map(h => (
//                         <th key={h} style={{ padding:"10px 12px", textAlign:"left", color:"rgba(255,255,255,0.9)", fontWeight:700, fontSize:10, textTransform:"uppercase", whiteSpace:"nowrap" }}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {parsed.map((row, i) => {
//                       const catKey = mapCategory(row.category);
//                       const cat = CATEGORIES[catKey] || CATEGORIES.private;
//                       const customTopics = buildTopicsFromRow(row);
//                       return (
//                         <tr key={i} style={{ borderTop:`1px solid ${C.border}`, background:i%2===0?C.surface:C.elevated }}>
//                           <td style={{ padding:"9px 12px", color:C.textMut, fontWeight:700 }}>{i+1}</td>
//                           <td style={{ padding:"9px 12px", fontWeight:700, color:C.textPri, maxWidth:140, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{row.thumbnail_icon||"📄"} {row.title||"—"}</td>
//                           <td style={{ padding:"9px 12px" }}><span style={{ background:cat.bg, color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
//                           <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600, fontSize:11 }}>{row.sub_category||row.dept_id||"—"}</td>
//                           <td style={{ padding:"9px 12px" }}><span style={{ background:(row.type||"").toLowerCase().includes("prem")?"#fffbeb":"#f0fdf4", color:(row.type||"").toLowerCase().includes("prem")?"#92400e":"#166534", borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>{(row.type||"free").toLowerCase().includes("prem")?"✨ Premium":"🆓 Free"}</span></td>
//                           <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600 }}>{row.total_pages||"—"}</td>
//                           <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600 }}>{row.total_topics||customTopics?.length||"—"}</td>
//                           <td style={{ padding:"9px 12px", fontSize:10, color:C.textSec }}>{row.govt_type||"—"}</td>
//                           <td style={{ padding:"9px 12px", fontSize:10, color:C.textSec }}>{row.state_id||"—"}</td>
//                           <td style={{ padding:"9px 12px" }}><span style={{ background:customTopics?"#f0fdf4":"#f8fafc", color:customTopics?"#166534":C.textMut, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>{customTopics?`✅ ${customTopics.length}`:"—"}</span></td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Progress */}
//               {importing && (
//                 <div style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:14, padding:"16px 18px", marginBottom:14 }}>
//                   <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
//                     <div style={{ width:32, height:32, borderRadius:"50%", background:"linear-gradient(135deg,#3b82f6,#6366f1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, animation:"spin 1s linear infinite" }}>⚡</div>
//                     <div>
//                       <div style={{ fontWeight:800, fontSize:13, color:"#1e40af" }}>Importing {Math.round(progress)}%</div>
//                       <div style={{ fontSize:11, color:"#3b82f6" }}>Processing {parsed.length} records with topics...</div>
//                     </div>
//                   </div>
//                   <div style={{ height:8, background:"#dbeafe", borderRadius:8, overflow:"hidden" }}>
//                     <div style={{ width:`${progress}%`, height:"100%", background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)", borderRadius:8, transition:"width 0.3s ease" }}/>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Actions */}
//           <div style={{ display:"flex", gap:10, marginTop:4 }}>
//             <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 0", cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"inherit" }}>Cancel</button>
//             {step===2 && parsed && parsed.length>0 && (
//               <button onClick={handleImport} disabled={importing} style={{ flex:2, background:importing?"#94a3b8":"linear-gradient(135deg,#10b981,#059669)", color:"#fff", border:"none", borderRadius:12, padding:"13px 0", cursor:importing?"not-allowed":"pointer", fontWeight:800, fontSize:13, fontFamily:"inherit", boxShadow:importing?"none":"0 4px 18px rgba(16,185,129,0.4)", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
//                 {importing ? <>⏳ Importing...</> : <>📥 Import {parsed.length} Material{parsed.length!==1?"s":""}</>}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper function for bulk import preview
// function buildTopicsFromRow(row) {
//   const topics = [];
//   for (let i = 1; i <= 10; i++) {
//     const titleKey = `topic_${i}_title`;
//     const pagesKey = `topic_${i}_pages`;
//     if (row[titleKey] && row[titleKey].trim()) {
//       topics.push({ id:i, title:row[titleKey].trim(), pages:parseInt(row[pagesKey])||20, done:false });
//     }
//   }
//   return topics.length > 0 ? topics : null;
// }

// // ─── B.TECH DROPDOWN SELECTOR ─────────────────────────────────────────────────
// function BTechDropdown({ activeDept, onSelect, materials }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const selected = BTECH_DEPARTMENTS.find(d => d.id === activeDept);
//   const getMatsCount = (deptId) => materials.filter(m => m.category === "btech" && m.deptId === deptId).length
//     + (BTECH_MATERIALS[deptId] ? BTECH_MATERIALS[deptId].length : 0);

//   return (
//     <div ref={ref} style={{ position:"relative" }}>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{ display:"flex", alignItems:"center", gap:8, background:selected?"linear-gradient(135deg,#fce7f3,#fbcfe8)":C.surface, border:`1.5px solid ${selected?"#ec4899":C.border}`, borderRadius:12, padding:"10px 16px", cursor:"pointer", fontWeight:700, fontSize:13, color:selected?"#be185d":C.textSec, fontFamily:"inherit", transition:"all 0.2s", whiteSpace:"nowrap", boxShadow:selected?"0 4px 14px rgba(236,72,153,0.2)":C.shadow }}>
//         <span style={{ fontSize:16 }}>{selected ? selected.icon : "🔬"}</span>
//         <span>{selected ? selected.short : "B.Tech Dept"}</span>
//         <span style={{ fontSize:10, marginLeft:2, transform:open?"rotate(180deg)":"", transition:"transform 0.2s" }}>▼</span>
//       </button>

//       {open && (
//         <div style={{ position:"absolute", top:"calc(100% + 8px)", left:0, background:C.surface, border:`1.5px solid ${C.border}`, borderRadius:16, boxShadow:C.shadowLg, zIndex:5000, minWidth:300, maxHeight:400, overflowY:"auto", animation:"cardIn 0.2s ease", padding:"8px 0" }}>
//           <div style={{ padding:"8px 14px 6px", fontSize:10, color:C.textMut, fontWeight:800, textTransform:"uppercase", letterSpacing:1 }}>Select Department</div>
//           {activeDept && (
//             <div onClick={() => { onSelect(null); setOpen(false); }} className="dept-option" style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", cursor:"pointer", background:"#fef2f2", borderBottom:`1px solid ${C.border}`, marginBottom:4 }}>
//               <span style={{ fontSize:14 }}>✕</span>
//               <span style={{ fontSize:12, fontWeight:700, color:"#ef4444" }}>Clear Selection</span>
//             </div>
//           )}
//           {BTECH_DEPARTMENTS.map(dept => {
//             const count = getMatsCount(dept.id);
//             const isActive = activeDept === dept.id;
//             return (
//               <div key={dept.id} onClick={() => { onSelect(dept.id); setOpen(false); }} className="dept-option"
//                 style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", cursor:"pointer", background:isActive?dept.bg:"transparent" }}>
//                 <div style={{ width:32, height:32, borderRadius:8, background:isActive?dept.bg:"rgba(0,0,0,0.04)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, border:`1px solid ${isActive?dept.border:"transparent"}`, flexShrink:0 }}>{dept.icon}</div>
//                 <div style={{ flex:1 }}>
//                   <div style={{ fontSize:12, fontWeight:isActive?800:700, color:isActive?dept.color:C.textPri }}>{dept.name}</div>
//                   <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{dept.short} · {count} materials</div>
//                 </div>
//                 {isActive && <span style={{ fontSize:14, color:dept.color }}>✓</span>}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── GOVERNMENT SECTOR FILTER ─────────────────────────────────────────────────
// function GovtSectorFilter({ govtFilter, stateFilter, onGovtChange, onStateChange }) {
//   return (
//     <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:16, padding:"16px 20px", marginBottom:18, animation:"slideDown 0.3s ease" }}>
//       <div style={{ fontSize:11, color:"#065f46", fontWeight:800, textTransform:"uppercase", letterSpacing:1, marginBottom:14 }}>🏛️ Government Sector Filter</div>
      
//       {/* Central vs State */}
//       <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
//         {[{ v:"all", l:"🌐 All", icon:"🌐" }, { v:"central", l:"🏛️ Central Govt", icon:"🏛️" }, { v:"state", l:"🗺️ State Govt", icon:"🗺️" }].map(item => (
//           <button key={item.v} onClick={() => { onGovtChange(item.v); if(item.v!=="state") onStateChange("all"); }}
//             style={{ padding:"8px 16px", borderRadius:10, border:`1.5px solid ${govtFilter===item.v?"#059669":"#a7f3d0"}`, background:govtFilter===item.v?"#059669":"rgba(255,255,255,0.7)", color:govtFilter===item.v?"#fff":"#065f46", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>
//             {item.l}
//           </button>
//         ))}
//       </div>

//       {/* State sub-filter */}
//       {govtFilter === "state" && (
//         <div style={{ animation:"slideDown 0.25s ease" }}>
//           <div style={{ fontSize:11, color:"#065f46", fontWeight:700, marginBottom:10 }}>Select State:</div>
//           <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//             <button onClick={() => onStateChange("all")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="all"?"#7c3aed":"#c4b5fd"}`, background:stateFilter==="all"?"#7c3aed":"rgba(255,255,255,0.8)", color:stateFilter==="all"?"#fff":"#5b21b6", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>🌐 All States</button>
            
//             {/* AP */}
//             <button onClick={() => onStateChange("ap")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="ap"?"#dc2626":"#fca5a5"}`, background:stateFilter==="ap"?"#dc2626":"rgba(255,255,255,0.8)", color:stateFilter==="ap"?"#fff":"#dc2626", cursor:"pointer", fontSize:12, fontWeight:800, fontFamily:"inherit", transition:"all 0.18s", display:"flex", alignItems:"center", gap:6 }}>
//               🌊 Andhra Pradesh
//             </button>
            
//             {/* Telangana */}
//             <button onClick={() => onStateChange("telangana")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="telangana"?"#7c3aed":"#c4b5fd"}`, background:stateFilter==="telangana"?"#7c3aed":"rgba(255,255,255,0.8)", color:stateFilter==="telangana"?"#fff":"#7c3aed", cursor:"pointer", fontSize:12, fontWeight:800, fontFamily:"inherit", transition:"all 0.18s", display:"flex", alignItems:"center", gap:6 }}>
//               🌺 Telangana
//             </button>
            
//             {/* Other */}
//             <button onClick={() => onStateChange("other")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="other"?"#0891b2":"#7dd3fc"}`, background:stateFilter==="other"?"#0891b2":"rgba(255,255,255,0.8)", color:stateFilter==="other"?"#fff":"#0891b2", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>
//               🗾 Other States
//             </button>
//           </div>

//           {/* State Info Panel */}
//           {stateFilter !== "all" && stateFilter && (
//             <div style={{ marginTop:12, background:"rgba(255,255,255,0.7)", border:"1.5px solid rgba(255,255,255,0.9)", borderRadius:12, padding:"12px 16px", backdropFilter:"blur(8px)" }}>
//               <div style={{ fontSize:11, fontWeight:800, color:"#065f46", marginBottom:8 }}>
//                 {stateFilter==="ap"?"🌊 Andhra Pradesh Exams:":stateFilter==="telangana"?"🌺 Telangana Exams:":"🗾 Other State Exams:"}
//               </div>
//               <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
//                 {GOVT_STRUCTURE.state.states[stateFilter]?.exams.map(exam => (
//                   <span key={exam} style={{ background:stateFilter==="ap"?"rgba(220,38,38,0.08)":stateFilter==="telangana"?"rgba(124,58,237,0.08)":"rgba(8,145,178,0.08)", color:stateFilter==="ap"?"#dc2626":stateFilter==="telangana"?"#7c3aed":"#0891b2", borderRadius:6, padding:"3px 8px", fontSize:10, fontWeight:700, border:`1px solid ${stateFilter==="ap"?"#fca5a5":stateFilter==="telangana"?"#c4b5fd":"#7dd3fc"}` }}>
//                     {exam}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── MATERIAL MODAL ───────────────────────────────────────────────────────────
// function MaterialModal({ material:m, onClose, toast, onEprepClick }) {
//   const [topicsState, setTopicsState] = useState(() => {
//     if (m.customTopics && m.customTopics.length > 0) return m.customTopics;
//     if (m.id === 1) return JAVA_TOPICS;
//     // Generate generic topics
//     const count = m.topics || 5;
//     return Array.from({ length:count }, (_, i) => ({
//       id: i+1, title:`Topic ${i+1}`, pages: Math.floor(m.pages / count) || 20, done:false
//     }));
//   });
//   const [activeTab, setActiveTab] = useState("topics");
//   const [notes, setNotes] = useState("");
//   const cat = CATEGORIES[m.category] || CATEGORIES.private;
//   const done = topicsState.filter(t => t.done).length;
//   const pct = topicsState.length > 0 ? Math.round((done / topicsState.length) * 100) : 0;
//   const crash = CRASH_COURSES[m.id];
//   const allDone = done === topicsState.length && topicsState.length > 0;

//   return (
//     <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)", animation:"fadeIn 0.2s ease" }} onClick={e => e.target===e.currentTarget && onClose()}>
//       <div style={{ background:C.surface, borderRadius:22, maxWidth:680, width:"100%", maxHeight:"94vh", overflow:"auto", boxShadow:C.shadowLg, animation:"cardIn 0.35s ease" }}>
//         <div style={{ background:cat.gradient, padding:"24px 24px 20px", borderRadius:"22px 22px 0 0", position:"relative", borderBottom:`1px solid ${cat.border}` }}>
//           <button onClick={onClose} style={{ position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.8)", border:`1px solid ${C.border}`, borderRadius:10, padding:"6px 11px", cursor:"pointer", fontSize:14, color:C.textSec }}>✕</button>
//           <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
//             <MatThumb m={m} size={68}/>
//             <div style={{ flex:1, minWidth:200 }}>
//               <h2 style={{ margin:"0 0 6px", color:cat.color, fontSize:18, fontWeight:800 }}>{m.title}</h2>
//               <div style={{ fontSize:12, color:C.textSec, marginBottom:8 }}>{m.sub} · {m.pages} pages · {topicsState.length} topics</div>
//               {m.tags && m.tags.length>0 && (
//                 <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:10 }}>
//                   {m.tags.map(tag => <span key={tag} style={{ background:"rgba(0,0,0,0.06)", color:C.textSec, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>#{tag}</span>)}
//                 </div>
//               )}
//               <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//                 {onEprepClick && EPREP_LINKS[m.id] ? (
//                   <button onClick={() => onEprepClick(m)} style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#1e40af", color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>🎯 E-Prep</button>
//                 ) : EPREP_LINKS[m.id] ? (
//                   <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#1e40af", color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, textDecoration:"none" }}>🎯 E-Prep</a>
//                 ) : null}
//                 {crash && (<a href={crash.url} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:5, background:crash.color, color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, textDecoration:"none" }}>⚡ Crash</a>)}
//               </div>
//             </div>
//           </div>
//           <div style={{ display:"flex", gap:14, marginTop:16, alignItems:"center", flexWrap:"wrap" }}>
//             <Ring pct={pct} size={52} stroke={5} color={cat.color}/>
//             <div><div style={{ fontWeight:800, fontSize:14, color:cat.color }}>{pct}% complete</div><div style={{ fontSize:12, color:C.textSec }}>{done}/{topicsState.length} topics done</div></div>
//             {allDone && (<div style={{ marginLeft:"auto", background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:10, padding:"8px 14px", color:"#166534", fontSize:12, fontWeight:700, animation:"bounce 1s ease" }}>🎉 Completed!</div>)}
//           </div>
//         </div>
//         <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, padding:"0 20px", overflowX:"auto" }}>
//           {[["topics","📚 Topics"],["notes","🗒️ Notes"],["info","ℹ️ Info"]].map(([t, l]) => (
//             <button key={t} onClick={() => setActiveTab(t)} style={{ padding:"12px 18px", border:"none", background:"none", fontWeight:700, fontSize:13, cursor:"pointer", color:activeTab===t?cat.color:C.textSec, borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`, fontFamily:"inherit", whiteSpace:"nowrap" }}>{l}</button>
//           ))}
//         </div>
//         <div style={{ padding:20 }}>
//           {activeTab==="topics" && (
//             <div>
//               {topicsState.length === 0 ? (
//                 <div style={{ textAlign:"center", padding:"30px 0", color:C.textMut }}>
//                   <div style={{ fontSize:36, marginBottom:8 }}>📭</div>
//                   <div style={{ fontWeight:600 }}>No topics defined for this material</div>
//                 </div>
//               ) : topicsState.map((t, i) => (
//                 <div key={t.id} onClick={() => setTopicsState(p => p.map(x => x.id===t.id ? { ...x, done:!x.done } : x))}
//                   style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 16px", borderRadius:12, marginBottom:8, cursor:"pointer", background:t.done?cat.gradient:C.elevated, border:`1.5px solid ${t.done?cat.color:C.border}`, transition:"all 0.2s", animation:`cardIn 0.3s ease ${i*0.03}s both` }}>
//                   <div style={{ width:28, height:28, borderRadius:"50%", background:t.done?cat.color:"transparent", border:`2px solid ${t.done?cat.color:C.borderHi}`, display:"flex", alignItems:"center", justifyContent:"center", color:t.done?"#fff":C.textMut, fontWeight:800, fontSize:12, flexShrink:0, transition:"all 0.2s" }}>{t.done?"✓":i+1}</div>
//                   <div style={{ flex:1 }}>
//                     <div style={{ fontWeight:700, fontSize:13 }}>{t.title}</div>
//                     <div style={{ fontSize:11, color:C.textMut }}>{t.pages} pages</div>
//                   </div>
//                   {t.done && <span style={{ fontSize:10, background:cat.color, color:"#fff", borderRadius:6, padding:"3px 9px", fontWeight:700 }}>Done</span>}
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeTab==="notes" && (
//             <div>
//               <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Write your personal notes here..." style={{ width:"100%", minHeight:160, borderRadius:12, padding:14, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, resize:"vertical", boxSizing:"border-box", outline:"none", fontFamily:"inherit" }}/>
//               <button onClick={() => toast("Notes saved!","success")} style={{ marginTop:10, background:cat.color, color:"#fff", border:"none", borderRadius:10, padding:"10px 24px", fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>💾 Save Notes</button>
//             </div>
//           )}
//           {activeTab==="info" && (
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10 }}>
//               {[["Category",CATEGORIES[m.category]?.label||m.category],["Type",m.type],["Pages",m.pages],["Topics",topicsState.length],["Downloads",m.downloads.toLocaleString()],["Sub",m.sub],
//                 ...(m.govtType?[["Govt Type",m.govtType]]:[]),(m.stateId?[["State",m.stateId]]:[]),(m.deptId?[["Dept",m.deptId.toUpperCase()]]:[]),(m.indiaOrAbroad?[["Destination",m.indiaOrAbroad]]:[])
//               ].filter(Boolean).map(([k,v]) => (
//                 <div key={k} style={{ background:C.elevated, border:`1px solid ${C.border}`, borderRadius:10, padding:"12px 14px" }}>
//                   <div style={{ fontSize:10, color:C.textMut, fontWeight:800, textTransform:"uppercase", marginBottom:3 }}>{k}</div>
//                   <div style={{ fontSize:13, fontWeight:700 }}>{String(v)}</div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
//     </div>
//   );
// }

// // ─── PREMIUM BANNER ────────────────────────────────────────────────────────────
// function PremiumBanner({ completedCount, premiumMaterials, onOpen }) {
//   const unlocked = completedCount >= 3, needed = 3 - completedCount;
//   return (
//     <div style={{ background:unlocked?"linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)":"linear-gradient(135deg,#f1f5f9,#e2e8f0)", border:`2px solid ${unlocked?C.amber:C.border}`, borderRadius:20, padding:"20px 24px", marginBottom:24, position:"relative", overflow:"hidden", animation:"slideDown 0.5s ease" }}>
//       {unlocked && <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)", animation:"shimmer 2.5s infinite", pointerEvents:"none" }}/>}
//       <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap", position:"relative" }}>
//         <div style={{ fontSize:44, animation:unlocked?"bounce 1s ease infinite":"none", flexShrink:0 }}>{unlocked?"🔓":"🔒"}</div>
//         <div style={{ flex:1, minWidth:180 }}>
//           <div style={{ fontWeight:800, fontSize:16, color:unlocked?"#92400e":C.textSec, marginBottom:4 }}>{unlocked?"✨ Premium Unlocked!":`${needed} more to unlock Premium`}</div>
//           <div style={{ fontSize:12, color:unlocked?"#b45309":C.textMut }}>{unlocked?`${premiumMaterials.length} premium materials now available`:`Complete ${needed} more free material${needed>1?"s":""}`}</div>
//           {!unlocked && (<div style={{ marginTop:8, background:"#e2e8f0", borderRadius:10, height:6, overflow:"hidden", maxWidth:260 }}><div style={{ width:`${(completedCount/3)*100}%`, height:"100%", background:"linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius:10, transition:"width 1s ease" }}/></div>)}
//         </div>
//         {unlocked && (
//           <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//             {premiumMaterials.slice(0, 3).map(m => (
//               <button key={m.id} onClick={() => onOpen(m)} style={{ background:"rgba(255,255,255,0.7)", border:"1.5px solid #f59e0b", borderRadius:10, padding:"8px 12px", cursor:"pointer", textAlign:"center", backdropFilter:"blur(8px)", minWidth:90 }}>
//                 <div style={{ fontSize:20, marginBottom:4 }}>{m.emoji}</div>
//                 <div style={{ fontSize:10, fontWeight:700, color:"#92400e", lineHeight:1.2 }}>{m.title.substring(0,15)}...</div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── REQUEST MODAL ────────────────────────────────────────────────────────────
// function RequestMaterialModal({ onClose, onSubmit }) {
//   const [form, setForm] = useState({ title:"", category:"private", sub:"IT", reason:"" });
//   const set = (k, v) => setForm(p => ({ ...p, [k]:v }));
//   const valid = form.title.trim() && form.reason.trim();
//   return (
//     <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)" }}>
//       <div style={{ background:C.surface, borderRadius:22, maxWidth:500, width:"100%", boxShadow:C.shadowLg, animation:"cardIn 0.3s ease", maxHeight:"90vh", overflowY:"auto" }}>
//         <div style={{ padding:"20px 24px", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <h2 style={{ margin:0, color:C.amber, fontSize:16, fontWeight:800 }}>📨 Request New Material</h2>
//           <button onClick={onClose} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:9, padding:"6px 11px", cursor:"pointer" }}>✕</button>
//         </div>
//         <div style={{ padding:"22px 24px", display:"flex", flexDirection:"column", gap:14 }}>
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Material Title *</label><input value={form.title} onChange={e => set("title",e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
//           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e => { set("category",e.target.value); set("sub",CATEGORY_SUBS[e.target.value]?.[0]||""); }} style={{ width:"100%", padding:"10px 12px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}</select></div>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Sub-category</label><select value={form.sub} onChange={e => set("sub",e.target.value)} style={{ width:"100%", padding:"10px 12px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{(CATEGORY_SUBS[form.category]||[]).map(s => <option key={s} value={s}>{s}</option>)}</select></div>
//           </div>
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Why do you need this? *</label><textarea value={form.reason} onChange={e => set("reason",e.target.value)} placeholder="Describe why this material would help..." rows={3} style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, resize:"vertical", boxSizing:"border-box", outline:"none", fontFamily:"inherit" }}/></div>
//           <div style={{ display:"flex", gap:10 }}>
//             <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
//             <button onClick={() => valid && onSubmit(form)} style={{ flex:2, background:valid?C.amber:"#e2e8f0", color:valid?"#fff":C.textMut, border:"none", borderRadius:10, padding:12, cursor:valid?"pointer":"not-allowed", fontWeight:800, fontFamily:"inherit", fontSize:13 }}>📨 Send Request</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
// const CURRENT_STUDENT = { id:"s1", name:"Arjun Sharma" };

// function StudentDashboard({ onBack }) {
//   const [materials, setMaterials] = useState(() => [..._globalMaterials]);
//   const [requests, setRequests] = useState(() => _globalRequests.filter(r => r.studentId===CURRENT_STUDENT.id));
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCat] = useState("all");
//   const [activeSub, setActiveSub] = useState("all");
//   const [activeDept, setActiveDept] = useState(null); // B.Tech dept
//   const [govtFilter, setGovtFilter] = useState("all");
//   const [stateFilter, setStateFilter] = useState("all");
//   const [openMaterial, setOpenMat] = useState(null);
//   const [showReqModal, setShowReqModal] = useState(false);
//   const [activeView, setActiveView] = useState("library");
//   const { toasts, add:toast } = useToast();
//   const [animIn, setAnimIn] = useState(false);
//   const completedCount = 3;

//   useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  
//   // Sync with global materials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMaterials([..._globalMaterials]);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Get b.tech materials (combined)
//   const getBtechMaterials = useCallback((deptId) => {
//     const global = _globalMaterials.filter(m => m.category==="btech" && (!deptId || m.deptId===deptId));
//     const built = deptId ? (BTECH_MATERIALS[deptId]||[]).map(m => ({ ...m, category:"btech", sub:BTECH_DEPARTMENTS.find(d=>d.id===deptId)?.short||"BTECH", deptId, govtType:null, stateId:null, indiaOrAbroad:null, uploadType:null, fileLink:"", bookmarked:false, customTopics:null, tags:m.tags||[] })) : [];
//     const globalIds = new Set(global.map(m => m.id));
//     return [...global, ...built.filter(m => !globalIds.has(m.id))];
//   }, [materials]);

//   const higherMats = materials.filter(m => m.category==="higher");
//   const higherTotal = higherMats.length || 1;
//   const indiaPct = Math.round((higherMats.filter(m => m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both").length/higherTotal)*100);
//   const abroadPct = Math.round((higherMats.filter(m => m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both").length/higherTotal)*100);

//   // Compute filtered list
//   const filtered = (() => {
//     let list = [];
//     if (activeCategory === "btech") {
//       list = getBtechMaterials(activeDept);
//     } else {
//       list = materials.filter(m => m.category !== "btech");
//     }

//     // Category filter
//     if (activeCategory !== "all" && activeCategory !== "btech") {
//       list = list.filter(m => m.category===activeCategory);
//     }

//     // Govt filter
//     if (activeCategory === "government" || (activeCategory==="all" && govtFilter!=="all")) {
//       if (govtFilter === "central") list = list.filter(m => m.govtType==="central" || (!m.govtType && m.category==="government"));
//       if (govtFilter === "state") {
//         list = list.filter(m => m.govtType==="state");
//         if (stateFilter !== "all") list = list.filter(m => m.stateId===stateFilter);
//       }
//     }

//     // Higher India/Abroad
//     if (activeCategory==="higher" && activeSub!=="all") {
//       if (activeSub==="India") list = list.filter(m => m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both");
//       else if (activeSub==="Abroad") list = list.filter(m => m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both");
//     }

//     // Sub filter (non-higher, non-btech)
//     if (activeSub!=="all" && activeCategory!=="higher" && activeCategory!=="btech") {
//       list = list.filter(m => m.sub===activeSub);
//     }

//     // Search
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       list = list.filter(m => m.title.toLowerCase().includes(q) || m.sub.toLowerCase().includes(q) || (m.tags||[]).some(t=>t.includes(q)));
//     }

//     return list;
//   })();

//   const premiumMats = [...materials, ...getBtechMaterials(null)].filter(m => m.type==="premium");

//   const handleOpen = (m) => {
//     if (m.type==="premium" && completedCount<3) { toast("Complete 3 free materials to unlock premium!","warn"); return; }
//     setOpenMat(m);
//   };
//   const handleDownload = (m) => {
//     if (m.type==="premium" && completedCount<3) { toast("Complete 3 materials to unlock downloads","warn"); return; }
//     toast(`"${m.title}" download started!`,"success");
//   };
//   const toggleBookmark = (id) => {
//     setMaterials(p => p.map(m => m.id===id ? { ...m, bookmarked:!m.bookmarked } : m));
//     toast("Bookmark updated","info");
//   };
//   const submitRequest = (data) => {
//     const newReq = { id:`r${Date.now()}`, studentId:CURRENT_STUDENT.id, studentName:CURRENT_STUDENT.name, ...data, status:"pending", date:new Date().toISOString().slice(0,10) };
//     _globalRequests = [..._globalRequests, newReq];
//     setRequests(p => [...p, newReq]);
//     setShowReqModal(false);
//     toast("📨 Request sent to admin!","success");
//   };

//   const myPending = requests.filter(r => r.status==="pending").length;
//   const getStatusBadge = (s) => s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

//   return (
//     <div style={{ minHeight:"100vh", background:C.bg, color:C.textPri, fontFamily:"'Nunito',sans-serif" }}>
//       <style>{GLOBAL_CSS}</style>
//       <ToastContainer toasts={toasts}/>

//       {/* Top Nav */}
//       <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"0 16px", boxShadow:"0 2px 12px rgba(15,23,42,0.06)", position:"sticky", top:0, zIndex:100 }}>
//         <div style={{ maxWidth:1300, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:62, gap:10 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//             <button className="btn-hover" onClick={onBack} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:10, padding:"7px 12px", cursor:"pointer", fontSize:12, fontFamily:"inherit", fontWeight:600, whiteSpace:"nowrap" }}>← Home</button>
//             <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//               <span style={{ fontSize:22 }}>📚</span>
//               <span style={{ fontWeight:900, fontSize:17, color:C.amber }}>OYS E-Library</span>
//             </div>
//           </div>
//           <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
//             <div style={{ background:completedCount>=3?"#f0fdf4":"#fffbeb", border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`, borderRadius:20, padding:"5px 12px", color:completedCount>=3?"#166534":"#92400e", fontSize:11, fontWeight:700, animation:completedCount>=3?"pulse 2s infinite":"none", whiteSpace:"nowrap" }}>{completedCount>=3?"🔓 Premium Unlocked":"✅ "+completedCount+"/3"}</div>
//             <button className="btn-hover" onClick={() => setShowReqModal(true)} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"8px 14px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 14px rgba(245,158,11,0.35)", whiteSpace:"nowrap" }}>+ Request</button>
//           </div>
//         </div>
//       </div>

//       {/* Tab Bar */}
//       <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"0 16px", overflowX:"auto" }}>
//         <div style={{ maxWidth:1300, margin:"0 auto", display:"flex", gap:0 }}>
//           {[["library","📖 Library"],["requests","📨 Requests"]].map(([v, l]) => (
//             <button key={v} onClick={() => setActiveView(v)} style={{ background:"none", border:"none", padding:"12px 18px", color:activeView===v?C.amber:C.textSec, borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>
//               {l} {v==="requests" && myPending>0 && <span style={{ background:C.rose, color:"#fff", borderRadius:10, padding:"1px 6px", fontSize:10, marginLeft:6 }}>{myPending}</span>}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={{ maxWidth:1300, margin:"0 auto", padding:"20px 16px", opacity:animIn?1:0, transform:animIn?"translateY(0)":"translateY(16px)", transition:"all 0.5s ease" }}>

//         {activeView==="requests" && (
//           <div>
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
//               <h2 style={{ margin:0, fontSize:18, fontWeight:800 }}>My Material Requests</h2>
//               <button className="btn-hover" onClick={() => setShowReqModal(true)} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"9px 18px", fontWeight:700, cursor:"pointer", fontSize:13, fontFamily:"inherit" }}>+ New Request</button>
//             </div>
//             {requests.length===0 ? (
//               <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}><div style={{ fontSize:48, marginBottom:12 }}>📭</div><div style={{ fontSize:15, fontWeight:600, color:C.textSec }}>No requests yet</div></div>
//             ) : (
//               <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
//                 {requests.map(r => {
//                   const badge = getStatusBadge(r.status);
//                   return (
//                     <div key={r.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"18px 22px", display:"flex", alignItems:"center", gap:16, boxShadow:C.shadow, flexWrap:"wrap" }}>
//                       <div style={{ flex:1, minWidth:200 }}><div style={{ fontWeight:800, fontSize:14, marginBottom:4 }}>{r.title}</div><div style={{ fontSize:12, color:C.textSec, marginBottom:4 }}>{CATEGORIES[r.category]?.label||r.category} → {r.sub}</div><div style={{ fontSize:11, color:C.textMut, fontStyle:"italic" }}>"{r.reason}"</div></div>
//                       <div style={{ textAlign:"right" }}><div style={{ display:"inline-block", borderRadius:10, padding:"6px 14px", fontSize:12, fontWeight:700, background:badge.bg, color:badge.color, border:`1.5px solid ${badge.border}` }}>{badge.text}</div><div style={{ fontSize:11, color:C.textMut, marginTop:5 }}>{r.date}</div></div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         )}

//         {activeView==="library" && (
//           <>
//             <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>

//             {/* Search */}
//             <div style={{ position:"relative", marginBottom:20 }}>
//               <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:15, color:C.textMut }}>🔍</span>
//               <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search materials, topics, tags..." style={{ width:"100%", padding:"13px 14px 13px 42px", borderRadius:14, border:`1.5px solid ${search?C.amber:C.border}`, background:C.surface, color:C.textPri, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit", boxShadow:C.shadow }}/>
//               {search && <button onClick={() => setSearch("")} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:16, color:C.textMut }}>✕</button>}
//             </div>

//             {/* Category Cards */}
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, marginBottom:20 }}>
//               {/* All */}
//               <div className="cat-card" onClick={() => { setActiveCat("all"); setActiveSub("all"); setActiveDept(null); setGovtFilter("all"); setStateFilter("all"); }}
//                 style={{ background:activeCategory==="all"?"linear-gradient(135deg,#f8fafc,#e2e8f0)":C.surface, border:`1.5px solid ${activeCategory==="all"?C.borderHi:C.border}`, borderRadius:14, padding:"16px 18px", cursor:"pointer" }}>
//                 <div style={{ fontSize:28, marginBottom:8 }}>🌐</div>
//                 <div style={{ fontWeight:800, fontSize:14, color:activeCategory==="all"?C.textPri:C.textSec }}>All Materials</div>
//                 <div style={{ fontSize:11, color:C.textMut, marginTop:3 }}>All categories · {_globalMaterials.length + Object.values(BTECH_MATERIALS).flat().length} total</div>
//               </div>

//               {Object.entries(CATEGORIES).map(([key, cat]) => {
//                 const isActive = activeCategory===key;
//                 const count = key==="btech" ? Object.values(BTECH_MATERIALS).flat().length + _globalMaterials.filter(m=>m.category==="btech").length : _globalMaterials.filter(m=>m.category===key).length;
//                 return (
//                   <div key={key} className="cat-card" onClick={() => { setActiveCat(key); setActiveSub("all"); setActiveDept(null); setGovtFilter("all"); setStateFilter("all"); }}
//                     style={{ background:isActive?cat.gradient:C.surface, border:`1.5px solid ${isActive?cat.color:C.border}`, borderRadius:14, padding:"16px 18px", cursor:"pointer" }}>
//                     <div style={{ fontSize:28, marginBottom:8 }}>{cat.icon}</div>
//                     <div style={{ fontWeight:800, fontSize:14, color:isActive?cat.color:C.textPri }}>{cat.label}</div>
//                     <div style={{ fontSize:11, color:C.textMut, marginTop:3 }}>{count} materials</div>
//                     {key==="higher" && isActive && (
//                       <div style={{ marginTop:10 }}>
//                         <div style={{ display:"flex", gap:4, marginBottom:6 }}>
//                           <span style={{ background:"#f0fdf4", color:"#166534", borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700, border:"1px solid #86efac" }}>🇮🇳 India {indiaPct}%</span>
//                           <span style={{ background:"#eff6ff", color:"#1e40af", borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700, border:"1px solid #93c5fd" }}>✈️ Abroad {abroadPct}%</span>
//                         </div>
//                       </div>
//                     )}
//                     {key==="government" && isActive && (
//                       <div style={{ marginTop:6 }}>
//                         <span style={{ background:"rgba(255,255,255,0.7)", color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700 }}>🏛️ Central + 🗺️ State</span>
//                       </div>
//                     )}
//                     {key==="btech" && isActive && (
//                       <div style={{ marginTop:6 }}>
//                         <span style={{ background:"rgba(255,255,255,0.7)", color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700 }}>20 departments</span>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* B.Tech dropdown */}
//             {activeCategory==="btech" && (
//               <div style={{ marginBottom:18, animation:"slideDown 0.3s ease" }}>
//                 <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:activeDept?12:0 }}>
//                   <BTechDropdown activeDept={activeDept} onSelect={setActiveDept} materials={materials}/>
//                   {activeDept && (
//                     <div style={{ fontSize:13, color:C.textSec, fontWeight:600 }}>
//                       {(() => {
//                         const dept = BTECH_DEPARTMENTS.find(d => d.id===activeDept);
//                         return dept ? <span style={{ color:dept.color, fontWeight:800 }}>{dept.icon} {dept.name}</span> : null;
//                       })()}
//                     </div>
//                   )}
//                 </div>
//                 {activeDept && (
//                   <div style={{ display:"flex", flexWrap:"wrap", gap:5, animation:"slideDown 0.25s ease" }}>
//                     {BTECH_DEPARTMENTS.map(dept => (
//                       <button key={dept.id} onClick={() => setActiveDept(dept.id)} style={{ padding:"5px 10px", borderRadius:8, border:`1.5px solid ${activeDept===dept.id?dept.color:C.border}`, background:activeDept===dept.id?dept.bg:"transparent", color:activeDept===dept.id?dept.color:C.textMut, cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", transition:"all 0.15s" }}>
//                         {dept.icon} {dept.short}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Govt filter */}
//             {activeCategory==="government" && (
//               <GovtSectorFilter govtFilter={govtFilter} stateFilter={stateFilter} onGovtChange={setGovtFilter} onStateChange={setStateFilter}/>
//             )}

//             {/* Higher filter */}
//             {activeCategory==="higher" && (
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, flexWrap:"wrap" }}>
//                 <span style={{ fontSize:13, fontWeight:800, color:"#5b21b6" }}>🌍 Filter:</span>
//                 {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"]].map(([v, l]) => (
//                   <button key={v} onClick={() => setActiveSub(v)} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${activeSub===v?"#7c3aed":"#c4b5fd"}`, background:activeSub===v?"#7c3aed":"rgba(255,255,255,0.8)", color:activeSub===v?"#fff":"#5b21b6", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>
//                     {l}
//                   </button>
//                 ))}
//                 <span style={{ marginLeft:"auto", background:"#f0fdf4", color:"#166534", borderRadius:8, padding:"4px 10px", fontSize:11, fontWeight:800 }}>🇮🇳 {indiaPct}%</span>
//                 <span style={{ background:"#eff6ff", color:"#1e40af", borderRadius:8, padding:"4px 10px", fontSize:11, fontWeight:800 }}>✈️ {abroadPct}%</span>
//               </div>
//             )}

//             {/* Sub filter for private */}
//             {activeCategory==="private" && (
//               <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
//                 {["all",...CATEGORY_SUBS.private].map(s => (
//                   <button key={s} onClick={() => setActiveSub(s)} style={{ padding:"6px 12px", borderRadius:9, border:`1.5px solid ${activeSub===s?C.amber:C.border}`, background:activeSub===s?"#fffbeb":"transparent", color:activeSub===s?C.amberDim:C.textSec, cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>
//                     {s==="all"?"All":s}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Count */}
//             <div style={{ fontSize:12, color:C.textMut, fontWeight:600, marginBottom:14 }}>
//               {filtered.length} material{filtered.length!==1?"s":""} found
//               {activeDept && ` in ${BTECH_DEPARTMENTS.find(d=>d.id===activeDept)?.name}`}
//               {stateFilter!=="all" && stateFilter && ` — ${GOVT_STRUCTURE.state.states[stateFilter]?.label}`}
//             </div>

//             {/* Materials Grid */}
//             {filtered.length===0 ? (
//               <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}>
//                 <div style={{ fontSize:52, marginBottom:12 }}>📭</div>
//                 <div style={{ fontSize:16, fontWeight:700, color:C.textSec, marginBottom:6 }}>No materials found</div>
//                 <div style={{ fontSize:13 }}>Try a different filter or search term</div>
//               </div>
//             ) : (
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:18 }}>
//                 {filtered.map((m, i) => {
//                   const cat = CATEGORIES[m.category] || CATEGORIES.private;
//                   const locked = m.type==="premium" && completedCount<3;
//                   const crash = CRASH_COURSES[m.id];
//                   const dept = m.deptId ? BTECH_DEPARTMENTS.find(d => d.id===m.deptId) : null;
//                   return (
//                     <div key={`${m.id}-${i}`} className="mat-card" style={{ background:C.surface, borderRadius:16, border:`1.5px solid ${m.bookmarked?C.amber:C.border}`, overflow:"hidden", animation:`cardIn 0.45s ease ${Math.min(i,10)*0.05}s both`, boxShadow:C.shadow, position:"relative" }}>
//                       <div style={{ background:dept?dept.bg:cat.gradient, padding:"22px 0 16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, position:"relative", minHeight:110 }}>
//                         <MatThumb m={m} size={68}/>
//                         {locked && <div style={{ position:"absolute", top:8, left:8, background:"#92400e", color:"#fef3c7", fontSize:9, fontWeight:700, borderRadius:6, padding:"2px 7px" }}>🔒 PREMIUM</div>}
//                         {!locked && m.type==="premium" && <div style={{ position:"absolute", top:8, left:8, background:dept?dept.color:cat.color, color:"#fff", fontSize:9, fontWeight:700, borderRadius:6, padding:"2px 7px" }}>✨ PREMIUM</div>}
//                         {m.govtType && <div style={{ position:"absolute", bottom:8, left:8, background:m.govtType==="central"?"rgba(3,105,161,0.12)":"rgba(5,150,105,0.12)", color:m.govtType==="central"?"#0369a1":"#059669", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px", border:`1px solid ${m.govtType==="central"?"#7dd3fc":"#a7f3d0"}` }}>{m.govtType==="central"?"🏛️ Central":"🗺️ State"}</div>}
//                         {m.stateId && <div style={{ position:"absolute", bottom:8, right:8, background:m.stateId==="ap"?"rgba(220,38,38,0.1)":"rgba(124,58,237,0.1)", color:m.stateId==="ap"?"#dc2626":"#7c3aed", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px" }}>{m.stateId==="ap"?"🌊 AP":"🌺 TS"}</div>}
//                         {dept && <div style={{ position:"absolute", bottom:8, left:8, background:dept.bg, color:dept.color, fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px", border:`1px solid ${dept.border}` }}>{dept.icon} {dept.short}</div>}
//                         {m.indiaOrAbroad && <div style={{ position:"absolute", top:8, right:8, background:m.indiaOrAbroad==="India"?"rgba(22,163,74,0.1)":"rgba(30,64,175,0.1)", color:m.indiaOrAbroad==="India"?"#166534":"#1e40af", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px" }}>{m.indiaOrAbroad==="India"?"🇮🇳":"✈️"} {m.indiaOrAbroad}</div>}
//                         <button onClick={e => { e.stopPropagation(); toggleBookmark(m.id); }} style={{ position:"absolute", top:8, right:8, background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)", border:`1px solid ${m.bookmarked?C.amber:C.border}`, borderRadius:7, padding:"4px 7px", cursor:"pointer", fontSize:12, backdropFilter:"blur(4px)" }}>{m.bookmarked?"🔖":"🏷️"}</button>
//                       </div>
//                       <div style={{ padding:"12px 14px 14px" }}>
//                         <div style={{ fontWeight:800, fontSize:13, marginBottom:4, color:C.textPri, lineHeight:1.3 }}>{m.title}</div>
//                         <div style={{ fontSize:11, color:C.textSec, marginBottom:8, display:"flex", alignItems:"center", gap:5, flexWrap:"wrap" }}>
//                           <span style={{ background:dept?dept.bg:cat.bg, color:dept?dept.color:cat.color, borderRadius:5, padding:"2px 7px", fontWeight:700, border:`1px solid ${dept?dept.border:cat.border}` }}>{m.sub}</span>
//                           <span style={{ color:C.textMut }}>{m.pages}p · {m.topics} topics</span>
//                         </div>
//                         {m.progress>0 && (
//                           <div style={{ marginBottom:10 }}>
//                             <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:C.textMut, marginBottom:3 }}><span>Progress</span><span style={{ color:dept?dept.color:cat.color, fontWeight:700 }}>{m.progress}%</span></div>
//                             <div style={{ height:5, background:C.border, borderRadius:8, overflow:"hidden" }}><div style={{ width:`${m.progress}%`, height:"100%", background:`linear-gradient(90deg,${dept?dept.color:cat.color},${dept?dept.color:cat.color}cc)`, borderRadius:8 }}/></div>
//                           </div>
//                         )}
//                         <div style={{ display:"flex", gap:6, marginBottom:m.type!=="premium"||completedCount>=3?8:0 }}>
//                           <button className="btn-hover" onClick={() => handleOpen(m)} style={{ flex:1, background:locked?"#f1f5f9":`linear-gradient(135deg,${dept?dept.color:cat.color},${dept?dept.color:cat.color}dd)`, color:locked?C.textMut:"#fff", border:"none", borderRadius:9, padding:"8px 0", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>{locked?"🔒 Locked":"📖 Open"}</button>
//                           <button className="btn-hover" onClick={() => handleDownload(m)} style={{ background:"#f1f5f9", border:`1px solid ${C.border}`, borderRadius:9, padding:"8px 11px", cursor:"pointer", fontSize:12, color:C.textSec }} title="Download">⬇️</button>
//                         </div>
//                         {(!locked) && (crash || EPREP_LINKS[m.id]) && (
//                           <div style={{ display:"flex", gap:6 }}>
//                             {EPREP_LINKS[m.id] && (<a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:4, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:8, padding:"7px 0", fontSize:11, fontWeight:700, color:"#1e40af", textDecoration:"none" }}>🎯 E-Prep</a>)}
//                             {crash && (<a href={crash.url} target="_blank" rel="noreferrer" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:4, background:"linear-gradient(135deg,#fff7ed,#ffedd5)", border:"1.5px solid #fdba74", borderRadius:8, padding:"7px 0", fontSize:11, fontWeight:700, color:"#c2410c", textDecoration:"none" }}>⚡ Crash</a>)}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {openMaterial && <MaterialModal material={openMaterial} onClose={() => setOpenMat(null)} toast={toast}/>}
//       {showReqModal && <RequestMaterialModal onClose={() => setShowReqModal(false)} onSubmit={submitRequest}/>}
//     </div>
//   );
// }

// // ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
// function AdminDashboard({ onBack }) {
//   const [materials, setMaterials] = useState(() => _globalMaterials.map(m => ({...m})));
//   const [requests, setRequests] = useState(() => [..._globalRequests]);
//   const [students] = useState(() => _globalStudents.map(s => ({...s})));
//   const [activeTab, setActiveTab] = useState("overview");
//   const [filterCat, setFilterCat] = useState("all");
//   const [search, setSearch] = useState("");
//   const [showAddModal, setShowAdd] = useState(false);
//   const [showBulkImport, setShowBulkImport] = useState(false);
//   const [editItem, setEditItem] = useState(null);
//   const [deleteConfirm, setDelConf] = useState(null);
//   const [animIn, setAnimIn] = useState(false);
//   const { toasts, add:toast } = useToast();

//   useEffect(() => {
//     setTimeout(() => setAnimIn(true), 80);
//     const t = setInterval(() => setRequests([..._globalRequests]), 2000);
//     return () => clearInterval(t);
//   }, []);

//   const handleBulkImport = (newMaterials) => {
//     const updated = [...materials, ...newMaterials];
//     setMaterials(updated);
//     _globalMaterials = updated;
//     toast(`✅ ${newMaterials.length} material${newMaterials.length!==1?"s":""} imported!`, "success");
//   };

//   const handleDelete = (id) => {
//     const updated = materials.filter(m => m.id!==id);
//     setMaterials(updated);
//     _globalMaterials = updated;
//     setDelConf(null);
//     toast("Material deleted","error");
//   };

//   const handleSave = (data) => {
//     if (editItem) {
//       const updated = materials.map(m => m.id===editItem.id ? { ...m, ...data } : m);
//       setMaterials(updated);
//       _globalMaterials = updated;
//       toast("Material updated!","success");
//     } else {
//       const newM = { ...data, id:Date.now(), progress:0, bookmarked:false, downloads:0, emoji:data.emoji||"📄", customTopics:null };
//       const updated = [...materials, newM];
//       setMaterials(updated);
//       _globalMaterials = updated;
//       toast("Material added!","success");
//     }
//     setShowAdd(false);
//     setEditItem(null);
//   };

//   const approveRequest = (req, studentOnly) => {
//     const newM = { id:Date.now(), title:req.title, category:req.category, sub:req.sub, type:"free", emoji:"📄", topics:5, progress:0, pages:100, downloads:0, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:[], customTopics:null, studentId:studentOnly?req.studentId:null };
//     const updatedM = [...materials, newM];
//     setMaterials(updatedM);
//     _globalMaterials = updatedM;
//     const updatedR = _globalRequests.map(r => r.id===req.id ? { ...r, status:"approved" } : r);
//     _globalRequests = updatedR;
//     setRequests([...updatedR]);
//     toast(`✅ "${req.title}" approved!`,"success");
//   };

//   const markAddingSoon = (id) => {
//     const updatedR = _globalRequests.map(r => r.id===id ? { ...r, status:"coming_soon" } : r);
//     _globalRequests = updatedR;
//     setRequests([...updatedR]);
//     toast("📅 Student notified!","info");
//   };

//   const filtered = materials.filter(m => {
//     const q = search.toLowerCase();
//     return (m.title.toLowerCase().includes(q)) && (filterCat==="all" || m.category===filterCat);
//   });

//   const pendingReqs = requests.filter(r => r.status==="pending");
//   const stats = {
//     total: materials.length,
//     free: materials.filter(m => m.type==="free").length,
//     premium: materials.filter(m => m.type==="premium").length,
//     downloads: materials.reduce((a, m) => a+m.downloads, 0),
//     students: students.length,
//     pending: pendingReqs.length,
//     btech: materials.filter(m => m.category==="btech").length,
//     govt: materials.filter(m => m.category==="government").length,
//   };

//   const TABS = [
//     { id:"overview", label:"📊 Overview" },
//     { id:"materials", label:"📚 Materials" },
//     { id:"requests", label:`📨 Requests${stats.pending>0?` (${stats.pending})`:""}`},
//     { id:"students", label:"👥 Students" },
//     { id:"categories", label:"🏷️ Categories" },
//   ];

//   const getStatusBadge = (s) => s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

//   return (
//     <div style={{ minHeight:"100vh", background:C.bg, color:C.textPri, fontFamily:"'Nunito',sans-serif", display:"flex" }}>
//       <style>{GLOBAL_CSS}</style>
//       <ToastContainer toasts={toasts}/>

//       {/* Sidebar */}
//       <div style={{ position:"fixed", left:0, top:0, bottom:0, width:220, background:C.surface, borderRight:`1px solid ${C.border}`, display:"flex", flexDirection:"column", zIndex:100, boxShadow:"2px 0 12px rgba(15,23,42,0.06)", overflowY:"auto" }}>
//         <div style={{ padding:"20px 16px", borderBottom:`1px solid ${C.border}` }}>
//           <div style={{ fontSize:10, color:C.textMut, fontWeight:800, marginBottom:3, letterSpacing:1.5, textTransform:"uppercase" }}>OYS E-LIBRARY</div>
//           <div style={{ fontSize:17, fontWeight:900, color:C.amber }}>Admin Panel</div>
//         </div>
//         <nav style={{ padding:"14px 10px", flex:1 }}>
//           {TABS.map(t => (
//             <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ width:"100%", textAlign:"left", padding:"10px 13px", borderRadius:10, border:"none", cursor:"pointer", marginBottom:3, background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent", color:activeTab===t.id?C.amberDim:C.textSec, fontWeight:activeTab===t.id?800:600, fontSize:13, borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`, fontFamily:"inherit", transition:"all 0.15s" }}>{t.label}</button>
//           ))}
//         </nav>
//         <div style={{ padding:"14px 10px", borderTop:`1px solid ${C.border}` }}>
//           <button onClick={onBack} style={{ width:"100%", padding:"10px 13px", borderRadius:10, background:"#fef2f2", border:"1.5px solid #fca5a5", color:"#991b1b", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>← Back to Home</button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ marginLeft:220, flex:1, padding:"24px 28px", opacity:animIn?1:0, transition:"opacity 0.5s ease", minWidth:0 }}>

//         {activeTab==="overview" && (
//           <div>
//             <h1 style={{ fontSize:22, fontWeight:900, marginBottom:24 }}>Dashboard Overview</h1>
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14, marginBottom:28 }}>
//               {[
//                 { label:"Total Materials", value:stats.total, icon:"📚", color:C.amber, bg:"#fffbeb" },
//                 { label:"Free", value:stats.free, icon:"🆓", color:C.sage, bg:"#f0fdf4" },
//                 { label:"Premium", value:stats.premium, icon:"✨", color:C.indigo, bg:"#eff6ff" },
//                 { label:"B.Tech", value:stats.btech+Object.values(BTECH_MATERIALS).flat().length, icon:"🔬", color:"#ec4899", bg:"#fce7f3" },
//                 { label:"Govt Exams", value:stats.govt, icon:"🏛️", color:"#10b981", bg:"#f0fdf4" },
//                 { label:"Pending Requests", value:stats.pending, icon:"⏳", color:C.amberDim, bg:"#fffbeb" },
//               ].map((s, i) => (
//                 <div key={i} style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, padding:"18px 20px", boxShadow:C.shadow, animation:`cardIn 0.4s ease ${i*0.07}s both`, transition:"transform 0.2s,box-shadow 0.2s", cursor:"default" }} onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=C.shadowLg; }} onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=C.shadow; }}>
//                   <div style={{ background:s.bg, borderRadius:9, padding:"7px 9px", fontSize:18, display:"inline-block", marginBottom:10 }}>{s.icon}</div>
//                   <div style={{ fontSize:26, fontWeight:900, color:s.color }}>{s.value}</div>
//                   <div style={{ fontSize:11, color:C.textMut, marginTop:3, fontWeight:600 }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* B.Tech breakdown */}
//             <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:"20px 24px", marginBottom:22, boxShadow:C.shadow }}>
//               <div style={{ fontSize:13, fontWeight:800, color:C.textSec, marginBottom:16 }}>🔬 B.Tech Departments Overview</div>
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))", gap:8 }}>
//                 {BTECH_DEPARTMENTS.slice(0,10).map(dept => {
//                   const count = (BTECH_MATERIALS[dept.id]||[]).length + materials.filter(m=>m.deptId===dept.id).length;
//                   return (
//                     <div key={dept.id} style={{ background:dept.bg, border:`1px solid ${dept.border}`, borderRadius:10, padding:"10px 12px", textAlign:"center" }}>
//                       <div style={{ fontSize:20, marginBottom:4 }}>{dept.icon}</div>
//                       <div style={{ fontSize:11, fontWeight:800, color:dept.color }}>{dept.short}</div>
//                       <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{count} materials</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Govt breakdown */}
//             <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:"20px 24px", marginBottom:22, boxShadow:C.shadow }}>
//               <div style={{ fontSize:13, fontWeight:800, color:C.textSec, marginBottom:14 }}>🏛️ Government Exams Breakdown</div>
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10 }}>
//                 {[
//                   { label:"Central Govt", count:materials.filter(m=>m.govtType==="central").length, icon:"🏛️", color:"#0369a1", bg:"#e0f2fe" },
//                   { label:"AP State", count:materials.filter(m=>m.stateId==="ap").length, icon:"🌊", color:"#dc2626", bg:"#fee2e2" },
//                   { label:"Telangana", count:materials.filter(m=>m.stateId==="telangana").length, icon:"🌺", color:"#7c3aed", bg:"#ede9fe" },
//                   { label:"Other States", count:materials.filter(m=>m.stateId==="other").length, icon:"🗾", color:"#0891b2", bg:"#e0f2fe" },
//                 ].map((s, i) => (
//                   <div key={i} style={{ background:s.bg, border:`1px solid ${s.color}33`, borderRadius:12, padding:"14px 16px" }}>
//                     <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
//                     <div style={{ fontSize:22, fontWeight:900, color:s.color }}>{s.count}</div>
//                     <div style={{ fontSize:11, color:C.textSec, fontWeight:700 }}>{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {pendingReqs.length>0 && (
//               <>
//                 <h2 style={{ fontSize:15, fontWeight:800, marginBottom:12, color:C.textSec }}>⏳ Pending Requests</h2>
//                 {pendingReqs.slice(0,3).map(r => (
//                   <div key={r.id} style={{ background:C.surface, border:"1.5px solid #fcd34d", borderRadius:12, padding:"14px 18px", display:"flex", alignItems:"center", gap:14, boxShadow:C.shadow, marginBottom:8, flexWrap:"wrap" }}>
//                     <div style={{ flex:1 }}><span style={{ fontWeight:800, color:C.amber }}>{r.title}</span><span style={{ color:C.textMut, fontSize:12, marginLeft:8 }}>by {r.studentName}</span></div>
//                     <button onClick={() => setActiveTab("requests")} style={{ background:"#fffbeb", border:"1.5px solid #fcd34d", color:"#92400e", borderRadius:9, padding:"7px 14px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>Review →</button>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         )}

//         {activeTab==="materials" && (
//           <div>
//             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
//               <h1 style={{ fontSize:20, fontWeight:900, margin:0 }}>Manage Materials</h1>
//               <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
//                 <button className="btn-hover" onClick={() => setShowBulkImport(true)} style={{ background:"linear-gradient(135deg,#10b981,#059669)", color:"#fff", border:"none", borderRadius:10, padding:"10px 16px", fontWeight:800, fontSize:12, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 14px rgba(16,185,129,0.35)", display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap" }}>📥 Bulk Import CSV</button>
//                 <button className="btn-hover" onClick={() => { setEditItem(null); setShowAdd(true); }} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"10px 16px", fontWeight:800, fontSize:12, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 14px rgba(245,158,11,0.35)" }}>+ Add Material</button>
//               </div>
//             </div>
//             <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
//               <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search..." style={{ flex:1, minWidth:180, padding:"10px 14px", borderRadius:10, border:`1px solid ${C.border}`, background:C.surface, color:C.textPri, fontSize:13, outline:"none", fontFamily:"inherit" }}/>
//               <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ padding:"10px 12px", borderRadius:10, border:`1px solid ${C.border}`, background:C.surface, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
//                 <option value="all">All Categories</option>
//                 {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
//               </select>
//             </div>
//             <div style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:C.shadow, overflowX:"auto" }}>
//               <table style={{ width:"100%", borderCollapse:"collapse", minWidth:700 }}>
//                 <thead>
//                   <tr style={{ background:C.elevated }}>
//                     {["Material","Category","Sub/Dept","Type","Govt","Downloads","Actions"].map(h => (
//                       <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:11, fontWeight:800, color:C.textMut, textTransform:"uppercase", letterSpacing:0.5, whiteSpace:"nowrap" }}>{h}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.map((m, i) => {
//                     const cat = CATEGORIES[m.category] || CATEGORIES.private;
//                     const dept = m.deptId ? BTECH_DEPARTMENTS.find(d=>d.id===m.deptId) : null;
//                     return (
//                       <tr key={m.id} className="row-hover" style={{ borderTop:`1px solid ${C.border}`, animation:`cardIn 0.3s ease ${i*0.02}s both` }}>
//                         <td style={{ padding:"12px 14px" }}>
//                           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//                             <MatThumb m={m} size={36}/>
//                             <div style={{ fontWeight:700, fontSize:13 }}>{m.title}</div>
//                           </div>
//                         </td>
//                         <td style={{ padding:"12px 14px" }}><span style={{ background:cat.bg, color:cat.color, borderRadius:6, padding:"3px 9px", fontSize:11, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
//                         <td style={{ padding:"12px 14px", color:C.textSec, fontSize:12, fontWeight:600 }}>{dept?`${dept.icon} ${dept.short}`:m.sub}</td>
//                         <td style={{ padding:"12px 14px" }}><span style={{ background:m.type==="premium"?"#fffbeb":"#f0fdf4", color:m.type==="premium"?"#92400e":"#166534", borderRadius:6, padding:"3px 9px", fontSize:11, fontWeight:700 }}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
//                         <td style={{ padding:"12px 14px", fontSize:11, color:C.textSec, fontWeight:600 }}>
//                           {m.govtType==="central"&&"🏛️ Central"}
//                           {m.stateId==="ap"&&"🌊 AP"}
//                           {m.stateId==="telangana"&&"🌺 TS"}
//                           {m.stateId==="other"&&"🗾 State"}
//                           {!m.govtType&&!m.stateId&&"—"}
//                         </td>
//                         <td style={{ padding:"12px 14px", color:C.textSec, fontSize:12, fontWeight:700 }}>{m.downloads.toLocaleString()}</td>
//                         <td style={{ padding:"12px 14px" }}>
//                           <div style={{ display:"flex", gap:5 }}>
//                             <button onClick={() => { setEditItem(m); setShowAdd(true); }} style={{ background:"#fffbeb", color:"#92400e", border:"none", borderRadius:7, padding:"6px 10px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>✏️</button>
//                             <button onClick={() => setDelConf(m.id)} style={{ background:"#fef2f2", color:"#991b1b", border:"none", borderRadius:7, padding:"6px 10px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>🗑</button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//               {filtered.length===0 && <div style={{ textAlign:"center", padding:40, color:C.textMut }}>No materials found</div>}
//             </div>
//           </div>
//         )}

//         {activeTab==="requests" && (
//           <div>
//             <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Material Requests</h1>
//             {requests.length===0 ? (
//               <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}><div style={{ fontSize:44, marginBottom:10 }}>📭</div><div style={{ fontWeight:600 }}>No requests yet</div></div>
//             ) : (
//               <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
//                 {requests.map((r, i) => {
//                   const cat = CATEGORIES[r.category];
//                   const badge = getStatusBadge(r.status);
//                   return (
//                     <div key={r.id} style={{ background:C.surface, border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`, borderRadius:14, padding:"18px 22px", boxShadow:C.shadow, animation:`cardIn 0.35s ease ${i*0.05}s both` }}>
//                       <div style={{ display:"flex", gap:14, alignItems:"flex-start", flexWrap:"wrap" }}>
//                         <div style={{ width:42, height:42, borderRadius:"50%", background:"#fffbeb", border:"1.5px solid #fcd34d", display:"flex", alignItems:"center", justifyContent:"center", color:C.amberDim, fontWeight:800, fontSize:13, flexShrink:0 }}>??</div>
//                         <div style={{ flex:1, minWidth:200 }}>
//                           <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, flexWrap:"wrap" }}>
//                             <span style={{ fontWeight:800, fontSize:14 }}>{r.title}</span>
//                             {cat && <span style={{ background:cat.bg, color:cat.color, borderRadius:6, padding:"2px 8px", fontSize:11, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {r.sub}</span>}
//                           </div>
//                           <div style={{ fontSize:12, color:C.textSec, marginBottom:6 }}>By <strong>{r.studentName}</strong> · {r.date}</div>
//                           <div style={{ fontSize:12, color:C.textMut, fontStyle:"italic", background:C.elevated, padding:"8px 12px", borderRadius:9, borderLeft:"3px solid #fcd34d" }}>"{r.reason}"</div>
//                         </div>
//                         <div style={{ textAlign:"right", flexShrink:0 }}>
//                           {r.status==="pending" ? (
//                             <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
//                               <button onClick={() => approveRequest(r, true)} style={{ background:"#f0fdf4", color:"#166534", border:"1.5px solid #86efac", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>✅ Approve for student</button>
//                               <button onClick={() => approveRequest(r, false)} style={{ background:"#fffbeb", color:"#92400e", border:"1.5px solid #fcd34d", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>🌐 Approve for all</button>
//                               <button onClick={() => markAddingSoon(r.id)} style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", color:"#1e40af", border:"1.5px solid #93c5fd", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>📅 Adding Soon</button>
//                             </div>
//                           ) : (
//                             <div style={{ display:"inline-block", borderRadius:9, padding:"7px 14px", fontSize:12, fontWeight:700, background:badge.bg, color:badge.color, border:`1.5px solid ${badge.border}` }}>{badge.text}</div>
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

//         {activeTab==="students" && (
//           <div>
//             <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Student Management</h1>
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
//               {students.map((s, i) => (
//                 <div key={s.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"20px 22px", animation:`cardIn 0.35s ease ${i*0.07}s both`, boxShadow:C.shadow, transition:"all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor=C.amber; e.currentTarget.style.transform="translateY(-3px)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="translateY(0)"; }}>
//                   <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
//                     <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"1.5px solid #fcd34d", display:"flex", alignItems:"center", justifyContent:"center", color:C.amberDim, fontWeight:800, fontSize:14, flexShrink:0 }}>{s.avatar}</div>
//                     <div><div style={{ fontWeight:800, fontSize:14 }}>{s.name}</div><div style={{ fontSize:12, color:C.textSec }}>{s.email}</div></div>
//                   </div>
//                   <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
//                     {[["✅",s.completed,"Completed"],["📚",materials.filter(m=>m.studentId===s.id).length,"Personal"]].map(([icon,val,lbl]) => (
//                       <div key={lbl} style={{ background:C.elevated, borderRadius:10, padding:"10px 0", textAlign:"center" }}>
//                         <div style={{ fontSize:16, marginBottom:2 }}>{icon}</div>
//                         <div style={{ fontSize:18, fontWeight:900, color:C.amber }}>{val}</div>
//                         <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{lbl}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab==="categories" && (
//           <div>
//             <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Category Management</h1>
//             <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
//               {Object.entries(CATEGORIES).map(([key, cat]) => (
//                 <div key={key} style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:C.shadow }}>
//                   <div style={{ background:cat.gradient, borderBottom:`1px solid ${cat.border}`, padding:"18px 20px", display:"flex", alignItems:"center", gap:10 }}>
//                     <span style={{ fontSize:26 }}>{cat.icon}</span>
//                     <div><div style={{ color:cat.color, fontWeight:800, fontSize:14 }}>{cat.label}</div><div style={{ color:C.textSec, fontSize:12 }}>{materials.filter(m=>m.category===key).length} materials</div></div>
//                   </div>
//                   <div style={{ padding:16 }}>
//                     {key==="btech" ? (
//                       <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
//                         {BTECH_DEPARTMENTS.slice(0,8).map(d => (
//                           <span key={d.id} style={{ background:d.bg, color:d.color, borderRadius:7, padding:"4px 9px", fontSize:11, border:`1px solid ${d.border}`, fontWeight:700 }}>{d.icon} {d.short}</span>
//                         ))}
//                         <span style={{ background:C.elevated, color:C.textMut, borderRadius:7, padding:"4px 9px", fontSize:11, fontWeight:600 }}>+{BTECH_DEPARTMENTS.length-8} more</span>
//                       </div>
//                     ) : key==="government" ? (
//                       <div>
//                         <div style={{ fontSize:11, fontWeight:800, color:C.textMut, marginBottom:8, textTransform:"uppercase" }}>Structure</div>
//                         <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
//                           <div style={{ background:"#e0f2fe", border:"1px solid #7dd3fc", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#0369a1" }}>🏛️ Central: {materials.filter(m=>m.govtType==="central").length} materials</div>
//                           <div style={{ background:"#fee2e2", border:"1px solid #fca5a5", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#dc2626" }}>🌊 Andhra Pradesh: {materials.filter(m=>m.stateId==="ap").length} materials</div>
//                           <div style={{ background:"#ede9fe", border:"1px solid #c4b5fd", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#7c3aed" }}>🌺 Telangana: {materials.filter(m=>m.stateId==="telangana").length} materials</div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
//                         {(CATEGORY_SUBS[key]||[]).map(s => (
//                           <div key={s} style={{ position:"relative" }}>
//                             <span style={{ background:C.elevated, color:C.textSec, borderRadius:7, padding:"5px 10px", fontSize:12, border:`1px solid ${C.border}`, fontWeight:600, display:"inline-flex", alignItems:"center", gap:4 }}>
//                               {s}
//                               {key==="higher" && HIGHER_INDIA_ABROAD[s] && (
//                                 <span style={{ background:"rgba(99,102,241,0.1)", color:"#6366f1", borderRadius:4, padding:"1px 5px", fontSize:9, fontWeight:800 }}>{HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️":"🌐"}</span>
//                               )}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add/Edit Modal */}
//       {showAddModal && <AddMaterialModal item={editItem} students={students} onClose={() => { setShowAdd(false); setEditItem(null); }} onSave={handleSave}/>}
//       {showBulkImport && <BulkImportModal onClose={() => setShowBulkImport(false)} onImport={handleBulkImport} toast={toast}/>}
//       {deleteConfirm && (
//         <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, backdropFilter:"blur(4px)" }}>
//           <div style={{ background:C.surface, borderRadius:18, padding:30, maxWidth:340, width:"90%", border:"1.5px solid #fca5a5", textAlign:"center", boxShadow:C.shadowLg, animation:"cardIn 0.3s ease" }}>
//             <div style={{ fontSize:38, marginBottom:10 }}>⚠️</div>
//             <h3 style={{ fontWeight:800, marginBottom:8 }}>Delete Material?</h3>
//             <p style={{ color:C.textSec, fontSize:13, marginBottom:22 }}>This action cannot be undone.</p>
//             <div style={{ display:"flex", gap:10 }}>
//               <button onClick={() => setDelConf(null)} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
//               <button onClick={() => handleDelete(deleteConfirm)} style={{ flex:1, background:"#ef4444", color:"#fff", border:"none", borderRadius:10, padding:12, cursor:"pointer", fontWeight:800, fontFamily:"inherit" }}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── ADD MATERIAL MODAL ───────────────────────────────────────────────────────
// function AddMaterialModal({ item, students, onClose, onSave }) {
//   const [form, setForm] = useState({
//     title:item?.title||"", category:item?.category||"private", sub:item?.sub||"IT", type:item?.type||"free",
//     pages:item?.pages||"", topics:item?.topics||"", emoji:item?.emoji||"📄",
//     uploadType:item?.uploadType||"", fileLink:item?.fileLink||"", studentId:item?.studentId||"",
//     indiaOrAbroad:item?.indiaOrAbroad||"", govtType:item?.govtType||"", stateId:item?.stateId||"",
//     deptId:item?.deptId||"", tags:item?.tags?.join(",")||""
//   });
//   const set = (k, v) => setForm(p => ({ ...p, [k]:v }));
//   const EMOJIS = ["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐","🌊","🌺","💻","🖥️","📡","⚡","⚙️","🏗️","🧪","✈️","🚗","🧬"];

//   return (
//     <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)", overflowY:"auto" }}>
//       <div style={{ background:C.surface, borderRadius:20, maxWidth:560, width:"100%", boxShadow:C.shadowLg, maxHeight:"95vh", overflowY:"auto", animation:"cardIn 0.3s ease", margin:"auto" }}>
//         <div style={{ padding:"20px 24px", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <h2 style={{ margin:0, color:C.amber, fontSize:16, fontWeight:900 }}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2>
//           <button onClick={onClose} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:9, padding:"6px 11px", cursor:"pointer" }}>✕</button>
//         </div>
//         <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:14 }}>
//           {/* Title */}
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Title *</label><input value={form.title} onChange={e => set("title",e.target.value)} placeholder="Material title" style={{ width:"100%", padding:"10px 13px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>

//           {/* Category & Type */}
//           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e => { set("category",e.target.value); set("sub",CATEGORY_SUBS[e.target.value]?.[0]||""); set("govtType",""); set("stateId",""); set("deptId",""); set("indiaOrAbroad",""); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}</select></div>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Type</label><select value={form.type} onChange={e => set("type",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}><option value="free">🆓 Free</option><option value="premium">✨ Premium</option></select></div>
//           </div>

//           {/* B.Tech dept */}
//           {form.category==="btech" && (
//             <div style={{ background:"linear-gradient(135deg,#fce7f3,#fbcfe8)", border:"1.5px solid rgba(236,72,153,0.3)", borderRadius:12, padding:"14px 16px" }}>
//               <label style={{ fontSize:11, fontWeight:800, color:"#be185d", display:"block", marginBottom:8, textTransform:"uppercase" }}>🔬 B.Tech Department</label>
//               <select value={form.deptId} onChange={e => { set("deptId",e.target.value); const dept=BTECH_DEPARTMENTS.find(d=>d.id===e.target.value); if(dept) set("sub",dept.short); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid rgba(236,72,153,0.3)", background:"rgba(255,255,255,0.8)", color:"#be185d", fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
//                 <option value="">Select Department</option>
//                 {BTECH_DEPARTMENTS.map(d => <option key={d.id} value={d.id}>{d.icon} {d.name} ({d.short})</option>)}
//               </select>
//             </div>
//           )}

//           {/* Govt options */}
//           {form.category==="government" && (
//             <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:12, padding:"14px 16px" }}>
//               <label style={{ fontSize:11, fontWeight:800, color:"#065f46", display:"block", marginBottom:8, textTransform:"uppercase" }}>🏛️ Government Type</label>
//               <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
//                 <div>
//                   <select value={form.govtType} onChange={e => { set("govtType",e.target.value); if(e.target.value!=="state") set("stateId",""); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid #a7f3d0", background:"rgba(255,255,255,0.8)", color:"#065f46", fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
//                     <option value="">Select type</option>
//                     <option value="central">🏛️ Central Govt</option>
//                     <option value="state">🗺️ State Govt</option>
//                   </select>
//                 </div>
//                 {form.govtType==="state" && (
//                   <div>
//                     <select value={form.stateId} onChange={e => set("stateId",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid #a7f3d0", background:"rgba(255,255,255,0.8)", color:"#065f46", fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
//                       <option value="">Select state</option>
//                       <option value="ap">🌊 Andhra Pradesh</option>
//                       <option value="telangana">🌺 Telangana</option>
//                       <option value="other">🗾 Other States</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Higher education destination */}
//           {form.category==="higher" && (
//             <div>
//               <label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>🌍 India / Abroad</label>
//               <select value={form.indiaOrAbroad} onChange={e => set("indiaOrAbroad",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
//                 <option value="">Not specified</option>
//                 <option value="India">🇮🇳 India</option>
//                 <option value="Abroad">✈️ Abroad</option>
//                 <option value="Both">🌐 Both</option>
//               </select>
//             </div>
//           )}

//           {/* Sub + Pages + Topics */}
//           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Sub</label><input value={form.sub} onChange={e => set("sub",e.target.value)} placeholder="Sub-category" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:12, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Pages</label><input value={form.pages} onChange={e => set("pages",e.target.value)} type="number" placeholder="300" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
//             <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Topics</label><input value={form.topics} onChange={e => set("topics",e.target.value)} type="number" placeholder="10" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
//           </div>

//           {/* Tags */}
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Tags (comma-separated)</label><input value={form.tags} onChange={e => set("tags",e.target.value)} placeholder="java,oop,backend" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>

//           {/* Emoji */}
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:8, textTransform:"uppercase" }}>Icon</label><div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>{EMOJIS.map(e => (<button key={e} onClick={() => set("emoji",e)} style={{ width:38, height:38, fontSize:16, borderRadius:9, border:`2px solid ${form.emoji===e?C.amber:C.border}`, background:form.emoji===e?"#fffbeb":C.elevated, cursor:"pointer" }}>{e}</button>))}</div></div>

//           {/* Assign */}
//           <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Assign to Student</label><select value={form.studentId} onChange={e => set("studentId",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}><option value="">All Students (Public)</option>{students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>

//           <div style={{ display:"flex", gap:10 }}>
//             <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
//             <button onClick={() => onSave({ ...form, pages:parseInt(form.pages)||100, topics:parseInt(form.topics)||5, tags:form.tags?form.tags.split(",").map(t=>t.trim()).filter(Boolean):[] })} style={{ flex:2, background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:12, cursor:"pointer", fontWeight:800, fontFamily:"inherit", fontSize:14 }}>{item?"💾 Update":"✅ Add Material"}</button>
//           </div>
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

//   if (screen==="student") return <StudentDashboard onBack={() => setScreen("home")}/>;
//   if (screen==="admin")   return <AdminDashboard   onBack={() => setScreen("home")}/>;

//   return (
//     <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 30%,#fef3c7 70%,#fff7ed 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Nunito',sans-serif", position:"relative", overflow:"hidden", padding:16 }}>
//       <style>{GLOBAL_CSS}</style>
//       {/* Orbs */}
//       <div style={{ position:"fixed", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)", top:"-10%", left:"-5%", animation:"orbPulse 6s ease-in-out infinite", pointerEvents:"none" }}/>
//       <div style={{ position:"fixed", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)", bottom:"0%", right:"-5%", animation:"orbPulse 6s ease-in-out infinite 2s", pointerEvents:"none" }}/>

//       <div style={{ textAlign:"center", zIndex:1, maxWidth:780, width:"100%", opacity:animIn?1:0, transform:animIn?"scale(1)":"scale(0.94)", transition:"all 0.6s cubic-bezier(.4,0,.2,1)" }}>
//         <div style={{ fontSize:76, marginBottom:14, animation:"float 3.5s ease-in-out infinite", filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))" }}>📚</div>
//         <div style={{ fontSize:11, letterSpacing:5, color:C.amberDim, marginBottom:10, textTransform:"uppercase", fontWeight:800 }}>One Year Series</div>
//         <h1 style={{ fontSize:48, fontWeight:900, color:C.textPri, margin:"0 0 8px", letterSpacing:-2, lineHeight:1.1 }}>
//           <span style={{ color:C.amber }}>OYS</span> Platform
//         </h1>
//         <p style={{ color:C.textSec, fontSize:16, marginBottom:44, maxWidth:480, margin:"0 auto 44px", lineHeight:1.6, fontWeight:600 }}>Your complete digital learning hub — study materials, mock tests, crash courses, career guidance & more</p>
//         <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:40 }}>
//           <button onClick={() => setScreen("student")} style={{ background:"linear-gradient(135deg,#f59e0b,#fbbf24)", color:"#fff", border:"none", borderRadius:16, padding:"16px 40px", fontSize:15, fontWeight:900, cursor:"pointer", boxShadow:"0 10px 36px rgba(245,158,11,0.4)", transition:"all 0.25s", fontFamily:"inherit" }} onMouseEnter={e => { e.target.style.transform="translateY(-4px) scale(1.03)"; e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)"; }} onMouseLeave={e => { e.target.style.transform="translateY(0) scale(1)"; e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)"; }}>🎓 Student Dashboard</button>
//           <button onClick={() => setScreen("admin")} style={{ background:"#fff", color:C.textPri, border:"1.5px solid #e2e8f0", borderRadius:16, padding:"16px 40px", fontSize:15, fontWeight:900, cursor:"pointer", boxShadow:"0 8px 28px rgba(15,23,42,0.1)", transition:"all 0.25s", fontFamily:"inherit" }} onMouseEnter={e => { e.target.style.transform="translateY(-4px)"; e.target.style.borderColor=C.amber; e.target.style.color=C.amber; }} onMouseLeave={e => { e.target.style.transform="translateY(0)"; e.target.style.borderColor="#e2e8f0"; e.target.style.color=C.textPri; }}>⚙️ Admin Panel</button>
//         </div>

//         {/* Feature pills */}
//         <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
//           {[{icon:"💻",label:"B.Tech 20 Depts"},{icon:"🏛️",label:"Central Govt"},{icon:"🌊",label:"AP State"},{icon:"🌺",label:"Telangana"},{icon:"📥",label:"CSV Import"},{icon:"🎓",label:"Higher Education"},{icon:"📄",label:"Resume Maker"},{icon:"⚡",label:"Crash Courses"}].map((f, i) => (
//             <div key={i} style={{ display:"flex", alignItems:"center", gap:5, color:C.textSec, fontSize:12, fontWeight:700, background:"rgba(255,255,255,0.7)", borderRadius:20, padding:"5px 13px", border:"1px solid rgba(255,255,255,0.9)", backdropFilter:"blur(8px)", boxShadow:"0 2px 8px rgba(15,23,42,0.06)", animation:`cardIn 0.5s ease ${i*0.06}s both` }}>
//               <span style={{ fontSize:14 }}>{f.icon}</span> {f.label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect, useRef, useCallback } from "react";

// ─── PALETTE ──────────────────────────────────────────────────────────────────
const C = {
  bg:"#f0f4f8",surface:"#ffffff",elevated:"#f8fafc",border:"#e2e8f0",borderHi:"#cbd5e1",
  amber:"#f59e0b",amberHi:"#fbbf24",amberDim:"#d97706",amberGlow:"rgba(245,158,11,0.12)",
  sage:"#10b981",sageLt:"#34d399",sageDim:"#059669",sageGlow:"rgba(16,185,129,0.12)",
  rose:"#ef4444",roseLt:"#f87171",roseGlow:"rgba(239,68,68,0.10)",
  indigo:"#6366f1",indigoLt:"#818cf8",indigoGlow:"rgba(99,102,241,0.12)",
  blue:"#3b82f6",blueGlow:"rgba(59,130,246,0.12)",
  textPri:"#0f172a",textSec:"#475569",textMut:"#94a3b8",
  shadow:"0 4px 24px rgba(15,23,42,0.08)",shadowLg:"0 12px 48px rgba(15,23,42,0.14)",
};

// ─── ENGINEERING DEPARTMENTS (sub of Private) ─────────────────────────────────
const ENG_DEPARTMENTS = [
  { id:"cse", name:"Computer Science Engineering", short:"CSE", icon:"💻", color:"#6366f1", bg:"rgba(99,102,241,0.08)", border:"rgba(99,102,241,0.2)" },
  { id:"it", name:"Information Technology", short:"IT", icon:"🖥️", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.2)" },
  { id:"ece", name:"Electronics & Communication", short:"ECE", icon:"📡", color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", border:"rgba(139,92,246,0.2)" },
  { id:"eee", name:"Electrical & Electronics", short:"EEE", icon:"⚡", color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.2)" },
  { id:"mech", name:"Mechanical Engineering", short:"MECH", icon:"⚙️", color:"#64748b", bg:"rgba(100,116,139,0.08)", border:"rgba(100,116,139,0.2)" },
  { id:"civil", name:"Civil Engineering", short:"CIVIL", icon:"🏗️", color:"#92400e", bg:"rgba(146,64,14,0.08)", border:"rgba(146,64,14,0.2)" },
  { id:"chem", name:"Chemical Engineering", short:"CHEM", icon:"🧪", color:"#ef4444", bg:"rgba(239,68,68,0.08)", border:"rgba(239,68,68,0.2)" },
  { id:"aero", name:"Aeronautical / Aerospace", short:"AERO", icon:"✈️", color:"#06b6d4", bg:"rgba(6,182,212,0.08)", border:"rgba(6,182,212,0.2)" },
  { id:"auto", name:"Automobile Engineering", short:"AUTO", icon:"🚗", color:"#10b981", bg:"rgba(16,185,129,0.08)", border:"rgba(16,185,129,0.2)" },
  { id:"bio", name:"Biotechnology Engineering", short:"BIO", icon:"🧬", color:"#ec4899", bg:"rgba(236,72,153,0.08)", border:"rgba(236,72,153,0.2)" },
  { id:"agri", name:"Agricultural Engineering", short:"AGRI", icon:"🌾", color:"#84cc16", bg:"rgba(132,204,22,0.08)", border:"rgba(132,204,22,0.2)" },
  { id:"mining", name:"Mining Engineering", short:"MINING", icon:"⛏️", color:"#78716c", bg:"rgba(120,113,108,0.08)", border:"rgba(120,113,108,0.2)" },
  { id:"petro", name:"Petroleum Engineering", short:"PETRO", icon:"🛢️", color:"#854d0e", bg:"rgba(133,77,14,0.08)", border:"rgba(133,77,14,0.2)" },
  { id:"marine", name:"Marine Engineering", short:"MARINE", icon:"⚓", color:"#0369a1", bg:"rgba(3,105,161,0.08)", border:"rgba(3,105,161,0.2)" },
  { id:"metal", name:"Metallurgical Engineering", short:"METAL", icon:"🔩", color:"#475569", bg:"rgba(71,85,105,0.08)", border:"rgba(71,85,105,0.2)" },
  { id:"industrial", name:"Industrial Engineering", short:"INDUS", icon:"🏭", color:"#7c3aed", bg:"rgba(124,58,237,0.08)", border:"rgba(124,58,237,0.2)" },
  { id:"prod", name:"Production Engineering", short:"PROD", icon:"🔧", color:"#0891b2", bg:"rgba(8,145,178,0.08)", border:"rgba(8,145,178,0.2)" },
  { id:"textile", name:"Textile Engineering", short:"TEXT", icon:"🧵", color:"#db2777", bg:"rgba(219,39,119,0.08)", border:"rgba(219,39,119,0.2)" },
  { id:"food", name:"Food Technology", short:"FOOD", icon:"🍎", color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.2)" },
  { id:"env", name:"Environmental Engineering", short:"ENV", icon:"🌿", color:"#15803d", bg:"rgba(21,128,61,0.08)", border:"rgba(21,128,61,0.2)" },
];

// ─── ENGINEERING MATERIALS (now under Private → Engineering) ─────────────────
const ENG_MATERIALS = {
  cse: [
    { id:1001, title:"Data Structures & Algorithms", emoji:"🌲", topics:15, pages:480, downloads:2100, type:"free", bookmarked:false, progress:30, tags:["dsa","algorithms","trees"],
      topicsList:[
        { id:1, title:"Introduction to DSA", pages:28, pdfLink:"https://example.com/dsa/intro.pdf", done:false },
        { id:2, title:"Arrays & Strings", pages:40, pdfLink:"https://example.com/dsa/arrays.pdf", done:false },
        { id:3, title:"Linked Lists", pages:38, pdfLink:"", done:false },
        { id:4, title:"Stacks & Queues", pages:32, pdfLink:"", done:false },
        { id:5, title:"Trees & BST", pages:55, pdfLink:"https://example.com/dsa/trees.pdf", done:false },
        { id:6, title:"Heaps & Priority Queue", pages:30, pdfLink:"", done:false },
        { id:7, title:"Graphs - BFS/DFS", pages:48, pdfLink:"", done:false },
        { id:8, title:"Hashing", pages:28, pdfLink:"", done:false },
        { id:9, title:"Sorting Algorithms", pages:42, pdfLink:"", done:false },
        { id:10, title:"Searching Algorithms", pages:25, pdfLink:"", done:false },
        { id:11, title:"Dynamic Programming", pages:60, pdfLink:"", done:false },
        { id:12, title:"Greedy Algorithms", pages:35, pdfLink:"", done:false },
        { id:13, title:"Backtracking", pages:30, pdfLink:"", done:false },
        { id:14, title:"Tries & Segment Trees", pages:32, pdfLink:"", done:false },
        { id:15, title:"Practice Problems", pages:57, pdfLink:"", done:false },
      ]
    },
    { id:1002, title:"Operating Systems", emoji:"🖥️", topics:12, pages:380, downloads:1800, type:"free", bookmarked:false, progress:0, tags:["os","kernel","processes"],
      topicsList:[
        { id:1, title:"Introduction to OS", pages:28, pdfLink:"", done:false },
        { id:2, title:"Process Management", pages:42, pdfLink:"", done:false },
        { id:3, title:"CPU Scheduling", pages:35, pdfLink:"", done:false },
        { id:4, title:"Memory Management", pages:40, pdfLink:"", done:false },
        { id:5, title:"Virtual Memory", pages:38, pdfLink:"", done:false },
        { id:6, title:"File Systems", pages:32, pdfLink:"", done:false },
        { id:7, title:"I/O Management", pages:28, pdfLink:"", done:false },
        { id:8, title:"Deadlocks", pages:30, pdfLink:"", done:false },
        { id:9, title:"Synchronization", pages:35, pdfLink:"", done:false },
        { id:10, title:"Security & Protection", pages:28, pdfLink:"", done:false },
        { id:11, title:"Linux Internals", pages:32, pdfLink:"", done:false },
        { id:12, title:"Case Studies", pages:12, pdfLink:"", done:false },
      ]
    },
    { id:1003, title:"Database Management Systems", emoji:"🗄️", topics:10, pages:320, downloads:2400, type:"free", bookmarked:false, progress:60, tags:["dbms","sql","normalization"],
      topicsList:[
        { id:1, title:"Introduction to DBMS", pages:22, pdfLink:"", done:false },
        { id:2, title:"ER Model & Relational Model", pages:38, pdfLink:"", done:false },
        { id:3, title:"SQL Fundamentals", pages:42, pdfLink:"", done:false },
        { id:4, title:"Advanced SQL", pages:35, pdfLink:"", done:false },
        { id:5, title:"Normalization", pages:30, pdfLink:"", done:false },
        { id:6, title:"Transactions & Concurrency", pages:38, pdfLink:"", done:false },
        { id:7, title:"Indexing & Hashing", pages:28, pdfLink:"", done:false },
        { id:8, title:"Query Processing", pages:32, pdfLink:"", done:false },
        { id:9, title:"NoSQL Databases", pages:40, pdfLink:"", done:false },
        { id:10, title:"Database Design Project", pages:15, pdfLink:"", done:false },
      ]
    },
    { id:1004, title:"Computer Networks", emoji:"🌐", topics:14, pages:420, downloads:1650, type:"premium", bookmarked:false, progress:0, tags:["networking","tcp","protocols"],
      topicsList:[
        { id:1, title:"Network Basics & Models", pages:28, pdfLink:"", done:false },
        { id:2, title:"Physical Layer", pages:30, pdfLink:"", done:false },
        { id:3, title:"Data Link Layer", pages:35, pdfLink:"", done:false },
        { id:4, title:"Network Layer", pages:38, pdfLink:"", done:false },
        { id:5, title:"IP Addressing & Subnetting", pages:32, pdfLink:"", done:false },
        { id:6, title:"Transport Layer (TCP/UDP)", pages:40, pdfLink:"", done:false },
        { id:7, title:"Application Layer", pages:30, pdfLink:"", done:false },
        { id:8, title:"HTTP & Web Protocols", pages:28, pdfLink:"", done:false },
        { id:9, title:"DNS & DHCP", pages:25, pdfLink:"", done:false },
        { id:10, title:"Routing Algorithms", pages:35, pdfLink:"", done:false },
        { id:11, title:"Network Security", pages:30, pdfLink:"", done:false },
        { id:12, title:"Wireless Networks", pages:28, pdfLink:"", done:false },
        { id:13, title:"Network Programming", pages:25, pdfLink:"", done:false },
        { id:14, title:"Practice & Numericals", pages:16, pdfLink:"", done:false },
      ]
    },
    { id:1005, title:"Software Engineering", emoji:"⚙️", topics:8, pages:280, downloads:1200, type:"free", bookmarked:false, progress:0, tags:["sdlc","agile","testing"],
      topicsList:[
        { id:1, title:"Software Process Models", pages:32, pdfLink:"", done:false },
        { id:2, title:"Requirements Engineering", pages:38, pdfLink:"", done:false },
        { id:3, title:"System Design", pages:40, pdfLink:"", done:false },
        { id:4, title:"Agile & Scrum", pages:35, pdfLink:"", done:false },
        { id:5, title:"Software Testing", pages:42, pdfLink:"", done:false },
        { id:6, title:"Project Management", pages:38, pdfLink:"", done:false },
        { id:7, title:"DevOps Basics", pages:30, pdfLink:"", done:false },
        { id:8, title:"Case Studies", pages:25, pdfLink:"", done:false },
      ]
    },
  ],
  it: [
    { id:2001, title:"Web Development Fundamentals", emoji:"🌐", topics:12, pages:350, downloads:3100, type:"free", bookmarked:false, progress:85, tags:["html","css","javascript"],
      topicsList:[
        { id:1, title:"HTML5 Basics", pages:25, pdfLink:"", done:false },
        { id:2, title:"CSS3 & Flexbox", pages:30, pdfLink:"", done:false },
        { id:3, title:"CSS Grid", pages:25, pdfLink:"", done:false },
        { id:4, title:"JavaScript Fundamentals", pages:40, pdfLink:"", done:false },
        { id:5, title:"DOM Manipulation", pages:28, pdfLink:"", done:false },
        { id:6, title:"ES6+ Features", pages:35, pdfLink:"", done:false },
        { id:7, title:"React Basics", pages:38, pdfLink:"", done:false },
        { id:8, title:"Node.js Intro", pages:32, pdfLink:"", done:false },
        { id:9, title:"REST APIs", pages:30, pdfLink:"", done:false },
        { id:10, title:"Databases for Web", pages:28, pdfLink:"", done:false },
        { id:11, title:"Deployment & Hosting", pages:22, pdfLink:"", done:false },
        { id:12, title:"Projects", pages:17, pdfLink:"", done:false },
      ]
    },
    { id:2002, title:"Cloud Computing", emoji:"☁️", topics:10, pages:300, downloads:1900, type:"premium", bookmarked:false, progress:0, tags:["aws","azure","gcp"],
      topicsList:[
        { id:1, title:"Cloud Fundamentals", pages:28, pdfLink:"", done:false },
        { id:2, title:"AWS Core Services", pages:35, pdfLink:"", done:false },
        { id:3, title:"Azure Basics", pages:32, pdfLink:"", done:false },
        { id:4, title:"GCP Overview", pages:28, pdfLink:"", done:false },
        { id:5, title:"Cloud Storage", pages:30, pdfLink:"", done:false },
        { id:6, title:"Compute Services", pages:32, pdfLink:"", done:false },
        { id:7, title:"Serverless Architecture", pages:28, pdfLink:"", done:false },
        { id:8, title:"DevOps on Cloud", pages:30, pdfLink:"", done:false },
        { id:9, title:"Cloud Security", pages:25, pdfLink:"", done:false },
        { id:10, title:"Cost Optimization", pages:32, pdfLink:"", done:false },
      ]
    },
    { id:2003, title:"Cybersecurity Essentials", emoji:"🔐", topics:11, pages:360, downloads:1400, type:"free", bookmarked:false, progress:0, tags:["security","cryptography","hacking"],
      topicsList:[
        { id:1, title:"Intro to Cybersecurity", pages:25, pdfLink:"", done:false },
        { id:2, title:"Cryptography Basics", pages:38, pdfLink:"", done:false },
        { id:3, title:"Network Security", pages:35, pdfLink:"", done:false },
        { id:4, title:"Web Application Security", pages:32, pdfLink:"", done:false },
        { id:5, title:"Ethical Hacking", pages:40, pdfLink:"", done:false },
        { id:6, title:"Penetration Testing", pages:35, pdfLink:"", done:false },
        { id:7, title:"Malware Analysis", pages:28, pdfLink:"", done:false },
        { id:8, title:"Incident Response", pages:30, pdfLink:"", done:false },
        { id:9, title:"Security Auditing", pages:28, pdfLink:"", done:false },
        { id:10, title:"Cloud Security", pages:32, pdfLink:"", done:false },
        { id:11, title:"Certifications Guide", pages:37, pdfLink:"", done:false },
      ]
    },
  ],
  ece: [
    { id:3001, title:"Digital Electronics", emoji:"📡", topics:13, pages:400, downloads:1600, type:"free", bookmarked:false, progress:40, tags:["logic gates","circuits","flip-flops"],
      topicsList:[
        { id:1, title:"Number Systems & Codes", pages:28, pdfLink:"", done:false },
        { id:2, title:"Logic Gates", pages:32, pdfLink:"", done:false },
        { id:3, title:"Boolean Algebra", pages:35, pdfLink:"", done:false },
        { id:4, title:"Combinational Circuits", pages:38, pdfLink:"", done:false },
        { id:5, title:"Multiplexers & Demultiplexers", pages:30, pdfLink:"", done:false },
        { id:6, title:"Encoders & Decoders", pages:28, pdfLink:"", done:false },
        { id:7, title:"Flip-Flops", pages:35, pdfLink:"", done:false },
        { id:8, title:"Registers & Counters", pages:32, pdfLink:"", done:false },
        { id:9, title:"Sequential Circuits", pages:38, pdfLink:"", done:false },
        { id:10, title:"Memory Devices", pages:28, pdfLink:"", done:false },
        { id:11, title:"A/D & D/A Converters", pages:32, pdfLink:"", done:false },
        { id:12, title:"PLDs & FPGAs", pages:30, pdfLink:"", done:false },
        { id:13, title:"Practice Problems", pages:34, pdfLink:"", done:false },
      ]
    },
    { id:3002, title:"Signals & Systems", emoji:"📶", topics:11, pages:350, downloads:1100, type:"free", bookmarked:false, progress:0, tags:["signals","fourier","laplace"],
      topicsList:[
        { id:1, title:"Introduction to Signals", pages:28, pdfLink:"", done:false },
        { id:2, title:"System Properties", pages:30, pdfLink:"", done:false },
        { id:3, title:"Fourier Series", pages:35, pdfLink:"", done:false },
        { id:4, title:"Fourier Transform", pages:38, pdfLink:"", done:false },
        { id:5, title:"Laplace Transform", pages:40, pdfLink:"", done:false },
        { id:6, title:"Z-Transform", pages:35, pdfLink:"", done:false },
        { id:7, title:"Sampling Theorem", pages:28, pdfLink:"", done:false },
        { id:8, title:"Convolution", pages:30, pdfLink:"", done:false },
        { id:9, title:"Filters", pages:35, pdfLink:"", done:false },
        { id:10, title:"DSP Basics", pages:32, pdfLink:"", done:false },
        { id:11, title:"Numericals & Problems", pages:19, pdfLink:"", done:false },
      ]
    },
    { id:3003, title:"VLSI Design", emoji:"🔬", topics:9, pages:290, downloads:850, type:"premium", bookmarked:false, progress:0, tags:["vlsi","cmos","layout"],
      topicsList:[
        { id:1, title:"MOS Transistors", pages:30, pdfLink:"", done:false },
        { id:2, title:"CMOS Logic Design", pages:35, pdfLink:"", done:false },
        { id:3, title:"Logic Gate Implementation", pages:32, pdfLink:"", done:false },
        { id:4, title:"Layout Design Rules", pages:28, pdfLink:"", done:false },
        { id:5, title:"Standard Cell Design", pages:30, pdfLink:"", done:false },
        { id:6, title:"Simulation & Verification", pages:35, pdfLink:"", done:false },
        { id:7, title:"FPGA Design", pages:32, pdfLink:"", done:false },
        { id:8, title:"Low Power Design", pages:28, pdfLink:"", done:false },
        { id:9, title:"Physical Design Flow", pages:40, pdfLink:"", done:false },
      ]
    },
  ],
  eee: [
    { id:4001, title:"Power Systems Engineering", emoji:"⚡", topics:14, pages:460, downloads:1300, type:"free", bookmarked:false, progress:0, tags:["power","transmission","generation"],
      topicsList:[
        { id:1, title:"Power System Basics", pages:28, pdfLink:"", done:false },
        { id:2, title:"Generation Systems", pages:35, pdfLink:"", done:false },
        { id:3, title:"Transmission Lines", pages:40, pdfLink:"", done:false },
        { id:4, title:"Distribution Systems", pages:32, pdfLink:"", done:false },
        { id:5, title:"Transformers", pages:38, pdfLink:"", done:false },
        { id:6, title:"Power Electronics", pages:35, pdfLink:"", done:false },
        { id:7, title:"Protection Systems", pages:30, pdfLink:"", done:false },
        { id:8, title:"Load Flow Analysis", pages:32, pdfLink:"", done:false },
        { id:9, title:"Fault Analysis", pages:35, pdfLink:"", done:false },
        { id:10, title:"Renewable Energy", pages:38, pdfLink:"", done:false },
        { id:11, title:"Smart Grid", pages:28, pdfLink:"", done:false },
        { id:12, title:"Electrical Machines", pages:32, pdfLink:"", done:false },
        { id:13, title:"Drives & Controls", pages:30, pdfLink:"", done:false },
        { id:14, title:"Numericals", pages:27, pdfLink:"", done:false },
      ]
    },
    { id:4002, title:"Control Systems", emoji:"🎛️", topics:10, pages:320, downloads:1100, type:"free", bookmarked:false, progress:0, tags:["control","pid","feedback"],
      topicsList:[
        { id:1, title:"Introduction to Control", pages:28, pdfLink:"", done:false },
        { id:2, title:"Transfer Functions", pages:35, pdfLink:"", done:false },
        { id:3, title:"Block Diagrams", pages:30, pdfLink:"", done:false },
        { id:4, title:"Signal Flow Graphs", pages:28, pdfLink:"", done:false },
        { id:5, title:"Time Domain Analysis", pages:38, pdfLink:"", done:false },
        { id:6, title:"Root Locus", pages:35, pdfLink:"", done:false },
        { id:7, title:"Frequency Domain Analysis", pages:32, pdfLink:"", done:false },
        { id:8, title:"PID Controllers", pages:30, pdfLink:"", done:false },
        { id:9, title:"State Space Analysis", pages:35, pdfLink:"", done:false },
        { id:10, title:"Digital Control", pages:29, pdfLink:"", done:false },
      ]
    },
  ],
  mech: [
    { id:5001, title:"Thermodynamics", emoji:"🌡️", topics:12, pages:400, downloads:1500, type:"free", bookmarked:false, progress:0, tags:["heat","entropy","cycles"],
      topicsList:[
        { id:1, title:"Zeroth & First Law", pages:30, pdfLink:"", done:false },
        { id:2, title:"Second Law & Entropy", pages:38, pdfLink:"", done:false },
        { id:3, title:"Properties of Gases", pages:32, pdfLink:"", done:false },
        { id:4, title:"Steam & Vapour", pages:35, pdfLink:"", done:false },
        { id:5, title:"Power Cycles", pages:40, pdfLink:"", done:false },
        { id:6, title:"Refrigeration Cycles", pages:35, pdfLink:"", done:false },
        { id:7, title:"Heat Transfer", pages:38, pdfLink:"", done:false },
        { id:8, title:"Combustion", pages:28, pdfLink:"", done:false },
        { id:9, title:"Compressors & Turbines", pages:32, pdfLink:"", done:false },
        { id:10, title:"I.C. Engines", pages:35, pdfLink:"", done:false },
        { id:11, title:"Boilers", pages:30, pdfLink:"", done:false },
        { id:12, title:"Numericals", pages:27, pdfLink:"", done:false },
      ]
    },
    { id:5002, title:"Fluid Mechanics", emoji:"💧", topics:11, pages:370, downloads:1200, type:"free", bookmarked:false, progress:0, tags:["fluid","bernoulli","flow"],
      topicsList:[
        { id:1, title:"Fluid Properties", pages:28, pdfLink:"", done:false },
        { id:2, title:"Fluid Statics", pages:32, pdfLink:"", done:false },
        { id:3, title:"Kinematics of Flow", pages:35, pdfLink:"", done:false },
        { id:4, title:"Bernoulli's Equation", pages:30, pdfLink:"", done:false },
        { id:5, title:"Flow Measurements", pages:28, pdfLink:"", done:false },
        { id:6, title:"Pipe Flow", pages:35, pdfLink:"", done:false },
        { id:7, title:"Turbulent Flow", pages:32, pdfLink:"", done:false },
        { id:8, title:"Boundary Layer", pages:35, pdfLink:"", done:false },
        { id:9, title:"Pumps & Turbines", pages:38, pdfLink:"", done:false },
        { id:10, title:"Dimensional Analysis", pages:28, pdfLink:"", done:false },
        { id:11, title:"Compressible Flow", pages:29, pdfLink:"", done:false },
      ]
    },
  ],
  civil: [
    { id:6001, title:"Structural Analysis", emoji:"🏗️", topics:13, pages:440, downloads:1400, type:"free", bookmarked:false, progress:0, tags:["structures","beams","loads"],
      topicsList:[
        { id:1, title:"Structural Systems", pages:28, pdfLink:"", done:false },
        { id:2, title:"Determinate Structures", pages:35, pdfLink:"", done:false },
        { id:3, title:"Bending Moment & Shear Force", pages:40, pdfLink:"", done:false },
        { id:4, title:"Deflections", pages:35, pdfLink:"", done:false },
        { id:5, title:"Influence Lines", pages:32, pdfLink:"", done:false },
        { id:6, title:"Indeterminate Structures", pages:38, pdfLink:"", done:false },
        { id:7, title:"Slope Deflection Method", pages:35, pdfLink:"", done:false },
        { id:8, title:"Moment Distribution", pages:32, pdfLink:"", done:false },
        { id:9, title:"Matrix Methods", pages:35, pdfLink:"", done:false },
        { id:10, title:"Plastic Analysis", pages:28, pdfLink:"", done:false },
        { id:11, title:"Arches & Cables", pages:30, pdfLink:"", done:false },
        { id:12, title:"Trusses", pages:32, pdfLink:"", done:false },
        { id:13, title:"Numericals", pages:20, pdfLink:"", done:false },
      ]
    },
    { id:6002, title:"Soil Mechanics", emoji:"🌍", topics:10, pages:330, downloads:1100, type:"free", bookmarked:false, progress:0, tags:["soil","geotechnical","foundation"],
      topicsList:[
        { id:1, title:"Soil Classification", pages:28, pdfLink:"", done:false },
        { id:2, title:"Index Properties", pages:32, pdfLink:"", done:false },
        { id:3, title:"Permeability", pages:30, pdfLink:"", done:false },
        { id:4, title:"Effective Stress", pages:35, pdfLink:"", done:false },
        { id:5, title:"Consolidation", pages:38, pdfLink:"", done:false },
        { id:6, title:"Shear Strength", pages:35, pdfLink:"", done:false },
        { id:7, title:"Earth Pressure", pages:30, pdfLink:"", done:false },
        { id:8, title:"Slope Stability", pages:28, pdfLink:"", done:false },
        { id:9, title:"Foundation Design", pages:35, pdfLink:"", done:false },
        { id:10, title:"Ground Improvement", pages:39, pdfLink:"", done:false },
      ]
    },
  ],
};
// Add basic structure for remaining depts
["chem","aero","auto","bio","agri","mining","petro","marine","metal","industrial","prod","textile","food","env"].forEach((id, idx) => {
  const dept = ENG_DEPARTMENTS.find(d => d.id === id);
  if (!ENG_MATERIALS[id]) {
    ENG_MATERIALS[id] = [
      { id: 9000 + idx*10, title:`${dept.name} Fundamentals`, emoji: dept.icon, topics:10, pages:300, downloads:500, type:"free", bookmarked:false, progress:0, tags:[dept.short.toLowerCase(),"engineering","fundamentals"],
        topicsList: Array.from({length:10}, (_,i) => ({ id:i+1, title:`Chapter ${i+1}`, pages:30, pdfLink:"", done:false }))
      }
    ];
  }
});

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATEGORIES = {
  private:{ label:"Private Sector", icon:"🏢", color:"#f59e0b", bg:"rgba(245,158,11,0.08)", border:"rgba(245,158,11,0.25)", gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
  government:{ label:"Government Exams", icon:"🏛️", color:"#10b981", bg:"rgba(16,185,129,0.08)", border:"rgba(16,185,129,0.25)", gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
  higher:{ label:"Higher Education", icon:"🎓", color:"#6366f1", bg:"rgba(99,102,241,0.08)", border:"rgba(99,102,241,0.25)", gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
};

const PRIVATE_SUBS = [
  { id:"engineering", label:"Engineering", icon:"🔬", color:"#ec4899", bg:"rgba(236,72,153,0.08)", border:"rgba(236,72,153,0.25)" },
  { id:"banking", label:"Banking", icon:"🏦", color:"#3b82f6", bg:"rgba(59,130,246,0.08)", border:"rgba(59,130,246,0.25)" },
  { id:"healthcare", label:"Healthcare", icon:"🏥", color:"#10b981", bg:"rgba(16,185,129,0.08)", border:"rgba(16,185,129,0.25)" },
  { id:"marketing", label:"Marketing", icon:"📊", color:"#f97316", bg:"rgba(249,115,22,0.08)", border:"rgba(249,115,22,0.25)" },
  { id:"finance", label:"Finance", icon:"💰", color:"#6366f1", bg:"rgba(99,102,241,0.08)", border:"rgba(99,102,241,0.25)" },
  { id:"consulting", label:"Consulting", icon:"🧭", color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", border:"rgba(139,92,246,0.25)" },
  { id:"it", label:"IT / Software", icon:"💻", color:"#0891b2", bg:"rgba(8,145,178,0.08)", border:"rgba(8,145,178,0.25)" },
];

// ─── GOVERNMENT SECTOR STRUCTURE ─────────────────────────────────────────────
const GOVT_STRUCTURE = {
  central: {
    label:"Central Government", icon:"🏛️", color:"#0369a1",
    exams:["UPSC IAS","SSC CGL","SSC CHSL","IBPS PO","IBPS Clerk","RBI Grade B","Railways RRB","Defence NDA","NDA CDS","ISRO","DRDO","Staff Selection"]
  },
  state: {
    label:"State Government", icon:"🗺️", color:"#059669",
    states:{
      ap:{ label:"Andhra Pradesh", icon:"🌊", color:"#dc2626", exams:["APPSC Group 1","APPSC Group 2","APPSC Group 3","AP Panchayat Secretary","AP Police SI","AP TET","APECET","APPGECET","AP ICET","AP EAMCET"] },
      telangana:{ label:"Telangana", icon:"🌺", color:"#7c3aed", exams:["TSPSC Group 1","TSPSC Group 2","TSPSC Group 3","TS Panchayat Secretary","Telangana Police SI","TS TET","TSICET","TSEAMCET","TS PGECET","TSGENCO"] },
      other:{ label:"Other States", icon:"🗾", color:"#0891b2", exams:["Karnataka PSC","Tamil Nadu PSC","Maharashtra PSC","Kerala PSC","Gujarat PSC","Rajasthan PSC","UP PSC","Bihar PSC","MP PSC","West Bengal PSC"] }
    }
  }
};

const HIGHER_SUBS = ["GATE","CAT/MBA","GRE/GMAT","Study Abroad","Research","PhD"];
const HIGHER_INDIA_ABROAD = { "GATE":"India","CAT/MBA":"India","GRE/GMAT":"Abroad","Study Abroad":"Abroad","Research":"Both","PhD":"Both" };

const EPREP_LINKS = { 1001:"https://www.geeksforgeeks.org/data-structure-gq/", 1002:"https://www.javatpoint.com/os-tutorial", 1003:"https://www.javatpoint.com/dbms-tutorial", 1004:"https://www.javatpoint.com/computer-network-tutorial", 2001:"https://www.w3schools.com/", 1:"https://www.javatpoint.com/java-quiz", 2:"https://www.bankersadda.com/quiz", 4:"https://www.drishtiias.com/quiz", 5:"https://www.sscadda.com/quiz" };
const CRASH_COURSES = { 1001:{ title:"DSA Crash Course", url:"https://www.youtube.com/results?search_query=dsa+crash+course", color:"#6366f1" }, 2001:{ title:"Web Dev Crash", url:"https://www.youtube.com/results?search_query=web+development+crash+course", color:"#3b82f6" }, 1:{ title:"Java Crash Course", url:"https://www.youtube.com/results?search_query=java+crash+course", color:"#ef4444" }, 4:{ title:"UPSC History Crash", url:"https://www.youtube.com/results?search_query=upsc+history+crash+course", color:"#6366f1" } };

// ─── INITIAL MATERIALS (non-engineering private + govt + higher) ───────────────
const ALL_MATERIALS = [
  { id:1, title:"Java Programming", category:"private", sub:"it", type:"free", emoji:"☕", topics:12, progress:70, pages:340, downloads:1240, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, engDeptId:null, tags:["java","oop","backend"],
    topicsList:[
      { id:1, title:"Introduction to Java", pages:28, pdfLink:"https://example.com/java/intro.pdf", done:true },
      { id:2, title:"OOP Concepts", pages:45, pdfLink:"", done:true },
      { id:3, title:"Classes & Objects", pages:35, pdfLink:"", done:true },
      { id:4, title:"Inheritance & Polymorphism", pages:52, pdfLink:"", done:false },
      { id:5, title:"Exception Handling", pages:30, pdfLink:"", done:false },
      { id:6, title:"Collections Framework", pages:60, pdfLink:"", done:false },
      { id:7, title:"Multithreading", pages:40, pdfLink:"", done:false },
      { id:8, title:"File I/O", pages:25, pdfLink:"", done:false },
      { id:9, title:"JDBC & Databases", pages:38, pdfLink:"", done:false },
      { id:10, title:"Spring Boot Basics", pages:55, pdfLink:"", done:false },
      { id:11, title:"REST APIs with Java", pages:48, pdfLink:"", done:false },
      { id:12, title:"Java 17+ Features", pages:32, pdfLink:"", done:false },
    ]
  },
  { id:2, title:"Banking Fundamentals", category:"private", sub:"banking", type:"free", emoji:"🏦", topics:8, progress:50, pages:210, downloads:980, bookmarked:true, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, engDeptId:null, tags:["banking","finance"],
    topicsList:[
      { id:1, title:"Banking Basics", pages:22, pdfLink:"", done:true },
      { id:2, title:"RBI & Monetary Policy", pages:28, pdfLink:"", done:true },
      { id:3, title:"Credit & Loans", pages:25, pdfLink:"", done:true },
      { id:4, title:"Banking Products", pages:30, pdfLink:"", done:true },
      { id:5, title:"Digital Banking", pages:28, pdfLink:"", done:false },
      { id:6, title:"Risk Management", pages:25, pdfLink:"", done:false },
      { id:7, title:"Compliance & Regulation", pages:28, pdfLink:"", done:false },
      { id:8, title:"Case Studies", pages:24, pdfLink:"", done:false },
    ]
  },
  { id:4, title:"UPSC History Notes", category:"government", sub:"UPSC", type:"free", emoji:"📜", topics:20, progress:60, pages:600, downloads:3400, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, engDeptId:null, tags:["upsc","history"],
    topicsList: Array.from({length:20}, (_,i)=>({ id:i+1, title:`History Topic ${i+1}`, pages:30, pdfLink:"", done:i<12 }))
  },
  { id:5, title:"SSC Mathematics", category:"government", sub:"SSC", type:"free", emoji:"📐", topics:10, progress:0, pages:280, downloads:1800, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, engDeptId:null, tags:["ssc","math"],
    topicsList: Array.from({length:10}, (_,i)=>({ id:i+1, title:`Math Chapter ${i+1}`, pages:28, pdfLink:"", done:false }))
  },
  { id:6, title:"IBPS PO Guide", category:"government", sub:"Banking (Govt)", type:"premium", emoji:"🏧", topics:14, progress:0, pages:390, downloads:2200, bookmarked:true, uploadType:"link", fileLink:"https://ibps.in/study-material", indiaOrAbroad:null, govtType:"central", stateId:null, engDeptId:null, tags:["ibps","banking"],
    topicsList: Array.from({length:14}, (_,i)=>({ id:i+1, title:`IBPS Topic ${i+1}`, pages:28, pdfLink:"", done:false }))
  },
  { id:7, title:"CAT Verbal Ability", category:"higher", sub:"CAT/MBA", type:"premium", emoji:"📝", topics:9, progress:20, pages:240, downloads:760, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"India", govtType:null, stateId:null, engDeptId:null, tags:["cat","verbal"],
    topicsList: Array.from({length:9}, (_,i)=>({ id:i+1, title:`Verbal Topic ${i+1}`, pages:26, pdfLink:"", done:i<2 }))
  },
  { id:8, title:"GRE Vocabulary", category:"higher", sub:"GRE/GMAT", type:"free", emoji:"🔤", topics:6, progress:40, pages:180, downloads:540, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Abroad", govtType:null, stateId:null, engDeptId:null, tags:["gre","vocabulary"],
    topicsList: Array.from({length:6}, (_,i)=>({ id:i+1, title:`GRE Topic ${i+1}`, pages:30, pdfLink:"", done:i<2 }))
  },
  { id:9, title:"Agricultural Science", category:"government", sub:"State PSC", type:"free", emoji:"🌾", topics:11, progress:0, pages:320, downloads:890, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", engDeptId:null, tags:["agriculture","psc"],
    topicsList: Array.from({length:11}, (_,i)=>({ id:i+1, title:`Agri Topic ${i+1}`, pages:29, pdfLink:"", done:false }))
  },
  { id:10, title:"Python for Beginners", category:"private", sub:"it", type:"free", emoji:"🐍", topics:10, progress:85, pages:290, downloads:3100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, engDeptId:null, tags:["python","programming"],
    topicsList: Array.from({length:10}, (_,i)=>({ id:i+1, title:`Python Chapter ${i+1}`, pages:29, pdfLink:"", done:i<8 }))
  },
  { id:11, title:"APPSC Group 1 Guide", category:"government", sub:"State PSC", type:"free", emoji:"🌊", topics:18, progress:0, pages:550, downloads:1650, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", engDeptId:null, tags:["appsc","group1","ap"],
    topicsList: Array.from({length:18}, (_,i)=>({ id:i+1, title:`APPSC Topic ${i+1}`, pages:30, pdfLink:"", done:false }))
  },
  { id:12, title:"TSPSC Group 2 Complete", category:"government", sub:"State PSC", type:"premium", emoji:"🌺", topics:16, progress:0, pages:480, downloads:1900, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"telangana", engDeptId:null, tags:["tspsc","group2","telangana"],
    topicsList: Array.from({length:16}, (_,i)=>({ id:i+1, title:`TSPSC Topic ${i+1}`, pages:30, pdfLink:"", done:false }))
  },
  { id:13, title:"Digital Marketing", category:"private", sub:"marketing", type:"free", emoji:"📊", topics:7, progress:55, pages:190, downloads:670, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, engDeptId:null, tags:["marketing","digital"],
    topicsList: Array.from({length:7}, (_,i)=>({ id:i+1, title:`Marketing Topic ${i+1}`, pages:27, pdfLink:"", done:i<4 }))
  },
  { id:14, title:"Research Methodology", category:"higher", sub:"Research", type:"free", emoji:"🔬", topics:5, progress:10, pages:160, downloads:310, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Both", govtType:null, stateId:null, engDeptId:null, tags:["research","methodology"],
    topicsList: Array.from({length:5}, (_,i)=>({ id:i+1, title:`Research Topic ${i+1}`, pages:32, pdfLink:"", done:false }))
  },
  { id:15, title:"Defence NDA Prep", category:"government", sub:"Defence", type:"premium", emoji:"⚔️", topics:16, progress:0, pages:500, downloads:1200, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, engDeptId:null, tags:["nda","defence"],
    topicsList: Array.from({length:16}, (_,i)=>({ id:i+1, title:`NDA Topic ${i+1}`, pages:31, pdfLink:"", done:false }))
  },
];

let _globalMaterials = ALL_MATERIALS.map(m => ({...m}));
let _globalRequests = [
  { id:"r1", studentId:"s1", studentName:"Arjun Sharma", title:"AI & Machine Learning 2025", category:"private", sub:"IT", reason:"Need latest trending AI material for interviews", status:"pending", date:"2024-12-01" },
  { id:"r2", studentId:"s2", studentName:"Priya Reddy", title:"UPSC Ethics GS4 Deep Dive", category:"government", sub:"UPSC", reason:"Comprehensive ethics module not available anywhere", status:"pending", date:"2024-12-05" },
];
let _globalStudents = [
  { id:"s1", name:"Arjun Sharma", email:"arjun@email.com", joined:"2024-01-15", completed:3, avatar:"AS", college:"JNTU Hyderabad" },
  { id:"s2", name:"Priya Reddy", email:"priya@email.com", joined:"2024-02-20", completed:1, avatar:"PR", college:"Osmania University" },
  { id:"s3", name:"Rahul Gupta", email:"rahul@email.com", joined:"2024-03-10", completed:0, avatar:"RG", college:"IIT Bombay" },
];

// ─── CSV FIELD DEFINITIONS (per category) ─────────────────────────────────────
const CSV_FIELDS_PRIVATE = [
  { name:"title", required:true, desc:"Material title" },
  { name:"sub", required:true, desc:"Sub: engineering / banking / it / marketing / finance / consulting / healthcare" },
  { name:"eng_dept_id", required:false, desc:"If sub=engineering: cse, it, ece, eee, mech, civil, chem, aero..." },
  { name:"type", required:true, desc:"free / premium" },
  { name:"emoji", required:false, desc:"Emoji icon e.g. ☕" },
  { name:"total_pages", required:false, desc:"Total pages" },
  { name:"tags", required:false, desc:"Comma-separated tags" },
  { name:"topic_1_title", required:false, desc:"Topic 1 title" },
  { name:"topic_1_pages", required:false, desc:"Topic 1 pages" },
  { name:"topic_1_pdf", required:false, desc:"Topic 1 PDF URL" },
  { name:"topic_2_title", required:false, desc:"Topic 2 title" },
  { name:"topic_2_pages", required:false, desc:"Topic 2 pages" },
  { name:"topic_2_pdf", required:false, desc:"Topic 2 PDF URL" },
  { name:"topic_3_title", required:false, desc:"Topic 3 title" },
  { name:"topic_3_pages", required:false, desc:"Topic 3 pages" },
  { name:"topic_3_pdf", required:false, desc:"Topic 3 PDF URL" },
  { name:"topic_4_title", required:false, desc:"Topic 4 title" },
  { name:"topic_4_pages", required:false, desc:"Topic 4 pages" },
  { name:"topic_4_pdf", required:false, desc:"Topic 4 PDF URL" },
  { name:"topic_5_title", required:false, desc:"Topic 5 title" },
  { name:"topic_5_pages", required:false, desc:"Topic 5 pages" },
  { name:"topic_5_pdf", required:false, desc:"Topic 5 PDF URL" },
];
const CSV_FIELDS_GOVT = [
  { name:"title", required:true, desc:"Material title" },
  { name:"sub", required:true, desc:"UPSC / SSC / Banking (Govt) / Railways / Defence / State PSC" },
  { name:"govt_type", required:true, desc:"central / state" },
  { name:"state_id", required:false, desc:"ap / telangana / other (if govt_type=state)" },
  { name:"type", required:true, desc:"free / premium" },
  { name:"emoji", required:false, desc:"Emoji icon" },
  { name:"total_pages", required:false, desc:"Total pages" },
  { name:"tags", required:false, desc:"Comma-separated tags" },
  { name:"topic_1_title", required:false, desc:"Topic 1 title" },
  { name:"topic_1_pages", required:false, desc:"Topic 1 pages" },
  { name:"topic_1_pdf", required:false, desc:"Topic 1 PDF URL" },
  { name:"topic_2_title", required:false, desc:"Topic 2 title" },
  { name:"topic_2_pages", required:false, desc:"Topic 2 pages" },
  { name:"topic_2_pdf", required:false, desc:"Topic 2 PDF URL" },
  { name:"topic_3_title", required:false, desc:"Topic 3 title" },
  { name:"topic_3_pages", required:false, desc:"Topic 3 pages" },
  { name:"topic_3_pdf", required:false, desc:"Topic 3 PDF URL" },
  { name:"topic_4_title", required:false, desc:"Topic 4 title" },
  { name:"topic_4_pages", required:false, desc:"Topic 4 pages" },
  { name:"topic_4_pdf", required:false, desc:"Topic 4 PDF URL" },
  { name:"topic_5_title", required:false, desc:"Topic 5 title" },
  { name:"topic_5_pages", required:false, desc:"Topic 5 pages" },
  { name:"topic_5_pdf", required:false, desc:"Topic 5 PDF URL" },
];
const CSV_FIELDS_HIGHER = [
  { name:"title", required:true, desc:"Material title" },
  { name:"sub", required:true, desc:"GATE / CAT/MBA / GRE/GMAT / Study Abroad / Research / PhD" },
  { name:"india_abroad", required:false, desc:"India / Abroad / Both" },
  { name:"type", required:true, desc:"free / premium" },
  { name:"emoji", required:false, desc:"Emoji icon" },
  { name:"total_pages", required:false, desc:"Total pages" },
  { name:"tags", required:false, desc:"Comma-separated tags" },
  { name:"topic_1_title", required:false, desc:"Topic 1 title" },
  { name:"topic_1_pages", required:false, desc:"Topic 1 pages" },
  { name:"topic_1_pdf", required:false, desc:"Topic 1 PDF URL" },
  { name:"topic_2_title", required:false, desc:"Topic 2 title" },
  { name:"topic_2_pages", required:false, desc:"Topic 2 pages" },
  { name:"topic_2_pdf", required:false, desc:"Topic 2 PDF URL" },
  { name:"topic_3_title", required:false, desc:"Topic 3 title" },
  { name:"topic_3_pages", required:false, desc:"Topic 3 pages" },
  { name:"topic_3_pdf", required:false, desc:"Topic 3 PDF URL" },
  { name:"topic_4_title", required:false, desc:"Topic 4 title" },
  { name:"topic_4_pages", required:false, desc:"Topic 4 pages" },
  { name:"topic_4_pdf", required:false, desc:"Topic 4 PDF URL" },
  { name:"topic_5_title", required:false, desc:"Topic 5 title" },
  { name:"topic_5_pages", required:false, desc:"Topic 5 pages" },
  { name:"topic_5_pdf", required:false, desc:"Topic 5 PDF URL" },
];

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
*{box-sizing:border-box;}
@keyframes cardIn{from{opacity:0;transform:translateY(18px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}
@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}
@keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}
@keyframes pageUnlock{0%{transform:scaleX(0);opacity:0}100%{transform:scaleX(1);opacity:1}}
.svc-card{transition:all 0.3s cubic-bezier(.4,0,.2,1)!important;}
.svc-card:hover{transform:translateY(-8px) scale(1.02)!important;box-shadow:0 24px 60px rgba(15,23,42,0.14)!important;}
.mat-card{transition:all 0.25s cubic-bezier(.4,0,.2,1)!important;}
.mat-card:hover{transform:translateY(-6px) scale(1.02)!important;box-shadow:0 20px 60px rgba(15,23,42,0.15)!important;}
.cat-card{transition:all 0.22s ease!important;}
.cat-card:hover{transform:translateY(-4px)!important;box-shadow:0 12px 40px rgba(15,23,42,0.12)!important;}
.btn-hover{transition:all 0.18s ease!important;}
.btn-hover:hover{filter:brightness(1.08);transform:translateY(-1px)!important;}
.row-hover:hover{background:#f8fafc!important;}
.dept-option{transition:all 0.15s ease;}
.dept-option:hover{background:rgba(236,72,153,0.08)!important;transform:translateX(4px);}
.topic-row{transition:all 0.2s ease;}
.topic-row:hover{background:#f8fafc;}
::-webkit-scrollbar{width:6px;height:6px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px;}
::-webkit-scrollbar-thumb:hover{background:#94a3b8;}
`;

// ─── TOAST ────────────────────────────────────────────────────────────────────
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (msg, type="success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  };
  return { toasts, add };
}
function ToastContainer({ toasts }) {
  const cfg = { success:{bg:"#f0fdf4",border:"#86efac",text:"#166534",icon:"✅"}, warn:{bg:"#fffbeb",border:"#fcd34d",text:"#92400e",icon:"⚠️"}, error:{bg:"#fef2f2",border:"#fca5a5",text:"#991b1b",icon:"❌"}, info:{bg:"#eff6ff",border:"#93c5fd",text:"#1e40af",icon:"ℹ️"} };
  return (
    <div style={{ position:"fixed",top:20,right:20,zIndex:99999,display:"flex",flexDirection:"column",gap:10,maxWidth:360,width:"90%",pointerEvents:"none" }}>
      {toasts.map(t => { const s=cfg[t.type]||cfg.info; return (
        <div key={t.id} style={{ background:s.bg,border:`1.5px solid ${s.border}`,color:s.text,borderRadius:14,padding:"13px 18px",fontSize:13,fontWeight:600,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10,pointerEvents:"auto" }}>
          <span style={{ fontSize:16 }}>{s.icon}</span>{t.msg}
        </div>
      );})}
    </div>
  );
}

// ─── PROGRESS RING ────────────────────────────────────────────────────────────
function Ring({ pct, size=48, stroke=4, color=C.amber }) {
  const r = (size - stroke*2) / 2, circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform:"rotate(-90deg)", flexShrink:0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ}
        style={{ transition:"stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)", strokeLinecap:"round" }}/>
      <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
        style={{ transform:`rotate(90deg) translate(0,-${size}px)`, fontSize:11, fontWeight:700, transformOrigin:`${size/2}px ${size/2}px` }}>
        {pct}%
      </text>
    </svg>
  );
}

// ─── MAT THUMB ────────────────────────────────────────────────────────────────
function MatThumb({ m, size=80 }) {
  const cat = CATEGORIES[m.category] || CATEGORIES.private;
  return (
    <div style={{ width:size, height:size, borderRadius:12, background:cat.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:size*0.45, flexShrink:0 }}>
      {m.emoji || "📄"}
    </div>
  );
}

// ─── ENGINEERING DEPT DROPDOWN ────────────────────────────────────────────────
function EngDeptDropdown({ activeDept, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const selected = ENG_DEPARTMENTS.find(d => d.id === activeDept);
  const getMatsCount = (deptId) => {
    const fromEng = (ENG_MATERIALS[deptId] || []).length;
    const fromGlobal = _globalMaterials.filter(m => m.engDeptId === deptId).length;
    return fromEng + fromGlobal;
  };
  return (
    <div ref={ref} style={{ position:"relative", display:"inline-block" }}>
      <button onClick={() => setOpen(!open)} style={{ display:"flex", alignItems:"center", gap:8, background:selected?"linear-gradient(135deg,#fce7f3,#fbcfe8)":"#fff", border:`1.5px solid ${selected?"#ec4899":C.border}`, borderRadius:12, padding:"10px 16px", cursor:"pointer", fontWeight:700, fontSize:13, color:selected?"#be185d":C.textSec, fontFamily:"inherit", boxShadow:C.shadow, whiteSpace:"nowrap" }}>
        <span style={{ fontSize:16 }}>{selected ? selected.icon : "🔬"}</span>
        <span>{selected ? `${selected.short} - ${selected.name}` : "Select Department"}</span>
        <span style={{ fontSize:10, marginLeft:2, transform:open?"rotate(180deg)":"", transition:"transform 0.2s", display:"inline-block" }}>▼</span>
      </button>
      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 8px)", left:0, background:"#fff", border:`1.5px solid ${C.border}`, borderRadius:16, boxShadow:C.shadowLg, zIndex:5000, minWidth:320, maxHeight:420, overflowY:"auto", animation:"cardIn 0.2s ease", padding:"8px 0" }}>
          <div style={{ padding:"8px 14px 6px", fontSize:10, color:C.textMut, fontWeight:800, textTransform:"uppercase", letterSpacing:1 }}>Choose Department</div>
          {activeDept && (
            <div onClick={() => { onSelect(null); setOpen(false); }} className="dept-option" style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", cursor:"pointer", background:"#fef2f2", borderBottom:`1px solid ${C.border}`, marginBottom:4 }}>
              <span style={{ fontSize:14 }}>✕</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#ef4444" }}>Show All Engineering</span>
            </div>
          )}
          {ENG_DEPARTMENTS.map(dept => {
            const count = getMatsCount(dept.id);
            const isActive = activeDept === dept.id;
            return (
              <div key={dept.id} onClick={() => { onSelect(dept.id); setOpen(false); }} className="dept-option"
                style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", cursor:"pointer", background:isActive?dept.bg:"transparent" }}>
                <div style={{ width:34, height:34, borderRadius:9, background:isActive?dept.bg:"rgba(0,0,0,0.04)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17, border:`1px solid ${isActive?dept.border:"transparent"}`, flexShrink:0 }}>{dept.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, fontWeight:isActive?800:700, color:isActive?dept.color:C.textPri }}>{dept.name}</div>
                  <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{dept.short} · {count} materials</div>
                </div>
                {isActive && <span style={{ fontSize:14, color:dept.color }}>✓</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── MATERIAL MODAL (with sequential topic unlock & PDF links) ─────────────────
function MaterialModal({ material:m, onClose, toast }) {
  const cat = CATEGORIES[m.category] || CATEGORIES.private;
  const engDept = m.engDeptId ? ENG_DEPARTMENTS.find(d => d.id === m.engDeptId) : null;
  const accentColor = engDept ? engDept.color : cat.color;
  const accentBg = engDept ? engDept.bg : cat.bg;
  const accentGrad = engDept ? `linear-gradient(135deg, ${engDept.bg}, ${engDept.bg.replace("0.08","0.15")})` : cat.gradient;

  const [topicsState, setTopicsState] = useState(() => {
    if (m.topicsList && m.topicsList.length > 0) return m.topicsList.map(t => ({...t}));
    return Array.from({ length: m.topics || 5 }, (_, i) => ({
      id:i+1, title:`Topic ${i+1}`, pages:Math.floor((m.pages||100)/(m.topics||5)), pdfLink:"", done:false
    }));
  });
  const [activeTab, setActiveTab] = useState("topics");
  const [notes, setNotes] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);

  const done = topicsState.filter(t => t.done).length;
  const pct = topicsState.length > 0 ? Math.round((done / topicsState.length) * 100) : 0;
  const allDone = done === topicsState.length && topicsState.length > 0;
  const crash = CRASH_COURSES[m.id];

  // A topic is unlocked if it's done, or it's the first undone topic (sequential)
  const isTopicUnlocked = (idx) => {
    if (idx === 0) return true;
    return topicsState[idx - 1]?.done === true;
  };

  const markTopicDone = (topicId, idx) => {
    if (!isTopicUnlocked(idx)) {
      toast(`Complete "${topicsState[idx-1]?.title}" first!`, "warn");
      return;
    }
    setTopicsState(p => p.map(t => t.id === topicId ? { ...t, done: !t.done } : t));
  };

  const pagesRead = topicsState.filter(t=>t.done).reduce((a,t)=>a+t.pages,0);
  const totalPages = topicsState.reduce((a,t)=>a+t.pages,0);

  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:16,backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease" }} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{ background:"#fff",borderRadius:22,maxWidth:700,width:"100%",maxHeight:"94vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease" }}>
        {/* Header */}
        <div style={{ background:accentGrad,padding:"24px 24px 20px",borderRadius:"22px 22px 0 0",position:"relative",borderBottom:`1px solid ${accentColor}33` }}>
          <button onClick={onClose} style={{ position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:14,color:C.textSec }}>✕</button>
          <div style={{ display:"flex",alignItems:"center",gap:16,flexWrap:"wrap" }}>
            <div style={{ width:72,height:72,borderRadius:14,background:accentBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,border:`2px solid ${accentColor}33`,flexShrink:0 }}>{m.emoji||"📄"}</div>
            <div style={{ flex:1,minWidth:200 }}>
              <h2 style={{ margin:"0 0 4px",color:accentColor,fontSize:19,fontWeight:900 }}>{m.title}</h2>
              {engDept && <div style={{ display:"inline-flex",alignItems:"center",gap:5,background:engDept.bg,color:engDept.color,borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:800,border:`1px solid ${engDept.border}`,marginBottom:6 }}>{engDept.icon} {engDept.name}</div>}
              <div style={{ fontSize:12,color:C.textSec,marginBottom:8 }}>{m.sub?.toUpperCase()} · {totalPages} pages · {topicsState.length} topics</div>
              {m.tags && m.tags.length>0 && (
                <div style={{ display:"flex",flexWrap:"wrap",gap:4,marginBottom:10 }}>
                  {m.tags.map(tag=><span key={tag} style={{ background:"rgba(0,0,0,0.06)",color:C.textSec,borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700 }}>#{tag}</span>)}
                </div>
              )}
              <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
                {EPREP_LINKS[m.id] && <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 14px",fontSize:11,fontWeight:700,textDecoration:"none" }}>🎯 E-Prep</a>}
                {crash && <a href={crash.url} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:5,background:crash.color,color:"#fff",borderRadius:9,padding:"7px 14px",fontSize:11,fontWeight:700,textDecoration:"none" }}>⚡ Crash</a>}
              </div>
            </div>
          </div>
          {/* Progress summary */}
          <div style={{ display:"flex",gap:14,marginTop:16,alignItems:"center",flexWrap:"wrap" }}>
            <Ring pct={pct} size={56} stroke={5} color={accentColor}/>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:800,fontSize:15,color:accentColor }}>{pct}% complete</div>
              <div style={{ fontSize:12,color:C.textSec }}>{done}/{topicsState.length} topics · {pagesRead}/{totalPages} pages read</div>
              <div style={{ height:5,background:"rgba(0,0,0,0.07)",borderRadius:8,marginTop:6,overflow:"hidden" }}>
                <div style={{ width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${accentColor},${accentColor}aa)`,borderRadius:8,transition:"width 0.8s ease" }}/>
              </div>
            </div>
            {allDone && <div style={{ background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:10,padding:"8px 14px",color:"#166534",fontSize:12,fontWeight:700,animation:"bounce 1s ease" }}>🎉 Completed!</div>}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display:"flex",borderBottom:`1px solid ${C.border}`,padding:"0 20px",overflowX:"auto" }}>
          {[["topics","📚 Topics"],["notes","🗒️ Notes"],["info","ℹ️ Info"]].map(([t,l])=>(
            <button key={t} onClick={()=>setActiveTab(t)} style={{ padding:"12px 18px",border:"none",background:"none",fontWeight:700,fontSize:13,cursor:"pointer",color:activeTab===t?accentColor:C.textSec,borderBottom:`2.5px solid ${activeTab===t?accentColor:"transparent"}`,fontFamily:"inherit",whiteSpace:"nowrap" }}>{l}</button>
          ))}
        </div>

        <div style={{ padding:20 }}>
          {activeTab==="topics" && (
            <div>
              <div style={{ background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:12,padding:"10px 16px",marginBottom:16,fontSize:12,color:"#92400e",fontWeight:700,display:"flex",alignItems:"center",gap:8 }}>
                📖 Sequential Learning — complete each topic to unlock the next. Click any topic to mark it done.
              </div>
              {topicsState.map((t, idx) => {
                const unlocked = isTopicUnlocked(idx);
                const isActive = activeTopic === t.id;
                return (
                  <div key={t.id} style={{ marginBottom:8 }}>
                    <div
                      className="topic-row"
                      onClick={() => { if(unlocked){ markTopicDone(t.id, idx); setActiveTopic(isActive?null:t.id); } else { toast(`Complete "${topicsState[idx-1]?.title}" first!`,"warn"); } }}
                      style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:12,cursor:unlocked?"pointer":"not-allowed",background:t.done?`linear-gradient(135deg,${accentBg},${accentBg.replace("0.08","0.12")})`:"#f8fafc",border:`1.5px solid ${t.done?accentColor:unlocked?"#e2e8f0":"#f1f5f9"}`,opacity:unlocked?1:0.6,animation:`cardIn 0.3s ease ${idx*0.03}s both` }}>
                      <div style={{ width:32,height:32,borderRadius:"50%",background:t.done?accentColor:unlocked?"#fff":"#e2e8f0",border:`2px solid ${t.done?accentColor:unlocked?C.borderHi:"#cbd5e1"}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.done?"#fff":unlocked?C.textSec:C.textMut,fontWeight:800,fontSize:12,flexShrink:0,transition:"all 0.2s" }}>
                        {t.done ? "✓" : unlocked ? idx+1 : "🔒"}
                      </div>
                      <div style={{ flex:1,minWidth:0 }}>
                        <div style={{ fontWeight:700,fontSize:13,color:t.done?accentColor:unlocked?C.textPri:C.textMut }}>{t.title}</div>
                        <div style={{ fontSize:11,color:C.textMut,marginTop:2 }}>
                          {t.pages} pages
                          {!unlocked && <span style={{ marginLeft:6,color:"#ef4444",fontWeight:700 }}>· Locked</span>}
                          {t.pdfLink && unlocked && <span style={{ marginLeft:6,color:"#3b82f6",fontWeight:700 }}>· PDF Available</span>}
                        </div>
                      </div>
                      <div style={{ display:"flex",alignItems:"center",gap:6,flexShrink:0 }}>
                        {t.pdfLink && unlocked && (
                          <a href={t.pdfLink} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",color:"#1e40af",borderRadius:8,padding:"5px 10px",fontSize:10,fontWeight:800,textDecoration:"none",whiteSpace:"nowrap" }}>📄 PDF</a>
                        )}
                        {t.done && <span style={{ fontSize:10,background:accentColor,color:"#fff",borderRadius:6,padding:"3px 9px",fontWeight:700,whiteSpace:"nowrap" }}>Done</span>}
                      </div>
                    </div>
                    {/* Page counter row */}
                    {t.done && (
                      <div style={{ marginLeft:16,marginTop:3,display:"flex",alignItems:"center",gap:8 }}>
                        <div style={{ flex:1,height:3,background:"#e2e8f0",borderRadius:8,overflow:"hidden",animation:"pageUnlock 0.6s ease" }}>
                          <div style={{ width:"100%",height:"100%",background:`linear-gradient(90deg,${accentColor}88,${accentColor})` }}/>
                        </div>
                        <span style={{ fontSize:10,color:accentColor,fontWeight:800,whiteSpace:"nowrap" }}>✅ {t.pages}p read</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {activeTab==="notes" && (
            <div>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Write your personal notes here..." style={{ width:"100%",minHeight:160,borderRadius:12,padding:14,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit" }}/>
              <button onClick={()=>toast("Notes saved!","success")} style={{ marginTop:10,background:accentColor,color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontWeight:700,cursor:"pointer",fontFamily:"inherit" }}>💾 Save Notes</button>
            </div>
          )}
          {activeTab==="info" && (
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:10 }}>
              {[["Category",CATEGORIES[m.category]?.label||m.category],["Type",m.type],["Pages",totalPages],["Topics",topicsState.length],["Downloads",(m.downloads||0).toLocaleString()],["Sub",m.sub?.toUpperCase()||"—"],
                ...(m.govtType?[["Govt Type",m.govtType]]:[]),(m.stateId?[["State",m.stateId]]:[]),(m.engDeptId?[["Dept",m.engDeptId.toUpperCase()]]:[]),(m.indiaOrAbroad?[["Destination",m.indiaOrAbroad]]:[])
              ].filter(Boolean).map(([k,v])=>(
                <div key={k} style={{ background:"#f8fafc",border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px" }}>
                  <div style={{ fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3 }}>{k}</div>
                  <div style={{ fontSize:13,fontWeight:700 }}>{String(v)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PREMIUM BANNER ───────────────────────────────────────────────────────────
function PremiumBanner({ completedCount, premiumMaterials, onOpen }) {
  const unlocked = completedCount >= 3, needed = 3 - completedCount;
  return (
    <div style={{ background:unlocked?"linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)":"linear-gradient(135deg,#f1f5f9,#e2e8f0)",border:`2px solid ${unlocked?C.amber:C.border}`,borderRadius:20,padding:"20px 24px",marginBottom:24,position:"relative",overflow:"hidden",animation:"slideDown 0.5s ease" }}>
      {unlocked && <div style={{ position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)",animation:"shimmer 2.5s infinite",pointerEvents:"none" }}/>}
      <div style={{ display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",position:"relative" }}>
        <div style={{ fontSize:44,animation:unlocked?"bounce 1s ease infinite":"none",flexShrink:0 }}>{unlocked?"🔓":"🔒"}</div>
        <div style={{ flex:1,minWidth:180 }}>
          <div style={{ fontWeight:800,fontSize:16,color:unlocked?"#92400e":C.textSec,marginBottom:4 }}>{unlocked?"✨ Premium Unlocked!":`${needed} more to unlock Premium`}</div>
          <div style={{ fontSize:12,color:unlocked?"#b45309":C.textMut }}>{unlocked?`${premiumMaterials.length} premium materials available`:`Complete ${needed} more free material${needed>1?"s":""}`}</div>
          {!unlocked && <div style={{ marginTop:8,background:"#e2e8f0",borderRadius:10,height:6,overflow:"hidden",maxWidth:260 }}><div style={{ width:`${(completedCount/3)*100}%`,height:"100%",background:"linear-gradient(90deg,#f59e0b,#fbbf24)",borderRadius:10,transition:"width 1s ease" }}/></div>}
        </div>
        {unlocked && (
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            {premiumMaterials.slice(0,3).map(m=>(
              <button key={m.id} onClick={()=>onOpen(m)} style={{ background:"rgba(255,255,255,0.7)",border:"1.5px solid #f59e0b",borderRadius:10,padding:"8px 12px",cursor:"pointer",textAlign:"center",backdropFilter:"blur(8px)",minWidth:90 }}>
                <div style={{ fontSize:20,marginBottom:4 }}>{m.emoji}</div>
                <div style={{ fontSize:10,fontWeight:700,color:"#92400e",lineHeight:1.2 }}>{m.title.substring(0,15)}...</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── REQUEST MODAL ────────────────────────────────────────────────────────────
function RequestMaterialModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ title:"", category:"private", sub:"it", reason:"" });
  const set = (k, v) => setForm(p => ({...p,[k]:v}));
  const valid = form.title.trim() && form.reason.trim();
  const SUBS = { private:PRIVATE_SUBS.map(s=>s.id), government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"], higher:HIGHER_SUBS };
  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:16,backdropFilter:"blur(4px)" }}>
      <div style={{ background:"#fff",borderRadius:22,maxWidth:500,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease",maxHeight:"90vh",overflowY:"auto" }}>
        <div style={{ padding:"20px 24px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <h2 style={{ margin:0,color:C.amber,fontSize:16,fontWeight:800 }}>📨 Request New Material</h2>
          <button onClick={onClose} style={{ background:"#f8fafc",border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer" }}>✕</button>
        </div>
        <div style={{ padding:"22px 24px",display:"flex",flexDirection:"column",gap:14 }}>
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Material Title *</label><input value={form.title} onChange={e=>set("title",e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{ width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit" }}/></div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e=>{set("category",e.target.value);set("sub",SUBS[e.target.value]?.[0]||"");}} style={{ width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select></div>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Sub-category</label><select value={form.sub} onChange={e=>set("sub",e.target.value)} style={{ width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>{(SUBS[form.category]||[]).map(s=><option key={s} value={s}>{s}</option>)}</select></div>
          </div>
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Why do you need this? *</label><textarea value={form.reason} onChange={e=>set("reason",e.target.value)} placeholder="Describe why this material would help..." rows={3} style={{ width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit" }}/></div>
          <div style={{ display:"flex",gap:10 }}>
            <button onClick={onClose} style={{ flex:1,background:"#f8fafc",color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit" }}>Cancel</button>
            <button onClick={()=>valid&&onSubmit(form)} style={{ flex:2,background:valid?C.amber:"#e2e8f0",color:valid?"#fff":C.textMut,border:"none",borderRadius:10,padding:12,cursor:valid?"pointer":"not-allowed",fontWeight:800,fontFamily:"inherit",fontSize:13 }}>📨 Send Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── GOVERNMENT FILTER ────────────────────────────────────────────────────────
function GovtSectorFilter({ govtFilter, stateFilter, onGovtChange, onStateChange }) {
  return (
    <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",border:"1.5px solid #a7f3d0",borderRadius:16,padding:"16px 20px",marginBottom:18,animation:"slideDown 0.3s ease" }}>
      <div style={{ fontSize:11,color:"#065f46",fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14 }}>🏛️ Government Sector Filter</div>
      <div style={{ display:"flex",gap:10,marginBottom:14,flexWrap:"wrap" }}>
        {[{v:"all",l:"🌐 All"},{v:"central",l:"🏛️ Central Govt"},{v:"state",l:"🗺️ State Govt"}].map(item=>(
          <button key={item.v} onClick={()=>{onGovtChange(item.v);if(item.v!=="state")onStateChange("all");}} style={{ padding:"8px 16px",borderRadius:10,border:`1.5px solid ${govtFilter===item.v?"#059669":"#a7f3d0"}`,background:govtFilter===item.v?"#059669":"rgba(255,255,255,0.7)",color:govtFilter===item.v?"#fff":"#065f46",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.18s" }}>{item.l}</button>
        ))}
      </div>
      {govtFilter==="state" && (
        <div style={{ animation:"slideDown 0.25s ease" }}>
          <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
            {[{v:"all",l:"🌐 All States",c:"#7c3aed"},{v:"ap",l:"🌊 Andhra Pradesh",c:"#dc2626"},{v:"telangana",l:"🌺 Telangana",c:"#7c3aed"},{v:"other",l:"🗾 Other States",c:"#0891b2"}].map(s=>(
              <button key={s.v} onClick={()=>onStateChange(s.v)} style={{ padding:"7px 14px",borderRadius:9,border:`1.5px solid ${stateFilter===s.v?s.c:s.c+"44"}`,background:stateFilter===s.v?s.c:"rgba(255,255,255,0.8)",color:stateFilter===s.v?"#fff":s.c,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.18s" }}>{s.l}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
const CURRENT_STUDENT = { id:"s1", name:"Arjun Sharma" };

function StudentDashboard({ onBack }) {
  const [materials, setMaterials] = useState(() => [..._globalMaterials]);
  const [requests, setRequests] = useState(() => _globalRequests.filter(r => r.studentId===CURRENT_STUDENT.id));
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCat] = useState("all");
  const [activeSub, setActiveSub] = useState("all");     // for private: sub id; for higher: India/Abroad/all
  const [activeEngDept, setActiveEngDept] = useState(null); // engineering dept
  const [govtFilter, setGovtFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [openMaterial, setOpenMat] = useState(null);
  const [showReqModal, setShowReqModal] = useState(false);
  const [activeView, setActiveView] = useState("library");
  const { toasts, add:toast } = useToast();
  const [animIn, setAnimIn] = useState(false);
  const completedCount = 3;

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  useEffect(() => {
    const t = setInterval(() => setMaterials([..._globalMaterials]), 1000);
    return () => clearInterval(t);
  }, []);

  // Get engineering materials (ENG_MATERIALS + globalMaterials that are engineering)
  const getEngMaterials = useCallback((deptId) => {
    const builtIn = deptId ? (ENG_MATERIALS[deptId]||[]).map(m=>({...m,category:"private",sub:"engineering",engDeptId:deptId,govtType:null,stateId:null,indiaOrAbroad:null,bookmarked:false})) :
      ENG_DEPARTMENTS.flatMap(d=>(ENG_MATERIALS[d.id]||[]).map(m=>({...m,category:"private",sub:"engineering",engDeptId:d.id,govtType:null,stateId:null,indiaOrAbroad:null,bookmarked:false})));
    const global = _globalMaterials.filter(m=>m.sub==="engineering"&&(!deptId||m.engDeptId===deptId));
    const globalIds = new Set(global.map(m=>m.id));
    return [...global, ...builtIn.filter(m=>!globalIds.has(m.id))];
  }, [materials]);

  const higherMats = materials.filter(m=>m.category==="higher");
  const higherTotal = higherMats.length||1;
  const indiaPct = Math.round((higherMats.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both").length/higherTotal)*100);
  const abroadPct = Math.round((higherMats.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both").length/higherTotal)*100);

  const filtered = (() => {
    let list = [];

    if (activeCategory === "all") {
      // All non-engineering private + all others
      const eng = getEngMaterials(null);
      const nonEng = materials.filter(m => !(m.sub==="engineering") || m.category!=="private");
      list = [...nonEng, ...eng];
    } else if (activeCategory === "private") {
      if (activeSub === "engineering") {
        list = getEngMaterials(activeEngDept);
      } else if (activeSub === "all") {
        // All private including engineering
        const eng = getEngMaterials(null);
        const nonEng = materials.filter(m=>m.category==="private"&&m.sub!=="engineering");
        list = [...nonEng, ...eng];
      } else {
        list = materials.filter(m=>m.category==="private"&&m.sub===activeSub);
      }
    } else if (activeCategory === "government") {
      list = materials.filter(m=>m.category==="government");
      if (govtFilter==="central") list = list.filter(m=>m.govtType==="central");
      else if (govtFilter==="state") {
        list = list.filter(m=>m.govtType==="state");
        if (stateFilter!=="all") list = list.filter(m=>m.stateId===stateFilter);
      }
    } else if (activeCategory === "higher") {
      list = materials.filter(m=>m.category==="higher");
      if (activeSub==="India") list = list.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both");
      else if (activeSub==="Abroad") list = list.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both");
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(m=>m.title.toLowerCase().includes(q)||(m.sub||"").toLowerCase().includes(q)||(m.tags||[]).some(t=>t.includes(q)));
    }
    return list;
  })();

  const premiumMats = [...materials, ...getEngMaterials(null)].filter(m=>m.type==="premium");
  const myPending = requests.filter(r=>r.status==="pending").length;
  const getStatusBadge = s => s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

  const handleOpen = (m) => {
    if (m.type==="premium"&&completedCount<3){toast("Complete 3 free materials to unlock premium!","warn");return;}
    setOpenMat(m);
  };
  const handleDownload = (m) => {
    if (m.type==="premium"&&completedCount<3){toast("Complete 3 materials to unlock downloads","warn");return;}
    toast(`"${m.title}" download started!`,"success");
  };
  const toggleBookmark = (id) => { setMaterials(p=>p.map(m=>m.id===id?{...m,bookmarked:!m.bookmarked}:m)); toast("Bookmark updated","info"); };
  const submitRequest = (data) => {
    const newReq = {id:`r${Date.now()}`,studentId:CURRENT_STUDENT.id,studentName:CURRENT_STUDENT.name,...data,status:"pending",date:new Date().toISOString().slice(0,10)};
    _globalRequests = [..._globalRequests, newReq];
    setRequests(p=>[...p, newReq]);
    setShowReqModal(false);
    toast("📨 Request sent to admin!","success");
  };

  const handleCategoryClick = (key) => {
    setActiveCat(key);
    setActiveSub("all");
    setActiveEngDept(null);
    setGovtFilter("all");
    setStateFilter("all");
  };

  return (
    <div style={{ minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif" }}>
      <style>{GLOBAL_CSS}</style>
      <ToastContainer toasts={toasts}/>

      {/* Nav */}
      <div style={{ background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"0 16px",boxShadow:"0 2px 12px rgba(15,23,42,0.06)",position:"sticky",top:0,zIndex:100 }}>
        <div style={{ maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:62,gap:10 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <button className="btn-hover" onClick={onBack} style={{ background:"#f8fafc",border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"7px 12px",cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:600 }}>← Home</button>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <span style={{ fontSize:22 }}>📚</span>
              <span style={{ fontWeight:900,fontSize:17,color:C.amber }}>OYS E-Library</span>
            </div>
          </div>
          <div style={{ display:"flex",gap:8,alignItems:"center",flexWrap:"wrap" }}>
            <div style={{ background:completedCount>=3?"#f0fdf4":"#fffbeb",border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`,borderRadius:20,padding:"5px 12px",color:completedCount>=3?"#166534":"#92400e",fontSize:11,fontWeight:700,animation:completedCount>=3?"pulse 2s infinite":"none",whiteSpace:"nowrap" }}>{completedCount>=3?"🔓 Premium Unlocked":"✅ "+completedCount+"/3"}</div>
            <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{ background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)" }}>+ Request</button>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ background:"#fff",borderBottom:`1px solid ${C.border}`,padding:"0 16px",overflowX:"auto" }}>
        <div style={{ maxWidth:1300,margin:"0 auto",display:"flex",gap:0 }}>
          {[["library","📖 Library"],["requests","📨 Requests"]].map(([v,l])=>(
            <button key={v} onClick={()=>setActiveView(v)} style={{ background:"none",border:"none",padding:"12px 18px",color:activeView===v?C.amber:C.textSec,borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`,cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap" }}>
              {l}{v==="requests"&&myPending>0&&<span style={{ background:C.rose,color:"#fff",borderRadius:10,padding:"1px 6px",fontSize:10,marginLeft:6 }}>{myPending}</span>}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:1300,margin:"0 auto",padding:"20px 16px",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(16px)",transition:"all 0.5s ease" }}>

        {activeView==="requests" && (
          <div>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10 }}>
              <h2 style={{ margin:0,fontSize:18,fontWeight:800 }}>My Material Requests</h2>
              <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{ background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 18px",fontWeight:700,cursor:"pointer",fontSize:13,fontFamily:"inherit" }}>+ New Request</button>
            </div>
            {requests.length===0?(
              <div style={{ textAlign:"center",padding:"60px 0",color:C.textMut }}><div style={{ fontSize:48,marginBottom:12 }}>📭</div><div style={{ fontSize:15,fontWeight:600,color:C.textSec }}>No requests yet</div></div>
            ):(
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                {requests.map(r=>{const badge=getStatusBadge(r.status);return(
                  <div key={r.id} style={{ background:"#fff",border:`1px solid ${C.border}`,borderRadius:14,padding:"18px 22px",display:"flex",alignItems:"center",gap:16,boxShadow:C.shadow,flexWrap:"wrap" }}>
                    <div style={{ flex:1,minWidth:200 }}><div style={{ fontWeight:800,fontSize:14,marginBottom:4 }}>{r.title}</div><div style={{ fontSize:12,color:C.textSec,marginBottom:4 }}>{CATEGORIES[r.category]?.label||r.category} → {r.sub}</div><div style={{ fontSize:11,color:C.textMut,fontStyle:"italic" }}>"{r.reason}"</div></div>
                    <div style={{ textAlign:"right" }}><div style={{ display:"inline-block",borderRadius:10,padding:"6px 14px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}` }}>{badge.text}</div><div style={{ fontSize:11,color:C.textMut,marginTop:5 }}>{r.date}</div></div>
                  </div>
                );})}
              </div>
            )}
          </div>
        )}

        {activeView==="library" && (
          <>
            <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>

            {/* Search */}
            <div style={{ position:"relative",marginBottom:20 }}>
              <span style={{ position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:15,color:C.textMut }}>🔍</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search materials, topics, tags..." style={{ width:"100%",padding:"13px 14px 13px 42px",borderRadius:14,border:`1.5px solid ${search?C.amber:C.border}`,background:"#fff",color:C.textPri,fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",boxShadow:C.shadow }}/>
              {search&&<button onClick={()=>setSearch("")} style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:16,color:C.textMut }}>✕</button>}
            </div>

            {/* Category Cards */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12,marginBottom:20 }}>
              <div className="cat-card" onClick={()=>handleCategoryClick("all")} style={{ background:activeCategory==="all"?"linear-gradient(135deg,#f8fafc,#e2e8f0)":"#fff",border:`1.5px solid ${activeCategory==="all"?C.borderHi:C.border}`,borderRadius:14,padding:"16px 18px",cursor:"pointer" }}>
                <div style={{ fontSize:28,marginBottom:8 }}>🌐</div>
                <div style={{ fontWeight:800,fontSize:14,color:activeCategory==="all"?C.textPri:C.textSec }}>All Materials</div>
                <div style={{ fontSize:11,color:C.textMut,marginTop:3 }}>All categories combined</div>
              </div>
              {Object.entries(CATEGORIES).map(([key,cat])=>{
                const isActive = activeCategory===key;
                const count = key==="private"?(materials.filter(m=>m.category==="private").length+ENG_DEPARTMENTS.reduce((a,d)=>a+(ENG_MATERIALS[d.id]||[]).length,0)):materials.filter(m=>m.category===key).length;
                return (
                  <div key={key} className="cat-card" onClick={()=>handleCategoryClick(key)} style={{ background:isActive?cat.gradient:"#fff",border:`1.5px solid ${isActive?cat.color:C.border}`,borderRadius:14,padding:"16px 18px",cursor:"pointer" }}>
                    <div style={{ fontSize:28,marginBottom:8 }}>{cat.icon}</div>
                    <div style={{ fontWeight:800,fontSize:14,color:isActive?cat.color:C.textPri }}>{cat.label}</div>
                    <div style={{ fontSize:11,color:C.textMut,marginTop:3 }}>{count} materials</div>
                    {key==="private"&&isActive&&<div style={{ marginTop:6 }}><span style={{ background:"rgba(255,255,255,0.7)",color:cat.color,borderRadius:5,padding:"2px 7px",fontSize:9,fontWeight:700 }}>🔬 Includes Engineering</span></div>}
                    {key==="higher"&&isActive&&<div style={{ marginTop:6,display:"flex",gap:4 }}><span style={{ background:"rgba(255,255,255,0.7)",color:"#166534",borderRadius:5,padding:"2px 7px",fontSize:9,fontWeight:700 }}>🇮🇳 {indiaPct}%</span><span style={{ background:"rgba(255,255,255,0.7)",color:"#1e40af",borderRadius:5,padding:"2px 7px",fontSize:9,fontWeight:700 }}>✈️ {abroadPct}%</span></div>}
                  </div>
                );
              })}
            </div>

            {/* Private sub-filters */}
            {activeCategory==="private" && (
              <div style={{ marginBottom:20,animation:"slideDown 0.3s ease" }}>
                <div style={{ display:"flex",gap:8,flexWrap:"wrap",marginBottom:activeSub==="engineering"?14:0 }}>
                  <button onClick={()=>{setActiveSub("all");setActiveEngDept(null);}} style={{ padding:"8px 14px",borderRadius:10,border:`1.5px solid ${activeSub==="all"?C.amber:C.border}`,background:activeSub==="all"?"#fffbeb":"transparent",color:activeSub==="all"?C.amberDim:C.textSec,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit" }}>🌐 All Private</button>
                  {PRIVATE_SUBS.map(s=>(
                    <button key={s.id} onClick={()=>{setActiveSub(s.id);if(s.id!=="engineering")setActiveEngDept(null);}} style={{ padding:"8px 14px",borderRadius:10,border:`1.5px solid ${activeSub===s.id?s.color:C.border}`,background:activeSub===s.id?s.bg:"transparent",color:activeSub===s.id?s.color:C.textSec,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",display:"flex",alignItems:"center",gap:5 }}>
                      <span>{s.icon}</span>{s.label}
                    </button>
                  ))}
                </div>
                {/* Engineering dept dropdown */}
                {activeSub==="engineering" && (
                  <div style={{ animation:"slideDown 0.25s ease",background:"linear-gradient(135deg,#fce7f3,#fbcfe8)",border:"1.5px solid rgba(236,72,153,0.3)",borderRadius:14,padding:"14px 16px" }}>
                    <div style={{ fontSize:11,color:"#be185d",fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:1 }}>🔬 Select Engineering Department</div>
                    <EngDeptDropdown activeDept={activeEngDept} onSelect={setActiveEngDept}/>
                    {activeEngDept && (
                      <div style={{ marginTop:12,display:"flex",flexWrap:"wrap",gap:6 }}>
                        {ENG_DEPARTMENTS.map(dept=>(
                          <button key={dept.id} onClick={()=>setActiveEngDept(dept.id)} style={{ padding:"5px 10px",borderRadius:8,border:`1.5px solid ${activeEngDept===dept.id?dept.color:C.border}`,background:activeEngDept===dept.id?dept.bg:"transparent",color:activeEngDept===dept.id?dept.color:C.textMut,cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",transition:"all 0.15s" }}>
                            {dept.icon} {dept.short}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Govt filter */}
            {activeCategory==="government" && <GovtSectorFilter govtFilter={govtFilter} stateFilter={stateFilter} onGovtChange={setGovtFilter} onStateChange={setStateFilter}/>}

            {/* Higher filter */}
            {activeCategory==="higher" && (
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16,flexWrap:"wrap" }}>
                <span style={{ fontSize:13,fontWeight:800,color:"#5b21b6" }}>🌍 Destination:</span>
                {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"]].map(([v,l])=>(
                  <button key={v} onClick={()=>setActiveSub(v)} style={{ padding:"7px 14px",borderRadius:9,border:`1.5px solid ${activeSub===v?"#7c3aed":"#c4b5fd"}`,background:activeSub===v?"#7c3aed":"rgba(255,255,255,0.8)",color:activeSub===v?"#fff":"#5b21b6",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit" }}>{l}</button>
                ))}
                <span style={{ marginLeft:"auto",background:"#f0fdf4",color:"#166534",borderRadius:8,padding:"4px 10px",fontSize:11,fontWeight:800 }}>🇮🇳 {indiaPct}%</span>
                <span style={{ background:"#eff6ff",color:"#1e40af",borderRadius:8,padding:"4px 10px",fontSize:11,fontWeight:800 }}>✈️ {abroadPct}%</span>
              </div>
            )}

            {/* Count */}
            <div style={{ fontSize:12,color:C.textMut,fontWeight:600,marginBottom:14 }}>
              {filtered.length} material{filtered.length!==1?"s":""} found
              {activeEngDept&&` in ${ENG_DEPARTMENTS.find(d=>d.id===activeEngDept)?.name}`}
            </div>

            {/* Materials Grid */}
            {filtered.length===0?(
              <div style={{ textAlign:"center",padding:"60px 0",color:C.textMut }}><div style={{ fontSize:52,marginBottom:12 }}>📭</div><div style={{ fontSize:16,fontWeight:700,color:C.textSec,marginBottom:6 }}>No materials found</div><div style={{ fontSize:13 }}>Try a different filter or search term</div></div>
            ):(
              <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:18 }}>
                {filtered.map((m,i)=>{
                  const cat = CATEGORIES[m.category]||CATEGORIES.private;
                  const locked = m.type==="premium"&&completedCount<3;
                  const crash = CRASH_COURSES[m.id];
                  const engDept = m.engDeptId ? ENG_DEPARTMENTS.find(d=>d.id===m.engDeptId) : null;
                  const accentColor = engDept ? engDept.color : cat.color;
                  const accentBg = engDept ? engDept.bg : cat.bg;
                  const accentBorder = engDept ? engDept.border : cat.border;
                  const topicsDone = (m.topicsList||[]).filter(t=>t.done).length;
                  const topicsTotal = (m.topicsList||[]).length || m.topics || 0;
                  const pct = topicsTotal>0 ? Math.round((topicsDone/topicsTotal)*100) : m.progress||0;
                  return (
                    <div key={`${m.id}-${i}`} className="mat-card" style={{ background:"#fff",borderRadius:16,border:`1.5px solid ${m.bookmarked?C.amber:C.border}`,overflow:"hidden",animation:`cardIn 0.45s ease ${Math.min(i,10)*0.05}s both`,boxShadow:C.shadow,position:"relative" }}>
                      {/* Thumbnail area */}
                      <div style={{ background:engDept?`linear-gradient(135deg,${engDept.bg},${engDept.bg.replace("0.08","0.15")})`:cat.gradient,padding:"22px 0 16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,position:"relative",minHeight:110 }}>
                        <div style={{ width:72,height:72,borderRadius:14,background:accentBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,border:`2px solid ${accentColor}22` }}>{m.emoji||"📄"}</div>
                        {locked&&<div style={{ position:"absolute",top:8,left:8,background:"#92400e",color:"#fef3c7",fontSize:9,fontWeight:700,borderRadius:6,padding:"2px 7px" }}>🔒 PREMIUM</div>}
                        {!locked&&m.type==="premium"&&<div style={{ position:"absolute",top:8,left:8,background:accentColor,color:"#fff",fontSize:9,fontWeight:700,borderRadius:6,padding:"2px 7px" }}>✨ PREMIUM</div>}
                        {engDept&&<div style={{ position:"absolute",bottom:8,left:8,background:engDept.bg,color:engDept.color,fontSize:9,fontWeight:700,borderRadius:5,padding:"2px 7px",border:`1px solid ${engDept.border}` }}>{engDept.icon} {engDept.short}</div>}
                        {m.govtType&&<div style={{ position:"absolute",bottom:8,left:8,background:m.govtType==="central"?"rgba(3,105,161,0.12)":"rgba(5,150,105,0.12)",color:m.govtType==="central"?"#0369a1":"#059669",fontSize:9,fontWeight:700,borderRadius:5,padding:"2px 7px",border:`1px solid ${m.govtType==="central"?"#7dd3fc":"#a7f3d0"}` }}>{m.govtType==="central"?"🏛️ Central":"🗺️ State"}</div>}
                        {m.stateId&&<div style={{ position:"absolute",bottom:8,right:8,background:m.stateId==="ap"?"rgba(220,38,38,0.1)":"rgba(124,58,237,0.1)",color:m.stateId==="ap"?"#dc2626":"#7c3aed",fontSize:9,fontWeight:700,borderRadius:5,padding:"2px 7px" }}>{m.stateId==="ap"?"🌊 AP":"🌺 TS"}</div>}
                        {m.indiaOrAbroad&&<div style={{ position:"absolute",top:8,right:engDept?8:8,background:m.indiaOrAbroad==="India"?"rgba(22,163,74,0.1)":"rgba(30,64,175,0.1)",color:m.indiaOrAbroad==="India"?"#166534":"#1e40af",fontSize:9,fontWeight:700,borderRadius:5,padding:"2px 7px" }}>{m.indiaOrAbroad==="India"?"🇮🇳":"✈️"} {m.indiaOrAbroad}</div>}
                        <button onClick={e=>{e.stopPropagation();toggleBookmark(m.id);}} style={{ position:"absolute",top:8,right:8,background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)",border:`1px solid ${m.bookmarked?C.amber:C.border}`,borderRadius:7,padding:"4px 7px",cursor:"pointer",fontSize:12,backdropFilter:"blur(4px)" }}>{m.bookmarked?"🔖":"🏷️"}</button>
                      </div>
                      <div style={{ padding:"12px 14px 14px" }}>
                        <div style={{ fontWeight:800,fontSize:13,marginBottom:4,color:C.textPri,lineHeight:1.3 }}>{m.title}</div>
                        <div style={{ fontSize:11,color:C.textSec,marginBottom:8,display:"flex",alignItems:"center",gap:5,flexWrap:"wrap" }}>
                          <span style={{ background:accentBg,color:accentColor,borderRadius:5,padding:"2px 7px",fontWeight:700,border:`1px solid ${accentBorder}`,fontSize:10 }}>{engDept?engDept.short:(m.sub||"—").toUpperCase()}</span>
                          <span style={{ color:C.textMut }}>·{topicsTotal}T · {m.pages||0}p</span>
                        </div>
                        {/* Progress bar */}
                        {pct>0&&(
                          <div style={{ marginBottom:10 }}>
                            <div style={{ display:"flex",justifyContent:"space-between",fontSize:10,color:C.textMut,marginBottom:3 }}><span>Progress</span><span style={{ color:accentColor,fontWeight:700 }}>{pct}%</span></div>
                            <div style={{ height:5,background:C.border,borderRadius:8,overflow:"hidden" }}><div style={{ width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${accentColor},${accentColor}cc)`,borderRadius:8,transition:"width 1s ease" }}/></div>
                          </div>
                        )}
                        <div style={{ display:"flex",gap:6,marginBottom:(!locked&&(crash||EPREP_LINKS[m.id]))?8:0 }}>
                          <button className="btn-hover" onClick={()=>handleOpen(m)} style={{ flex:1,background:locked?"#f1f5f9":`linear-gradient(135deg,${accentColor},${accentColor}dd)`,color:locked?C.textMut:"#fff",border:"none",borderRadius:9,padding:"8px 0",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit" }}>{locked?"🔒 Locked":"📖 Open"}</button>
                          <button className="btn-hover" onClick={()=>handleDownload(m)} style={{ background:"#f1f5f9",border:`1px solid ${C.border}`,borderRadius:9,padding:"8px 11px",cursor:"pointer",fontSize:12,color:C.textSec }} title="Download">⬇️</button>
                        </div>
                        {(!locked)&&(crash||EPREP_LINKS[m.id])&&(
                          <div style={{ display:"flex",gap:6 }}>
                            {EPREP_LINKS[m.id]&&<a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:8,padding:"7px 0",fontSize:11,fontWeight:700,color:"#1e40af",textDecoration:"none" }}>🎯 E-Prep</a>}
                            {crash&&<a href={crash.url} target="_blank" rel="noreferrer" style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,background:"linear-gradient(135deg,#fff7ed,#ffedd5)",border:"1.5px solid #fdba74",borderRadius:8,padding:"7px 0",fontSize:11,fontWeight:700,color:"#c2410c",textDecoration:"none" }}>⚡ Crash</a>}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
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

// ─── BULK IMPORT MODAL (Category-specific) ────────────────────────────────────
function BulkImportModal({ importType, onClose, onImport, toast }) {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [parsed, setParsed] = useState(null);
  const [importing, setImporting] = useState(false);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState([]);
  const fileRef = useRef(null);

  const CONFIG = {
    private: { label:"Private Sector", icon:"🏢", color:"#f59e0b", bg:"#fffbeb", grad:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"#fcd34d", fields:CSV_FIELDS_PRIVATE, cat:"private" },
    government: { label:"Government Exams", icon:"🏛️", color:"#10b981", bg:"#f0fdf4", grad:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"#a7f3d0", fields:CSV_FIELDS_GOVT, cat:"government" },
    higher: { label:"Higher Education", icon:"🎓", color:"#6366f1", bg:"#eff6ff", grad:"linear-gradient(135deg,#eff6ff,#ede9fe)", border:"#a5b4fc", fields:CSV_FIELDS_HIGHER, cat:"higher" },
  };
  const cfg = CONFIG[importType];

  const downloadSample = () => {
    const headers = cfg.fields.map(f=>f.name).join(",");
    const samples = {
      private: [
        ["Java Advanced OOP","engineering","cse","free","☕","340","java,oop","Introduction to Java","28","https://example.com/java1.pdf","OOP Concepts","45","","Classes & Objects","35","","Inheritance","52","","Exception Handling","30",""].join(","),
        ["Banking Operations Guide","banking","","free","🏦","210","banking,finance","Banking Basics","22","","RBI Monetary Policy","28","","Credit & Loans","25","","Banking Products","30","","Digital Banking","28",""].join(","),
      ],
      government: [
        ["UPSC History Notes","UPSC","central","","free","📜","600","upsc,history","Ancient History","40","","Medieval History","45","","Modern History","50","https://example.com/history.pdf","Post Independence","55","","Current Affairs","60",""].join(","),
        ["APPSC Group 1 Guide","State PSC","state","ap","free","🌊","550","appsc,group1","AP History","55","","Indian Constitution","48","","Economy","42","","Science & Tech","38","","Current Affairs","35",""].join(","),
        ["TSPSC Group 2 Study","State PSC","state","telangana","premium","🌺","480","tspsc,group2","TS History","55","","Indian Polity","48","","Economy","42","","Science","38","","Current Affairs","35",""].join(","),
      ],
      higher: [
        ["GATE CSE Notes","GATE","India","free","📐","400","gate,cse,engineering","Engineering Mathematics","55","","Digital Logic","45","","Computer Organization","50","","Algorithms","60","","Operating Systems","45",""].join(","),
        ["GRE Vocabulary Master","GRE/GMAT","Abroad","free","🔤","180","gre,vocabulary","Word Lists 1-200","30","","Word Lists 201-400","30","","Word Lists 401-600","30","","Antonyms Practice","25","","Reading Comp","30",""].join(","),
        ["Study Abroad Guide","Study Abroad","Abroad","free","✈️","250","studyabroad,visa","Choosing a Country","35","","University Selection","40","","Application Process","45","","Visa & Documentation","42","","Financial Planning","38",""].join(","),
      ],
    };
    const rows = samples[importType]||[];
    const csv = [headers,...rows].join("\n");
    const blob = new Blob([csv],{type:"text/csv"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `oys_${importType}_bulk_import.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const parseCSV = (text) => {
    const lines = text.split(/\r?\n/).filter(l=>l.trim());
    if (lines.length<2) return {rows:[],errors:["CSV must have header + at least 1 data row"]};
    const headers = lines[0].split(",").map(h=>h.trim().replace(/^"|"$/g,"").toLowerCase().trim());
    const errs = [];
    const rows = [];
    lines.slice(1).forEach((line,lineIdx)=>{
      const vals=[]; let cur="",inQuote=false;
      for(let i=0;i<line.length;i++){
        if(line[i]==='"'){inQuote=!inQuote;}
        else if(line[i]===','&&!inQuote){vals.push(cur.trim());cur="";}
        else{cur+=line[i];}
      }
      vals.push(cur.trim());
      const row={};
      headers.forEach((h,i)=>{row[h]=(vals[i]||"").replace(/^"|"$/g,"").trim();});
      if(!row.title){errs.push(`Row ${lineIdx+2}: Missing 'title'`);return;}
      if(!row.type||!["free","premium"].includes(row.type.toLowerCase())){errs.push(`Row ${lineIdx+2}: 'type' must be free/premium`);return;}
      rows.push(row);
    });
    return {rows,errors:errs};
  };

  const buildTopics = (row) => {
    const topics=[];
    for(let i=1;i<=10;i++){
      const titleKey=`topic_${i}_title`, pagesKey=`topic_${i}_pages`, pdfKey=`topic_${i}_pdf`;
      if(row[titleKey]&&row[titleKey].trim()){
        topics.push({id:i,title:row[titleKey].trim(),pages:parseInt(row[pagesKey])||20,pdfLink:(row[pdfKey]||"").trim(),done:false});
      }
    }
    return topics.length>0?topics:null;
  };

  const handleFile = (f) => {
    if(!f)return;
    if(!f.name.toLowerCase().endsWith(".csv")){toast("Please upload a .csv file","warn");return;}
    setFile(f);
    const reader=new FileReader();
    reader.onload=(e)=>{
      const{rows,errors:errs}=parseCSV(e.target.result);
      setErrors(errs);
      if(rows.length>0){setParsed(rows);setStep(2);if(errs.length>0)toast(`${errs.length} row(s) skipped`,"warn");}
      else{toast("No valid rows found","error");}
    };
    reader.onerror=()=>toast("Failed to read file","error");
    reader.readAsText(f);
  };

  const handleDrop=(e)=>{e.preventDefault();setDragging(false);handleFile(e.dataTransfer.files[0]);};

  const handleImport = () => {
    setImporting(true);
    let p=0;
    const interval=setInterval(()=>{p+=Math.random()*20+8;setProgress(Math.min(p,90));},150);
    setTimeout(()=>{
      clearInterval(interval);setProgress(100);
      const newMaterials=parsed.map((row,i)=>{
        const topicsList=buildTopics(row);
        const sub=(row.sub||"it").toLowerCase().trim();
        const engDeptId=(importType==="private"&&sub==="engineering")?(row.eng_dept_id||"cse").toLowerCase().trim():null;
        const govtType=(importType==="government")?(row.govt_type||"central").toLowerCase().trim():null;
        const stateId=(importType==="government"&&govtType==="state")?(row.state_id||"").toLowerCase().trim()||null:null;
        const indiaOrAbroad=(importType==="higher")?(row.india_abroad||row.indiaOrAbroad||"").trim()||null:null;
        const totalPages=parseInt(row.total_pages)||(topicsList?topicsList.reduce((a,t)=>a+t.pages,0):100);
        return {
          id:Date.now()+i,
          title:row.title||"Untitled",
          category:cfg.cat,
          sub:sub,
          engDeptId,govtType,stateId,indiaOrAbroad,
          type:(row.type||"free").toLowerCase().includes("prem")?"premium":"free",
          emoji:row.emoji||"📄",
          topics:topicsList?topicsList.length:5,
          progress:0,pages:totalPages,downloads:0,bookmarked:false,
          uploadType:null,fileLink:"",
          tags:row.tags?row.tags.split(",").map(t=>t.trim()):[] ,
          topicsList:topicsList||Array.from({length:5},(_,j)=>({id:j+1,title:`Topic ${j+1}`,pages:20,pdfLink:"",done:false})),
          studentId:null,
        };
      });
      _globalMaterials=[..._globalMaterials,...newMaterials];
      onImport(newMaterials);
      setTimeout(()=>{setImporting(false);onClose();},500);
    },2200);
  };

  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:16,animation:"fadeIn 0.25s ease" }}>
      <div style={{ background:"#fff",borderRadius:24,maxWidth:700,width:"100%",maxHeight:"95vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.4s ease" }}>
        {/* Header */}
        <div style={{ background:cfg.grad,borderBottom:`1px solid ${cfg.border}`,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:"24px 24px 0 0" }}>
          <div style={{ display:"flex",alignItems:"center",gap:12 }}>
            <div style={{ width:46,height:46,borderRadius:14,background:`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:`0 4px 14px ${cfg.color}44` }}>📥</div>
            <div>
              <div style={{ fontSize:10,color:cfg.color,fontWeight:800,letterSpacing:2,textTransform:"uppercase" }}>Admin · Bulk Import</div>
              <h2 style={{ margin:0,fontSize:17,fontWeight:900,color:C.textPri }}>{cfg.icon} {cfg.label} — CSV Import</h2>
            </div>
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.8)",border:`1px solid ${cfg.border}`,borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700 }}>✕ Close</button>
        </div>

        <div style={{ padding:"22px 24px" }}>
          {/* Steps */}
          <div style={{ display:"flex",alignItems:"center",gap:0,marginBottom:20 }}>
            {[{n:1,label:"Upload CSV"},{n:2,label:"Preview & Import"}].map((s,i)=>(
              <div key={s.n} style={{ display:"flex",alignItems:"center",flex:i===0?0:1 }}>
                <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                  <div style={{ width:28,height:28,borderRadius:"50%",background:step>=s.n?`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`:"#e2e8f0",color:step>=s.n?"#fff":C.textMut,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,transition:"all 0.3s" }}>{step>s.n?"✓":s.n}</div>
                  <span style={{ fontSize:12,fontWeight:700,color:step>=s.n?cfg.color:C.textMut }}>{s.label}</span>
                </div>
                {i===0&&<div style={{ flex:1,height:2,background:step>1?cfg.color:C.border,margin:"0 12px",borderRadius:2 }}/>}
              </div>
            ))}
          </div>

          {step===1&&(
            <>
              {/* Fields reference */}
              <div style={{ background:cfg.bg,border:`1.5px solid ${cfg.border}`,borderRadius:14,padding:"16px 18px",marginBottom:18 }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap" }}>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12,color:cfg.color,fontWeight:800,marginBottom:8 }}>📋 CSV Fields for {cfg.label} (★ = required):</div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:5,marginBottom:10 }}>
                      {cfg.fields.map(f=>(
                        <span key={f.name} title={f.desc} style={{ background:f.required?cfg.color:"rgba(0,0,0,0.05)",color:f.required?"#fff":C.textSec,borderRadius:6,padding:"3px 8px",fontSize:10,fontWeight:700,border:`1px solid ${f.required?cfg.color:C.border}`,cursor:"default" }}>{f.name}{f.required&&" ★"}</span>
                      ))}
                    </div>
                    <div style={{ fontSize:11,color:cfg.color,lineHeight:1.7 }}>
                      <strong>📖 Sequential Learning:</strong> Topics unlock one by one — students must complete each topic (all pages) before accessing the next.
                      {importType==="private"&&<><br/><strong>Engineering sub:</strong> set sub=<code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>engineering</code>, eng_dept_id=<code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>cse/ece/mech...</code></>}
                      {importType==="government"&&<><br/><strong>govt_type:</strong> <code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>central</code> or <code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>state</code> → state_id: ap / telangana / other</>}
                      {importType==="higher"&&<><br/><strong>india_abroad:</strong> <code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>India</code> / <code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>Abroad</code> / <code style={{ background:"rgba(0,0,0,0.06)",padding:"1px 4px",borderRadius:3 }}>Both</code></>}
                    </div>
                  </div>
                  <button onClick={downloadSample} style={{ background:`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`,color:"#fff",border:"none",borderRadius:12,padding:"10px 16px",cursor:"pointer",fontWeight:800,fontSize:12,fontFamily:"inherit",boxShadow:`0 4px 14px ${cfg.color}44`,display:"flex",alignItems:"center",gap:6,flexShrink:0,whiteSpace:"nowrap" }}>⬇️ Sample CSV</button>
                </div>
              </div>
              {/* Drop zone */}
              <div onDragOver={e=>{e.preventDefault();setDragging(true);}} onDragLeave={()=>setDragging(false)} onDrop={handleDrop} onClick={()=>fileRef.current?.click()} style={{ border:`2.5px dashed ${dragging?cfg.color:"#fbbf24"}`,borderRadius:18,padding:"48px 20px",textAlign:"center",cursor:"pointer",background:dragging?cfg.bg:"linear-gradient(135deg,#fffbeb,#fef3c7)",transition:"all 0.3s ease" }}>
                <div style={{ fontSize:48,marginBottom:12,animation:"float 3s ease-in-out infinite" }}>{dragging?"📂":"☁️"}</div>
                <div style={{ fontSize:16,fontWeight:800,color:dragging?cfg.color:"#92400e",marginBottom:6 }}>{dragging?"Release to upload!":"Drop your CSV file here"}</div>
                <div style={{ fontSize:12,color:"#b45309",fontWeight:600,marginBottom:12 }}>Drag & drop or click to browse</div>
                <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.8)",border:"1px solid #fde68a",borderRadius:8,padding:"6px 14px",fontSize:11,color:C.textMut,fontWeight:700 }}>📎 .csv files only</div>
                <input ref={fileRef} type="file" accept=".csv" style={{ display:"none" }} onChange={e=>handleFile(e.target.files[0])}/>
              </div>
            </>
          )}

          {step===2&&parsed&&(
            <>
              <div style={{ background:"#f0fdf4",border:"1.5px solid #a7f3d0",borderRadius:14,padding:"14px 18px",marginBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10 }}>
                <div style={{ display:"flex",alignItems:"center",gap:12 }}>
                  <div style={{ width:40,height:40,borderRadius:10,background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff" }}>✅</div>
                  <div><div style={{ fontWeight:800,fontSize:14,color:"#065f46" }}>Ready to import {parsed.length} material{parsed.length!==1?"s":""}</div><div style={{ fontSize:11,color:"#059669",fontWeight:600 }}>From: {file?.name}{errors.length>0?` · ${errors.length} rows skipped`:""}</div></div>
                </div>
                <button onClick={()=>{setStep(1);setFile(null);setParsed(null);setErrors([]);setProgress(0);}} style={{ background:"rgba(255,255,255,0.8)",border:"1px solid #a7f3d0",borderRadius:9,padding:"7px 14px",cursor:"pointer",fontSize:12,fontWeight:700,color:"#065f46",fontFamily:"inherit" }}>🔄 Re-upload</button>
              </div>
              {errors.length>0&&<div style={{ background:"#fef2f2",border:"1.5px solid #fca5a5",borderRadius:12,padding:"12px 16px",marginBottom:14 }}><div style={{ fontWeight:800,fontSize:12,color:"#991b1b",marginBottom:6 }}>⚠️ {errors.length} row(s) skipped:</div>{errors.map((e,i)=><div key={i} style={{ fontSize:11,color:"#ef4444",fontWeight:600 }}>• {e}</div>)}</div>}

              {/* Preview */}
              <div style={{ border:`1px solid ${C.border}`,borderRadius:14,overflow:"hidden",marginBottom:16,maxHeight:300,overflowY:"auto" }}>
                <table style={{ width:"100%",borderCollapse:"collapse",fontSize:12 }}>
                  <thead>
                    <tr style={{ background:`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`,position:"sticky",top:0 }}>
                      {["#","Title","Sub/Dept","Type","Pages","Topics","PDF Links"].map(h=>(
                        <th key={h} style={{ padding:"10px 12px",textAlign:"left",color:"rgba(255,255,255,0.9)",fontWeight:700,fontSize:10,textTransform:"uppercase",whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parsed.map((row,i)=>{
                      const topics=buildTopics(row);
                      const pdfCount=topics?topics.filter(t=>t.pdfLink).length:0;
                      return(
                        <tr key={i} style={{ borderTop:`1px solid ${C.border}`,background:i%2===0?"#fff":"#f8fafc" }}>
                          <td style={{ padding:"9px 12px",color:C.textMut,fontWeight:700 }}>{i+1}</td>
                          <td style={{ padding:"9px 12px",fontWeight:700,color:C.textPri,maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{row.emoji||"📄"} {row.title||"—"}</td>
                          <td style={{ padding:"9px 12px",color:C.textSec,fontWeight:600,fontSize:11 }}>{row.sub||row.eng_dept_id||"—"}</td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:(row.type||"").toLowerCase().includes("prem")?"#fffbeb":"#f0fdf4",color:(row.type||"").toLowerCase().includes("prem")?"#92400e":"#166534",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700 }}>{(row.type||"free").toLowerCase().includes("prem")?"✨ Premium":"🆓 Free"}</span></td>
                          <td style={{ padding:"9px 12px",color:C.textSec,fontWeight:600 }}>{row.total_pages||"auto"}</td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:topics?"#f0fdf4":"#f8fafc",color:topics?"#166534":C.textMut,borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700 }}>{topics?`✅ ${topics.length}`:"auto 5"}</span></td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:pdfCount>0?"#eff6ff":"#f8fafc",color:pdfCount>0?"#1e40af":C.textMut,borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700 }}>{pdfCount>0?`📄 ${pdfCount}`:"None"}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {importing&&(
                <div style={{ background:"#eff6ff",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 18px",marginBottom:14 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:10 }}>
                    <div style={{ width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,animation:"spin 1s linear infinite" }}>⚡</div>
                    <div><div style={{ fontWeight:800,fontSize:13,color:"#1e40af" }}>Importing {Math.round(progress)}%</div><div style={{ fontSize:11,color:"#3b82f6" }}>Processing {parsed.length} records with topic structure...</div></div>
                  </div>
                  <div style={{ height:8,background:"#dbeafe",borderRadius:8,overflow:"hidden" }}><div style={{ width:`${progress}%`,height:"100%",background:`linear-gradient(90deg,${cfg.color},#6366f1)`,borderRadius:8,transition:"width 0.3s ease" }}/></div>
                </div>
              )}
            </>
          )}

          <div style={{ display:"flex",gap:10,marginTop:4 }}>
            <button onClick={onClose} style={{ flex:1,background:"#f8fafc",color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit" }}>Cancel</button>
            {step===2&&parsed&&parsed.length>0&&(
              <button onClick={handleImport} disabled={importing} style={{ flex:2,background:importing?"#94a3b8":`linear-gradient(135deg,${cfg.color},${cfg.color}cc)`,color:"#fff",border:"none",borderRadius:12,padding:"13px 0",cursor:importing?"not-allowed":"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:importing?"none":`0 4px 18px ${cfg.color}44`,display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
                {importing?<>⏳ Importing...</>:<>📥 Import {parsed.length} Material{parsed.length!==1?"s":""}</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ADD/EDIT MATERIAL MODAL ──────────────────────────────────────────────────
function AddMaterialModal({ item, students, onClose, onSave }) {
  const [form, setForm] = useState({
    title:item?.title||"", category:item?.category||"private", sub:item?.sub||"it", type:item?.type||"free",
    pages:item?.pages||"", topics:item?.topics||"", emoji:item?.emoji||"📄",
    fileLink:item?.fileLink||"", studentId:item?.studentId||"",
    indiaOrAbroad:item?.indiaOrAbroad||"", govtType:item?.govtType||"", stateId:item?.stateId||"",
    engDeptId:item?.engDeptId||"", tags:item?.tags?.join(",")||""
  });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  const EMOJIS = ["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","📝","🔷","🎯","🧮","🔐","🌊","🌺","💻","🖥️","📡","⚡","⚙️","🏗️","🧪","✈️","🚗","🧬","🔩"];
  const SUBS = { private:PRIVATE_SUBS.map(s=>s.id), government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"], higher:HIGHER_SUBS };

  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:16,backdropFilter:"blur(4px)",overflowY:"auto" }}>
      <div style={{ background:"#fff",borderRadius:20,maxWidth:560,width:"100%",boxShadow:C.shadowLg,maxHeight:"95vh",overflowY:"auto",animation:"cardIn 0.3s ease",margin:"auto" }}>
        <div style={{ padding:"20px 24px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <h2 style={{ margin:0,color:C.amber,fontSize:16,fontWeight:900 }}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2>
          <button onClick={onClose} style={{ background:"#f8fafc",border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer" }}>✕</button>
        </div>
        <div style={{ padding:"20px 24px",display:"flex",flexDirection:"column",gap:14 }}>
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Title *</label><input value={form.title} onChange={e=>set("title",e.target.value)} placeholder="Material title" style={{ width:"100%",padding:"10px 13px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit" }}/></div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e=>{set("category",e.target.value);set("sub",SUBS[e.target.value]?.[0]||"");set("govtType","");set("stateId","");set("engDeptId","");set("indiaOrAbroad","");}} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select></div>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Type</label><select value={form.type} onChange={e=>set("type",e.target.value)} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}><option value="free">🆓 Free</option><option value="premium">✨ Premium</option></select></div>
          </div>
          {/* Sub */}
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Sub-category</label><select value={form.sub} onChange={e=>{set("sub",e.target.value);if(e.target.value!=="engineering")set("engDeptId","");}} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>{(SUBS[form.category]||[]).map(s=><option key={s} value={s}>{s}</option>)}</select></div>
          {/* Engineering dept */}
          {form.category==="private"&&form.sub==="engineering"&&(
            <div style={{ background:"linear-gradient(135deg,#fce7f3,#fbcfe8)",border:"1.5px solid rgba(236,72,153,0.3)",borderRadius:12,padding:"14px 16px" }}>
              <label style={{ fontSize:11,fontWeight:800,color:"#be185d",display:"block",marginBottom:8,textTransform:"uppercase" }}>🔬 Engineering Department</label>
              <select value={form.engDeptId} onChange={e=>set("engDeptId",e.target.value)} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:"1.5px solid rgba(236,72,153,0.3)",background:"rgba(255,255,255,0.8)",color:"#be185d",fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>
                <option value="">Select Department</option>
                {ENG_DEPARTMENTS.map(d=><option key={d.id} value={d.id}>{d.icon} {d.name} ({d.short})</option>)}
              </select>
            </div>
          )}
          {/* Govt */}
          {form.category==="government"&&(
            <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",border:"1.5px solid #a7f3d0",borderRadius:12,padding:"14px 16px" }}>
              <label style={{ fontSize:11,fontWeight:800,color:"#065f46",display:"block",marginBottom:8,textTransform:"uppercase" }}>🏛️ Government Type</label>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
                <select value={form.govtType} onChange={e=>{set("govtType",e.target.value);if(e.target.value!=="state")set("stateId","");}} style={{ padding:"9px 11px",borderRadius:10,border:"1.5px solid #a7f3d0",background:"rgba(255,255,255,0.8)",color:"#065f46",fontSize:12,cursor:"pointer",fontFamily:"inherit" }}>
                  <option value="">Select type</option><option value="central">🏛️ Central</option><option value="state">🗺️ State</option>
                </select>
                {form.govtType==="state"&&<select value={form.stateId} onChange={e=>set("stateId",e.target.value)} style={{ padding:"9px 11px",borderRadius:10,border:"1.5px solid #a7f3d0",background:"rgba(255,255,255,0.8)",color:"#065f46",fontSize:12,cursor:"pointer",fontFamily:"inherit" }}>
                  <option value="">Select state</option><option value="ap">🌊 Andhra Pradesh</option><option value="telangana">🌺 Telangana</option><option value="other">🗾 Other</option>
                </select>}
              </div>
            </div>
          )}
          {/* Higher */}
          {form.category==="higher"&&<div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>🌍 India / Abroad</label><select value={form.indiaOrAbroad} onChange={e=>set("indiaOrAbroad",e.target.value)} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}><option value="">Not specified</option><option value="India">🇮🇳 India</option><option value="Abroad">✈️ Abroad</option><option value="Both">🌐 Both</option></select></div>}
          {/* Pages Topics */}
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Pages</label><input value={form.pages} onChange={e=>set("pages",e.target.value)} type="number" placeholder="300" style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit" }}/></div>
            <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Topics</label><input value={form.topics} onChange={e=>set("topics",e.target.value)} type="number" placeholder="10" style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit" }}/></div>
          </div>
          {/* Tags */}
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Tags (comma-separated)</label><input value={form.tags} onChange={e=>set("tags",e.target.value)} placeholder="java,oop,backend" style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit" }}/></div>
          {/* Emoji */}
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase" }}>Icon</label><div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>{EMOJIS.map(e=>(<button key={e} onClick={()=>set("emoji",e)} style={{ width:38,height:38,fontSize:16,borderRadius:9,border:`2px solid ${form.emoji===e?C.amber:C.border}`,background:form.emoji===e?"#fffbeb":"#f8fafc",cursor:"pointer" }}>{e}</button>))}</div></div>
          {/* Assign */}
          <div><label style={{ fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase" }}>Assign to Student</label><select value={form.studentId} onChange={e=>set("studentId",e.target.value)} style={{ width:"100%",padding:"9px 11px",borderRadius:10,border:`1.5px solid ${C.border}`,background:"#f8fafc",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}><option value="">All Students (Public)</option>{students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
          <div style={{ display:"flex",gap:10 }}>
            <button onClick={onClose} style={{ flex:1,background:"#f8fafc",color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit" }}>Cancel</button>
            <button onClick={()=>onSave({...form,pages:parseInt(form.pages)||100,topics:parseInt(form.topics)||5,tags:form.tags?form.tags.split(",").map(t=>t.trim()).filter(Boolean):[]})} style={{ flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:14 }}>{item?"💾 Update":"✅ Add Material"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
function AdminDashboard({ onBack }) {
  const [materials, setMaterials] = useState(()=>_globalMaterials.map(m=>({...m})));
  const [requests, setRequests] = useState(()=>[..._globalRequests]);
  const [students] = useState(()=>_globalStudents.map(s=>({...s})));
  const [activeTab, setActiveTab] = useState("overview");
  const [filterCat, setFilterCat] = useState("all");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAdd] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(null); // "private"|"government"|"higher"|null
  const [editItem, setEditItem] = useState(null);
  const [deleteConfirm, setDelConf] = useState(null);
  const [animIn, setAnimIn] = useState(false);
  const { toasts, add:toast } = useToast();

  useEffect(()=>{setTimeout(()=>setAnimIn(true),80);const t=setInterval(()=>setRequests([..._globalRequests]),2000);return()=>clearInterval(t);}, []);

  const handleBulkImport = (newMats) => {
    const updated=[...materials,...newMats];
    setMaterials(updated);
    _globalMaterials=updated;
    toast(`✅ ${newMats.length} material${newMats.length!==1?"s":""} imported!`,"success");
  };

  const handleDelete = (id) => {
    const updated=materials.filter(m=>m.id!==id);
    setMaterials(updated);_globalMaterials=updated;
    setDelConf(null);toast("Material deleted","error");
  };

  const handleSave = (data) => {
    if(editItem){
      const updated=materials.map(m=>m.id===editItem.id?{...m,...data}:m);
      setMaterials(updated);_globalMaterials=updated;toast("Material updated!","success");
    } else {
      const newM={...data,id:Date.now(),progress:0,bookmarked:false,downloads:0,emoji:data.emoji||"📄",topicsList:Array.from({length:data.topics||5},(_,i)=>({id:i+1,title:`Topic ${i+1}`,pages:Math.floor((data.pages||100)/(data.topics||5)),pdfLink:"",done:false}))};
      const updated=[...materials,newM];setMaterials(updated);_globalMaterials=updated;toast("Material added!","success");
    }
    setShowAdd(false);setEditItem(null);
  };

  const approveRequest=(req,studentOnly)=>{
    const newM={id:Date.now(),title:req.title,category:req.category,sub:req.sub,type:"free",emoji:"📄",topics:5,progress:0,pages:100,downloads:0,bookmarked:false,uploadType:null,fileLink:"",indiaOrAbroad:null,govtType:null,stateId:null,engDeptId:null,tags:[],topicsList:Array.from({length:5},(_,i)=>({id:i+1,title:`Topic ${i+1}`,pages:20,pdfLink:"",done:false})),studentId:studentOnly?req.studentId:null};
    const updatedM=[...materials,newM];setMaterials(updatedM);_globalMaterials=updatedM;
    const updatedR=_globalRequests.map(r=>r.id===req.id?{...r,status:"approved"}:r);
    _globalRequests=updatedR;setRequests([...updatedR]);
    toast(`✅ "${req.title}" approved!`,"success");
  };

  const markAddingSoon=(id)=>{
    const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r);
    _globalRequests=updatedR;setRequests([...updatedR]);toast("📅 Student notified!","info");
  };

  const filtered=materials.filter(m=>{
    const q=search.toLowerCase();
    return(m.title.toLowerCase().includes(q))&&(filterCat==="all"||m.category===filterCat);
  });
  const pendingReqs=requests.filter(r=>r.status==="pending");
  const stats={total:materials.length,free:materials.filter(m=>m.type==="free").length,premium:materials.filter(m=>m.type==="premium").length,downloads:materials.reduce((a,m)=>a+m.downloads,0),students:students.length,pending:pendingReqs.length,engineering:ENG_DEPARTMENTS.reduce((a,d)=>a+(ENG_MATERIALS[d.id]||[]).length,0)+materials.filter(m=>m.sub==="engineering").length,govt:materials.filter(m=>m.category==="government").length};
  const TABS=[{id:"overview",label:"📊 Overview"},{id:"materials",label:"📚 Materials"},{id:"requests",label:`📨 Requests${stats.pending>0?` (${stats.pending})`:""}`,},{id:"students",label:"👥 Students"},{id:"categories",label:"🏷️ Categories"}];
  const getStatusBadge=s=>s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

  // Bulk import buttons config
  const BULK_BTNS = [
    { type:"private", label:"Private Sector", icon:"🏢", color:C.amber, glow:"rgba(245,158,11,0.4)" },
    { type:"government", label:"Government", icon:"🏛️", color:"#10b981", glow:"rgba(16,185,129,0.4)" },
    { type:"higher", label:"Higher Education", icon:"🎓", color:"#6366f1", glow:"rgba(99,102,241,0.4)" },
  ];

  return (
    <div style={{ minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif",display:"flex" }}>
      <style>{GLOBAL_CSS}</style>
      <ToastContainer toasts={toasts}/>

      {/* Sidebar */}
      <div style={{ position:"fixed",left:0,top:0,bottom:0,width:220,background:"#fff",borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",zIndex:100,boxShadow:"2px 0 12px rgba(15,23,42,0.06)",overflowY:"auto" }}>
        <div style={{ padding:"20px 16px",borderBottom:`1px solid ${C.border}` }}>
          <div style={{ fontSize:10,color:C.textMut,fontWeight:800,marginBottom:3,letterSpacing:1.5,textTransform:"uppercase" }}>OYS E-LIBRARY</div>
          <div style={{ fontSize:17,fontWeight:900,color:C.amber }}>Admin Panel</div>
        </div>
        <nav style={{ padding:"14px 10px",flex:1 }}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{ width:"100%",textAlign:"left",padding:"10px 13px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:3,background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent",color:activeTab===t.id?C.amberDim:C.textSec,fontWeight:activeTab===t.id?800:600,fontSize:13,borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`,fontFamily:"inherit",transition:"all 0.15s" }}>{t.label}</button>
          ))}
        </nav>
        <div style={{ padding:"14px 10px",borderTop:`1px solid ${C.border}` }}>
          <button onClick={onBack} style={{ width:"100%",padding:"10px 13px",borderRadius:10,background:"#fef2f2",border:"1.5px solid #fca5a5",color:"#991b1b",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit" }}>← Back to Home</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ marginLeft:220,flex:1,padding:"24px 28px",opacity:animIn?1:0,transition:"opacity 0.5s ease",minWidth:0 }}>

        {activeTab==="overview"&&(
          <div>
            <h1 style={{ fontSize:22,fontWeight:900,marginBottom:24 }}>Dashboard Overview</h1>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:14,marginBottom:28 }}>
              {[{label:"Total Materials",value:stats.total,icon:"📚",color:C.amber,bg:"#fffbeb"},{label:"Free",value:stats.free,icon:"🆓",color:C.sage,bg:"#f0fdf4"},{label:"Premium",value:stats.premium,icon:"✨",color:C.indigo,bg:"#eff6ff"},{label:"Engineering",value:stats.engineering,icon:"🔬",color:"#ec4899",bg:"#fce7f3"},{label:"Govt Exams",value:stats.govt,icon:"🏛️",color:"#10b981",bg:"#f0fdf4"},{label:"Pending",value:stats.pending,icon:"⏳",color:C.amberDim,bg:"#fffbeb"}].map((s,i)=>(
                <div key={i} style={{ background:"#fff",borderRadius:14,border:`1px solid ${C.border}`,padding:"18px 20px",boxShadow:C.shadow,animation:`cardIn 0.4s ease ${i*0.07}s both`,cursor:"default" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}}>
                  <div style={{ background:s.bg,borderRadius:9,padding:"7px 9px",fontSize:18,display:"inline-block",marginBottom:10 }}>{s.icon}</div>
                  <div style={{ fontSize:26,fontWeight:900,color:s.color }}>{s.value}</div>
                  <div style={{ fontSize:11,color:C.textMut,marginTop:3,fontWeight:600 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Engineering breakdown */}
            <div style={{ background:"#fff",border:`1px solid ${C.border}`,borderRadius:16,padding:"20px 24px",marginBottom:22,boxShadow:C.shadow }}>
              <div style={{ fontSize:13,fontWeight:800,color:C.textSec,marginBottom:16 }}>🔬 Engineering Departments (Private Sector)</div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(110px,1fr))",gap:8 }}>
                {ENG_DEPARTMENTS.slice(0,10).map(dept=>{const count=(ENG_MATERIALS[dept.id]||[]).length+materials.filter(m=>m.engDeptId===dept.id).length;return(
                  <div key={dept.id} style={{ background:dept.bg,border:`1px solid ${dept.border}`,borderRadius:10,padding:"10px 12px",textAlign:"center" }}>
                    <div style={{ fontSize:20,marginBottom:4 }}>{dept.icon}</div>
                    <div style={{ fontSize:11,fontWeight:800,color:dept.color }}>{dept.short}</div>
                    <div style={{ fontSize:10,color:C.textMut,fontWeight:600 }}>{count} materials</div>
                  </div>
                );})}
              </div>
            </div>
            {pendingReqs.length>0&&(<><h2 style={{ fontSize:15,fontWeight:800,marginBottom:12,color:C.textSec }}>⏳ Pending Requests</h2>{pendingReqs.slice(0,3).map(r=>(<div key={r.id} style={{ background:"#fff",border:"1.5px solid #fcd34d",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",gap:14,boxShadow:C.shadow,marginBottom:8,flexWrap:"wrap" }}><div style={{ flex:1 }}><span style={{ fontWeight:800,color:C.amber }}>{r.title}</span><span style={{ color:C.textMut,fontSize:12,marginLeft:8 }}>by {r.studentName}</span></div><button onClick={()=>setActiveTab("requests")} style={{ background:"#fffbeb",border:"1.5px solid #fcd34d",color:"#92400e",borderRadius:9,padding:"7px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit" }}>Review →</button></div>))}</>)}
          </div>
        )}

        {activeTab==="materials"&&(
          <div>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10 }}>
              <h1 style={{ fontSize:20,fontWeight:900,margin:0 }}>Manage Materials</h1>
              <div style={{ display:"flex",gap:8,flexWrap:"wrap",alignItems:"center" }}>
                {/* THREE BULK IMPORT BUTTONS */}
                {BULK_BTNS.map(b=>(
                  <button key={b.type} className="btn-hover" onClick={()=>setShowBulkImport(b.type)} style={{ background:`linear-gradient(135deg,${b.color},${b.color}cc)`,color:"#fff",border:"none",borderRadius:10,padding:"9px 14px",fontWeight:800,fontSize:11,cursor:"pointer",fontFamily:"inherit",boxShadow:`0 4px 14px ${b.glow}`,display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap" }}>
                    📥 {b.icon} {b.label}
                  </button>
                ))}
                <button className="btn-hover" onClick={()=>{setEditItem(null);setShowAdd(true);}} style={{ background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 16px",fontWeight:800,fontSize:12,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)",whiteSpace:"nowrap" }}>+ Add Material</button>
              </div>
            </div>
            <div style={{ display:"flex",gap:10,marginBottom:16,flexWrap:"wrap" }}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search..." style={{ flex:1,minWidth:180,padding:"10px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:"#fff",color:C.textPri,fontSize:13,outline:"none",fontFamily:"inherit" }}/>
              <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={{ padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:"#fff",color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit" }}>
                <option value="all">All Categories</option>
                {Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div style={{ background:"#fff",borderRadius:14,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow,overflowX:"auto" }}>
              <table style={{ width:"100%",borderCollapse:"collapse",minWidth:700 }}>
                <thead>
                  <tr style={{ background:"#f8fafc" }}>
                    {["Material","Category","Sub/Dept","Type","Topics","Downloads","Actions"].map(h=>(
                      <th key={h} style={{ padding:"12px 14px",textAlign:"left",fontSize:11,fontWeight:800,color:C.textMut,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m,i)=>{
                    const cat=CATEGORIES[m.category]||CATEGORIES.private;
                    const engDept=m.engDeptId?ENG_DEPARTMENTS.find(d=>d.id===m.engDeptId):null;
                    return(
                      <tr key={m.id} className="row-hover" style={{ borderTop:`1px solid ${C.border}`,animation:`cardIn 0.3s ease ${i*0.02}s both` }}>
                        <td style={{ padding:"12px 14px" }}><div style={{ display:"flex",alignItems:"center",gap:10 }}><div style={{ width:36,height:36,borderRadius:9,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17 }}>{m.emoji}</div><div style={{ fontWeight:700,fontSize:13 }}>{m.title}</div></div></td>
                        <td style={{ padding:"12px 14px" }}><span style={{ background:cat.bg,color:cat.color,borderRadius:6,padding:"3px 9px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
                        <td style={{ padding:"12px 14px",color:C.textSec,fontSize:12,fontWeight:600 }}>{engDept?`${engDept.icon} ${engDept.short}`:(m.sub||"—").toUpperCase()}</td>
                        <td style={{ padding:"12px 14px" }}><span style={{ background:m.type==="premium"?"#fffbeb":"#f0fdf4",color:m.type==="premium"?"#92400e":"#166534",borderRadius:6,padding:"3px 9px",fontSize:11,fontWeight:700 }}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
                        <td style={{ padding:"12px 14px",color:C.textSec,fontSize:12,fontWeight:600 }}>{(m.topicsList||[]).length||m.topics||0}</td>
                        <td style={{ padding:"12px 14px",color:C.textSec,fontSize:12,fontWeight:700 }}>{(m.downloads||0).toLocaleString()}</td>
                        <td style={{ padding:"12px 14px" }}><div style={{ display:"flex",gap:5 }}><button onClick={()=>{setEditItem(m);setShowAdd(true);}} style={{ background:"#fffbeb",color:"#92400e",border:"none",borderRadius:7,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit" }}>✏️</button><button onClick={()=>setDelConf(m.id)} style={{ background:"#fef2f2",color:"#991b1b",border:"none",borderRadius:7,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit" }}>🗑</button></div></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filtered.length===0&&<div style={{ textAlign:"center",padding:40,color:C.textMut }}>No materials found</div>}
            </div>
          </div>
        )}

        {activeTab==="requests"&&(
          <div>
            <h1 style={{ fontSize:20,fontWeight:900,marginBottom:20 }}>Material Requests</h1>
            {requests.length===0?<div style={{ textAlign:"center",padding:"60px 0",color:C.textMut }}><div style={{ fontSize:44,marginBottom:10 }}>📭</div><div style={{ fontWeight:600 }}>No requests yet</div></div>:(
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                {requests.map((r,i)=>{
                  const cat=CATEGORIES[r.category];const badge=getStatusBadge(r.status);
                  return(
                    <div key={r.id} style={{ background:"#fff",border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:14,padding:"18px 22px",boxShadow:C.shadow,animation:`cardIn 0.35s ease ${i*0.05}s both` }}>
                      <div style={{ display:"flex",gap:14,alignItems:"flex-start",flexWrap:"wrap" }}>
                        <div style={{ width:42,height:42,borderRadius:"50%",background:"#fffbeb",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:13,flexShrink:0 }}>??</div>
                        <div style={{ flex:1,minWidth:200 }}>
                          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap" }}>
                            <span style={{ fontWeight:800,fontSize:14 }}>{r.title}</span>
                            {cat&&<span style={{ background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}` }}>{cat.icon} {r.sub}</span>}
                          </div>
                          <div style={{ fontSize:12,color:C.textSec,marginBottom:6 }}>By <strong>{r.studentName}</strong> · {r.date}</div>
                          <div style={{ fontSize:12,color:C.textMut,fontStyle:"italic",background:"#f8fafc",padding:"8px 12px",borderRadius:9,borderLeft:"3px solid #fcd34d" }}>"{r.reason}"</div>
                        </div>
                        <div style={{ textAlign:"right",flexShrink:0 }}>
                          {r.status==="pending"?(
                            <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                              <button onClick={()=>approveRequest(r,true)} style={{ background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:9,padding:"8px 12px",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap" }}>✅ Approve for student</button>
                              <button onClick={()=>approveRequest(r,false)} style={{ background:"#fffbeb",color:"#92400e",border:"1.5px solid #fcd34d",borderRadius:9,padding:"8px 12px",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap" }}>🌐 Approve for all</button>
                              <button onClick={()=>markAddingSoon(r.id)} style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 12px",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap" }}>📅 Adding Soon</button>
                            </div>
                          ):<div style={{ display:"inline-block",borderRadius:9,padding:"7px 14px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}` }}>{badge.text}</div>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab==="students"&&(
          <div>
            <h1 style={{ fontSize:20,fontWeight:900,marginBottom:20 }}>Student Management</h1>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:16 }}>
              {students.map((s,i)=>(
                <div key={s.id} style={{ background:"#fff",border:`1px solid ${C.border}`,borderRadius:14,padding:"20px 22px",animation:`cardIn 0.35s ease ${i*0.07}s both`,boxShadow:C.shadow,transition:"all 0.2s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.amber;e.currentTarget.style.transform="translateY(-3px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";}}>
                  <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:14 }}>
                    <div style={{ width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:14,flexShrink:0 }}>{s.avatar}</div>
                    <div><div style={{ fontWeight:800,fontSize:14 }}>{s.name}</div><div style={{ fontSize:12,color:C.textSec }}>{s.email}</div></div>
                  </div>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8 }}>
                    {[["✅",s.completed,"Completed"],["📚",materials.filter(m=>m.studentId===s.id).length,"Personal"]].map(([icon,val,lbl])=>(
                      <div key={lbl} style={{ background:"#f8fafc",borderRadius:10,padding:"10px 0",textAlign:"center" }}>
                        <div style={{ fontSize:16,marginBottom:2 }}>{icon}</div>
                        <div style={{ fontSize:18,fontWeight:900,color:C.amber }}>{val}</div>
                        <div style={{ fontSize:10,color:C.textMut,fontWeight:600 }}>{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==="categories"&&(
          <div>
            <h1 style={{ fontSize:20,fontWeight:900,marginBottom:20 }}>Category Management</h1>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18 }}>
              {Object.entries(CATEGORIES).map(([key,cat])=>(
                <div key={key} style={{ background:"#fff",borderRadius:14,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow }}>
                  <div style={{ background:cat.gradient,borderBottom:`1px solid ${cat.border}`,padding:"18px 20px",display:"flex",alignItems:"center",gap:10 }}>
                    <span style={{ fontSize:26 }}>{cat.icon}</span>
                    <div><div style={{ color:cat.color,fontWeight:800,fontSize:14 }}>{cat.label}</div><div style={{ color:C.textSec,fontSize:12 }}>{materials.filter(m=>m.category===key).length} materials</div></div>
                  </div>
                  <div style={{ padding:16 }}>
                    {key==="private"?(
                      <div>
                        <div style={{ fontSize:11,fontWeight:800,color:C.textMut,marginBottom:8,textTransform:"uppercase" }}>Sub-categories</div>
                        <div style={{ display:"flex",flexWrap:"wrap",gap:5,marginBottom:10 }}>
                          {PRIVATE_SUBS.filter(s=>s.id!=="engineering").map(s=><span key={s.id} style={{ background:s.bg,color:s.color,borderRadius:7,padding:"4px 9px",fontSize:11,border:`1px solid ${s.border}`,fontWeight:700 }}>{s.icon} {s.label}</span>)}
                        </div>
                        <div style={{ background:"linear-gradient(135deg,#fce7f3,#fbcfe8)",border:"1.5px solid rgba(236,72,153,0.3)",borderRadius:10,padding:"12px 14px" }}>
                          <div style={{ fontSize:11,fontWeight:800,color:"#be185d",marginBottom:8 }}>🔬 Engineering Departments ({ENG_DEPARTMENTS.length} total)</div>
                          <div style={{ display:"flex",flexWrap:"wrap",gap:4 }}>
                            {ENG_DEPARTMENTS.map(d=><span key={d.id} style={{ background:d.bg,color:d.color,borderRadius:6,padding:"3px 8px",fontSize:10,border:`1px solid ${d.border}`,fontWeight:700 }}>{d.icon} {d.short}</span>)}
                          </div>
                        </div>
                      </div>
                    ):key==="government"?(
                      <div>
                        <div style={{ fontSize:11,fontWeight:800,color:C.textMut,marginBottom:8,textTransform:"uppercase" }}>Structure</div>
                        <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                          <div style={{ background:"#e0f2fe",border:"1px solid #7dd3fc",borderRadius:8,padding:"8px 12px",fontSize:12,fontWeight:700,color:"#0369a1" }}>🏛️ Central: {materials.filter(m=>m.govtType==="central").length} materials</div>
                          <div style={{ background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:8,padding:"8px 12px",fontSize:12,fontWeight:700,color:"#dc2626" }}>🌊 Andhra Pradesh: {materials.filter(m=>m.stateId==="ap").length} materials</div>
                          <div style={{ background:"#ede9fe",border:"1px solid #c4b5fd",borderRadius:8,padding:"8px 12px",fontSize:12,fontWeight:700,color:"#7c3aed" }}>🌺 Telangana: {materials.filter(m=>m.stateId==="telangana").length} materials</div>
                        </div>
                      </div>
                    ):(
                      <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                        {HIGHER_SUBS.map(s=>(
                          <div key={s} style={{ position:"relative" }}>
                            <span style={{ background:"#f8fafc",color:C.textSec,borderRadius:7,padding:"5px 10px",fontSize:12,border:`1px solid ${C.border}`,fontWeight:600,display:"inline-flex",alignItems:"center",gap:4 }}>
                              {s}
                              {HIGHER_INDIA_ABROAD[s]&&<span style={{ background:"rgba(99,102,241,0.1)",color:"#6366f1",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:800 }}>{HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️":"🌐"}</span>}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showAddModal&&<AddMaterialModal item={editItem} students={students} onClose={()=>{setShowAdd(false);setEditItem(null);}} onSave={handleSave}/>}
      {showBulkImport&&<BulkImportModal importType={showBulkImport} onClose={()=>setShowBulkImport(null)} onImport={handleBulkImport} toast={toast}/>}
      {deleteConfirm&&(
        <div style={{ position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,backdropFilter:"blur(4px)" }}>
          <div style={{ background:"#fff",borderRadius:18,padding:30,maxWidth:340,width:"90%",border:"1.5px solid #fca5a5",textAlign:"center",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease" }}>
            <div style={{ fontSize:38,marginBottom:10 }}>⚠️</div>
            <h3 style={{ fontWeight:800,marginBottom:8 }}>Delete Material?</h3>
            <p style={{ color:C.textSec,fontSize:13,marginBottom:22 }}>This action cannot be undone.</p>
            <div style={{ display:"flex",gap:10 }}>
              <button onClick={()=>setDelConf(null)} style={{ flex:1,background:"#f8fafc",color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit" }}>Cancel</button>
              <button onClick={()=>handleDelete(deleteConfirm)} style={{ flex:1,background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit" }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [animIn, setAnimIn] = useState(false);
  useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);

  if (screen==="student") return <StudentDashboard onBack={()=>setScreen("home")}/>;
  if (screen==="admin")   return <AdminDashboard   onBack={()=>setScreen("home")}/>;

  return (
    <div style={{ minHeight:"100vh",background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 30%,#fef3c7 70%,#fff7ed 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",position:"relative",overflow:"hidden",padding:16 }}>
      <style>{GLOBAL_CSS}</style>
      <div style={{ position:"fixed",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)",top:"-10%",left:"-5%",animation:"orbPulse 6s ease-in-out infinite",pointerEvents:"none" }}/>
      <div style={{ position:"fixed",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)",bottom:"0%",right:"-5%",animation:"orbPulse 6s ease-in-out infinite 2s",pointerEvents:"none" }}/>

      <div style={{ textAlign:"center",zIndex:1,maxWidth:800,width:"100%",opacity:animIn?1:0,transform:animIn?"scale(1)":"scale(0.94)",transition:"all 0.6s cubic-bezier(.4,0,.2,1)" }}>
        <div style={{ fontSize:76,marginBottom:14,animation:"float 3.5s ease-in-out infinite",filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))" }}>📚</div>
        <div style={{ fontSize:11,letterSpacing:5,color:C.amberDim,marginBottom:10,textTransform:"uppercase",fontWeight:800 }}>One Year Series</div>
        <h1 style={{ fontSize:48,fontWeight:900,color:C.textPri,margin:"0 0 8px",letterSpacing:-2,lineHeight:1.1 }}><span style={{ color:C.amber }}>OYS</span> Platform</h1>
        <p style={{ color:C.textSec,fontSize:16,marginBottom:44,maxWidth:480,margin:"0 auto 44px",lineHeight:1.6,fontWeight:600 }}>Your complete digital learning hub — study materials, mock tests, crash courses, career guidance & more</p>
        <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:40 }}>
          <button onClick={()=>setScreen("student")} style={{ background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"#fff",border:"none",borderRadius:16,padding:"16px 40px",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:"0 10px 36px rgba(245,158,11,0.4)",transition:"all 0.25s",fontFamily:"inherit" }} onMouseEnter={e=>{e.target.style.transform="translateY(-4px) scale(1.03)";e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)";}}>🎓 Student Dashboard</button>
          <button onClick={()=>setScreen("admin")} style={{ background:"#fff",color:C.textPri,border:"1.5px solid #e2e8f0",borderRadius:16,padding:"16px 40px",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:"0 8px 28px rgba(15,23,42,0.1)",transition:"all 0.25s",fontFamily:"inherit" }} onMouseEnter={e=>{e.target.style.transform="translateY(-4px)";e.target.style.borderColor=C.amber;e.target.style.color=C.amber;}} onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.borderColor="#e2e8f0";e.target.style.color=C.textPri;}}>⚙️ Admin Panel</button>
        </div>
        <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
          {[{icon:"🔬",label:"20 Eng Depts"},{icon:"🏛️",label:"Central Govt"},{icon:"🌊",label:"AP State"},{icon:"🌺",label:"Telangana"},{icon:"🎓",label:"Higher Ed"},{icon:"📥",label:"Bulk CSV Import"},{icon:"📖",label:"Sequential Learning"},{icon:"⚡",label:"Crash Courses"}].map((f,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:5,color:C.textSec,fontSize:12,fontWeight:700,background:"rgba(255,255,255,0.7)",borderRadius:20,padding:"5px 13px",border:"1px solid rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",boxShadow:"0 2px 8px rgba(15,23,42,0.06)",animation:`cardIn 0.5s ease ${i*0.06}s both` }}>
              <span style={{ fontSize:14 }}>{f.icon}</span>{f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}