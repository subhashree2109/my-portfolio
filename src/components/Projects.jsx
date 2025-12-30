import { motion } from "framer-motion";

const projects = [
  {
    title: "Club Recruitment Page",
    desc: "Built using JavaScript, Next.js, and Tailwind CSS.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Weather App",
    desc: "Real-time weather app using JavaScript and CSS.",
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
  },
  {
    title: "School Website",
    desc: "Interactive and responsive website using JavaScript and CSS.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto mt-40">
      <h2 className="text-gray-400 text-sm uppercase tracking-wide mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl
              bg-[#0f172a] border-white/10
"
          >
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover
              opacity-0 group-hover:opacity-100 transition duration-500"
            />

            <div className="relative p-6 backdrop-blur-sm">
              <h3 className="text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
