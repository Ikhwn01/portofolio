import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Award, Flame, Lightbulb } from 'lucide-react';

const statsData = [
  { label: 'Projects', value: 10, suffix: '+', icon: Code },
  { label: 'Technologies', value: 5, suffix: '+', icon: Award },
  { label: 'Years Learning', value: 3, suffix: '+', icon: Lightbulb },
  { label: 'Passion', value: 100, suffix: '%', icon: Flame },
];

const CounterNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-extrabold text-3xl sm:text-4xl text-gradient">
      {count}{suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 uppercase inline-block"
          >
            ABOUT ME
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Crafting Digital Logic with <span className="text-gradient">Precision & Artistry</span>
          </motion.h2>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Profile Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 opacity-30 dark:opacity-40 blur-lg group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-3xl glass-card p-6 border border-white/80 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Ikhwan Muarif"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/50 dark:border-slate-700">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">IKHWAN MUARIF</div>
                    <div className="text-xs text-blue-600 dark:text-violet-400 font-semibold">Web Developer / Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Developer Bio & Stats Counter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I'm <strong className="text-slate-900 dark:text-white font-bold">Ikhwan Muarif</strong>, a dedicated Web Developer with a strong foundation in building modern, scalable, and intuitive digital applications.
              </p>
              <p>
                My development journey centers around translating business ideas into clean, functional code. Whether designing responsive frontend interfaces with <strong className="text-slate-900 dark:text-white">React</strong> and <strong className="text-slate-900 dark:text-white">Tailwind CSS</strong> or architecting robust backends with <strong className="text-slate-900 dark:text-white">PHP</strong>, <strong className="text-slate-900 dark:text-white">Laravel</strong>, and <strong className="text-slate-900 dark:text-white">MySQL</strong>, I strive for efficiency and visual polish.
              </p>
              <p>
                I am continuously learning new technologies, refining algorithm logic, and building practical systems like inventory solutions and stock prediction engines.
              </p>
            </div>

            {/* Statistics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {statsData.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 text-center hover:border-blue-400 dark:hover:border-violet-500 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-violet-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <CounterNumber target={stat.value} suffix={stat.suffix} />
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
