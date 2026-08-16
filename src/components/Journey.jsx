import React from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones } from '../data/journey';
import { BookOpen, Code, Cpu, Rocket } from 'lucide-react';

const iconMap = { BookOpen, Code, Cpu, Rocket };

export const Journey = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-50/40 dark:bg-[#0B0F19]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 uppercase inline-block"
          >
            CAREER & LEARNING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            MY <span className="text-gradient">JOURNEY</span>
          </motion.h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Milestones and key evolution phases in software engineering and web application architecture.
          </p>
        </div>

        {/* Animated Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 -translate-x-1/2 opacity-30 dark:opacity-40" />

          <div className="space-y-12 sm:space-y-16">
            {journeyMilestones.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-violet-500 shadow-lg shadow-blue-500/20 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600" />
                  </div>

                  {/* Content Card */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-violet-500 transition-all duration-300 shadow-sm hover:shadow-glow-sm">
                      
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-blue-600 text-white shadow-xs">
                          {item.year}
                        </span>
                        <span className="text-xs font-extrabold text-blue-600 dark:text-violet-400 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>

                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                        {item.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
