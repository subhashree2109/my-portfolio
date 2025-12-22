import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import FloatingSection from "./components/FloatingSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative  bg-[#020617] text-white px-6">

      <CursorGlow />

      <Hero />

      {/* ABOUT + EDUCATION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mt-40">
        <FloatingSection title="About">
          I am a Computer Science Engineering student at SRMIST with a strong
          interest in frontend development, React ecosystems, and clean UI.
          Currently pursuing Honors in Quantum Computing.
        </FloatingSection>

        <FloatingSection title="Education">
          <strong>SRMIST KTR</strong><br />
          B.Tech in Computer Science Engineering<br />
          GPA: <strong>8.98 / 10</strong> (till 4th semester)
        </FloatingSection>
      </div>

      {/* EXPERIENCE */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mt-32">
        <FloatingSection title="Experience">
          <strong>Nirmaya</strong><br />
          <span className="text-gray-400 text-sm">
            Jun 2023 – May 2027 | Dec 2024 – Present
          </span>
          <p className="mt-2">
            Collaborated with a team to develop a medical services application
            using React Native.
          </p>

          <div className="mt-6">
            <strong>Shell–AICTE Internship</strong>
            <p className="mt-1">
              Trained AI models for garbage classification.
            </p>
          </div>
        </FloatingSection>

        <FloatingSection title="Positions of Responsibility">
          <ul className="space-y-3">
            <li>
              <strong>ACM W Hackathon – Event Coordinator</strong><br />
              Managed logistics, registrations, vendors, and scheduling.
            </li>
            <li>
              <strong>Cherry+ Network – Technical Manager</strong><br />
              Handled technical solutions, website updates, and events.
            </li>
            <li>
              <strong>CodeNex Club – Events Head</strong><br />
              Directed technical events and workshops.
            </li>
          </ul>
        </FloatingSection>
      </div>

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
