// import { useState, useEffect, useRef } from "react";

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

// // ─── SERVICES DATA ────────────────────────────────────────────────────────────
// const SERVICES = [
//   { id:"resume",name:"Resume Maker",icon:"📄",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:4820,topCollege:"IIT Bombay",description:"AI-powered resume builder with ATS optimization",stats:{created:4820,downloaded:3940,templates:24,avgScore:87},trend:"+18%",trendUp:true },
//   { id:"alerts",name:"Alerts",icon:"🔔",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.2)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)",users:7210,topCollege:"NIT Warangal",description:"Real-time job & exam notifications system",stats:{sent:52400,read:41200,active:7210,categories:12},trend:"+32%",trendUp:true },
//   { id:"calendar",name:"E-Calendar",icon:"📅",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)",users:3650,topCollege:"BITS Pilani",description:"Exam schedules, deadlines & study planner",stats:{events:1840,reminders:9300,synced:3650,upcoming:124},trend:"+9%",trendUp:true },
//   { id:"crash",name:"Crash Course",icon:"⚡",color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",gradient:"linear-gradient(135deg,#fee2e2,#fecaca)",users:5930,topCollege:"VIT Vellore",description:"Intensive last-minute exam preparation modules",stats:{courses:48,enrolled:5930,completed:3210,avgHours:6.4},trend:"+41%",trendUp:true },
//   { id:"elibrary",name:"E-Library",icon:"📚",color:"#3b82f6",bg:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.2)",gradient:"linear-gradient(135deg,#dbeafe,#bfdbfe)",users:6840,topCollege:"JNTU Hyderabad",description:"Digital library with 15+ curated study materials",stats:{materials:15,downloads:19870,requests:24,pending:2,approved:20,rejected:2,topCollege:"JNTU Hyderabad",collegeStats:[{name:"JNTU Hyderabad",downloads:4200,users:1240},{name:"Osmania University",downloads:3100,users:980},{name:"IIT Bombay",downloads:2800,users:760},{name:"NIT Warangal",downloads:2400,users:640},{name:"VIT Vellore",downloads:1900,users:520}]},trend:"+27%",trendUp:true },
//   { id:"eprep",name:"E-Preparation",icon:"🎯",color:"#8b5cf6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:8120,topCollege:"Osmania University",description:"Mock tests, quizzes & performance analytics",stats:{tests:980,attempts:41200,avgScore:72,toppers:340},trend:"+55%",trendUp:true },
//   { id:"counseling",name:"Career Counseling",icon:"🧭",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.2)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)",users:2340,topCollege:"Hyderabad Central University",description:"1-on-1 mentorship & career guidance sessions",stats:{sessions:2340,mentors:48,avgRating:4.8,placed:1820},trend:"+14%",trendUp:true },
//   { id:"c3arena",name:"C3 Arena",icon:"🏆",color:"#f97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.2)",gradient:"linear-gradient(135deg,#ffedd5,#fed7aa)",users:3980,topCollege:"IIT Hyderabad",description:"Competitive coding, hackathons & leaderboards",stats:{contests:84,participants:3980,problems:1240,winners:252},trend:"+63%",trendUp:true },
// ];

// const PIE_COLORS = ["#3b82f6","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#f97316","#6366f1"];

// const THUMB_IMAGES = {
//   1:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
//   2:"https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
//   3:"https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
//   4:"https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
//   5:"https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
//   6:"https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
//   7:"https://cdn-icons-png.flaticon.com/512/3281/3281295.png",
//   8:"https://cdn-icons-png.flaticon.com/512/3132/3132004.png",
//   9:"https://cdn-icons-png.flaticon.com/512/3953/3953227.png",
//   10:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
//   11:"https://cdn-icons-png.flaticon.com/512/3225/3225194.png",
//   12:"https://cdn-icons-png.flaticon.com/512/3281/3281306.png",
//   13:"https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
//   14:"https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
//   15:"https://cdn-icons-png.flaticon.com/512/2965/2965967.png",
// };

// const CRASH_COURSES = {
//   1:{title:"Java Crash Course",url:"https://www.youtube.com/results?search_query=java+crash+course",color:"#ef4444"},
//   2:{title:"Banking Crash Course",url:"https://www.youtube.com/results?search_query=banking+fundamentals+crash+course",color:"#f59e0b"},
//   3:{title:"DSA Crash Course",url:"https://www.youtube.com/results?search_query=data+structures+algorithms+crash+course",color:"#10b981"},
//   4:{title:"UPSC History Crash",url:"https://www.youtube.com/results?search_query=upsc+history+crash+course",color:"#6366f1"},
//   5:{title:"SSC Math Crash",url:"https://www.youtube.com/results?search_query=ssc+mathematics+crash+course",color:"#3b82f6"},
//   6:{title:"IBPS PO Crash",url:"https://www.youtube.com/results?search_query=ibps+po+crash+course",color:"#f59e0b"},
//   7:{title:"CAT Verbal Crash",url:"https://www.youtube.com/results?search_query=cat+verbal+ability+crash+course",color:"#8b5cf6"},
//   8:{title:"GRE Vocab Crash",url:"https://www.youtube.com/results?search_query=gre+vocabulary+crash+course",color:"#ec4899"},
//   9:{title:"Agri Science Crash",url:"https://www.youtube.com/results?search_query=agricultural+science+crash+course",color:"#10b981"},
//   10:{title:"Python Crash Course",url:"https://www.youtube.com/results?search_query=python+crash+course+beginners",color:"#3b82f6"},
//   11:{title:"RRB Crash Course",url:"https://www.youtube.com/results?search_query=railway+rrb+crash+course",color:"#f59e0b"},
//   12:{title:"MBA Case Crash",url:"https://www.youtube.com/results?search_query=mba+case+studies+crash+course",color:"#6366f1"},
//   13:{title:"Digital Mktg Crash",url:"https://www.youtube.com/results?search_query=digital+marketing+crash+course",color:"#ef4444"},
//   14:{title:"Research Crash",url:"https://www.youtube.com/results?search_query=research+methodology+crash+course",color:"#10b981"},
//   15:{title:"NDA Crash Course",url:"https://www.youtube.com/results?search_query=nda+defence+crash+course",color:"#6366f1"},
// };

// const EPREP_LINKS = {
//   1:"https://www.javatpoint.com/java-quiz",2:"https://www.bankersadda.com/quiz",3:"https://www.geeksforgeeks.org/data-structure-gq/",
//   4:"https://www.drishtiias.com/quiz",5:"https://www.sscadda.com/quiz",6:"https://www.ibpsonline.in/quiz",
//   7:"https://www.indiabix.com/verbal-ability/questions-and-answers/",8:"https://www.majortests.com/gre/",
//   9:"https://www.agriculturalquiz.com",10:"https://www.w3schools.com/python/exercise.asp",
//   11:"https://www.railwayrecruitment.org/quiz",12:"https://www.mba.com/practice-tests",
//   13:"https://www.hubspot.com/marketing-certification",14:"https://www.researchmethodologyquiz.com",
//   15:"https://www.nda.nic.in/preparation",
// };

// const CATEGORIES = {
//   private:{ label:"Private Sector",icon:"🏢",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.25)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
//   government:{ label:"Government Exams",icon:"🏛️",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.25)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
//   higher:{ label:"Higher Education",icon:"🎓",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.25)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
// };

// const CATEGORY_SUBS = {
//   private:["IT","Banking","Healthcare","Marketing","Finance","Consulting"],
//   government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"],
//   higher:["GATE","CAT/MBA","GRE/GMAT","Study Abroad","Research","PhD"],
// };

// const HIGHER_INDIA_ABROAD = {
//   "GATE":"India","CAT/MBA":"India","GRE/GMAT":"Abroad","Study Abroad":"Abroad","Research":"Both","PhD":"Both",
// };

// const INIT_STUDENTS = [
//   { id:"s1",name:"Arjun Sharma",email:"arjun@email.com",joined:"2024-01-15",completed:3,avatar:"AS",college:"JNTU Hyderabad" },
//   { id:"s2",name:"Priya Reddy",email:"priya@email.com",joined:"2024-02-20",completed:1,avatar:"PR",college:"Osmania University" },
//   { id:"s3",name:"Rahul Gupta",email:"rahul@email.com",joined:"2024-03-10",completed:0,avatar:"RG",college:"IIT Bombay" },
// ];

// const ALL_MATERIALS = [
//   { id:1,title:"Java Programming",category:"private",sub:"IT",type:"free",emoji:"☕",topics:12,progress:70,pages:340,downloads:1240,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:2,title:"Banking Fundamentals",category:"private",sub:"Banking",type:"free",emoji:"🏦",topics:8,progress:50,pages:210,downloads:980,bookmarked:true,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:3,title:"Data Structures & Algo",category:"private",sub:"IT",type:"premium",emoji:"🌲",topics:15,progress:30,pages:480,downloads:2100,bookmarked:false,studentId:null,uploadType:"pdf",fileLink:"https://example.com/dsa.pdf",indiaOrAbroad:null },
//   { id:4,title:"UPSC History Notes",category:"government",sub:"UPSC",type:"free",emoji:"📜",topics:20,progress:60,pages:600,downloads:3400,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:5,title:"SSC Mathematics",category:"government",sub:"SSC",type:"free",emoji:"📐",topics:10,progress:0,pages:280,downloads:1800,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:6,title:"IBPS PO Guide",category:"government",sub:"Banking (Govt)",type:"premium",emoji:"🏧",topics:14,progress:0,pages:390,downloads:2200,bookmarked:true,studentId:null,uploadType:"link",fileLink:"https://ibps.in/study-material",indiaOrAbroad:null },
//   { id:7,title:"CAT Verbal Ability",category:"higher",sub:"CAT/MBA",type:"premium",emoji:"📝",topics:9,progress:20,pages:240,downloads:760,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"India" },
//   { id:8,title:"GRE Vocabulary",category:"higher",sub:"GRE/GMAT",type:"free",emoji:"🔤",topics:6,progress:40,pages:180,downloads:540,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"Abroad" },
//   { id:9,title:"Agricultural Science",category:"government",sub:"State PSC",type:"free",emoji:"🌾",topics:11,progress:0,pages:320,downloads:890,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:10,title:"Python for Beginners",category:"private",sub:"IT",type:"free",emoji:"🐍",topics:10,progress:85,pages:290,downloads:3100,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:11,title:"Railway RRB Guide",category:"government",sub:"Railways",type:"premium",emoji:"🚂",topics:13,progress:0,pages:410,downloads:1650,bookmarked:false,studentId:null,uploadType:"pdf",fileLink:"https://example.com/rrb.pdf",indiaOrAbroad:null },
//   { id:12,title:"MBA Case Studies",category:"higher",sub:"CAT/MBA",type:"premium",emoji:"💼",topics:8,progress:0,pages:200,downloads:430,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"India" },
//   { id:13,title:"Digital Marketing",category:"private",sub:"Marketing",type:"free",emoji:"📊",topics:7,progress:55,pages:190,downloads:670,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:14,title:"Research Methodology",category:"higher",sub:"Research",type:"free",emoji:"🔬",topics:5,progress:10,pages:160,downloads:310,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"Both" },
//   { id:15,title:"Defence NDA Prep",category:"government",sub:"Defence",type:"premium",emoji:"⚔️",topics:16,progress:0,pages:500,downloads:1200,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
// ];

// const JAVA_TOPICS = [
//   { id:1,title:"Introduction to Java",done:true,pages:28 },
//   { id:2,title:"OOP Concepts",done:true,pages:45 },
//   { id:3,title:"Classes & Objects",done:true,pages:35 },
//   { id:4,title:"Inheritance & Polymorphism",done:false,pages:52 },
//   { id:5,title:"Exception Handling",done:false,pages:30 },
//   { id:6,title:"Collections Framework",done:false,pages:60 },
//   { id:7,title:"Multithreading",done:false,pages:40 },
//   { id:8,title:"File I/O",done:false,pages:25 },
//   { id:9,title:"JDBC & Databases",done:false,pages:38 },
//   { id:10,title:"Spring Boot Basics",done:false,pages:55 },
//   { id:11,title:"REST APIs with Java",done:false,pages:48 },
//   { id:12,title:"Java 17+ Features",done:false,pages:32 },
// ];

// let _globalRequests = [
//   { id:"r1",studentId:"s1",studentName:"Arjun Sharma",title:"AI & Machine Learning 2025",category:"private",sub:"IT",reason:"Need latest trending AI material for interviews",status:"pending",date:"2024-12-01" },
//   { id:"r2",studentId:"s2",studentName:"Priya Reddy",title:"UPSC Ethics GS4 Deep Dive",category:"government",sub:"UPSC",reason:"Comprehensive ethics module not available anywhere",status:"pending",date:"2024-12-05" },
// ];
// let _globalMaterials = ALL_MATERIALS.map(m=>({...m}));
// let _globalStudents  = INIT_STUDENTS.map(s=>({...s}));

// const COLLEGE_READING_DATA = [
//   { college:"JNTU Hyderabad",readers:1240,materials:["Java Programming","Python for Beginners","DSA","UPSC History Notes","SSC Mathematics"] },
//   { college:"Osmania University",readers:980,materials:["Banking Fundamentals","IBPS PO Guide","CAT Verbal Ability","Research Methodology"] },
//   { college:"IIT Bombay",readers:760,materials:["Data Structures & Algo","Python for Beginners","Java Programming","GRE Vocabulary"] },
//   { college:"NIT Warangal",readers:640,materials:["Java Programming","DSA","Digital Marketing","Railway RRB Guide"] },
//   { college:"VIT Vellore",readers:520,materials:["Python for Beginners","Java Programming","CAT Verbal Ability","MBA Case Studies"] },
//   { college:"BITS Pilani",readers:480,materials:["Data Structures & Algo","Research Methodology","GRE Vocabulary","MBA Case Studies"] },
//   { college:"Hyderabad Central Univ",readers:340,materials:["UPSC History Notes","SSC Mathematics","Agricultural Science","Defence NDA Prep"] },
//   { college:"IIT Hyderabad",readers:290,materials:["Python for Beginners","Java Programming","DSA","Digital Marketing"] },
// ];

// const MOST_VIEWED_MATERIALS = [
//   { id:4,title:"UPSC History Notes",views:8420,reads:6200,category:"government",emoji:"📜" },
//   { id:10,title:"Python for Beginners",views:7890,reads:5900,category:"private",emoji:"🐍" },
//   { id:1,title:"Java Programming",views:6540,reads:4800,category:"private",emoji:"☕" },
//   { id:3,title:"Data Structures & Algo",views:5930,reads:3900,category:"private",emoji:"🌲" },
//   { id:5,title:"SSC Mathematics",views:4820,reads:3400,category:"government",emoji:"📐" },
// ];

// // ─── CSV FIELDS FOR BULK IMPORT ───────────────────────────────────────────────
// const BULK_CSV_FIELDS = [
//   { name:"title", required:true, desc:"Material title", example:"Java Programming" },
//   { name:"description", required:false, desc:"Short description", example:"Complete Java Notes for Placements" },
//   { name:"category", required:true, desc:"private / government / higher", example:"Private Sector" },
//   { name:"sub_category", required:true, desc:"Sub-category", example:"IT" },
//   { name:"department", required:false, desc:"Department name", example:"Computer Science" },
//   { name:"specialization", required:false, desc:"Specialization", example:"Software Engineering" },
//   { name:"material_type", required:false, desc:"PDF / Link / Video", example:"PDF" },
//   { name:"tags", required:false, desc:"Comma-separated tags", example:"java,oops,backend" },
//   { name:"thumbnail_icon", required:false, desc:"Emoji icon", example:"☕" },
//   { name:"main_file_url", required:false, desc:"Main material URL or filename", example:"java-programming.pdf" },
//   { name:"preview_file_url", required:false, desc:"Preview file URL", example:"java-preview.pdf" },
//   { name:"total_pages", required:false, desc:"Total pages count", example:"250" },
//   { name:"total_topics", required:false, desc:"Number of topics", example:"6" },
//   { name:"type", required:true, desc:"free / premium", example:"Premium" },
//   { name:"download_allowed", required:false, desc:"true / false", example:"true" },
//   { name:"status", required:false, desc:"Published / Draft", example:"Published" },
//   { name:"published_date", required:false, desc:"YYYY-MM-DD", example:"2026-05-14" },
//   { name:"topic_id", required:false, desc:"Unique topic ID", example:"TOPIC_001" },
//   { name:"topic_title", required:false, desc:"Topic heading", example:"Introduction to Java" },
//   { name:"sub_topic", required:false, desc:"Sub-topic name", example:"Java Basics" },
//   { name:"topic_description", required:false, desc:"Brief topic description", example:"Overview of Java" },
//   { name:"pages", required:false, desc:"Pages in this topic", example:"28" },
//   { name:"topic_file_url", required:false, desc:"Topic PDF URL", example:"intro-java.pdf" },
//   { name:"topic_preview_url", required:false, desc:"Topic preview URL", example:"intro-preview.pdf" },
//   { name:"completion_status", required:false, desc:"Done / In Progress / Not Started", example:"Done" },
//   { name:"completed_percentage", required:false, desc:"0-100", example:"100" },
//   { name:"notes_available", required:false, desc:"true / false", example:"true" },
//   { name:"notes_file_url", required:false, desc:"Notes file URL", example:"intro-notes.pdf" },
//   { name:"assignment_available", required:false, desc:"true / false", example:"false" },
// ];

// // ─── TOAST ────────────────────────────────────────────────────────────────────
// function useToast() {
//   const [toasts,setToasts]=useState([]);
//   const add=(msg,type="success")=>{
//     const id=Date.now();
//     setToasts(p=>[...p,{id,msg,type}]);
//     setTimeout(()=>setToasts(p=>p.filter(t=>t.id!==id)),3500);
//   };
//   return {toasts,add};
// }
// function ToastContainer({toasts}){
//   const cfg={
//     success:{bg:"#f0fdf4",border:"#86efac",text:"#166534",icon:"✅"},
//     warn:{bg:"#fffbeb",border:"#fcd34d",text:"#92400e",icon:"⚠️"},
//     error:{bg:"#fef2f2",border:"#fca5a5",text:"#991b1b",icon:"❌"},
//     info:{bg:"#eff6ff",border:"#93c5fd",text:"#1e40af",icon:"ℹ️"},
//   };
//   return (
//     <div style={{position:"fixed",top:20,right:20,zIndex:99999,display:"flex",flexDirection:"column",gap:10}}>
//       {toasts.map(t=>{const s=cfg[t.type]||cfg.info;return(
//         <div key={t.id} style={{background:s.bg,border:`1.5px solid ${s.border}`,color:s.text,borderRadius:14,padding:"13px 18px",fontSize:13,fontWeight:600,maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10}}>
//           <span style={{fontSize:16}}>{s.icon}</span>{t.msg}
//         </div>
//       );})}
//       <style>{`@keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}`}</style>
//     </div>
//   );
// }

// // ─── PROGRESS RING ────────────────────────────────────────────────────────────
// function Ring({pct,size=48,stroke=4,color=C.amber}){
//   const r=(size-stroke*2)/2,circ=2*Math.PI*r;
//   return(
//     <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke}/>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
//         strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ}
//         style={{transition:"stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)",strokeLinecap:"round"}}/>
//       <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
//         style={{transform:`rotate(90deg) translate(0,-${size}px)`,fontSize:11,fontWeight:700,transformOrigin:`${size/2}px ${size/2}px`}}>
//         {pct}%
//       </text>
//     </svg>
//   );
// }

// // ─── MATERIAL THUMBNAIL ───────────────────────────────────────────────────────
// function MatThumb({m,size=80}){
//   const [err,setErr]=useState(false);
//   const cat=CATEGORIES[m.category];
//   if(!err&&THUMB_IMAGES[m.id])return(
//     <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
//       <img src={THUMB_IMAGES[m.id]} alt={m.title} onError={()=>setErr(true)} style={{width:size*0.75,height:size*0.75,objectFit:"contain",transition:"transform 0.3s ease"}}/>
//     </div>
//   );
//   return(
//     <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.45,flexShrink:0}}>
//       {m.emoji}
//     </div>
//   );
// }

// // ─── PIE CHART ────────────────────────────────────────────────────────────────
// function PieChart({services,onClose}){
//   const [hovered,setHovered]=useState(null);
//   const total=services.reduce((a,s)=>a+s.users,0);
//   const size=280,cx=size/2,cy=size/2,r=100,innerR=55;
//   let startAngle=-Math.PI/2;
//   const slices=services.map((s,i)=>{
//     const pct=s.users/total,angle=pct*2*Math.PI,endAngle=startAngle+angle;
//     const x1=cx+r*Math.cos(startAngle),y1=cy+r*Math.sin(startAngle);
//     const x2=cx+r*Math.cos(endAngle),y2=cy+r*Math.sin(endAngle);
//     const xi1=cx+innerR*Math.cos(startAngle),yi1=cy+innerR*Math.sin(startAngle);
//     const xi2=cx+innerR*Math.cos(endAngle),yi2=cy+innerR*Math.sin(endAngle);
//     const midAngle=startAngle+angle/2;
//     const sl={...s,pct:Math.round(pct*100),x1,y1,x2,y2,xi1,yi1,xi2,yi2,largeArc:angle>Math.PI?1:0,midAngle,color:PIE_COLORS[i]};
//     startAngle=endAngle; return sl;
//   });
//   const hov=hovered!==null?slices[hovered]:null;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:820,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)",overflow:"hidden"}}>
//         <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",borderBottom:"1px solid #bfdbfe",padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <div><div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:3}}>Analytics Overview</div><h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#1e3a8a"}}>📊 Service Usage Distribution</h2></div>
//           <button onClick={onClose} style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:14,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//         </div>
//         <div style={{padding:"28px 32px",display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"}}>
//           <div style={{position:"relative",flexShrink:0}}>
//             <svg width={size} height={size} style={{filter:"drop-shadow(0 8px 24px rgba(59,130,246,0.15))"}}>
//               {slices.map((sl,i)=>{const isHov=hovered===i,ox=isHov?Math.cos(sl.midAngle)*8:0,oy=isHov?Math.sin(sl.midAngle)*8:0;return(
//                 <g key={i} style={{cursor:"pointer",transform:`translate(${ox}px,${oy}px)`,transition:"transform 0.25s ease"}} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}>
//                   <path d={`M ${cx} ${cy} L ${sl.x1} ${sl.y1} A ${r} ${r} 0 ${sl.largeArc} 1 ${sl.x2} ${sl.y2} Z`} fill={sl.color} opacity={isHov?1:0.88} stroke="#fff" strokeWidth={2}/>
//                   <path d={`M ${sl.xi1} ${sl.yi1} A ${innerR} ${innerR} 0 ${sl.largeArc} 1 ${sl.xi2} ${sl.yi2} L ${sl.x2} ${sl.y2} A ${r} ${r} 0 ${sl.largeArc} 0 ${sl.x1} ${sl.y1} Z`} fill="#fff" opacity={0.18}/>
//                 </g>
//               );})}
//               <circle cx={cx} cy={cy} r={innerR} fill={C.surface}/>
//               {hov?(<><text x={cx} y={cy-10} textAnchor="middle" fontSize={11} fontWeight={800} fill={hov.color}>{hov.icon}</text><text x={cx} y={cy+6} textAnchor="middle" fontSize={18} fontWeight={900} fill={hov.color}>{hov.pct}%</text><text x={cx} y={cy+22} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.textMut}>{hov.users.toLocaleString()}</text></>
//               ):(<><text x={cx} y={cy-5} textAnchor="middle" fontSize={13} fontWeight={900} fill={C.textPri}>Total</text><text x={cx} y={cy+13} textAnchor="middle" fontSize={17} fontWeight={900} fill={C.amber}>{(total/1000).toFixed(1)}K</text></>)}
//             </svg>
//           </div>
//           <div style={{flex:1,minWidth:280}}>
//             <div style={{fontSize:12,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Service Breakdown</div>
//             <div style={{display:"flex",flexDirection:"column",gap:8}}>
//               {slices.map((sl,i)=>(
//                 <div key={i} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,cursor:"pointer",background:hovered===i?sl.bg:C.elevated,border:`1.5px solid ${hovered===i?sl.border:C.border}`,transition:"all 0.2s",transform:hovered===i?"translateX(6px)":"translateX(0)"}}>
//                   <div style={{width:10,height:10,borderRadius:"50%",background:sl.color,flexShrink:0}}/>
//                   <span style={{fontSize:15}}>{sl.icon}</span>
//                   <span style={{fontWeight:700,fontSize:13,color:C.textPri,flex:1}}>{sl.name}</span>
//                   <div style={{textAlign:"right"}}><div style={{fontSize:13,fontWeight:800,color:sl.color}}>{sl.pct}%</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{sl.users.toLocaleString()} users</div></div>
//                   <div style={{width:60,height:6,background:C.border,borderRadius:6,overflow:"hidden"}}><div style={{width:`${sl.pct}%`,height:"100%",background:sl.color,borderRadius:6}}/></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── ADDING SOON POPUP ────────────────────────────────────────────────────────
// function AddingSoonPopup({request,onConfirm,onClose}){
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99500,backdropFilter:"blur(6px)",padding:20}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:460,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.35s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{height:5,background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)"}}/>
//         <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
//           <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,animation:"orbPulse 2s ease-in-out infinite"}}>📅</div>
//           <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Material Status Update</div>
//           <h2 style={{margin:"0 0 10px",fontSize:19,fontWeight:900,color:C.textPri}}>Notify Student</h2>
//           <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
//             <div style={{fontSize:12,color:"#1e40af",fontWeight:700,marginBottom:6}}>📨 Notification to be sent:</div>
//             <p style={{margin:0,fontSize:13,color:"#1e3a8a",fontWeight:600,lineHeight:1.6}}>"Hi <strong>{request.studentName}</strong>, your requested material <strong>"{request.title}"</strong> is currently being prepared and will be added to the library soon. Stay tuned! 🎉"</p>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
//             {[{icon:"👤",label:"Student",val:request.studentName},{icon:"📚",label:"Material",val:request.title,small:true}].map((item,i)=>(
//               <div key={i} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"left"}}>
//                 <div style={{fontSize:18,marginBottom:4}}>{item.icon}</div>
//                 <div style={{fontSize:item.small?11:12,fontWeight:700,color:C.textPri,lineHeight:1.3}}>{item.val}</div>
//                 <div style={{fontSize:10,color:C.textMut,fontWeight:600,marginTop:2}}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>Cancel</button>
//             <button onClick={onConfirm} style={{flex:2,background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:"0 4px 18px rgba(59,130,246,0.35)",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>📅 Send Notification</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── BULK IMPORT MODAL ────────────────────────────────────────────────────────
// function BulkImportModal({onClose,onImport,toast}){
//   const [file,setFile]=useState(null);
//   const [dragging,setDragging]=useState(false);
//   const [parsed,setParsed]=useState(null);
//   const [importing,setImporting]=useState(false);
//   const [step,setStep]=useState(1); // 1=upload, 2=preview
//   const [progress,setProgress]=useState(0);
//   const fileRef=useRef(null);

//   const requiredFields=BULK_CSV_FIELDS.filter(f=>f.required).map(f=>f.name);

//   const downloadSample=()=>{
//     const header=BULK_CSV_FIELDS.map(f=>f.name).join(",");
//     const row=BULK_CSV_FIELDS.map(f=>f.example.includes(",")?`"${f.example}"`:f.example).join(",");
//     const row2=[
//       "Python for Beginners","Python basics for all levels","Private Sector","IT","Computer Science",
//       "Data Science","PDF","python,beginner,coding","🐍","python-basics.pdf","python-preview.pdf",
//       "290","10","Free","true","Published","2026-05-14",
//       "TOPIC_002","Variables & Data Types","Python Basics","Understanding Python variables","25",
//       "variables.pdf","variables-preview.pdf","Done","100","true","variables-notes.pdf","false"
//     ].join(",");
//     const csv=[header,row,row2].join("\n");
//     const blob=new Blob([csv],{type:"text/csv"});
//     const a=document.createElement("a");
//     a.href=URL.createObjectURL(blob);
//     a.download="bulk_import_sample.csv";
//     a.click();
//   };

//   const simpleParseCSV=(text)=>{
//     const lines=text.split("\n").filter(l=>l.trim());
//     if(lines.length<2) return [];
//     const headers=lines[0].split(",").map(h=>h.trim().replace(/^"|"$/g,""));
//     return lines.slice(1).map(line=>{
//       const vals=[],re=/("([^"]*)")|([^,]*)/g;
//       let m;
//       while((m=re.exec(line))!==null){
//         if(m[0]===""&&m.index===line.length) break;
//         vals.push((m[2]!==undefined?m[2]:m[3]||"").trim());
//       }
//       return Object.fromEntries(headers.map((h,i)=>[h,vals[i]||""]));
//     }).filter(r=>r.title);
//   };

//   const handleFile=(f)=>{
//     if(!f||!f.name.endsWith(".csv")){toast("Please upload a .csv file","warn");return;}
//     setFile(f);
//     const reader=new FileReader();
//     reader.onload=e=>{
//       const rows=simpleParseCSV(e.target.result);
//       setParsed(rows);
//       if(rows.length>0) setStep(2);
//       else toast("No valid data found in CSV","warn");
//     };
//     reader.readAsText(f);
//   };

//   const handleDrop=(e)=>{
//     e.preventDefault();setDragging(false);
//     const f=e.dataTransfer.files[0];
//     handleFile(f);
//   };

//   const mapCategory=(cat)=>{
//     if(!cat) return "private";
//     const c=cat.toLowerCase();
//     if(c.includes("gov")) return "government";
//     if(c.includes("high")||c.includes("gate")||c.includes("mba")||c.includes("gre")||c.includes("phd")) return "higher";
//     return "private";
//   };

//   const handleImport=()=>{
//     setImporting(true);
//     let p=0;
//     const interval=setInterval(()=>{
//       p+=Math.random()*25+10;
//       setProgress(Math.min(p,90));
//     },200);
//     setTimeout(()=>{
//       clearInterval(interval);setProgress(100);
//       const newMaterials=parsed.map((row,i)=>({
//         id:Date.now()+i,
//         title:row.title||"Untitled Material",
//         description:row.description||"",
//         category:mapCategory(row.category),
//         sub:row.sub_category||"IT",
//         department:row.department||"",
//         specialization:row.specialization||"",
//         type:(row.type||"free").toLowerCase().includes("prem")?"premium":"free",
//         emoji:row.thumbnail_icon||"📄",
//         topics:parseInt(row.total_topics)||5,
//         progress:0,
//         pages:parseInt(row.total_pages)||100,
//         downloads:0,
//         bookmarked:false,
//         studentId:null,
//         uploadType:row.material_type==="PDF"?"pdf":row.main_file_url?"link":null,
//         fileLink:row.main_file_url||"",
//         indiaOrAbroad:null,
//         tags:row.tags||"",
//         status:row.status||"Published",
//         publishedDate:row.published_date||"",
//         downloadAllowed:row.download_allowed!=="false",
//         previewFileUrl:row.preview_file_url||"",
//         topicData:{
//           id:row.topic_id||"",title:row.topic_title||"",
//           subTopic:row.sub_topic||"",description:row.topic_description||"",
//           pages:parseInt(row.pages)||0,fileUrl:row.topic_file_url||"",
//           previewUrl:row.topic_preview_url||"",completionStatus:row.completion_status||"Not Started",
//           completedPct:parseInt(row.completed_percentage)||0,
//           notesAvailable:row.notes_available==="true",notesUrl:row.notes_file_url||"",
//           assignmentAvailable:row.assignment_available==="true",
//         },
//       }));
//       onImport(newMaterials);
//       setTimeout(()=>{setImporting(false);onClose();},400);
//     },2000);
//   };

//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20,animation:"fadeIn 0.25s ease"}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)"}}>
//         {/* Header */}
//         <div style={{background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",borderBottom:`1px solid #a7f3d0`,padding:"22px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:"24px 24px 0 0"}}>
//           <div style={{display:"flex",alignItems:"center",gap:14}}>
//             <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,boxShadow:"0 4px 16px rgba(16,185,129,0.35)"}}>📥</div>
//             <div>
//               <div style={{fontSize:11,color:"#065f46",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:2}}>Admin · E-Library</div>
//               <h2 style={{margin:0,fontSize:18,fontWeight:900,color:"#064e3b"}}>Bulk Import Materials via CSV</h2>
//             </div>
//           </div>
//           <button onClick={onClose} style={{background:"rgba(255,255,255,0.8)",border:"1px solid #a7f3d0",borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//         </div>

//         <div style={{padding:"24px 28px"}}>
//           {/* Step indicator */}
//           <div style={{display:"flex",alignItems:"center",gap:0,marginBottom:22}}>
//             {[{n:1,label:"Upload CSV"},{n:2,label:"Preview & Import"}].map((s,i)=>(
//               <div key={s.n} style={{display:"flex",alignItems:"center",flex:i===0?0:1}}>
//                 <div style={{display:"flex",alignItems:"center",gap:8}}>
//                   <div style={{width:28,height:28,borderRadius:"50%",background:step>=s.n?"linear-gradient(135deg,#10b981,#059669)":"#e2e8f0",color:step>=s.n?"#fff":C.textMut,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,transition:"all 0.3s"}}>{step>s.n?"✓":s.n}</div>
//                   <span style={{fontSize:12,fontWeight:700,color:step>=s.n?"#065f46":C.textMut,transition:"color 0.3s"}}>{s.label}</span>
//                 </div>
//                 {i===0&&<div style={{flex:1,height:2,background:step>1?"linear-gradient(90deg,#10b981,#059669)":C.border,margin:"0 14px",transition:"background 0.4s",borderRadius:2}}/>}
//               </div>
//             ))}
//           </div>

//           {step===1&&(
//             <>
//               {/* CSV Format Info */}
//               <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:20}}>
//                 <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
//                   <div style={{flex:1}}>
//                     <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
//                       <div style={{width:20,height:20,borderRadius:"50%",background:"#3b82f6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0}}>i</div>
//                       <span style={{fontSize:12,color:"#1e40af",fontWeight:800}}>CSV Format — All Fields:</span>
//                     </div>
//                     <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
//                       {BULK_CSV_FIELDS.map(f=>(
//                         <span key={f.name} style={{background:f.required?"#1e40af":"rgba(59,130,246,0.12)",color:f.required?"#fff":"#1e40af",borderRadius:6,padding:"3px 8px",fontSize:10,fontWeight:700,border:`1px solid ${f.required?"#1e40af":"#93c5fd"}`,cursor:"default",position:"relative"}} title={`${f.desc} (e.g. ${f.example})`}>
//                           {f.name}{f.required&&<span style={{marginLeft:2,color:f.required?"#fbbf24":""}}>*</span>}
//                         </span>
//                       ))}
//                     </div>
//                     <div style={{fontSize:11,color:"#1e40af",fontWeight:700}}>
//                       <span style={{background:"#1e40af",color:"#fff",borderRadius:4,padding:"1px 6px",fontSize:10,marginRight:6}}>★ Required</span>
//                       <strong>title</strong> and <strong>type</strong> are required. Type: <code style={{background:"rgba(30,64,175,0.1)",padding:"0 4px",borderRadius:3}}>free</code> or <code style={{background:"rgba(30,64,175,0.1)",padding:"0 4px",borderRadius:3}}>premium</code>. Category: <code style={{background:"rgba(30,64,175,0.1)",padding:"0 4px",borderRadius:3}}>Private Sector / Government / Higher Education</code>
//                     </div>
//                   </div>
//                   <button onClick={downloadSample} style={{background:"linear-gradient(135deg,#3b82f6,#1d4ed8)",color:"#fff",border:"none",borderRadius:12,padding:"10px 18px",cursor:"pointer",fontWeight:800,fontSize:12,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(59,130,246,0.35)",display:"flex",alignItems:"center",gap:7,flexShrink:0,whiteSpace:"nowrap"}}>
//                     ⬇️ Sample CSV
//                   </button>
//                 </div>
//               </div>

//               {/* Drop Zone */}
//               <div
//                 onDragOver={e=>{e.preventDefault();setDragging(true);}}
//                 onDragLeave={()=>setDragging(false)}
//                 onDrop={handleDrop}
//                 onClick={()=>fileRef.current?.click()}
//                 style={{border:`2.5px dashed ${dragging?"#10b981":"#fbbf24"}`,borderRadius:18,padding:"56px 20px",textAlign:"center",cursor:"pointer",background:dragging?"linear-gradient(135deg,#f0fdf4,#d1fae5)":"linear-gradient(135deg,#fffbeb,#fef3c7)",transition:"all 0.3s ease",animation:dragging?"pulse 1s infinite":"none",position:"relative",overflow:"hidden"}}>
//                 <div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.5) 50%,transparent 60%)",animation:"shimmer 2.5s infinite",pointerEvents:"none"}}/>
//                 <div style={{fontSize:48,marginBottom:14,animation:"float 3s ease-in-out infinite",filter:`drop-shadow(0 4px 12px rgba(${dragging?"16,185,129":"245,158,11"},0.35))`}}>
//                   {dragging?"📂":"☁️"}
//                 </div>
//                 <div style={{fontSize:16,fontWeight:800,color:dragging?"#065f46":"#92400e",marginBottom:6}}>
//                   {dragging?"Release to upload!":"CSV file upload"}
//                 </div>
//                 <div style={{fontSize:12,color:dragging?"#059669":"#b45309",fontWeight:600,marginBottom:12}}>Drag & drop your .csv file here, or click to browse</div>
//                 <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.8)",border:`1px solid ${dragging?"#a7f3d0":"#fde68a"}`,borderRadius:8,padding:"6px 14px",fontSize:11,color:C.textMut,fontWeight:700,backdropFilter:"blur(4px)"}}>
//                   📎 Only .csv files accepted
//                 </div>
//                 <input ref={fileRef} type="file" accept=".csv" style={{display:"none"}} onChange={e=>handleFile(e.target.files[0])}/>
//               </div>
//             </>
//           )}

//           {step===2&&parsed&&(
//             <>
//               {/* Preview */}
//               <div style={{background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",border:"1.5px solid #a7f3d0",borderRadius:14,padding:"14px 18px",marginBottom:18,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
//                 <div style={{display:"flex",alignItems:"center",gap:12}}>
//                   <div style={{width:40,height:40,borderRadius:10,background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff"}}>✅</div>
//                   <div>
//                     <div style={{fontWeight:800,fontSize:14,color:"#065f46"}}>Ready to import {parsed.length} material{parsed.length!==1?"s":""}</div>
//                     <div style={{fontSize:11,color:"#059669",fontWeight:600}}>Parsed from: {file?.name}</div>
//                   </div>
//                 </div>
//                 <button onClick={()=>{setStep(1);setFile(null);setParsed(null);}} style={{background:"rgba(255,255,255,0.8)",border:"1px solid #a7f3d0",borderRadius:9,padding:"7px 14px",cursor:"pointer",fontSize:12,fontWeight:700,color:"#065f46",fontFamily:"inherit"}}>🔄 Re-upload</button>
//               </div>

//               {/* Preview Table */}
//               <div style={{border:`1px solid ${C.border}`,borderRadius:14,overflow:"hidden",marginBottom:18,maxHeight:280,overflowY:"auto"}}>
//                 <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
//                   <thead>
//                     <tr style={{background:"linear-gradient(135deg,#1e3a8a,#1e40af)",position:"sticky",top:0}}>
//                       {["#","Title","Category","Sub","Type","Pages","Topics","Status"].map(h=>(
//                         <th key={h} style={{padding:"10px 12px",textAlign:"left",color:"rgba(255,255,255,0.9)",fontWeight:700,fontSize:10,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap"}}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {parsed.map((row,i)=>{
//                       const catKey=mapCategoryKey(row.category);
//                       const cat=CATEGORIES[catKey];
//                       return(
//                         <tr key={i} style={{borderTop:`1px solid ${C.border}`,background:i%2===0?C.surface:C.elevated,animation:`cardIn 0.3s ease ${i*0.04}s both`}}>
//                           <td style={{padding:"9px 12px",color:C.textMut,fontWeight:700}}>{i+1}</td>
//                           <td style={{padding:"9px 12px",fontWeight:700,color:C.textPri,maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//                             <span style={{marginRight:6}}>{row.thumbnail_icon||"📄"}</span>{row.title||"—"}
//                           </td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:cat?.bg,color:cat?.color,borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700,border:`1px solid ${cat?.border}`}}>{cat?.icon} {cat?.label}</span></td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.sub_category||"—"}</td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:(row.type||"").toLowerCase().includes("prem")?"#fffbeb":"#f0fdf4",color:(row.type||"").toLowerCase().includes("prem")?"#92400e":"#166534",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700}}>{(row.type||"Free").toLowerCase().includes("prem")?"✨ Premium":"🆓 Free"}</span></td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.total_pages||"—"}</td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.total_topics||"—"}</td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:"#f0fdf4",color:"#166534",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700}}>{row.status||"Published"}</span></td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Import Progress */}
//               {importing&&(
//                 <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"18px 20px",marginBottom:16,animation:"fadeUp 0.3s ease"}}>
//                   <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
//                     <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#3b82f6,#6366f1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,animation:"orbPulse 1s ease-in-out infinite"}}>⚡</div>
//                     <div>
//                       <div style={{fontWeight:800,fontSize:13,color:"#1e40af"}}>Importing materials... {Math.round(progress)}%</div>
//                       <div style={{fontSize:11,color:"#3b82f6",fontWeight:600}}>Processing {parsed.length} records</div>
//                     </div>
//                   </div>
//                   <div style={{height:8,background:"#dbeafe",borderRadius:8,overflow:"hidden"}}>
//                     <div style={{width:`${progress}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)",borderRadius:8,transition:"width 0.3s ease"}}/>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           {/* Action Buttons */}
//           <div style={{display:"flex",gap:10,marginTop:4}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit",transition:"all 0.18s"}}>Cancel</button>
//             {step===2&&parsed&&parsed.length>0&&(
//               <button onClick={handleImport} disabled={importing} style={{flex:2,background:importing?"#94a3b8":"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",borderRadius:12,padding:"13px 0",cursor:importing?"not-allowed":"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:importing?"none":"0 4px 18px rgba(16,185,129,0.4)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"all 0.3s"}}>
//                 {importing?<>⏳ Importing...</>:<>📥 Import {parsed.length} Material{parsed.length!==1?"s":""}</>}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}`}</style>
//     </div>
//   );
// }

// function mapCategoryKey(cat){
//   if(!cat) return "private";
//   const c=cat.toLowerCase();
//   if(c.includes("gov")||c.includes("government")) return "government";
//   if(c.includes("high")||c.includes("higher")) return "higher";
//   return "private";
// }

// // ─── E-Library Detail Modal ───────────────────────────────────────────────────
// function ELibraryDetailModal({service:s,onClose}){
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),40);},[]);
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:780,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
//         <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
//           <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:`radial-gradient(circle,${s.color}22,transparent)`,animation:"orbPulse 4s ease-in-out infinite"}}/>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
//             <div>
//               <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
//               <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
//               <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//                 <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
//                 <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
//               </div>
//             </div>
//           </div>
//           <div style={{marginTop:16,background:"rgba(255,255,255,0.6)",borderRadius:10,padding:"8px 14px",backdropFilter:"blur(4px)",border:`1px solid ${s.border}`}}>
//             <span style={{fontSize:12,color:C.textSec,fontWeight:700}}>🏆 Most active college: </span>
//             <span style={{fontSize:13,fontWeight:900,color:s.color}}>{s.topCollege}</span>
//           </div>
//         </div>
//         <div style={{padding:"24px 26px"}}>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📊 Key Metrics</div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:26}}>
//             {[
//               {icon:"📚",label:"Materials",value:s.stats.materials,color:s.color,bg:s.bg},
//               {icon:"⬇️",label:"Total Downloads",value:s.stats.downloads.toLocaleString(),color:"#1e40af",bg:"#eff6ff"},
//               {icon:"📨",label:"Total Requests",value:s.stats.requests,color:"#92400e",bg:"#fffbeb"},
//               {icon:"✅",label:"Approved",value:s.stats.approved,color:"#166534",bg:"#f0fdf4"},
//               {icon:"⏳",label:"Pending",value:s.stats.pending,color:"#d97706",bg:"#fffbeb"},
//               {icon:"📅",label:"Adding Soon",value:s.stats.rejected,color:"#1e40af",bg:"#eff6ff"},
//             ].map((item,i)=>(
//               <div key={i} style={{background:item.bg,border:`1.5px solid ${item.color}33`,borderRadius:14,padding:"16px 18px",animation:`cardIn 0.35s ease ${i*0.06}s both`}}>
//                 <div style={{fontSize:20,marginBottom:6}}>{item.icon}</div>
//                 <div style={{fontSize:22,fontWeight:900,color:item.color}}>{item.value}</div>
//                 <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ College-wise Downloads & Users</div>
//           <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:26}}>
//             {s.stats.collegeStats.map((clg,i)=>{
//               const maxDl=s.stats.collegeStats[0].downloads,pct=Math.round((clg.downloads/maxDl)*100);
//               const medals=["🥇","🥈","🥉"];
//               return(
//                 <div key={clg.name} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 18px",animation:`cardIn 0.35s ease ${i*0.07}s both`}}>
//                   <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"}}>
//                     <div style={{display:"flex",alignItems:"center",gap:10}}>
//                       <span style={{fontSize:16}}>{medals[i]||`#${i+1}`}</span>
//                       <div>
//                         <div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.name}</div>
//                         <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>👥 {clg.users.toLocaleString()} active readers</div>
//                       </div>
//                     </div>
//                     <div style={{textAlign:"right"}}><div style={{fontSize:14,fontWeight:900,color:s.color}}>⬇️ {clg.downloads.toLocaleString()}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>downloads</div></div>
//                   </div>
//                   <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${s.color},${s.color}77)`,borderRadius:8,transition:"width 1.2s ease"}}/></div>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📖 Most Viewed Materials</div>
//           <div style={{display:"flex",flexDirection:"column",gap:8}}>
//             {MOST_VIEWED_MATERIALS.map((mat,i)=>{
//               const cat=CATEGORIES[mat.category],readPct=Math.round((mat.reads/mat.views)*100);
//               return(
//                 <div key={mat.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:14,animation:`cardIn 0.3s ease ${i*0.06}s both`}}>
//                   <div style={{width:36,height:36,borderRadius:10,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{mat.emoji}</div>
//                   <div style={{flex:1}}>
//                     <div style={{fontWeight:700,fontSize:13,marginBottom:3}}>{mat.title}</div>
//                     <div style={{display:"flex",gap:12,fontSize:11,color:C.textMut,fontWeight:600}}>
//                       <span>👁 {mat.views.toLocaleString()} views</span>
//                       <span>📖 {mat.reads.toLocaleString()} reads</span>
//                       <span style={{color:cat.color,fontWeight:700}}>{readPct}% read rate</span>
//                     </div>
//                   </div>
//                   <div style={{width:80}}><div style={{height:6,background:C.border,borderRadius:6,overflow:"hidden"}}><div style={{width:`${readPct}%`,height:"100%",background:cat.color,borderRadius:6}}/></div></div>
//                   <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"3px 10px",fontSize:10,fontWeight:700,border:`1px solid ${cat.border}`,flexShrink:0}}>#{i+1}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── SERVICE DETAIL MODAL ─────────────────────────────────────────────────────
// function ServiceDetailModal({service:s,onClose}){
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),40);},[]);
//   const statEntries=Object.entries(s.stats).filter(([k])=>!["collegeStats","topCollege"].includes(k));
//   const statLabels={materials:"Materials",downloads:"Total Downloads",requests:"Requests",pending:"Pending",approved:"Approved",rejected:"Adding Soon",created:"Created",downloaded:"Downloaded",templates:"Templates",avgScore:"Avg Score",sent:"Alerts Sent",read:"Read",active:"Active Users",categories:"Categories",events:"Events",reminders:"Reminders",synced:"Synced",upcoming:"Upcoming",courses:"Courses",enrolled:"Enrolled",completed:"Completed",avgHours:"Avg Hours",tests:"Tests",attempts:"Attempts",toppers:"Toppers",sessions:"Sessions",mentors:"Mentors",avgRating:"Avg Rating",placed:"Placed",contests:"Contests",participants:"Participants",problems:"Problems",winners:"Winners"};
//   const statIcons={materials:"📚",downloads:"⬇️",requests:"📨",pending:"⏳",approved:"✅",rejected:"📅",created:"📄",downloaded:"⬇️",templates:"🎨",avgScore:"🎯",sent:"📤",read:"👁",active:"👥",categories:"🏷️",events:"📅",reminders:"🔔",synced:"🔄",upcoming:"📆",courses:"⚡",enrolled:"👥",completed:"🏅",avgHours:"⏱️",tests:"📝",attempts:"🔢",toppers:"🏆",sessions:"💬",mentors:"🧑‍🏫",avgRating:"⭐",placed:"💼",contests:"🏆",participants:"👥",problems:"🧩",winners:"🥇"};
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:640,width:"100%",maxHeight:"90vh",overflow:"auto",boxShadow:C.shadowLg,opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
//         <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
//             <div>
//               <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
//               <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
//               <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center"}}>
//                 <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
//                 <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{padding:"24px 26px"}}>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Key Metrics</div>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
//             {statEntries.map(([k,v],i)=>(
//               <div key={k} style={{background:C.elevated,border:`1.5px solid ${C.border}`,borderRadius:14,padding:"16px 18px",animation:`cardIn 0.35s ease ${i*0.06}s both`}}>
//                 <div style={{fontSize:20,marginBottom:6}}>{statIcons[k]||"📊"}</div>
//                 <div style={{fontSize:22,fontWeight:900,color:s.color}}>{typeof v==="number"?v.toLocaleString():v}</div>
//                 <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{statLabels[k]||k}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── OVERALL SERVICES DASHBOARD ───────────────────────────────────────────────
// function OverallDashboard({onBack}){
//   const [animIn,setAnimIn]=useState(false);
//   const [showPie,setShowPie]=useState(false);
//   const [selectedService,setSelectedService]=useState(null);
//   const [hoveredCard,setHoveredCard]=useState(null);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);
//   const totalUsers=SERVICES.reduce((a,s)=>a+s.users,0);
//   const mostUsed=[...SERVICES].sort((a,b)=>b.users-a.users)[0];
//   const animStyle=(i)=>({opacity:animIn?1:0,transform:animIn?"translateY(0) scale(1)":"translateY(28px) scale(0.96)",transition:`all 0.5s cubic-bezier(.4,0,.2,1) ${i*0.07}s`});
//   return(
//     <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 40%,#f0fdf4 100%)",fontFamily:"'Nunito',sans-serif",color:C.textPri}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(16px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}.svc-card:hover{transform:translateY(-8px) scale(1.02)!important;box-shadow:0 24px 60px rgba(15,23,42,0.14)!important;}.svc-card{transition:all 0.3s cubic-bezier(.4,0,.2,1)!important;}`}</style>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 32px",boxShadow:"0 2px 14px rgba(15,23,42,0.06)",position:"sticky",top:0,zIndex:100}}>
//         <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
//           <div style={{display:"flex",alignItems:"center",gap:16}}>
//             <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"8px 16px",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700}}>← Home</button>
//             <div style={{display:"flex",alignItems:"center",gap:10}}>
//               <span style={{fontSize:28,animation:"float 3s ease-in-out infinite"}}>🌐</span>
//               <div><div style={{fontWeight:900,fontSize:18,color:"#1e40af"}}>OYS Platform</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>Overall Services Dashboard</div></div>
//             </div>
//           </div>
//           <div style={{display:"flex",gap:10,alignItems:"center"}}>
//             <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:12,padding:"8px 18px",fontSize:13,fontWeight:800,color:"#1e40af"}}>👥 {(totalUsers/1000).toFixed(1)}K Total Users</div>
//             <button onClick={()=>setShowPie(true)} style={{background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",border:"none",borderRadius:12,padding:"10px 20px",cursor:"pointer",fontSize:13,fontWeight:800,fontFamily:"inherit",boxShadow:"0 4px 18px rgba(59,130,246,0.4)",display:"flex",alignItems:"center",gap:7}}>📊 View Pie Chart</button>
//           </div>
//         </div>
//       </div>
//       <div style={{maxWidth:1200,margin:"0 auto",padding:"36px 32px"}}>
//         <div style={{...animStyle(0),marginBottom:36}}>
//           <h1 style={{fontSize:34,fontWeight:900,margin:"0 0 6px",color:C.textPri}}>All Services Overview</h1>
//           <p style={{color:C.textSec,fontSize:15,margin:0,fontWeight:600}}>Real-time usage analytics across all OYS platform services</p>
//         </div>
//         <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:40,...animStyle(1)}}>
//           {[{label:"Total Services",value:"8",icon:"🌐",color:"#3b82f6",bg:"#eff6ff",border:"#bfdbfe"},{label:"Total Users",value:`${(totalUsers/1000).toFixed(1)}K`,icon:"👥",color:"#10b981",bg:"#f0fdf4",border:"#a7f3d0"},{label:"Most Used",value:mostUsed.name,icon:mostUsed.icon,color:"#f59e0b",bg:"#fffbeb",border:"#fde68a",small:true},{label:"Active This Month",value:"42.1K",icon:"📈",color:"#6366f1",bg:"#eff6ff",border:"#c7d2fe"}].map((s,i)=>(
//             <div key={i} style={{background:C.surface,border:`1.5px solid ${s.border}`,borderRadius:18,padding:"20px 22px",boxShadow:"0 4px 20px rgba(15,23,42,0.06)",animation:`cardIn 0.4s ease ${i*0.08}s both`}}>
//               <div style={{background:s.bg,borderRadius:10,padding:"8px 10px",fontSize:22,display:"inline-block",marginBottom:12}}>{s.icon}</div>
//               <div style={{fontSize:s.small?16:26,fontWeight:900,color:s.color,lineHeight:1.2,marginBottom:4}}>{s.value}</div>
//               <div style={{fontSize:12,color:C.textMut,fontWeight:700}}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//         <div style={{display:"flex",flexDirection:"column",gap:16}}>
//           {SERVICES.map((s,i)=>{
//             const isHov=hoveredCard===i,pct=Math.round((s.users/totalUsers)*100);
//             return(
//               <div key={s.id} className="svc-card" onMouseEnter={()=>setHoveredCard(i)} onMouseLeave={()=>setHoveredCard(null)} onClick={()=>setSelectedService(s)} style={{background:C.surface,borderRadius:20,border:`2px solid ${isHov?s.color:C.border}`,overflow:"hidden",cursor:"pointer",boxShadow:C.shadow,animation:`cardIn 0.45s ease ${i*0.06}s both`,position:"relative"}}>
//                 <div style={{display:"flex",alignItems:"center"}}>
//                   <div style={{width:6,alignSelf:"stretch",background:s.color,flexShrink:0,borderRadius:"20px 0 0 20px"}}/>
//                   <div style={{background:s.gradient,padding:"22px 24px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
//                     <div style={{width:60,height:60,borderRadius:16,background:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,border:`2px solid ${s.border}`}}>{s.icon}</div>
//                   </div>
//                   <div style={{flex:1,padding:"20px 22px"}}>
//                     <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:8}}>
//                       <div><div style={{fontWeight:900,fontSize:17,color:C.textPri,marginBottom:3}}>{s.name}</div><div style={{fontSize:12,color:C.textSec,fontWeight:600}}>{s.description}</div></div>
//                       <div style={{textAlign:"right",flexShrink:0,marginLeft:16}}><div style={{fontSize:24,fontWeight:900,color:s.color}}>{s.users.toLocaleString()}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>total users</div></div>
//                     </div>
//                     <div style={{marginBottom:10}}><div style={{height:7,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${s.color},${s.color}99)`,borderRadius:8}}/></div></div>
//                     <div style={{display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"}}>
//                       <div style={{fontSize:12,color:C.textSec,fontWeight:700}}>🏆 {s.topCollege}</div>
//                       <div style={{fontSize:12,fontWeight:800,color:"#166534",background:"#f0fdf4",padding:"3px 10px",borderRadius:7,border:"1px solid #86efac"}}>↑ {s.trend}</div>
//                       <div style={{marginLeft:"auto",color:s.color,fontSize:13,fontWeight:800,opacity:isHov?1:0,transition:"opacity 0.2s"}}>View Details →</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {showPie&&<PieChart services={SERVICES} onClose={()=>setShowPie(false)}/>}
//       {selectedService&&selectedService.id==="elibrary"&&<ELibraryDetailModal service={selectedService} onClose={()=>setSelectedService(null)}/>}
//       {selectedService&&selectedService.id!=="elibrary"&&<ServiceDetailModal service={selectedService} onClose={()=>setSelectedService(null)}/>}
//     </div>
//   );
// }

// // ─── PREMIUM UNLOCK BANNER ────────────────────────────────────────────────────
// function PremiumBanner({completedCount,premiumMaterials,onOpen}){
//   const unlocked=completedCount>=3,needed=3-completedCount;
//   return(
//     <div style={{background:unlocked?"linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)":"linear-gradient(135deg,#f1f5f9,#e2e8f0)",border:`2px solid ${unlocked?"#f59e0b":C.border}`,borderRadius:20,padding:"24px 28px",marginBottom:28,position:"relative",overflow:"hidden",animation:"slideDown 0.5s ease"}}>
//       {unlocked&&<div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)",animation:"shimmer 2.5s infinite"}}/>}
//       <div style={{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",position:"relative"}}>
//         <div style={{fontSize:48,animation:unlocked?"bounce 1s ease infinite":"none"}}>{unlocked?"🔓":"🔒"}</div>
//         <div style={{flex:1}}>
//           <div style={{fontWeight:800,fontSize:18,color:unlocked?"#92400e":C.textSec,marginBottom:4}}>{unlocked?"✨ Premium Unlocked! You've completed 3 materials":`${needed} more material${needed>1?"s":""} to unlock Premium`}</div>
//           <div style={{fontSize:13,color:unlocked?"#b45309":C.textMut}}>{unlocked?`${premiumMaterials.length} premium materials now available — click any to open!`:`Complete ${needed} more free material${needed>1?"s":""} to get access to all premium content`}</div>
//           {!unlocked&&(<div style={{marginTop:10,background:"#e2e8f0",borderRadius:10,height:8,overflow:"hidden",maxWidth:300}}><div style={{width:`${(completedCount/3)*100}%`,height:"100%",background:"linear-gradient(90deg,#f59e0b,#fbbf24)",borderRadius:10,transition:"width 1s ease"}}/></div>)}
//         </div>
//         {unlocked&&(
//           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
//             {premiumMaterials.slice(0,3).map(m=>(
//               <button key={m.id} onClick={()=>onOpen(m)} style={{background:"rgba(255,255,255,0.7)",border:"1.5px solid #f59e0b",borderRadius:12,padding:"10px 12px",cursor:"pointer",textAlign:"center",backdropFilter:"blur(8px)"}}>
//                 <MatThumb m={m} size={40}/>
//                 <div style={{fontSize:10,fontWeight:700,color:"#92400e",marginTop:6,lineHeight:1.2}}>{m.title}</div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── E-PREP ROUTING POPUP ─────────────────────────────────────────────────────
// function EPrepRoutingPopup({material,onClose}){
//   const [countdown,setCountdown]=useState(10);
//   const [messages]=useState(["🎯 Preparing your personalised E-Preparation session...","📊 Loading quiz modules and practice sets...","🔄 Syncing your progress and bookmarks...","✅ All set! Redirecting to E-Preparation platform..."]);
//   const [msgIndex,setMsgIndex]=useState(0);
//   const eprepUrl=EPREP_LINKS[material.id]||"https://www.javatpoint.com/java-quiz";
//   useEffect(()=>{
//     const msgInterval=setInterval(()=>{setMsgIndex(p=>Math.min(p+1,messages.length-1));},2500);
//     const countInterval=setInterval(()=>{setCountdown(p=>{if(p<=1){clearInterval(countInterval);clearInterval(msgInterval);window.open(eprepUrl,"_blank");setTimeout(onClose,300);return 0;}return p-1;});},1000);
//     return()=>{clearInterval(msgInterval);clearInterval(countInterval);};
//   },[]);
//   const pct=((10-countdown)/10)*100;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(8px)",padding:20}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:480,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{height:6,background:"linear-gradient(90deg,#1e40af,#6366f1,#8b5cf6)",width:"100%"}}/>
//         <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
//           <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,animation:"orbPulse 2s ease-in-out infinite"}}>🎯</div>
//           <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Redirecting to</div>
//           <h2 style={{margin:"0 0 6px",fontSize:20,fontWeight:900,color:C.textPri}}>E-Preparation Platform</h2>
//           <p style={{margin:"0 0 24px",fontSize:13,color:C.textSec,fontWeight:600}}>{material.title}</p>
//           <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:24,minHeight:52,display:"flex",alignItems:"center",justifyContent:"center"}}>
//             <p style={{margin:0,fontSize:13,color:"#1e40af",fontWeight:700}}>{messages[msgIndex]}</p>
//           </div>
//           <div style={{marginBottom:20}}>
//             <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:10}}>
//               <div style={{width:48,height:48,position:"relative",flexShrink:0}}>
//                 <svg width={48} height={48} style={{transform:"rotate(-90deg)"}}>
//                   <circle cx={24} cy={24} r={20} fill="none" stroke={C.border} strokeWidth={4}/>
//                   <circle cx={24} cy={24} r={20} fill="none" stroke="#1e40af" strokeWidth={4} strokeDasharray={125.6} strokeDashoffset={125.6-(pct/100)*125.6} style={{transition:"stroke-dashoffset 0.9s linear",strokeLinecap:"round"}}/>
//                 </svg>
//                 <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,color:"#1e40af"}}>{countdown}</div>
//               </div>
//               <div style={{textAlign:"left"}}><div style={{fontSize:13,fontWeight:800,color:C.textPri}}>Redirecting in {countdown}s</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>Opens in new tab automatically</div></div>
//             </div>
//             <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#6366f1)",borderRadius:8,transition:"width 0.9s linear"}}/></div>
//           </div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>✕ Cancel</button>
//             <a href={eprepUrl} target="_blank" rel="noreferrer" onClick={onClose} style={{flex:2,background:"linear-gradient(135deg,#1e40af,#3b82f6)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6,boxShadow:"0 4px 18px rgba(30,64,175,0.35)"}}>🚀 Go Now</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
// const CURRENT_STUDENT={id:"s1",name:"Arjun Sharma"};

// function StudentDashboard({onBack}){
//   const [materials,setMaterials]=useState(()=>_globalMaterials.filter(m=>m.studentId===null||m.studentId===CURRENT_STUDENT.id));
//   const [requests,setRequests]=useState(()=>_globalRequests.filter(r=>r.studentId===CURRENT_STUDENT.id));
//   const [search,setSearch]=useState("");
//   const [activeCategory,setActiveCat]=useState("all");
//   const [activeSub,setActiveSub]=useState("all");
//   const [openMaterial,setOpenMat]=useState(null);
//   const [showReqModal,setShowReqModal]=useState(false);
//   const [activeView,setActiveView]=useState("library");
//   const {toasts,add:toast}=useToast();
//   const [animIn,setAnimIn]=useState(false);
//   const [eprepPopup,setEprepPopup]=useState(null);
//   const completedCount=3;

//   useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);
//   useEffect(()=>{
//     setMaterials(_globalMaterials.filter(m=>m.studentId===null||m.studentId===CURRENT_STUDENT.id));
//     setRequests(_globalRequests.filter(r=>r.studentId===CURRENT_STUDENT.id));
//   },[]);

//   // Compute India/Abroad percentages for Higher Education
//   const higherMats=materials.filter(m=>m.category==="higher");
//   const higherTotal=higherMats.length||1;
//   const indiaMatsCount=higherMats.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both").length;
//   const abroadMatsCount=higherMats.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both").length;
//   const indiaPct=Math.round((indiaMatsCount/higherTotal)*100);
//   const abroadPct=Math.round((abroadMatsCount/higherTotal)*100);

//   const filtered=materials.filter(m=>{
//     const q=search.toLowerCase();
//     return(m.title.toLowerCase().includes(q)||m.sub.toLowerCase().includes(q))&&
//       (activeCategory==="all"||m.category===activeCategory)&&
//       (activeSub==="all"||m.sub===activeSub);
//   });

//   const premiumMats=materials.filter(m=>m.type==="premium");

//   const toggleBookmark=id=>{setMaterials(p=>p.map(m=>m.id===id?{...m,bookmarked:!m.bookmarked}:m));toast("Bookmark updated","info");};
//   const handleOpen=m=>{if(m.type==="premium"&&completedCount<3){toast("Complete 3 free materials to unlock premium!","warn");return;}setOpenMat(m);};
//   const handleDownload=m=>{if(m.type==="premium"&&completedCount<3){toast("Complete 3 materials to unlock downloads","warn");return;}toast(`"${m.title}" download started!`,"success");};
//   const handleEprepClick=(m,e)=>{if(m.id===1){e.preventDefault();setEprepPopup(m);}};
//   const submitRequest=data=>{
//     const newReq={id:`r${Date.now()}`,studentId:CURRENT_STUDENT.id,studentName:CURRENT_STUDENT.name,...data,status:"pending",date:new Date().toISOString().slice(0,10)};
//     _globalRequests=[..._globalRequests,newReq];
//     setRequests(p=>[...p,newReq]);
//     setShowReqModal(false);
//     toast("📨 Request sent to admin!","success");
//   };

//   const myPending=requests.filter(r=>r.status==="pending").length;
//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};
//   };

//   return(
//     <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes slideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.mat-card:hover{transform:translateY(-6px) scale(1.02)!important;box-shadow:0 20px 60px rgba(15,23,42,0.15)!important;}.mat-card{transition:all 0.25s cubic-bezier(.4,0,.2,1)!important;}.cat-card:hover{transform:translateY(-4px)!important;box-shadow:0 12px 40px rgba(15,23,42,0.12)!important;}.cat-card{transition:all 0.22s ease!important;}.btn-hover:hover{filter:brightness(1.08);transform:translateY(-1px)!important;}.btn-hover{transition:all 0.18s ease!important;}img{transition:transform 0.35s ease;}.mat-card:hover img{transform:scale(1.08);}`}</style>
//       <ToastContainer toasts={toasts}/>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px",boxShadow:"0 2px 12px rgba(15,23,42,0.06)"}}>
//         <div style={{maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:66}}>
//           <div style={{display:"flex",alignItems:"center",gap:14}}>
//             <button className="btn-hover" onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"7px 14px",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>← Home</button>
//             <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:26}}>📚</span><span style={{fontWeight:900,fontSize:20,color:C.amber,letterSpacing:-0.5}}>OYS E-Library</span></div>
//           </div>
//           <div style={{display:"flex",gap:10,alignItems:"center"}}>
//             <div style={{background:completedCount>=3?"#f0fdf4":"#fffbeb",border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`,borderRadius:20,padding:"6px 16px",color:completedCount>=3?"#166534":"#92400e",fontSize:12,fontWeight:700,fontFamily:"inherit",animation:completedCount>=3?"pulse 2s infinite":"none"}}>{completedCount>=3?"🔓 Premium Unlocked!!":"✅ "+completedCount+"/3 for Premium"}</div>
//             <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 18px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>+ Request Material</button>
//           </div>
//         </div>
//       </div>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px"}}>
//         <div style={{maxWidth:1300,margin:"0 auto",display:"flex",gap:0}}>
//           {[["library","📖 Library"],["requests","📨 My Requests"]].map(([v,l])=>(
//             <button key={v} onClick={()=>setActiveView(v)} style={{background:"none",border:"none",padding:"14px 22px",color:activeView===v?C.amber:C.textSec,borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`,cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s"}}>
//               {l} {v==="requests"&&myPending>0&&<span style={{background:C.rose,color:"#fff",borderRadius:10,padding:"1px 7px",fontSize:10,marginLeft:6}}>{myPending}</span>}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={{maxWidth:1300,margin:"0 auto",padding:"28px",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.5s ease"}}>
//         {activeView==="requests"&&(
//           <div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
//               <h2 style={{margin:0,fontSize:20,fontWeight:800}}>My Material Requests</h2>
//               <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"10px 22px",fontWeight:700,cursor:"pointer",fontSize:13,fontFamily:"inherit"}}>+ New Request</button>
//             </div>
//             {requests.length===0?(
//               <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}><div style={{fontSize:52,marginBottom:14}}>📭</div><div style={{fontSize:16,fontWeight:600,color:C.textSec}}>No requests yet</div></div>
//             ):(
//               <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                 {requests.map(r=>{const badge=getStatusBadge(r.status);return(
//                   <div key={r.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"20px 26px",display:"flex",alignItems:"center",gap:20,boxShadow:C.shadow,animation:"cardIn 0.4s ease"}}>
//                     <div style={{flex:1}}><div style={{fontWeight:800,fontSize:15,marginBottom:4}}>{r.title}</div><div style={{fontSize:12,color:C.textSec,marginBottom:6}}>{CATEGORIES[r.category]?.label} → {r.sub}</div><div style={{fontSize:12,color:C.textMut,fontStyle:"italic"}}>"{r.reason}"</div></div>
//                     <div style={{textAlign:"right"}}><div style={{display:"inline-block",borderRadius:10,padding:"6px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>{badge.text}</div><div style={{fontSize:11,color:C.textMut,marginTop:6}}>{r.date}</div></div>
//                   </div>
//                 );})}
//               </div>
//             )}
//           </div>
//         )}

//         {activeView==="library"&&(
//           <>
//             <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>
//             <div style={{position:"relative",marginBottom:24}}>
//               <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontSize:16,color:C.textMut}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by subject, course, topic..." style={{width:"100%",padding:"14px 16px 14px 46px",borderRadius:14,border:`1.5px solid ${search?C.amber:C.border}`,background:C.surface,color:C.textPri,fontSize:15,outline:"none",boxSizing:"border-box",fontFamily:"inherit",boxShadow:C.shadow,transition:"border-color 0.25s"}}/>
//               {search&&<button onClick={()=>setSearch("")} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:16,color:C.textMut}}>✕</button>}
//             </div>

//             {/* Category Cards */}
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:24}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>(
//                 <div key={key} className="cat-card" onClick={()=>{setActiveCat(activeCategory===key?"all":key);setActiveSub("all");}}
//                   style={{background:activeCategory===key?cat.gradient:C.surface,border:`1.5px solid ${activeCategory===key?cat.color:C.border}`,borderRadius:16,padding:"20px 24px",cursor:"pointer",boxShadow:activeCategory===key?`0 8px 32px ${cat.color}22`:C.shadow}}>
//                   <div style={{fontSize:36,marginBottom:10}}>{cat.icon}</div>
//                   <div style={{fontWeight:800,fontSize:15,color:activeCategory===key?cat.color:C.textPri}}>{cat.label}</div>
//                   <div style={{fontSize:12,marginTop:4,color:C.textSec}}>{CATEGORY_SUBS[key].length} streams · {_globalMaterials.filter(m=>m.category===key).length} materials</div>
//                   {/* ── ADDON: India/Abroad percentages for Higher Education ── */}
//                   {key==="higher"&&(
//                     <div style={{marginTop:10}}>
//                       <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
//                         <span style={{background:"#f0fdf4",color:"#166534",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:"1px solid #86efac"}}>🇮🇳 India</span>
//                         <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:"1px solid #93c5fd"}}>✈️ Abroad</span>
//                       </div>
//                       {/* Percentage mini-bars */}
//                       <div style={{display:"flex",flexDirection:"column",gap:4}}>
//                         <div>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#166534",fontWeight:700,marginBottom:2}}>
//                             <span>🇮🇳 India</span><span>{indiaPct}%</span>
//                           </div>
//                           <div style={{height:5,background:"rgba(134,239,172,0.3)",borderRadius:4,overflow:"hidden"}}>
//                             <div style={{width:`${indiaPct}%`,height:"100%",background:"linear-gradient(90deg,#10b981,#34d399)",borderRadius:4,transition:"width 1s ease"}}/>
//                           </div>
//                         </div>
//                         <div>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#1e40af",fontWeight:700,marginBottom:2}}>
//                             <span>✈️ Abroad</span><span>{abroadPct}%</span>
//                           </div>
//                           <div style={{height:5,background:"rgba(147,197,253,0.3)",borderRadius:4,overflow:"hidden"}}>
//                             <div style={{width:`${abroadPct}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#818cf8)",borderRadius:4,transition:"width 1s ease"}}/>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Higher Education India/Abroad sub-filter */}
//             {activeCategory==="higher"&&(
//               <div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:14,padding:"14px 18px",marginBottom:18,display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
//                 <span style={{fontSize:13,fontWeight:800,color:"#5b21b6"}}>🌍 Filter by Destination:</span>
//                 {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"]].map(([v,l])=>(
//                   <button key={v} onClick={()=>setActiveSub(v==="all"?"all":v)} style={{padding:"7px 14px",borderRadius:9,border:`1.5px solid ${activeSub===(v==="all"?"all":v)?"#7c3aed":"#c4b5fd"}`,background:activeSub===(v==="all"?"all":v)?"#7c3aed":"rgba(255,255,255,0.7)",color:activeSub===(v==="all"?"all":v)?"#fff":"#5b21b6",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.18s"}}>
//                     {l}
//                   </button>
//                 ))}
//                 {/* Inline percentage display */}
//                 <div style={{marginLeft:"auto",display:"flex",gap:10}}>
//                   <span style={{background:"#f0fdf4",color:"#166534",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:"1px solid #86efac"}}>🇮🇳 India: {indiaPct}%</span>
//                   <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:"1px solid #93c5fd"}}>✈️ Abroad: {abroadPct}%</span>
//                 </div>
//               </div>
//             )}

//             <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:22,flexWrap:"wrap"}}>
//               {activeCategory!=="all"&&activeCategory!=="higher"&&(
//                 <select value={activeSub} onChange={e=>setActiveSub(e.target.value)} style={{padding:"9px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",outline:"none",fontFamily:"inherit"}}>
//                   {["all",...CATEGORY_SUBS[activeCategory]].map(s=><option key={s} value={s}>{s==="all"?"All Sub-categories":s}</option>)}
//                 </select>
//               )}
//               <div style={{marginLeft:"auto",color:C.textMut,fontSize:13,fontWeight:600}}>
//                 {filtered.filter(m=>{
//                   if(activeCategory!=="higher") return true;
//                   if(activeSub==="all") return true;
//                   if(activeSub==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//                   if(activeSub==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//                   return true;
//                 }).length} materials
//               </div>
//             </div>

//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:20}}>
//               {filtered.filter(m=>{
//                 if(activeCategory!=="higher") return true;
//                 if(activeSub==="all") return true;
//                 if(activeSub==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//                 if(activeSub==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//                 return true;
//               }).map((m,i)=>{
//                 const cat=CATEGORIES[m.category];
//                 const locked=m.type==="premium"&&completedCount<3;
//                 const crash=CRASH_COURSES[m.id];
//                 const isJava=m.id===1;
//                 return(
//                   <div key={m.id} className="mat-card" style={{background:C.surface,borderRadius:18,border:`1.5px solid ${m.bookmarked?C.amber:C.border}`,overflow:"hidden",animation:`cardIn 0.45s ease ${i*0.05}s both`,boxShadow:C.shadow,position:"relative"}}>
//                     <div style={{background:cat.gradient,padding:"28px 0 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,position:"relative",minHeight:130}}>
//                       <MatThumb m={m} size={80}/>
//                       {locked&&<div style={{position:"absolute",top:10,left:10,background:"#92400e",color:"#fef3c7",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>🔒 PREMIUM</div>}
//                       {!locked&&m.type==="premium"&&<div style={{position:"absolute",top:10,left:10,background:cat.color,color:"#fff",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>✨ PREMIUM</div>}
//                       {m.uploadType==="pdf"&&<div style={{position:"absolute",bottom:10,right:10,background:"#fef2f2",color:"#991b1b",border:"1px solid #fca5a5",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>📄 PDF</div>}
//                       {m.uploadType==="link"&&<div style={{position:"absolute",bottom:10,right:10,background:"#eff6ff",color:"#1e40af",border:"1px solid #93c5fd",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>🔗 Link</div>}
//                       {m.category==="higher"&&m.indiaOrAbroad&&(
//                         <div style={{position:"absolute",bottom:10,left:10,background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",border:`1px solid ${m.indiaOrAbroad==="India"?"#86efac":m.indiaOrAbroad==="Abroad"?"#93c5fd":"#c4b5fd"}`,fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>
//                           {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
//                         </div>
//                       )}
//                       <button onClick={e=>{e.stopPropagation();toggleBookmark(m.id);}} style={{position:"absolute",top:10,right:10,background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)",border:`1px solid ${m.bookmarked?C.amber:C.border}`,borderRadius:8,padding:"5px 8px",cursor:"pointer",fontSize:14,backdropFilter:"blur(4px)"}}>{m.bookmarked?"🔖":"🏷️"}</button>
//                     </div>
//                     <div style={{padding:"14px 16px 16px"}}>
//                       <div style={{fontWeight:800,fontSize:14,marginBottom:4,color:C.textPri,lineHeight:1.3}}>{m.title}</div>
//                       <div style={{fontSize:11,color:C.textSec,marginBottom:10,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
//                         <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 8px",fontWeight:700,border:`1px solid ${cat.border}`}}>{m.sub}</span>
//                         <span style={{color:C.textMut}}>{m.pages}p · {m.topics} topics</span>
//                       </div>
//                       {m.progress>0&&(
//                         <div style={{marginBottom:12}}>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.textMut,marginBottom:4}}><span>Progress</span><span style={{color:cat.color,fontWeight:700}}>{m.progress}%</span></div>
//                           <div style={{height:6,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${m.progress}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}cc)`,borderRadius:8,transition:"width 1s ease"}}/></div>
//                         </div>
//                       )}
//                       <div style={{display:"flex",gap:7,marginBottom:8}}>
//                         <button className="btn-hover" onClick={()=>handleOpen(m)} style={{flex:1,background:locked?"#f1f5f9":`linear-gradient(135deg,${cat.color},${cat.color}dd)`,color:locked?C.textMut:"#fff",border:"none",borderRadius:10,padding:"9px 0",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",boxShadow:locked?"none":`0 4px 14px ${cat.color}33`}}>{locked?"🔒 Locked":"📖 Open"}</button>
//                         <button className="btn-hover" onClick={()=>handleDownload(m)} style={{background:"#f1f5f9",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",cursor:"pointer",fontSize:13,color:C.textSec}} title="Download">⬇️</button>
//                       </div>
//                       {!locked&&(
//                         <div style={{display:"flex",gap:7}}>
//                           {isJava?(
//                             <button onClick={()=>setEprepPopup(m)} style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",fontFamily:"inherit"}}>🎯 E-Prep</button>
//                           ):(
//                             <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",textDecoration:"none"}}>🎯 E-Prep</a>
//                           )}
//                           {crash&&(<a href={crash.url} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#fff7ed,#ffedd5)",border:"1.5px solid #fdba74",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#c2410c",textDecoration:"none"}}>⚡ Crash Course</a>)}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>

//       {openMaterial&&<MaterialModal material={openMaterial} onClose={()=>setOpenMat(null)} toast={toast} onEprepClick={m=>setEprepPopup(m)}/>}
//       {showReqModal&&<RequestMaterialModal onClose={()=>setShowReqModal(false)} onSubmit={submitRequest}/>}
//       {eprepPopup&&<EPrepRoutingPopup material={eprepPopup} onClose={()=>setEprepPopup(null)}/>}
//     </div>
//   );
// }

// // ─── MATERIAL MODAL ───────────────────────────────────────────────────────────
// function MaterialModal({material:m,onClose,toast,onEprepClick}){
//   const [topics,setTopics]=useState(JAVA_TOPICS);
//   const [activeTab,setActiveTab]=useState("topics");
//   const cat=CATEGORIES[m.category];
//   const done=topics.filter(t=>t.done).length;
//   const pct=Math.round((done/topics.length)*100);
//   const crash=CRASH_COURSES[m.id];
//   const allDone=done===topics.length;
//   const isJava=m.id===1;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease"}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease"}}>
//         <div style={{background:cat.gradient,padding:"28px 28px 22px",borderRadius:"22px 22px 0 0",position:"relative",borderBottom:`1px solid ${cat.border}`}}>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:14,color:C.textSec,backdropFilter:"blur(4px)"}}>✕</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <MatThumb m={m} size={72}/>
//             <div>
//               <h2 style={{margin:"0 0 6px",color:cat.color,fontSize:20,fontWeight:800}}>{m.title}</h2>
//               <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
//               <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
//                 {isJava?(<button onClick={()=>onEprepClick(m)} style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,border:"none",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(30,64,175,0.35)"}}>🎯 E-Preparation</button>)
//                 :(<a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:"0 4px 14px rgba(30,64,175,0.35)"}}>🎯 E-Preparation</a>)}
//                 {crash&&(<a href={crash.url} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:crash.color,color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none",boxShadow:`0 4px 14px ${crash.color}44`}}>⚡ {crash.title}</a>)}
//               </div>
//             </div>
//           </div>
//           <div style={{display:"flex",gap:16,marginTop:18,alignItems:"center"}}>
//             <Ring pct={pct} size={58} stroke={5} color={cat.color}/>
//             <div><div style={{fontWeight:800,fontSize:15,color:cat.color}}>{pct}% complete</div><div style={{fontSize:12,color:C.textSec}}>{done}/{topics.length} topics done</div></div>
//             {allDone&&(<div style={{marginLeft:"auto",background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:12,padding:"8px 16px",color:"#166534",fontSize:12,fontWeight:700,animation:"bounce 1s ease"}}>🎉 Material Completed!</div>)}
//           </div>
//         </div>
//         <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,padding:"0 24px"}}>
//           {[["topics","📚 Topics"],["notes","🗒️ Notes"]].map(([t,l])=>(
//             <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"13px 20px",border:"none",background:"none",fontWeight:700,fontSize:13,cursor:"pointer",color:activeTab===t?cat.color:C.textSec,borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`,fontFamily:"inherit",transition:"all 0.2s"}}>{l}</button>
//           ))}
//         </div>
//         <div style={{padding:24}}>
//           {activeTab==="topics"&&topics.map((t,i)=>(
//             <div key={t.id} onClick={()=>setTopics(p=>p.map(x=>x.id===t.id?{...x,done:!x.done}:x))} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:12,marginBottom:8,cursor:"pointer",background:t.done?cat.gradient:C.elevated,border:`1.5px solid ${t.done?cat.color:C.border}`,transition:"all 0.2s",animation:`cardIn 0.3s ease ${i*0.03}s both`}}>
//               <div style={{width:28,height:28,borderRadius:"50%",background:t.done?cat.color:"transparent",border:`2px solid ${t.done?cat.color:C.borderHi}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.done?"#fff":C.textMut,fontWeight:800,fontSize:12,flexShrink:0,transition:"all 0.2s"}}>{t.done?"✓":i+1}</div>
//               <div style={{flex:1}}><div style={{fontWeight:700,fontSize:13,color:C.textPri}}>{t.title}</div><div style={{fontSize:11,color:C.textMut}}>{t.pages} pages</div></div>
//               {t.done&&<span style={{fontSize:10,background:cat.color,color:"#fff",borderRadius:6,padding:"3px 9px",fontWeight:700}}>Done</span>}
//             </div>
//           ))}
//           {activeTab==="notes"&&(
//             <div>
//               <textarea placeholder="Write your personal notes here..." style={{width:"100%",minHeight:160,borderRadius:12,padding:14,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
//               <button onClick={()=>toast("Notes saved!","success")} style={{marginTop:10,background:cat.color,color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontWeight:700,cursor:"pointer",fontFamily:"inherit",boxShadow:`0 4px 14px ${cat.color}33`}}>💾 Save Notes</button>
//             </div>
//           )}
//         </div>
//       </div>
//       <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
//     </div>
//   );
// }

// // ─── REQUEST MODAL ────────────────────────────────────────────────────────────
// function RequestMaterialModal({onClose,onSubmit}){
//   const [form,setForm]=useState({title:"",category:"private",sub:"IT",reason:""});
//   const s=f=>v=>setForm(p=>({...p,[f]:v}));
//   const valid=form.title.trim()&&form.reason.trim();
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:500,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
//         <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:800}}>📨 Request New Material</h2>
//           <button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer",fontSize:13}}>✕</button>
//         </div>
//         <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:16}}>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8,fontFamily:"inherit"}}>Material Title *</label><input value={form.title} onChange={e=>s("title")(e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/></div>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
//             <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Category</label><select value={form.category} onChange={e=>{s("category")(e.target.value);s("sub")(CATEGORY_SUBS[e.target.value][0]);}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select></div>
//             <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label><select value={form.sub} onChange={e=>s("sub")(e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}</select></div>
//           </div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Why do you need this? *</label><textarea value={form.reason} onChange={e=>s("reason")(e.target.value)} placeholder="Describe why this material would help your studies..." rows={3} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:13}}>Cancel</button>
//             <button onClick={()=>valid&&onSubmit(form)} style={{flex:2,background:valid?C.amber:"#e2e8f0",color:valid?"#fff":C.textMut,border:"none",borderRadius:10,padding:12,cursor:valid?"pointer":"not-allowed",fontWeight:800,fontFamily:"inherit",fontSize:13,boxShadow:valid?"0 4px 14px rgba(245,158,11,0.35)":"none"}}>📨 Send Request</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── STUDENT ANALYTICS DASHBOARD ─────────────────────────────────────────────
// function StudentAnalyticsDashboard({materials,students}){
//   const [view,setView]=useState("college");
//   const [higherFilter,setHigherFilter]=useState("all");

//   // ── ADDON: Compute India/Abroad percentages ──
//   const higherMats=materials.filter(m=>m.category==="higher");
//   const higherTotal=higherMats.length||1;
//   const indiaMats=higherMats.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both");
//   const abroadMats=higherMats.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both");
//   const indiaPct=Math.round((indiaMats.length/higherTotal)*100);
//   const abroadPct=Math.round((abroadMats.length/higherTotal)*100);
//   const bothPct=Math.round((higherMats.filter(m=>m.indiaOrAbroad==="Both").length/higherTotal)*100);

//   const getDeptMaterials=(cat)=>materials.filter(m=>m.category===cat).sort((a,b)=>b.downloads-a.downloads);
//   const getHigherMaterials=()=>materials.filter(m=>{
//     if(m.category!=="higher") return false;
//     if(higherFilter==="all") return true;
//     if(higherFilter==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//     if(higherFilter==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//     if(higherFilter==="Both") return m.indiaOrAbroad==="Both";
//     return true;
//   }).sort((a,b)=>b.downloads-a.downloads);

//   const deptTabs=[
//     {id:"college",label:"🏛️ By College",color:C.amber},
//     {id:"private",label:"🏢 Private Sector",color:"#f59e0b"},
//     {id:"government",label:"🏛️ Government",color:"#10b981"},
//     {id:"higher",label:"🎓 Higher Education",color:"#6366f1"},
//   ];

//   const renderDeptMaterials=(mats,cat)=>{
//     const catInfo=CATEGORIES[cat];
//     if(mats.length===0) return(<div style={{textAlign:"center",padding:"40px 0",color:C.textMut}}><div style={{fontSize:40,marginBottom:10}}>📭</div><div style={{fontSize:14,fontWeight:600}}>No materials found</div></div>);
//     const maxDl=mats[0]?.downloads||1;
//     return(
//       <div style={{display:"flex",flexDirection:"column",gap:12}}>
//         {mats.map((m,i)=>{
//           const pct=Math.round((m.downloads/maxDl)*100);
//           const medals=["🥇","🥈","🥉"];
//           const viewed=MOST_VIEWED_MATERIALS.find(v=>v.id===m.id);
//           return(
//             <div key={m.id} style={{background:C.surface,border:`1.5px solid ${catInfo.color}22`,borderRadius:14,padding:"18px 20px",animation:`cardIn 0.35s ease ${i*0.06}s both`,boxShadow:C.shadow}}>
//               <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
//                 <div style={{width:48,height:48,borderRadius:12,background:catInfo.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,border:`1px solid ${catInfo.border}`}}>{m.emoji}</div>
//                 <div style={{flex:1}}>
//                   <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
//                     <span style={{fontWeight:800,fontSize:14}}>{m.title}</span>
//                     <span style={{fontSize:16,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
//                     {m.category==="higher"&&m.indiaOrAbroad&&(
//                       <span style={{background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:`1px solid ${m.indiaOrAbroad==="India"?"#86efac":m.indiaOrAbroad==="Abroad"?"#93c5fd":"#c4b5fd"}`}}>
//                         {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
//                       </span>
//                     )}
//                   </div>
//                   <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
//                     <span style={{background:catInfo.bg,color:catInfo.color,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,border:`1px solid ${catInfo.border}`}}>{m.sub}</span>
//                     <span style={{fontSize:12,color:C.textSec,fontWeight:700}}>⬇️ {m.downloads.toLocaleString()} downloads</span>
//                     {viewed&&<span style={{fontSize:12,color:C.textSec,fontWeight:700}}>👁 {viewed.views.toLocaleString()} views</span>}
//                     {viewed&&<span style={{fontSize:12,fontWeight:800,color:Math.round((viewed.reads/viewed.views)*100)>=70?"#166534":"#92400e",background:Math.round((viewed.reads/viewed.views)*100)>=70?"#f0fdf4":"#fffbeb",borderRadius:6,padding:"2px 8px"}}>{Math.round((viewed.reads/viewed.views)*100)}% read rate</span>}
//                   </div>
//                 </div>
//                 <div style={{background:catInfo.bg,color:catInfo.color,borderRadius:10,padding:"6px 14px",fontSize:13,fontWeight:900,border:`1px solid ${catInfo.border}`,flexShrink:0}}>#{i+1}</div>
//               </div>
//               <div>
//                 <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:C.textMut,marginBottom:3}}><span>Downloads</span><span style={{fontWeight:700,color:catInfo.color}}>{pct}% of top</span></div>
//                 <div style={{height:7,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${catInfo.color},${catInfo.color}88)`,borderRadius:8,transition:"width 1.2s ease"}}/></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22,flexWrap:"wrap",gap:12}}>
//         <h1 style={{fontSize:22,fontWeight:900,margin:0}}>📊 Student Analytics</h1>
//         <div style={{display:"flex",gap:6,background:C.elevated,borderRadius:12,padding:4,border:`1px solid ${C.border}`,flexWrap:"wrap"}}>
//           {deptTabs.map(tab=>(
//             <button key={tab.id} onClick={()=>{setView(tab.id);setHigherFilter("all");}} style={{padding:"8px 14px",borderRadius:9,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:view===tab.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":C.elevated,color:view===tab.id?C.amberDim:C.textSec,transition:"all 0.18s",whiteSpace:"nowrap"}}>{tab.label}</button>
//           ))}
//         </div>
//       </div>
//       <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:28}}>
//         {[{icon:"👥",label:"Total Readers",value:COLLEGE_READING_DATA.reduce((a,c)=>a+c.readers,0).toLocaleString(),color:"#3b82f6",bg:"#eff6ff"},{icon:"🏛️",label:"Colleges Active",value:COLLEGE_READING_DATA.length,color:"#10b981",bg:"#f0fdf4"},{icon:"📖",label:"Most Read",value:"UPSC History",color:"#f59e0b",bg:"#fffbeb",small:true},{icon:"📈",label:"Avg Read Rate",value:"74%",color:"#6366f1",bg:"#eff6ff"}].map((s,i)=>(
//           <div key={i} style={{background:C.surface,border:`1.5px solid ${s.color}33`,borderRadius:14,padding:"18px 20px",animation:`cardIn 0.4s ease ${i*0.07}s both`,transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
//             <div style={{background:s.bg,borderRadius:10,padding:"7px 9px",fontSize:18,display:"inline-block",marginBottom:10}}>{s.icon}</div>
//             <div style={{fontSize:s.small?14:22,fontWeight:900,color:s.color,lineHeight:1.2,marginBottom:3}}>{s.value}</div>
//             <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{s.label}</div>
//           </div>
//         ))}
//       </div>

//       {view==="college"&&(
//         <div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Readers by College</div>
//           <div style={{display:"flex",flexDirection:"column",gap:12}}>
//             {COLLEGE_READING_DATA.map((clg,i)=>{
//               const maxR=COLLEGE_READING_DATA[0].readers,pct=Math.round((clg.readers/maxR)*100);
//               const medals=["🥇","🥈","🥉"];
//               return(
//                 <div key={clg.college} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px 20px",animation:`cardIn 0.35s ease ${i*0.06}s both`,boxShadow:C.shadow}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
//                     <div style={{display:"flex",alignItems:"center",gap:12}}>
//                       <span style={{fontSize:18,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
//                       <div><div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.college}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600,marginTop:2}}>📚 Reading: {clg.materials.slice(0,3).join(", ")}{clg.materials.length>3?` +${clg.materials.length-3} more`:""}</div></div>
//                     </div>
//                     <div style={{textAlign:"right",flexShrink:0}}><div style={{fontSize:18,fontWeight:900,color:C.amber}}>{clg.readers.toLocaleString()}</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>active readers</div></div>
//                   </div>
//                   <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${C.amber},${C.amberHi})`,borderRadius:8,transition:"width 1.2s ease"}}/></div>
//                   <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
//                     {clg.materials.map(mat=>(<span key={mat} style={{background:"#fffbeb",color:"#92400e",border:"1px solid #fde68a",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700}}>{mat}</span>))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {view==="private"&&(
//         <div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏢 Private Sector — Most Viewed Materials</div>
//           {renderDeptMaterials(getDeptMaterials("private"),"private")}
//         </div>
//       )}

//       {view==="government"&&(
//         <div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Government Exams — Most Viewed Materials</div>
//           {renderDeptMaterials(getDeptMaterials("government"),"government")}
//         </div>
//       )}

//       {view==="higher"&&(
//         <div>
//           {/* ── ADDON: India/Abroad percentage breakdown ── */}
//           <div style={{background:"linear-gradient(135deg,#f5f3ff,#ede9fe)",border:"1.5px solid #c4b5fd",borderRadius:16,padding:"18px 22px",marginBottom:20,animation:"cardIn 0.4s ease"}}>
//             <div style={{fontSize:11,color:"#5b21b6",fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🌍 Higher Education — India vs Abroad Breakdown</div>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:14}}>
//               {[
//                 {label:"India",pct:indiaPct,count:indiaMats.length,icon:"🇮🇳",color:"#166534",bg:"#f0fdf4",bar:"linear-gradient(90deg,#10b981,#34d399)",border:"#86efac"},
//                 {label:"Abroad",pct:abroadPct,count:abroadMats.length,icon:"✈️",color:"#1e40af",bg:"#eff6ff",bar:"linear-gradient(90deg,#3b82f6,#818cf8)",border:"#93c5fd"},
//                 {label:"Both",pct:bothPct,count:higherMats.filter(m=>m.indiaOrAbroad==="Both").length,icon:"🌐",color:"#5b21b6",bg:"#f5f3ff",bar:"linear-gradient(90deg,#7c3aed,#a78bfa)",border:"#c4b5fd"},
//               ].map((s,i)=>(
//                 <div key={s.label} style={{background:s.bg,border:`1.5px solid ${s.border}`,borderRadius:12,padding:"14px 16px",animation:`cardIn 0.35s ease ${i*0.08}s both`}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
//                     <div><div style={{fontSize:20,marginBottom:4}}>{s.icon}</div><div style={{fontSize:11,color:s.color,fontWeight:800,textTransform:"uppercase",letterSpacing:0.5}}>{s.label}</div></div>
//                     <div style={{textAlign:"right"}}>
//                       <div style={{fontSize:24,fontWeight:900,color:s.color,lineHeight:1}}>{s.pct}%</div>
//                       <div style={{fontSize:10,color:s.color,fontWeight:600,opacity:0.7}}>{s.count} material{s.count!==1?"s":""}</div>
//                     </div>
//                   </div>
//                   <div style={{height:7,background:"rgba(0,0,0,0.06)",borderRadius:8,overflow:"hidden"}}>
//                     <div style={{width:`${s.pct}%`,height:"100%",background:s.bar,borderRadius:8,transition:"width 1.2s ease"}}/>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* Stacked percentage bar */}
//             <div>
//               <div style={{fontSize:10,color:"#5b21b6",fontWeight:700,marginBottom:5}}>Distribution Overview</div>
//               <div style={{height:10,borderRadius:10,overflow:"hidden",display:"flex",gap:1}}>
//                 <div style={{width:`${indiaPct}%`,height:"100%",background:"linear-gradient(90deg,#10b981,#34d399)",transition:"width 1.2s ease",borderRadius:"10px 0 0 10px"}}/>
//                 <div style={{width:`${Math.max(abroadPct-bothPct,0)}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#818cf8)",transition:"width 1.2s ease"}}/>
//                 <div style={{flex:1,height:"100%",background:"linear-gradient(90deg,#7c3aed,#a78bfa)",borderRadius:"0 10px 10px 0"}}/>
//               </div>
//               <div style={{display:"flex",gap:14,marginTop:6}}>
//                 {[["#10b981","🇮🇳 India"],["#3b82f6","✈️ Abroad"],["#7c3aed","🌐 Both"]].map(([c,l])=>(
//                   <div key={l} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:C.textMut,fontWeight:600}}>
//                     <div style={{width:8,height:8,borderRadius:"50%",background:c,flexShrink:0}}/>{l}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,flexWrap:"wrap",gap:10}}>
//             <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1}}>🎓 Higher Education — Most Viewed Materials</div>
//             <div style={{display:"flex",gap:6,background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",borderRadius:12,padding:"6px 8px",border:"1.5px solid #c4b5fd"}}>
//               {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"],["Both","🌐 Both"]].map(([v,l])=>(
//                 <button key={v} onClick={()=>setHigherFilter(v)} style={{padding:"6px 12px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",background:higherFilter===v?"#7c3aed":"rgba(255,255,255,0.6)",color:higherFilter===v?"#fff":"#5b21b6",transition:"all 0.18s",whiteSpace:"nowrap"}}>{l}</button>
//               ))}
//             </div>
//           </div>
//           {renderDeptMaterials(getHigherMaterials(),"higher")}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
// function AdminDashboard({onBack}){
//   const [materials,setMaterials]=useState(()=>_globalMaterials.map(m=>({...m})));
//   const [requests,setRequests]=useState(()=>[..._globalRequests]);
//   const [students]=useState(()=>_globalStudents.map(s=>({...s})));
//   const [activeTab,setActiveTab]=useState("overview");
//   const [filterCat,setFilterCat]=useState("all");
//   const [filterType,setFilterType]=useState("all");
//   const [search,setSearch]=useState("");
//   const [showAddModal,setShowAdd]=useState(false);
//   const [showBulkImport,setShowBulkImport]=useState(false); // ── ADDON
//   const [editItem,setEditItem]=useState(null);
//   const [previewItem,setPreview]=useState(null);
//   const [deleteConfirm,setDelConf]=useState(null);
//   const [selectedStudent,setSelStu]=useState(null);
//   const [animIn,setAnimIn]=useState(false);
//   const [addingSoonPopup,setAddingSoonPopup]=useState(null);
//   const {toasts,add:toast}=useToast();

//   useEffect(()=>{
//     setTimeout(()=>setAnimIn(true),80);
//     const t=setInterval(()=>setRequests([..._globalRequests]),2000);
//     return()=>clearInterval(t);
//   },[]);

//   const handleDelete=id=>{const updated=materials.filter(m=>m.id!==id);setMaterials(updated);_globalMaterials=updated;setDelConf(null);toast("Material deleted","error");};

//   const handleSave=data=>{
//     if(editItem){const updated=materials.map(m=>m.id===editItem.id?{...m,...data}:m);setMaterials(updated);_globalMaterials=updated;toast("Material updated!","success");}
//     else{const newM={...data,id:Date.now(),progress:0,bookmarked:false,downloads:0,emoji:data.emoji||"📄"};const updated=[...materials,newM];setMaterials(updated);_globalMaterials=updated;toast("Material added!","success");}
//     setShowAdd(false);setEditItem(null);
//   };

//   // ── ADDON: Bulk Import Handler ──
//   const handleBulkImport=(newMaterials)=>{
//     const updated=[...materials,...newMaterials];
//     setMaterials(updated);
//     _globalMaterials=updated;
//     toast(`✅ ${newMaterials.length} material${newMaterials.length!==1?"s":""} imported successfully!`,"success");
//   };

//   const approveRequest=(req,studentOnly)=>{
//     const newM={id:Date.now(),title:req.title,category:req.category,sub:req.sub,type:"free",emoji:"📄",topics:5,progress:0,pages:100,downloads:0,bookmarked:false,studentId:studentOnly?req.studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null};
//     const updatedM=[...materials,newM];setMaterials(updatedM);_globalMaterials=updatedM;
//     const updatedR=_globalRequests.map(r=>r.id===req.id?{...r,status:"approved"}:r);_globalRequests=updatedR;setRequests([...updatedR]);
//     toast(`✅ "${req.title}" approved!`,"success");
//   };

//   const markAddingSoon=(id)=>{
//     const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r);_globalRequests=updatedR;setRequests([...updatedR]);setAddingSoonPopup(null);
//     toast("📅 Student notified! Material is being added soon.","info");
//   };

//   const filtered=materials.filter(m=>m.title.toLowerCase().includes(search.toLowerCase())&&(filterCat==="all"||m.category===filterCat)&&(filterType==="all"||m.type===filterType));
//   const pendingReqs=requests.filter(r=>r.status==="pending");
//   const stats={total:materials.length,free:materials.filter(m=>m.type==="free").length,premium:materials.filter(m=>m.type==="premium").length,downloads:materials.reduce((a,m)=>a+m.downloads,0),students:students.length,pending:pendingReqs.length};

//   const TABS=[
//     {id:"overview",label:"📊 Overview"},{id:"materials",label:"📚 Materials"},
//     {id:"requests",label:`📨 Requests ${stats.pending>0?`(${stats.pending})`:""}`},
//     {id:"students",label:"👥 Students"},
//     {id:"student-analytics",label:"📈 Student Analytics"},
//     {id:"categories",label:"🏷️ Categories"},
//   ];

//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};
//   };

//   return(
//     <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.3)}50%{box-shadow:0 0 0 8px rgba(16,185,129,0)}}.row-hover:hover{background:#f8fafc!important;}.btn-sm:hover{filter:brightness(1.08);transform:translateY(-1px);}.btn-sm{transition:all 0.15s ease;}`}</style>
//       <ToastContainer toasts={toasts}/>

//       <div style={{position:"fixed",left:0,top:0,bottom:0,width:232,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",zIndex:100,boxShadow:"2px 0 12px rgba(15,23,42,0.06)"}}>
//         <div style={{padding:"24px 20px",borderBottom:`1px solid ${C.border}`}}>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:4,letterSpacing:1.5,textTransform:"uppercase"}}>OYS E-LIBRARY</div>
//           <div style={{fontSize:18,fontWeight:900,color:C.amber}}>Admin Panel</div>
//         </div>
//         <nav style={{padding:"16px 12px",flex:1,overflowY:"auto"}}>
//           {TABS.map(t=>(
//             <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{width:"100%",textAlign:"left",padding:"11px 14px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:4,background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent",color:activeTab===t.id?C.amberDim:C.textSec,fontWeight:activeTab===t.id?800:600,fontSize:13,transition:"all 0.18s",borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`,fontFamily:"inherit"}}>{t.label}</button>
//           ))}
//         </nav>
//         <div style={{padding:"16px 12px",borderTop:`1px solid ${C.border}`}}>
//           <button onClick={onBack} style={{width:"100%",padding:"11px 14px",borderRadius:10,background:"#fef2f2",border:"1.5px solid #fca5a5",color:"#991b1b",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>← Back to Home</button>
//         </div>
//       </div>

//       <div style={{marginLeft:232,padding:"28px 32px",opacity:animIn?1:0,transition:"opacity 0.5s ease"}}>

//         {activeTab==="overview"&&(
//           <div>
//             <h1 style={{fontSize:24,fontWeight:900,marginBottom:26}}>Dashboard Overview</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:30}}>
//               {[{label:"Total Materials",value:stats.total,icon:"📚",color:C.amber,bg:"#fffbeb"},{label:"Free Materials",value:stats.free,icon:"🆓",color:C.sage,bg:"#f0fdf4"},{label:"Premium",value:stats.premium,icon:"✨",color:C.indigo,bg:"#eff6ff"},{label:"Total Downloads",value:stats.downloads.toLocaleString(),icon:"⬇️",color:C.rose,bg:"#fef2f2"},{label:"Students",value:stats.students,icon:"👥",color:C.blue,bg:"#eff6ff"},{label:"Pending Requests",value:stats.pending,icon:"⏳",color:C.amberDim,bg:"#fffbeb"}].map((s,i)=>(
//                 <div key={i} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,padding:"20px 22px",boxShadow:C.shadow,animation:`cardIn 0.4s ease ${i*0.07}s both`,transition:"transform 0.2s,box-shadow 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}}>
//                   <div style={{background:s.bg,borderRadius:10,padding:"8px 10px",fontSize:20,display:"inline-block",marginBottom:12}}>{s.icon}</div>
//                   <div style={{fontSize:28,fontWeight:900,color:s.color}}>{s.value}</div>
//                   <div style={{fontSize:12,color:C.textMut,marginTop:3,fontWeight:600}}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//             <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>Downloads by Category</h2>
//             <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px 26px",marginBottom:26,boxShadow:C.shadow}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>{
//                 const count=materials.filter(m=>m.category===key).reduce((a,m)=>a+m.downloads,0);
//                 const max=materials.reduce((a,m)=>a+m.downloads,0);
//                 const pct=max?Math.round((count/max)*100):0;
//                 return(
//                   <div key={key} style={{marginBottom:18}}>
//                     <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
//                       <span style={{fontWeight:700,color:C.textSec}}>{cat.icon} {cat.label}</span>
//                       <span style={{color:cat.color,fontWeight:800}}>{count.toLocaleString()} ({pct}%)</span>
//                     </div>
//                     <div style={{height:9,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}aa)`,borderRadius:8,transition:"width 1.2s ease 0.3s"}}/></div>
//                   </div>
//                 );
//               })}
//             </div>
//             {pendingReqs.length>0&&(
//               <>
//                 <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>⏳ Pending Requests</h2>
//                 <div style={{display:"flex",flexDirection:"column",gap:10}}>
//                   {pendingReqs.slice(0,3).map(r=>(
//                     <div key={r.id} style={{background:C.surface,border:"1.5px solid #fcd34d",borderRadius:14,padding:"15px 20px",display:"flex",alignItems:"center",gap:16,boxShadow:C.shadow}}>
//                       <div style={{flex:1}}><span style={{fontWeight:800,color:C.amber}}>{r.title}</span><span style={{color:C.textMut,fontSize:12,marginLeft:10}}>by {r.studentName}</span></div>
//                       <button className="btn-sm" onClick={()=>setActiveTab("requests")} style={{background:"#fffbeb",border:"1.5px solid #fcd34d",color:"#92400e",borderRadius:9,padding:"7px 16px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>Review →</button>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         )}

//         {activeTab==="materials"&&(
//           <div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
//               <h1 style={{fontSize:22,fontWeight:900,margin:0}}>Manage Materials</h1>
//               {/* ── ADDON: Bulk Import + Add Material buttons ── */}
//               <div style={{display:"flex",gap:10}}>
//                 <button className="btn-sm" onClick={()=>setShowBulkImport(true)} style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",borderRadius:10,padding:"11px 18px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(16,185,129,0.35)",display:"flex",alignItems:"center",gap:7,whiteSpace:"nowrap"}}>
//                   📥 Bulk Import
//                 </button>
//                 <button className="btn-sm" onClick={()=>{setEditItem(null);setShowAdd(true);}} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"11px 20px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>+ Add Material</button>
//               </div>
//             </div>
//             <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search materials..." style={{flex:1,minWidth:200,padding:"10px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,outline:"none",fontFamily:"inherit"}}/>
//               <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="all">All Categories</option>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select>
//               <select value={filterType} onChange={e=>setFilterType(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="all">All Types</option><option value="free">Free</option><option value="premium">Premium</option></select>
//             </div>
//             <div style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
//               <table style={{width:"100%",borderCollapse:"collapse"}}>
//                 <thead>
//                   <tr style={{background:C.elevated}}>
//                     {["Material","Category","Sub","Type","Upload","Downloads","Actions"].map(h=>(<th key={h} style={{padding:"13px 16px",textAlign:"left",fontSize:11,fontWeight:800,color:C.textMut,textTransform:"uppercase",letterSpacing:0.6}}>{h}</th>))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.map((m,i)=>{
//                     const cat=CATEGORIES[m.category];
//                     return(
//                       <tr key={m.id} className="row-hover" style={{borderTop:`1px solid ${C.border}`,animation:`cardIn 0.3s ease ${i*0.03}s both`,transition:"background 0.15s"}}>
//                         <td style={{padding:"13px 16px"}}>
//                           <div style={{display:"flex",alignItems:"center",gap:10}}>
//                             <MatThumb m={m} size={40}/>
//                             <div><div style={{fontWeight:700,fontSize:13}}>{m.title}</div><div style={{fontSize:11,color:C.textMut}}>{m.pages}p{m.category==="higher"&&m.indiaOrAbroad&&(<span style={{marginLeft:6,background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",borderRadius:4,padding:"1px 6px",fontSize:9,fontWeight:700}}>{m.indiaOrAbroad==="India"?"🇮🇳":m.indiaOrAbroad==="Abroad"?"✈️":"🌐"} {m.indiaOrAbroad}</span>)}</div></div>
//                           </div>
//                         </td>
//                         <td style={{padding:"13px 16px"}}><span style={{background:cat.bg,color:cat.color,borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {cat.label}</span></td>
//                         <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub}</td>
//                         <td style={{padding:"13px 16px"}}><span style={{background:m.type==="premium"?"#fffbeb":"#f0fdf4",color:m.type==="premium"?"#92400e":"#166534",borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700}}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
//                         <td style={{padding:"13px 16px"}}>
//                           {m.uploadType==="pdf"&&<span style={{background:"#fef2f2",color:"#991b1b",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>📄 PDF</span>}
//                           {m.uploadType==="link"&&<span style={{background:"#eff6ff",color:"#1e40af",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>🔗 Link</span>}
//                           {!m.uploadType&&<span style={{color:C.textMut,fontSize:11}}>—</span>}
//                         </td>
//                         <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:700}}>{m.downloads.toLocaleString()}</td>
//                         <td style={{padding:"13px 16px"}}>
//                           <div style={{display:"flex",gap:6}}>
//                             <button className="btn-sm" onClick={()=>setPreview(m)} style={{background:"#eff6ff",color:"#1e40af",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>👁</button>
//                             <button className="btn-sm" onClick={()=>{setEditItem(m);setShowAdd(true);}} style={{background:"#fffbeb",color:"#92400e",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>✏️</button>
//                             <button className="btn-sm" onClick={()=>setDelConf(m.id)} style={{background:"#fef2f2",color:"#991b1b",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>🗑</button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//               {filtered.length===0&&<div style={{textAlign:"center",padding:40,color:C.textMut}}>No materials found</div>}
//             </div>
//           </div>
//         )}

//         {activeTab==="requests"&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Material Requests</h1>
//             {requests.length===0?(
//               <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}><div style={{fontSize:48,marginBottom:12}}>📭</div><div style={{fontWeight:600}}>No requests yet</div></div>
//             ):(
//               <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                 {requests.map((r,i)=>{
//                   const cat=CATEGORIES[r.category],stu=students.find(s=>s.id===r.studentId);
//                   const badge=getStatusBadge(r.status);
//                   return(
//                     <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:16,padding:"20px 24px",boxShadow:C.shadow,animation:`cardIn 0.35s ease ${i*0.05}s both`}}>
//                       <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
//                         <div style={{width:44,height:44,borderRadius:"50%",background:"#fffbeb",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:13,flexShrink:0}}>{stu?.avatar||"??"}</div>
//                         <div style={{flex:1}}>
//                           <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4,flexWrap:"wrap"}}><span style={{fontWeight:800,fontSize:15}}>{r.title}</span><span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {r.sub}</span></div>
//                           <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>By <strong>{r.studentName}</strong> · {r.date}</div>
//                           <div style={{fontSize:12,color:C.textMut,fontStyle:"italic",background:C.elevated,padding:"8px 13px",borderRadius:9,borderLeft:"3px solid #fcd34d"}}>"{r.reason}"</div>
//                         </div>
//                         <div style={{textAlign:"right",flexShrink:0}}>
//                           {r.status==="pending"?(
//                             <div style={{display:"flex",flexDirection:"column",gap:7}}>
//                               <button className="btn-sm" onClick={()=>approveRequest(r,true)} style={{background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>✅ Approve for {r.studentName.split(" ")[0]}</button>
//                               <button className="btn-sm" onClick={()=>approveRequest(r,false)} style={{background:"#fffbeb",color:"#92400e",border:"1.5px solid #fcd34d",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>🌐 Approve for All</button>
//                               <button className="btn-sm" onClick={()=>setAddingSoonPopup(r)} style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>📅 Adding Soon</button>
//                             </div>
//                           ):(
//                             <div style={{display:"inline-block",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>{badge.text}</div>
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

//         {activeTab==="students"&&!selectedStudent&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Student Management</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18}}>
//               {students.map((s,i)=>{
//                 const stuMats=materials.filter(m=>m.studentId===s.id);
//                 const stuReqs=requests.filter(r=>r.studentId===s.id);
//                 const stuPending=stuReqs.filter(r=>r.status==="pending").length;
//                 return(
//                   <div key={s.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px",animation:`cardIn 0.35s ease ${i*0.07}s both`,cursor:"pointer",transition:"all 0.22s",boxShadow:C.shadow}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.amber;e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=C.shadowLg;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}} onClick={()=>setSelStu(s)}>
//                     <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
//                       <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:14,flexShrink:0}}>{s.avatar}</div>
//                       <div><div style={{fontWeight:800,fontSize:15}}>{s.name}</div><div style={{fontSize:12,color:C.textSec}}>{s.email}</div>{s.college&&<div style={{fontSize:11,color:C.textMut,marginTop:2}}>🏛️ {s.college}</div>}</div>
//                     </div>
//                     <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
//                       {[["📚",stuMats.length,"Personal"],["✅",s.completed,"Done"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
//                         <div key={lbl} style={{background:C.elevated,borderRadius:10,padding:"10px 0",textAlign:"center",border:`1px solid ${C.border}`}}><div style={{fontSize:16,marginBottom:3}}>{icon}</div><div style={{fontSize:18,fontWeight:900,color:C.amber}}>{val}</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{lbl}</div></div>
//                       ))}
//                     </div>
//                     {stuPending>0&&<div style={{marginTop:12,background:"#fffbeb",border:"1.5px solid #fcd34d",borderRadius:9,padding:"7px 12px",fontSize:12,color:"#92400e",fontWeight:700}}>⏳ {stuPending} pending request{stuPending>1?"s":""}</div>}
//                     <div style={{marginTop:10,fontSize:11,color:C.textMut,fontWeight:600}}>Joined: {s.joined}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {activeTab==="students"&&selectedStudent&&(
//           <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={()=>setSelStu(null)} onApprove={approveRequest} onMarkAddingSoon={(id)=>{const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r);_globalRequests=updatedR;setRequests([...updatedR]);toast("📅 Student notified!","info");}} toast={toast}/>
//         )}

//         {activeTab==="student-analytics"&&(<StudentAnalyticsDashboard materials={materials} students={students}/>)}

//         {activeTab==="categories"&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Category Management</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>(
//                 <div key={key} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
//                   <div style={{background:cat.gradient,borderBottom:`1px solid ${cat.border}`,padding:"20px 22px",display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:30}}>{cat.icon}</span><div><div style={{color:cat.color,fontWeight:800,fontSize:15}}>{cat.label}</div><div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{materials.filter(m=>m.category===key).length} materials</div></div></div>
//                   <div style={{padding:18}}>
//                     <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>Sub-categories</div>
//                     <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
//                       {CATEGORY_SUBS[key].map(s=>(<div key={s} style={{position:"relative"}}><span style={{background:C.elevated,color:C.textSec,borderRadius:7,padding:"5px 11px",fontSize:12,border:`1px solid ${C.border}`,fontWeight:600,display:"inline-flex",alignItems:"center",gap:5}}>{s}{key==="higher"&&(<span style={{background:HIGHER_INDIA_ABROAD[s]==="India"?"#f0fdf4":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#eff6ff":"#f5f3ff",color:HIGHER_INDIA_ABROAD[s]==="India"?"#166534":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#1e40af":"#5b21b6",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:800}}>{HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳 IN":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️ Abroad":"🌐 Both"}</span>)}</span></div>))}
//                     </div>
//                     <button className="btn-sm" style={{width:"100%",background:cat.gradient,color:cat.color,border:`1.5px solid ${cat.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit"}}>+ Add Sub-category</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showAddModal&&<AddMaterialModal item={editItem} students={students} onClose={()=>{setShowAdd(false);setEditItem(null);}} onSave={handleSave}/>}
//       {/* ── ADDON: Bulk Import Modal ── */}
//       {showBulkImport&&<BulkImportModal onClose={()=>setShowBulkImport(false)} onImport={handleBulkImport} toast={toast}/>}
//       {previewItem&&<PreviewModal item={previewItem} students={students} onClose={()=>setPreview(null)}/>}
//       {deleteConfirm&&(
//         <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,backdropFilter:"blur(4px)"}}>
//           <div style={{background:C.surface,borderRadius:18,padding:32,maxWidth:360,width:"90%",border:"1.5px solid #fca5a5",textAlign:"center",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
//             <div style={{fontSize:40,marginBottom:12}}>⚠️</div>
//             <h3 style={{fontWeight:800,marginBottom:8}}>Delete Material?</h3>
//             <p style={{color:C.textSec,fontSize:13,marginBottom:24}}>This action cannot be undone.</p>
//             <div style={{display:"flex",gap:10}}>
//               <button onClick={()=>setDelConf(null)} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
//               <button onClick={()=>handleDelete(deleteConfirm)} style={{flex:1,background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit"}}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {addingSoonPopup&&(<AddingSoonPopup request={addingSoonPopup} onConfirm={()=>markAddingSoon(addingSoonPopup.id)} onClose={()=>setAddingSoonPopup(null)}/>)}
//     </div>
//   );
// }

// function StudentDetail({student:s,materials,requests,onBack,onApprove,onMarkAddingSoon,toast}){
//   const stuMats=materials.filter(m=>m.studentId===s.id);
//   const stuReqs=requests.filter(r=>r.studentId===s.id);
//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return null;
//   };
//   return(
//     <div>
//       <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"8px 16px",cursor:"pointer",fontSize:12,marginBottom:22,fontFamily:"inherit",fontWeight:700}}>← All Students</button>
//       <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:26,background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:"24px 26px",boxShadow:C.shadow}}>
//         <div style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:900,fontSize:18}}>{s.avatar}</div>
//         <div><h2 style={{margin:0,fontSize:20,fontWeight:900}}>{s.name}</h2><div style={{color:C.textSec,fontSize:13,fontWeight:600}}>{s.email} · Joined {s.joined}</div>{s.college&&<div style={{fontSize:12,color:C.textMut,marginTop:3}}>🏛️ {s.college}</div>}</div>
//         <div style={{marginLeft:"auto",display:"flex",gap:14}}>
//           {[["✅",s.completed,"Completed"],["📚",stuMats.length,"Personal"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
//             <div key={lbl} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 18px",textAlign:"center"}}><div style={{fontSize:18}}>{icon}</div><div style={{fontSize:22,fontWeight:900,color:C.amber}}>{val}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{lbl}</div></div>
//           ))}
//         </div>
//       </div>
//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22}}>
//         <div>
//           <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>⭐ Personal Materials ({stuMats.length})</h3>
//           {stuMats.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No personal materials yet</div>:stuMats.map(m=>(<div key={m.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 17px",marginBottom:9,display:"flex",alignItems:"center",gap:12,boxShadow:C.shadow}}><MatThumb m={m} size={38}/><div style={{flex:1}}><div style={{fontWeight:700,fontSize:13}}>{m.title}</div><div style={{fontSize:11,color:C.textSec,fontWeight:600}}>{m.sub} · {m.type}</div></div></div>))}
//         </div>
//         <div>
//           <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>📨 Requests ({stuReqs.length})</h3>
//           {stuReqs.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No requests yet</div>:stuReqs.map(r=>{
//             const badge=getStatusBadge(r.status);
//             return(
//               <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:12,padding:"13px 15px",marginBottom:9,boxShadow:C.shadow}}>
//                 <div style={{fontWeight:700,fontSize:13,marginBottom:4}}>{r.title}</div>
//                 <div style={{fontSize:11,color:C.textMut,fontStyle:"italic",marginBottom:9}}>"{r.reason}"</div>
//                 {r.status==="pending"?(
//                   <div style={{display:"flex",gap:7}}>
//                     <button onClick={()=>{onApprove(r,true);toast(`Approved for ${s.name}`,"success");}} style={{flex:1,background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>✅ Approve</button>
//                     <button onClick={()=>onMarkAddingSoon(r.id)} style={{flex:1,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>📅 Soon</button>
//                   </div>
//                 ):(badge&&<span style={{fontSize:11,fontWeight:700,color:badge.color,background:badge.bg,border:`1px solid ${badge.border}`,borderRadius:7,padding:"4px 10px"}}>{badge.text}</span>)}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AddMaterialModal({item,students,onClose,onSave}){
//   const [form,setForm]=useState({title:item?.title||"",category:item?.category||"private",sub:item?.sub||"IT",type:item?.type||"free",pages:item?.pages||"",topics:item?.topics||"",emoji:item?.emoji||"📄",uploadType:item?.uploadType||"",fileLink:item?.fileLink||"",studentId:item?.studentId||"",indiaOrAbroad:item?.indiaOrAbroad||""});
//   const set=(k,v)=>setForm(p=>({...p,[k]:v}));
//   const EMOJIS=["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
//   const isHigher=form.category==="higher";
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:560,width:"100%",boxShadow:C.shadowLg,maxHeight:"92vh",overflow:"auto",animation:"cardIn 0.3s ease"}}>
//         <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:900}}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2><button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer"}}>✕</button></div>
//         <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:15}}>
//           {[{label:"Title",key:"title",type:"text",ph:"e.g. Java Programming"},{label:"Pages",key:"pages",type:"number",ph:"340"},{label:"Topics",key:"topics",type:"number",ph:"12"}].map(f=>(<div key={f.key}><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{f.label}</label><input value={form[f.key]} onChange={e=>set(f.key,e.target.value)} type={f.type} placeholder={f.ph} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/></div>))}
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
//             {[["Category","category",Object.entries(CATEGORIES).map(([k,v])=>[k,v.label])],["Type","type",[["free","Free"],["premium","Premium"]]]].map(([label,key,opts])=>(<div key={key}><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{label}</label><select value={form[key]} onChange={e=>{set(key,e.target.value);if(key==="category"){set("sub",CATEGORY_SUBS[e.target.value][0]);set("indiaOrAbroad","");}}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div>))}
//           </div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label><select value={form.sub} onChange={e=>set("sub",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}</select></div>
//           {isHigher&&(<div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:12,padding:"14px 16px"}}><div style={{fontSize:11,color:"#5b21b6",fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>🌍 Higher Education Destination</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><div><label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:5}}>India or Abroad?</label><select value={form.indiaOrAbroad} onChange={e=>set("indiaOrAbroad",e.target.value)} style={{width:"100%",padding:"9px 11px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.85)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}><option value="">Select</option><option value="India">🇮🇳 India</option><option value="Abroad">✈️ Abroad</option><option value="Both">🌐 Both</option></select></div><div><label style={{fontSize:10,color:"#5b21b6",fontWeight:700,display:"block",marginBottom:5}}>Study Type</label><select style={{width:"100%",padding:"9px 11px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.85)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}><option value="">All Types</option><option value="Masters">Masters</option><option value="PhD">PhD</option><option value="Undergraduate">Undergraduate</option><option value="Certificate">Certificate</option></select></div></div></div>)}
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Content Type</label><div style={{display:"flex",gap:8,marginBottom:form.uploadType?10:0}}>{[["","📁 None"],["pdf","📄 PDF"],["link","🔗 Link"]].map(([v,l])=>(<button key={v} onClick={()=>set("uploadType",v)} style={{flex:1,background:form.uploadType===v?"#fffbeb":C.elevated,color:form.uploadType===v?"#92400e":C.textSec,border:`1.5px solid ${form.uploadType===v?"#fcd34d":C.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>{l}</button>))}</div>{form.uploadType&&<input value={form.fileLink} onChange={e=>set("fileLink",e.target.value)} placeholder={form.uploadType==="pdf"?"https://example.com/file.pdf":"https://example.com/resource"} style={{width:"100%",padding:"10px 13px",borderRadius:10,border:"1.5px solid #fcd34d",background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/>}</div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Assign to Student (optional)</label><select value={form.studentId} onChange={e=>set("studentId",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="">All Students (Public)</option>{students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Thumbnail Icon</label><div style={{display:"flex",flexWrap:"wrap",gap:7}}>{EMOJIS.map(e=>(<button key={e} onClick={()=>set("emoji",e)} style={{width:40,height:40,fontSize:18,borderRadius:9,border:`2px solid ${form.emoji===e?C.amber:C.border}`,background:form.emoji===e?"#fffbeb":C.elevated,cursor:"pointer",transition:"all 0.15s"}}>{e}</button>))}</div></div>
//           <div style={{display:"flex",gap:10,marginTop:4}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
//             <button onClick={()=>onSave(form)} style={{flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:14,boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>{item?"💾 Update":"✅ Add Material"}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PreviewModal({item:m,students,onClose}){
//   const cat=CATEGORIES[m.category],stu=m.studentId?students.find(s=>s.id===m.studentId):null;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:480,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
//         <div style={{background:cat.gradient,padding:"26px 26px 20px",borderRadius:"22px 22px 0 0",textAlign:"center",borderBottom:`1px solid ${cat.border}`}}><MatThumb m={m} size={80}/><h2 style={{color:cat.color,margin:"14px 0 4px",fontSize:18,fontWeight:900}}>{m.title}</h2><div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub} · {m.pages} pages · {m.topics} topics</div></div>
//         <div style={{padding:24}}>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
//             {[["Category",cat.label],["Type",m.type],["Downloads",m.downloads.toLocaleString()],["Progress",`${m.progress}%`],["Upload",m.uploadType||"None"],["Assigned To",stu?.name||"All Students"],...(m.category==="higher"&&m.indiaOrAbroad?[["Destination",m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"]]:[])] .map(([k,v])=>(<div key={k} style={{background:C.elevated,borderRadius:10,padding:"11px 14px",border:`1px solid ${C.border}`}}><div style={{fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3}}>{k}</div><div style={{fontSize:14,fontWeight:700}}>{v}</div></div>))}
//           </div>
//           {m.fileLink&&<div style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",marginBottom:14}}><div style={{fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3}}>File Link</div><div style={{fontSize:12,color:C.indigo,wordBreak:"break-all"}}>{m.fileLink}</div></div>}
//           <button onClick={onClose} style={{width:"100%",background:C.elevated,color:C.textPri,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:14}}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── HOME ─────────────────────────────────────────────────────────────────────
// export default function App(){
//   const [screen,setScreen]=useState("home");
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);

//   if(screen==="student") return <StudentDashboard onBack={()=>setScreen("home")}/>;
//   if(screen==="admin")   return <AdminDashboard   onBack={()=>setScreen("home")}/>;

//   return(
//     <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 30%,#fef3c7 70%,#fff7ed 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",position:"relative",overflow:"hidden"}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 10px rgba(245,158,11,0)}}`}</style>
//       <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)",top:"-10%",left:"-5%",animation:"orbPulse 6s ease-in-out infinite"}}/>
//       <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)",bottom:"0%",right:"-5%",animation:"orbPulse 6s ease-in-out infinite 2s"}}/>
//       <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(16,185,129,0.10) 0%,transparent 70%)",top:"40%",right:"15%",animation:"orbPulse 8s ease-in-out infinite 1s"}}/>
//       <div style={{textAlign:"center",zIndex:1,padding:"0 20px",opacity:animIn?1:0,transform:animIn?"scale(1)":"scale(0.94)",transition:"all 0.6s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{fontSize:80,marginBottom:16,animation:"float 3.5s ease-in-out infinite",filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))"}}>📚</div>
//         <div style={{fontSize:11,letterSpacing:5,color:C.amberDim,marginBottom:10,textTransform:"uppercase",fontWeight:800,animation:"fadeUp 0.7s ease 0.2s both"}}>One Year Series</div>
//         <h1 style={{fontSize:54,fontWeight:900,color:C.textPri,margin:"0 0 8px",letterSpacing:-2,lineHeight:1.1,animation:"fadeUp 0.7s ease 0.3s both"}}><span style={{color:C.amber}}>OYS</span> Platform</h1>
//         <p style={{color:C.textSec,fontSize:17,marginBottom:52,maxWidth:480,margin:"0 auto 52px",lineHeight:1.6,fontWeight:600,animation:"fadeUp 0.7s ease 0.4s both"}}>Your complete digital learning hub — study materials, mock tests, crash courses, career guidance & more</p>
//         <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.5s both"}}>
//           <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"#fff",border:"none",borderRadius:16,padding:"18px 48px",fontSize:16,fontWeight:900,cursor:"pointer",boxShadow:"0 10px 36px rgba(245,158,11,0.4)",transition:"all 0.25s",fontFamily:"inherit"}} onMouseEnter={e=>{e.target.style.transform="translateY(-4px) scale(1.03)";e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)";}}>🎓 Student Dashboard</button>
//           <button onClick={()=>setScreen("admin")} style={{background:"#fff",color:C.textPri,border:"1.5px solid #e2e8f0",borderRadius:16,padding:"18px 48px",fontSize:16,fontWeight:900,cursor:"pointer",boxShadow:"0 8px 28px rgba(15,23,42,0.1)",transition:"all 0.25s",fontFamily:"inherit"}} onMouseEnter={e=>{e.target.style.transform="translateY(-4px)";e.target.style.borderColor=C.amber;e.target.style.color=C.amber;e.target.style.boxShadow="0 16px 44px rgba(15,23,42,0.14)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.borderColor="#e2e8f0";e.target.style.color=C.textPri;e.target.style.boxShadow="0 8px 28px rgba(15,23,42,0.1)";}}>⚙️ Admin Panel</button>
//         </div>
//         <div style={{display:"flex",gap:20,justifyContent:"center",marginTop:44,flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.65s both"}}>
//           {[{icon:"📄",label:"Resume Maker"},{icon:"🔔",label:"Alerts"},{icon:"📅",label:"E-Calendar"},{icon:"⚡",label:"Crash Course"},{icon:"📚",label:"E-Library"},{icon:"🎯",label:"E-Prep"},{icon:"🧭",label:"Career Counseling"},{icon:"🏆",label:"C3 Arena"}].map((f,i)=>(
//             <div key={i} style={{display:"flex",alignItems:"center",gap:6,color:C.textSec,fontSize:12,fontWeight:700,background:"rgba(255,255,255,0.7)",borderRadius:20,padding:"6px 14px",border:"1px solid rgba(255,255,255,0.9)",backdropFilter:"blur(8px)",boxShadow:"0 2px 8px rgba(15,23,42,0.06)",transition:"all 0.2s",cursor:"default"}} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.95)";e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.7)";e.currentTarget.style.transform="translateY(0)";}}>
//               <span style={{fontSize:14}}>{f.icon}</span> {f.label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from "react";

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

// // ─── SERVICES DATA ────────────────────────────────────────────────────────────
// const SERVICES = [
//   { id:"resume",name:"Resume Maker",icon:"📄",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:4820,topCollege:"IIT Bombay",description:"AI-powered resume builder with ATS optimization",stats:{created:4820,downloaded:3940,templates:24,avgScore:87},trend:"+18%",trendUp:true },
//   { id:"alerts",name:"Alerts",icon:"🔔",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.2)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)",users:7210,topCollege:"NIT Warangal",description:"Real-time job & exam notifications system",stats:{sent:52400,read:41200,active:7210,categories:12},trend:"+32%",trendUp:true },
//   { id:"calendar",name:"E-Calendar",icon:"📅",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)",users:3650,topCollege:"BITS Pilani",description:"Exam schedules, deadlines & study planner",stats:{events:1840,reminders:9300,synced:3650,upcoming:124},trend:"+9%",trendUp:true },
//   { id:"crash",name:"Crash Course",icon:"⚡",color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",gradient:"linear-gradient(135deg,#fee2e2,#fecaca)",users:5930,topCollege:"VIT Vellore",description:"Intensive last-minute exam preparation modules",stats:{courses:48,enrolled:5930,completed:3210,avgHours:6.4},trend:"+41%",trendUp:true },
//   { id:"elibrary",name:"E-Library",icon:"📚",color:"#3b82f6",bg:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.2)",gradient:"linear-gradient(135deg,#dbeafe,#bfdbfe)",users:6840,topCollege:"JNTU Hyderabad",description:"Digital library with 15+ curated study materials",stats:{materials:15,downloads:19870,requests:24,pending:2,approved:20,rejected:2,topCollege:"JNTU Hyderabad",collegeStats:[{name:"JNTU Hyderabad",downloads:4200,users:1240},{name:"Osmania University",downloads:3100,users:980},{name:"IIT Bombay",downloads:2800,users:760},{name:"NIT Warangal",downloads:2400,users:640},{name:"VIT Vellore",downloads:1900,users:520}]},trend:"+27%",trendUp:true },
//   { id:"eprep",name:"E-Preparation",icon:"🎯",color:"#8b5cf6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:8120,topCollege:"Osmania University",description:"Mock tests, quizzes & performance analytics",stats:{tests:980,attempts:41200,avgScore:72,toppers:340},trend:"+55%",trendUp:true },
//   { id:"counseling",name:"Career Counseling",icon:"🧭",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.2)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)",users:2340,topCollege:"Hyderabad Central University",description:"1-on-1 mentorship & career guidance sessions",stats:{sessions:2340,mentors:48,avgRating:4.8,placed:1820},trend:"+14%",trendUp:true },
//   { id:"c3arena",name:"C3 Arena",icon:"🏆",color:"#f97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.2)",gradient:"linear-gradient(135deg,#ffedd5,#fed7aa)",users:3980,topCollege:"IIT Hyderabad",description:"Competitive coding, hackathons & leaderboards",stats:{contests:84,participants:3980,problems:1240,winners:252},trend:"+63%",trendUp:true },
// ];

// const PIE_COLORS = ["#3b82f6","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#f97316","#6366f1"];

// const THUMB_IMAGES = {
//   1:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
//   2:"https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
//   3:"https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
//   4:"https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
//   5:"https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
//   6:"https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
//   7:"https://cdn-icons-png.flaticon.com/512/3281/3281295.png",
//   8:"https://cdn-icons-png.flaticon.com/512/3132/3132004.png",
//   9:"https://cdn-icons-png.flaticon.com/512/3953/3953227.png",
//   10:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
//   11:"https://cdn-icons-png.flaticon.com/512/3225/3225194.png",
//   12:"https://cdn-icons-png.flaticon.com/512/3281/3281306.png",
//   13:"https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
//   14:"https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
//   15:"https://cdn-icons-png.flaticon.com/512/2965/2965967.png",
// };

// const CRASH_COURSES = {
//   1:{title:"Java Crash Course",url:"https://www.youtube.com/results?search_query=java+crash+course",color:"#ef4444"},
//   2:{title:"Banking Crash Course",url:"https://www.youtube.com/results?search_query=banking+fundamentals+crash+course",color:"#f59e0b"},
//   3:{title:"DSA Crash Course",url:"https://www.youtube.com/results?search_query=data+structures+algorithms+crash+course",color:"#10b981"},
//   4:{title:"UPSC History Crash",url:"https://www.youtube.com/results?search_query=upsc+history+crash+course",color:"#6366f1"},
//   5:{title:"SSC Math Crash",url:"https://www.youtube.com/results?search_query=ssc+mathematics+crash+course",color:"#3b82f6"},
//   6:{title:"IBPS PO Crash",url:"https://www.youtube.com/results?search_query=ibps+po+crash+course",color:"#f59e0b"},
//   7:{title:"CAT Verbal Crash",url:"https://www.youtube.com/results?search_query=cat+verbal+ability+crash+course",color:"#8b5cf6"},
//   8:{title:"GRE Vocab Crash",url:"https://www.youtube.com/results?search_query=gre+vocabulary+crash+course",color:"#ec4899"},
//   9:{title:"Agri Science Crash",url:"https://www.youtube.com/results?search_query=agricultural+science+crash+course",color:"#10b981"},
//   10:{title:"Python Crash Course",url:"https://www.youtube.com/results?search_query=python+crash+course+beginners",color:"#3b82f6"},
//   11:{title:"RRB Crash Course",url:"https://www.youtube.com/results?search_query=railway+rrb+crash+course",color:"#f59e0b"},
//   12:{title:"MBA Case Crash",url:"https://www.youtube.com/results?search_query=mba+case+studies+crash+course",color:"#6366f1"},
//   13:{title:"Digital Mktg Crash",url:"https://www.youtube.com/results?search_query=digital+marketing+crash+course",color:"#ef4444"},
//   14:{title:"Research Crash",url:"https://www.youtube.com/results?search_query=research+methodology+crash+course",color:"#10b981"},
//   15:{title:"NDA Crash Course",url:"https://www.youtube.com/results?search_query=nda+defence+crash+course",color:"#6366f1"},
// };

// const EPREP_LINKS = {
//   1:"https://www.javatpoint.com/java-quiz",2:"https://www.bankersadda.com/quiz",3:"https://www.geeksforgeeks.org/data-structure-gq/",
//   4:"https://www.drishtiias.com/quiz",5:"https://www.sscadda.com/quiz",6:"https://www.ibpsonline.in/quiz",
//   7:"https://www.indiabix.com/verbal-ability/questions-and-answers/",8:"https://www.majortests.com/gre/",
//   9:"https://www.agriculturalquiz.com",10:"https://www.w3schools.com/python/exercise.asp",
//   11:"https://www.railwayrecruitment.org/quiz",12:"https://www.mba.com/practice-tests",
//   13:"https://www.hubspot.com/marketing-certification",14:"https://www.researchmethodologyquiz.com",
//   15:"https://www.nda.nic.in/preparation",
// };

// const CATEGORIES = {
//   private:{ label:"Private Sector",icon:"🏢",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.25)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
//   government:{ label:"Government Exams",icon:"🏛️",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.25)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
//   higher:{ label:"Higher Education",icon:"🎓",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.25)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
// };

// const CATEGORY_SUBS = {
//   private:["IT","Banking","Healthcare","Marketing","Finance","Consulting"],
//   government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"],
//   higher:["GATE","CAT/MBA","GRE/GMAT","Study Abroad","Research","PhD"],
// };

// const HIGHER_INDIA_ABROAD = {
//   "GATE":"India","CAT/MBA":"India","GRE/GMAT":"Abroad","Study Abroad":"Abroad","Research":"Both","PhD":"Both",
// };

// const INIT_STUDENTS = [
//   { id:"s1",name:"Arjun Sharma",email:"arjun@email.com",joined:"2024-01-15",completed:3,avatar:"AS",college:"JNTU Hyderabad" },
//   { id:"s2",name:"Priya Reddy",email:"priya@email.com",joined:"2024-02-20",completed:1,avatar:"PR",college:"Osmania University" },
//   { id:"s3",name:"Rahul Gupta",email:"rahul@email.com",joined:"2024-03-10",completed:0,avatar:"RG",college:"IIT Bombay" },
// ];

// const ALL_MATERIALS = [
//   { id:1,title:"Java Programming",category:"private",sub:"IT",type:"free",emoji:"☕",topics:12,progress:70,pages:340,downloads:1240,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:2,title:"Banking Fundamentals",category:"private",sub:"Banking",type:"free",emoji:"🏦",topics:8,progress:50,pages:210,downloads:980,bookmarked:true,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:3,title:"Data Structures & Algo",category:"private",sub:"IT",type:"premium",emoji:"🌲",topics:15,progress:30,pages:480,downloads:2100,bookmarked:false,studentId:null,uploadType:"pdf",fileLink:"https://example.com/dsa.pdf",indiaOrAbroad:null },
//   { id:4,title:"UPSC History Notes",category:"government",sub:"UPSC",type:"free",emoji:"📜",topics:20,progress:60,pages:600,downloads:3400,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:5,title:"SSC Mathematics",category:"government",sub:"SSC",type:"free",emoji:"📐",topics:10,progress:0,pages:280,downloads:1800,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:6,title:"IBPS PO Guide",category:"government",sub:"Banking (Govt)",type:"premium",emoji:"🏧",topics:14,progress:0,pages:390,downloads:2200,bookmarked:true,studentId:null,uploadType:"link",fileLink:"https://ibps.in/study-material",indiaOrAbroad:null },
//   { id:7,title:"CAT Verbal Ability",category:"higher",sub:"CAT/MBA",type:"premium",emoji:"📝",topics:9,progress:20,pages:240,downloads:760,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"India" },
//   { id:8,title:"GRE Vocabulary",category:"higher",sub:"GRE/GMAT",type:"free",emoji:"🔤",topics:6,progress:40,pages:180,downloads:540,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"Abroad" },
//   { id:9,title:"Agricultural Science",category:"government",sub:"State PSC",type:"free",emoji:"🌾",topics:11,progress:0,pages:320,downloads:890,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:10,title:"Python for Beginners",category:"private",sub:"IT",type:"free",emoji:"🐍",topics:10,progress:85,pages:290,downloads:3100,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:11,title:"Railway RRB Guide",category:"government",sub:"Railways",type:"premium",emoji:"🚂",topics:13,progress:0,pages:410,downloads:1650,bookmarked:false,studentId:null,uploadType:"pdf",fileLink:"https://example.com/rrb.pdf",indiaOrAbroad:null },
//   { id:12,title:"MBA Case Studies",category:"higher",sub:"CAT/MBA",type:"premium",emoji:"💼",topics:8,progress:0,pages:200,downloads:430,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"India" },
//   { id:13,title:"Digital Marketing",category:"private",sub:"Marketing",type:"free",emoji:"📊",topics:7,progress:55,pages:190,downloads:670,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
//   { id:14,title:"Research Methodology",category:"higher",sub:"Research",type:"free",emoji:"🔬",topics:5,progress:10,pages:160,downloads:310,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:"Both" },
//   { id:15,title:"Defence NDA Prep",category:"government",sub:"Defence",type:"premium",emoji:"⚔️",topics:16,progress:0,pages:500,downloads:1200,bookmarked:false,studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null },
// ];

// const JAVA_TOPICS = [
//   { id:1,title:"Introduction to Java",done:true,pages:28 },
//   { id:2,title:"OOP Concepts",done:true,pages:45 },
//   { id:3,title:"Classes & Objects",done:true,pages:35 },
//   { id:4,title:"Inheritance & Polymorphism",done:false,pages:52 },
//   { id:5,title:"Exception Handling",done:false,pages:30 },
//   { id:6,title:"Collections Framework",done:false,pages:60 },
//   { id:7,title:"Multithreading",done:false,pages:40 },
//   { id:8,title:"File I/O",done:false,pages:25 },
//   { id:9,title:"JDBC & Databases",done:false,pages:38 },
//   { id:10,title:"Spring Boot Basics",done:false,pages:55 },
//   { id:11,title:"REST APIs with Java",done:false,pages:48 },
//   { id:12,title:"Java 17+ Features",done:false,pages:32 },
// ];

// let _globalRequests = [
//   { id:"r1",studentId:"s1",studentName:"Arjun Sharma",title:"AI & Machine Learning 2025",category:"private",sub:"IT",reason:"Need latest trending AI material for interviews",status:"pending",date:"2024-12-01" },
//   { id:"r2",studentId:"s2",studentName:"Priya Reddy",title:"UPSC Ethics GS4 Deep Dive",category:"government",sub:"UPSC",reason:"Comprehensive ethics module not available anywhere",status:"pending",date:"2024-12-05" },
// ];
// let _globalMaterials = ALL_MATERIALS.map(m=>({...m}));
// let _globalStudents  = INIT_STUDENTS.map(s=>({...s}));

// const COLLEGE_READING_DATA = [
//   { college:"JNTU Hyderabad",readers:1240,materials:["Java Programming","Python for Beginners","DSA","UPSC History Notes","SSC Mathematics"] },
//   { college:"Osmania University",readers:980,materials:["Banking Fundamentals","IBPS PO Guide","CAT Verbal Ability","Research Methodology"] },
//   { college:"IIT Bombay",readers:760,materials:["Data Structures & Algo","Python for Beginners","Java Programming","GRE Vocabulary"] },
//   { college:"NIT Warangal",readers:640,materials:["Java Programming","DSA","Digital Marketing","Railway RRB Guide"] },
//   { college:"VIT Vellore",readers:520,materials:["Python for Beginners","Java Programming","CAT Verbal Ability","MBA Case Studies"] },
//   { college:"BITS Pilani",readers:480,materials:["Data Structures & Algo","Research Methodology","GRE Vocabulary","MBA Case Studies"] },
//   { college:"Hyderabad Central Univ",readers:340,materials:["UPSC History Notes","SSC Mathematics","Agricultural Science","Defence NDA Prep"] },
//   { college:"IIT Hyderabad",readers:290,materials:["Python for Beginners","Java Programming","DSA","Digital Marketing"] },
// ];

// const MOST_VIEWED_MATERIALS = [
//   { id:4,title:"UPSC History Notes",views:8420,reads:6200,category:"government",emoji:"📜" },
//   { id:10,title:"Python for Beginners",views:7890,reads:5900,category:"private",emoji:"🐍" },
//   { id:1,title:"Java Programming",views:6540,reads:4800,category:"private",emoji:"☕" },
//   { id:3,title:"Data Structures & Algo",views:5930,reads:3900,category:"private",emoji:"🌲" },
//   { id:5,title:"SSC Mathematics",views:4820,reads:3400,category:"government",emoji:"📐" },
// ];

// const BULK_CSV_FIELDS = [
//   { name:"title", required:true, desc:"Material title", example:"Java Programming" },
//   { name:"description", required:false, desc:"Short description", example:"Complete Java Notes for Placements" },
//   { name:"category", required:true, desc:"private / government / higher", example:"Private Sector" },
//   { name:"sub_category", required:true, desc:"Sub-category", example:"IT" },
//   { name:"department", required:false, desc:"Department name", example:"Computer Science" },
//   { name:"specialization", required:false, desc:"Specialization", example:"Software Engineering" },
//   { name:"material_type", required:false, desc:"PDF / Link / Video", example:"PDF" },
//   { name:"tags", required:false, desc:"Comma-separated tags", example:"java,oops,backend" },
//   { name:"thumbnail_icon", required:false, desc:"Emoji icon", example:"☕" },
//   { name:"main_file_url", required:false, desc:"Main material URL or filename", example:"java-programming.pdf" },
//   { name:"preview_file_url", required:false, desc:"Preview file URL", example:"java-preview.pdf" },
//   { name:"total_pages", required:false, desc:"Total pages count", example:"250" },
//   { name:"total_topics", required:false, desc:"Number of topics", example:"6" },
//   { name:"type", required:true, desc:"free / premium", example:"Premium" },
//   { name:"download_allowed", required:false, desc:"true / false", example:"true" },
//   { name:"status", required:false, desc:"Published / Draft", example:"Published" },
//   { name:"published_date", required:false, desc:"YYYY-MM-DD", example:"2026-05-14" },
//   { name:"topic_id", required:false, desc:"Unique topic ID", example:"TOPIC_001" },
//   { name:"topic_title", required:false, desc:"Topic heading", example:"Introduction to Java" },
//   { name:"sub_topic", required:false, desc:"Sub-topic name", example:"Java Basics" },
//   { name:"topic_description", required:false, desc:"Brief topic description", example:"Overview of Java" },
//   { name:"pages", required:false, desc:"Pages in this topic", example:"28" },
//   { name:"topic_file_url", required:false, desc:"Topic PDF URL", example:"intro-java.pdf" },
//   { name:"topic_preview_url", required:false, desc:"Topic preview URL", example:"intro-preview.pdf" },
//   { name:"completion_status", required:false, desc:"Done / In Progress / Not Started", example:"Done" },
//   { name:"completed_percentage", required:false, desc:"0-100", example:"100" },
//   { name:"notes_available", required:false, desc:"true / false", example:"true" },
//   { name:"notes_file_url", required:false, desc:"Notes file URL", example:"intro-notes.pdf" },
//   { name:"assignment_available", required:false, desc:"true / false", example:"false" },
// ];

// // ─── TOAST ────────────────────────────────────────────────────────────────────
// function useToast() {
//   const [toasts,setToasts]=useState([]);
//   const add=(msg,type="success")=>{
//     const id=Date.now();
//     setToasts(p=>[...p,{id,msg,type}]);
//     setTimeout(()=>setToasts(p=>p.filter(t=>t.id!==id)),3500);
//   };
//   return {toasts,add};
// }
// function ToastContainer({toasts}){
//   const cfg={
//     success:{bg:"#f0fdf4",border:"#86efac",text:"#166534",icon:"✅"},
//     warn:{bg:"#fffbeb",border:"#fcd34d",text:"#92400e",icon:"⚠️"},
//     error:{bg:"#fef2f2",border:"#fca5a5",text:"#991b1b",icon:"❌"},
//     info:{bg:"#eff6ff",border:"#93c5fd",text:"#1e40af",icon:"ℹ️"},
//   };
//   return (
//     <div style={{position:"fixed",top:20,right:20,zIndex:99999,display:"flex",flexDirection:"column",gap:10}}>
//       {toasts.map(t=>{const s=cfg[t.type]||cfg.info;return(
//         <div key={t.id} style={{background:s.bg,border:`1.5px solid ${s.border}`,color:s.text,borderRadius:14,padding:"13px 18px",fontSize:13,fontWeight:600,maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",gap:10}}>
//           <span style={{fontSize:16}}>{s.icon}</span>{t.msg}
//         </div>
//       );})}
//       <style>{`@keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}`}</style>
//     </div>
//   );
// }

// // ─── PROGRESS RING ────────────────────────────────────────────────────────────
// function Ring({pct,size=48,stroke=4,color=C.amber}){
//   const r=(size-stroke*2)/2,circ=2*Math.PI*r;
//   return(
//     <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={stroke}/>
//       <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
//         strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ}
//         style={{transition:"stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)",strokeLinecap:"round"}}/>
//       <text x={size/2} y={size/2+5} textAnchor="middle" fill={color}
//         style={{transform:`rotate(90deg) translate(0,-${size}px)`,fontSize:11,fontWeight:700,transformOrigin:`${size/2}px ${size/2}px`}}>
//         {pct}%
//       </text>
//     </svg>
//   );
// }

// // ─── MATERIAL THUMBNAIL ───────────────────────────────────────────────────────
// function MatThumb({m,size=80}){
//   const [err,setErr]=useState(false);
//   const cat=CATEGORIES[m.category];
//   if(!err&&THUMB_IMAGES[m.id])return(
//     <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
//       <img src={THUMB_IMAGES[m.id]} alt={m.title} onError={()=>setErr(true)} style={{width:size*0.75,height:size*0.75,objectFit:"contain",transition:"transform 0.3s ease"}}/>
//     </div>
//   );
//   return(
//     <div style={{width:size,height:size,borderRadius:12,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.45,flexShrink:0}}>
//       {m.emoji}
//     </div>
//   );
// }

// // ─── PIE CHART ────────────────────────────────────────────────────────────────
// function PieChart({services,onClose}){
//   const [hovered,setHovered]=useState(null);
//   const total=services.reduce((a,s)=>a+s.users,0);
//   const size=280,cx=size/2,cy=size/2,r=100,innerR=55;
//   let startAngle=-Math.PI/2;
//   const slices=services.map((s,i)=>{
//     const pct=s.users/total,angle=pct*2*Math.PI,endAngle=startAngle+angle;
//     const x1=cx+r*Math.cos(startAngle),y1=cy+r*Math.sin(startAngle);
//     const x2=cx+r*Math.cos(endAngle),y2=cy+r*Math.sin(endAngle);
//     const xi1=cx+innerR*Math.cos(startAngle),yi1=cy+innerR*Math.sin(startAngle);
//     const xi2=cx+innerR*Math.cos(endAngle),yi2=cy+innerR*Math.sin(endAngle);
//     const midAngle=startAngle+angle/2;
//     const sl={...s,pct:Math.round(pct*100),x1,y1,x2,y2,xi1,yi1,xi2,yi2,largeArc:angle>Math.PI?1:0,midAngle,color:PIE_COLORS[i]};
//     startAngle=endAngle; return sl;
//   });
//   const hov=hovered!==null?slices[hovered]:null;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:820,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)",overflow:"hidden"}}>
//         <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",borderBottom:"1px solid #bfdbfe",padding:"22px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <div><div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:3}}>Analytics Overview</div><h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#1e3a8a"}}>📊 Service Usage Distribution</h2></div>
//           <button onClick={onClose} style={{background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:14,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//         </div>
//         <div style={{padding:"28px 32px",display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"}}>
//           <div style={{position:"relative",flexShrink:0}}>
//             <svg width={size} height={size} style={{filter:"drop-shadow(0 8px 24px rgba(59,130,246,0.15))"}}>
//               {slices.map((sl,i)=>{const isHov=hovered===i,ox=isHov?Math.cos(sl.midAngle)*8:0,oy=isHov?Math.sin(sl.midAngle)*8:0;return(
//                 <g key={i} style={{cursor:"pointer",transform:`translate(${ox}px,${oy}px)`,transition:"transform 0.25s ease"}} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}>
//                   <path d={`M ${cx} ${cy} L ${sl.x1} ${sl.y1} A ${r} ${r} 0 ${sl.largeArc} 1 ${sl.x2} ${sl.y2} Z`} fill={sl.color} opacity={isHov?1:0.88} stroke="#fff" strokeWidth={2}/>
//                   <path d={`M ${sl.xi1} ${sl.yi1} A ${innerR} ${innerR} 0 ${sl.largeArc} 1 ${sl.xi2} ${sl.yi2} L ${sl.x2} ${sl.y2} A ${r} ${r} 0 ${sl.largeArc} 0 ${sl.x1} ${sl.y1} Z`} fill="#fff" opacity={0.18}/>
//                 </g>
//               );})}
//               <circle cx={cx} cy={cy} r={innerR} fill={C.surface}/>
//               {hov?(<><text x={cx} y={cy-10} textAnchor="middle" fontSize={11} fontWeight={800} fill={hov.color}>{hov.icon}</text><text x={cx} y={cy+6} textAnchor="middle" fontSize={18} fontWeight={900} fill={hov.color}>{hov.pct}%</text><text x={cx} y={cy+22} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.textMut}>{hov.users.toLocaleString()}</text></>
//               ):(<><text x={cx} y={cy-5} textAnchor="middle" fontSize={13} fontWeight={900} fill={C.textPri}>Total</text><text x={cx} y={cy+13} textAnchor="middle" fontSize={17} fontWeight={900} fill={C.amber}>{(total/1000).toFixed(1)}K</text></>)}
//             </svg>
//           </div>
//           <div style={{flex:1,minWidth:280}}>
//             <div style={{fontSize:12,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>Service Breakdown</div>
//             <div style={{display:"flex",flexDirection:"column",gap:8}}>
//               {slices.map((sl,i)=>(
//                 <div key={i} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,cursor:"pointer",background:hovered===i?sl.bg:C.elevated,border:`1.5px solid ${hovered===i?sl.border:C.border}`,transition:"all 0.2s",transform:hovered===i?"translateX(6px)":"translateX(0)"}}>
//                   <div style={{width:10,height:10,borderRadius:"50%",background:sl.color,flexShrink:0}}/>
//                   <span style={{fontSize:15}}>{sl.icon}</span>
//                   <span style={{fontWeight:700,fontSize:13,color:C.textPri,flex:1}}>{sl.name}</span>
//                   <div style={{textAlign:"right"}}><div style={{fontSize:13,fontWeight:800,color:sl.color}}>{sl.pct}%</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{sl.users.toLocaleString()} users</div></div>
//                   <div style={{width:60,height:6,background:C.border,borderRadius:6,overflow:"hidden"}}><div style={{width:`${sl.pct}%`,height:"100%",background:sl.color,borderRadius:6}}/></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── ADDING SOON POPUP ────────────────────────────────────────────────────────
// function AddingSoonPopup({request,onConfirm,onClose}){
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99500,backdropFilter:"blur(6px)",padding:20}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:460,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.35s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{height:5,background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)"}}/>
//         <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
//           <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,animation:"orbPulse 2s ease-in-out infinite"}}>📅</div>
//           <div style={{fontSize:11,color:"#1e40af",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Material Status Update</div>
//           <h2 style={{margin:"0 0 10px",fontSize:19,fontWeight:900,color:C.textPri}}>Notify Student</h2>
//           <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
//             <div style={{fontSize:12,color:"#1e40af",fontWeight:700,marginBottom:6}}>📨 Notification to be sent:</div>
//             <p style={{margin:0,fontSize:13,color:"#1e3a8a",fontWeight:600,lineHeight:1.6}}>"Hi <strong>{request.studentName}</strong>, your requested material <strong>"{request.title}"</strong> is currently being prepared and will be added to the library soon. Stay tuned! 🎉"</p>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
//             {[{icon:"👤",label:"Student",val:request.studentName},{icon:"📚",label:"Material",val:request.title,small:true}].map((item,i)=>(
//               <div key={i} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",textAlign:"left"}}>
//                 <div style={{fontSize:18,marginBottom:4}}>{item.icon}</div>
//                 <div style={{fontSize:item.small?11:12,fontWeight:700,color:C.textPri,lineHeight:1.3}}>{item.val}</div>
//                 <div style={{fontSize:10,color:C.textMut,fontWeight:600,marginTop:2}}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>Cancel</button>
//             <button onClick={onConfirm} style={{flex:2,background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:"0 4px 18px rgba(59,130,246,0.35)",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>📅 Send Notification</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── BULK IMPORT MODAL ────────────────────────────────────────────────────────
// function BulkImportModal({onClose,onImport,toast}){
//   const [file,setFile]=useState(null);
//   const [dragging,setDragging]=useState(false);
//   const [parsed,setParsed]=useState(null);
//   const [importing,setImporting]=useState(false);
//   const [step,setStep]=useState(1);
//   const [progress,setProgress]=useState(0);
//   const fileRef=useRef(null);

//   const requiredFields=BULK_CSV_FIELDS.filter(f=>f.required).map(f=>f.name);

//   const downloadSample=()=>{
//     const header=BULK_CSV_FIELDS.map(f=>f.name).join(",");
//     const row=BULK_CSV_FIELDS.map(f=>f.example.includes(",")?`"${f.example}"`:f.example).join(",");
//     const row2=[
//       "Python for Beginners","Python basics for all levels","Private Sector","IT","Computer Science",
//       "Data Science","PDF","python,beginner,coding","🐍","python-basics.pdf","python-preview.pdf",
//       "290","10","Free","true","Published","2026-05-14",
//       "TOPIC_002","Variables & Data Types","Python Basics","Understanding Python variables","25",
//       "variables.pdf","variables-preview.pdf","Done","100","true","variables-notes.pdf","false"
//     ].join(",");
//     const csv=[header,row,row2].join("\n");
//     const blob=new Blob([csv],{type:"text/csv"});
//     const a=document.createElement("a");
//     a.href=URL.createObjectURL(blob);
//     a.download="bulk_import_sample.csv";
//     a.click();
//   };

//   const simpleParseCSV=(text)=>{
//     const lines=text.split("\n").filter(l=>l.trim());
//     if(lines.length<2) return [];
//     const headers=lines[0].split(",").map(h=>h.trim().replace(/^"|"$/g,""));
//     return lines.slice(1).map(line=>{
//       const vals=[],re=/("([^"]*)")|([^,]*)/g;
//       let m;
//       while((m=re.exec(line))!==null){
//         if(m[0]===""&&m.index===line.length) break;
//         vals.push((m[2]!==undefined?m[2]:m[3]||"").trim());
//       }
//       return Object.fromEntries(headers.map((h,i)=>[h,vals[i]||""]));
//     }).filter(r=>r.title);
//   };

//   const handleFile=(f)=>{
//     if(!f||!f.name.endsWith(".csv")){toast("Please upload a .csv file","warn");return;}
//     setFile(f);
//     const reader=new FileReader();
//     reader.onload=e=>{
//       const rows=simpleParseCSV(e.target.result);
//       setParsed(rows);
//       if(rows.length>0) setStep(2);
//       else toast("No valid data found in CSV","warn");
//     };
//     reader.readAsText(f);
//   };

//   const handleDrop=(e)=>{
//     e.preventDefault();setDragging(false);
//     const f=e.dataTransfer.files[0];
//     handleFile(f);
//   };

//   const mapCategory=(cat)=>{
//     if(!cat) return "private";
//     const c=cat.toLowerCase();
//     if(c.includes("gov")) return "government";
//     if(c.includes("high")||c.includes("gate")||c.includes("mba")||c.includes("gre")||c.includes("phd")) return "higher";
//     return "private";
//   };

//   const handleImport=()=>{
//     setImporting(true);
//     let p=0;
//     const interval=setInterval(()=>{
//       p+=Math.random()*25+10;
//       setProgress(Math.min(p,90));
//     },200);
//     setTimeout(()=>{
//       clearInterval(interval);setProgress(100);
//       const newMaterials=parsed.map((row,i)=>({
//         id:Date.now()+i,
//         title:row.title||"Untitled Material",
//         description:row.description||"",
//         category:mapCategory(row.category),
//         sub:row.sub_category||"IT",
//         department:row.department||"",
//         specialization:row.specialization||"",
//         type:(row.type||"free").toLowerCase().includes("prem")?"premium":"free",
//         emoji:row.thumbnail_icon||"📄",
//         topics:parseInt(row.total_topics)||5,
//         progress:0,
//         pages:parseInt(row.total_pages)||100,
//         downloads:0,
//         bookmarked:false,
//         studentId:null,
//         uploadType:row.material_type==="PDF"?"pdf":row.main_file_url?"link":null,
//         fileLink:row.main_file_url||"",
//         indiaOrAbroad:null,
//         tags:row.tags||"",
//         status:row.status||"Published",
//         publishedDate:row.published_date||"",
//         downloadAllowed:row.download_allowed!=="false",
//         previewFileUrl:row.preview_file_url||"",
//         topicData:{
//           id:row.topic_id||"",title:row.topic_title||"",
//           subTopic:row.sub_topic||"",description:row.topic_description||"",
//           pages:parseInt(row.pages)||0,fileUrl:row.topic_file_url||"",
//           previewUrl:row.topic_preview_url||"",completionStatus:row.completion_status||"Not Started",
//           completedPct:parseInt(row.completed_percentage)||0,
//           notesAvailable:row.notes_available==="true",notesUrl:row.notes_file_url||"",
//           assignmentAvailable:row.assignment_available==="true",
//         },
//       }));
//       onImport(newMaterials);
//       setTimeout(()=>{setImporting(false);onClose();},400);
//     },2000);
//   };

//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20,animation:"fadeIn 0.25s ease"}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",borderBottom:`1px solid #a7f3d0`,padding:"22px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:"24px 24px 0 0"}}>
//           <div style={{display:"flex",alignItems:"center",gap:14}}>
//             <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,boxShadow:"0 4px 16px rgba(16,185,129,0.35)"}}>📥</div>
//             <div>
//               <div style={{fontSize:11,color:"#065f46",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:2}}>Admin · E-Library</div>
//               <h2 style={{margin:0,fontSize:18,fontWeight:900,color:"#064e3b"}}>Bulk Import Materials via CSV</h2>
//             </div>
//           </div>
//           <button onClick={onClose} style={{background:"rgba(255,255,255,0.8)",border:"1px solid #a7f3d0",borderRadius:10,padding:"7px 13px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//         </div>

//         <div style={{padding:"24px 28px"}}>
//           <div style={{display:"flex",alignItems:"center",gap:0,marginBottom:22}}>
//             {[{n:1,label:"Upload CSV"},{n:2,label:"Preview & Import"}].map((s,i)=>(
//               <div key={s.n} style={{display:"flex",alignItems:"center",flex:i===0?0:1}}>
//                 <div style={{display:"flex",alignItems:"center",gap:8}}>
//                   <div style={{width:28,height:28,borderRadius:"50%",background:step>=s.n?"linear-gradient(135deg,#10b981,#059669)":"#e2e8f0",color:step>=s.n?"#fff":C.textMut,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,transition:"all 0.3s"}}>{step>s.n?"✓":s.n}</div>
//                   <span style={{fontSize:12,fontWeight:700,color:step>=s.n?"#065f46":C.textMut,transition:"color 0.3s"}}>{s.label}</span>
//                 </div>
//                 {i===0&&<div style={{flex:1,height:2,background:step>1?"linear-gradient(90deg,#10b981,#059669)":C.border,margin:"0 14px",transition:"background 0.4s",borderRadius:2}}/>}
//               </div>
//             ))}
//           </div>

//           {step===1&&(
//             <>
//               <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:20}}>
//                 <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
//                   <div style={{flex:1}}>
//                     <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
//                       <div style={{width:20,height:20,borderRadius:"50%",background:"#3b82f6",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0}}>i</div>
//                       <span style={{fontSize:12,color:"#1e40af",fontWeight:800}}>CSV Format — All Fields:</span>
//                     </div>
//                     <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
//                       {BULK_CSV_FIELDS.map(f=>(
//                         <span key={f.name} style={{background:f.required?"#1e40af":"rgba(59,130,246,0.12)",color:f.required?"#fff":"#1e40af",borderRadius:6,padding:"3px 8px",fontSize:10,fontWeight:700,border:`1px solid ${f.required?"#1e40af":"#93c5fd"}`,cursor:"default",position:"relative"}} title={`${f.desc} (e.g. ${f.example})`}>
//                           {f.name}{f.required&&<span style={{marginLeft:2,color:f.required?"#fbbf24":""}}>*</span>}
//                         </span>
//                       ))}
//                     </div>
//                     <div style={{fontSize:11,color:"#1e40af",fontWeight:700}}>
//                       <span style={{background:"#1e40af",color:"#fff",borderRadius:4,padding:"1px 6px",fontSize:10,marginRight:6}}>★ Required</span>
//                       <strong>title</strong> and <strong>type</strong> are required.
//                     </div>
//                   </div>
//                   <button onClick={downloadSample} style={{background:"linear-gradient(135deg,#3b82f6,#1d4ed8)",color:"#fff",border:"none",borderRadius:12,padding:"10px 18px",cursor:"pointer",fontWeight:800,fontSize:12,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(59,130,246,0.35)",display:"flex",alignItems:"center",gap:7,flexShrink:0,whiteSpace:"nowrap"}}>
//                     ⬇️ Sample CSV
//                   </button>
//                 </div>
//               </div>

//               <div
//                 onDragOver={e=>{e.preventDefault();setDragging(true);}}
//                 onDragLeave={()=>setDragging(false)}
//                 onDrop={handleDrop}
//                 onClick={()=>fileRef.current?.click()}
//                 style={{border:`2.5px dashed ${dragging?"#10b981":"#fbbf24"}`,borderRadius:18,padding:"56px 20px",textAlign:"center",cursor:"pointer",background:dragging?"linear-gradient(135deg,#f0fdf4,#d1fae5)":"linear-gradient(135deg,#fffbeb,#fef3c7)",transition:"all 0.3s ease",position:"relative",overflow:"hidden"}}>
//                 <div style={{fontSize:48,marginBottom:14}}>{dragging?"📂":"☁️"}</div>
//                 <div style={{fontSize:16,fontWeight:800,color:dragging?"#065f46":"#92400e",marginBottom:6}}>
//                   {dragging?"Release to upload!":"CSV file upload"}
//                 </div>
//                 <div style={{fontSize:12,color:dragging?"#059669":"#b45309",fontWeight:600,marginBottom:12}}>Drag & drop your .csv file here, or click to browse</div>
//                 <input ref={fileRef} type="file" accept=".csv" style={{display:"none"}} onChange={e=>handleFile(e.target.files[0])}/>
//               </div>
//             </>
//           )}

//           {step===2&&parsed&&(
//             <>
//               <div style={{background:"linear-gradient(135deg,#f0fdf4,#d1fae5)",border:"1.5px solid #a7f3d0",borderRadius:14,padding:"14px 18px",marginBottom:18,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
//                 <div style={{display:"flex",alignItems:"center",gap:12}}>
//                   <div style={{width:40,height:40,borderRadius:10,background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff"}}>✅</div>
//                   <div>
//                     <div style={{fontWeight:800,fontSize:14,color:"#065f46"}}>Ready to import {parsed.length} material{parsed.length!==1?"s":""}</div>
//                     <div style={{fontSize:11,color:"#059669",fontWeight:600}}>Parsed from: {file?.name}</div>
//                   </div>
//                 </div>
//                 <button onClick={()=>{setStep(1);setFile(null);setParsed(null);}} style={{background:"rgba(255,255,255,0.8)",border:"1px solid #a7f3d0",borderRadius:9,padding:"7px 14px",cursor:"pointer",fontSize:12,fontWeight:700,color:"#065f46",fontFamily:"inherit"}}>🔄 Re-upload</button>
//               </div>

//               <div style={{border:`1px solid ${C.border}`,borderRadius:14,overflow:"hidden",marginBottom:18,maxHeight:280,overflowY:"auto"}}>
//                 <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
//                   <thead>
//                     <tr style={{background:"linear-gradient(135deg,#1e3a8a,#1e40af)",position:"sticky",top:0}}>
//                       {["#","Title","Category","Sub","Type","Pages","Topics","Status"].map(h=>(
//                         <th key={h} style={{padding:"10px 12px",textAlign:"left",color:"rgba(255,255,255,0.9)",fontWeight:700,fontSize:10,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap"}}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {parsed.map((row,i)=>{
//                       const catKey=mapCategoryKey(row.category);
//                       const cat=CATEGORIES[catKey];
//                       return(
//                         <tr key={i} style={{borderTop:`1px solid ${C.border}`,background:i%2===0?C.surface:C.elevated}}>
//                           <td style={{padding:"9px 12px",color:C.textMut,fontWeight:700}}>{i+1}</td>
//                           <td style={{padding:"9px 12px",fontWeight:700,color:C.textPri,maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
//                             <span style={{marginRight:6}}>{row.thumbnail_icon||"📄"}</span>{row.title||"—"}
//                           </td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:cat?.bg,color:cat?.color,borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700,border:`1px solid ${cat?.border}`}}>{cat?.icon} {cat?.label}</span></td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.sub_category||"—"}</td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:(row.type||"").toLowerCase().includes("prem")?"#fffbeb":"#f0fdf4",color:(row.type||"").toLowerCase().includes("prem")?"#92400e":"#166534",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700}}>{(row.type||"Free").toLowerCase().includes("prem")?"✨ Premium":"🆓 Free"}</span></td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.total_pages||"—"}</td>
//                           <td style={{padding:"9px 12px",color:C.textSec,fontWeight:600}}>{row.total_topics||"—"}</td>
//                           <td style={{padding:"9px 12px"}}><span style={{background:"#f0fdf4",color:"#166534",borderRadius:5,padding:"2px 7px",fontSize:10,fontWeight:700}}>{row.status||"Published"}</span></td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>

//               {importing&&(
//                 <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"18px 20px",marginBottom:16}}>
//                   <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
//                     <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#3b82f6,#6366f1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>⚡</div>
//                     <div>
//                       <div style={{fontWeight:800,fontSize:13,color:"#1e40af"}}>Importing materials... {Math.round(progress)}%</div>
//                     </div>
//                   </div>
//                   <div style={{height:8,background:"#dbeafe",borderRadius:8,overflow:"hidden"}}>
//                     <div style={{width:`${progress}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)",borderRadius:8,transition:"width 0.3s ease"}}/>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}

//           <div style={{display:"flex",gap:10,marginTop:4}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>Cancel</button>
//             {step===2&&parsed&&parsed.length>0&&(
//               <button onClick={handleImport} disabled={importing} style={{flex:2,background:importing?"#94a3b8":"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",borderRadius:12,padding:"13px 0",cursor:importing?"not-allowed":"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",boxShadow:importing?"none":"0 4px 18px rgba(16,185,129,0.4)",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
//                 {importing?<>⏳ Importing...</>:<>📥 Import {parsed.length} Material{parsed.length!==1?"s":""}</>}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
//     </div>
//   );
// }

// function mapCategoryKey(cat){
//   if(!cat) return "private";
//   const c=cat.toLowerCase();
//   if(c.includes("gov")||c.includes("government")) return "government";
//   if(c.includes("high")||c.includes("higher")) return "higher";
//   return "private";
// }

// // ─── E-Library Detail Modal ───────────────────────────────────────────────────
// function ELibraryDetailModal({service:s,onClose}){
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),40);},[]);
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:780,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
//         <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕ Close</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
//             <div>
//               <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
//               <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
//               <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
//                 <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
//                 <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{padding:"24px 26px"}}>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:26}}>
//             {[
//               {icon:"📚",label:"Materials",value:s.stats.materials,color:s.color,bg:s.bg},
//               {icon:"⬇️",label:"Total Downloads",value:s.stats.downloads.toLocaleString(),color:"#1e40af",bg:"#eff6ff"},
//               {icon:"📨",label:"Total Requests",value:s.stats.requests,color:"#92400e",bg:"#fffbeb"},
//               {icon:"✅",label:"Approved",value:s.stats.approved,color:"#166534",bg:"#f0fdf4"},
//               {icon:"⏳",label:"Pending",value:s.stats.pending,color:"#d97706",bg:"#fffbeb"},
//               {icon:"📅",label:"Adding Soon",value:s.stats.rejected,color:"#1e40af",bg:"#eff6ff"},
//             ].map((item,i)=>(
//               <div key={i} style={{background:item.bg,border:`1.5px solid ${item.color}33`,borderRadius:14,padding:"16px 18px"}}>
//                 <div style={{fontSize:20,marginBottom:6}}>{item.icon}</div>
//                 <div style={{fontSize:22,fontWeight:900,color:item.color}}>{item.value}</div>
//                 <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ College-wise Downloads</div>
//           <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:26}}>
//             {s.stats.collegeStats.map((clg,i)=>{
//               const maxDl=s.stats.collegeStats[0].downloads,pct=Math.round((clg.downloads/maxDl)*100);
//               const medals=["🥇","🥈","🥉"];
//               return(
//                 <div key={clg.name} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 18px"}}>
//                   <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"}}>
//                     <div style={{display:"flex",alignItems:"center",gap:10}}>
//                       <span style={{fontSize:16}}>{medals[i]||`#${i+1}`}</span>
//                       <div>
//                         <div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.name}</div>
//                         <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>👥 {clg.users.toLocaleString()} active readers</div>
//                       </div>
//                     </div>
//                     <div style={{textAlign:"right"}}><div style={{fontSize:14,fontWeight:900,color:s.color}}>⬇️ {clg.downloads.toLocaleString()}</div></div>
//                   </div>
//                   <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${s.color},${s.color}77)`,borderRadius:8}}/></div>
//                 </div>
//               );
//             })}
//           </div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📖 Most Viewed Materials</div>
//           <div style={{display:"flex",flexDirection:"column",gap:8}}>
//             {MOST_VIEWED_MATERIALS.map((mat,i)=>{
//               const cat=CATEGORIES[mat.category],readPct=Math.round((mat.reads/mat.views)*100);
//               return(
//                 <div key={mat.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:14}}>
//                   <div style={{width:36,height:36,borderRadius:10,background:cat.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{mat.emoji}</div>
//                   <div style={{flex:1}}>
//                     <div style={{fontWeight:700,fontSize:13,marginBottom:3}}>{mat.title}</div>
//                     <div style={{display:"flex",gap:12,fontSize:11,color:C.textMut,fontWeight:600}}>
//                       <span>👁 {mat.views.toLocaleString()} views</span>
//                       <span>📖 {mat.reads.toLocaleString()} reads</span>
//                       <span style={{color:cat.color,fontWeight:700}}>{readPct}% read rate</span>
//                     </div>
//                   </div>
//                   <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"3px 10px",fontSize:10,fontWeight:700,border:`1px solid ${cat.border}`,flexShrink:0}}>#{i+1}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── SERVICE DETAIL MODAL ─────────────────────────────────────────────────────
// function ServiceDetailModal({service:s,onClose}){
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),40);},[]);
//   const statEntries=Object.entries(s.stats).filter(([k])=>!["collegeStats","topCollege"].includes(k));
//   const statLabels={materials:"Materials",downloads:"Total Downloads",requests:"Requests",pending:"Pending",approved:"Approved",rejected:"Adding Soon",created:"Created",downloaded:"Downloaded",templates:"Templates",avgScore:"Avg Score",sent:"Alerts Sent",read:"Read",active:"Active Users",categories:"Categories",events:"Events",reminders:"Reminders",synced:"Synced",upcoming:"Upcoming",courses:"Courses",enrolled:"Enrolled",completed:"Completed",avgHours:"Avg Hours",tests:"Tests",attempts:"Attempts",toppers:"Toppers",sessions:"Sessions",mentors:"Mentors",avgRating:"Avg Rating",placed:"Placed",contests:"Contests",participants:"Participants",problems:"Problems",winners:"Winners"};
//   const statIcons={materials:"📚",downloads:"⬇️",requests:"📨",pending:"⏳",approved:"✅",rejected:"📅",created:"📄",downloaded:"⬇️",templates:"🎨",avgScore:"🎯",sent:"📤",read:"👁",active:"👥",categories:"🏷️",events:"📅",reminders:"🔔",synced:"🔄",upcoming:"📆",courses:"⚡",enrolled:"👥",completed:"🏅",avgHours:"⏱️",tests:"📝",attempts:"🔢",toppers:"🏆",sessions:"💬",mentors:"🧑‍🏫",avgRating:"⭐",placed:"💼",contests:"🏆",participants:"👥",problems:"🧩",winners:"🥇"};
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9500,backdropFilter:"blur(6px)",padding:20}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:640,width:"100%",maxHeight:"90vh",overflow:"auto",boxShadow:C.shadowLg,opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.35s ease"}}>
//         <div style={{background:s.gradient,padding:"28px 28px 22px",borderBottom:`1px solid ${s.border}`,borderRadius:"24px 24px 0 0",position:"relative",overflow:"hidden"}}>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.85)",border:`1px solid ${s.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:13,color:C.textSec,fontFamily:"inherit",fontWeight:700}}>✕</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <div style={{width:64,height:64,borderRadius:18,background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,boxShadow:`0 4px 20px ${s.color}33`,border:`2px solid ${s.border}`}}>{s.icon}</div>
//             <div>
//               <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:900,color:s.color}}>{s.name}</h2>
//               <p style={{margin:0,fontSize:13,color:C.textSec,fontWeight:600}}>{s.description}</p>
//               <div style={{marginTop:8,display:"flex",gap:10,alignItems:"center"}}>
//                 <span style={{background:`${s.color}18`,color:s.color,borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1px solid ${s.border}`}}>👥 {s.users.toLocaleString()} Users</span>
//                 <span style={{background:s.trendUp?"#f0fdf4":"#fef2f2",color:s.trendUp?"#166534":"#991b1b",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:`1.5px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>{s.trendUp?"↑":"↓"} {s.trend} this month</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{padding:"24px 26px"}}>
//           <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
//             {statEntries.map(([k,v],i)=>(
//               <div key={k} style={{background:C.elevated,border:`1.5px solid ${C.border}`,borderRadius:14,padding:"16px 18px"}}>
//                 <div style={{fontSize:20,marginBottom:6}}>{statIcons[k]||"📊"}</div>
//                 <div style={{fontSize:22,fontWeight:900,color:s.color}}>{typeof v==="number"?v.toLocaleString():v}</div>
//                 <div style={{fontSize:11,color:C.textSec,fontWeight:700,marginTop:2}}>{statLabels[k]||k}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── OVERALL SERVICES DASHBOARD ───────────────────────────────────────────────
// function OverallDashboard({onBack}){
//   const [animIn,setAnimIn]=useState(false);
//   const [showPie,setShowPie]=useState(false);
//   const [selectedService,setSelectedService]=useState(null);
//   const [hoveredCard,setHoveredCard]=useState(null);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);
//   const totalUsers=SERVICES.reduce((a,s)=>a+s.users,0);
//   const mostUsed=[...SERVICES].sort((a,b)=>b.users-a.users)[0];
//   const animStyle=(i)=>({opacity:animIn?1:0,transform:animIn?"translateY(0) scale(1)":"translateY(28px) scale(0.96)",transition:`all 0.5s cubic-bezier(.4,0,.2,1) ${i*0.07}s`});
//   return(
//     <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 40%,#f0fdf4 100%)",fontFamily:"'Nunito',sans-serif",color:C.textPri}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(16px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}.svc-card:hover{transform:translateY(-8px) scale(1.02)!important;box-shadow:0 24px 60px rgba(15,23,42,0.14)!important;}.svc-card{transition:all 0.3s cubic-bezier(.4,0,.2,1)!important;}`}</style>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 32px",boxShadow:"0 2px 14px rgba(15,23,42,0.06)",position:"sticky",top:0,zIndex:100}}>
//         <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
//           <div style={{display:"flex",alignItems:"center",gap:16}}>
//             <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"8px 16px",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:700}}>← Home</button>
//             <div style={{display:"flex",alignItems:"center",gap:10}}>
//               <span style={{fontSize:28,animation:"float 3s ease-in-out infinite"}}>🌐</span>
//               <div><div style={{fontWeight:900,fontSize:18,color:"#1e40af"}}>OYS Platform</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>Overall Services Dashboard</div></div>
//             </div>
//           </div>
//           <div style={{display:"flex",gap:10,alignItems:"center"}}>
//             <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:12,padding:"8px 18px",fontSize:13,fontWeight:800,color:"#1e40af"}}>👥 {(totalUsers/1000).toFixed(1)}K Total Users</div>
//             <button onClick={()=>setShowPie(true)} style={{background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",border:"none",borderRadius:12,padding:"10px 20px",cursor:"pointer",fontSize:13,fontWeight:800,fontFamily:"inherit",boxShadow:"0 4px 18px rgba(59,130,246,0.4)",display:"flex",alignItems:"center",gap:7}}>📊 View Pie Chart</button>
//           </div>
//         </div>
//       </div>
//       <div style={{maxWidth:1200,margin:"0 auto",padding:"36px 32px"}}>
//         <div style={{...animStyle(0),marginBottom:36}}>
//           <h1 style={{fontSize:34,fontWeight:900,margin:"0 0 6px",color:C.textPri}}>All Services Overview</h1>
//           <p style={{color:C.textSec,fontSize:15,margin:0,fontWeight:600}}>Real-time usage analytics across all OYS platform services</p>
//         </div>
//         <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:40,...animStyle(1)}}>
//           {[{label:"Total Services",value:"8",icon:"🌐",color:"#3b82f6",bg:"#eff6ff",border:"#bfdbfe"},{label:"Total Users",value:`${(totalUsers/1000).toFixed(1)}K`,icon:"👥",color:"#10b981",bg:"#f0fdf4",border:"#a7f3d0"},{label:"Most Used",value:mostUsed.name,icon:mostUsed.icon,color:"#f59e0b",bg:"#fffbeb",border:"#fde68a",small:true},{label:"Active This Month",value:"42.1K",icon:"📈",color:"#6366f1",bg:"#eff6ff",border:"#c7d2fe"}].map((s,i)=>(
//             <div key={i} style={{background:C.surface,border:`1.5px solid ${s.border}`,borderRadius:18,padding:"20px 22px",boxShadow:"0 4px 20px rgba(15,23,42,0.06)",animation:`cardIn 0.4s ease ${i*0.08}s both`}}>
//               <div style={{background:s.bg,borderRadius:10,padding:"8px 10px",fontSize:22,display:"inline-block",marginBottom:12}}>{s.icon}</div>
//               <div style={{fontSize:s.small?16:26,fontWeight:900,color:s.color,lineHeight:1.2,marginBottom:4}}>{s.value}</div>
//               <div style={{fontSize:12,color:C.textMut,fontWeight:700}}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//         <div style={{display:"flex",flexDirection:"column",gap:16}}>
//           {SERVICES.map((s,i)=>{
//             const isHov=hoveredCard===i,pct=Math.round((s.users/totalUsers)*100);
//             return(
//               <div key={s.id} className="svc-card" onMouseEnter={()=>setHoveredCard(i)} onMouseLeave={()=>setHoveredCard(null)} onClick={()=>setSelectedService(s)} style={{background:C.surface,borderRadius:20,border:`2px solid ${isHov?s.color:C.border}`,overflow:"hidden",cursor:"pointer",boxShadow:C.shadow,animation:`cardIn 0.45s ease ${i*0.06}s both`,position:"relative"}}>
//                 <div style={{display:"flex",alignItems:"center"}}>
//                   <div style={{width:6,alignSelf:"stretch",background:s.color,flexShrink:0,borderRadius:"20px 0 0 20px"}}/>
//                   <div style={{background:s.gradient,padding:"22px 24px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
//                     <div style={{width:60,height:60,borderRadius:16,background:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,border:`2px solid ${s.border}`}}>{s.icon}</div>
//                   </div>
//                   <div style={{flex:1,padding:"20px 22px"}}>
//                     <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:8}}>
//                       <div><div style={{fontWeight:900,fontSize:17,color:C.textPri,marginBottom:3}}>{s.name}</div><div style={{fontSize:12,color:C.textSec,fontWeight:600}}>{s.description}</div></div>
//                       <div style={{textAlign:"right",flexShrink:0,marginLeft:16}}><div style={{fontSize:24,fontWeight:900,color:s.color}}>{s.users.toLocaleString()}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>total users</div></div>
//                     </div>
//                     <div style={{marginBottom:10}}><div style={{height:7,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${s.color},${s.color}99)`,borderRadius:8}}/></div></div>
//                     <div style={{display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"}}>
//                       <div style={{fontSize:12,color:C.textSec,fontWeight:700}}>🏆 {s.topCollege}</div>
//                       <div style={{fontSize:12,fontWeight:800,color:"#166534",background:"#f0fdf4",padding:"3px 10px",borderRadius:7,border:"1px solid #86efac"}}>↑ {s.trend}</div>
//                       <div style={{marginLeft:"auto",color:s.color,fontSize:13,fontWeight:800,opacity:isHov?1:0,transition:"opacity 0.2s"}}>View Details →</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {showPie&&<PieChart services={SERVICES} onClose={()=>setShowPie(false)}/>}
//       {selectedService&&selectedService.id==="elibrary"&&<ELibraryDetailModal service={selectedService} onClose={()=>setSelectedService(null)}/>}
//       {selectedService&&selectedService.id!=="elibrary"&&<ServiceDetailModal service={selectedService} onClose={()=>setSelectedService(null)}/>}
//     </div>
//   );
// }

// // ─── PREMIUM UNLOCK BANNER ────────────────────────────────────────────────────
// function PremiumBanner({completedCount,premiumMaterials,onOpen}){
//   const unlocked=completedCount>=3,needed=3-completedCount;
//   return(
//     <div style={{background:unlocked?"linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)":"linear-gradient(135deg,#f1f5f9,#e2e8f0)",border:`2px solid ${unlocked?"#f59e0b":C.border}`,borderRadius:20,padding:"24px 28px",marginBottom:28,position:"relative",overflow:"hidden"}}>
//       <div style={{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",position:"relative"}}>
//         <div style={{fontSize:48}}>{unlocked?"🔓":"🔒"}</div>
//         <div style={{flex:1}}>
//           <div style={{fontWeight:800,fontSize:18,color:unlocked?"#92400e":C.textSec,marginBottom:4}}>{unlocked?"✨ Premium Unlocked! You've completed 3 materials":`${needed} more material${needed>1?"s":""} to unlock Premium`}</div>
//           <div style={{fontSize:13,color:unlocked?"#b45309":C.textMut}}>{unlocked?`${premiumMaterials.length} premium materials now available — click any to open!`:`Complete ${needed} more free material${needed>1?"s":""} to get access to all premium content`}</div>
//           {!unlocked&&(<div style={{marginTop:10,background:"#e2e8f0",borderRadius:10,height:8,overflow:"hidden",maxWidth:300}}><div style={{width:`${(completedCount/3)*100}%`,height:"100%",background:"linear-gradient(90deg,#f59e0b,#fbbf24)",borderRadius:10,transition:"width 1s ease"}}/></div>)}
//         </div>
//         {unlocked&&(
//           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
//             {premiumMaterials.slice(0,3).map(m=>(
//               <button key={m.id} onClick={()=>onOpen(m)} style={{background:"rgba(255,255,255,0.7)",border:"1.5px solid #f59e0b",borderRadius:12,padding:"10px 12px",cursor:"pointer",textAlign:"center"}}>
//                 <MatThumb m={m} size={40}/>
//                 <div style={{fontSize:10,fontWeight:700,color:"#92400e",marginTop:6,lineHeight:1.2}}>{m.title}</div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── E-PREP ROUTING POPUP ─────────────────────────────────────────────────────
// function EPrepRoutingPopup({material,onClose}){
//   const [countdown,setCountdown]=useState(10);
//   const [messages]=useState(["🎯 Preparing your personalised E-Preparation session...","📊 Loading quiz modules and practice sets...","🔄 Syncing your progress and bookmarks...","✅ All set! Redirecting to E-Preparation platform..."]);
//   const [msgIndex,setMsgIndex]=useState(0);
//   const eprepUrl=EPREP_LINKS[material.id]||"https://www.javatpoint.com/java-quiz";
//   useEffect(()=>{
//     const msgInterval=setInterval(()=>{setMsgIndex(p=>Math.min(p+1,messages.length-1));},2500);
//     const countInterval=setInterval(()=>{setCountdown(p=>{if(p<=1){clearInterval(countInterval);clearInterval(msgInterval);window.open(eprepUrl,"_blank");setTimeout(onClose,300);return 0;}return p-1;});},1000);
//     return()=>{clearInterval(msgInterval);clearInterval(countInterval);};
//   },[]);
//   const pct=((10-countdown)/10)*100;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99000,backdropFilter:"blur(8px)",padding:20}}>
//       <div style={{background:C.surface,borderRadius:24,maxWidth:480,width:"100%",boxShadow:C.shadowLg,overflow:"hidden",animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)"}}>
//         <div style={{height:6,background:"linear-gradient(90deg,#1e40af,#6366f1,#8b5cf6)",width:"100%"}}/>
//         <div style={{padding:"32px 32px 28px",textAlign:"center"}}>
//           <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"3px solid #93c5fd",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36}}>🎯</div>
//           <h2 style={{margin:"0 0 6px",fontSize:20,fontWeight:900,color:C.textPri}}>E-Preparation Platform</h2>
//           <p style={{margin:"0 0 24px",fontSize:13,color:C.textSec,fontWeight:600}}>{material.title}</p>
//           <div style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:14,padding:"16px 20px",marginBottom:24,minHeight:52,display:"flex",alignItems:"center",justifyContent:"center"}}>
//             <p style={{margin:0,fontSize:13,color:"#1e40af",fontWeight:700}}>{messages[msgIndex]}</p>
//           </div>
//           <div style={{marginBottom:20}}>
//             <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#6366f1)",borderRadius:8,transition:"width 0.9s linear"}}/></div>
//             <div style={{fontSize:12,color:C.textMut,marginTop:6}}>Redirecting in {countdown}s...</div>
//           </div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>✕ Cancel</button>
//             <a href={eprepUrl} target="_blank" rel="noreferrer" onClick={onClose} style={{flex:2,background:"linear-gradient(135deg,#1e40af,#3b82f6)",color:"#fff",border:"none",borderRadius:12,padding:"12px 0",cursor:"pointer",fontWeight:800,fontSize:13,fontFamily:"inherit",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>🚀 Go Now</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
// const CURRENT_STUDENT={id:"s1",name:"Arjun Sharma"};

// function StudentDashboard({onBack}){
//   const [materials,setMaterials]=useState(()=>_globalMaterials.filter(m=>m.studentId===null||m.studentId===CURRENT_STUDENT.id));
//   const [requests,setRequests]=useState(()=>_globalRequests.filter(r=>r.studentId===CURRENT_STUDENT.id));
//   const [search,setSearch]=useState("");
//   const [activeCategory,setActiveCat]=useState("all");
//   const [activeSub,setActiveSub]=useState("all");
//   const [openMaterial,setOpenMat]=useState(null);
//   const [showReqModal,setShowReqModal]=useState(false);
//   const [activeView,setActiveView]=useState("library");
//   const {toasts,add:toast}=useToast();
//   const [animIn,setAnimIn]=useState(false);
//   const [eprepPopup,setEprepPopup]=useState(null);
//   const completedCount=3;

//   useEffect(()=>{setTimeout(()=>setAnimIn(true),80);},[]);
//   useEffect(()=>{
//     setMaterials(_globalMaterials.filter(m=>m.studentId===null||m.studentId===CURRENT_STUDENT.id));
//     setRequests(_globalRequests.filter(r=>r.studentId===CURRENT_STUDENT.id));
//   },[]);

//   const higherMats=materials.filter(m=>m.category==="higher");
//   const higherTotal=higherMats.length||1;
//   const indiaMatsCount=higherMats.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both").length;
//   const abroadMatsCount=higherMats.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both").length;
//   const indiaPct=Math.round((indiaMatsCount/higherTotal)*100);
//   const abroadPct=Math.round((abroadMatsCount/higherTotal)*100);

//   const filtered=materials.filter(m=>{
//     const q=search.toLowerCase();
//     return(m.title.toLowerCase().includes(q)||m.sub.toLowerCase().includes(q))&&
//       (activeCategory==="all"||m.category===activeCategory)&&
//       (activeSub==="all"||m.sub===activeSub);
//   });

//   const premiumMats=materials.filter(m=>m.type==="premium");

//   const toggleBookmark=id=>{setMaterials(p=>p.map(m=>m.id===id?{...m,bookmarked:!m.bookmarked}:m));toast("Bookmark updated","info");};
//   const handleOpen=m=>{if(m.type==="premium"&&completedCount<3){toast("Complete 3 free materials to unlock premium!","warn");return;}setOpenMat(m);};
//   const handleDownload=m=>{if(m.type==="premium"&&completedCount<3){toast("Complete 3 materials to unlock downloads","warn");return;}toast(`"${m.title}" download started!`,"success");};
//   const submitRequest=data=>{
//     const newReq={id:`r${Date.now()}`,studentId:CURRENT_STUDENT.id,studentName:CURRENT_STUDENT.name,...data,status:"pending",date:new Date().toISOString().slice(0,10)};
//     _globalRequests=[..._globalRequests,newReq];
//     setRequests(p=>[...p,newReq]);
//     setShowReqModal(false);
//     toast("📨 Request sent to admin!","success");
//   };

//   const myPending=requests.filter(r=>r.status==="pending").length;
//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};
//   };

//   return(
//     <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes slideDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.3)}50%{box-shadow:0 0 0 8px rgba(245,158,11,0)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.mat-card:hover{transform:translateY(-6px) scale(1.02)!important;box-shadow:0 20px 60px rgba(15,23,42,0.15)!important;}.mat-card{transition:all 0.25s cubic-bezier(.4,0,.2,1)!important;}.cat-card:hover{transform:translateY(-4px)!important;box-shadow:0 12px 40px rgba(15,23,42,0.12)!important;}.cat-card{transition:all 0.22s ease!important;}.btn-hover:hover{filter:brightness(1.08);transform:translateY(-1px)!important;}.btn-hover{transition:all 0.18s ease!important;}img{transition:transform 0.35s ease;}.mat-card:hover img{transform:scale(1.08);}`}</style>
//       <ToastContainer toasts={toasts}/>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px",boxShadow:"0 2px 12px rgba(15,23,42,0.06)"}}>
//         <div style={{maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:66}}>
//           <div style={{display:"flex",alignItems:"center",gap:14}}>
//             <button className="btn-hover" onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:10,padding:"7px 14px",cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600}}>← Home</button>
//             <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:26}}>📚</span><span style={{fontWeight:900,fontSize:20,color:C.amber,letterSpacing:-0.5}}>OYS E-Library</span></div>
//           </div>
//           <div style={{display:"flex",gap:10,alignItems:"center"}}>
//             <div style={{background:completedCount>=3?"#f0fdf4":"#fffbeb",border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`,borderRadius:20,padding:"6px 16px",color:completedCount>=3?"#166534":"#92400e",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>{completedCount>=3?"🔓 Premium Unlocked!!":"✅ "+completedCount+"/3 for Premium"}</div>
//             <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"9px 18px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>+ Request Material</button>
//           </div>
//         </div>
//       </div>
//       <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 28px"}}>
//         <div style={{maxWidth:1300,margin:"0 auto",display:"flex",gap:0}}>
//           {[["library","📖 Library"],["requests","📨 My Requests"]].map(([v,l])=>(
//             <button key={v} onClick={()=>setActiveView(v)} style={{background:"none",border:"none",padding:"14px 22px",color:activeView===v?C.amber:C.textSec,borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`,cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s"}}>
//               {l} {v==="requests"&&myPending>0&&<span style={{background:C.rose,color:"#fff",borderRadius:10,padding:"1px 7px",fontSize:10,marginLeft:6}}>{myPending}</span>}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={{maxWidth:1300,margin:"0 auto",padding:"28px",opacity:animIn?1:0,transform:animIn?"translateY(0)":"translateY(20px)",transition:"all 0.5s ease"}}>
//         {activeView==="requests"&&(
//           <div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
//               <h2 style={{margin:0,fontSize:20,fontWeight:800}}>My Material Requests</h2>
//               <button className="btn-hover" onClick={()=>setShowReqModal(true)} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"10px 22px",fontWeight:700,cursor:"pointer",fontSize:13,fontFamily:"inherit"}}>+ New Request</button>
//             </div>
//             {requests.length===0?(
//               <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}><div style={{fontSize:52,marginBottom:14}}>📭</div><div style={{fontSize:16,fontWeight:600,color:C.textSec}}>No requests yet</div></div>
//             ):(
//               <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                 {requests.map(r=>{const badge=getStatusBadge(r.status);return(
//                   <div key={r.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"20px 26px",display:"flex",alignItems:"center",gap:20,boxShadow:C.shadow}}>
//                     <div style={{flex:1}}><div style={{fontWeight:800,fontSize:15,marginBottom:4}}>{r.title}</div><div style={{fontSize:12,color:C.textSec,marginBottom:6}}>{CATEGORIES[r.category]?.label} → {r.sub}</div><div style={{fontSize:12,color:C.textMut,fontStyle:"italic"}}>"{r.reason}"</div></div>
//                     <div style={{textAlign:"right"}}><div style={{display:"inline-block",borderRadius:10,padding:"6px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>{badge.text}</div><div style={{fontSize:11,color:C.textMut,marginTop:6}}>{r.date}</div></div>
//                   </div>
//                 );})}
//               </div>
//             )}
//           </div>
//         )}

//         {activeView==="library"&&(
//           <>
//             <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>
//             <div style={{position:"relative",marginBottom:24}}>
//               <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontSize:16,color:C.textMut}}>🔍</span>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by subject, course, topic..." style={{width:"100%",padding:"14px 16px 14px 46px",borderRadius:14,border:`1.5px solid ${search?C.amber:C.border}`,background:C.surface,color:C.textPri,fontSize:15,outline:"none",boxSizing:"border-box",fontFamily:"inherit",boxShadow:C.shadow,transition:"border-color 0.25s"}}/>
//               {search&&<button onClick={()=>setSearch("")} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:16,color:C.textMut}}>✕</button>}
//             </div>

//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:24}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>(
//                 <div key={key} className="cat-card" onClick={()=>{setActiveCat(activeCategory===key?"all":key);setActiveSub("all");}}
//                   style={{background:activeCategory===key?cat.gradient:C.surface,border:`1.5px solid ${activeCategory===key?cat.color:C.border}`,borderRadius:16,padding:"20px 24px",cursor:"pointer",boxShadow:activeCategory===key?`0 8px 32px ${cat.color}22`:C.shadow}}>
//                   <div style={{fontSize:36,marginBottom:10}}>{cat.icon}</div>
//                   <div style={{fontWeight:800,fontSize:15,color:activeCategory===key?cat.color:C.textPri}}>{cat.label}</div>
//                   <div style={{fontSize:12,marginTop:4,color:C.textSec}}>{CATEGORY_SUBS[key].length} streams · {_globalMaterials.filter(m=>m.category===key).length} materials</div>
//                   {key==="higher"&&(
//                     <div style={{marginTop:10}}>
//                       <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
//                         <span style={{background:"#f0fdf4",color:"#166534",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:"1px solid #86efac"}}>🇮🇳 India</span>
//                         <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,border:"1px solid #93c5fd"}}>✈️ Abroad</span>
//                       </div>
//                       <div style={{display:"flex",flexDirection:"column",gap:4}}>
//                         <div>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#166534",fontWeight:700,marginBottom:2}}><span>🇮🇳 India</span><span>{indiaPct}%</span></div>
//                           <div style={{height:5,background:"rgba(134,239,172,0.3)",borderRadius:4,overflow:"hidden"}}><div style={{width:`${indiaPct}%`,height:"100%",background:"linear-gradient(90deg,#10b981,#34d399)",borderRadius:4}}/></div>
//                         </div>
//                         <div>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#1e40af",fontWeight:700,marginBottom:2}}><span>✈️ Abroad</span><span>{abroadPct}%</span></div>
//                           <div style={{height:5,background:"rgba(147,197,253,0.3)",borderRadius:4,overflow:"hidden"}}><div style={{width:`${abroadPct}%`,height:"100%",background:"linear-gradient(90deg,#3b82f6,#818cf8)",borderRadius:4}}/></div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {activeCategory==="higher"&&(
//               <div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:14,padding:"14px 18px",marginBottom:18,display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
//                 <span style={{fontSize:13,fontWeight:800,color:"#5b21b6"}}>🌍 Filter by Destination:</span>
//                 {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"]].map(([v,l])=>(
//                   <button key={v} onClick={()=>setActiveSub(v==="all"?"all":v)} style={{padding:"7px 14px",borderRadius:9,border:`1.5px solid ${activeSub===(v==="all"?"all":v)?"#7c3aed":"#c4b5fd"}`,background:activeSub===(v==="all"?"all":v)?"#7c3aed":"rgba(255,255,255,0.7)",color:activeSub===(v==="all"?"all":v)?"#fff":"#5b21b6",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>
//                     {l}
//                   </button>
//                 ))}
//                 <div style={{marginLeft:"auto",display:"flex",gap:10}}>
//                   <span style={{background:"#f0fdf4",color:"#166534",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:"1px solid #86efac"}}>🇮🇳 India: {indiaPct}%</span>
//                   <span style={{background:"#eff6ff",color:"#1e40af",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:800,border:"1px solid #93c5fd"}}>✈️ Abroad: {abroadPct}%</span>
//                 </div>
//               </div>
//             )}

//             <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:22,flexWrap:"wrap"}}>
//               {activeCategory!=="all"&&activeCategory!=="higher"&&(
//                 <select value={activeSub} onChange={e=>setActiveSub(e.target.value)} style={{padding:"9px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",outline:"none",fontFamily:"inherit"}}>
//                   {["all",...CATEGORY_SUBS[activeCategory]].map(s=><option key={s} value={s}>{s==="all"?"All Sub-categories":s}</option>)}
//                 </select>
//               )}
//               <div style={{marginLeft:"auto",color:C.textMut,fontSize:13,fontWeight:600}}>
//                 {filtered.filter(m=>{
//                   if(activeCategory!=="higher") return true;
//                   if(activeSub==="all") return true;
//                   if(activeSub==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//                   if(activeSub==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//                   return true;
//                 }).length} materials
//               </div>
//             </div>

//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:20}}>
//               {filtered.filter(m=>{
//                 if(activeCategory!=="higher") return true;
//                 if(activeSub==="all") return true;
//                 if(activeSub==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//                 if(activeSub==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//                 return true;
//               }).map((m,i)=>{
//                 const cat=CATEGORIES[m.category];
//                 const locked=m.type==="premium"&&completedCount<3;
//                 const crash=CRASH_COURSES[m.id];
//                 const isJava=m.id===1;
//                 return(
//                   <div key={m.id} className="mat-card" style={{background:C.surface,borderRadius:18,border:`1.5px solid ${m.bookmarked?C.amber:C.border}`,overflow:"hidden",animation:`cardIn 0.45s ease ${i*0.05}s both`,boxShadow:C.shadow,position:"relative"}}>
//                     <div style={{background:cat.gradient,padding:"28px 0 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,position:"relative",minHeight:130}}>
//                       <MatThumb m={m} size={80}/>
//                       {locked&&<div style={{position:"absolute",top:10,left:10,background:"#92400e",color:"#fef3c7",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>🔒 PREMIUM</div>}
//                       {!locked&&m.type==="premium"&&<div style={{position:"absolute",top:10,left:10,background:cat.color,color:"#fff",fontSize:10,fontWeight:700,borderRadius:7,padding:"3px 9px"}}>✨ PREMIUM</div>}
//                       {m.uploadType==="pdf"&&<div style={{position:"absolute",bottom:10,right:10,background:"#fef2f2",color:"#991b1b",border:"1px solid #fca5a5",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>📄 PDF</div>}
//                       {m.uploadType==="link"&&<div style={{position:"absolute",bottom:10,right:10,background:"#eff6ff",color:"#1e40af",border:"1px solid #93c5fd",fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>🔗 Link</div>}
//                       {m.category==="higher"&&m.indiaOrAbroad&&(
//                         <div style={{position:"absolute",bottom:10,left:10,background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166634":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",border:`1px solid ${m.indiaOrAbroad==="India"?"#86efac":m.indiaOrAbroad==="Abroad"?"#93c5fd":"#c4b5fd"}`,fontSize:10,fontWeight:700,borderRadius:6,padding:"2px 8px"}}>
//                           {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
//                         </div>
//                       )}
//                       <button onClick={e=>{e.stopPropagation();toggleBookmark(m.id);}} style={{position:"absolute",top:10,right:10,background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)",border:`1px solid ${m.bookmarked?C.amber:C.border}`,borderRadius:8,padding:"5px 8px",cursor:"pointer",fontSize:14}}>{m.bookmarked?"🔖":"🏷️"}</button>
//                     </div>
//                     <div style={{padding:"14px 16px 16px"}}>
//                       <div style={{fontWeight:800,fontSize:14,marginBottom:4,color:C.textPri,lineHeight:1.3}}>{m.title}</div>
//                       <div style={{fontSize:11,color:C.textSec,marginBottom:10,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
//                         <span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 8px",fontWeight:700,border:`1px solid ${cat.border}`}}>{m.sub}</span>
//                         <span style={{color:C.textMut}}>{m.pages}p · {m.topics} topics</span>
//                       </div>
//                       {m.progress>0&&(
//                         <div style={{marginBottom:12}}>
//                           <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.textMut,marginBottom:4}}><span>Progress</span><span style={{color:cat.color,fontWeight:700}}>{m.progress}%</span></div>
//                           <div style={{height:6,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${m.progress}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}cc)`,borderRadius:8}}/></div>
//                         </div>
//                       )}
//                       <div style={{display:"flex",gap:7,marginBottom:8}}>
//                         <button className="btn-hover" onClick={()=>handleOpen(m)} style={{flex:1,background:locked?"#f1f5f9":`linear-gradient(135deg,${cat.color},${cat.color}dd)`,color:locked?C.textMut:"#fff",border:"none",borderRadius:10,padding:"9px 0",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>{locked?"🔒 Locked":"📖 Open"}</button>
//                         <button className="btn-hover" onClick={()=>handleDownload(m)} style={{background:"#f1f5f9",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",cursor:"pointer",fontSize:13,color:C.textSec}} title="Download">⬇️</button>
//                       </div>
//                       {!locked&&(
//                         <div style={{display:"flex",gap:7}}>
//                           {isJava?(
//                             <button onClick={()=>setEprepPopup(m)} style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",fontFamily:"inherit"}}>🎯 E-Prep</button>
//                           ):(
//                             <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#1e40af",textDecoration:"none"}}>🎯 E-Prep</a>
//                           )}
//                           {crash&&(<a href={crash.url} target="_blank" rel="noreferrer" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"linear-gradient(135deg,#fff7ed,#ffedd5)",border:"1.5px solid #fdba74",borderRadius:9,padding:"8px 0",cursor:"pointer",fontSize:11,fontWeight:700,color:"#c2410c",textDecoration:"none"}}>⚡ Crash Course</a>)}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>

//       {openMaterial&&<MaterialModal material={openMaterial} onClose={()=>setOpenMat(null)} toast={toast} onEprepClick={m=>setEprepPopup(m)}/>}
//       {showReqModal&&<RequestMaterialModal onClose={()=>setShowReqModal(false)} onSubmit={submitRequest}/>}
//       {eprepPopup&&<EPrepRoutingPopup material={eprepPopup} onClose={()=>setEprepPopup(null)}/>}
//     </div>
//   );
// }

// // ─── MATERIAL MODAL ───────────────────────────────────────────────────────────
// function MaterialModal({material:m,onClose,toast,onEprepClick}){
//   const [topics,setTopics]=useState(JAVA_TOPICS);
//   const [activeTab,setActiveTab]=useState("topics");
//   const cat=CATEGORIES[m.category];
//   const done=topics.filter(t=>t.done).length;
//   const pct=Math.round((done/topics.length)*100);
//   const crash=CRASH_COURSES[m.id];
//   const allDone=done===topics.length;
//   const isJava=m.id===1;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease"}} onClick={e=>e.target===e.currentTarget&&onClose()}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:680,width:"100%",maxHeight:"92vh",overflow:"auto",boxShadow:C.shadowLg,animation:"cardIn 0.35s ease"}}>
//         <div style={{background:cat.gradient,padding:"28px 28px 22px",borderRadius:"22px 22px 0 0",position:"relative",borderBottom:`1px solid ${cat.border}`}}>
//           <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.8)",border:`1px solid ${C.border}`,borderRadius:10,padding:"6px 11px",cursor:"pointer",fontSize:14,color:C.textSec}}>✕</button>
//           <div style={{display:"flex",alignItems:"center",gap:18}}>
//             <MatThumb m={m} size={72}/>
//             <div>
//               <h2 style={{margin:"0 0 6px",color:cat.color,fontSize:20,fontWeight:800}}>{m.title}</h2>
//               <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>{m.sub} · {m.pages} pages · {m.topics} topics</div>
//               <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
//                 {isJava?(<button onClick={()=>onEprepClick(m)} style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,border:"none",cursor:"pointer",fontFamily:"inherit"}}>🎯 E-Preparation</button>)
//                 :(<a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:"#1e40af",color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none"}}>🎯 E-Preparation</a>)}
//                 {crash&&(<a href={crash.url} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,background:crash.color,color:"#fff",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,textDecoration:"none"}}>⚡ {crash.title}</a>)}
//               </div>
//             </div>
//           </div>
//           <div style={{display:"flex",gap:16,marginTop:18,alignItems:"center"}}>
//             <Ring pct={pct} size={58} stroke={5} color={cat.color}/>
//             <div><div style={{fontWeight:800,fontSize:15,color:cat.color}}>{pct}% complete</div><div style={{fontSize:12,color:C.textSec}}>{done}/{topics.length} topics done</div></div>
//             {allDone&&(<div style={{marginLeft:"auto",background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:12,padding:"8px 16px",color:"#166534",fontSize:12,fontWeight:700}}>🎉 Material Completed!</div>)}
//           </div>
//         </div>
//         <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,padding:"0 24px"}}>
//           {[["topics","📚 Topics"],["notes","🗒️ Notes"]].map(([t,l])=>(
//             <button key={t} onClick={()=>setActiveTab(t)} style={{padding:"13px 20px",border:"none",background:"none",fontWeight:700,fontSize:13,cursor:"pointer",color:activeTab===t?cat.color:C.textSec,borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`,fontFamily:"inherit"}}>{l}</button>
//           ))}
//         </div>
//         <div style={{padding:24}}>
//           {activeTab==="topics"&&topics.map((t,i)=>(
//             <div key={t.id} onClick={()=>setTopics(p=>p.map(x=>x.id===t.id?{...x,done:!x.done}:x))} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:12,marginBottom:8,cursor:"pointer",background:t.done?cat.gradient:C.elevated,border:`1.5px solid ${t.done?cat.color:C.border}`,transition:"all 0.2s"}}>
//               <div style={{width:28,height:28,borderRadius:"50%",background:t.done?cat.color:"transparent",border:`2px solid ${t.done?cat.color:C.borderHi}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.done?"#fff":C.textMut,fontWeight:800,fontSize:12,flexShrink:0}}>{t.done?"✓":i+1}</div>
//               <div style={{flex:1}}><div style={{fontWeight:700,fontSize:13,color:C.textPri}}>{t.title}</div><div style={{fontSize:11,color:C.textMut}}>{t.pages} pages</div></div>
//               {t.done&&<span style={{fontSize:10,background:cat.color,color:"#fff",borderRadius:6,padding:"3px 9px",fontWeight:700}}>Done</span>}
//             </div>
//           ))}
//           {activeTab==="notes"&&(
//             <div>
//               <textarea placeholder="Write your personal notes here..." style={{width:"100%",minHeight:160,borderRadius:12,padding:14,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
//               <button onClick={()=>toast("Notes saved!","success")} style={{marginTop:10,background:cat.color,color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>💾 Save Notes</button>
//             </div>
//           )}
//         </div>
//       </div>
//       <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
//     </div>
//   );
// }

// // ─── REQUEST MODAL ────────────────────────────────────────────────────────────
// function RequestMaterialModal({onClose,onSubmit}){
//   const [form,setForm]=useState({title:"",category:"private",sub:"IT",reason:""});
//   const s=f=>v=>setForm(p=>({...p,[f]:v}));
//   const valid=form.title.trim()&&form.reason.trim();
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:500,width:"100%",boxShadow:C.shadowLg,animation:"cardIn 0.3s ease"}}>
//         <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//           <h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:800}}>📨 Request New Material</h2>
//           <button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer",fontSize:13}}>✕</button>
//         </div>
//         <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:16}}>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8,fontFamily:"inherit"}}>Material Title *</label><input value={form.title} onChange={e=>s("title")(e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/></div>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
//             <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Category</label><select value={form.category} onChange={e=>{s("category")(e.target.value);s("sub")(CATEGORY_SUBS[e.target.value][0]);}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select></div>
//             <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label><select value={form.sub} onChange={e=>s("sub")(e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}</select></div>
//           </div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.8}}>Why do you need this? *</label><textarea value={form.reason} onChange={e=>s("reason")(e.target.value)} placeholder="Describe why this material would help your studies..." rows={3} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,resize:"vertical",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
//           <div style={{display:"flex",gap:10}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:13}}>Cancel</button>
//             <button onClick={()=>valid&&onSubmit(form)} style={{flex:2,background:valid?C.amber:"#e2e8f0",color:valid?"#fff":C.textMut,border:"none",borderRadius:10,padding:12,cursor:valid?"pointer":"not-allowed",fontWeight:800,fontFamily:"inherit",fontSize:13}}>📨 Send Request</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── STUDENT ANALYTICS DASHBOARD ─────────────────────────────────────────────
// function StudentAnalyticsDashboard({materials,students}){
//   const [view,setView]=useState("college");
//   const [higherFilter,setHigherFilter]=useState("all");

//   const higherMats=materials.filter(m=>m.category==="higher");
//   const higherTotal=higherMats.length||1;
//   const indiaMats=higherMats.filter(m=>m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both");
//   const abroadMats=higherMats.filter(m=>m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both");
//   const indiaPct=Math.round((indiaMats.length/higherTotal)*100);
//   const abroadPct=Math.round((abroadMats.length/higherTotal)*100);
//   const bothPct=Math.round((higherMats.filter(m=>m.indiaOrAbroad==="Both").length/higherTotal)*100);

//   const getDeptMaterials=(cat)=>materials.filter(m=>m.category===cat).sort((a,b)=>b.downloads-a.downloads);
//   const getHigherMaterials=()=>materials.filter(m=>{
//     if(m.category!=="higher") return false;
//     if(higherFilter==="all") return true;
//     if(higherFilter==="India") return m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both";
//     if(higherFilter==="Abroad") return m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both";
//     if(higherFilter==="Both") return m.indiaOrAbroad==="Both";
//     return true;
//   }).sort((a,b)=>b.downloads-a.downloads);

//   const deptTabs=[
//     {id:"college",label:"🏛️ By College",color:C.amber},
//     {id:"private",label:"🏢 Private Sector",color:"#f59e0b"},
//     {id:"government",label:"🏛️ Government",color:"#10b981"},
//     {id:"higher",label:"🎓 Higher Education",color:"#6366f1"},
//   ];

//   const renderDeptMaterials=(mats,cat)=>{
//     const catInfo=CATEGORIES[cat];
//     if(mats.length===0) return(<div style={{textAlign:"center",padding:"40px 0",color:C.textMut}}><div style={{fontSize:40,marginBottom:10}}>📭</div><div style={{fontSize:14,fontWeight:600}}>No materials found</div></div>);
//     const maxDl=mats[0]?.downloads||1;
//     return(
//       <div style={{display:"flex",flexDirection:"column",gap:12}}>
//         {mats.map((m,i)=>{
//           const pct=Math.round((m.downloads/maxDl)*100);
//           const medals=["🥇","🥈","🥉"];
//           const viewed=MOST_VIEWED_MATERIALS.find(v=>v.id===m.id);
//           return(
//             <div key={m.id} style={{background:C.surface,border:`1.5px solid ${catInfo.color}22`,borderRadius:14,padding:"18px 20px",boxShadow:C.shadow}}>
//               <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
//                 <div style={{width:48,height:48,borderRadius:12,background:catInfo.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,border:`1px solid ${catInfo.border}`}}>{m.emoji}</div>
//                 <div style={{flex:1}}>
//                   <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
//                     <span style={{fontWeight:800,fontSize:14}}>{m.title}</span>
//                     <span style={{fontSize:16,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
//                     {m.category==="higher"&&m.indiaOrAbroad&&(
//                       <span style={{background:m.indiaOrAbroad==="India"?"#f0fdf4":m.indiaOrAbroad==="Abroad"?"#eff6ff":"#f5f3ff",color:m.indiaOrAbroad==="India"?"#166534":m.indiaOrAbroad==="Abroad"?"#1e40af":"#5b21b6",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700}}>
//                         {m.indiaOrAbroad==="India"?"🇮🇳 India":m.indiaOrAbroad==="Abroad"?"✈️ Abroad":"🌐 Both"}
//                       </span>
//                     )}
//                   </div>
//                   <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
//                     <span style={{background:catInfo.bg,color:catInfo.color,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,border:`1px solid ${catInfo.border}`}}>{m.sub}</span>
//                     <span style={{fontSize:12,color:C.textSec,fontWeight:700}}>⬇️ {m.downloads.toLocaleString()} downloads</span>
//                     {viewed&&<span style={{fontSize:12,color:C.textSec,fontWeight:700}}>👁 {viewed.views.toLocaleString()} views</span>}
//                   </div>
//                 </div>
//                 <div style={{background:catInfo.bg,color:catInfo.color,borderRadius:10,padding:"6px 14px",fontSize:13,fontWeight:900,border:`1px solid ${catInfo.border}`,flexShrink:0}}>#{i+1}</div>
//               </div>
//               <div>
//                 <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:C.textMut,marginBottom:3}}><span>Downloads</span><span style={{fontWeight:700,color:catInfo.color}}>{pct}% of top</span></div>
//                 <div style={{height:7,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${catInfo.color},${catInfo.color}88)`,borderRadius:8}}/></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22,flexWrap:"wrap",gap:12}}>
//         <h1 style={{fontSize:22,fontWeight:900,margin:0}}>📊 Student Analytics</h1>
//         <div style={{display:"flex",gap:6,background:C.elevated,borderRadius:12,padding:4,border:`1px solid ${C.border}`,flexWrap:"wrap"}}>
//           {deptTabs.map(tab=>(
//             <button key={tab.id} onClick={()=>{setView(tab.id);setHigherFilter("all");}} style={{padding:"8px 14px",borderRadius:9,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:view===tab.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":C.elevated,color:view===tab.id?C.amberDim:C.textSec,whiteSpace:"nowrap"}}>{tab.label}</button>
//           ))}
//         </div>
//       </div>
//       <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:28}}>
//         {[{icon:"👥",label:"Total Readers",value:COLLEGE_READING_DATA.reduce((a,c)=>a+c.readers,0).toLocaleString(),color:"#3b82f6",bg:"#eff6ff"},{icon:"🏛️",label:"Colleges Active",value:COLLEGE_READING_DATA.length,color:"#10b981",bg:"#f0fdf4"},{icon:"📖",label:"Most Read",value:"UPSC History",color:"#f59e0b",bg:"#fffbeb",small:true},{icon:"📈",label:"Avg Read Rate",value:"74%",color:"#6366f1",bg:"#eff6ff"}].map((s,i)=>(
//           <div key={i} style={{background:C.surface,border:`1.5px solid ${s.color}33`,borderRadius:14,padding:"18px 20px"}}>
//             <div style={{background:s.bg,borderRadius:10,padding:"7px 9px",fontSize:18,display:"inline-block",marginBottom:10}}>{s.icon}</div>
//             <div style={{fontSize:s.small?14:22,fontWeight:900,color:s.color,lineHeight:1.2,marginBottom:3}}>{s.value}</div>
//             <div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{s.label}</div>
//           </div>
//         ))}
//       </div>

//       {view==="college"&&(
//         <div>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Readers by College</div>
//           <div style={{display:"flex",flexDirection:"column",gap:12}}>
//             {COLLEGE_READING_DATA.map((clg,i)=>{
//               const maxR=COLLEGE_READING_DATA[0].readers,pct=Math.round((clg.readers/maxR)*100);
//               const medals=["🥇","🥈","🥉"];
//               return(
//                 <div key={clg.college} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"16px 20px",boxShadow:C.shadow}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
//                     <div style={{display:"flex",alignItems:"center",gap:12}}>
//                       <span style={{fontSize:18,flexShrink:0}}>{medals[i]||`#${i+1}`}</span>
//                       <div><div style={{fontWeight:800,fontSize:14,color:C.textPri}}>{clg.college}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600,marginTop:2}}>📚 {clg.materials.slice(0,3).join(", ")}{clg.materials.length>3?` +${clg.materials.length-3} more`:""}</div></div>
//                     </div>
//                     <div style={{textAlign:"right",flexShrink:0}}><div style={{fontSize:18,fontWeight:900,color:C.amber}}>{clg.readers.toLocaleString()}</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>active readers</div></div>
//                   </div>
//                   <div style={{height:8,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${C.amber},${C.amberHi})`,borderRadius:8}}/></div>
//                   <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
//                     {clg.materials.map(mat=>(<span key={mat} style={{background:"#fffbeb",color:"#92400e",border:"1px solid #fde68a",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700}}>{mat}</span>))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {view==="private"&&(<div><div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏢 Private Sector</div>{renderDeptMaterials(getDeptMaterials("private"),"private")}</div>)}
//       {view==="government"&&(<div><div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🏛️ Government Exams</div>{renderDeptMaterials(getDeptMaterials("government"),"government")}</div>)}

//       {view==="higher"&&(
//         <div>
//           <div style={{background:"linear-gradient(135deg,#f5f3ff,#ede9fe)",border:"1.5px solid #c4b5fd",borderRadius:16,padding:"18px 22px",marginBottom:20}}>
//             <div style={{fontSize:11,color:"#5b21b6",fontWeight:800,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>🌍 Higher Education — India vs Abroad</div>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:14}}>
//               {[
//                 {label:"India",pct:indiaPct,count:indiaMats.length,icon:"🇮🇳",color:"#166534",bg:"#f0fdf4",bar:"linear-gradient(90deg,#10b981,#34d399)",border:"#86efac"},
//                 {label:"Abroad",pct:abroadPct,count:abroadMats.length,icon:"✈️",color:"#1e40af",bg:"#eff6ff",bar:"linear-gradient(90deg,#3b82f6,#818cf8)",border:"#93c5fd"},
//                 {label:"Both",pct:bothPct,count:higherMats.filter(m=>m.indiaOrAbroad==="Both").length,icon:"🌐",color:"#5b21b6",bg:"#f5f3ff",bar:"linear-gradient(90deg,#7c3aed,#a78bfa)",border:"#c4b5fd"},
//               ].map((s,i)=>(
//                 <div key={s.label} style={{background:s.bg,border:`1.5px solid ${s.border}`,borderRadius:12,padding:"14px 16px"}}>
//                   <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
//                     <div><div style={{fontSize:20,marginBottom:4}}>{s.icon}</div><div style={{fontSize:11,color:s.color,fontWeight:800}}>{s.label}</div></div>
//                     <div style={{textAlign:"right"}}><div style={{fontSize:24,fontWeight:900,color:s.color}}>{s.pct}%</div><div style={{fontSize:10,color:s.color,fontWeight:600,opacity:0.7}}>{s.count} materials</div></div>
//                   </div>
//                   <div style={{height:7,background:"rgba(0,0,0,0.06)",borderRadius:8,overflow:"hidden"}}><div style={{width:`${s.pct}%`,height:"100%",background:s.bar,borderRadius:8}}/></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,flexWrap:"wrap",gap:10}}>
//             <div style={{fontSize:11,color:C.textMut,fontWeight:800,textTransform:"uppercase",letterSpacing:1}}>🎓 Higher Education Materials</div>
//             <div style={{display:"flex",gap:6,background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",borderRadius:12,padding:"6px 8px",border:"1.5px solid #c4b5fd"}}>
//               {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"],["Both","🌐 Both"]].map(([v,l])=>(
//                 <button key={v} onClick={()=>setHigherFilter(v)} style={{padding:"6px 12px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit",background:higherFilter===v?"#7c3aed":"rgba(255,255,255,0.6)",color:higherFilter===v?"#fff":"#5b21b6",whiteSpace:"nowrap"}}>{l}</button>
//               ))}
//             </div>
//           </div>
//           {renderDeptMaterials(getHigherMaterials(),"higher")}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
// function AdminDashboard({onBack}){
//   const [materials,setMaterials]=useState(()=>_globalMaterials.map(m=>({...m})));
//   const [requests,setRequests]=useState(()=>[..._globalRequests]);
//   const [students]=useState(()=>_globalStudents.map(s=>({...s})));
//   const [activeTab,setActiveTab]=useState("overview");
//   const [filterCat,setFilterCat]=useState("all");
//   const [filterType,setFilterType]=useState("all");
//   const [search,setSearch]=useState("");
//   const [showAddModal,setShowAdd]=useState(false);
//   const [showBulkImport,setShowBulkImport]=useState(false);
//   const [editItem,setEditItem]=useState(null);
//   const [previewItem,setPreview]=useState(null);
//   const [deleteConfirm,setDelConf]=useState(null);
//   const [selectedStudent,setSelStu]=useState(null);
//   const [animIn,setAnimIn]=useState(false);
//   const [addingSoonPopup,setAddingSoonPopup]=useState(null);
//   const {toasts,add:toast}=useToast();

//   useEffect(()=>{
//     setTimeout(()=>setAnimIn(true),80);
//     const t=setInterval(()=>setRequests([..._globalRequests]),2000);
//     return()=>clearInterval(t);
//   },[]);

//   const handleDelete=id=>{const updated=materials.filter(m=>m.id!==id);setMaterials(updated);_globalMaterials=updated;setDelConf(null);toast("Material deleted","error");};

//   const handleSave=data=>{
//     if(editItem){const updated=materials.map(m=>m.id===editItem.id?{...m,...data}:m);setMaterials(updated);_globalMaterials=updated;toast("Material updated!","success");}
//     else{const newM={...data,id:Date.now(),progress:0,bookmarked:false,downloads:0,emoji:data.emoji||"📄"};const updated=[...materials,newM];setMaterials(updated);_globalMaterials=updated;toast("Material added!","success");}
//     setShowAdd(false);setEditItem(null);
//   };

//   const handleBulkImport=(newMaterials)=>{
//     const updated=[...materials,...newMaterials];
//     setMaterials(updated);
//     _globalMaterials=updated;
//     toast(`✅ ${newMaterials.length} material${newMaterials.length!==1?"s":""} imported successfully!`,"success");
//   };

//   const approveRequest=(req,studentOnly)=>{
//     const newM={id:Date.now(),title:req.title,category:req.category,sub:req.sub,type:"free",emoji:"📄",topics:5,progress:0,pages:100,downloads:0,bookmarked:false,studentId:studentOnly?req.studentId:null,uploadType:null,fileLink:"",indiaOrAbroad:null};
//     const updatedM=[...materials,newM];setMaterials(updatedM);_globalMaterials=updatedM;
//     const updatedR=_globalRequests.map(r=>r.id===req.id?{...r,status:"approved"}:r);_globalRequests=updatedR;setRequests([...updatedR]);
//     toast(`✅ "${req.title}" approved!`,"success");
//   };

//   const markAddingSoon=(id)=>{
//     const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r);_globalRequests=updatedR;setRequests([...updatedR]);setAddingSoonPopup(null);
//     toast("📅 Student notified! Material is being added soon.","info");
//   };

//   const filtered=materials.filter(m=>m.title.toLowerCase().includes(search.toLowerCase())&&(filterCat==="all"||m.category===filterCat)&&(filterType==="all"||m.type===filterType));
//   const pendingReqs=requests.filter(r=>r.status==="pending");
//   const stats={total:materials.length,free:materials.filter(m=>m.type==="free").length,premium:materials.filter(m=>m.type==="premium").length,downloads:materials.reduce((a,m)=>a+m.downloads,0),students:students.length,pending:pendingReqs.length};

//   const TABS=[
//     {id:"overview",label:"📊 Overview"},{id:"materials",label:"📚 Materials"},
//     {id:"requests",label:`📨 Requests ${stats.pending>0?`(${stats.pending})`:""}`},
//     {id:"students",label:"👥 Students"},
//     {id:"student-analytics",label:"📈 Student Analytics"},
//     {id:"categories",label:"🏷️ Categories"},
//   ];

//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};
//   };

//   return(
//     <div style={{minHeight:"100vh",background:C.bg,color:C.textPri,fontFamily:"'Nunito',sans-serif"}}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes orbPulse{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.08)}}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.3)}50%{box-shadow:0 0 0 8px rgba(16,185,129,0)}}.row-hover:hover{background:#f8fafc!important;}.btn-sm:hover{filter:brightness(1.08);transform:translateY(-1px);}.btn-sm{transition:all 0.15s ease;}`}</style>
//       <ToastContainer toasts={toasts}/>

//       <div style={{position:"fixed",left:0,top:0,bottom:0,width:232,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",zIndex:100,boxShadow:"2px 0 12px rgba(15,23,42,0.06)"}}>
//         <div style={{padding:"24px 20px",borderBottom:`1px solid ${C.border}`}}>
//           <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:4,letterSpacing:1.5,textTransform:"uppercase"}}>OYS E-LIBRARY</div>
//           <div style={{fontSize:18,fontWeight:900,color:C.amber}}>Admin Panel</div>
//         </div>
//         <nav style={{padding:"16px 12px",flex:1,overflowY:"auto"}}>
//           {TABS.map(t=>(
//             <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{width:"100%",textAlign:"left",padding:"11px 14px",borderRadius:10,border:"none",cursor:"pointer",marginBottom:4,background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent",color:activeTab===t.id?C.amberDim:C.textSec,fontWeight:activeTab===t.id?800:600,fontSize:13,borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`,fontFamily:"inherit"}}>{t.label}</button>
//           ))}
//         </nav>
//         <div style={{padding:"16px 12px",borderTop:`1px solid ${C.border}`}}>
//           <button onClick={onBack} style={{width:"100%",padding:"11px 14px",borderRadius:10,background:"#fef2f2",border:"1.5px solid #fca5a5",color:"#991b1b",fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>← Back to Home</button>
//         </div>
//       </div>

//       <div style={{marginLeft:232,padding:"28px 32px",opacity:animIn?1:0,transition:"opacity 0.5s ease"}}>

//         {activeTab==="overview"&&(
//           <div>
//             <h1 style={{fontSize:24,fontWeight:900,marginBottom:26}}>Dashboard Overview</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:30}}>
//               {[{label:"Total Materials",value:stats.total,icon:"📚",color:C.amber,bg:"#fffbeb"},{label:"Free Materials",value:stats.free,icon:"🆓",color:C.sage,bg:"#f0fdf4"},{label:"Premium",value:stats.premium,icon:"✨",color:C.indigo,bg:"#eff6ff"},{label:"Total Downloads",value:stats.downloads.toLocaleString(),icon:"⬇️",color:C.rose,bg:"#fef2f2"},{label:"Students",value:stats.students,icon:"👥",color:C.blue,bg:"#eff6ff"},{label:"Pending Requests",value:stats.pending,icon:"⏳",color:C.amberDim,bg:"#fffbeb"}].map((s,i)=>(
//                 <div key={i} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,padding:"20px 22px",boxShadow:C.shadow,transition:"transform 0.2s,box-shadow 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=C.shadowLg;}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=C.shadow;}}>
//                   <div style={{background:s.bg,borderRadius:10,padding:"8px 10px",fontSize:20,display:"inline-block",marginBottom:12}}>{s.icon}</div>
//                   <div style={{fontSize:28,fontWeight:900,color:s.color}}>{s.value}</div>
//                   <div style={{fontSize:12,color:C.textMut,marginTop:3,fontWeight:600}}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//             <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>Downloads by Category</h2>
//             <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px 26px",marginBottom:26,boxShadow:C.shadow}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>{
//                 const count=materials.filter(m=>m.category===key).reduce((a,m)=>a+m.downloads,0);
//                 const max=materials.reduce((a,m)=>a+m.downloads,0);
//                 const pct=max?Math.round((count/max)*100):0;
//                 return(
//                   <div key={key} style={{marginBottom:18}}>
//                     <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:13}}>
//                       <span style={{fontWeight:700,color:C.textSec}}>{cat.icon} {cat.label}</span>
//                       <span style={{color:cat.color,fontWeight:800}}>{count.toLocaleString()} ({pct}%)</span>
//                     </div>
//                     <div style={{height:9,background:C.border,borderRadius:8,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${cat.color},${cat.color}aa)`,borderRadius:8}}/></div>
//                   </div>
//                 );
//               })}
//             </div>
//             {pendingReqs.length>0&&(
//               <>
//                 <h2 style={{fontSize:16,fontWeight:800,marginBottom:14,color:C.textSec}}>⏳ Pending Requests</h2>
//                 <div style={{display:"flex",flexDirection:"column",gap:10}}>
//                   {pendingReqs.slice(0,3).map(r=>(
//                     <div key={r.id} style={{background:C.surface,border:"1.5px solid #fcd34d",borderRadius:14,padding:"15px 20px",display:"flex",alignItems:"center",gap:16,boxShadow:C.shadow}}>
//                       <div style={{flex:1}}><span style={{fontWeight:800,color:C.amber}}>{r.title}</span><span style={{color:C.textMut,fontSize:12,marginLeft:10}}>by {r.studentName}</span></div>
//                       <button className="btn-sm" onClick={()=>setActiveTab("requests")} style={{background:"#fffbeb",border:"1.5px solid #fcd34d",color:"#92400e",borderRadius:9,padding:"7px 16px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>Review →</button>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         )}

//         {activeTab==="materials"&&(
//           <div>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
//               <h1 style={{fontSize:22,fontWeight:900,margin:0}}>Manage Materials</h1>
//               <div style={{display:"flex",gap:10}}>
//                 <button className="btn-sm" onClick={()=>setShowBulkImport(true)} style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",borderRadius:10,padding:"11px 18px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(16,185,129,0.35)",display:"flex",alignItems:"center",gap:7,whiteSpace:"nowrap"}}>📥 Bulk Import</button>
//                 <button className="btn-sm" onClick={()=>{setEditItem(null);setShowAdd(true);}} style={{background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:"11px 20px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.35)"}}>+ Add Material</button>
//               </div>
//             </div>
//             <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
//               <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search materials..." style={{flex:1,minWidth:200,padding:"10px 14px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,outline:"none",fontFamily:"inherit"}}/>
//               <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="all">All Categories</option>{Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select>
//               <select value={filterType} onChange={e=>setFilterType(e.target.value)} style={{padding:"10px 12px",borderRadius:10,border:`1px solid ${C.border}`,background:C.surface,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="all">All Types</option><option value="free">Free</option><option value="premium">Premium</option></select>
//             </div>
//             <div style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
//               <table style={{width:"100%",borderCollapse:"collapse"}}>
//                 <thead>
//                   <tr style={{background:C.elevated}}>
//                     {["Material","Category","Sub","Type","Upload","Downloads","Actions"].map(h=>(<th key={h} style={{padding:"13px 16px",textAlign:"left",fontSize:11,fontWeight:800,color:C.textMut,textTransform:"uppercase",letterSpacing:0.6}}>{h}</th>))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.map((m,i)=>{
//                     const cat=CATEGORIES[m.category];
//                     return(
//                       <tr key={m.id} className="row-hover" style={{borderTop:`1px solid ${C.border}`}}>
//                         <td style={{padding:"13px 16px"}}>
//                           <div style={{display:"flex",alignItems:"center",gap:10}}>
//                             <MatThumb m={m} size={40}/>
//                             <div><div style={{fontWeight:700,fontSize:13}}>{m.title}</div><div style={{fontSize:11,color:C.textMut}}>{m.pages}p</div></div>
//                           </div>
//                         </td>
//                         <td style={{padding:"13px 16px"}}><span style={{background:cat.bg,color:cat.color,borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {cat.label}</span></td>
//                         <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub}</td>
//                         <td style={{padding:"13px 16px"}}><span style={{background:m.type==="premium"?"#fffbeb":"#f0fdf4",color:m.type==="premium"?"#92400e":"#166534",borderRadius:7,padding:"3px 10px",fontSize:11,fontWeight:700}}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
//                         <td style={{padding:"13px 16px"}}>
//                           {m.uploadType==="pdf"&&<span style={{background:"#fef2f2",color:"#991b1b",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>📄 PDF</span>}
//                           {m.uploadType==="link"&&<span style={{background:"#eff6ff",color:"#1e40af",borderRadius:7,padding:"3px 9px",fontSize:11,fontWeight:700}}>🔗 Link</span>}
//                           {!m.uploadType&&<span style={{color:C.textMut,fontSize:11}}>—</span>}
//                         </td>
//                         <td style={{padding:"13px 16px",color:C.textSec,fontSize:12,fontWeight:700}}>{m.downloads.toLocaleString()}</td>
//                         <td style={{padding:"13px 16px"}}>
//                           <div style={{display:"flex",gap:6}}>
//                             <button className="btn-sm" onClick={()=>setPreview(m)} style={{background:"#eff6ff",color:"#1e40af",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>👁</button>
//                             <button className="btn-sm" onClick={()=>{setEditItem(m);setShowAdd(true);}} style={{background:"#fffbeb",color:"#92400e",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>✏️</button>
//                             <button className="btn-sm" onClick={()=>setDelConf(m.id)} style={{background:"#fef2f2",color:"#991b1b",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>🗑</button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//               {filtered.length===0&&<div style={{textAlign:"center",padding:40,color:C.textMut}}>No materials found</div>}
//             </div>
//           </div>
//         )}

//         {activeTab==="requests"&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Material Requests</h1>
//             {requests.length===0?(
//               <div style={{textAlign:"center",padding:"70px 0",color:C.textMut}}><div style={{fontSize:48,marginBottom:12}}>📭</div><div style={{fontWeight:600}}>No requests yet</div></div>
//             ):(
//               <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                 {requests.map((r,i)=>{
//                   const cat=CATEGORIES[r.category],stu=students.find(s=>s.id===r.studentId);
//                   const badge=getStatusBadge(r.status);
//                   return(
//                     <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:16,padding:"20px 24px",boxShadow:C.shadow}}>
//                       <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
//                         <div style={{width:44,height:44,borderRadius:"50%",background:"#fffbeb",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:13,flexShrink:0}}>{stu?.avatar||"??"}</div>
//                         <div style={{flex:1}}>
//                           <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4,flexWrap:"wrap"}}><span style={{fontWeight:800,fontSize:15}}>{r.title}</span><span style={{background:cat.bg,color:cat.color,borderRadius:6,padding:"2px 9px",fontSize:11,fontWeight:700,border:`1px solid ${cat.border}`}}>{cat.icon} {r.sub}</span></div>
//                           <div style={{fontSize:12,color:C.textSec,marginBottom:8}}>By <strong>{r.studentName}</strong> · {r.date}</div>
//                           <div style={{fontSize:12,color:C.textMut,fontStyle:"italic",background:C.elevated,padding:"8px 13px",borderRadius:9,borderLeft:"3px solid #fcd34d"}}>"{r.reason}"</div>
//                         </div>
//                         <div style={{textAlign:"right",flexShrink:0}}>
//                           {r.status==="pending"?(
//                             <div style={{display:"flex",flexDirection:"column",gap:7}}>
//                               <button className="btn-sm" onClick={()=>approveRequest(r,true)} style={{background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>✅ Approve for {r.studentName.split(" ")[0]}</button>
//                               <button className="btn-sm" onClick={()=>approveRequest(r,false)} style={{background:"#fffbeb",color:"#92400e",border:"1.5px solid #fcd34d",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>🌐 Approve for All</button>
//                               <button className="btn-sm" onClick={()=>setAddingSoonPopup(r)} style={{background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:9,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap"}}>📅 Adding Soon</button>
//                             </div>
//                           ):(
//                             <div style={{display:"inline-block",borderRadius:9,padding:"7px 16px",fontSize:12,fontWeight:700,background:badge.bg,color:badge.color,border:`1.5px solid ${badge.border}`}}>{badge.text}</div>
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

//         {activeTab==="students"&&!selectedStudent&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Student Management</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18}}>
//               {students.map((s,i)=>{
//                 const stuMats=materials.filter(m=>m.studentId===s.id);
//                 const stuReqs=requests.filter(r=>r.studentId===s.id);
//                 const stuPending=stuReqs.filter(r=>r.status==="pending").length;
//                 return(
//                   <div key={s.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:"22px",cursor:"pointer",transition:"all 0.22s",boxShadow:C.shadow}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.amber;e.currentTarget.style.transform="translateY(-4px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";}} onClick={()=>setSelStu(s)}>
//                     <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
//                       <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:800,fontSize:14,flexShrink:0}}>{s.avatar}</div>
//                       <div><div style={{fontWeight:800,fontSize:15}}>{s.name}</div><div style={{fontSize:12,color:C.textSec}}>{s.email}</div>{s.college&&<div style={{fontSize:11,color:C.textMut,marginTop:2}}>🏛️ {s.college}</div>}</div>
//                     </div>
//                     <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
//                       {[["📚",stuMats.length,"Personal"],["✅",s.completed,"Done"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
//                         <div key={lbl} style={{background:C.elevated,borderRadius:10,padding:"10px 0",textAlign:"center",border:`1px solid ${C.border}`}}><div style={{fontSize:16,marginBottom:3}}>{icon}</div><div style={{fontSize:18,fontWeight:900,color:C.amber}}>{val}</div><div style={{fontSize:10,color:C.textMut,fontWeight:600}}>{lbl}</div></div>
//                       ))}
//                     </div>
//                     {stuPending>0&&<div style={{marginTop:12,background:"#fffbeb",border:"1.5px solid #fcd34d",borderRadius:9,padding:"7px 12px",fontSize:12,color:"#92400e",fontWeight:700}}>⏳ {stuPending} pending request{stuPending>1?"s":""}</div>}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {activeTab==="students"&&selectedStudent&&(
//           <StudentDetail student={selectedStudent} materials={materials} requests={requests} onBack={()=>setSelStu(null)} onApprove={approveRequest} onMarkAddingSoon={(id)=>{const updatedR=_globalRequests.map(r=>r.id===id?{...r,status:"coming_soon"}:r);_globalRequests=updatedR;setRequests([...updatedR]);toast("📅 Student notified!","info");}} toast={toast}/>
//         )}

//         {activeTab==="student-analytics"&&(<StudentAnalyticsDashboard materials={materials} students={students}/>)}

//         {activeTab==="categories"&&(
//           <div>
//             <h1 style={{fontSize:22,fontWeight:900,marginBottom:22}}>Category Management</h1>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
//               {Object.entries(CATEGORIES).map(([key,cat])=>(
//                 <div key={key} style={{background:C.surface,borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:C.shadow}}>
//                   <div style={{background:cat.gradient,borderBottom:`1px solid ${cat.border}`,padding:"20px 22px",display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:30}}>{cat.icon}</span><div><div style={{color:cat.color,fontWeight:800,fontSize:15}}>{cat.label}</div><div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{materials.filter(m=>m.category===key).length} materials</div></div></div>
//                   <div style={{padding:18}}>
//                     <div style={{fontSize:11,color:C.textMut,fontWeight:800,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>Sub-categories</div>
//                     <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
//                       {CATEGORY_SUBS[key].map(s=>(<span key={s} style={{background:C.elevated,color:C.textSec,borderRadius:7,padding:"5px 11px",fontSize:12,border:`1px solid ${C.border}`,fontWeight:600}}>{s}{key==="higher"&&(<span style={{background:HIGHER_INDIA_ABROAD[s]==="India"?"#f0fdf4":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#eff6ff":"#f5f3ff",color:HIGHER_INDIA_ABROAD[s]==="India"?"#166534":HIGHER_INDIA_ABROAD[s]==="Abroad"?"#1e40af":"#5b21b6",borderRadius:4,padding:"1px 5px",fontSize:9,fontWeight:800,marginLeft:4}}>{HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️":"🌐"}</span>)}</span>))}
//                     </div>
//                     <button className="btn-sm" style={{width:"100%",background:cat.gradient,color:cat.color,border:`1.5px solid ${cat.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit"}}>+ Add Sub-category</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showAddModal&&<AddMaterialModal item={editItem} students={students} onClose={()=>{setShowAdd(false);setEditItem(null);}} onSave={handleSave}/>}
//       {showBulkImport&&<BulkImportModal onClose={()=>setShowBulkImport(false)} onImport={handleBulkImport} toast={toast}/>}
//       {previewItem&&<PreviewModal item={previewItem} students={students} onClose={()=>setPreview(null)}/>}
//       {deleteConfirm&&(
//         <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,backdropFilter:"blur(4px)"}}>
//           <div style={{background:C.surface,borderRadius:18,padding:32,maxWidth:360,width:"90%",border:"1.5px solid #fca5a5",textAlign:"center",boxShadow:C.shadowLg}}>
//             <div style={{fontSize:40,marginBottom:12}}>⚠️</div>
//             <h3 style={{fontWeight:800,marginBottom:8}}>Delete Material?</h3>
//             <p style={{color:C.textSec,fontSize:13,marginBottom:24}}>This action cannot be undone.</p>
//             <div style={{display:"flex",gap:10}}>
//               <button onClick={()=>setDelConf(null)} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
//               <button onClick={()=>handleDelete(deleteConfirm)} style={{flex:1,background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit"}}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {addingSoonPopup&&(<AddingSoonPopup request={addingSoonPopup} onConfirm={()=>markAddingSoon(addingSoonPopup.id)} onClose={()=>setAddingSoonPopup(null)}/>)}
//     </div>
//   );
// }

// function StudentDetail({student:s,materials,requests,onBack,onApprove,onMarkAddingSoon,toast}){
//   const stuMats=materials.filter(m=>m.studentId===s.id);
//   const stuReqs=requests.filter(r=>r.studentId===s.id);
//   const getStatusBadge=(status)=>{
//     if(status==="approved") return{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"};
//     if(status==="coming_soon") return{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"};
//     return null;
//   };
//   return(
//     <div>
//       <button onClick={onBack} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"8px 16px",cursor:"pointer",fontSize:12,marginBottom:22,fontFamily:"inherit",fontWeight:700}}>← All Students</button>
//       <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:26,background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:"24px 26px",boxShadow:C.shadow}}>
//         <div style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",display:"flex",alignItems:"center",justifyContent:"center",color:C.amberDim,fontWeight:900,fontSize:18}}>{s.avatar}</div>
//         <div><h2 style={{margin:0,fontSize:20,fontWeight:900}}>{s.name}</h2><div style={{color:C.textSec,fontSize:13,fontWeight:600}}>{s.email} · Joined {s.joined}</div>{s.college&&<div style={{fontSize:12,color:C.textMut,marginTop:3}}>🏛️ {s.college}</div>}</div>
//         <div style={{marginLeft:"auto",display:"flex",gap:14}}>
//           {[["✅",s.completed,"Completed"],["📚",stuMats.length,"Personal"],["📨",stuReqs.length,"Requests"]].map(([icon,val,lbl])=>(
//             <div key={lbl} style={{background:C.elevated,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 18px",textAlign:"center"}}><div style={{fontSize:18}}>{icon}</div><div style={{fontSize:22,fontWeight:900,color:C.amber}}>{val}</div><div style={{fontSize:11,color:C.textMut,fontWeight:600}}>{lbl}</div></div>
//           ))}
//         </div>
//       </div>
//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22}}>
//         <div>
//           <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>⭐ Personal Materials ({stuMats.length})</h3>
//           {stuMats.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No personal materials yet</div>:stuMats.map(m=>(<div key={m.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 17px",marginBottom:9,display:"flex",alignItems:"center",gap:12,boxShadow:C.shadow}}><MatThumb m={m} size={38}/><div style={{flex:1}}><div style={{fontWeight:700,fontSize:13}}>{m.title}</div><div style={{fontSize:11,color:C.textSec,fontWeight:600}}>{m.sub} · {m.type}</div></div></div>))}
//         </div>
//         <div>
//           <h3 style={{color:C.textSec,fontSize:14,fontWeight:800,marginBottom:14}}>📨 Requests ({stuReqs.length})</h3>
//           {stuReqs.length===0?<div style={{color:C.textMut,fontSize:13,padding:"20px 0",fontWeight:600}}>No requests yet</div>:stuReqs.map(r=>{
//             const badge=getStatusBadge(r.status);
//             return(
//               <div key={r.id} style={{background:C.surface,border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`,borderRadius:12,padding:"13px 15px",marginBottom:9,boxShadow:C.shadow}}>
//                 <div style={{fontWeight:700,fontSize:13,marginBottom:4}}>{r.title}</div>
//                 <div style={{fontSize:11,color:C.textMut,fontStyle:"italic",marginBottom:9}}>"{r.reason}"</div>
//                 {r.status==="pending"?(
//                   <div style={{display:"flex",gap:7}}>
//                     <button onClick={()=>{onApprove(r,true);toast(`Approved for ${s.name}`,"success");}} style={{flex:1,background:"#f0fdf4",color:"#166534",border:"1.5px solid #86efac",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>✅ Approve</button>
//                     <button onClick={()=>onMarkAddingSoon(r.id)} style={{flex:1,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",color:"#1e40af",border:"1.5px solid #93c5fd",borderRadius:8,padding:"7px 0",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>📅 Soon</button>
//                   </div>
//                 ):(badge&&<span style={{fontSize:11,fontWeight:700,color:badge.color,background:badge.bg,border:`1px solid ${badge.border}`,borderRadius:7,padding:"4px 10px"}}>{badge.text}</span>)}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AddMaterialModal({item,students,onClose,onSave}){
//   const [form,setForm]=useState({title:item?.title||"",category:item?.category||"private",sub:item?.sub||"IT",type:item?.type||"free",pages:item?.pages||"",topics:item?.topics||"",emoji:item?.emoji||"📄",uploadType:item?.uploadType||"",fileLink:item?.fileLink||"",studentId:item?.studentId||"",indiaOrAbroad:item?.indiaOrAbroad||""});
//   const set=(k,v)=>setForm(p=>({...p,[k]:v}));
//   const EMOJIS=["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐"];
//   const isHigher=form.category==="higher";
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:560,width:"100%",boxShadow:C.shadowLg,maxHeight:"92vh",overflow:"auto"}}>
//         <div style={{padding:"22px 28px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><h2 style={{margin:0,color:C.amber,fontSize:17,fontWeight:900}}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2><button onClick={onClose} style={{background:C.elevated,border:`1px solid ${C.border}`,color:C.textSec,borderRadius:9,padding:"6px 11px",cursor:"pointer"}}>✕</button></div>
//         <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:15}}>
//           {[{label:"Title",key:"title",type:"text",ph:"e.g. Java Programming"},{label:"Pages",key:"pages",type:"number",ph:"340"},{label:"Topics",key:"topics",type:"number",ph:"12"}].map(f=>(<div key={f.key}><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{f.label}</label><input value={form[f.key]} onChange={e=>set(f.key,e.target.value)} type={f.type} placeholder={f.ph} style={{width:"100%",padding:"11px 14px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/></div>))}
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
//             {[["Category","category",Object.entries(CATEGORIES).map(([k,v])=>[k,v.label])],["Type","type",[["free","Free"],["premium","Premium"]]]].map(([label,key,opts])=>(<div key={key}><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>{label}</label><select value={form[key]} onChange={e=>{set(key,e.target.value);if(key==="category"){set("sub",CATEGORY_SUBS[e.target.value][0]);set("indiaOrAbroad","");}}} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div>))}
//           </div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Sub-category</label><select value={form.sub} onChange={e=>set("sub",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{CATEGORY_SUBS[form.category].map(s=><option key={s} value={s}>{s}</option>)}</select></div>
//           {isHigher&&(<div style={{background:"linear-gradient(135deg,#ede9fe,#ddd6fe)",border:"1.5px solid #c4b5fd",borderRadius:12,padding:"14px 16px"}}><div style={{fontSize:11,color:"#5b21b6",fontWeight:800,marginBottom:10}}>🌍 Higher Education Destination</div><select value={form.indiaOrAbroad} onChange={e=>set("indiaOrAbroad",e.target.value)} style={{width:"100%",padding:"9px 11px",borderRadius:8,border:"1.5px solid #c4b5fd",background:"rgba(255,255,255,0.85)",color:"#5b21b6",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:600}}><option value="">Select</option><option value="India">🇮🇳 India</option><option value="Abroad">✈️ Abroad</option><option value="Both">🌐 Both</option></select></div>)}
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Content Type</label><div style={{display:"flex",gap:8,marginBottom:form.uploadType?10:0}}>{[["","📁 None"],["pdf","📄 PDF"],["link","🔗 Link"]].map(([v,l])=>(<button key={v} onClick={()=>set("uploadType",v)} style={{flex:1,background:form.uploadType===v?"#fffbeb":C.elevated,color:form.uploadType===v?"#92400e":C.textSec,border:`1.5px solid ${form.uploadType===v?"#fcd34d":C.border}`,borderRadius:9,padding:"9px 0",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>{l}</button>))}</div>{form.uploadType&&<input value={form.fileLink} onChange={e=>set("fileLink",e.target.value)} placeholder={form.uploadType==="pdf"?"https://example.com/file.pdf":"https://example.com/resource"} style={{width:"100%",padding:"10px 13px",borderRadius:10,border:"1.5px solid #fcd34d",background:C.elevated,color:C.textPri,fontSize:13,outline:"none",boxSizing:"border-box",fontFamily:"inherit"}}/>}</div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:5,textTransform:"uppercase",letterSpacing:0.8}}>Assign to Student</label><select value={form.studentId} onChange={e=>set("studentId",e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${C.border}`,background:C.elevated,color:C.textPri,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}><option value="">All Students (Public)</option>{students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
//           <div><label style={{fontSize:11,fontWeight:800,color:C.textSec,display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Thumbnail Icon</label><div style={{display:"flex",flexWrap:"wrap",gap:7}}>{EMOJIS.map(e=>(<button key={e} onClick={()=>set("emoji",e)} style={{width:40,height:40,fontSize:18,borderRadius:9,border:`2px solid ${form.emoji===e?C.amber:C.border}`,background:form.emoji===e?"#fffbeb":C.elevated,cursor:"pointer"}}>{e}</button>))}</div></div>
//           <div style={{display:"flex",gap:10,marginTop:4}}>
//             <button onClick={onClose} style={{flex:1,background:C.elevated,color:C.textSec,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>Cancel</button>
//             <button onClick={()=>onSave(form)} style={{flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:12,cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:14}}>{item?"💾 Update":"✅ Add Material"}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PreviewModal({item:m,students,onClose}){
//   const cat=CATEGORIES[m.category],stu=m.studentId?students.find(s=>s.id===m.studentId):null;
//   return(
//     <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9000,padding:20,backdropFilter:"blur(4px)"}}>
//       <div style={{background:C.surface,borderRadius:22,maxWidth:480,width:"100%",boxShadow:C.shadowLg}}>
//         <div style={{background:cat.gradient,padding:"26px 26px 20px",borderRadius:"22px 22px 0 0",textAlign:"center",borderBottom:`1px solid ${cat.border}`}}><MatThumb m={m} size={80}/><h2 style={{color:cat.color,margin:"14px 0 4px",fontSize:18,fontWeight:900}}>{m.title}</h2><div style={{color:C.textSec,fontSize:12,fontWeight:600}}>{m.sub} · {m.pages} pages · {m.topics} topics</div></div>
//         <div style={{padding:24}}>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
//             {[["Category",cat.label],["Type",m.type],["Downloads",m.downloads.toLocaleString()],["Progress",`${m.progress}%`],["Upload",m.uploadType||"None"],["Assigned To",stu?.name||"All Students"]].map(([k,v])=>(<div key={k} style={{background:C.elevated,borderRadius:10,padding:"11px 14px",border:`1px solid ${C.border}`}}><div style={{fontSize:10,color:C.textMut,fontWeight:800,textTransform:"uppercase",marginBottom:3}}>{k}</div><div style={{fontSize:14,fontWeight:700}}>{v}</div></div>))}
//           </div>
//           <button onClick={onClose} style={{width:"100%",background:C.elevated,color:C.textPri,border:`1px solid ${C.border}`,borderRadius:10,padding:12,cursor:"pointer",fontWeight:700,fontFamily:"inherit",fontSize:14}}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── SERVICE CARD ILLUSTRATION ─────────────────────────────────────────────────
// // Inline SVG illustrations for each service card
// const SERVICE_ILLUSTRATIONS = {
//   resume: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#ede9fe"/>
//       <rect x="55" y="15" width="90" height="110" rx="6" fill="white" stroke="#c4b5fd" strokeWidth="1.5"/>
//       <rect x="65" y="28" width="40" height="5" rx="2" fill="#8b5cf6"/>
//       <rect x="65" y="38" width="30" height="3" rx="1.5" fill="#c4b5fd"/>
//       <rect x="65" y="50" width="70" height="2.5" rx="1.2" fill="#e9d5ff"/>
//       <rect x="65" y="57" width="60" height="2.5" rx="1.2" fill="#e9d5ff"/>
//       <rect x="65" y="64" width="65" height="2.5" rx="1.2" fill="#e9d5ff"/>
//       <rect x="65" y="76" width="45" height="4" rx="2" fill="#8b5cf6" opacity="0.6"/>
//       <rect x="65" y="85" width="70" height="2" rx="1" fill="#e9d5ff"/>
//       <rect x="65" y="91" width="55" height="2" rx="1" fill="#e9d5ff"/>
//       <circle cx="30" cy="40" r="18" fill="#ddd6fe"/>
//       <circle cx="30" cy="35" r="8" fill="#8b5cf6" opacity="0.7"/>
//       <path d="M14 58 Q30 48 46 58" fill="#8b5cf6" opacity="0.5"/>
//       <circle cx="170" cy="90" r="14" fill="#ddd6fe"/>
//       <path d="M163 90 L168 95 L177 85" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
//     </svg>
//   ),
//   alerts: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#fef3c7"/>
//       <path d="M100 10 Q130 10 140 30 L148 70 L52 70 L60 30 Q70 10 100 10Z" fill="#f59e0b" opacity="0.8"/>
//       <rect x="88" y="70" width="24" height="8" rx="4" fill="#d97706"/>
//       <circle cx="100" cy="80" r="7" fill="#fbbf24"/>
//       <circle cx="155" cy="25" r="12" fill="#ef4444"/>
//       <text x="155" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">!</text>
//       <rect x="20" y="50" width="30" height="4" rx="2" fill="#fde68a"/>
//       <rect x="15" y="60" width="25" height="3" rx="1.5" fill="#fde68a" opacity="0.6"/>
//       <rect x="155" y="55" width="30" height="4" rx="2" fill="#fde68a"/>
//       <rect x="160" y="65" width="25" height="3" rx="1.5" fill="#fde68a" opacity="0.6"/>
//       <circle cx="35" cy="90" r="8" fill="#fde68a"/>
//       <circle cx="165" cy="90" r="8" fill="#fde68a"/>
//     </svg>
//   ),
//   calendar: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#d1fae5"/>
//       <rect x="40" y="20" width="120" height="95" rx="8" fill="white" stroke="#a7f3d0" strokeWidth="1.5"/>
//       <rect x="40" y="20" width="120" height="28" rx="8" fill="#10b981"/>
//       <rect x="40" y="38" width="120" height="10" rx="0" fill="#10b981"/>
//       <text x="100" y="38" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">May 2026</text>
//       {[0,1,2,3,4,5,6].map(i=>(
//         <rect key={i} x={50+i*15} y="52" width="10" height="5" rx="1" fill="#a7f3d0" opacity="0.8"/>
//       ))}
//       {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((d,i)=>(
//         <rect key={d} x={50+(i%7)*15} y={62+Math.floor(i/7)*16} width="10" height="10" rx="2"
//           fill={d===5||d===12?"#10b981":d===8?"#fbbf24":"#f0fdf4"}
//           stroke={d===5?"#059669":"transparent"} strokeWidth="1.5"/>
//       ))}
//       <circle cx="162" cy="108" r="10" fill="#34d399"/>
//       <path d="M157 108 L161 112 L168 104" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
//     </svg>
//   ),
//   crash: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#fee2e2"/>
//       <polygon points="100,5 120,60 170,60 130,90 145,145 100,110 55,145 70,90 30,60 80,60" fill="#ef4444" opacity="0.15"/>
//       <polygon points="100,15 116,52 155,52 124,74 135,113 100,90 65,113 76,74 45,52 84,52" fill="#ef4444" opacity="0.8"/>
//       <polygon points="100,28 110,55 137,55 115,70 123,97 100,80 77,97 85,70 63,55 90,55" fill="#fbbf24"/>
//       <circle cx="40" cy="100" r="15" fill="#fca5a5"/>
//       <circle cx="160" cy="30" r="10" fill="#fca5a5"/>
//       <circle cx="160" cy="100" r="8" fill="#fca5a5"/>
//       <path d="M35 95 L45 105" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
//       <path d="M45 95 L35 105" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
//     </svg>
//   ),
//   elibrary: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#dbeafe"/>
//       {[
//         {x:30,w:20,fill:"#3b82f6"},
//         {x:55,w:16,fill:"#60a5fa"},
//         {x:76,w:22,fill:"#2563eb"},
//         {x:103,w:18,fill:"#93c5fd"},
//         {x:126,w:20,fill:"#3b82f6"},
//         {x:151,w:19,fill:"#1d4ed8"},
//       ].map((b,i)=>(
//         <g key={i}>
//           <rect x={b.x} y={30} width={b.w} height={75} rx="3" fill={b.fill}/>
//           <rect x={b.x+2} y={35} width={b.w-4} height={4} rx="1" fill="white" opacity="0.3"/>
//         </g>
//       ))}
//       <ellipse cx="100" cy="108" rx="80" ry="6" fill="#bfdbfe" opacity="0.5"/>
//       <circle cx="155" cy="20" r="14" fill="#bfdbfe"/>
//       <circle cx="155" cy="20" r="9" fill="#3b82f6"/>
//       <circle cx="155" cy="20" r="4" fill="white"/>
//       <path d="M161 26 L168 33" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
//     </svg>
//   ),
//   eprep: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#ede9fe"/>
//       <circle cx="100" cy="55" r="42" fill="white" stroke="#c4b5fd" strokeWidth="2"/>
//       <circle cx="100" cy="55" r="35" fill="#f5f3ff"/>
//       <circle cx="100" cy="55" r="28" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeDasharray="88 176" strokeDashoffset="44"/>
//       <circle cx="100" cy="55" r="28" stroke="#e9d5ff" strokeWidth="2.5" fill="none"/>
//       <text x="100" y="52" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="900">72%</text>
//       <text x="100" y="64" textAnchor="middle" fill="#a78bfa" fontSize="7">avg score</text>
//       <rect x="20" y="95" width="160" height="25" rx="6" fill="white" stroke="#c4b5fd" strokeWidth="1"/>
//       {["Q1","Q2","Q3","Q4"].map((q,i)=>(
//         <g key={q}>
//           <rect x={30+i*38} y="101" width="25" height="13" rx="3" fill={i===1?"#8b5cf6":"#e9d5ff"}/>
//           <text x={42+i*38} y="111" textAnchor="middle" fill={i===1?"white":"#8b5cf6"} fontSize="7" fontWeight="700">{q}</text>
//         </g>
//       ))}
//     </svg>
//   ),
//   counseling: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#fce7f3"/>
//       <circle cx="70" cy="45" r="22" fill="#fbcfe8"/>
//       <circle cx="70" cy="38" r="10" fill="#ec4899" opacity="0.7"/>
//       <path d="M50 65 Q70 55 90 65" fill="#ec4899" opacity="0.5"/>
//       <circle cx="135" cy="50" r="18" fill="#fbcfe8"/>
//       <circle cx="135" cy="44" r="8" fill="#ec4899" opacity="0.7"/>
//       <path d="M119 66 Q135 58 151 66" fill="#ec4899" opacity="0.5"/>
//       <rect x="55" y="75" width="90" height="35" rx="8" fill="white" stroke="#f9a8d4" strokeWidth="1.5"/>
//       <rect x="63" y="83" width="40" height="3" rx="1.5" fill="#f472b6"/>
//       <rect x="63" y="91" width="60" height="2.5" rx="1.2" fill="#fce7f3"/>
//       <rect x="63" y="97" width="50" height="2.5" rx="1.2" fill="#fce7f3"/>
//       <path d="M100 75 L108 68 L116 75" fill="white" stroke="#f9a8d4" strokeWidth="1.5"/>
//     </svg>
//   ),
//   c3arena: (
//     <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
//       <rect width="200" height="130" fill="#ffedd5"/>
//       <polygon points="100,8 108,30 132,30 113,44 120,66 100,52 80,66 87,44 68,30 92,30" fill="#f97316" opacity="0.9"/>
//       <polygon points="100,18 106,32 120,32 109,41 113,55 100,47 87,55 91,41 80,32 94,32" fill="#fbbf24"/>
//       <rect x="88" y="66" width="24" height="8" rx="2" fill="#f97316"/>
//       <rect x="82" y="74" width="36" height="28" rx="4" fill="#fed7aa"/>
//       <rect x="86" y="78" width="12" height="20" rx="2" fill="white"/>
//       <rect x="102" y="78" width="12" height="20" rx="2" fill="white"/>
//       <circle cx="40" cy="60" r="14" fill="#fed7aa"/>
//       <text x="40" y="65" textAnchor="middle" fill="#ea580c" fontSize="12" fontWeight="800">#2</text>
//       <circle cx="160" cy="65" r="12" fill="#fed7aa"/>
//       <text x="160" y="70" textAnchor="middle" fill="#ea580c" fontSize="11" fontWeight="800">#3</text>
//     </svg>
//   ),
// };

// // ─── HOME ─────────────────────────────────────────────────────────────────────
// export default function App(){
//   const [screen,setScreen]=useState("home");
//   const [sortBy,setSortBy]=useState("default"); // "name" | "popularity" | "default"
//   const [hoveredCard,setHoveredCard]=useState(null);
//   const [animIn,setAnimIn]=useState(false);
//   useEffect(()=>{setTimeout(()=>setAnimIn(true),60);},[]);

//   if(screen==="student") return <StudentDashboard onBack={()=>setScreen("home")}/>;
//   if(screen==="admin")   return <AdminDashboard   onBack={()=>setScreen("home")}/>;

//   const sortedServices=[...SERVICES].sort((a,b)=>{
//     if(sortBy==="name") return a.name.localeCompare(b.name);
//     if(sortBy==="popularity") return b.users-a.users;
//     return 0;
//   });

//   return(
//     <div style={{minHeight:"100vh",background:"#f8faff",fontFamily:"'Nunito',sans-serif",color:C.textPri}}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
//         @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
//         @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
//         .svc-home-card{transition:all 0.28s cubic-bezier(.4,0,.2,1);cursor:pointer;}
//         .svc-home-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(15,23,42,0.15)!important;}
//         .svc-home-card:hover .card-label{color:#1e40af!important;}
//         .sort-btn{cursor:pointer;background:none;border:none;font-family:inherit;font-size:14px;font-weight:700;padding:4px 8px;transition:color 0.18s;}
//         .sort-btn:hover{text-decoration:underline;}
//         @media(max-width:768px){
//           .home-grid{grid-template-columns:repeat(2,1fr)!important;}
//           .home-header{flex-direction:column!important;gap:12px!important;text-align:center!important;}
//           .hero-section{padding:24px 16px 16px!important;}
//           .hero-title{font-size:26px!important;}
//           .hero-btns{flex-direction:column!important;align-items:center!important;}
//           .home-main{padding:16px!important;}
//         }
//         @media(max-width:480px){
//           .home-grid{grid-template-columns:1fr 1fr!important;}
//         }
//       `}</style>

//       {/* ── Header ── */}
//       <div style={{background:"white",borderBottom:"1.5px solid #e8edf5",padding:"0 24px",boxShadow:"0 2px 12px rgba(15,23,42,0.06)",position:"sticky",top:0,zIndex:100}}>
//         <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}} className="home-header">
//           <div style={{display:"flex",alignItems:"center",gap:10}}>
//             <div style={{width:38,height:38,borderRadius:10,background:"linear-gradient(135deg,#f59e0b,#fbbf24)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 4px 12px rgba(245,158,11,0.35)"}}>📚</div>
//             <div>
//               <div style={{fontWeight:900,fontSize:18,color:"#0f172a",letterSpacing:-0.5}}>OYS Platform</div>
//               <div style={{fontSize:10,color:"#94a3b8",fontWeight:600,letterSpacing:0.5}}>One Year Series</div>
//             </div>
//           </div>
//           <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
//             <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"white",border:"none",borderRadius:10,padding:"9px 20px",fontWeight:800,fontSize:13,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 14px rgba(245,158,11,0.4)"}}>🎓 Student Dashboard</button>
//             <button onClick={()=>setScreen("admin")} style={{background:"white",color:"#475569",border:"1.5px solid #e2e8f0",borderRadius:10,padding:"9px 20px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>⚙️ Admin Panel</button>
//           </div>
//         </div>
//       </div>

//       {/* ── Hero Banner ── */}
//       <div style={{background:"linear-gradient(135deg,#1e3a8a 0%,#1e40af 50%,#2563eb 100%)",padding:"40px 24px 36px",textAlign:"center",position:"relative",overflow:"hidden"}} className="hero-section">
//         <div style={{position:"absolute",inset:0,background:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",opacity:1,pointerEvents:"none"}}/>
//         <div style={{position:"relative",zIndex:1,opacity:animIn?1:0,transition:"opacity 0.7s ease"}}>
//           <div style={{display:"inline-block",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:20,padding:"5px 16px",fontSize:11,color:"rgba(255,255,255,0.85)",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>🌟 India's #1 Learning Platform</div>
//           <h1 style={{fontSize:38,fontWeight:900,color:"white",margin:"0 0 10px",letterSpacing:-1,lineHeight:1.15}} className="hero-title">Your Complete<br/><span style={{color:"#fbbf24"}}>Study Companion</span></h1>
//           <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,margin:"0 auto 24px",maxWidth:480,fontWeight:600,lineHeight:1.6}}>Study materials, mock tests, crash courses, career guidance & more — all in one place for every aspiring student</p>
//           <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}} className="hero-btns">
//             <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"white",border:"none",borderRadius:12,padding:"13px 32px",fontSize:15,fontWeight:900,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 28px rgba(245,158,11,0.5)"}}>🎓 Start Learning</button>
//             <button onClick={()=>setScreen("admin")} style={{background:"rgba(255,255,255,0.12)",color:"white",border:"1.5px solid rgba(255,255,255,0.3)",borderRadius:12,padding:"13px 32px",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",backdropFilter:"blur(8px)"}}>⚙️ Admin Panel</button>
//           </div>
//           <div style={{marginTop:24,display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap"}}>
//             {[["42K+","Active Students"],["8","Services"],["15+","Study Materials"],["98%","Success Rate"]].map(([val,lbl])=>(
//               <div key={lbl} style={{textAlign:"center"}}>
//                 <div style={{fontSize:20,fontWeight:900,color:"#fbbf24"}}>{val}</div>
//                 <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:600}}>{lbl}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Main Grid Section ── */}
//       <div style={{maxWidth:1200,margin:"0 auto",padding:"28px 24px"}} className="home-main">

//         {/* Sort Bar */}
//         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22,flexWrap:"wrap",gap:10}}>
//           <div>
//             <h2 style={{margin:"0 0 2px",fontSize:20,fontWeight:900,color:"#0f172a"}}>All Services</h2>
//             <p style={{margin:0,fontSize:12,color:"#94a3b8",fontWeight:600}}>{sortedServices.length} services available</p>
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#94a3b8",fontWeight:700}}>
//             <span style={{fontWeight:700}}>Sort By:</span>
//             <button className="sort-btn" onClick={()=>setSortBy("name")} style={{color:sortBy==="name"?"#1e40af":"#64748b",textDecoration:sortBy==="name"?"underline":"none"}}>Name</button>
//             <span style={{color:"#e2e8f0"}}>|</span>
//             <button className="sort-btn" onClick={()=>setSortBy(sortBy==="popularity"?"default":"popularity")} style={{color:sortBy==="popularity"?"#1e40af":"#64748b",textDecoration:sortBy==="popularity"?"underline":"none"}}>Popularity</button>
//           </div>
//         </div>

//         {/* Card Grid — matches the screenshot's 3-column illustrated layout */}
//         <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="home-grid">
//           {sortedServices.map((s,i)=>{
//             const isHov=hoveredCard===i;
//             return(
//               <div
//                 key={s.id}
//                 className="svc-home-card"
//                 onMouseEnter={()=>setHoveredCard(i)}
//                 onMouseLeave={()=>setHoveredCard(null)}
//                 onClick={()=>{ if(s.id==="elibrary"||s.id==="eprep") setScreen("student"); }}
//                 style={{
//                   background:"white",
//                   borderRadius:16,
//                   border:`2px solid ${isHov?"#bfdbfe":"#f1f5f9"}`,
//                   overflow:"hidden",
//                   boxShadow:isHov?"0 20px 50px rgba(15,23,42,0.15)":"0 2px 12px rgba(15,23,42,0.06)",
//                   animation:`cardIn 0.45s ease ${i*0.07}s both`,
//                   position:"relative",
//                 }}
//               >
//                 {/* Illustration Area */}
//                 <div style={{
//                   height:150,
//                   position:"relative",
//                   overflow:"hidden",
//                   background:s.bg,
//                 }}>
//                   {SERVICE_ILLUSTRATIONS[s.id] || (
//                     <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:60}}>{s.icon}</div>
//                   )}
//                   {/* Shimmer on hover */}
//                   {isHov&&<div style={{position:"absolute",inset:0,background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.35) 50%,transparent 60%)",animation:"shimmer 1s ease",pointerEvents:"none"}}/>}
//                   {/* Popularity badge */}
//                   {sortBy==="popularity"&&i<3&&(
//                     <div style={{position:"absolute",top:10,left:10,background:i===0?"#f59e0b":i===1?"#94a3b8":"#cd7c2f",color:"white",borderRadius:8,padding:"3px 10px",fontSize:11,fontWeight:800,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"}}>
//                       {i===0?"🥇":i===1?"🥈":"🥉"} #{i+1}
//                     </div>
//                   )}
//                   <div style={{position:"absolute",top:10,right:10,background:"rgba(255,255,255,0.9)",borderRadius:8,padding:"3px 10px",fontSize:11,fontWeight:800,color:s.trendUp?"#166534":"#991b1b",border:`1px solid ${s.trendUp?"#86efac":"#fca5a5"}`}}>
//                     {s.trendUp?"↑":"↓"} {s.trend}
//                   </div>
//                 </div>

//                 {/* Label */}
//                 <div style={{padding:"14px 18px 16px",background:"white"}}>
//                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}>
//                     <h3 className="card-label" style={{margin:0,fontSize:15,fontWeight:900,color:"#0f172a",transition:"color 0.2s"}}>{s.name}</h3>
//                     <span style={{fontSize:18}}>{s.icon}</span>
//                   </div>
//                   <p style={{margin:"0 0 10px",fontSize:12,color:"#64748b",fontWeight:600,lineHeight:1.4}}>{s.description}</p>
//                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//                     <div style={{display:"flex",alignItems:"center",gap:5}}>
//                       <div style={{width:22,height:22,borderRadius:"50%",background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>{s.icon}</div>
//                       <span style={{fontSize:12,fontWeight:800,color:s.color}}>{(s.users/1000).toFixed(1)}K users</span>
//                     </div>
//                     <div style={{fontSize:11,color:"#94a3b8",fontWeight:600,display:"flex",alignItems:"center",gap:4}}>
//                       <span style={{width:6,height:6,borderRadius:"50%",background:"#10b981",display:"inline-block"}}/>
//                       {s.topCollege.length>16?s.topCollege.slice(0,16)+"…":s.topCollege}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom action strip */}
//                 <div style={{background:isHov?"#1e40af":"#f8fafc",padding:"10px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.25s",borderTop:"1px solid #f1f5f9"}}>
//                   <span style={{fontSize:12,fontWeight:700,color:isHov?"rgba(255,255,255,0.85)":"#64748b"}}>Explore {s.name}</span>
//                   <span style={{fontSize:18,color:isHov?"#fbbf24":"#94a3b8",transition:"transform 0.2s,color 0.2s",display:"inline-block",transform:isHov?"translateX(4px)":"translateX(0)"}}>→</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA strip */}
//         <div style={{marginTop:40,background:"linear-gradient(135deg,#1e3a8a,#1e40af)",borderRadius:20,padding:"30px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,boxShadow:"0 12px 40px rgba(30,58,138,0.3)"}}>
//           <div>
//             <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>Ready to start?</div>
//             <div style={{fontSize:20,fontWeight:900,color:"white",marginBottom:4}}>Join 42,000+ students on OYS</div>
//             <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",fontWeight:600}}>Access all materials, tests & career tools in one place</div>
//           </div>
//           <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
//             <button onClick={()=>setScreen("student")} style={{background:"linear-gradient(135deg,#f59e0b,#fbbf24)",color:"white",border:"none",borderRadius:12,padding:"13px 28px",fontSize:14,fontWeight:900,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 6px 20px rgba(245,158,11,0.4)"}}>🎓 Student Login</button>
//             <button onClick={()=>setScreen("admin")} style={{background:"rgba(255,255,255,0.12)",color:"white",border:"1.5px solid rgba(255,255,255,0.25)",borderRadius:12,padding:"13px 28px",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>⚙️ Admin Panel</button>
//           </div>
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

// ─── B.TECH DEPARTMENTS ───────────────────────────────────────────────────────
const BTECH_DEPARTMENTS = [
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

const BTECH_MATERIALS = {
  cse: [
    { id:101, title:"Data Structures & Algorithms", emoji:"🌲", topics:15, pages:480, downloads:2100, type:"free", bookmarked:false, progress:30, uploadType:null, fileLink:"", tags:["dsa","algorithms","trees"] },
    { id:102, title:"Operating Systems", emoji:"🖥️", topics:12, pages:380, downloads:1800, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["os","kernel","processes"] },
    { id:103, title:"Database Management Systems", emoji:"🗄️", topics:10, pages:320, downloads:2400, type:"free", bookmarked:false, progress:60, uploadType:null, fileLink:"", tags:["dbms","sql","normalization"] },
    { id:104, title:"Computer Networks", emoji:"🌐", topics:14, pages:420, downloads:1650, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["networking","tcp","protocols"] },
    { id:105, title:"Software Engineering", emoji:"⚙️", topics:8, pages:280, downloads:1200, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["sdlc","agile","testing"] },
  ],
  it: [
    { id:201, title:"Web Development Fundamentals", emoji:"🌐", topics:12, pages:350, downloads:3100, type:"free", bookmarked:false, progress:85, uploadType:null, fileLink:"", tags:["html","css","javascript"] },
    { id:202, title:"Cloud Computing", emoji:"☁️", topics:10, pages:300, downloads:1900, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["aws","azure","gcp"] },
    { id:203, title:"Cybersecurity Essentials", emoji:"🔐", topics:11, pages:360, downloads:1400, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["security","cryptography","hacking"] },
  ],
  ece: [
    { id:301, title:"Digital Electronics", emoji:"📡", topics:13, pages:400, downloads:1600, type:"free", bookmarked:false, progress:40, uploadType:null, fileLink:"", tags:["logic gates","circuits","flip-flops"] },
    { id:302, title:"Signals & Systems", emoji:"📶", topics:11, pages:350, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["signals","fourier","laplace"] },
    { id:303, title:"VLSI Design", emoji:"🔬", topics:9, pages:290, downloads:850, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["vlsi","cmos","layout"] },
  ],
  eee: [
    { id:401, title:"Power Systems Engineering", emoji:"⚡", topics:14, pages:460, downloads:1300, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["power","transmission","generation"] },
    { id:402, title:"Control Systems", emoji:"🎛️", topics:10, pages:320, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["control","pid","feedback"] },
  ],
  mech: [
    { id:501, title:"Thermodynamics", emoji:"🌡️", topics:12, pages:400, downloads:1500, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["heat","entropy","cycles"] },
    { id:502, title:"Fluid Mechanics", emoji:"💧", topics:11, pages:370, downloads:1200, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["fluid","bernoulli","flow"] },
    { id:503, title:"Machine Design", emoji:"⚙️", topics:9, pages:310, downloads:900, type:"premium", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["design","stress","gears"] },
  ],
  civil: [
    { id:601, title:"Structural Analysis", emoji:"🏗️", topics:13, pages:440, downloads:1400, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["structures","beams","loads"] },
    { id:602, title:"Soil Mechanics", emoji:"🌍", topics:10, pages:330, downloads:1100, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["soil","geotechnical","foundation"] },
  ],
  chem: [
    { id:701, title:"Chemical Reaction Engineering", emoji:"🧪", topics:11, pages:380, downloads:950, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["reactions","kinetics","reactor"] },
  ],
  aero: [
    { id:801, title:"Aerodynamics", emoji:"✈️", topics:12, pages:420, downloads:800, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["lift","drag","airfoil"] },
  ],
  auto: [
    { id:901, title:"Automotive Systems", emoji:"🚗", topics:10, pages:340, downloads:750, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["engine","transmission","brakes"] },
  ],
  bio: [
    { id:1001, title:"Genetic Engineering", emoji:"🧬", topics:11, pages:360, downloads:680, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["dna","genes","cloning"] },
  ],
  agri: [
    { id:1101, title:"Agricultural Science Notes", emoji:"🌾", topics:11, pages:320, downloads:890, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["crops","soil","irrigation"] },
  ],
  mining: [
    { id:1201, title:"Mining Methods & Technology", emoji:"⛏️", topics:9, pages:300, downloads:550, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["open cast","underground","blasting"] },
  ],
  petro: [
    { id:1301, title:"Petroleum Reservoir Engineering", emoji:"🛢️", topics:10, pages:340, downloads:620, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["reservoir","drilling","production"] },
  ],
  marine: [
    { id:1401, title:"Naval Architecture", emoji:"⚓", topics:10, pages:360, downloads:490, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["ships","hull","stability"] },
  ],
  metal: [
    { id:1501, title:"Metallurgy & Material Science", emoji:"🔩", topics:11, pages:380, downloads:670, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["metals","alloys","heat treatment"] },
  ],
  industrial: [
    { id:1601, title:"Industrial Engineering & Management", emoji:"🏭", topics:10, pages:320, downloads:780, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["lean","six sigma","operations"] },
  ],
  prod: [
    { id:1701, title:"Production Planning & Control", emoji:"🔧", topics:9, pages:290, downloads:650, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["production","scheduling","quality"] },
  ],
  textile: [
    { id:1801, title:"Textile Processing Technology", emoji:"🧵", topics:10, pages:310, downloads:480, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["weaving","dyeing","finishing"] },
  ],
  food: [
    { id:1901, title:"Food Processing & Preservation", emoji:"🍎", topics:10, pages:300, downloads:580, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["processing","preservation","quality"] },
  ],
  env: [
    { id:2001, title:"Environmental Engineering", emoji:"🌿", topics:11, pages:350, downloads:720, type:"free", bookmarked:false, progress:0, uploadType:null, fileLink:"", tags:["pollution","water","waste"] },
  ],
};

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATEGORIES = {
  private:{ label:"Private Sector",icon:"🏢",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.25)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)" },
  government:{ label:"Government Exams",icon:"🏛️",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.25)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)" },
  higher:{ label:"Higher Education",icon:"🎓",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.25)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)" },
  btech:{ label:"B.Tech Courses",icon:"🔬",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.25)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)" },
};

// ─── GOVERNMENT SECTOR STRUCTURE ─────────────────────────────────────────────
const GOVT_STRUCTURE = {
  central: {
    label:"Central Government",icon:"🏛️",color:"#0369a1",
    exams:["UPSC IAS","SSC CGL","SSC CHSL","IBPS PO","IBPS Clerk","RBI Grade B","Railways RRB","Defence NDA","NDA CDS","ISRO","DRDO","Staff Selection"]
  },
  state: {
    label:"State Government",icon:"🗺️",color:"#059669",
    states:{
      ap:{ label:"Andhra Pradesh",icon:"🌊",color:"#dc2626",exams:["APPSC Group 1","APPSC Group 2","APPSC Group 3","AP Panchayat Secretary","AP Police SI","AP TET","APECET","APPGECET","AP ICET","AP EAMCET"] },
      telangana:{ label:"Telangana",icon:"🌺",color:"#7c3aed",exams:["TSPSC Group 1","TSPSC Group 2","TSPSC Group 3","TS Panchayat Secretary","Telangana Police SI","TS TET","TSICET","TSEAMCET","TS PGECET","TSGENCO"] },
      other:{ label:"Other States",icon:"🗾",color:"#0891b2",exams:["Karnataka PSC","Tamil Nadu PSC","Maharashtra PSC","Kerala PSC","Gujarat PSC","Rajasthan PSC","UP PSC","Bihar PSC","MP PSC","West Bengal PSC"] }
    }
  }
};

const CATEGORY_SUBS = {
  private:["IT","Banking","Healthcare","Marketing","Finance","Consulting"],
  government:["UPSC","SSC","Banking (Govt)","Railways","Defence","State PSC"],
  higher:["GATE","CAT/MBA","GRE/GMAT","Study Abroad","Research","PhD"],
  btech: BTECH_DEPARTMENTS.map(d => d.short),
};

const HIGHER_INDIA_ABROAD = {
  "GATE":"India","CAT/MBA":"India","GRE/GMAT":"Abroad","Study Abroad":"Abroad","Research":"Both","PhD":"Both",
};

const PIE_COLORS = ["#3b82f6","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#f97316","#6366f1"];

const SERVICES = [
  { id:"resume",name:"Resume Maker",icon:"📄",color:"#6366f1",bg:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:4820,topCollege:"IIT Bombay",description:"AI-powered resume builder with ATS optimization",stats:{created:4820,downloaded:3940,templates:24,avgScore:87},trend:"+18%",trendUp:true },
  { id:"alerts",name:"Alerts",icon:"🔔",color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.2)",gradient:"linear-gradient(135deg,#fef3c7,#fde68a)",users:7210,topCollege:"NIT Warangal",description:"Real-time job & exam notifications system",stats:{sent:52400,read:41200,active:7210,categories:12},trend:"+32%",trendUp:true },
  { id:"calendar",name:"E-Calendar",icon:"📅",color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.2)",gradient:"linear-gradient(135deg,#d1fae5,#a7f3d0)",users:3650,topCollege:"BITS Pilani",description:"Exam schedules, deadlines & study planner",stats:{events:1840,reminders:9300,synced:3650,upcoming:124},trend:"+9%",trendUp:true },
  { id:"crash",name:"Crash Course",icon:"⚡",color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",gradient:"linear-gradient(135deg,#fee2e2,#fecaca)",users:5930,topCollege:"VIT Vellore",description:"Intensive last-minute exam preparation modules",stats:{courses:48,enrolled:5930,completed:3210,avgHours:6.4},trend:"+41%",trendUp:true },
  { id:"elibrary",name:"E-Library",icon:"📚",color:"#3b82f6",bg:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.2)",gradient:"linear-gradient(135deg,#dbeafe,#bfdbfe)",users:6840,topCollege:"JNTU Hyderabad",description:"Digital library with curated study materials",stats:{materials:15,downloads:19870,requests:24,pending:2,approved:20,rejected:2,topCollege:"JNTU Hyderabad",collegeStats:[{name:"JNTU Hyderabad",downloads:4200,users:1240},{name:"Osmania University",downloads:3100,users:980},{name:"IIT Bombay",downloads:2800,users:760},{name:"NIT Warangal",downloads:2400,users:640},{name:"VIT Vellore",downloads:1900,users:520}]},trend:"+27%",trendUp:true },
  { id:"eprep",name:"E-Preparation",icon:"🎯",color:"#8b5cf6",bg:"rgba(139,92,246,0.08)",border:"rgba(139,92,246,0.2)",gradient:"linear-gradient(135deg,#ede9fe,#ddd6fe)",users:8120,topCollege:"Osmania University",description:"Mock tests, quizzes & performance analytics",stats:{tests:980,attempts:41200,avgScore:72,toppers:340},trend:"+55%",trendUp:true },
  { id:"counseling",name:"Career Counseling",icon:"🧭",color:"#ec4899",bg:"rgba(236,72,153,0.08)",border:"rgba(236,72,153,0.2)",gradient:"linear-gradient(135deg,#fce7f3,#fbcfe8)",users:2340,topCollege:"Hyderabad Central University",description:"1-on-1 mentorship & career guidance sessions",stats:{sessions:2340,mentors:48,avgRating:4.8,placed:1820},trend:"+14%",trendUp:true },
  { id:"c3arena",name:"C3 Arena",icon:"🏆",color:"#f97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.2)",gradient:"linear-gradient(135deg,#ffedd5,#fed7aa)",users:3980,topCollege:"IIT Hyderabad",description:"Competitive coding, hackathons & leaderboards",stats:{contests:84,participants:3980,problems:1240,winners:252},trend:"+63%",trendUp:true },
];

// CSV Fields for bulk import
const BULK_CSV_FIELDS = [
  { name:"title", required:true, desc:"Material title" },
  { name:"description", required:false, desc:"Short description" },
  { name:"category", required:true, desc:"private / government / higher / btech" },
  { name:"sub_category", required:true, desc:"Sub-category (e.g. IT, CSE, UPSC)" },
  { name:"dept_id", required:false, desc:"B.Tech dept id: cse,it,ece,eee,mech,civil..." },
  { name:"govt_type", required:false, desc:"central / state" },
  { name:"state_id", required:false, desc:"ap / telangana / other" },
  { name:"material_type", required:false, desc:"PDF / Link / Video" },
  { name:"thumbnail_icon", required:false, desc:"Emoji icon" },
  { name:"main_file_url", required:false, desc:"URL to material" },
  { name:"total_pages", required:false, desc:"Number of pages" },
  { name:"total_topics", required:false, desc:"Number of topics" },
  { name:"type", required:true, desc:"free / premium" },
  { name:"download_allowed", required:false, desc:"true / false" },
  { name:"tags", required:false, desc:"Comma-separated tags" },
  { name:"topic_1_title", required:false, desc:"First topic title" },
  { name:"topic_1_pages", required:false, desc:"Pages for topic 1" },
  { name:"topic_2_title", required:false, desc:"Second topic title" },
  { name:"topic_2_pages", required:false, desc:"Pages for topic 2" },
  { name:"topic_3_title", required:false, desc:"Third topic title" },
  { name:"topic_3_pages", required:false, desc:"Pages for topic 3" },
  { name:"topic_4_title", required:false, desc:"Fourth topic title" },
  { name:"topic_4_pages", required:false, desc:"Pages for topic 4" },
  { name:"topic_5_title", required:false, desc:"Fifth topic title" },
  { name:"topic_5_pages", required:false, desc:"Pages for topic 5" },
  { name:"indiaOrAbroad", required:false, desc:"India / Abroad / Both (for higher)" },
  { name:"status", required:false, desc:"Published / Draft" },
];

const EPREP_LINKS = {
  101:"https://www.geeksforgeeks.org/data-structure-gq/",
  102:"https://www.javatpoint.com/os-tutorial",
  103:"https://www.javatpoint.com/dbms-tutorial",
  104:"https://www.javatpoint.com/computer-network-tutorial",
  201:"https://www.w3schools.com/",
  1:"https://www.javatpoint.com/java-quiz",
  2:"https://www.bankersadda.com/quiz",
  4:"https://www.drishtiias.com/quiz",
  5:"https://www.sscadda.com/quiz",
};

const CRASH_COURSES = {
  101:{ title:"DSA Crash Course", url:"https://www.youtube.com/results?search_query=dsa+crash+course", color:"#6366f1" },
  201:{ title:"Web Dev Crash", url:"https://www.youtube.com/results?search_query=web+development+crash+course", color:"#3b82f6" },
  1:{ title:"Java Crash Course", url:"https://www.youtube.com/results?search_query=java+crash+course", color:"#ef4444" },
  4:{ title:"UPSC History Crash", url:"https://www.youtube.com/results?search_query=upsc+history+crash+course", color:"#6366f1" },
};

// Initial data
const ALL_MATERIALS = [
  { id:1, title:"Java Programming", category:"private", sub:"IT", type:"free", emoji:"☕", topics:12, progress:70, pages:340, downloads:1240, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["java","oop","backend"], customTopics:null },
  { id:2, title:"Banking Fundamentals", category:"private", sub:"Banking", type:"free", emoji:"🏦", topics:8, progress:50, pages:210, downloads:980, bookmarked:true, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["banking","finance"], customTopics:null },
  { id:3, title:"Data Structures & Algo", category:"private", sub:"IT", type:"premium", emoji:"🌲", topics:15, progress:30, pages:480, downloads:2100, bookmarked:false, uploadType:"pdf", fileLink:"https://example.com/dsa.pdf", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["dsa","algorithms"], customTopics:null },
  { id:4, title:"UPSC History Notes", category:"government", sub:"UPSC", type:"free", emoji:"📜", topics:20, progress:60, pages:600, downloads:3400, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["upsc","history"], customTopics:null },
  { id:5, title:"SSC Mathematics", category:"government", sub:"SSC", type:"free", emoji:"📐", topics:10, progress:0, pages:280, downloads:1800, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["ssc","math"], customTopics:null },
  { id:6, title:"IBPS PO Guide", category:"government", sub:"Banking (Govt)", type:"premium", emoji:"🏧", topics:14, progress:0, pages:390, downloads:2200, bookmarked:true, uploadType:"link", fileLink:"https://ibps.in/study-material", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["ibps","banking"], customTopics:null },
  { id:7, title:"CAT Verbal Ability", category:"higher", sub:"CAT/MBA", type:"premium", emoji:"📝", topics:9, progress:20, pages:240, downloads:760, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"India", govtType:null, stateId:null, deptId:null, tags:["cat","verbal"], customTopics:null },
  { id:8, title:"GRE Vocabulary", category:"higher", sub:"GRE/GMAT", type:"free", emoji:"🔤", topics:6, progress:40, pages:180, downloads:540, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Abroad", govtType:null, stateId:null, deptId:null, tags:["gre","vocabulary"], customTopics:null },
  { id:9, title:"Agricultural Science", category:"government", sub:"State PSC", type:"free", emoji:"🌾", topics:11, progress:0, pages:320, downloads:890, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["agriculture","psc"], customTopics:null },
  { id:10, title:"Python for Beginners", category:"private", sub:"IT", type:"free", emoji:"🐍", topics:10, progress:85, pages:290, downloads:3100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["python","programming"], customTopics:null },
  { id:11, title:"APPSC Group 1 Guide", category:"government", sub:"State PSC", type:"free", emoji:"🌊", topics:18, progress:0, pages:550, downloads:1650, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["appsc","group1","ap"], customTopics:null },
  { id:12, title:"TSPSC Group 2 Complete", category:"government", sub:"State PSC", type:"premium", emoji:"🌺", topics:16, progress:0, pages:480, downloads:1900, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"telangana", deptId:null, tags:["tspsc","group2","telangana"], customTopics:null },
  { id:13, title:"Digital Marketing", category:"private", sub:"Marketing", type:"free", emoji:"📊", topics:7, progress:55, pages:190, downloads:670, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:["marketing","digital"], customTopics:null },
  { id:14, title:"Research Methodology", category:"higher", sub:"Research", type:"free", emoji:"🔬", topics:5, progress:10, pages:160, downloads:310, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"Both", govtType:null, stateId:null, deptId:null, tags:["research","methodology"], customTopics:null },
  { id:15, title:"Defence NDA Prep", category:"government", sub:"Defence", type:"premium", emoji:"⚔️", topics:16, progress:0, pages:500, downloads:1200, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"central", stateId:null, deptId:null, tags:["nda","defence"], customTopics:null },
  { id:16, title:"TS Police SI Exam Guide", category:"government", sub:"State PSC", type:"free", emoji:"🌺", topics:12, progress:0, pages:360, downloads:1100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"telangana", deptId:null, tags:["tspsc","police","telangana"], customTopics:null },
  { id:17, title:"AP EAMCET Preparation", category:"government", sub:"State PSC", type:"free", emoji:"🌊", topics:14, progress:0, pages:420, downloads:2100, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:"state", stateId:"ap", deptId:null, tags:["eamcet","ap","engineering"], customTopics:null },
  { id:18, title:"MBA Case Studies", category:"higher", sub:"CAT/MBA", type:"premium", emoji:"💼", topics:8, progress:0, pages:200, downloads:430, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:"India", govtType:null, stateId:null, deptId:null, tags:["mba","case studies"], customTopics:null },
];

const JAVA_TOPICS = [
  { id:1, title:"Introduction to Java", done:true, pages:28 },
  { id:2, title:"OOP Concepts", done:true, pages:45 },
  { id:3, title:"Classes & Objects", done:true, pages:35 },
  { id:4, title:"Inheritance & Polymorphism", done:false, pages:52 },
  { id:5, title:"Exception Handling", done:false, pages:30 },
  { id:6, title:"Collections Framework", done:false, pages:60 },
  { id:7, title:"Multithreading", done:false, pages:40 },
  { id:8, title:"File I/O", done:false, pages:25 },
  { id:9, title:"JDBC & Databases", done:false, pages:38 },
  { id:10, title:"Spring Boot Basics", done:false, pages:55 },
  { id:11, title:"REST APIs with Java", done:false, pages:48 },
  { id:12, title:"Java 17+ Features", done:false, pages:32 },
];

const INIT_STUDENTS = [
  { id:"s1", name:"Arjun Sharma", email:"arjun@email.com", joined:"2024-01-15", completed:3, avatar:"AS", college:"JNTU Hyderabad" },
  { id:"s2", name:"Priya Reddy", email:"priya@email.com", joined:"2024-02-20", completed:1, avatar:"PR", college:"Osmania University" },
  { id:"s3", name:"Rahul Gupta", email:"rahul@email.com", joined:"2024-03-10", completed:0, avatar:"RG", college:"IIT Bombay" },
];

let _globalMaterials = ALL_MATERIALS.map(m=>({...m}));
let _globalRequests = [
  { id:"r1", studentId:"s1", studentName:"Arjun Sharma", title:"AI & Machine Learning 2025", category:"private", sub:"IT", reason:"Need latest trending AI material for interviews", status:"pending", date:"2024-12-01" },
  { id:"r2", studentId:"s2", studentName:"Priya Reddy", title:"UPSC Ethics GS4 Deep Dive", category:"government", sub:"UPSC", reason:"Comprehensive ethics module not available anywhere", status:"pending", date:"2024-12-05" },
];
let _globalStudents = INIT_STUDENTS.map(s=>({...s}));

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
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes toastIn{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}
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
::-webkit-scrollbar{width:6px;height:6px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px;}
::-webkit-scrollbar-thumb:hover{background:#94a3b8;}
@media(max-width:768px){
  .mobile-stack{flex-direction:column!important;}
  .mobile-full{width:100%!important;}
  .mobile-hide{display:none!important;}
  .mobile-pad{padding:16px!important;}
  .mobile-grid-1{grid-template-columns:1fr!important;}
  .mobile-grid-2{grid-template-columns:1fr 1fr!important;}
  .mobile-text-sm{font-size:13px!important;}
  .mobile-text-xs{font-size:11px!important;}
}
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
  const cfg = {
    success:{ bg:"#f0fdf4", border:"#86efac", text:"#166534", icon:"✅" },
    warn:{ bg:"#fffbeb", border:"#fcd34d", text:"#92400e", icon:"⚠️" },
    error:{ bg:"#fef2f2", border:"#fca5a5", text:"#991b1b", icon:"❌" },
    info:{ bg:"#eff6ff", border:"#93c5fd", text:"#1e40af", icon:"ℹ️" },
  };
  return (
    <div style={{ position:"fixed", top:20, right:20, zIndex:99999, display:"flex", flexDirection:"column", gap:10, maxWidth:360, width:"90%", pointerEvents:"none" }}>
      {toasts.map(t => {
        const s = cfg[t.type] || cfg.info;
        return (
          <div key={t.id} style={{ background:s.bg, border:`1.5px solid ${s.border}`, color:s.text, borderRadius:14, padding:"13px 18px", fontSize:13, fontWeight:600, boxShadow:"0 8px 32px rgba(0,0,0,0.12)", animation:"toastIn 0.35s cubic-bezier(.4,0,.2,1)", display:"flex", alignItems:"center", gap:10, pointerEvents:"auto" }}>
            <span style={{ fontSize:16 }}>{s.icon}</span>{t.msg}
          </div>
        );
      })}
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

// ─── MATERIAL THUMBNAIL ───────────────────────────────────────────────────────
function MatThumb({ m, size=80 }) {
  const cat = CATEGORIES[m.category] || CATEGORIES.private;
  return (
    <div style={{ width:size, height:size, borderRadius:12, background:cat.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:size*0.45, flexShrink:0 }}>
      {m.emoji || "📄"}
    </div>
  );
}

// ─── BULK IMPORT MODAL (FULLY WORKING CSV) ────────────────────────────────────
function BulkImportModal({ onClose, onImport, toast }) {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [parsed, setParsed] = useState(null);
  const [importing, setImporting] = useState(false);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState([]);
  const fileRef = useRef(null);

  const downloadSample = () => {
    const headers = BULK_CSV_FIELDS.map(f => f.name).join(",");
    const row1 = [
      "Java Programming Advanced","Advanced Java for placements","private","IT","","","","PDF","☕","https://example.com/java.pdf","340","12","free","true","java,oop","Introduction to Java","28","OOP Concepts","45","Classes & Objects","35","Inheritance","52","Exception Handling","30","","India","Published"
    ].join(",");
    const row2 = [
      "APPSC Group 1 Complete Guide","Complete study material for APPSC Group 1","government","State PSC","","state","ap","","🌊","","550","18","free","true","appsc,group1,ap","History of AP","60","Indian Constitution","45","Economy","50","Science & Tech","40","Current Affairs","35","","","Published"
    ].join(",");
    const row3 = [
      "TSPSC Group 2 Master Guide","Comprehensive TSPSC Group 2 material","government","State PSC","","state","telangana","PDF","🌺","https://example.com/tspsc.pdf","480","16","premium","true","tspsc,group2,telangana","Telangana History","55","Indian Polity","48","Economy","42","Science","38","Current Affairs","35","","","Published"
    ].join(",");
    const row4 = [
      "DSA for CSE Students","Complete DSA notes for Computer Science","btech","CSE","cse","","","","🌲","","480","15","free","true","dsa,algorithms,cse","Arrays & Strings","40","Linked Lists","38","Trees","45","Graphs","50","Dynamic Programming","55","","","Published"
    ].join(",");
    const row5 = [
      "GRE Quantitative Prep","Complete GRE Quant preparation guide","higher","GRE/GMAT","","","","","📊","","280","10","free","true","gre,quantitative","Arithmetic","30","Algebra","35","Geometry","32","Data Analysis","28","Practice Sets","40","Abroad","","Published"
    ].join(",");
    const csv = [headers, row1, row2, row3, row4, row5].join("\n");
    const blob = new Blob([csv], { type:"text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "oys_bulk_import_sample.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const parseCSV = (text) => {
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) return { rows:[], errors:["CSV must have header + at least 1 data row"] };
    
    // Parse header
    const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g,"").toLowerCase().trim());
    const errs = [];
    const rows = [];

    lines.slice(1).forEach((line, lineIdx) => {
      // Handle quoted commas
      const vals = [];
      let cur = "", inQuote = false;
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') { inQuote = !inQuote; }
        else if (line[i] === ',' && !inQuote) { vals.push(cur.trim()); cur = ""; }
        else { cur += line[i]; }
      }
      vals.push(cur.trim());

      const row = {};
      headers.forEach((h, i) => { row[h] = (vals[i] || "").replace(/^"|"$/g,"").trim(); });

      // Validate required fields
      if (!row.title) { errs.push(`Row ${lineIdx+2}: Missing 'title'`); return; }
      if (!row.type || !["free","premium"].includes(row.type.toLowerCase())) {
        errs.push(`Row ${lineIdx+2}: 'type' must be 'free' or 'premium', got: '${row.type}'`);
        return;
      }
      if (!row.category) { errs.push(`Row ${lineIdx+2}: Missing 'category'`); return; }

      rows.push(row);
    });

    return { rows, errors:errs };
  };

  const mapCategory = (cat) => {
    if (!cat) return "private";
    const c = cat.toLowerCase();
    if (c.includes("gov") || c.includes("government")) return "government";
    if (c.includes("high") || c.includes("higher")) return "higher";
    if (c.includes("btech") || c.includes("b.tech") || c.includes("engineering")) return "btech";
    return "private";
  };

  const buildTopicsFromRow = (row) => {
    const topics = [];
    for (let i = 1; i <= 10; i++) {
      const titleKey = `topic_${i}_title`;
      const pagesKey = `topic_${i}_pages`;
      if (row[titleKey] && row[titleKey].trim()) {
        topics.push({
          id: i,
          title: row[titleKey].trim(),
          pages: parseInt(row[pagesKey]) || 20,
          done: false
        });
      }
    }
    return topics.length > 0 ? topics : null;
  };

  const handleFile = (f) => {
    if (!f) return;
    if (!f.name.toLowerCase().endsWith(".csv")) {
      toast("Please upload a .csv file", "warn");
      return;
    }
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => {
      const { rows, errors:errs } = parseCSV(e.target.result);
      setErrors(errs);
      if (rows.length > 0) {
        setParsed(rows);
        setStep(2);
        if (errs.length > 0) toast(`${errs.length} row(s) skipped due to errors`, "warn");
      } else {
        toast("No valid rows found in CSV. Check the format.", "error");
      }
    };
    reader.onerror = () => toast("Failed to read file", "error");
    reader.readAsText(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleImport = () => {
    setImporting(true);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 20 + 8;
      setProgress(Math.min(p, 90));
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      const newMaterials = parsed.map((row, i) => {
        const catKey = mapCategory(row.category);
        const customTopics = buildTopicsFromRow(row);
        const deptId = (row.dept_id || "").toLowerCase().trim() || null;
        const govtType = (row.govt_type || "").toLowerCase().trim() || null;
        const stateId = (row.state_id || "").toLowerCase().trim() || null;

        // Sub-category mapping
        let sub = row.sub_category || "IT";
        if (catKey === "btech" && deptId) {
          const dept = BTECH_DEPARTMENTS.find(d => d.id === deptId);
          if (dept) sub = dept.short;
        }

        return {
          id: Date.now() + i,
          title: row.title || "Untitled",
          description: row.description || "",
          category: catKey,
          sub: sub,
          deptId: catKey === "btech" ? deptId : null,
          govtType: catKey === "government" ? (govtType || "central") : null,
          stateId: (catKey === "government" && govtType === "state") ? stateId : null,
          type: (row.type || "free").toLowerCase().includes("prem") ? "premium" : "free",
          emoji: row.thumbnail_icon || "📄",
          topics: parseInt(row.total_topics) || (customTopics ? customTopics.length : 5),
          progress: 0,
          pages: parseInt(row.total_pages) || 100,
          downloads: 0,
          bookmarked: false,
          uploadType: row.material_type === "PDF" || row.material_type === "pdf" ? "pdf" : (row.main_file_url ? "link" : null),
          fileLink: row.main_file_url || "",
          indiaOrAbroad: (row.indiaorAbroad || row.indiaOrAbroad || row["indiaorAbroad"] || "").trim() || null,
          tags: row.tags ? row.tags.split(",").map(t => t.trim()) : [],
          status: row.status || "Published",
          downloadAllowed: row.download_allowed !== "false",
          customTopics: customTopics,
          studentId: null,
        };
      });

      // Update global state
      _globalMaterials = [..._globalMaterials, ...newMaterials];
      onImport(newMaterials);

      setTimeout(() => {
        setImporting(false);
        onClose();
      }, 500);
    }, 2200);
  };

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9500, backdropFilter:"blur(6px)", padding:16, animation:"fadeIn 0.25s ease" }}>
      <div style={{ background:C.surface, borderRadius:24, maxWidth:700, width:"100%", maxHeight:"95vh", overflow:"auto", boxShadow:C.shadowLg, animation:"cardIn 0.4s cubic-bezier(.4,0,.2,1)" }}>
        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", borderBottom:`1px solid #a7f3d0`, padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", borderRadius:"24px 24px 0 0" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:46, height:46, borderRadius:14, background:"linear-gradient(135deg,#10b981,#059669)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:"0 4px 14px rgba(16,185,129,0.35)" }}>📥</div>
            <div>
              <div style={{ fontSize:10, color:"#065f46", fontWeight:800, letterSpacing:2, textTransform:"uppercase" }}>Admin · E-Library</div>
              <h2 style={{ margin:0, fontSize:17, fontWeight:900, color:"#064e3b" }}>Bulk Import Materials via CSV</h2>
            </div>
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.8)", border:"1px solid #a7f3d0", borderRadius:10, padding:"7px 13px", cursor:"pointer", fontSize:13, color:C.textSec, fontFamily:"inherit", fontWeight:700 }}>✕ Close</button>
        </div>

        <div style={{ padding:"22px 24px" }}>
          {/* Steps */}
          <div style={{ display:"flex", alignItems:"center", gap:0, marginBottom:20 }}>
            {[{ n:1, label:"Upload CSV" }, { n:2, label:"Preview & Import" }].map((s, i) => (
              <div key={s.n} style={{ display:"flex", alignItems:"center", flex:i===0?0:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:step>=s.n?"linear-gradient(135deg,#10b981,#059669)":"#e2e8f0", color:step>=s.n?"#fff":C.textMut, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, transition:"all 0.3s" }}>{step>s.n?"✓":s.n}</div>
                  <span style={{ fontSize:12, fontWeight:700, color:step>=s.n?"#065f46":C.textMut }}>{s.label}</span>
                </div>
                {i===0 && <div style={{ flex:1, height:2, background:step>1?"linear-gradient(90deg,#10b981,#059669)":C.border, margin:"0 12px", borderRadius:2 }}/>}
              </div>
            ))}
          </div>

          {step===1 && (
            <>
              {/* CSV info box */}
              <div style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:14, padding:"16px 18px", marginBottom:18 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap" }}>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12, color:"#1e40af", fontWeight:800, marginBottom:8 }}>📋 Required CSV Columns (required marked with ★):</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:10 }}>
                      {BULK_CSV_FIELDS.map(f => (
                        <span key={f.name} title={f.desc} style={{ background:f.required?"#1e40af":"rgba(59,130,246,0.1)", color:f.required?"#fff":"#1e40af", borderRadius:6, padding:"3px 8px", fontSize:10, fontWeight:700, border:`1px solid ${f.required?"#1e40af":"#93c5fd"}`, cursor:"default" }}>
                          {f.name}{f.required && " ★"}
                        </span>
                      ))}
                    </div>
                    <div style={{ fontSize:11, color:"#1e40af", lineHeight:1.5 }}>
                      <strong>Category values:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>private</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>government</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>higher</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>btech</code><br/>
                      <strong>govt_type:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>central</code> or <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>state</code> → <strong>state_id:</strong> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>ap</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>telangana</code> <code style={{ background:"rgba(30,64,175,0.1)", padding:"1px 5px", borderRadius:3 }}>other</code><br/>
                      <strong>dept_id (btech):</strong> cse, it, ece, eee, mech, civil, chem, aero, auto, bio, agri...
                    </div>
                  </div>
                  <button onClick={downloadSample} style={{ background:"linear-gradient(135deg,#3b82f6,#1d4ed8)", color:"#fff", border:"none", borderRadius:12, padding:"10px 16px", cursor:"pointer", fontWeight:800, fontSize:12, fontFamily:"inherit", boxShadow:"0 4px 14px rgba(59,130,246,0.35)", display:"flex", alignItems:"center", gap:6, flexShrink:0, whiteSpace:"nowrap" }}>
                    ⬇️ Sample CSV
                  </button>
                </div>
              </div>

              {/* Drop Zone */}
              <div
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                style={{ border:`2.5px dashed ${dragging?"#10b981":"#fbbf24"}`, borderRadius:18, padding:"48px 20px", textAlign:"center", cursor:"pointer", background:dragging?"linear-gradient(135deg,#f0fdf4,#d1fae5)":"linear-gradient(135deg,#fffbeb,#fef3c7)", transition:"all 0.3s ease" }}>
                <div style={{ fontSize:48, marginBottom:12, animation:"float 3s ease-in-out infinite" }}>{dragging?"📂":"☁️"}</div>
                <div style={{ fontSize:16, fontWeight:800, color:dragging?"#065f46":"#92400e", marginBottom:6 }}>{dragging?"Release to upload!":"Drop your CSV file here"}</div>
                <div style={{ fontSize:12, color:dragging?"#059669":"#b45309", fontWeight:600, marginBottom:12 }}>Drag & drop or click to browse</div>
                <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.8)", border:`1px solid ${dragging?"#a7f3d0":"#fde68a"}`, borderRadius:8, padding:"6px 14px", fontSize:11, color:C.textMut, fontWeight:700 }}>📎 Only .csv files accepted</div>
                <input ref={fileRef} type="file" accept=".csv" style={{ display:"none" }} onChange={e => handleFile(e.target.files[0])}/>
              </div>
            </>
          )}

          {step===2 && parsed && (
            <>
              {/* Parse Summary */}
              <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:14, padding:"14px 18px", marginBottom:16, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:"#10b981", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:"#fff" }}>✅</div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:14, color:"#065f46" }}>Ready to import {parsed.length} material{parsed.length!==1?"s":""}</div>
                    <div style={{ fontSize:11, color:"#059669", fontWeight:600 }}>From: {file?.name}{errors.length>0?` · ${errors.length} rows skipped`:""}</div>
                  </div>
                </div>
                <button onClick={() => { setStep(1); setFile(null); setParsed(null); setErrors([]); setProgress(0); }} style={{ background:"rgba(255,255,255,0.8)", border:"1px solid #a7f3d0", borderRadius:9, padding:"7px 14px", cursor:"pointer", fontSize:12, fontWeight:700, color:"#065f46", fontFamily:"inherit" }}>🔄 Re-upload</button>
              </div>

              {/* Errors */}
              {errors.length > 0 && (
                <div style={{ background:"#fef2f2", border:"1.5px solid #fca5a5", borderRadius:12, padding:"12px 16px", marginBottom:14 }}>
                  <div style={{ fontWeight:800, fontSize:12, color:"#991b1b", marginBottom:6 }}>⚠️ {errors.length} row(s) skipped:</div>
                  {errors.map((e, i) => <div key={i} style={{ fontSize:11, color:"#ef4444", fontWeight:600 }}>• {e}</div>)}
                </div>
              )}

              {/* Preview table */}
              <div style={{ border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", marginBottom:16, maxHeight:280, overflowY:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                  <thead>
                    <tr style={{ background:"linear-gradient(135deg,#1e3a8a,#1e40af)", position:"sticky", top:0 }}>
                      {["#","Title","Category","Sub/Dept","Type","Pages","Topics","Govt","State","Topics Defined"].map(h => (
                        <th key={h} style={{ padding:"10px 12px", textAlign:"left", color:"rgba(255,255,255,0.9)", fontWeight:700, fontSize:10, textTransform:"uppercase", whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parsed.map((row, i) => {
                      const catKey = mapCategory(row.category);
                      const cat = CATEGORIES[catKey] || CATEGORIES.private;
                      const customTopics = buildTopicsFromRow(row);
                      return (
                        <tr key={i} style={{ borderTop:`1px solid ${C.border}`, background:i%2===0?C.surface:C.elevated }}>
                          <td style={{ padding:"9px 12px", color:C.textMut, fontWeight:700 }}>{i+1}</td>
                          <td style={{ padding:"9px 12px", fontWeight:700, color:C.textPri, maxWidth:140, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{row.thumbnail_icon||"📄"} {row.title||"—"}</td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:cat.bg, color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
                          <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600, fontSize:11 }}>{row.sub_category||row.dept_id||"—"}</td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:(row.type||"").toLowerCase().includes("prem")?"#fffbeb":"#f0fdf4", color:(row.type||"").toLowerCase().includes("prem")?"#92400e":"#166534", borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>{(row.type||"free").toLowerCase().includes("prem")?"✨ Premium":"🆓 Free"}</span></td>
                          <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600 }}>{row.total_pages||"—"}</td>
                          <td style={{ padding:"9px 12px", color:C.textSec, fontWeight:600 }}>{row.total_topics||customTopics?.length||"—"}</td>
                          <td style={{ padding:"9px 12px", fontSize:10, color:C.textSec }}>{row.govt_type||"—"}</td>
                          <td style={{ padding:"9px 12px", fontSize:10, color:C.textSec }}>{row.state_id||"—"}</td>
                          <td style={{ padding:"9px 12px" }}><span style={{ background:customTopics?"#f0fdf4":"#f8fafc", color:customTopics?"#166534":C.textMut, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>{customTopics?`✅ ${customTopics.length}`:"—"}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Progress */}
              {importing && (
                <div style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:14, padding:"16px 18px", marginBottom:14 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                    <div style={{ width:32, height:32, borderRadius:"50%", background:"linear-gradient(135deg,#3b82f6,#6366f1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, animation:"spin 1s linear infinite" }}>⚡</div>
                    <div>
                      <div style={{ fontWeight:800, fontSize:13, color:"#1e40af" }}>Importing {Math.round(progress)}%</div>
                      <div style={{ fontSize:11, color:"#3b82f6" }}>Processing {parsed.length} records with topics...</div>
                    </div>
                  </div>
                  <div style={{ height:8, background:"#dbeafe", borderRadius:8, overflow:"hidden" }}>
                    <div style={{ width:`${progress}%`, height:"100%", background:"linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6)", borderRadius:8, transition:"width 0.3s ease" }}/>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Actions */}
          <div style={{ display:"flex", gap:10, marginTop:4 }}>
            <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 0", cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"inherit" }}>Cancel</button>
            {step===2 && parsed && parsed.length>0 && (
              <button onClick={handleImport} disabled={importing} style={{ flex:2, background:importing?"#94a3b8":"linear-gradient(135deg,#10b981,#059669)", color:"#fff", border:"none", borderRadius:12, padding:"13px 0", cursor:importing?"not-allowed":"pointer", fontWeight:800, fontSize:13, fontFamily:"inherit", boxShadow:importing?"none":"0 4px 18px rgba(16,185,129,0.4)", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                {importing ? <>⏳ Importing...</> : <>📥 Import {parsed.length} Material{parsed.length!==1?"s":""}</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for bulk import preview
function buildTopicsFromRow(row) {
  const topics = [];
  for (let i = 1; i <= 10; i++) {
    const titleKey = `topic_${i}_title`;
    const pagesKey = `topic_${i}_pages`;
    if (row[titleKey] && row[titleKey].trim()) {
      topics.push({ id:i, title:row[titleKey].trim(), pages:parseInt(row[pagesKey])||20, done:false });
    }
  }
  return topics.length > 0 ? topics : null;
}

// ─── B.TECH DROPDOWN SELECTOR ─────────────────────────────────────────────────
function BTechDropdown({ activeDept, onSelect, materials }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = BTECH_DEPARTMENTS.find(d => d.id === activeDept);
  const getMatsCount = (deptId) => materials.filter(m => m.category === "btech" && m.deptId === deptId).length
    + (BTECH_MATERIALS[deptId] ? BTECH_MATERIALS[deptId].length : 0);

  return (
    <div ref={ref} style={{ position:"relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display:"flex", alignItems:"center", gap:8, background:selected?"linear-gradient(135deg,#fce7f3,#fbcfe8)":C.surface, border:`1.5px solid ${selected?"#ec4899":C.border}`, borderRadius:12, padding:"10px 16px", cursor:"pointer", fontWeight:700, fontSize:13, color:selected?"#be185d":C.textSec, fontFamily:"inherit", transition:"all 0.2s", whiteSpace:"nowrap", boxShadow:selected?"0 4px 14px rgba(236,72,153,0.2)":C.shadow }}>
        <span style={{ fontSize:16 }}>{selected ? selected.icon : "🔬"}</span>
        <span>{selected ? selected.short : "B.Tech Dept"}</span>
        <span style={{ fontSize:10, marginLeft:2, transform:open?"rotate(180deg)":"", transition:"transform 0.2s" }}>▼</span>
      </button>

      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 8px)", left:0, background:C.surface, border:`1.5px solid ${C.border}`, borderRadius:16, boxShadow:C.shadowLg, zIndex:5000, minWidth:300, maxHeight:400, overflowY:"auto", animation:"cardIn 0.2s ease", padding:"8px 0" }}>
          <div style={{ padding:"8px 14px 6px", fontSize:10, color:C.textMut, fontWeight:800, textTransform:"uppercase", letterSpacing:1 }}>Select Department</div>
          {activeDept && (
            <div onClick={() => { onSelect(null); setOpen(false); }} className="dept-option" style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", cursor:"pointer", background:"#fef2f2", borderBottom:`1px solid ${C.border}`, marginBottom:4 }}>
              <span style={{ fontSize:14 }}>✕</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#ef4444" }}>Clear Selection</span>
            </div>
          )}
          {BTECH_DEPARTMENTS.map(dept => {
            const count = getMatsCount(dept.id);
            const isActive = activeDept === dept.id;
            return (
              <div key={dept.id} onClick={() => { onSelect(dept.id); setOpen(false); }} className="dept-option"
                style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 14px", cursor:"pointer", background:isActive?dept.bg:"transparent" }}>
                <div style={{ width:32, height:32, borderRadius:8, background:isActive?dept.bg:"rgba(0,0,0,0.04)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, border:`1px solid ${isActive?dept.border:"transparent"}`, flexShrink:0 }}>{dept.icon}</div>
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

// ─── GOVERNMENT SECTOR FILTER ─────────────────────────────────────────────────
function GovtSectorFilter({ govtFilter, stateFilter, onGovtChange, onStateChange }) {
  return (
    <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:16, padding:"16px 20px", marginBottom:18, animation:"slideDown 0.3s ease" }}>
      <div style={{ fontSize:11, color:"#065f46", fontWeight:800, textTransform:"uppercase", letterSpacing:1, marginBottom:14 }}>🏛️ Government Sector Filter</div>
      
      {/* Central vs State */}
      <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
        {[{ v:"all", l:"🌐 All", icon:"🌐" }, { v:"central", l:"🏛️ Central Govt", icon:"🏛️" }, { v:"state", l:"🗺️ State Govt", icon:"🗺️" }].map(item => (
          <button key={item.v} onClick={() => { onGovtChange(item.v); if(item.v!=="state") onStateChange("all"); }}
            style={{ padding:"8px 16px", borderRadius:10, border:`1.5px solid ${govtFilter===item.v?"#059669":"#a7f3d0"}`, background:govtFilter===item.v?"#059669":"rgba(255,255,255,0.7)", color:govtFilter===item.v?"#fff":"#065f46", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>
            {item.l}
          </button>
        ))}
      </div>

      {/* State sub-filter */}
      {govtFilter === "state" && (
        <div style={{ animation:"slideDown 0.25s ease" }}>
          <div style={{ fontSize:11, color:"#065f46", fontWeight:700, marginBottom:10 }}>Select State:</div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <button onClick={() => onStateChange("all")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="all"?"#7c3aed":"#c4b5fd"}`, background:stateFilter==="all"?"#7c3aed":"rgba(255,255,255,0.8)", color:stateFilter==="all"?"#fff":"#5b21b6", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>🌐 All States</button>
            
            {/* AP */}
            <button onClick={() => onStateChange("ap")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="ap"?"#dc2626":"#fca5a5"}`, background:stateFilter==="ap"?"#dc2626":"rgba(255,255,255,0.8)", color:stateFilter==="ap"?"#fff":"#dc2626", cursor:"pointer", fontSize:12, fontWeight:800, fontFamily:"inherit", transition:"all 0.18s", display:"flex", alignItems:"center", gap:6 }}>
              🌊 Andhra Pradesh
            </button>
            
            {/* Telangana */}
            <button onClick={() => onStateChange("telangana")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="telangana"?"#7c3aed":"#c4b5fd"}`, background:stateFilter==="telangana"?"#7c3aed":"rgba(255,255,255,0.8)", color:stateFilter==="telangana"?"#fff":"#7c3aed", cursor:"pointer", fontSize:12, fontWeight:800, fontFamily:"inherit", transition:"all 0.18s", display:"flex", alignItems:"center", gap:6 }}>
              🌺 Telangana
            </button>
            
            {/* Other */}
            <button onClick={() => onStateChange("other")} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${stateFilter==="other"?"#0891b2":"#7dd3fc"}`, background:stateFilter==="other"?"#0891b2":"rgba(255,255,255,0.8)", color:stateFilter==="other"?"#fff":"#0891b2", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.18s" }}>
              🗾 Other States
            </button>
          </div>

          {/* State Info Panel */}
          {stateFilter !== "all" && stateFilter && (
            <div style={{ marginTop:12, background:"rgba(255,255,255,0.7)", border:"1.5px solid rgba(255,255,255,0.9)", borderRadius:12, padding:"12px 16px", backdropFilter:"blur(8px)" }}>
              <div style={{ fontSize:11, fontWeight:800, color:"#065f46", marginBottom:8 }}>
                {stateFilter==="ap"?"🌊 Andhra Pradesh Exams:":stateFilter==="telangana"?"🌺 Telangana Exams:":"🗾 Other State Exams:"}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {GOVT_STRUCTURE.state.states[stateFilter]?.exams.map(exam => (
                  <span key={exam} style={{ background:stateFilter==="ap"?"rgba(220,38,38,0.08)":stateFilter==="telangana"?"rgba(124,58,237,0.08)":"rgba(8,145,178,0.08)", color:stateFilter==="ap"?"#dc2626":stateFilter==="telangana"?"#7c3aed":"#0891b2", borderRadius:6, padding:"3px 8px", fontSize:10, fontWeight:700, border:`1px solid ${stateFilter==="ap"?"#fca5a5":stateFilter==="telangana"?"#c4b5fd":"#7dd3fc"}` }}>
                    {exam}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MATERIAL MODAL ───────────────────────────────────────────────────────────
function MaterialModal({ material:m, onClose, toast, onEprepClick }) {
  const [topicsState, setTopicsState] = useState(() => {
    if (m.customTopics && m.customTopics.length > 0) return m.customTopics;
    if (m.id === 1) return JAVA_TOPICS;
    // Generate generic topics
    const count = m.topics || 5;
    return Array.from({ length:count }, (_, i) => ({
      id: i+1, title:`Topic ${i+1}`, pages: Math.floor(m.pages / count) || 20, done:false
    }));
  });
  const [activeTab, setActiveTab] = useState("topics");
  const [notes, setNotes] = useState("");
  const cat = CATEGORIES[m.category] || CATEGORIES.private;
  const done = topicsState.filter(t => t.done).length;
  const pct = topicsState.length > 0 ? Math.round((done / topicsState.length) * 100) : 0;
  const crash = CRASH_COURSES[m.id];
  const allDone = done === topicsState.length && topicsState.length > 0;

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)", animation:"fadeIn 0.2s ease" }} onClick={e => e.target===e.currentTarget && onClose()}>
      <div style={{ background:C.surface, borderRadius:22, maxWidth:680, width:"100%", maxHeight:"94vh", overflow:"auto", boxShadow:C.shadowLg, animation:"cardIn 0.35s ease" }}>
        <div style={{ background:cat.gradient, padding:"24px 24px 20px", borderRadius:"22px 22px 0 0", position:"relative", borderBottom:`1px solid ${cat.border}` }}>
          <button onClick={onClose} style={{ position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.8)", border:`1px solid ${C.border}`, borderRadius:10, padding:"6px 11px", cursor:"pointer", fontSize:14, color:C.textSec }}>✕</button>
          <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
            <MatThumb m={m} size={68}/>
            <div style={{ flex:1, minWidth:200 }}>
              <h2 style={{ margin:"0 0 6px", color:cat.color, fontSize:18, fontWeight:800 }}>{m.title}</h2>
              <div style={{ fontSize:12, color:C.textSec, marginBottom:8 }}>{m.sub} · {m.pages} pages · {topicsState.length} topics</div>
              {m.tags && m.tags.length>0 && (
                <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:10 }}>
                  {m.tags.map(tag => <span key={tag} style={{ background:"rgba(0,0,0,0.06)", color:C.textSec, borderRadius:5, padding:"2px 7px", fontSize:10, fontWeight:700 }}>#{tag}</span>)}
                </div>
              )}
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {onEprepClick && EPREP_LINKS[m.id] ? (
                  <button onClick={() => onEprepClick(m)} style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#1e40af", color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>🎯 E-Prep</button>
                ) : EPREP_LINKS[m.id] ? (
                  <a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#1e40af", color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, textDecoration:"none" }}>🎯 E-Prep</a>
                ) : null}
                {crash && (<a href={crash.url} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:5, background:crash.color, color:"#fff", borderRadius:9, padding:"7px 14px", fontSize:11, fontWeight:700, textDecoration:"none" }}>⚡ Crash</a>)}
              </div>
            </div>
          </div>
          <div style={{ display:"flex", gap:14, marginTop:16, alignItems:"center", flexWrap:"wrap" }}>
            <Ring pct={pct} size={52} stroke={5} color={cat.color}/>
            <div><div style={{ fontWeight:800, fontSize:14, color:cat.color }}>{pct}% complete</div><div style={{ fontSize:12, color:C.textSec }}>{done}/{topicsState.length} topics done</div></div>
            {allDone && (<div style={{ marginLeft:"auto", background:"#f0fdf4", border:"1.5px solid #86efac", borderRadius:10, padding:"8px 14px", color:"#166534", fontSize:12, fontWeight:700, animation:"bounce 1s ease" }}>🎉 Completed!</div>)}
          </div>
        </div>
        <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, padding:"0 20px", overflowX:"auto" }}>
          {[["topics","📚 Topics"],["notes","🗒️ Notes"],["info","ℹ️ Info"]].map(([t, l]) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding:"12px 18px", border:"none", background:"none", fontWeight:700, fontSize:13, cursor:"pointer", color:activeTab===t?cat.color:C.textSec, borderBottom:`2.5px solid ${activeTab===t?cat.color:"transparent"}`, fontFamily:"inherit", whiteSpace:"nowrap" }}>{l}</button>
          ))}
        </div>
        <div style={{ padding:20 }}>
          {activeTab==="topics" && (
            <div>
              {topicsState.length === 0 ? (
                <div style={{ textAlign:"center", padding:"30px 0", color:C.textMut }}>
                  <div style={{ fontSize:36, marginBottom:8 }}>📭</div>
                  <div style={{ fontWeight:600 }}>No topics defined for this material</div>
                </div>
              ) : topicsState.map((t, i) => (
                <div key={t.id} onClick={() => setTopicsState(p => p.map(x => x.id===t.id ? { ...x, done:!x.done } : x))}
                  style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 16px", borderRadius:12, marginBottom:8, cursor:"pointer", background:t.done?cat.gradient:C.elevated, border:`1.5px solid ${t.done?cat.color:C.border}`, transition:"all 0.2s", animation:`cardIn 0.3s ease ${i*0.03}s both` }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:t.done?cat.color:"transparent", border:`2px solid ${t.done?cat.color:C.borderHi}`, display:"flex", alignItems:"center", justifyContent:"center", color:t.done?"#fff":C.textMut, fontWeight:800, fontSize:12, flexShrink:0, transition:"all 0.2s" }}>{t.done?"✓":i+1}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700, fontSize:13 }}>{t.title}</div>
                    <div style={{ fontSize:11, color:C.textMut }}>{t.pages} pages</div>
                  </div>
                  {t.done && <span style={{ fontSize:10, background:cat.color, color:"#fff", borderRadius:6, padding:"3px 9px", fontWeight:700 }}>Done</span>}
                </div>
              ))}
            </div>
          )}
          {activeTab==="notes" && (
            <div>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Write your personal notes here..." style={{ width:"100%", minHeight:160, borderRadius:12, padding:14, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, resize:"vertical", boxSizing:"border-box", outline:"none", fontFamily:"inherit" }}/>
              <button onClick={() => toast("Notes saved!","success")} style={{ marginTop:10, background:cat.color, color:"#fff", border:"none", borderRadius:10, padding:"10px 24px", fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>💾 Save Notes</button>
            </div>
          )}
          {activeTab==="info" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10 }}>
              {[["Category",CATEGORIES[m.category]?.label||m.category],["Type",m.type],["Pages",m.pages],["Topics",topicsState.length],["Downloads",m.downloads.toLocaleString()],["Sub",m.sub],
                ...(m.govtType?[["Govt Type",m.govtType]]:[]),(m.stateId?[["State",m.stateId]]:[]),(m.deptId?[["Dept",m.deptId.toUpperCase()]]:[]),(m.indiaOrAbroad?[["Destination",m.indiaOrAbroad]]:[])
              ].filter(Boolean).map(([k,v]) => (
                <div key={k} style={{ background:C.elevated, border:`1px solid ${C.border}`, borderRadius:10, padding:"12px 14px" }}>
                  <div style={{ fontSize:10, color:C.textMut, fontWeight:800, textTransform:"uppercase", marginBottom:3 }}>{k}</div>
                  <div style={{ fontSize:13, fontWeight:700 }}>{String(v)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </div>
  );
}

// ─── PREMIUM BANNER ────────────────────────────────────────────────────────────
function PremiumBanner({ completedCount, premiumMaterials, onOpen }) {
  const unlocked = completedCount >= 3, needed = 3 - completedCount;
  return (
    <div style={{ background:unlocked?"linear-gradient(135deg,#fef9c3,#fde68a,#fbbf24)":"linear-gradient(135deg,#f1f5f9,#e2e8f0)", border:`2px solid ${unlocked?C.amber:C.border}`, borderRadius:20, padding:"20px 24px", marginBottom:24, position:"relative", overflow:"hidden", animation:"slideDown 0.5s ease" }}>
      {unlocked && <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.4) 50%,transparent 60%)", animation:"shimmer 2.5s infinite", pointerEvents:"none" }}/>}
      <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap", position:"relative" }}>
        <div style={{ fontSize:44, animation:unlocked?"bounce 1s ease infinite":"none", flexShrink:0 }}>{unlocked?"🔓":"🔒"}</div>
        <div style={{ flex:1, minWidth:180 }}>
          <div style={{ fontWeight:800, fontSize:16, color:unlocked?"#92400e":C.textSec, marginBottom:4 }}>{unlocked?"✨ Premium Unlocked!":`${needed} more to unlock Premium`}</div>
          <div style={{ fontSize:12, color:unlocked?"#b45309":C.textMut }}>{unlocked?`${premiumMaterials.length} premium materials now available`:`Complete ${needed} more free material${needed>1?"s":""}`}</div>
          {!unlocked && (<div style={{ marginTop:8, background:"#e2e8f0", borderRadius:10, height:6, overflow:"hidden", maxWidth:260 }}><div style={{ width:`${(completedCount/3)*100}%`, height:"100%", background:"linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius:10, transition:"width 1s ease" }}/></div>)}
        </div>
        {unlocked && (
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {premiumMaterials.slice(0, 3).map(m => (
              <button key={m.id} onClick={() => onOpen(m)} style={{ background:"rgba(255,255,255,0.7)", border:"1.5px solid #f59e0b", borderRadius:10, padding:"8px 12px", cursor:"pointer", textAlign:"center", backdropFilter:"blur(8px)", minWidth:90 }}>
                <div style={{ fontSize:20, marginBottom:4 }}>{m.emoji}</div>
                <div style={{ fontSize:10, fontWeight:700, color:"#92400e", lineHeight:1.2 }}>{m.title.substring(0,15)}...</div>
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
  const [form, setForm] = useState({ title:"", category:"private", sub:"IT", reason:"" });
  const set = (k, v) => setForm(p => ({ ...p, [k]:v }));
  const valid = form.title.trim() && form.reason.trim();
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)" }}>
      <div style={{ background:C.surface, borderRadius:22, maxWidth:500, width:"100%", boxShadow:C.shadowLg, animation:"cardIn 0.3s ease", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ padding:"20px 24px", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <h2 style={{ margin:0, color:C.amber, fontSize:16, fontWeight:800 }}>📨 Request New Material</h2>
          <button onClick={onClose} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:9, padding:"6px 11px", cursor:"pointer" }}>✕</button>
        </div>
        <div style={{ padding:"22px 24px", display:"flex", flexDirection:"column", gap:14 }}>
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Material Title *</label><input value={form.title} onChange={e => set("title",e.target.value)} placeholder="e.g. AI & Machine Learning 2025" style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e => { set("category",e.target.value); set("sub",CATEGORY_SUBS[e.target.value]?.[0]||""); }} style={{ width:"100%", padding:"10px 12px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}</select></div>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Sub-category</label><select value={form.sub} onChange={e => set("sub",e.target.value)} style={{ width:"100%", padding:"10px 12px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{(CATEGORY_SUBS[form.category]||[]).map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </div>
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Why do you need this? *</label><textarea value={form.reason} onChange={e => set("reason",e.target.value)} placeholder="Describe why this material would help..." rows={3} style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, resize:"vertical", boxSizing:"border-box", outline:"none", fontFamily:"inherit" }}/></div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
            <button onClick={() => valid && onSubmit(form)} style={{ flex:2, background:valid?C.amber:"#e2e8f0", color:valid?"#fff":C.textMut, border:"none", borderRadius:10, padding:12, cursor:valid?"pointer":"not-allowed", fontWeight:800, fontFamily:"inherit", fontSize:13 }}>📨 Send Request</button>
          </div>
        </div>
      </div>
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
  const [activeSub, setActiveSub] = useState("all");
  const [activeDept, setActiveDept] = useState(null); // B.Tech dept
  const [govtFilter, setGovtFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [openMaterial, setOpenMat] = useState(null);
  const [showReqModal, setShowReqModal] = useState(false);
  const [activeView, setActiveView] = useState("library");
  const { toasts, add:toast } = useToast();
  const [animIn, setAnimIn] = useState(false);
  const completedCount = 3;

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  
  // Sync with global materials
  useEffect(() => {
    const interval = setInterval(() => {
      setMaterials([..._globalMaterials]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get b.tech materials (combined)
  const getBtechMaterials = useCallback((deptId) => {
    const global = _globalMaterials.filter(m => m.category==="btech" && (!deptId || m.deptId===deptId));
    const built = deptId ? (BTECH_MATERIALS[deptId]||[]).map(m => ({ ...m, category:"btech", sub:BTECH_DEPARTMENTS.find(d=>d.id===deptId)?.short||"BTECH", deptId, govtType:null, stateId:null, indiaOrAbroad:null, uploadType:null, fileLink:"", bookmarked:false, customTopics:null, tags:m.tags||[] })) : [];
    const globalIds = new Set(global.map(m => m.id));
    return [...global, ...built.filter(m => !globalIds.has(m.id))];
  }, [materials]);

  const higherMats = materials.filter(m => m.category==="higher");
  const higherTotal = higherMats.length || 1;
  const indiaPct = Math.round((higherMats.filter(m => m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both").length/higherTotal)*100);
  const abroadPct = Math.round((higherMats.filter(m => m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both").length/higherTotal)*100);

  // Compute filtered list
  const filtered = (() => {
    let list = [];
    if (activeCategory === "btech") {
      list = getBtechMaterials(activeDept);
    } else {
      list = materials.filter(m => m.category !== "btech");
    }

    // Category filter
    if (activeCategory !== "all" && activeCategory !== "btech") {
      list = list.filter(m => m.category===activeCategory);
    }

    // Govt filter
    if (activeCategory === "government" || (activeCategory==="all" && govtFilter!=="all")) {
      if (govtFilter === "central") list = list.filter(m => m.govtType==="central" || (!m.govtType && m.category==="government"));
      if (govtFilter === "state") {
        list = list.filter(m => m.govtType==="state");
        if (stateFilter !== "all") list = list.filter(m => m.stateId===stateFilter);
      }
    }

    // Higher India/Abroad
    if (activeCategory==="higher" && activeSub!=="all") {
      if (activeSub==="India") list = list.filter(m => m.indiaOrAbroad==="India"||m.indiaOrAbroad==="Both");
      else if (activeSub==="Abroad") list = list.filter(m => m.indiaOrAbroad==="Abroad"||m.indiaOrAbroad==="Both");
    }

    // Sub filter (non-higher, non-btech)
    if (activeSub!=="all" && activeCategory!=="higher" && activeCategory!=="btech") {
      list = list.filter(m => m.sub===activeSub);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(m => m.title.toLowerCase().includes(q) || m.sub.toLowerCase().includes(q) || (m.tags||[]).some(t=>t.includes(q)));
    }

    return list;
  })();

  const premiumMats = [...materials, ...getBtechMaterials(null)].filter(m => m.type==="premium");

  const handleOpen = (m) => {
    if (m.type==="premium" && completedCount<3) { toast("Complete 3 free materials to unlock premium!","warn"); return; }
    setOpenMat(m);
  };
  const handleDownload = (m) => {
    if (m.type==="premium" && completedCount<3) { toast("Complete 3 materials to unlock downloads","warn"); return; }
    toast(`"${m.title}" download started!`,"success");
  };
  const toggleBookmark = (id) => {
    setMaterials(p => p.map(m => m.id===id ? { ...m, bookmarked:!m.bookmarked } : m));
    toast("Bookmark updated","info");
  };
  const submitRequest = (data) => {
    const newReq = { id:`r${Date.now()}`, studentId:CURRENT_STUDENT.id, studentName:CURRENT_STUDENT.name, ...data, status:"pending", date:new Date().toISOString().slice(0,10) };
    _globalRequests = [..._globalRequests, newReq];
    setRequests(p => [...p, newReq]);
    setShowReqModal(false);
    toast("📨 Request sent to admin!","success");
  };

  const myPending = requests.filter(r => r.status==="pending").length;
  const getStatusBadge = (s) => s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.textPri, fontFamily:"'Nunito',sans-serif" }}>
      <style>{GLOBAL_CSS}</style>
      <ToastContainer toasts={toasts}/>

      {/* Top Nav */}
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"0 16px", boxShadow:"0 2px 12px rgba(15,23,42,0.06)", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ maxWidth:1300, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:62, gap:10 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <button className="btn-hover" onClick={onBack} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:10, padding:"7px 12px", cursor:"pointer", fontSize:12, fontFamily:"inherit", fontWeight:600, whiteSpace:"nowrap" }}>← Home</button>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:22 }}>📚</span>
              <span style={{ fontWeight:900, fontSize:17, color:C.amber }}>OYS E-Library</span>
            </div>
          </div>
          <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
            <div style={{ background:completedCount>=3?"#f0fdf4":"#fffbeb", border:`1.5px solid ${completedCount>=3?"#86efac":"#fcd34d"}`, borderRadius:20, padding:"5px 12px", color:completedCount>=3?"#166534":"#92400e", fontSize:11, fontWeight:700, animation:completedCount>=3?"pulse 2s infinite":"none", whiteSpace:"nowrap" }}>{completedCount>=3?"🔓 Premium Unlocked":"✅ "+completedCount+"/3"}</div>
            <button className="btn-hover" onClick={() => setShowReqModal(true)} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"8px 14px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 14px rgba(245,158,11,0.35)", whiteSpace:"nowrap" }}>+ Request</button>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"0 16px", overflowX:"auto" }}>
        <div style={{ maxWidth:1300, margin:"0 auto", display:"flex", gap:0 }}>
          {[["library","📖 Library"],["requests","📨 Requests"]].map(([v, l]) => (
            <button key={v} onClick={() => setActiveView(v)} style={{ background:"none", border:"none", padding:"12px 18px", color:activeView===v?C.amber:C.textSec, borderBottom:`2.5px solid ${activeView===v?C.amber:"transparent"}`, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>
              {l} {v==="requests" && myPending>0 && <span style={{ background:C.rose, color:"#fff", borderRadius:10, padding:"1px 6px", fontSize:10, marginLeft:6 }}>{myPending}</span>}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:1300, margin:"0 auto", padding:"20px 16px", opacity:animIn?1:0, transform:animIn?"translateY(0)":"translateY(16px)", transition:"all 0.5s ease" }}>

        {activeView==="requests" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
              <h2 style={{ margin:0, fontSize:18, fontWeight:800 }}>My Material Requests</h2>
              <button className="btn-hover" onClick={() => setShowReqModal(true)} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"9px 18px", fontWeight:700, cursor:"pointer", fontSize:13, fontFamily:"inherit" }}>+ New Request</button>
            </div>
            {requests.length===0 ? (
              <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}><div style={{ fontSize:48, marginBottom:12 }}>📭</div><div style={{ fontSize:15, fontWeight:600, color:C.textSec }}>No requests yet</div></div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {requests.map(r => {
                  const badge = getStatusBadge(r.status);
                  return (
                    <div key={r.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"18px 22px", display:"flex", alignItems:"center", gap:16, boxShadow:C.shadow, flexWrap:"wrap" }}>
                      <div style={{ flex:1, minWidth:200 }}><div style={{ fontWeight:800, fontSize:14, marginBottom:4 }}>{r.title}</div><div style={{ fontSize:12, color:C.textSec, marginBottom:4 }}>{CATEGORIES[r.category]?.label||r.category} → {r.sub}</div><div style={{ fontSize:11, color:C.textMut, fontStyle:"italic" }}>"{r.reason}"</div></div>
                      <div style={{ textAlign:"right" }}><div style={{ display:"inline-block", borderRadius:10, padding:"6px 14px", fontSize:12, fontWeight:700, background:badge.bg, color:badge.color, border:`1.5px solid ${badge.border}` }}>{badge.text}</div><div style={{ fontSize:11, color:C.textMut, marginTop:5 }}>{r.date}</div></div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeView==="library" && (
          <>
            <PremiumBanner completedCount={completedCount} premiumMaterials={premiumMats} onOpen={handleOpen}/>

            {/* Search */}
            <div style={{ position:"relative", marginBottom:20 }}>
              <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:15, color:C.textMut }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search materials, topics, tags..." style={{ width:"100%", padding:"13px 14px 13px 42px", borderRadius:14, border:`1.5px solid ${search?C.amber:C.border}`, background:C.surface, color:C.textPri, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit", boxShadow:C.shadow }}/>
              {search && <button onClick={() => setSearch("")} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:16, color:C.textMut }}>✕</button>}
            </div>

            {/* Category Cards */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, marginBottom:20 }}>
              {/* All */}
              <div className="cat-card" onClick={() => { setActiveCat("all"); setActiveSub("all"); setActiveDept(null); setGovtFilter("all"); setStateFilter("all"); }}
                style={{ background:activeCategory==="all"?"linear-gradient(135deg,#f8fafc,#e2e8f0)":C.surface, border:`1.5px solid ${activeCategory==="all"?C.borderHi:C.border}`, borderRadius:14, padding:"16px 18px", cursor:"pointer" }}>
                <div style={{ fontSize:28, marginBottom:8 }}>🌐</div>
                <div style={{ fontWeight:800, fontSize:14, color:activeCategory==="all"?C.textPri:C.textSec }}>All Materials</div>
                <div style={{ fontSize:11, color:C.textMut, marginTop:3 }}>All categories · {_globalMaterials.length + Object.values(BTECH_MATERIALS).flat().length} total</div>
              </div>

              {Object.entries(CATEGORIES).map(([key, cat]) => {
                const isActive = activeCategory===key;
                const count = key==="btech" ? Object.values(BTECH_MATERIALS).flat().length + _globalMaterials.filter(m=>m.category==="btech").length : _globalMaterials.filter(m=>m.category===key).length;
                return (
                  <div key={key} className="cat-card" onClick={() => { setActiveCat(key); setActiveSub("all"); setActiveDept(null); setGovtFilter("all"); setStateFilter("all"); }}
                    style={{ background:isActive?cat.gradient:C.surface, border:`1.5px solid ${isActive?cat.color:C.border}`, borderRadius:14, padding:"16px 18px", cursor:"pointer" }}>
                    <div style={{ fontSize:28, marginBottom:8 }}>{cat.icon}</div>
                    <div style={{ fontWeight:800, fontSize:14, color:isActive?cat.color:C.textPri }}>{cat.label}</div>
                    <div style={{ fontSize:11, color:C.textMut, marginTop:3 }}>{count} materials</div>
                    {key==="higher" && isActive && (
                      <div style={{ marginTop:10 }}>
                        <div style={{ display:"flex", gap:4, marginBottom:6 }}>
                          <span style={{ background:"#f0fdf4", color:"#166534", borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700, border:"1px solid #86efac" }}>🇮🇳 India {indiaPct}%</span>
                          <span style={{ background:"#eff6ff", color:"#1e40af", borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700, border:"1px solid #93c5fd" }}>✈️ Abroad {abroadPct}%</span>
                        </div>
                      </div>
                    )}
                    {key==="government" && isActive && (
                      <div style={{ marginTop:6 }}>
                        <span style={{ background:"rgba(255,255,255,0.7)", color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700 }}>🏛️ Central + 🗺️ State</span>
                      </div>
                    )}
                    {key==="btech" && isActive && (
                      <div style={{ marginTop:6 }}>
                        <span style={{ background:"rgba(255,255,255,0.7)", color:cat.color, borderRadius:5, padding:"2px 7px", fontSize:9, fontWeight:700 }}>20 departments</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* B.Tech dropdown */}
            {activeCategory==="btech" && (
              <div style={{ marginBottom:18, animation:"slideDown 0.3s ease" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", marginBottom:activeDept?12:0 }}>
                  <BTechDropdown activeDept={activeDept} onSelect={setActiveDept} materials={materials}/>
                  {activeDept && (
                    <div style={{ fontSize:13, color:C.textSec, fontWeight:600 }}>
                      {(() => {
                        const dept = BTECH_DEPARTMENTS.find(d => d.id===activeDept);
                        return dept ? <span style={{ color:dept.color, fontWeight:800 }}>{dept.icon} {dept.name}</span> : null;
                      })()}
                    </div>
                  )}
                </div>
                {activeDept && (
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5, animation:"slideDown 0.25s ease" }}>
                    {BTECH_DEPARTMENTS.map(dept => (
                      <button key={dept.id} onClick={() => setActiveDept(dept.id)} style={{ padding:"5px 10px", borderRadius:8, border:`1.5px solid ${activeDept===dept.id?dept.color:C.border}`, background:activeDept===dept.id?dept.bg:"transparent", color:activeDept===dept.id?dept.color:C.textMut, cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", transition:"all 0.15s" }}>
                        {dept.icon} {dept.short}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Govt filter */}
            {activeCategory==="government" && (
              <GovtSectorFilter govtFilter={govtFilter} stateFilter={stateFilter} onGovtChange={setGovtFilter} onStateChange={setStateFilter}/>
            )}

            {/* Higher filter */}
            {activeCategory==="higher" && (
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, flexWrap:"wrap" }}>
                <span style={{ fontSize:13, fontWeight:800, color:"#5b21b6" }}>🌍 Filter:</span>
                {[["all","🌐 All"],["India","🇮🇳 India"],["Abroad","✈️ Abroad"]].map(([v, l]) => (
                  <button key={v} onClick={() => setActiveSub(v)} style={{ padding:"7px 14px", borderRadius:9, border:`1.5px solid ${activeSub===v?"#7c3aed":"#c4b5fd"}`, background:activeSub===v?"#7c3aed":"rgba(255,255,255,0.8)", color:activeSub===v?"#fff":"#5b21b6", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>
                    {l}
                  </button>
                ))}
                <span style={{ marginLeft:"auto", background:"#f0fdf4", color:"#166534", borderRadius:8, padding:"4px 10px", fontSize:11, fontWeight:800 }}>🇮🇳 {indiaPct}%</span>
                <span style={{ background:"#eff6ff", color:"#1e40af", borderRadius:8, padding:"4px 10px", fontSize:11, fontWeight:800 }}>✈️ {abroadPct}%</span>
              </div>
            )}

            {/* Sub filter for private */}
            {activeCategory==="private" && (
              <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
                {["all",...CATEGORY_SUBS.private].map(s => (
                  <button key={s} onClick={() => setActiveSub(s)} style={{ padding:"6px 12px", borderRadius:9, border:`1.5px solid ${activeSub===s?C.amber:C.border}`, background:activeSub===s?"#fffbeb":"transparent", color:activeSub===s?C.amberDim:C.textSec, cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>
                    {s==="all"?"All":s}
                  </button>
                ))}
              </div>
            )}

            {/* Count */}
            <div style={{ fontSize:12, color:C.textMut, fontWeight:600, marginBottom:14 }}>
              {filtered.length} material{filtered.length!==1?"s":""} found
              {activeDept && ` in ${BTECH_DEPARTMENTS.find(d=>d.id===activeDept)?.name}`}
              {stateFilter!=="all" && stateFilter && ` — ${GOVT_STRUCTURE.state.states[stateFilter]?.label}`}
            </div>

            {/* Materials Grid */}
            {filtered.length===0 ? (
              <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}>
                <div style={{ fontSize:52, marginBottom:12 }}>📭</div>
                <div style={{ fontSize:16, fontWeight:700, color:C.textSec, marginBottom:6 }}>No materials found</div>
                <div style={{ fontSize:13 }}>Try a different filter or search term</div>
              </div>
            ) : (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:18 }}>
                {filtered.map((m, i) => {
                  const cat = CATEGORIES[m.category] || CATEGORIES.private;
                  const locked = m.type==="premium" && completedCount<3;
                  const crash = CRASH_COURSES[m.id];
                  const dept = m.deptId ? BTECH_DEPARTMENTS.find(d => d.id===m.deptId) : null;
                  return (
                    <div key={`${m.id}-${i}`} className="mat-card" style={{ background:C.surface, borderRadius:16, border:`1.5px solid ${m.bookmarked?C.amber:C.border}`, overflow:"hidden", animation:`cardIn 0.45s ease ${Math.min(i,10)*0.05}s both`, boxShadow:C.shadow, position:"relative" }}>
                      <div style={{ background:dept?dept.bg:cat.gradient, padding:"22px 0 16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, position:"relative", minHeight:110 }}>
                        <MatThumb m={m} size={68}/>
                        {locked && <div style={{ position:"absolute", top:8, left:8, background:"#92400e", color:"#fef3c7", fontSize:9, fontWeight:700, borderRadius:6, padding:"2px 7px" }}>🔒 PREMIUM</div>}
                        {!locked && m.type==="premium" && <div style={{ position:"absolute", top:8, left:8, background:dept?dept.color:cat.color, color:"#fff", fontSize:9, fontWeight:700, borderRadius:6, padding:"2px 7px" }}>✨ PREMIUM</div>}
                        {m.govtType && <div style={{ position:"absolute", bottom:8, left:8, background:m.govtType==="central"?"rgba(3,105,161,0.12)":"rgba(5,150,105,0.12)", color:m.govtType==="central"?"#0369a1":"#059669", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px", border:`1px solid ${m.govtType==="central"?"#7dd3fc":"#a7f3d0"}` }}>{m.govtType==="central"?"🏛️ Central":"🗺️ State"}</div>}
                        {m.stateId && <div style={{ position:"absolute", bottom:8, right:8, background:m.stateId==="ap"?"rgba(220,38,38,0.1)":"rgba(124,58,237,0.1)", color:m.stateId==="ap"?"#dc2626":"#7c3aed", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px" }}>{m.stateId==="ap"?"🌊 AP":"🌺 TS"}</div>}
                        {dept && <div style={{ position:"absolute", bottom:8, left:8, background:dept.bg, color:dept.color, fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px", border:`1px solid ${dept.border}` }}>{dept.icon} {dept.short}</div>}
                        {m.indiaOrAbroad && <div style={{ position:"absolute", top:8, right:8, background:m.indiaOrAbroad==="India"?"rgba(22,163,74,0.1)":"rgba(30,64,175,0.1)", color:m.indiaOrAbroad==="India"?"#166534":"#1e40af", fontSize:9, fontWeight:700, borderRadius:5, padding:"2px 7px" }}>{m.indiaOrAbroad==="India"?"🇮🇳":"✈️"} {m.indiaOrAbroad}</div>}
                        <button onClick={e => { e.stopPropagation(); toggleBookmark(m.id); }} style={{ position:"absolute", top:8, right:8, background:m.bookmarked?"#fffbeb":"rgba(255,255,255,0.8)", border:`1px solid ${m.bookmarked?C.amber:C.border}`, borderRadius:7, padding:"4px 7px", cursor:"pointer", fontSize:12, backdropFilter:"blur(4px)" }}>{m.bookmarked?"🔖":"🏷️"}</button>
                      </div>
                      <div style={{ padding:"12px 14px 14px" }}>
                        <div style={{ fontWeight:800, fontSize:13, marginBottom:4, color:C.textPri, lineHeight:1.3 }}>{m.title}</div>
                        <div style={{ fontSize:11, color:C.textSec, marginBottom:8, display:"flex", alignItems:"center", gap:5, flexWrap:"wrap" }}>
                          <span style={{ background:dept?dept.bg:cat.bg, color:dept?dept.color:cat.color, borderRadius:5, padding:"2px 7px", fontWeight:700, border:`1px solid ${dept?dept.border:cat.border}` }}>{m.sub}</span>
                          <span style={{ color:C.textMut }}>{m.pages}p · {m.topics} topics</span>
                        </div>
                        {m.progress>0 && (
                          <div style={{ marginBottom:10 }}>
                            <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:C.textMut, marginBottom:3 }}><span>Progress</span><span style={{ color:dept?dept.color:cat.color, fontWeight:700 }}>{m.progress}%</span></div>
                            <div style={{ height:5, background:C.border, borderRadius:8, overflow:"hidden" }}><div style={{ width:`${m.progress}%`, height:"100%", background:`linear-gradient(90deg,${dept?dept.color:cat.color},${dept?dept.color:cat.color}cc)`, borderRadius:8 }}/></div>
                          </div>
                        )}
                        <div style={{ display:"flex", gap:6, marginBottom:m.type!=="premium"||completedCount>=3?8:0 }}>
                          <button className="btn-hover" onClick={() => handleOpen(m)} style={{ flex:1, background:locked?"#f1f5f9":`linear-gradient(135deg,${dept?dept.color:cat.color},${dept?dept.color:cat.color}dd)`, color:locked?C.textMut:"#fff", border:"none", borderRadius:9, padding:"8px 0", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>{locked?"🔒 Locked":"📖 Open"}</button>
                          <button className="btn-hover" onClick={() => handleDownload(m)} style={{ background:"#f1f5f9", border:`1px solid ${C.border}`, borderRadius:9, padding:"8px 11px", cursor:"pointer", fontSize:12, color:C.textSec }} title="Download">⬇️</button>
                        </div>
                        {(!locked) && (crash || EPREP_LINKS[m.id]) && (
                          <div style={{ display:"flex", gap:6 }}>
                            {EPREP_LINKS[m.id] && (<a href={EPREP_LINKS[m.id]} target="_blank" rel="noreferrer" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:4, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", border:"1.5px solid #93c5fd", borderRadius:8, padding:"7px 0", fontSize:11, fontWeight:700, color:"#1e40af", textDecoration:"none" }}>🎯 E-Prep</a>)}
                            {crash && (<a href={crash.url} target="_blank" rel="noreferrer" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:4, background:"linear-gradient(135deg,#fff7ed,#ffedd5)", border:"1.5px solid #fdba74", borderRadius:8, padding:"7px 0", fontSize:11, fontWeight:700, color:"#c2410c", textDecoration:"none" }}>⚡ Crash</a>)}
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

      {openMaterial && <MaterialModal material={openMaterial} onClose={() => setOpenMat(null)} toast={toast}/>}
      {showReqModal && <RequestMaterialModal onClose={() => setShowReqModal(false)} onSubmit={submitRequest}/>}
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
function AdminDashboard({ onBack }) {
  const [materials, setMaterials] = useState(() => _globalMaterials.map(m => ({...m})));
  const [requests, setRequests] = useState(() => [..._globalRequests]);
  const [students] = useState(() => _globalStudents.map(s => ({...s})));
  const [activeTab, setActiveTab] = useState("overview");
  const [filterCat, setFilterCat] = useState("all");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAdd] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteConfirm, setDelConf] = useState(null);
  const [animIn, setAnimIn] = useState(false);
  const { toasts, add:toast } = useToast();

  useEffect(() => {
    setTimeout(() => setAnimIn(true), 80);
    const t = setInterval(() => setRequests([..._globalRequests]), 2000);
    return () => clearInterval(t);
  }, []);

  const handleBulkImport = (newMaterials) => {
    const updated = [...materials, ...newMaterials];
    setMaterials(updated);
    _globalMaterials = updated;
    toast(`✅ ${newMaterials.length} material${newMaterials.length!==1?"s":""} imported!`, "success");
  };

  const handleDelete = (id) => {
    const updated = materials.filter(m => m.id!==id);
    setMaterials(updated);
    _globalMaterials = updated;
    setDelConf(null);
    toast("Material deleted","error");
  };

  const handleSave = (data) => {
    if (editItem) {
      const updated = materials.map(m => m.id===editItem.id ? { ...m, ...data } : m);
      setMaterials(updated);
      _globalMaterials = updated;
      toast("Material updated!","success");
    } else {
      const newM = { ...data, id:Date.now(), progress:0, bookmarked:false, downloads:0, emoji:data.emoji||"📄", customTopics:null };
      const updated = [...materials, newM];
      setMaterials(updated);
      _globalMaterials = updated;
      toast("Material added!","success");
    }
    setShowAdd(false);
    setEditItem(null);
  };

  const approveRequest = (req, studentOnly) => {
    const newM = { id:Date.now(), title:req.title, category:req.category, sub:req.sub, type:"free", emoji:"📄", topics:5, progress:0, pages:100, downloads:0, bookmarked:false, uploadType:null, fileLink:"", indiaOrAbroad:null, govtType:null, stateId:null, deptId:null, tags:[], customTopics:null, studentId:studentOnly?req.studentId:null };
    const updatedM = [...materials, newM];
    setMaterials(updatedM);
    _globalMaterials = updatedM;
    const updatedR = _globalRequests.map(r => r.id===req.id ? { ...r, status:"approved" } : r);
    _globalRequests = updatedR;
    setRequests([...updatedR]);
    toast(`✅ "${req.title}" approved!`,"success");
  };

  const markAddingSoon = (id) => {
    const updatedR = _globalRequests.map(r => r.id===id ? { ...r, status:"coming_soon" } : r);
    _globalRequests = updatedR;
    setRequests([...updatedR]);
    toast("📅 Student notified!","info");
  };

  const filtered = materials.filter(m => {
    const q = search.toLowerCase();
    return (m.title.toLowerCase().includes(q)) && (filterCat==="all" || m.category===filterCat);
  });

  const pendingReqs = requests.filter(r => r.status==="pending");
  const stats = {
    total: materials.length,
    free: materials.filter(m => m.type==="free").length,
    premium: materials.filter(m => m.type==="premium").length,
    downloads: materials.reduce((a, m) => a+m.downloads, 0),
    students: students.length,
    pending: pendingReqs.length,
    btech: materials.filter(m => m.category==="btech").length,
    govt: materials.filter(m => m.category==="government").length,
  };

  const TABS = [
    { id:"overview", label:"📊 Overview" },
    { id:"materials", label:"📚 Materials" },
    { id:"requests", label:`📨 Requests${stats.pending>0?` (${stats.pending})`:""}`},
    { id:"students", label:"👥 Students" },
    { id:"categories", label:"🏷️ Categories" },
  ];

  const getStatusBadge = (s) => s==="approved"?{bg:"#f0fdf4",color:"#166534",border:"#86efac",text:"✅ Approved"}:s==="coming_soon"?{bg:"#eff6ff",color:"#1e40af",border:"#93c5fd",text:"📅 Adding Soon"}:{bg:"#fffbeb",color:"#92400e",border:"#fcd34d",text:"⏳ Pending"};

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.textPri, fontFamily:"'Nunito',sans-serif", display:"flex" }}>
      <style>{GLOBAL_CSS}</style>
      <ToastContainer toasts={toasts}/>

      {/* Sidebar */}
      <div style={{ position:"fixed", left:0, top:0, bottom:0, width:220, background:C.surface, borderRight:`1px solid ${C.border}`, display:"flex", flexDirection:"column", zIndex:100, boxShadow:"2px 0 12px rgba(15,23,42,0.06)", overflowY:"auto" }}>
        <div style={{ padding:"20px 16px", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ fontSize:10, color:C.textMut, fontWeight:800, marginBottom:3, letterSpacing:1.5, textTransform:"uppercase" }}>OYS E-LIBRARY</div>
          <div style={{ fontSize:17, fontWeight:900, color:C.amber }}>Admin Panel</div>
        </div>
        <nav style={{ padding:"14px 10px", flex:1 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ width:"100%", textAlign:"left", padding:"10px 13px", borderRadius:10, border:"none", cursor:"pointer", marginBottom:3, background:activeTab===t.id?"linear-gradient(135deg,#fffbeb,#fef3c7)":"transparent", color:activeTab===t.id?C.amberDim:C.textSec, fontWeight:activeTab===t.id?800:600, fontSize:13, borderLeft:`3px solid ${activeTab===t.id?C.amber:"transparent"}`, fontFamily:"inherit", transition:"all 0.15s" }}>{t.label}</button>
          ))}
        </nav>
        <div style={{ padding:"14px 10px", borderTop:`1px solid ${C.border}` }}>
          <button onClick={onBack} style={{ width:"100%", padding:"10px 13px", borderRadius:10, background:"#fef2f2", border:"1.5px solid #fca5a5", color:"#991b1b", fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>← Back to Home</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft:220, flex:1, padding:"24px 28px", opacity:animIn?1:0, transition:"opacity 0.5s ease", minWidth:0 }}>

        {activeTab==="overview" && (
          <div>
            <h1 style={{ fontSize:22, fontWeight:900, marginBottom:24 }}>Dashboard Overview</h1>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14, marginBottom:28 }}>
              {[
                { label:"Total Materials", value:stats.total, icon:"📚", color:C.amber, bg:"#fffbeb" },
                { label:"Free", value:stats.free, icon:"🆓", color:C.sage, bg:"#f0fdf4" },
                { label:"Premium", value:stats.premium, icon:"✨", color:C.indigo, bg:"#eff6ff" },
                { label:"B.Tech", value:stats.btech+Object.values(BTECH_MATERIALS).flat().length, icon:"🔬", color:"#ec4899", bg:"#fce7f3" },
                { label:"Govt Exams", value:stats.govt, icon:"🏛️", color:"#10b981", bg:"#f0fdf4" },
                { label:"Pending Requests", value:stats.pending, icon:"⏳", color:C.amberDim, bg:"#fffbeb" },
              ].map((s, i) => (
                <div key={i} style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, padding:"18px 20px", boxShadow:C.shadow, animation:`cardIn 0.4s ease ${i*0.07}s both`, transition:"transform 0.2s,box-shadow 0.2s", cursor:"default" }} onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=C.shadowLg; }} onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=C.shadow; }}>
                  <div style={{ background:s.bg, borderRadius:9, padding:"7px 9px", fontSize:18, display:"inline-block", marginBottom:10 }}>{s.icon}</div>
                  <div style={{ fontSize:26, fontWeight:900, color:s.color }}>{s.value}</div>
                  <div style={{ fontSize:11, color:C.textMut, marginTop:3, fontWeight:600 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* B.Tech breakdown */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:"20px 24px", marginBottom:22, boxShadow:C.shadow }}>
              <div style={{ fontSize:13, fontWeight:800, color:C.textSec, marginBottom:16 }}>🔬 B.Tech Departments Overview</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))", gap:8 }}>
                {BTECH_DEPARTMENTS.slice(0,10).map(dept => {
                  const count = (BTECH_MATERIALS[dept.id]||[]).length + materials.filter(m=>m.deptId===dept.id).length;
                  return (
                    <div key={dept.id} style={{ background:dept.bg, border:`1px solid ${dept.border}`, borderRadius:10, padding:"10px 12px", textAlign:"center" }}>
                      <div style={{ fontSize:20, marginBottom:4 }}>{dept.icon}</div>
                      <div style={{ fontSize:11, fontWeight:800, color:dept.color }}>{dept.short}</div>
                      <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{count} materials</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Govt breakdown */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:"20px 24px", marginBottom:22, boxShadow:C.shadow }}>
              <div style={{ fontSize:13, fontWeight:800, color:C.textSec, marginBottom:14 }}>🏛️ Government Exams Breakdown</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))", gap:10 }}>
                {[
                  { label:"Central Govt", count:materials.filter(m=>m.govtType==="central").length, icon:"🏛️", color:"#0369a1", bg:"#e0f2fe" },
                  { label:"AP State", count:materials.filter(m=>m.stateId==="ap").length, icon:"🌊", color:"#dc2626", bg:"#fee2e2" },
                  { label:"Telangana", count:materials.filter(m=>m.stateId==="telangana").length, icon:"🌺", color:"#7c3aed", bg:"#ede9fe" },
                  { label:"Other States", count:materials.filter(m=>m.stateId==="other").length, icon:"🗾", color:"#0891b2", bg:"#e0f2fe" },
                ].map((s, i) => (
                  <div key={i} style={{ background:s.bg, border:`1px solid ${s.color}33`, borderRadius:12, padding:"14px 16px" }}>
                    <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
                    <div style={{ fontSize:22, fontWeight:900, color:s.color }}>{s.count}</div>
                    <div style={{ fontSize:11, color:C.textSec, fontWeight:700 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {pendingReqs.length>0 && (
              <>
                <h2 style={{ fontSize:15, fontWeight:800, marginBottom:12, color:C.textSec }}>⏳ Pending Requests</h2>
                {pendingReqs.slice(0,3).map(r => (
                  <div key={r.id} style={{ background:C.surface, border:"1.5px solid #fcd34d", borderRadius:12, padding:"14px 18px", display:"flex", alignItems:"center", gap:14, boxShadow:C.shadow, marginBottom:8, flexWrap:"wrap" }}>
                    <div style={{ flex:1 }}><span style={{ fontWeight:800, color:C.amber }}>{r.title}</span><span style={{ color:C.textMut, fontSize:12, marginLeft:8 }}>by {r.studentName}</span></div>
                    <button onClick={() => setActiveTab("requests")} style={{ background:"#fffbeb", border:"1.5px solid #fcd34d", color:"#92400e", borderRadius:9, padding:"7px 14px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>Review →</button>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {activeTab==="materials" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
              <h1 style={{ fontSize:20, fontWeight:900, margin:0 }}>Manage Materials</h1>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                <button className="btn-hover" onClick={() => setShowBulkImport(true)} style={{ background:"linear-gradient(135deg,#10b981,#059669)", color:"#fff", border:"none", borderRadius:10, padding:"10px 16px", fontWeight:800, fontSize:12, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 14px rgba(16,185,129,0.35)", display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap" }}>📥 Bulk Import CSV</button>
                <button className="btn-hover" onClick={() => { setEditItem(null); setShowAdd(true); }} style={{ background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:"10px 16px", fontWeight:800, fontSize:12, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 14px rgba(245,158,11,0.35)" }}>+ Add Material</button>
              </div>
            </div>
            <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search..." style={{ flex:1, minWidth:180, padding:"10px 14px", borderRadius:10, border:`1px solid ${C.border}`, background:C.surface, color:C.textPri, fontSize:13, outline:"none", fontFamily:"inherit" }}/>
              <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ padding:"10px 12px", borderRadius:10, border:`1px solid ${C.border}`, background:C.surface, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
                <option value="all">All Categories</option>
                {Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:C.shadow, overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", minWidth:700 }}>
                <thead>
                  <tr style={{ background:C.elevated }}>
                    {["Material","Category","Sub/Dept","Type","Govt","Downloads","Actions"].map(h => (
                      <th key={h} style={{ padding:"12px 14px", textAlign:"left", fontSize:11, fontWeight:800, color:C.textMut, textTransform:"uppercase", letterSpacing:0.5, whiteSpace:"nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m, i) => {
                    const cat = CATEGORIES[m.category] || CATEGORIES.private;
                    const dept = m.deptId ? BTECH_DEPARTMENTS.find(d=>d.id===m.deptId) : null;
                    return (
                      <tr key={m.id} className="row-hover" style={{ borderTop:`1px solid ${C.border}`, animation:`cardIn 0.3s ease ${i*0.02}s both` }}>
                        <td style={{ padding:"12px 14px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                            <MatThumb m={m} size={36}/>
                            <div style={{ fontWeight:700, fontSize:13 }}>{m.title}</div>
                          </div>
                        </td>
                        <td style={{ padding:"12px 14px" }}><span style={{ background:cat.bg, color:cat.color, borderRadius:6, padding:"3px 9px", fontSize:11, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {cat.label}</span></td>
                        <td style={{ padding:"12px 14px", color:C.textSec, fontSize:12, fontWeight:600 }}>{dept?`${dept.icon} ${dept.short}`:m.sub}</td>
                        <td style={{ padding:"12px 14px" }}><span style={{ background:m.type==="premium"?"#fffbeb":"#f0fdf4", color:m.type==="premium"?"#92400e":"#166534", borderRadius:6, padding:"3px 9px", fontSize:11, fontWeight:700 }}>{m.type==="premium"?"✨ Premium":"🆓 Free"}</span></td>
                        <td style={{ padding:"12px 14px", fontSize:11, color:C.textSec, fontWeight:600 }}>
                          {m.govtType==="central"&&"🏛️ Central"}
                          {m.stateId==="ap"&&"🌊 AP"}
                          {m.stateId==="telangana"&&"🌺 TS"}
                          {m.stateId==="other"&&"🗾 State"}
                          {!m.govtType&&!m.stateId&&"—"}
                        </td>
                        <td style={{ padding:"12px 14px", color:C.textSec, fontSize:12, fontWeight:700 }}>{m.downloads.toLocaleString()}</td>
                        <td style={{ padding:"12px 14px" }}>
                          <div style={{ display:"flex", gap:5 }}>
                            <button onClick={() => { setEditItem(m); setShowAdd(true); }} style={{ background:"#fffbeb", color:"#92400e", border:"none", borderRadius:7, padding:"6px 10px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>✏️</button>
                            <button onClick={() => setDelConf(m.id)} style={{ background:"#fef2f2", color:"#991b1b", border:"none", borderRadius:7, padding:"6px 10px", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit" }}>🗑</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filtered.length===0 && <div style={{ textAlign:"center", padding:40, color:C.textMut }}>No materials found</div>}
            </div>
          </div>
        )}

        {activeTab==="requests" && (
          <div>
            <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Material Requests</h1>
            {requests.length===0 ? (
              <div style={{ textAlign:"center", padding:"60px 0", color:C.textMut }}><div style={{ fontSize:44, marginBottom:10 }}>📭</div><div style={{ fontWeight:600 }}>No requests yet</div></div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {requests.map((r, i) => {
                  const cat = CATEGORIES[r.category];
                  const badge = getStatusBadge(r.status);
                  return (
                    <div key={r.id} style={{ background:C.surface, border:`1.5px solid ${r.status==="pending"?"#fcd34d":r.status==="approved"?"#86efac":"#93c5fd"}`, borderRadius:14, padding:"18px 22px", boxShadow:C.shadow, animation:`cardIn 0.35s ease ${i*0.05}s both` }}>
                      <div style={{ display:"flex", gap:14, alignItems:"flex-start", flexWrap:"wrap" }}>
                        <div style={{ width:42, height:42, borderRadius:"50%", background:"#fffbeb", border:"1.5px solid #fcd34d", display:"flex", alignItems:"center", justifyContent:"center", color:C.amberDim, fontWeight:800, fontSize:13, flexShrink:0 }}>??</div>
                        <div style={{ flex:1, minWidth:200 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                            <span style={{ fontWeight:800, fontSize:14 }}>{r.title}</span>
                            {cat && <span style={{ background:cat.bg, color:cat.color, borderRadius:6, padding:"2px 8px", fontSize:11, fontWeight:700, border:`1px solid ${cat.border}` }}>{cat.icon} {r.sub}</span>}
                          </div>
                          <div style={{ fontSize:12, color:C.textSec, marginBottom:6 }}>By <strong>{r.studentName}</strong> · {r.date}</div>
                          <div style={{ fontSize:12, color:C.textMut, fontStyle:"italic", background:C.elevated, padding:"8px 12px", borderRadius:9, borderLeft:"3px solid #fcd34d" }}>"{r.reason}"</div>
                        </div>
                        <div style={{ textAlign:"right", flexShrink:0 }}>
                          {r.status==="pending" ? (
                            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                              <button onClick={() => approveRequest(r, true)} style={{ background:"#f0fdf4", color:"#166534", border:"1.5px solid #86efac", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>✅ Approve for student</button>
                              <button onClick={() => approveRequest(r, false)} style={{ background:"#fffbeb", color:"#92400e", border:"1.5px solid #fcd34d", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>🌐 Approve for all</button>
                              <button onClick={() => markAddingSoon(r.id)} style={{ background:"linear-gradient(135deg,#eff6ff,#dbeafe)", color:"#1e40af", border:"1.5px solid #93c5fd", borderRadius:9, padding:"8px 12px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", whiteSpace:"nowrap" }}>📅 Adding Soon</button>
                            </div>
                          ) : (
                            <div style={{ display:"inline-block", borderRadius:9, padding:"7px 14px", fontSize:12, fontWeight:700, background:badge.bg, color:badge.color, border:`1.5px solid ${badge.border}` }}>{badge.text}</div>
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

        {activeTab==="students" && (
          <div>
            <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Student Management</h1>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
              {students.map((s, i) => (
                <div key={s.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"20px 22px", animation:`cardIn 0.35s ease ${i*0.07}s both`, boxShadow:C.shadow, transition:"all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor=C.amber; e.currentTarget.style.transform="translateY(-3px)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="translateY(0)"; }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"1.5px solid #fcd34d", display:"flex", alignItems:"center", justifyContent:"center", color:C.amberDim, fontWeight:800, fontSize:14, flexShrink:0 }}>{s.avatar}</div>
                    <div><div style={{ fontWeight:800, fontSize:14 }}>{s.name}</div><div style={{ fontSize:12, color:C.textSec }}>{s.email}</div></div>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                    {[["✅",s.completed,"Completed"],["📚",materials.filter(m=>m.studentId===s.id).length,"Personal"]].map(([icon,val,lbl]) => (
                      <div key={lbl} style={{ background:C.elevated, borderRadius:10, padding:"10px 0", textAlign:"center" }}>
                        <div style={{ fontSize:16, marginBottom:2 }}>{icon}</div>
                        <div style={{ fontSize:18, fontWeight:900, color:C.amber }}>{val}</div>
                        <div style={{ fontSize:10, color:C.textMut, fontWeight:600 }}>{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==="categories" && (
          <div>
            <h1 style={{ fontSize:20, fontWeight:900, marginBottom:20 }}>Category Management</h1>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <div key={key} style={{ background:C.surface, borderRadius:14, border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:C.shadow }}>
                  <div style={{ background:cat.gradient, borderBottom:`1px solid ${cat.border}`, padding:"18px 20px", display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontSize:26 }}>{cat.icon}</span>
                    <div><div style={{ color:cat.color, fontWeight:800, fontSize:14 }}>{cat.label}</div><div style={{ color:C.textSec, fontSize:12 }}>{materials.filter(m=>m.category===key).length} materials</div></div>
                  </div>
                  <div style={{ padding:16 }}>
                    {key==="btech" ? (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                        {BTECH_DEPARTMENTS.slice(0,8).map(d => (
                          <span key={d.id} style={{ background:d.bg, color:d.color, borderRadius:7, padding:"4px 9px", fontSize:11, border:`1px solid ${d.border}`, fontWeight:700 }}>{d.icon} {d.short}</span>
                        ))}
                        <span style={{ background:C.elevated, color:C.textMut, borderRadius:7, padding:"4px 9px", fontSize:11, fontWeight:600 }}>+{BTECH_DEPARTMENTS.length-8} more</span>
                      </div>
                    ) : key==="government" ? (
                      <div>
                        <div style={{ fontSize:11, fontWeight:800, color:C.textMut, marginBottom:8, textTransform:"uppercase" }}>Structure</div>
                        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                          <div style={{ background:"#e0f2fe", border:"1px solid #7dd3fc", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#0369a1" }}>🏛️ Central: {materials.filter(m=>m.govtType==="central").length} materials</div>
                          <div style={{ background:"#fee2e2", border:"1px solid #fca5a5", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#dc2626" }}>🌊 Andhra Pradesh: {materials.filter(m=>m.stateId==="ap").length} materials</div>
                          <div style={{ background:"#ede9fe", border:"1px solid #c4b5fd", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:700, color:"#7c3aed" }}>🌺 Telangana: {materials.filter(m=>m.stateId==="telangana").length} materials</div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                        {(CATEGORY_SUBS[key]||[]).map(s => (
                          <div key={s} style={{ position:"relative" }}>
                            <span style={{ background:C.elevated, color:C.textSec, borderRadius:7, padding:"5px 10px", fontSize:12, border:`1px solid ${C.border}`, fontWeight:600, display:"inline-flex", alignItems:"center", gap:4 }}>
                              {s}
                              {key==="higher" && HIGHER_INDIA_ABROAD[s] && (
                                <span style={{ background:"rgba(99,102,241,0.1)", color:"#6366f1", borderRadius:4, padding:"1px 5px", fontSize:9, fontWeight:800 }}>{HIGHER_INDIA_ABROAD[s]==="India"?"🇮🇳":HIGHER_INDIA_ABROAD[s]==="Abroad"?"✈️":"🌐"}</span>
                              )}
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

      {/* Add/Edit Modal */}
      {showAddModal && <AddMaterialModal item={editItem} students={students} onClose={() => { setShowAdd(false); setEditItem(null); }} onSave={handleSave}/>}
      {showBulkImport && <BulkImportModal onClose={() => setShowBulkImport(false)} onImport={handleBulkImport} toast={toast}/>}
      {deleteConfirm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, backdropFilter:"blur(4px)" }}>
          <div style={{ background:C.surface, borderRadius:18, padding:30, maxWidth:340, width:"90%", border:"1.5px solid #fca5a5", textAlign:"center", boxShadow:C.shadowLg, animation:"cardIn 0.3s ease" }}>
            <div style={{ fontSize:38, marginBottom:10 }}>⚠️</div>
            <h3 style={{ fontWeight:800, marginBottom:8 }}>Delete Material?</h3>
            <p style={{ color:C.textSec, fontSize:13, marginBottom:22 }}>This action cannot be undone.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setDelConf(null)} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} style={{ flex:1, background:"#ef4444", color:"#fff", border:"none", borderRadius:10, padding:12, cursor:"pointer", fontWeight:800, fontFamily:"inherit" }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ADD MATERIAL MODAL ───────────────────────────────────────────────────────
function AddMaterialModal({ item, students, onClose, onSave }) {
  const [form, setForm] = useState({
    title:item?.title||"", category:item?.category||"private", sub:item?.sub||"IT", type:item?.type||"free",
    pages:item?.pages||"", topics:item?.topics||"", emoji:item?.emoji||"📄",
    uploadType:item?.uploadType||"", fileLink:item?.fileLink||"", studentId:item?.studentId||"",
    indiaOrAbroad:item?.indiaOrAbroad||"", govtType:item?.govtType||"", stateId:item?.stateId||"",
    deptId:item?.deptId||"", tags:item?.tags?.join(",")||""
  });
  const set = (k, v) => setForm(p => ({ ...p, [k]:v }));
  const EMOJIS = ["📄","☕","🐍","🌲","📊","🏦","🏧","📜","📐","🔬","🔤","💼","🌾","⚔️","🚂","📝","🔷","🎯","🧮","🔐","🌊","🌺","💻","🖥️","📡","⚡","⚙️","🏗️","🧪","✈️","🚗","🧬"];

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.65)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9000, padding:16, backdropFilter:"blur(4px)", overflowY:"auto" }}>
      <div style={{ background:C.surface, borderRadius:20, maxWidth:560, width:"100%", boxShadow:C.shadowLg, maxHeight:"95vh", overflowY:"auto", animation:"cardIn 0.3s ease", margin:"auto" }}>
        <div style={{ padding:"20px 24px", borderBottom:`1px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <h2 style={{ margin:0, color:C.amber, fontSize:16, fontWeight:900 }}>{item?"✏️ Edit Material":"➕ Add New Material"}</h2>
          <button onClick={onClose} style={{ background:C.elevated, border:`1px solid ${C.border}`, color:C.textSec, borderRadius:9, padding:"6px 11px", cursor:"pointer" }}>✕</button>
        </div>
        <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:14 }}>
          {/* Title */}
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Title *</label><input value={form.title} onChange={e => set("title",e.target.value)} placeholder="Material title" style={{ width:"100%", padding:"10px 13px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>

          {/* Category & Type */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Category</label><select value={form.category} onChange={e => { set("category",e.target.value); set("sub",CATEGORY_SUBS[e.target.value]?.[0]||""); set("govtType",""); set("stateId",""); set("deptId",""); set("indiaOrAbroad",""); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>{Object.entries(CATEGORIES).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}</select></div>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Type</label><select value={form.type} onChange={e => set("type",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}><option value="free">🆓 Free</option><option value="premium">✨ Premium</option></select></div>
          </div>

          {/* B.Tech dept */}
          {form.category==="btech" && (
            <div style={{ background:"linear-gradient(135deg,#fce7f3,#fbcfe8)", border:"1.5px solid rgba(236,72,153,0.3)", borderRadius:12, padding:"14px 16px" }}>
              <label style={{ fontSize:11, fontWeight:800, color:"#be185d", display:"block", marginBottom:8, textTransform:"uppercase" }}>🔬 B.Tech Department</label>
              <select value={form.deptId} onChange={e => { set("deptId",e.target.value); const dept=BTECH_DEPARTMENTS.find(d=>d.id===e.target.value); if(dept) set("sub",dept.short); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid rgba(236,72,153,0.3)", background:"rgba(255,255,255,0.8)", color:"#be185d", fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
                <option value="">Select Department</option>
                {BTECH_DEPARTMENTS.map(d => <option key={d.id} value={d.id}>{d.icon} {d.name} ({d.short})</option>)}
              </select>
            </div>
          )}

          {/* Govt options */}
          {form.category==="government" && (
            <div style={{ background:"linear-gradient(135deg,#f0fdf4,#d1fae5)", border:"1.5px solid #a7f3d0", borderRadius:12, padding:"14px 16px" }}>
              <label style={{ fontSize:11, fontWeight:800, color:"#065f46", display:"block", marginBottom:8, textTransform:"uppercase" }}>🏛️ Government Type</label>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                <div>
                  <select value={form.govtType} onChange={e => { set("govtType",e.target.value); if(e.target.value!=="state") set("stateId",""); }} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid #a7f3d0", background:"rgba(255,255,255,0.8)", color:"#065f46", fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
                    <option value="">Select type</option>
                    <option value="central">🏛️ Central Govt</option>
                    <option value="state">🗺️ State Govt</option>
                  </select>
                </div>
                {form.govtType==="state" && (
                  <div>
                    <select value={form.stateId} onChange={e => set("stateId",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:"1.5px solid #a7f3d0", background:"rgba(255,255,255,0.8)", color:"#065f46", fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
                      <option value="">Select state</option>
                      <option value="ap">🌊 Andhra Pradesh</option>
                      <option value="telangana">🌺 Telangana</option>
                      <option value="other">🗾 Other States</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Higher education destination */}
          {form.category==="higher" && (
            <div>
              <label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>🌍 India / Abroad</label>
              <select value={form.indiaOrAbroad} onChange={e => set("indiaOrAbroad",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
                <option value="">Not specified</option>
                <option value="India">🇮🇳 India</option>
                <option value="Abroad">✈️ Abroad</option>
                <option value="Both">🌐 Both</option>
              </select>
            </div>
          )}

          {/* Sub + Pages + Topics */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Sub</label><input value={form.sub} onChange={e => set("sub",e.target.value)} placeholder="Sub-category" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:12, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Pages</label><input value={form.pages} onChange={e => set("pages",e.target.value)} type="number" placeholder="300" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
            <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Topics</label><input value={form.topics} onChange={e => set("topics",e.target.value)} type="number" placeholder="10" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>
          </div>

          {/* Tags */}
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Tags (comma-separated)</label><input value={form.tags} onChange={e => set("tags",e.target.value)} placeholder="java,oop,backend" style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/></div>

          {/* Emoji */}
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:8, textTransform:"uppercase" }}>Icon</label><div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>{EMOJIS.map(e => (<button key={e} onClick={() => set("emoji",e)} style={{ width:38, height:38, fontSize:16, borderRadius:9, border:`2px solid ${form.emoji===e?C.amber:C.border}`, background:form.emoji===e?"#fffbeb":C.elevated, cursor:"pointer" }}>{e}</button>))}</div></div>

          {/* Assign */}
          <div><label style={{ fontSize:11, fontWeight:800, color:C.textSec, display:"block", marginBottom:5, textTransform:"uppercase" }}>Assign to Student</label><select value={form.studentId} onChange={e => set("studentId",e.target.value)} style={{ width:"100%", padding:"9px 11px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.elevated, color:C.textPri, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}><option value="">All Students (Public)</option>{students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></div>

          <div style={{ display:"flex", gap:10 }}>
            <button onClick={onClose} style={{ flex:1, background:C.elevated, color:C.textSec, border:`1px solid ${C.border}`, borderRadius:10, padding:12, cursor:"pointer", fontWeight:700, fontFamily:"inherit" }}>Cancel</button>
            <button onClick={() => onSave({ ...form, pages:parseInt(form.pages)||100, topics:parseInt(form.topics)||5, tags:form.tags?form.tags.split(",").map(t=>t.trim()).filter(Boolean):[] })} style={{ flex:2, background:C.amber, color:"#fff", border:"none", borderRadius:10, padding:12, cursor:"pointer", fontWeight:800, fontFamily:"inherit", fontSize:14 }}>{item?"💾 Update":"✅ Add Material"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  if (screen==="student") return <StudentDashboard onBack={() => setScreen("home")}/>;
  if (screen==="admin")   return <AdminDashboard   onBack={() => setScreen("home")}/>;

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 30%,#fef3c7 70%,#fff7ed 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Nunito',sans-serif", position:"relative", overflow:"hidden", padding:16 }}>
      <style>{GLOBAL_CSS}</style>
      {/* Orbs */}
      <div style={{ position:"fixed", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 70%)", top:"-10%", left:"-5%", animation:"orbPulse 6s ease-in-out infinite", pointerEvents:"none" }}/>
      <div style={{ position:"fixed", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)", bottom:"0%", right:"-5%", animation:"orbPulse 6s ease-in-out infinite 2s", pointerEvents:"none" }}/>

      <div style={{ textAlign:"center", zIndex:1, maxWidth:780, width:"100%", opacity:animIn?1:0, transform:animIn?"scale(1)":"scale(0.94)", transition:"all 0.6s cubic-bezier(.4,0,.2,1)" }}>
        <div style={{ fontSize:76, marginBottom:14, animation:"float 3.5s ease-in-out infinite", filter:"drop-shadow(0 8px 24px rgba(245,158,11,0.3))" }}>📚</div>
        <div style={{ fontSize:11, letterSpacing:5, color:C.amberDim, marginBottom:10, textTransform:"uppercase", fontWeight:800 }}>One Year Series</div>
        <h1 style={{ fontSize:48, fontWeight:900, color:C.textPri, margin:"0 0 8px", letterSpacing:-2, lineHeight:1.1 }}>
          <span style={{ color:C.amber }}>OYS</span> Platform
        </h1>
        <p style={{ color:C.textSec, fontSize:16, marginBottom:44, maxWidth:480, margin:"0 auto 44px", lineHeight:1.6, fontWeight:600 }}>Your complete digital learning hub — study materials, mock tests, crash courses, career guidance & more</p>
        <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:40 }}>
          <button onClick={() => setScreen("student")} style={{ background:"linear-gradient(135deg,#f59e0b,#fbbf24)", color:"#fff", border:"none", borderRadius:16, padding:"16px 40px", fontSize:15, fontWeight:900, cursor:"pointer", boxShadow:"0 10px 36px rgba(245,158,11,0.4)", transition:"all 0.25s", fontFamily:"inherit" }} onMouseEnter={e => { e.target.style.transform="translateY(-4px) scale(1.03)"; e.target.style.boxShadow="0 18px 50px rgba(245,158,11,0.45)"; }} onMouseLeave={e => { e.target.style.transform="translateY(0) scale(1)"; e.target.style.boxShadow="0 10px 36px rgba(245,158,11,0.4)"; }}>🎓 Student Dashboard</button>
          <button onClick={() => setScreen("admin")} style={{ background:"#fff", color:C.textPri, border:"1.5px solid #e2e8f0", borderRadius:16, padding:"16px 40px", fontSize:15, fontWeight:900, cursor:"pointer", boxShadow:"0 8px 28px rgba(15,23,42,0.1)", transition:"all 0.25s", fontFamily:"inherit" }} onMouseEnter={e => { e.target.style.transform="translateY(-4px)"; e.target.style.borderColor=C.amber; e.target.style.color=C.amber; }} onMouseLeave={e => { e.target.style.transform="translateY(0)"; e.target.style.borderColor="#e2e8f0"; e.target.style.color=C.textPri; }}>⚙️ Admin Panel</button>
        </div>

        {/* Feature pills */}
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
          {[{icon:"💻",label:"B.Tech 20 Depts"},{icon:"🏛️",label:"Central Govt"},{icon:"🌊",label:"AP State"},{icon:"🌺",label:"Telangana"},{icon:"📥",label:"CSV Import"},{icon:"🎓",label:"Higher Education"},{icon:"📄",label:"Resume Maker"},{icon:"⚡",label:"Crash Courses"}].map((f, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:5, color:C.textSec, fontSize:12, fontWeight:700, background:"rgba(255,255,255,0.7)", borderRadius:20, padding:"5px 13px", border:"1px solid rgba(255,255,255,0.9)", backdropFilter:"blur(8px)", boxShadow:"0 2px 8px rgba(15,23,42,0.06)", animation:`cardIn 0.5s ease ${i*0.06}s both` }}>
              <span style={{ fontSize:14 }}>{f.icon}</span> {f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}