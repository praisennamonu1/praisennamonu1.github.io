export default function Hero() {
  return (
    <section id="hero" className="h-screen bg-[url(/assets/hero-bg-praise.png)] bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden relative">
      <p className="uppercase tracking-widest mb-4">Engineering & Development Portfolio</p>
      <h1 className="text-5xl !bg-clip-text font-bold mb-2">I’m Praise Nnamonu</h1>
      <p className="text-2xl mb-6">Mechanical Engineer & Front-End Developer</p>
      <a href="#projects" className="px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-700 transition">
        View Projects
      </a>
    </section>
  );
}
