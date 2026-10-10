'use client';
import { motion } from 'framer-motion';
import { domains } from '@/data/domains';
import * as LucideIcons from 'lucide-react';

export default function Domains() {
  return (
    <section id="domains" className="px-3 sm:px-6 py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b-2 border-white/15 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-bold block mb-2">
              SPECIALIZED DIVISIONS
            </span>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
            >
              TECHNICAL DOMAINS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md mt-4 sm:mt-0 font-medium">
            Multi-disciplinary engineering teams powering sounding rockets, satellites, and communications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const Icon = (LucideIcons as any)[domain.iconName] || LucideIcons.Wrench;
            
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-[#111116] border border-white/15 p-8 rounded-[32px] text-left group hover:border-[#FFFFFF] transition-all hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-black border-2 border-white/15 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#FFFFFF] group-hover:bg-[#FFFFFF] text-[#FFFFFF] group-hover:text-black transition-all">
                    <Icon size={28} />
                  </div>
                  <span className="font-mono text-[11px] text-[#FFFFFF] uppercase font-bold tracking-widest block mb-1">
                    DIVISION // 0{index + 1}
                  </span>
                  <h3
                    className="text-2xl font-display font-black text-white mb-3 uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
                  >
                    {domain.name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    {domain.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-white/40">
                  <span>SUBSYSTEM</span>
                  <span className="text-[#FFFFFF] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
