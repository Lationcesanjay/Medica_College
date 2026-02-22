import { useEffect } from "react";



function App() {
  useEffect(() => {
    document.title = "Medica College — MBBS Program Model";
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-200">
      
       <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-b from-[#0b1220]/80 to-[#0b1220]/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg"></div>
            <span>Medica College</span>
          </div>
<nav className="hidden md:flex gap-6">
  <button
    onClick={() => scrollTo("overview")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    Overview
  </button>

  <button
    onClick={() => scrollTo("curriculum")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    Curriculum
  </button>

  <button
    onClick={() => scrollTo("admissions")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    Admissions
  </button>

  <button
    onClick={() => scrollTo("fees")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    Fees & Aid
  </button>

  <button
    onClick={() => scrollTo("faq")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    FAQ
  </button>

  <button
    onClick={() => scrollTo("contact")}
    className="text-cyan-400 hover:underline underline-offset-4 transition  scroll-mt-20"
  >
    Contact
  </button>
</nav>
          <button
            onClick={() => scrollTo("admissions")}
            className="bg-sky-500 hover:bg-sky-600 text-black font-bold px-4 py-2 rounded-full shadow-lg  scroll-mt-20"
          >
            Apply for MBBS →
          </button>
        </div>
      </header>

  
      <section id="overview" className="py-12  scroll-mt-20">
        <div className="max-w-6xl mx-auto  grid md:grid-cols-2 items-center">
          <div>
            <p className="text-sky-400 font-bold uppercase text-xs tracking-widest">
              MBBS Program Model
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Become a physician with a patient-first, research-aware education
            </h1>
            <p className="text-gray-400 max-w-xl">
              This website model is tailored for a medical college MBBS program.
              Swap in your college name, accreditation details, intake capacity,
              and teaching hospital info.
            </p>

             <div className="flex gap-3 mt-6 flex-wrap">
  <button
    onClick={() => scrollTo("curriculum")}
    className="px-6 py-3 rounded-full font-bold text-white
    bg-white/10 backdrop-blur-md border border-white/20
    shadow-lg transition duration-300
    hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500
    hover:text-black hover:scale-105"
  >
    View curriculum
  </button>

  <button
    onClick={() => scrollTo("admissions")}
    className="px-6 py-3 rounded-full font-bold text-white
    bg-white/10 backdrop-blur-md border border-white/20
    shadow-lg transition duration-300
    hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500
    hover:text-black hover:scale-105"
  >
    Check eligibility
  </button>
</div>

             <div className="flex gap-3 mt-6 flex-wrap">
              <span className="text-xs px-3 py-1 border border-gray-700 rounded-full">
                Clinical exposure
              </span>
              <span className="text-xs px-3 py-1 border border-gray-700 rounded-full">
                Skills labs
              </span>
              <span className="text-xs px-3 py-1 border border-gray-700 rounded-full">
                Student support
              </span>
            </div>
          </div>
<div className="bg-black border border-dashed border-gray-700 
rounded-2xl h-56 w-full max-w-md 
flex items-center justify-center text-gray-500 mx-auto">
  Campus / Hospital Image Placeholder
</div>
        </div>
      </section>

       <section className="py-12  scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-[clamp(24px,4vw,36px)] mb-2 font-bold">Why choose our MBBS</h2>
          <p className="text-gray-400 mb-6">
            Key highlights you can adapt to your college.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
  {[
    {
      title: "Accredited & outcomes-oriented",
      desc: "Curriculum aligned to current national guidelines and international best practices.",
    },
    {
      title: "Early clinical immersion",
      desc: "Progressive patient contact alongside strong pre-clinical foundations.",
    },
    {
      title: "Teaching hospital",
      desc: "Multi-specialty hospital enabling rotations across medicine, surgery, pediatrics, OB-GYN and more.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-slate-900 border border-gray-800 p-5 rounded-2xl"
    >
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

       <section id="curriculum" className="py-12 bg-gradient-to-b from-transparent to-slate-900/30  scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">Curriculum structure</h2>
          <p className="text-gray-400 mb-6">
           Customize phases, credits and assessment pattern per your regulations.
          </p>

          <div className="bg-slate-900/80 border border-gray-800 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
  
   <div className="space-y-6">
     <div>
      <h3 className="font-semibold text-lg mb-2">
        Phase I — Pre-clinical (Year 1)
      </h3>
      <ul className="text-gray-400 list-disc ml-5 space-y-1">
        <li>Anatomy, Physiology, Biochemistry</li>
        <li>Foundations in communication and ethics</li>
        <li>Skills lab: basic procedures, BLS</li>
      </ul>
    </div>

     <div>
      <h3 className="font-semibold text-lg mb-2">
        Phase II — Para-clinical (Years 2–3)
      </h3>
      <ul className="text-gray-400 list-disc ml-5 space-y-1">
        <li>Pathology, Pharmacology, Microbiology, Forensic Medicine</li>
        <li>Integrated sessions & small-group learning</li>
        <li>Early clinical exposure continues</li>
      </ul>
    </div>
  </div>

   <div className="flex flex-col justify-between">
    <div>
      <h3 className="font-semibold text-lg mb-2">
        Phase III — Clinical (Years 4–5)
      </h3>
      <ul className="text-gray-400 list-disc ml-5 space-y-1">
        <li>
          Rotations: Medicine, Surgery, Pediatrics, OB-GYN, Psychiatry,
          Orthopedics, etc.
        </li>
        <li>Electives & research/project work</li>
        <li>Internship/house-surgeonship after final exams</li>
      </ul>
    </div>

    <p className="text-gray-400 mt-4 ml-5">
      Assessment: formative + summative; OSCE/OSPE where applicable.
    </p>
  </div>
</div>
        </div>
      </section>

       <section id="admissions" className="py-12  scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">Admissions & eligibility</h2>
           <p className="text-gray-400 mb-6">
           Replace the placeholders below with your country‑specific requirements.
          </p>
         <div className="grid md:grid-cols-3 gap-4">
  {[
    {
      title: "Eligibility",
      desc: "Higher secondary (10+2) with Physics, Chemistry, Biology, and English. Minimum aggregate per regulations.",
    },
    {
      title: "Entrance",
      desc: "Entrance test as mandated by the regulator (e.g., national eligibility test). Add cut‑offs and quotas here.",
    },
    {
      title: "Intake & duration",
      desc: "Intake: [e.g., 150 students/year]. Duration: 4.5 years + 1 year internship.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-slate-900 border border-gray-800 p-5 rounded-2xl"
    >
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  ))}
  
</div>
<p className="text-gray-400 mt-4">
           Note: Always state the exact statutory requirements for your institution and year.
          </p>
        </div>
      </section>

       <section id="fees" className="py-12  scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">Fees & financial Aid</h2>
          <p className="text-gray-400 mb-6">
            Edit amounts and categories below to match your official fee structure.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
  {[
    {
      title: "Tuition (annual)",
      desc: "[Insert amount] Domestic and NRI/International slabs if applicable.",
    },
    {
      title: "Hostel & Mess",
      desc: "[Insert amount] Single/shared accommodation options.",
    },
    {
  title: "Scholarships",
  desc: (
    <>
      Merit-based and need-based schemes.{" "}
      <span
        onClick={() => scrollTo("contact")}
        className="text-cyan-400 cursor-pointer hover:underline font-medium"
      >
        Contact admissions
      </span>{" "}
      for guidance.
    </>
  ),
}
  ].map((item, i) => (
    <div
      key={i}
      className="bg-slate-900 border border-gray-800 p-5 rounded-2xl"
    >
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

       <section  className="py-12  scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">Student voices</h2>
         <div className="grid md:grid-cols-3 gap-6 justify-items-center">
  {[
    {
      name: "Aditi",
      role: "Final Year",
      message: "Strong clinical rotations and supportive faculty."
    },
    {
      name: "Rohan",
      role: "Phase II",
      message: "Skills lab made all the difference before wards."
    },
    {
      name: "Zara",
      role: "Intern",
      message: "Great mentorship for research electives."
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-slate-900 border border-gray-800 p-3 rounded-xl max-w-xs w-full"
    >
      <p className="text-gray-400 text-lg leading-relaxed">
        “{item.message}”
      </p>
      <p className="text-gray-500 text-xs mt-2">
        — {item.name}, {item.role}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>

       <section id="faq" className="py-12  scroll-mt-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>

          <details className="bg-slate-900 border border-gray-800 p-4 rounded-xl mb-3">
            <summary className="cursor-pointer font-semibold">
              What accreditations do you hold?
            </summary>
            <p className="text-gray-400 mt-2">
              List national regulatory approvals here.
            </p>
          </details>

          <details className="bg-slate-900 border border-gray-800 p-4 rounded-xl">
            <summary className="cursor-pointer font-semibold">
              What is the internship structure?
            </summary>
            <p className="text-gray-400 mt-2">
              12-month rotation across departments after final exams.
            </p>
          </details>
        </div>
      </section>

       <section id="contact" className="py-12  scroll-mt-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6">Contact admissions</h2>
          <p className="text-gray-400 mb-6">
            Hook this form to your preferred provider or backend.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We will contact you.");
            }}
            className="bg-slate-900 border border-gray-800 p-6 rounded-2xl"
          >
            <input
              placeholder="Full Name"
              className="w-full mb-4 bg-[#0b1220] border border-gray-700 p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 bg-[#0b1220] border border-gray-700 p-3 rounded-lg"
            />
            <input
              placeholder="Phone No."
              className="w-full mb-4 bg-[#0b1220] border border-gray-700 p-3 rounded-lg"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-[#0b1220] border border-gray-700 p-3 rounded-lg"
            ></textarea>

            <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-black font-bold px-6 py-3 rounded-full">
              Submit enquiry
            </button>
            <p className="text-gray-400 mt-4">
            Admissions will reply within 2 business days.
          </p>
          </form>
        </div>
      </section>

    <footer className="border-t border-gray-700 mt-10">
  <div className="max-w-[1100px] mx-auto px-5 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    
     <div className="max-w-xs">
      <div className="flex items-center gap-2 font-bold text-lg">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg"></div>
        <span>Medica College</span>
      </div>
      <p className="text-gray-400 mt-2 text-sm">
        © {new Date().getFullYear()} Medica College. All rights reserved.
      </p>
    </div>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-30 w-full md:w-auto">
      
       <div>
        <h4 className="font-semibold">MBBS</h4>
        <ul className="text-gray-400 mt-2 space-y-1">
          <li>
            <a href="#overview" className="hover:underline hover:text-blue transition">
              Overview
            </a>
          </li>
          <li>
            <a href="#curriculum" className="hover:underline hover:text-blue transition ">
              Curriculum
            </a>
          </li>
          <li>
            <a href="#admissions" className="hover:underline hover:text-blue transition">
              Admissions
            </a>
          </li>
        </ul>
      </div>

       <div>
        <h4 className="font-semibold">Campus</h4>
        <ul className="text-gray-400 mt-2 space-y-1">
          <li>
            <a href="#hospital" className="hover:underline hover:text-blue transition">
              Teaching hospital
            </a>
          </li>
          <li>
            <a href="#hostel" className="hover:underline hover:text-blue transition">
              Hostel & life
            </a>
          </li>
          <li>
            <a href="#sports" className="hover:underline hover:text-blue transition">
              Sports
            </a>
          </li>
        </ul>
      </div>

       <div>
        <h4 className="font-semibold">Legal</h4>
        <ul className="text-gray-400 mt-2 space-y-1">
          <li>
            <a href="#privacy" className="hover:underline hover:text-blue transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:underline hover:text-blue transition">
              Terms
            </a>
          </li>
          <li>
            <a href="#cookies" className="hover:underline hover:text-blue transition">
              Cookies
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>
    </div>
  );
}

export default App;

