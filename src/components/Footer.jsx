import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#080C14] border-t border-slate-200/80 dark:border-slate-800/80 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/60 dark:border-slate-800/60">
          {/* Left Branding */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              IKHWAN MUARIF
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Building digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-3">
            {[
              { name: 'GitHub', icon: Github, href: 'https://github.com/ikhwanmuarif' },
              { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ikhwanmuarif' },
              { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ikhwanmuarif' },
              { name: 'Email', icon: Mail, href: 'mailto:contact@ikhwanmuarif.dev' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-violet-400 border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              data-cursor="hover"
              className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          © 2026 Ikhwan Muarif. All rights reserved. Designed with Light Futuristic aesthetic.
        </div>

      </div>
    </footer>
  );
};
