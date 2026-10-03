'use client';
import { motion } from 'framer-motion';
import { events } from '@/data/events';
import { CalendarDays, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="px-3 sm:px-6 py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b-2 border-white/15 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5500] font-bold block mb-2">
              SCHEDULE & OPERATIONS
            </span>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
            >
              UPCOMING EVENTS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md mt-4 sm:mt-0 font-medium">
            Propulsion test sessions, satellite reception workshops, and rocketry showcases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row bg-[#111116] border border-white/15 rounded-[32px] overflow-hidden group hover:border-[#FF5500] transition-colors"
            >
              <div className="bg-[#FF5500] text-black p-6 sm:p-8 flex flex-col justify-center items-center sm:w-36 border-b sm:border-b-0 sm:border-r-2 border-black">
                <span
                  className="text-4xl sm:text-5xl font-display font-black leading-none"
                  style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
                >
                  {new Date(event.date).getDate().toString().padStart(2, '0')}
                </span>
                <span className="text-xs font-mono font-black uppercase tracking-widest mt-1">
                  {new Date(event.date).toLocaleString('default', { month: 'short' })}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1">
                <h3
                  className="text-2xl font-display font-black text-white mb-2 group-hover:text-[#FF5500] transition-colors uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
                >
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70 mb-4 font-medium">
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-[#FF5500]" /> {event.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#FF5500]" /> {event.location}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-medium mb-4">
                  {event.description}
                </p>
                <div className="flex justify-end">
                  <span className="font-mono text-xs font-bold text-[#FF5500] uppercase tracking-wider group-hover:underline">
                    RSVP DETAILS ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
