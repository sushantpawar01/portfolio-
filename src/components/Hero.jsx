import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-dot-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Greeting & Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#a855f7]/30 bg-[#12131c]/80 text-[#c084fc] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
              <span>Available for Hire & Internships</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-mono text-white leading-tight">
              Hi, I'm a <span className="text-gradient">Data Analyst</span> and <span className="text-gradient">aspiring Product Manager</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed max-w-2xl">
              I'm currently into <span className="text-[#c084fc] font-semibold">SQL</span>, <span className="text-[#c084fc] font-semibold">Python</span>, <span className="text-[#c084fc] font-semibold">Power BI</span>, and turning raw data into strategic product decisions.
            </p>

            {/* CTAs and Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="font-mono text-sm px-6 py-3 rounded border border-[#a855f7] bg-[#a855f7]/10 text-white font-semibold hover:bg-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2 group"
              >
                <span>Scroll Down</span>
                <ArrowDown className="w-4 h-4 text-[#c084fc] group-hover:text-white group-hover:translate-y-1 transition-all" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sushantpawar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-[#26283b] bg-[#12131c] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sushantpawar11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-[#26283b] bg-[#12131c] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sushantakki11@gmail.com"
                  className="p-3 rounded border border-[#26283b] bg-[#12131c] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Status Chip */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Decorative Geometric Wireframe Box */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#a855f7]/40 rounded-sm pointer-events-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#a855f7]/20 rounded-sm pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative border border-[#26283b] bg-[#12131c] p-2 rounded shadow-2xl overflow-hidden">
                <img
                  src="/assets/portrait.png"
                  alt="Sushant Pawar Portrait"
                  className="w-full h-auto object-cover rounded bg-[#0b0c10]"
                />

                {/* Corner Matrix Decoration */}
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-dot-grid-dense opacity-40" />
              </div>

              {/* Status Chip */}
              <div className="mt-4 border border-[#26283b] bg-[#12131c] px-4 py-2.5 rounded text-xs font-mono flex items-center gap-2.5 text-gray-300">
                <span className="w-3 h-3 bg-[#a855f7] border border-[#c084fc] inline-block shadow-[0_0_8px_#a855f7]" />
                <span>Currently pursuing Integrated B.Tech + MBA @ ABV-IIITM Gwalior</span>
              </div>
            </div>
          </div>

        </div>

        {/* Personal Pull-Quote Block (Reference Aesthetic) */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative border border-[#26283b] bg-[#12131c]/60 p-6 sm:p-8 rounded text-center">
            <span className="absolute -top-5 left-6 text-4xl text-[#a855f7] font-mono leading-none select-none bg-[#0b0c10] px-2">“</span>
            <p className="font-mono text-gray-300 text-sm sm:text-base italic leading-relaxed">
              Control can sometimes be an illusion. But sometimes you need data-driven insights to gain control.
            </p>
            <div className="mt-3 text-right font-mono text-xs text-[#c084fc]">
              — Sushant Pawar
            </div>
            <span className="absolute -bottom-5 right-6 text-4xl text-[#a855f7] font-mono leading-none select-none bg-[#0b0c10] px-2">”</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
