import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Filter } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'recommendation-system',
    title: 'Customized Recommendation System',
    tech: 'Python · Machine Learning · RFM Analysis',
    stack: ['Python', 'Scikit-Learn', 'RFM Analysis', 'K-Means Clustering', 'Pandas'],
    image: '/assets/rec_system.png',
    description: 'ML-based recommendation engine utilizing customer behavior & purchase history to perform user segmentation via RFM analysis.',
    fullDescription: 'Designed and deployed an end-to-end Machine Learning recommendation system tailored for e-commerce and retail transaction datasets. The system segments customers into distinct behavioral cohorts using Recency, Frequency, and Monetary (RFM) modeling combined with unsupervised K-Means clustering.',
    highlights: [
      'Engineered RFM metrics from raw transactional logs to calculate customer lifetime value scores.',
      'Applied K-Means clustering & elbow method analysis to segment high-value vs. churn-risk user groups.',
      'Improved personalized product recommendation accuracy and targeting retention strategies.'
    ],
    githubLink: 'https://github.com/sushantpawar01/Customized-Recommendation-System-The-Intelligent-customer-segmentation-Approach-.git'
  },
  {
    id: 'credit-card-dashboard',
    title: 'Credit Card Weekly Status Dashboard',
    tech: 'SQL · Power BI · DAX · Data Analysis',
    stack: ['SQL (Advanced)', 'Power BI', 'DAX', 'Data Analysis', 'Data Modeling'],
    image: '/assets/credit_card.png',
    description: 'Dual-view interactive Power BI dashboard tracking weekly KPIs across 667K transactions to identify core revenue drivers.',
    fullDescription: 'Constructed an enterprise-grade dual-view Power BI executive dashboard connected to a SQL database. Tracked weekly revenue trends, transaction volume, interest earnings, and customer risk metrics across 667,000+ credit card transactions.',
    highlights: [
      'Processed & normalized 667K+ financial transaction records using complex SQL queries and DAX formulas.',
      'Discovered that the 40-50 age group and "Blue" cardholders generated 83% of total portfolio revenue.',
      'Proposed targeted marketing initiatives for underperforming digital channels and underpenetrated regions.'
    ],
    githubLink: 'https://github.com/sushantpawar01/CREDIT-CARD-WEEKLY-STATUS-DASHBOARD.git'
  },
  {
    id: 'mutual-fund-analysis',
    title: 'Mutual Fund Analysis & Scoring Model',
    tech: 'Python (Pandas, Sklearn) · Excel · Power BI',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Power BI', 'Financial Analytics'],
    image: '/assets/mutual_fund.png',
    description: 'Custom scoring model analyzing 2,500+ mutual fund schemes to isolate top 30 high-return, low-risk investment options.',
    fullDescription: 'Developed a quantitative mutual fund evaluation system evaluating over 2,500 Indian mutual fund schemes across equity, debt, and hybrid categories. Built a multi-criteria scoring algorithm weighing 3-year CAGR returns, expense ratios, fund age, Sharpe ratio, and return consistency.',
    highlights: [
      'Analyzed 2,500+ fund schemes using Pandas and Scikit-Learn data processing pipelines.',
      'Developed a custom risk-reward scoring algorithm to surface the top 30 optimal investment options.',
      'Created an interactive Power BI dashboard with dynamic sliders and risk spectrum filters for investors.'
    ],
    githubLink: 'https://github.com/sushantpawar01/Mutual-Fund-Analysis.git'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Line Divider */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
              <span className="text-[#a855f7]">#</span>projects
            </h2>
            <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
          </div>
          <a
            href="https://github.com/sushantpawar01"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#c084fc] hover:text-white transition-colors shrink-0 ml-4"
          >
            <span>View all repos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="code-card rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Preview Image */}
                <div className="relative h-48 overflow-hidden bg-[#0b0c10] border-b border-[#26283b]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0b0c10]/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  {/* Tech stack tagline */}
                  <div className="text-xs font-mono text-[#a855f7] truncate">
                    {project.tech}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-mono text-white group-hover:text-[#c084fc] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-mono text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 px-3 rounded border border-[#a855f7]/50 bg-[#a855f7]/10 font-mono text-xs text-[#c084fc] hover:bg-[#a855f7] hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Details</span>
                  <span className="text-xs">&lt;&rarr;&gt;</span>
                </button>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded border border-[#26283b] bg-[#12131c] font-mono text-xs text-gray-400 hover:text-white hover:border-[#a855f7] transition-all flex items-center justify-center"
                  aria-label="GitHub Repo"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
