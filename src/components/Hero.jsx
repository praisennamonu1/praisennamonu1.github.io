export default function Hero() {
  return (
    <section id="hero" className="h-screen bg-[#0a0a0a] bg-[url(/assets/hero-bg-praise.png)] md:bg-size-[auto_700px] bg-size-[auto_500px] bg-no-repeat bg-cover md:bg-fixed bg-bottom px-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-white text-center md:mt-30 ">
        <p className="uppercase tracking-widest mb-4 mt-20">Engineering & Development Portfolio</p>
        <h2 className="text-5xl bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text font-bold mb-2">I’m Praise Nnamonu</h2>
        <p className="text-2xl mb-6">Mechanical Engineer & Front-End Developer</p>
        <a href="#projects" className="bg-[#ffffff0D] px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-700 transition">
          View Projects
        </a>
      </div>
    </section>
  );
}
