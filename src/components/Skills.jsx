import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories, marqueeTechnologies } from '../data/skills';
import { Code, Palette, FileCode, Atom, Wind, Server, Layers, Cpu, Database, GitBranch, Github, Terminal, HardDrive, Figma } from 'lucide-react';

const iconMap = {
  Code, Palette, FileCode, Atom, Wind, Server, Layers, Cpu, Database, GitBranch, Github, Terminal, HardDrive, Figma
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 uppercase inline-block"
          >
            TECH STACK & TOOLS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            TECHNOLOGIES I <span className="text-gradient">WORK WITH</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A specialized toolkit of modern languages, frameworks, databases, and software design platforms.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-blue-400/80 dark:hover:border-violet-500/80 transition-all duration-300 shadow-sm hover:shadow-glow-sm"
            >
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-violet-400" />
                  {cat.category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {cat.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      data-cursor="hover"
                      className="group p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 hover:border-blue-500 dark:hover:border-violet-500 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3 shadow-xs"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-violet-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center justify-between gap-2">
                          <span>{skill.name}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Horizontal Marquee Banner */}
        <div className="mt-16 relative overflow-hidden py-4 bg-gradient-to-r from-blue-600/5 via-violet-600/10 to-blue-600/5 dark:from-blue-900/20 dark:to-violet-900/20 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <div className="flex w-[200%] animate-marquee whitespace-nowrap">
            {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 mx-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-violet-400 animate-pulse" />
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 tracking-wider">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
