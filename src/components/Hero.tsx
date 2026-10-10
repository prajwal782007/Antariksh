'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/images/theme.jpeg')] bg-cover bg-center bg-no-repeat"
      />
      {/* Overlay to ensure text readability and create atmosphere */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* Main Content Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-[0.15em] mb-6 drop-shadow-lg">
            ANTARIKSH MISSION
          </h1>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-10 tracking-wide max-w-xl">
            DPES Antariksh is a next-generation student-led aerospace initiative capable of innovating the future, especially reaching those who are not yet connected, with reliable and affordable advanced rocketry and spacecraft technologies.
          </p>
          
          <Link
            href="#projects"
            className="inline-block px-10 py-3.5 border-2 border-white text-white font-mono text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 uppercase"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Footer Area of Hero */}
      <div className="absolute bottom-10 left-0 w-full z-10 px-6 sm:px-12 md:px-20 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-white/60 tracking-widest uppercase gap-4">
        <div className="flex gap-4">
          <span>Social Media</span>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div className="text-center">
          antariksh designs, manufactures and launches advanced rockets and spacecraft
        </div>
        <div className="hidden md:block opacity-0">
          {/* Spacer to balance flex-between */}
          Placeholder
        </div>
      </div>
    </section>
  );
}
