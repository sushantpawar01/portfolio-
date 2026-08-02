import React from 'react';
import { Database, LineChart, Cpu, Code, Server, Cloud, Layers, Terminal } from 'lucide-react';

const skillCategories = [
  {
    category: 'Data & Analytics / BI',
    icon: LineChart,
    skills: [
      { name: 'SQL (Advanced)', level: 'Expert' },
      { name: 'Power BI', level: 'Advanced' },
      { name: 'Tableau', level: 'Intermediate' },
      { name: 'DAX', level: 'Advanced' },
      { name: 'Data Analytics', level: 'Advanced' },
      { name: 'RFM Analysis', level: 'Intermediate' },
    ]
  },
  {
    category: 'Product Management',
    icon: Cpu,
    skills: [
      { name: 'Product Strategy', level: 'Core' },
      { name: 'Roadmap Planning', level: 'Core' },
      { name: 'AI for Product', level: 'Certified' },
      { name: 'KPI Analysis', level: 'Core' },
      { name: 'Market Research', level: 'Core' },
    ]
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'C / C++', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ]
  },
  {
    category: 'Web Development',
    icon: Layers,
    skills: [
      { name: 'React.js', level: 'Proficient' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'HTML5 / CSS3', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'Bootstrap', level: 'Intermediate' },
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'MySQL', level: 'Advanced' },
    ]
  },
  {
    category: 'Cloud & Analyst Tools',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 'Basics' },
      { name: 'BigQuery', level: 'Certified' },
      { name: 'Microsoft Excel', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Proficient' },
      { name: 'Docker', level: 'Basics' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'LaTeX', level: 'Intermediate' },
      { name: 'Notion / Slack', level: 'Proficient' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
            <span className="text-[#a855f7]">#</span>skills
          </h2>
          <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="code-card p-6 rounded-lg space-y-4 relative group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-[#26283b] pb-3">
                  <div className="p-2 rounded bg-[#0b0c10] border border-[#a855f7]/40 text-[#a855f7]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono text-base font-bold text-white group-hover:text-[#c084fc] transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded border border-[#26283b] bg-[#0b0c10]/90 text-xs font-mono text-gray-300 hover:border-[#a855f7] hover:text-white hover:bg-[#a855f7]/10 transition-all flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
