'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { num: '1', title: 'MISSION CONTROL', href: '#missions', subtitle: 'ACTIVE TELEMETRY' },
    { num: '2', title: 'ACTIVE PROJECTS', href: '#projects', subtitle: 'RESEARCH & HARDWARE' },
    { num: '3', title: 'HALL OF FAME', href: '#achievements', subtitle: 'AWARDS & MILESTONES' },
    { num: '4', title: 'UPCOMING EVENTS', href: '#events', subtitle: 'WORKSHOPS & LAUNCHES' },
    { num: '5', title: 'CORE DOMAINS', href: '#domains', subtitle: 'SPECIALIZED DIVISIONS' },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 pt-28 pb-16 md:pt-36 md:pb-24 bg-transparent">
      {/* High-Impact Orange Card Container with Curvy Corners & Generous Space */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FF5500] text-black rounded-[40px] sm:rounded-[56px] md:rounded-[72px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(255,85,0,0.35)] p-8 sm:p-14 md:p-20 min-h-[85vh] md:min-h-[90vh] flex flex-col justify-between border-4 border-black selection:bg-black selection:text-[#FF5500]"
      >
        {/* Top Header Row inside the Orange Frame */}
        <div className="flex items-center justify-between border-b-2 border-black/20 pb-6 mb-8 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3.5 h-3.5 bg-black rounded-full animate-ping" />
            <span className="font-mono text-xs sm:text-sm font-black tracking-widest uppercase">
              DPES ANTARIKSH // MISSION CONTROL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline font-mono text-xs uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full border-2 border-black/30">
              SOUNDING ROCKETS • SATELLITES • AVIONICS
            </span>
            <Link
              href="#projects"
              className="group p-2.5 rounded-full hover:bg-black hover:text-[#FF5500] transition-colors border-2 border-black/20 hover:border-black"
              aria-label="Explore Projects"
            >
              <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Content: Giant 'A' Letter on Left + Spacious Stacked Marvel Typo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center flex-grow py-6 md:py-10">
          {/* Giant 'A' Glyph - Inspired by Marvel & Poster aesthetics */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start select-none">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative"
            >
              <span
                className="font-marvel block text-[170px] sm:text-[240px] md:text-[320px] lg:text-[380px] xl:text-[440px] font-black text-black leading-none tracking-tight drop-shadow-md transform hover:scale-105 transition-transform duration-500"
                style={{ fontFamily: 'var(--font-bebas), Impact, sans-serif' }}
              >
                A
              </span>
              <div className="absolute bottom-4 left-4 font-mono text-xs sm:text-sm font-bold bg-black text-[#FF5500] px-3 py-1 rounded-full tracking-widest shadow-lg">
                EST. 2024 // DPES
              </div>
            </motion.div>
          </div>

          {/* Numbered Editorial Typography Navigation Stack with spacious padding */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-4 sm:gap-8 py-2 hover:translate-x-3 transition-all duration-300"
                >
                  <span className="font-mono font-black text-xl sm:text-3xl md:text-4xl text-black/50 group-hover:text-black">
                    0{item.num}
                  </span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black/15 group-hover:border-black pb-2.5 transition-colors">
                    <h2
                      className="font-marvel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wide text-black group-hover:tracking-wider transition-all duration-300"
                      style={{ fontFamily: 'var(--font-bebas), Impact, sans-serif' }}
                    >
                      {item.title}
                    </h2>
                    <span className="font-mono text-xs sm:text-sm font-black text-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.subtitle} ↗
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Row inside Orange Card */}
        <div className="border-t-2 border-black/20 pt-6 mt-8 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono font-bold">
          <div className="flex items-center gap-6">
            <span className="text-black bg-black/10 px-3 py-1.5 rounded-full font-black">ANTARIKSH SPACE CLUB</span>
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
                Instagram ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-black inline-block animate-pulse" />
              <span className="tracking-widest font-black">PUNE, IN {time || '12:00:00'}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
