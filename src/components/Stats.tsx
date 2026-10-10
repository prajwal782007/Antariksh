'use client';
import { motion } from 'framer-motion';
import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="px-3 sm:px-6 py-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#111116] border border-white/10 hover:border-[#FFFFFF] transition-colors p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between group"
            >
              <span className="font-mono text-[11px] text-[#FFFFFF] uppercase tracking-widest font-bold mb-3">
                METRIC // 0{index + 1}
              </span>
              <div
                className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white group-hover:text-[#FFFFFF] transition-colors mb-2 tracking-tight"
                style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-mono text-white/70 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
