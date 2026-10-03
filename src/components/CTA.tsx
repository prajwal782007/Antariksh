'use client';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-3 sm:px-6 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FF5500] text-black rounded-[36px] sm:rounded-[52px] p-8 sm:p-14 md:p-20 text-center border-4 border-black overflow-hidden shadow-2xl flex flex-col items-center justify-center"
        >
          {/* Subtle background industrial grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-[#FF5500] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Rocket size={32} />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest font-black text-black bg-black/10 px-3.5 py-1 rounded-full mb-4">
              RECRUITMENT & COLLABORATION
            </span>

            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-black uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
            >
              READY FOR LIFTOFF?
            </h2>

            <p className="text-base sm:text-lg text-black/85 mb-8 font-medium max-w-xl">
              Join the Antariksh DPES club and engineer the next generation of sounding rockets, satellite antennas, and space hardware.
            </p>

            <a
              href="mailto:contact@antariksh.club"
              className="px-10 py-4 bg-black text-[#FF5500] hover:bg-white hover:text-black font-display font-black text-lg sm:text-xl rounded-full transition-all uppercase tracking-wider hover:scale-105 shadow-2xl"
              style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
            >
              JOIN THE CREW ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
