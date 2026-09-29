import React from 'react';
import { X, Download, FileText, ExternalLink, GraduationCap, Briefcase, Award, Code2, Trophy } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#12131c] border border-[#a855f7]/50 rounded-lg overflow-hidden shadow-2xl font-mono text-gray-200 max-h-[92vh] flex flex-col">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26283b] bg-[#0b0c10]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#a855f7]" />
            <span className="text-xs text-[#c084fc] font-bold">sushant_resume.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/assets/resume.pdf"
              download="Sushant_Resume.pdf"
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

        <div className="p-8 overflow-y-auto space-y-6 bg-[#0b0c10] print:bg-white print:text-black">
          
          <div className="text-center border-b border-[#26283b] pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-wide">SUSHANT</h1>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 pt-2">
              <span>📞 +91-9759620881</span>
              <span>✉️ sushantakkill@gmail.com</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">
                Portfolio <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">
                Notion Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs space-y-1 sm:space-y-0">
              <div>
                <p className="font-bold text-white">ABV-Indian Institute of Information Technology and Management (IIITM)</p>
                <p className="text-gray-400 italic">Integrated B.Tech in Information Technology + MBA (Business Analytics)</p>
              </div>
              <div className="sm:text-right text-gray-400">
                <p>Gwalior, MP</p>
                <p className="text-[#c084fc]">2022 – 2027 | <span className="text-gray-300">CGPA: 7.14</span></p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-gray-300">
              <div><strong className="text-white">Programming Languages:</strong> Python, C++, JavaScript, SQL, DAX</div>
              <div><strong className="text-white">Data & Analytics:</strong> Power BI, Tableau, Pandas, NumPy, Scikit-learn, MS Excel (Power Query, Pivot Tables)</div>
              <div><strong className="text-white">Databases:</strong> MySQL, BigQuery, MongoDB</div>
              <div><strong className="text-white">Cloud, Tools & Methodologies:</strong> AWS, Docker, Git, GitHub, REST APIs, Linux, Agile Methodology</div>
              <div><strong className="text-white">Course Work:</strong> Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Statistics, Applied Machine Learning, Big Data Analytics</div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Briefcase className="w-4 h-4" /> Experience
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row justify-between text-xs">
                <div>
                  <p className="font-bold text-white">Ping Digital Broadcast</p>
                  <p className="text-[#c084fc] italic">Data & Analytics Representative Intern</p>
                </div>
                <div className="sm:text-right text-gray-400">
                  <p>Remote</p>
                  <p>Mar 2026 – Aug 2026</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Constructed tracking spreadsheets and SQL databases to monitor daily registration trends across 1,200+ trial sign-ups.</li>
                <li>Cleaned and validated user activation logs, eliminating duplicate entries and ensuring 99.5% reporting data accuracy.</li>
                <li>Performed cohort analysis on trial usage patterns, identifying key adoption bottlenecks to inform weekly engagement strategy.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Code2 className="w-4 h-4" /> Projects
            </h2>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <p className="font-bold text-white">Customized Recommendation System <span className="text-gray-400 font-normal">| Python, K-Means, RFM Analysis, Scikit-learn</span></p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Developed and implemented an RFM model to categorize high-value customers, facilitating personalized e-commerce marketing strategies and resulting in a 20% increase in engagement.</li>
                <li>Trained K-Means clustering algorithms to categorize target users, boosting personalized recommendation precision by 22%.</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <p className="font-bold text-white">Restaurant Automation Platform <span className="text-gray-400 font-normal">| JavaScript, HTML, CSS, Git</span></p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Engineered a web application with an engaging user interface for automated digital ordering, simulating end-to-end e-commerce cart-to-checkout workflows.</li>
                <li>Streamlined workflow systems using automated event listeners and dynamic DOM manipulation, accelerating digital order processing capabilities.</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <p className="font-bold text-white">Customer Behavior Analytics Dashboard <span className="text-gray-400 font-normal">| Python, SQL, Power BI</span></p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#c084fc] hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Developed a big-data analytics pipeline to process mock sales data and visualize purchasing trends, empowering business users to make data-driven supply chain decisions.</li>
                <li>Executed complex SQL queries and DAX functions to analyze high-volume transaction records, evaluating weekly revenue KPIs and regional growth drivers.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Award className="w-4 h-4" /> Certifications & Accolades
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5">
              <li>Secured Global Rank 160 in LeetCode Biweekly Contest 184 by solving all 4 problems, achieving a 2014 contest rating.</li>
              <li>Selected as a Google Gemini Ambassador, representing and promoting Google Gemini's AI tools and initiatives within the student community.</li>
              <li>Earned the SQL (Advanced) certification, demonstrating proficiency in complex queries, joins, subqueries, and data analysis.</li>
              <li>Earned certification Derive Insights from BigQuery Data demonstrating skills in querying, analyzing, and deriving insights from data using Google BigQuery.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Trophy className="w-4 h-4" /> Coding Profiles & Activity
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
              <li>Leetcode (<span className="text-[#c084fc]">sushiiAkkii11</span>) with Knight Level, HackerRank (<span className="text-[#c084fc]">sushantakkill</span>) with Silver Level.</li>
              <li>Solved 500+ DSA and SQL problems across different coding platforms.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#a855f7] uppercase tracking-wider flex items-center gap-2 border-b border-[#26283b] pb-1">
              <Briefcase className="w-4 h-4" /> Leadership & Contributions
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
              <li><strong className="text-white">Manchtantra Theatre Club:</strong> Represented IIIT Gwalior at Thomso 22, IIT Roorkee.</li>
              <li><strong className="text-white">Uthaan Recreational Club:</strong> Led event reporting and content creation.</li>
            </ul>
          </div>

        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#26283b] bg-[#0b0c10]">
          <span className="text-xs text-gray-400">Sushant Resume</span>
          <a
            href="/assets/resume.pdf"
            download="Sushant_Resume.pdf"
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
