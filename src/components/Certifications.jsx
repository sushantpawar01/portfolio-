import React from 'react';
import { Award, ShieldCheck, Trophy, Sparkles, Terminal, Code2, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Global Rank 160 (Biweekly Contest 184)',
    issuer: 'LeetCode',
    credential: 'Contest Rating: 2014',
    badge: 'Solved 4/4 Problems'
  },
  {
    title: 'Google Gemini Ambassador',
    issuer: 'Google',
    credential: 'Student Ambassador',
    badge: 'AI Tools & Initiatives'
  },
  {
    title: 'Derive Insights from BigQuery Data',
    issuer: 'Google Cloud',
    credential: 'Skill Badge',
    badge: 'BigQuery Data Analytics'
  },
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    credential: 'Verified Skill Certificate',
    badge: 'Advanced Querying & Aggregation'
  },
  {
    title: 'BigQuery Data Insights',
    issuer: 'Google Cloud',
    credential: 'Professional Certificate',
    badge: 'Cloud Data Warehousing'
  },
  {
    title: 'Data Analysis with Excel',
    issuer: 'Coursera',
    credential: 'Specialization Certificate',
    badge: 'Pivot Tables & Financial Modeling'
  },
  {
    title: 'AI for Product Management',
    issuer: 'Google Cloud',
    credential: 'Executive Certificate',
    badge: 'AI/ML Product Strategy'
  }
];

const codingProfiles = [
  {
    platform: 'LeetCode',
    handle: 'sushiiAkkii11',
    rank: 'Knight Level (Rating: 2014)',
    highlight: 'Global Rank 160 (Biweekly Contest 184)',
    link: 'https://leetcode.com/u/sushiiAkkii11/'
  },
  {
    platform: 'HackerRank',
    handle: 'sushantakkill',
    rank: 'Silver Level',
    highlight: 'SQL (Advanced) Certified',
    link: 'https://www.hackerrank.com/profile/sushantakkill'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Coding Profiles & Activity */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
              <span className="text-[#a855f7]">#</span>coding-profiles
            </h2>
            <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
          </div>

          {/* Metric Highlights Banner */}
          <div className="p-4 rounded-lg bg-[#12131c] border border-[#26283b] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3 text-gray-300">
              <Terminal className="w-5 h-5 text-[#a855f7] shrink-0" />
              <span>
                Solved <strong className="text-white font-bold">500+</strong> DSA and SQL problems across coding platforms.
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#c084fc]">
              <Trophy className="w-4 h-4 text-[#a855f7]" />
              <span>Contest Rating: 2014 (Top Tier)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {codingProfiles.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="code-card p-5 rounded-lg flex items-center justify-between border border-[#26283b] bg-[#12131c] group hover:border-[#a855f7] transition-all font-mono"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#a855f7]" />
                    <span className="font-bold text-white text-base group-hover:text-[#c084fc] transition-colors">
                      {item.platform}
                    </span>
                    <span className="text-[11px] text-gray-400 bg-[#0b0c10] px-2 py-0.5 rounded border border-[#26283b]">
                      @{item.handle}
                    </span>
                  </div>
                  <p className="text-xs text-[#a855f7] font-semibold">{item.rank}</p>
                  <p className="text-[11px] text-gray-400">{item.highlight}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Certifications & Accolades */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
              <span className="text-[#a855f7]">#</span>certifications-and-accolades
            </h2>
            <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certs.map((cert, idx) => (
              <div
                key={idx}
                className="code-card p-5 rounded-lg flex flex-col justify-between space-y-4 group hover:border-[#a855f7] transition-all"
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
                    <ShieldCheck className="w-3.5 h-3.5" /> {cert.credential}
                  </span>
                  <span className="text-gray-400 text-[11px] truncate max-w-[120px]">
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
