import Link from "next/link";

const experience = [
  { period: "2025 – Present", role: "Front-End Engineer", company: "Accrux (Remote)", logo: "/assets/accrux_icon.svg", url: "https://appstaging.accrux.co/" },
  { period: "2024 – Present", role: "Front-End Developer", company: "Creator Scale Agency", logo: "/assets/site-logo-creator-scale-agency.svg", url: "https://creatorscaleagency.com" },
  { period: "Jun – Aug 2023", role: "Software Engineer Intern", company: "CodeDay Labs (Remote)", logo:"/assets/codeday.svg", url:"https://codeday.org/" },
  { period: "Jan – May 2024", role: "Engineering Intern", company: "Nigerian Breweries PLC", logo: "/assets/nigerian_breweries.png", url: "https://www.nbplc.com/" },
  { period: "Jun – Aug 2023", role: "Automobile Engineer Intern", company: "Innoson Vehicle Manufacturing", logo: "https://www.innosonvehicles.com/wp-content/uploads/2018/04/innoson-ivm-logo.png", url: "https://www.innosonvehicles.com/" },
];
export default function Experience() {
  return (
    <section id="experience" className="h-screen flex flex-col justify-center py-20 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <div key={i} className="flex">
            <div className="w-32 font-bold">{exp.period}</div>
            <div className="space-y-2">
              <p className="font-semibold">{exp.role}</p>
              <Link href={exp.url} target="_blank">
                <p className="flex items-center justify-center !text-[#7a7a7a]">
                  <img className="w-auto h-4 mr-2" src={exp.logo} /> {exp.company}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
