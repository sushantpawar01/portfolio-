import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

const certs = [
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    credential: 'Verified Skill Certificate',
    iconColor: '#34d399',
    badge: 'Advanced Querying & Aggregation'
  },
  {
    title: 'BigQuery Data Insights',
    issuer: 'Google Cloud',
    credential: 'Professional Certificate',
    iconColor: '#38bdf8',
    badge: 'Cloud Data Warehousing'
  },
  {
    title: 'Data Analysis with Excel',
    issuer: 'Coursera',
    credential: 'Specialization Certificate',
    iconColor: '#facc15',
    badge: 'Pivot Tables & Financial Modeling'
  },
  {
    title: 'AI for Product Management',
    issuer: 'Google Cloud',
    credential: 'Executive Certificate',
    iconColor: '#a855f7',
    badge: 'AI/ML Product Strategy'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
            <span className="text-[#a855f7]">#</span>certifications
          </h2>
          <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="code-card p-5 rounded-lg flex flex-col justify-between space-y-4 group hover:border-[#a855f7]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded bg-[#0b0c10] border border-[#26283b] flex items-center justify-center text-[#a855f7] group-hover:border-[#a855f7] transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-[#0b0c10] px-2 py-0.5 rounded border border-[#26283b]">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="font-mono text-base font-bold text-white group-hover:text-[#c084fc] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-[#26283b] flex items-center justify-between text-xs font-mono">
                <span className="text-[#a855f7] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
                <span className="text-gray-400 text-[11px] truncate max-w-[120px]">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
