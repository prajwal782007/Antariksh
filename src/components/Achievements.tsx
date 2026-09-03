'use client';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Legacy & Achievements
          </h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-12 relative pl-8 md:pl-0 md:w-1/2 md:even:ml-auto md:even:pl-12 md:odd:pr-12 md:odd:text-right"
            >
              <div className={`absolute top-0 left-0 md:left-auto md:right-auto w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-[25px] md:-translate-x-0 ${index % 2 === 0 ? 'md:-right-[10px]' : 'md:-left-[10px]'}`}></div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded hover:bg-white/10 transition-colors">
                <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Trophy size={18} className="text-accent" />
                  <span className="text-xs font-mono text-muted-foreground uppercase">{achievement.date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
