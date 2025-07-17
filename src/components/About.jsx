export default function About() {
  return (
    <section id="about" className="py-20 h-screen max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img src="/android-chrome-192x192.png" alt="Praise Nnamonu" className="w-48 h-48 rounded-full object-cover" />
        <p className="!font-[Switzer] text-[#7a7a7a]">
          I’m a first-class Mechanical Engineering graduate (University of Ibadan) who combines design & manufacturing expertise with modern web development. I led student research on energy-efficient
          tools and industrial process design—like an auto-bit screw-gun prototype that cut tool-change time by 75%—and completed internships at Innoson Vehicle Manufacturing and Nigerian Breweries
          PLC focusing on CAD, FEA, and automation. Today, I build responsive, high-performance front ends at Creator Scale Agency and Accrux using React, TypeScript, and Next.js. My mission is to
          engineer innovative solutions—from digital twins for Industry 4.0 to AI-powered user interfaces—that drive local manufacturing forward and deliver seamless web experiences.
        </p>
      </div>
    </section>
  );
}
