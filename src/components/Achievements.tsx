'use client';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="px-3 sm:px-6 py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Curvy Orange Showcase Container */}
        <div className="bg-[#FF5500] text-black rounded-[36px] sm:rounded-[52px] p-6 sm:p-12 md:p-16 border-4 border-black shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b-2 border-black/20">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-black font-black block mb-2">
                HONORS & RECOGNITION
              </span>
              <h2
                className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-black uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
              >
                LEGACY & MILESTONES
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-black/80 max-w-md mt-4 sm:mt-0 font-bold">
              National awards, competitions won, and historic breakthroughs achieved by Antariksh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-black text-white p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] border-2 border-black flex flex-col justify-between group hover:scale-[1.02] transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black text-[#FF5500] uppercase tracking-wider bg-[#FF5500]/15 px-3 py-1 rounded-full border border-[#FF5500]/30">
                      {achievement.date}
                    </span>
                    <Trophy size={20} className="text-[#FF5500]" />
                  </div>
                  <h3
                    className="text-2xl font-display font-black text-white mb-3 uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-bold text-white/50 uppercase">
                  <span>AWARD VERIFIED</span>
                  <span className="text-[#FF5500]">0{index + 1} // 03</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
