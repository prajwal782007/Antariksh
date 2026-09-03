'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        
        {/* Orbital rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full border-dashed"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tighter mb-6">
            Pioneering the <br /> <span className="text-accent">Final Frontier</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            We are DPES Antariksh. Engineering the future of aerospace, one mission at a time.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <a href="#missions" className="px-8 py-4 bg-accent text-white font-medium rounded hover:bg-accent/80 transition-colors uppercase tracking-wider text-sm">
              Explore Missions
            </a>
            <a href="#projects" className="px-8 py-4 bg-white/10 text-white font-medium rounded border border-white/10 hover:bg-white/20 transition-colors uppercase tracking-wider text-sm backdrop-blur-sm">
              Our Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
