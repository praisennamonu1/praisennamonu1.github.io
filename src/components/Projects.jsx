const projects = [
  {
    image: "/assets/project_rcfui.png",
    title: "RCFUI Website",
    desc: "Rebuilt the Redeemed Christian Fellowship UI website with React; improved Lighthouse performance by 34 points and tripled organic traffic in four months.",
    link: "https://rcfui.org",
    imageClass: "bg-linear-65 from-purple-500 to-pink-500",
  },
  {
    image: "/assets/project_accrux.png",
    title: "Stock Trading Platform",
    desc: "Built the front end of a React+Vite trading Minimum Viable Product at Accrux; real-time WebSocket feeds, <8ms render latency, 500+ beta users.",
    link: "http://appstaging.accrux.co/",
    imageClass: "bg-linear-to-br from-green-500 to-teal-500",
  },
  {
    image: "/assets/project_creator_scale.png",
    title: "Creator Scale Agency Website",
    desc: "Led front-end development; optimized page load speed by 45% and enhanced user engagement, contributing to 20% increase in client inquiries.",
    link: "https://creatorscaleagency.com",
    imageClass: "bg-linear-to-br from-yellow-500 to-orange-500",
  },
  {
    image: "/assets/project_travel_planner.png",
    title: "Travel Planner App",
    desc: "Full-stack React application that plans trips via external APIs; secure JWT authentication and Firebase media storage; live demo with 200+ users.",
    link: "https://preno-travel.onrender.com/",
    imageClass: "bg-linear-to-br from-blue-500 to-cyan-500",
  },
  // {
  //   title: "Boredom Jar Web App (Ongoing)",
  //   desc: "React/Tailwind random activity generator with REST API; Most Boring App in the world",
  //   link: "https://github.com/praisennamonu1/boredom_jar",
  //   imageClass: "w-full h-48 object-cover rounded-lg mb-4",
  // },
  // {
  //   title: "Auto-Bit Screw-Gun Prototype",
  //   desc: "Developed a hand-powered screw-gun with GUI & FDM-printed chuck; cut bit-change time by 75% and validated with FEA.",
  //   link: "#",
  // },
];
export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#ffffff0D] border border-[#] rounded-lg p-6 hover:shadow-md hover:shadow-[#7a7a7a] transition">
            {p.image && <img src={p.image} alt={p.title} className={`${p.imageClass} w-full h-70 object-cover rounded-lg mb-4`} />}
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-[#7a7a7a] mb-4">{p.desc}</p>
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
