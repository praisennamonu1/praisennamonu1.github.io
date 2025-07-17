const education = [
  { year: "2025", degree: "B.Sc. Mechanical Engineering (First Class)", school: "University of Ibadan", src: "/files/ui-transcript.pdf" },
  { year: "2024", degree: "Higher Diploma in Computer Science (90 ECTS)", school: "Woolf University / Kibo School", src: "/files/kibo-transcript.pdf" },
];
export default function Education() {
  return (
    <section id="education" className="bg-[url(/assets/education-bg-praise.png)] bg-fixed min-h-screen py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Education</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map((e, i) => (
          <div key={i} className="flex items-start">
            <div className="w-24 font-bold">{e.year}</div>
            <div>
              <p className="font-semibold">{e.degree}</p>
              <p className="text-[#7a7a7a]">{e.school}</p>
              <embed src={e.src} width="100%" height="400px" type="application/pdf" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
