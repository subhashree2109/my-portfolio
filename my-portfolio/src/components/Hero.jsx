export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-7xl font-medium tracking-tight">
        Subhashree Satpathy
      </h1>

      <p className="mt-6 max-w-xl text-gray-400 text-lg">
        B.Tech CSE @ SRMIST | Frontend & React Developer | Honors in Quantum Computing
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="mailto:satpathysubhashree2109@gmail.com"
          className="text-gray-300 hover:text-white transition"
        >
          Email
        </a>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400">+91 6355841543</span>
      </div>
<div className="mt-8 flex gap-4">
  <a href="mailto:satpathysubhashree2109@gmail.com" className="text-gray-300 hover:text-white transition">
    Email
  </a>
  <span className="text-gray-600">|</span>
  <span className="text-gray-400">+91 6355841543</span>
</div>

<div className="mt-4 flex gap-6 justify-center">
  <a href="https://github.com/subhashree2109" target="_blank" className="text-gray-300 hover:text-white">
    GitHub
  </a>
  <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" className="text-gray-300 hover:text-white">
    LinkedIn
  </a>
</div>

      <a
        href="/Subhashree_Satpathy_Resume.pdf"
        download
        className="mt-10 px-6 py-3 rounded-full bg-white/10
        border border-white/20 hover:bg-white/20 transition"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
}
