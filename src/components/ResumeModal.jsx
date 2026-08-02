import React from 'react';
import { X, Download, FileText, ExternalLink, Printer, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#12131c] border border-[#a855f7]/50 rounded-lg overflow-hidden shadow-2xl font-mono text-gray-200 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26283b] bg-[#0b0c10]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#a855f7]" />
            <span className="text-xs text-[#c084fc] font-bold">sushant_pawar_resume.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/assets/resume.pdf"
              download="Sushant_Pawar_Resume.pdf"
              className="px-3 py-1.5 rounded border border-[#a855f7] bg-[#a855f7]/10 text-xs text-[#c084fc] hover:bg-[#a855f7] hover:text-white transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-[#26283b]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Canvas */}
        <div className="p-8 overflow-y-auto space-y-8 bg-[#0b0c10] print:bg-white print:text-black">
          
          {/* Header Contact Block */}
          <div className="text-center border-b border-[#26283b] pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-wide">SUSHANT PAWAR</h1>
            <p className="text-xs text-[#c084fc] font-semibold">Data Analyst | Aspiring Product Manager</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 pt-2">
              <span>📞 +91-9759620881</span>
              <span>✉️ sushantakki11@gmail.com</span>
              <span>💼 linkedin.com/in/sushantpawar11</span>
              <span>🐙 github.com/sushantpawar01</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs space-y-1 sm:space-y-0">
              <div>
                <p className="font-bold text-white">ABV-Indian Institute of Information Technology and Management</p>
                <p className="text-gray-400 italic">Integrated B.Tech (Information Technology) + MBA</p>
              </div>
              <div className="sm:text-right text-gray-400">
                <p>Gwalior, Madhya Pradesh</p>
                <p className="text-[#c084fc]">2022 – 2027</p>
              </div>
            </div>
            <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
              <li>Dual degree program integrating Information Technology and Business Management.</li>
              <li>Focus Areas: Product Strategy, Data Analytics, Process Optimization, Data-driven Decision Making.</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Code2 className="w-4 h-4" /> Technical & Product Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div><strong className="text-white">Programming:</strong> C/C++, Python, JavaScript</div>
              <div><strong className="text-white">Data & BI:</strong> SQL (Advanced), Power BI, Tableau, DAX</div>
              <div><strong className="text-white">Web Development:</strong> React.js, Node.js, Express.js, REST APIs, HTML/CSS, Tailwind</div>
              <div><strong className="text-white">Databases & Cloud:</strong> MongoDB, MySQL, AWS, BigQuery</div>
              <div><strong className="text-white">Product Management:</strong> Product Strategy, Roadmap Planning, AI for PM, KPI Analysis</div>
              <div><strong className="text-white">Tools:</strong> Excel, Git, GitHub, Docker, Figma, LaTeX, Notion</div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Briefcase className="w-4 h-4" /> Key Projects
            </h2>
            
            <div className="space-y-1 text-xs">
              <p className="font-bold text-white">Customized Recommendation System <span className="text-gray-400 font-normal">| Python, Machine Learning, RFM Analysis</span></p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Designed ML-based recommendation engine using customer purchase history data.</li>
                <li>Applied RFM (Recency, Frequency, Monetary) clustering to segment user cohorts and boost retention.</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs">
              <p className="font-bold text-white">Credit Card Weekly Status Dashboard <span className="text-gray-400 font-normal">| SQL, Power BI, DAX, Data Analysis</span></p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Designed a dual-view Power BI dashboard using SQL & DAX to monitor KPIs across 667K transactions.</li>
                <li>Identified 40-50 age group and "Blue" cardholders (83% revenue share) as primary revenue drivers.</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs">
              <p className="font-bold text-white">Mutual Fund Analysis & Scoring Model <span className="text-gray-400 font-normal">| Python, Excel, Power BI</span></p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Built evaluation system analyzing 2500+ schemes to isolate top 30 optimal investment options.</li>
                <li>Developed custom scoring algorithm combining 3-year returns, expense ratio, fund age, and consistency.</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Briefcase className="w-4 h-4" /> Experience & Leadership
            </h2>
            <div className="text-xs space-y-2">
              <div>
                <p className="font-bold text-white">Content Writer — Manchtantra IIITM Theatre Club <span className="text-[#c084fc] font-normal">(Jun 2023 – Present)</span></p>
                <p className="text-gray-300">Contributed to socially driven street plays and represented institute at Thomso'22 (IIT Roorkee).</p>
              </div>
              <div>
                <p className="font-bold text-white">Reporting Member — Uthaan Recreational Club <span className="text-[#c084fc] font-normal">(Apr 2023 – Nov 2023)</span></p>
                <p className="text-gray-300">Coordinated event documentation and reporting to promote student engagement.</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Award className="w-4 h-4" /> Certifications
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
              <div>• SQL (Advanced) — HackerRank</div>
              <div>• BigQuery Data Insights — Google Cloud</div>
              <div>• Data Analysis with Excel — Coursera</div>
              <div>• AI for Product Management — Google Cloud</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#26283b] bg-[#0b0c10]">
          <span className="text-xs text-gray-400">Sushant Pawar Resume</span>
          <a
            href="/assets/resume.pdf"
            download="Sushant_Pawar_Resume.pdf"
            className="px-4 py-2 rounded bg-[#a855f7] text-white font-bold text-xs hover:bg-[#c084fc] transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download PDF File
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
