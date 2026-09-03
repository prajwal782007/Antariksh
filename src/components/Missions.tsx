'use client';
import { motion } from 'framer-motion';
import { missions } from '@/data/missions';
import { Target, Calendar } from 'lucide-react';

export default function Missions() {
  return (
    <section id="missions" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Mission Control
          </h2>
          <div className="h-1 w-20 bg-accent rounded mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Live telemetry and progress tracking for our active aerospace missions.
          </p>
        </div>

        <div className="space-y-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background border border-white/10 p-6 md:p-8 rounded relative overflow-hidden group"
            >
              {/* Decorative scanline */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNCIgeTI9IjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pointer-events-none opacity-50"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading font-bold text-white tracking-wide uppercase">
                      {mission.name}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-accent border border-accent rounded bg-accent/10">ACTIVE</span>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-3xl mb-4">
                    {mission.objective}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-accent" /> T-Minus: {mission.launchDate}</span>
                    <span className="flex items-center gap-1"><Target size={14} className="text-accent" /> Payload Ready</span>
                  </div>
                </div>

                <div className="w-full md:w-1/3">
                  <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                    <span>PROGRESS</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mission.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-accent relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
