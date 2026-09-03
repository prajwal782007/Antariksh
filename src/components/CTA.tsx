'use client';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Rocket size={48} className="mx-auto text-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter mb-6">
            Ready for <span className="text-accent">Liftoff?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the Antariksh DPES club and be part of the next generation of space pioneers. 
            Contribute to real missions, build cutting-edge projects, and reach for the stars.
          </p>
          
          <button className="px-10 py-4 bg-accent text-white font-bold rounded hover:bg-accent/80 transition-transform hover:scale-105 uppercase tracking-widest">
            Join the Crew
          </button>
        </motion.div>
      </div>
    </section>
  );
}
