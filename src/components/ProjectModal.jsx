import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, Lightbulb, Rocket, Maximize2 } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  if (!project) return null;

  const screenshots = project.screenshots || [project.image];
  const caseStudy = project.caseStudy || {};

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md"
        />

        {/* Main Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-violet-400 border border-blue-500/20">
                PROJECT {project.index}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="hover"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 sm:p-8 space-y-10">
            
            {/* Title & Actions Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                  {project.subtitle || project.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* SCREENSHOT GALLERY */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg group">
                <img
                  src={screenshots[activeImageIndex]}
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover object-center"
                />

                {/* Prev & Next Controls */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      data-cursor="hover"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/60 text-white backdrop-blur-md hover:bg-slate-950/80 transition-all opacity-80 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      data-cursor="hover"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/60 text-white backdrop-blur-md hover:bg-slate-950/80 transition-all opacity-80 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Fullscreen Trigger */}
                <button
                  onClick={() => setIsFullscreenImage(true)}
                  data-cursor="hover"
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/60 text-white backdrop-blur-md hover:bg-slate-950/80 transition-all opacity-80 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-semibold px-3"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Fullscreen</span>
                </button>
              </div>

              {/* Thumbnails */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {screenshots.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === i
                          ? 'border-blue-600 dark:border-violet-500 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CASE STUDY CONTENT SECTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-sm uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.problem || 'Identified user pain points and operational bottlenecks.'}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-extrabold text-sm uppercase">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.solution || 'Engineered custom application workflow to streamline performance.'}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {caseStudy.keyFeatures && (
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Key Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-violet-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Development Process & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2">Development Process</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {caseStudy.process || 'Wireframing, database schema design, iterative development, and testing.'}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                  <Rocket className="w-4 h-4 text-violet-500" />
                  <span>Results & Impact</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {caseStudy.results || 'Optimized operational efficiency and user satisfaction.'}
                </p>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Technologies Used:</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* FULLSCREEN IMAGE MODAL OVERLAY */}
        {isFullscreenImage && (
          <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setIsFullscreenImage(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={screenshots[activeImageIndex]}
              alt="Fullscreen screenshot"
              className="max-w-full max-h-[95vh] object-contain rounded-xl"
            />
          </div>
        )}

      </div>
    </AnimatePresence>
  );
};
