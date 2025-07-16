export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-hero-gradient text-white text-center px-4">
      <p className="uppercase tracking-widest mb-4">Engineering & Development Portfolio</p>
      <h1 className="text-5xl font-bold mb-2">I’m Praise Nnamonu</h1>
      <p className="text-2xl mb-6">Mechanical Engineer & Front-End Developer</p>
      <a href="#projects" className="px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-700 transition">
        View Projects
      </a>
    </section>
  );
}
