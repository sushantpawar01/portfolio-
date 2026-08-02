import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[#26283b] bg-[#0b0c10] py-10 font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#26283b]/60">
          
          {/* Left Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              <span className="font-bold text-lg text-white">Sushant<span className="text-[#a855f7]">_</span></span>
              <span className="text-xs text-gray-500 font-normal">sushantakki11@gmail.com</span>
            </div>
            <p className="text-xs text-gray-400">
              Data Analyst & Aspiring Product Manager | ABV-IIITM Gwalior
            </p>
          </div>

          {/* Media Icons */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Media</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sushantpawar01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#12131c] border border-[#26283b] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sushantpawar11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#12131c] border border-[#26283b] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sushantakki11@gmail.com"
                className="p-2 rounded bg-[#12131c] border border-[#26283b] text-gray-400 hover:text-[#c084fc] hover:border-[#a855f7] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-gray-500">
          © Copyright 2026. Made by <span className="text-gray-300">Sushant Pawar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
