'use client';
import { motion } from 'framer-motion';
import { events } from '@/data/events';
import { CalendarDays, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            Upcoming Events
          </h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row bg-background border border-white/10 rounded overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="bg-white/5 p-6 flex flex-col justify-center items-center md:w-32 border-b md:border-b-0 md:border-r border-white/10">
                <span className="text-3xl font-heading font-bold text-white">
                  {new Date(event.date).getDate().toString().padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                  {new Date(event.date).toLocaleString('default', { month: 'short' })}
                </span>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><CalendarDays size={14} /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
