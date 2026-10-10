'use client';
import { motion } from 'framer-motion';
import { missions } from '@/data/missions';
import { Target, Calendar } from 'lucide-react';

export default function Missions() {
  return (
    <section id="missions" className="px-3 sm:px-6 py-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Industrial Typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b-2 border-white/15 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-bold block mb-2">
              TELEMETRY & TIMELINES
            </span>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
            >
              MISSION CONTROL
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md mt-4 sm:mt-0 font-medium">
            Active orbital trajectories, sounding rocket development, and ground station telemetry.
          </p>
        </div>

        <div className="space-y-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 sm:p-10 rounded-[32px] sm:rounded-[44px] border-2 transition-all group relative overflow-hidden ${
                index % 2 === 0
                  ? 'bg-[#111116] border-white/15 hover:border-[#FFFFFF]'
                  : 'bg-[#FFFFFF] text-black border-black'
              }`}
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-mono font-black uppercase rounded-full ${
                        index % 2 === 0
                          ? 'bg-[#FFFFFF] text-black'
                          : 'bg-black text-[#FFFFFF]'
                      }`}
                    >
                      MISSION // 0{index + 1}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        index % 2 === 0 ? 'text-[#FFFFFF]' : 'text-black/80'
                      }`}
                    >
                      ACTIVE TELEMETRY
                    </span>
                  </div>

                  <h3
                    className={`text-3xl sm:text-5xl font-display font-black tracking-tight uppercase mb-3 ${
                      index % 2 === 0 ? 'text-white' : 'text-black'
                    }`}
                    style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
                  >
                    {mission.name}
                  </h3>

                  <p
                    className={`text-sm sm:text-base max-w-3xl mb-6 font-medium ${
                      index % 2 === 0 ? 'text-white/70' : 'text-black/85'
                    }`}
                  >
                    {mission.objective}
                  </p>

                  <div
                    className={`flex flex-wrap items-center gap-4 text-xs font-mono font-bold uppercase ${
                      index % 2 === 0 ? 'text-white/60' : 'text-black/80'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className={index % 2 === 0 ? 'text-[#FFFFFF]' : 'text-black'} />
                      LAUNCH: {mission.launchDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Target size={14} className={index % 2 === 0 ? 'text-[#FFFFFF]' : 'text-black'} />
                      PAYLOAD VERIFIED
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-80">
                  <div
                    className={`flex justify-between text-xs font-mono font-bold mb-2 uppercase ${
                      index % 2 === 0 ? 'text-white/80' : 'text-black'
                    }`}
                  >
                    <span>TRAJECTORY PROGRESS</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div
                    className={`h-3 w-full rounded-full overflow-hidden p-0.5 border ${
                      index % 2 === 0
                        ? 'bg-black border-white/20'
                        : 'bg-black/20 border-black/30'
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mission.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                      className={`h-full rounded-full ${
                        index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-black'
                      }`}
                    />
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
