import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Logo Branding */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/20">
              IM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                IKHWAN MUARIF
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 font-semibold uppercase">
                Software Developer
              </span>
            </div>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-4 font-mono text-xs text-slate-400 flex items-center gap-2">
            <span>INITIALIZING EXPERIENCE</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">{Math.min(progress, 100)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
