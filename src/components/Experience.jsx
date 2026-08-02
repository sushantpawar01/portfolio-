import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Content Writer',
    organization: 'Manchtantra IIITM Theatre Club',
    location: 'Gwalior, Madhya Pradesh',
    period: 'Jun 2023 – Present',
    highlights: [
      'Contributed to socially driven street plays and represented the institute at prestigious cultural events like Thomso\'22 (IIT Roorkee).',
      'Collaborated with cross-functional creative teams on scriptwriting, event scheduling, narrative structure, and stage execution.',
      'Refined communication and storytelling skills to engage diverse audiences effectively.'
    ]
  },
  {
    role: 'Reporting Member',
    organization: 'Uthaan – Recreational Club, IIITM',
    location: 'Gwalior, Madhya Pradesh',
    period: 'Apr 2023 – Nov 2023',
    highlights: [
      'Created engaging content and coordinated comprehensive post-event reporting to boost student participation.',
      'Ensured meticulous documentation, status tracking, and clear cross-club communications across 10+ campus events.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
            <span className="text-[#a855f7]">#</span>experience
          </h2>
          <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
        </div>

        {/* Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="code-card p-6 sm:p-8 rounded-lg relative overflow-hidden border-l-4 border-l-[#a855f7] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#26283b] pb-4">
                <div>
                  <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#a855f7]" />
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-sm font-mono text-[#c084fc] mt-1">{exp.organization}</p>
                </div>
                
                <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 space-y-1">
                  <span className="flex items-center gap-1.5 text-[#a855f7]">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-gray-300">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#a855f7] font-bold mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
