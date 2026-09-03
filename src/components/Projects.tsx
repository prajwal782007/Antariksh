'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Active Projects
          </h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                    {project.domain}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
