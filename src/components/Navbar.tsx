'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Create a blurred background effect when scrolling
  const backgroundY = useTransform(scrollY, [0, 50], ["rgba(5, 5, 10, 0)", "rgba(5, 5, 10, 0.8)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  const navLinks = [
    { name: 'Missions', href: '#missions' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Events', href: '#events' },
    { name: 'Domains', href: '#domains' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full z-50 border-b border-white/5"
      style={{
        backgroundColor: backgroundY,
        backdropFilter: backdropBlur,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center">
                {/* Fallback text if logo.png is not present */}
                <span className="text-accent font-heading font-bold tracking-widest text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-widest uppercase">
                Antariksh
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 uppercase tracking-wider"
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
