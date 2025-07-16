const experience = [
  { period: "2025 – Present", role: "Front-End Engineer", company: "Accrux (Remote)" },
  { period: "2024 – Present", role: "Front-End Developer", company: "Creator Scale Agency" },
  { period: "Jun – Aug 2023", role: "Software Engineer Intern", company: "CodeDay Labs (Remote)" },
  { period: "Jan – May 2024", role: "Engineering Intern", company: "Nigerian Breweries PLC" },
  { period: "Jun – Aug 2023", role: "Automobile Engineer Intern", company: "Innoson Vehicle Manufacturing" },
];
export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <div key={i} className="flex">
            <div className="w-32 font-bold">{exp.period}</div>
            <div>
              <p className="font-semibold">{exp.role}</p>
              <p className="text-gray-600">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
