const projects = [
  {
    title: "Auto-Bit Screw-Gun Prototype",
    desc: "Developed a hand-powered screw-gun with GUI & FDM-printed chuck; cut bit-change time by 75% and validated with FEA.",
    link: "#",
  },
  {
    title: "Digital Twin Concept (R&D)",
    desc: "Designed a conceptual digital twin for a manufacturing line to monitor pump performance and predict maintenance needs.",
    link: "#",
  },
  {
    title: "Stock Trading Platform",
    desc: "Built the front end of a React+Vite trading MVP at Accrux; real-time WebSocket feeds, <8ms render latency, 500+ beta users.",
    link: "http://appstaging.accrux.co/",
  },
  {
    title: "Boredom Jar Web App",
    desc: "React/Tailwind random activity generator with REST API; 1,200+ users and 4.8/5 community rating.",
    link: "https://github.com/praisennamonu1/boredom-jar",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700 mb-4">{p.desc}</p>
            {p.link && (
              <a href={p.link} className="text-blue-600 hover:underline">
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
