'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.4)", "rgba(8, 8, 10, 0.95)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(8px)", "blur(16px)"]);

  const navLinks = [
    { name: 'Missions', href: '#missions' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Events', href: '#events' },
    { name: 'Domains', href: '#domains' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-3 sm:px-6 pt-3"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <motion.div
        style={{
          backgroundColor: backgroundY,
          backdropFilter: backdropBlur,
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-white/15 rounded-full shadow-2xl transition-all"
      >
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo.jpeg" 
                alt="Antariksh Logo" 
                width={36} 
                height={36} 
                className="w-9 h-9 rounded-full object-cover border-2 border-[#FF5500] group-hover:scale-105 transition-transform" 
              />
              <span className="font-display text-xl sm:text-2xl tracking-wider uppercase text-white group-hover:text-[#FF5500] transition-colors">
                ANTARIKSH
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-bold text-white/80 hover:text-[#FF5500] transition-colors uppercase tracking-widest relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#FF5500] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#projects"
              className="px-4 py-1.5 bg-[#FF5500] text-black font-mono font-black text-xs uppercase tracking-wider rounded-full hover:bg-white transition-colors"
            >
              Explore ↗
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FF5500] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-[#111116] border border-white/15 rounded-3xl p-4 shadow-2xl"
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-white hover:bg-[#FF5500] hover:text-black uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
