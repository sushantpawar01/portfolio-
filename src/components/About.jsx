import React from 'react';
import { FileDown, GraduationCap, Compass, Target, Sparkles, BookOpen } from 'lucide-react';

const About = ({ onOpenResume }) => {
  return (
    <section id="about-me" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
            <span className="text-[#a855f7]">#</span>about-me
          </h2>
          <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Text & Academic Context */}
          <div className="lg:col-span-7 space-y-6 font-mono">
            
            <p className="text-base text-gray-300 leading-relaxed">
              Hello, I'm <span className="text-white font-bold">Sushant Pawar</span>!
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              I am an <span className="text-[#c084fc]">Integrated B.Tech (Information Technology) + MBA</span> student at <span className="text-white">ABV-Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior</span> (2022–2027).
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              My core passion lies at the intersection of <span className="text-[#c084fc]">Data Analytics</span>, <span className="text-[#c084fc]">Product Strategy</span>, and <span className="text-[#c084fc]">Process Optimization</span>. I bridge technical data pipelines (SQL, Python, Power BI) with high-level product decision-making to build user-centric and growth-driven solutions.
            </p>

            {/* Academic Highlights Box */}
            <div className="border border-[#26283b] bg-[#12131c] p-5 rounded-lg space-y-3">
              <h3 className="text-xs text-[#a855f7] uppercase tracking-wider font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Academic Focus Areas
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                  <span>Product Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                  <span>Data Analytics & BI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                  <span>Process Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                  <span>Data-Driven Decision Making</span>
                </div>
              </div>
            </div>

            {/* Resume CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="font-mono text-sm px-6 py-3 rounded border border-[#a855f7] bg-[#a855f7]/10 text-[#c084fc] hover:bg-[#a855f7] hover:text-white transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <span>Resume</span>
                <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Graphic & Quote */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md code-card p-6 rounded-xl space-y-6 text-center">
              
              {/* Graphic Icon Header */}
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#a855f7] bg-[#0b0c10] flex items-center justify-center text-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <Compass className="w-10 h-10 animate-spin-slow" />
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-lg font-bold text-white">Sushant Pawar</h4>
                <p className="font-mono text-xs text-[#c084fc]">ABV-IIITM Gwalior (2022–2027)</p>
              </div>

              {/* Stat Chips */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#26283b] text-center font-mono">
                <div className="p-2 bg-[#0b0c10] rounded border border-[#26283b]">
                  <span className="block text-lg font-bold text-[#a855f7]">3+</span>
                  <span className="text-[10px] text-gray-400">Flagship Projects</span>
                </div>
                <div className="p-2 bg-[#0b0c10] rounded border border-[#26283b]">
                  <span className="block text-lg font-bold text-[#a855f7]">4+</span>
                  <span className="text-[10px] text-gray-400">Certifications</span>
                </div>
                <div className="p-2 bg-[#0b0c10] rounded border border-[#26283b]">
                  <span className="block text-lg font-bold text-[#a855f7]">B.Tech+MBA</span>
                  <span className="text-[10px] text-gray-400">Dual Degree</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
