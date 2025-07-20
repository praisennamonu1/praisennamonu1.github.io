"use client";
import { useState } from "react";

const education = [
  { year: "2025", degree: "B.Sc. Mechanical Engineering (First Class)", school: "University of Ibadan", src: "/files/ui-transcript.pdf" },
  { year: "2024", degree: "Higher Diploma in Computer Science (90 ECTS)", school: "Woolf University / Kibo School", src: "/files/kibo-transcript.pdf" },
];
export default function Education() {
  const [visible, setVisible] = useState(() => education.map(() => false));
  const toggle = (idx) => setVisible((v) => v.map((show, i) => (i === idx ? !show : show)));

  return (
    <section id="education" className="md:min-h-screen bg-[#0a0a0a] bg-[url(/assets/experience-bg-praise.png)] md:bg-size-[auto_550px] bg-size-[auto_500px] bg-no-repeat bg-cover md:bg-bottom-right flex flex-col justify-center md:py-0 py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Education</h2>
      <div className="space-y-8 max-w-3xl mx-auto text-white">
        {education.map((e, i) => (
          <div key={i} className="flex items-start">
            <div className="w-24 font-bold">{e.year}</div>
            <div>
              <p className="font-semibold">{e.degree}</p>
              <p className="text-[#7a7a7a] mb-2">{e.school}</p>

              <button className="text-blue-400 underline mb-4 cursor-pointer" onClick={() => toggle(i)}>
                {visible[i] ? "Hide Transcript" : "View Transcript"}
              </button>

              {visible[i] && (
                <div className="mb-6">
                  <iframe src={e.src} title={`Transcript ${i}`} width="100%" height="400" className="border" />
                  <p className="mt-2 text-sm">
                    Having trouble viewing?{" "}
                    <a href={e.src} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                      open the PDF in a new tab
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
