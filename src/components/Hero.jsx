import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail, Code, Database, Server, Cpu, Layers } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Soft Blobs & Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/15 dark:bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
                AVAILABLE FOR PROJECTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                BUILDING DIGITAL <br />
                <span className="text-gradient">EXPERIENCES</span> THAT <br />
                MATTER.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              I design and develop modern web applications that combine clean interfaces, practical functionality, and thoughtful user experiences for forward-thinking solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                data-cursor="hover"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-blue-400 dark:hover:border-violet-500 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-violet-400" />
                <span>DOWNLOAD CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Connect:</span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com/ikhwanmuarif' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ikhwanmuarif' },
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ikhwanmuarif' },
                  { name: 'Email', icon: Mail, href: 'mailto:contact@ikhwanmuarif.dev' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      data-cursor="hover"
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-violet-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - FUTURISTIC ABSTRACT 3D ORB & GLASS CARDS */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
            >
              {/* Outer Glowing Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-violet-500/20 dark:border-violet-400/20 animate-spin-slow [animation-direction:reverse]" />
              
              {/* Central Core 3D Glowing Orb */}
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[2px] shadow-glow-lg animate-float">
                <div className="w-full h-full rounded-full bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 pointer-events-none" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/30">
                    <Code className="w-7 h-7" />
                  </div>
                  
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    Full-Stack Web
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-violet-400">
                    Developer Architecture
                  </span>
                </div>
              </div>

              {/* Floating Glass Tech Badge 1 (Top Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 -right-2 sm:right-4 px-4 py-3 rounded-2xl glass-card border border-white/80 dark:border-slate-700/60 shadow-xl flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">PHP & Laravel</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Backend Logic</div>
                </div>
              </motion.div>

              {/* Floating Glass Tech Badge 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 -left-2 sm:left-2 px-4 py-3 rounded-2xl glass-card border border-white/80 dark:border-slate-700/60 shadow-xl flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">React & Tailwind</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Frontend UI</div>
                </div>
              </motion.div>

              {/* Floating Glass Tech Badge 3 (Bottom Right) */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 right-8 px-4 py-3 rounded-2xl glass-card border border-white/80 dark:border-slate-700/60 shadow-xl flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">MySQL</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Relational DB</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
