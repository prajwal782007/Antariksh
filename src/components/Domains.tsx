'use client';
import { motion } from 'framer-motion';
import { domains } from '@/data/domains';
import * as LucideIcons from 'lucide-react';

export default function Domains() {
  return (
    <section id="domains" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Technical Domains
          </h2>
          <div className="h-1 w-20 bg-accent rounded mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The core areas of expertise driving our aerospace innovations.
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
                className="bg-white/5 border border-white/10 p-8 rounded text-center group hover:bg-white/10 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto bg-background border border-white/20 rounded-full flex items-center justify-center mb-6 group-hover:border-accent group-hover:text-accent transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3 uppercase tracking-wide">{domain.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {domain.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
