'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Active Projects
          </h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/60 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-85" />
                
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white/80 border border-white/10">
                  Click to inspect ↗
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    {project.domain}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase font-medium">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Frame for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
                    Project Dossier // {selectedProject.domain}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto px-6 py-6 md:px-8 space-y-8 custom-scrollbar">
                {/* Hero section inside modal */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider bg-accent/15 text-accent px-3 py-1 rounded-full border border-accent/25">
                        {selectedProject.domain}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider bg-white/5 text-white/80 px-3 py-1 rounded-full border border-white/10">
                        {selectedProject.status}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-wide">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.details?.subtitle && (
                      <p className="text-accent/90 text-sm font-medium">
                        {selectedProject.details.subtitle}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="md:col-span-5 aspect-video md:aspect-square relative rounded-xl overflow-hidden border border-white/15 shadow-inner">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Metadata Grid */}
                {selectedProject.details?.metadata && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 bg-white/[0.02] border border-white/10 rounded-xl p-4">
                    {selectedProject.details.metadata.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground block font-mono">
                          {item.label}
                        </span>
                        <span className="text-xs font-medium text-white block">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* About Section */}
                {selectedProject.details?.about && (
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      About the Project / Event
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                      {selectedProject.details.about}
                    </p>
                  </div>
                )}

                {/* Achievement Highlight Card */}
                {selectedProject.details?.achievement && (
                  <div className="bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border-l-4 border-accent p-5 rounded-r-xl space-y-2">
                    <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                      <span>🏆</span>
                      <span>{selectedProject.details.achievement.highlight}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {selectedProject.details.achievement.details}
                    </p>
                  </div>
                )}

                {/* Previous Experimental Work (if any) */}
                {selectedProject.details?.previousWork && (
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      Previous Experimental Test Campaign
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.details.previousWork.overview}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.details.previousWork.items.map((item, i) => (
                        <div
                          key={i}
                          className={`p-4 rounded-xl border ${
                            item.type === 'success'
                              ? 'bg-emerald-500/10 border-emerald-500/30'
                              : 'bg-amber-500/10 border-amber-500/30'
                          } space-y-1.5`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.type === 'success' ? '⚡' : '⚠️'}</span>
                            <span className="text-sm font-semibold text-white">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Objectives & Learning Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  {selectedProject.details?.objectives && (
                    <div className="space-y-3 bg-white/[0.02] border border-white/10 rounded-xl p-5">
                      <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                        <span className="text-accent text-lg">🎯</span> Key Objectives
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.objectives.map((obj, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.details?.learningOutcomes && (
                    <div className="space-y-3 bg-white/[0.02] border border-white/10 rounded-xl p-5">
                      <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                        <span className="text-accent text-lg">💡</span> Learning & Expected Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.learningOutcomes.map((out, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Testing Program Protocol (e.g. for Rocket Propulsion) */}
                {selectedProject.details?.testingProgram && (
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      Testing Methodology & Program
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.details.testingProgram.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/10"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/40 text-accent font-mono text-xs flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Long Term Vision / Pathway */}
                {selectedProject.details?.longTermVision && (
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      Sounding Rocket Roadmap & Vision
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.details.longTermVision.overview}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2">
                      {selectedProject.details.longTermVision.pathway.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <span className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg text-xs font-mono text-accent font-medium">
                            {step}
                          </span>
                          {idx < selectedProject.details!.longTermVision!.pathway.length - 1 && (
                            <span className="text-white/40 text-sm">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Signal Path / Transmission Line */}
                {selectedProject.details?.transmissionLine && (
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      Transmission Line & Signal Path
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.details.transmissionLine.overview}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2">
                      {selectedProject.details.transmissionLine.signalPath.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <span className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg text-xs font-mono text-accent font-medium">
                            {step}
                          </span>
                          {idx < selectedProject.details!.transmissionLine!.signalPath.length - 1 && (
                            <span className="text-white/40 text-sm">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Antenna Measurement & RF Analysis */}
                {selectedProject.details?.measurementAnalysis && (
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    <h4 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-accent rounded-full" />
                      Antenna Measurement & RF Analysis
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.details.measurementAnalysis.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent font-bold mt-0.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Conclusion */}
                {selectedProject.details?.conclusion && (
                  <div className="border-t border-white/10 pt-6 space-y-2">
                    <h4 className="text-base font-heading font-bold text-white">Conclusion</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.details.conclusion}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Bar */}
              <div className="flex justify-end items-center px-6 py-4 border-t border-white/10 bg-white/[0.02]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

