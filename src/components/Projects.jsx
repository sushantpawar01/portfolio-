import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'recommendation-system',
    title: 'Customized Recommendation System',
    tech: 'Python · K-Means · RFM Analysis · Scikit-learn',
    stack: ['Python', 'K-Means', 'RFM Analysis', 'Scikit-learn', 'Pandas'],
    image: '/assets/rec_system.png',
    description: 'Developed an RFM model and K-Means clustering to categorize target users and deliver personalized e-commerce recommendations.',
    fullDescription: 'Developed and implemented an end-to-end recommendation engine utilizing customer behavior and transactional data to categorize high-value cohorts and optimize marketing strategies through machine learning.',
    highlights: [
      'Developed and implemented an RFM model to categorize high-value customers, facilitating personalized e-commerce marketing strategies and resulting in a 20% increase in engagement.',
      'Trained K-Means clustering algorithms to categorize target users, boosting personalized recommendation precision by 22%.'
    ],
    githubLink: 'https://github.com/sushantpawar01/Customized-Recommendation-System-The-Intelligent-customer-segmentation-Approach-.git'
  },
  {
    id: 'restaurant-automation-platform',
    title: 'Restaurant Automation Platform',
    tech: 'JavaScript · HTML · CSS · Git',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'DOM Manipulation'],
    image: '/assets/restaurant_platform.png',
    description: 'Engineered a digital ordering web application simulating end-to-end e-commerce cart-to-checkout workflows.',
    fullDescription: 'Engineered an interactive web application with a responsive user interface designed for automated digital ordering, featuring dynamic DOM manipulation and order workflow management.',
    highlights: [
      'Engineered a web application with an engaging user interface for automated digital ordering, simulating end-to-end e-commerce cart-to-checkout workflows.',
      'Streamlined workflow systems using automated event listeners and dynamic DOM manipulation, accelerating digital order processing capabilities.'
    ],
    githubLink: 'https://github.com/sushantpawar01/Restaurant-Automation-Website-'
  },
  {
    id: 'customer-behavior-analytics-dashboard',
    title: 'Customer Behavior Analytics Dashboard',
    tech: 'Python · SQL · Power BI',
    stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Data Analytics'],
    image: '/assets/customer_analytics.png',
    description: 'Big-data analytics pipeline and Power BI dashboard processing transaction data to track weekly revenue KPIs and growth drivers.',
    fullDescription: 'Developed a big-data analytics pipeline to process mock sales records and visualize purchasing trends, empowering business stakeholders to make data-driven supply chain and inventory decisions.',
    highlights: [
      'Developed a big-data analytics pipeline to process mock sales data and visualize purchasing trends, empowering business users to make data-driven supply chain decisions.',
      'Executed complex SQL queries and DAX functions to analyze high-volume transaction records, evaluating weekly revenue KPIs and regional growth drivers.'
    ],
    githubLink: 'https://github.com/sushantpawar01/Customer_behavior_analysis'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2 shrink-0">
              <span className="text-[#a855f7]">#</span>projects
            </h2>
            <div className="h-px bg-gradient-to-r from-[#a855f7]/60 via-[#26283b] to-transparent w-full" />
          </div>
          <a
            href="https://github.com/sushantpawar01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#c084fc] hover:text-white transition-colors shrink-0 ml-4"
          >
            <span>View all repos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="code-card rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#0b0c10] border-b border-[#26283b]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0b0c10]/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-xs font-mono text-[#a855f7] truncate">
                    {project.tech}
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white group-hover:text-[#c084fc] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

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
