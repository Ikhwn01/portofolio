import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, Users, BookOpen, Code2, ExternalLink } from 'lucide-react';

const githubStats = {
  username: "ikhwanmuarif",
  profileUrl: "https://github.com/ikhwanmuarif",
  reposCount: 18,
  followers: 42,
  following: 35,
  contributionsThisYear: 384,
  topLanguages: [
    { name: "JavaScript", percentage: 42, color: "bg-amber-400" },
    { name: "PHP", percentage: 35, color: "bg-indigo-500" },
    { name: "HTML/CSS", percentage: 15, color: "bg-blue-500" },
    { name: "SQL", percentage: 8, color: "bg-emerald-500" },
  ]
};

// Activity Heatmap Days Mock Grid (52 weeks x 7 days)
const contributionWeeks = Array.from({ length: 28 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

const levelColors = [
  'bg-slate-200/60 dark:bg-slate-800/80',
  'bg-blue-300 dark:bg-blue-900/60',
  'bg-blue-400 dark:bg-blue-700',
  'bg-blue-600 dark:bg-blue-500',
  'bg-violet-600 dark:bg-violet-400',
];

export const GithubSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 uppercase inline-block"
          >
            OPEN SOURCE & REPOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            CODE & <span className="text-gradient">ACTIVITY</span>
          </motion.h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Live overview of GitHub contributions, repositories, and technology distribution.
          </p>
        </div>

        {/* Main Github Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 space-y-8 shadow-xl"
        >
          {/* Header Info Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-white shadow-md">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>@{githubStats.username}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-violet-400 border border-blue-500/20">
                    Active Contributor
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Software Developer & Web Application Engineer
                </p>
              </div>
            </div>

            <a
              href={githubStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs shadow-md hover:scale-105 transition-all duration-300"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Public Repos</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {githubStats.reposCount}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Users className="w-4 h-4 text-violet-500" />
                <span>Followers</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {githubStats.followers}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Code2 className="w-4 h-4 text-emerald-500" />
                <span>Contributions</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {githubStats.contributionsThisYear}+
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-1">
                <Star className="w-4 h-4 text-amber-500" />
                <span>Starred Projects</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                24
              </div>
            </div>
          </div>

          {/* Activity Heatmap Grid Visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Contribution Activity Heatmap</span>
              <span className="text-slate-400 font-mono">384 commits in 2026</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 overflow-x-auto">
              <div className="flex gap-1.5 min-w-[600px] justify-between">
                {contributionWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-xs transition-colors ${levelColors[level]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Used Languages Breakdown */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block">
              Most Used Languages:
            </span>
            <div className="h-3 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800">
              {githubStats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className={`h-full ${lang.color}`}
                  style={{ width: `${lang.percentage}%` }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400 pt-1">
              {githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span>{lang.name}</span>
                  <span className="text-slate-400 font-mono">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
