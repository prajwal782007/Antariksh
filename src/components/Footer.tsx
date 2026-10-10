import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-3 sm:px-6 pb-8 bg-black">
      <div className="max-w-7xl mx-auto bg-[#111116] border border-white/15 rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] text-black font-display font-black text-xl flex items-center justify-center">
                A
              </div>
              <span
                className="font-display font-black text-2xl tracking-wider uppercase text-white"
                style={{ fontFamily: 'var(--font-anton), Impact, sans-serif' }}
              >
                ANTARIKSH DPES
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed font-medium">
              The official Space & Technology Club of Dhole Patil College of Engineering, Pune. Dedicated to rocketry, satellites, and space exploration.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-mono font-bold text-xs text-[#FFFFFF] uppercase tracking-widest mb-4">
              QUICK ACCESS
            </h3>
            <ul className="space-y-2.5 text-sm font-mono font-semibold">
              <li><Link href="#missions" className="text-white/70 hover:text-[#FFFFFF] transition-colors">01 // MISSIONS</Link></li>
              <li><Link href="#projects" className="text-white/70 hover:text-[#FFFFFF] transition-colors">02 // PROJECTS</Link></li>
              <li><Link href="#achievements" className="text-white/70 hover:text-[#FFFFFF] transition-colors">03 // HALL OF FAME</Link></li>
              <li><Link href="#events" className="text-white/70 hover:text-[#FFFFFF] transition-colors">04 // EVENTS</Link></li>
              <li><Link href="#domains" className="text-white/70 hover:text-[#FFFFFF] transition-colors">05 // DOMAINS</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono font-bold text-xs text-[#FFFFFF] uppercase tracking-widest mb-4">
              HEADQUARTERS
            </h3>
            <p className="text-sm font-mono text-white/70 leading-relaxed mb-4">
              Antariksh Mission Control, Dhole Patil College of Engineering, 1284 Near Kharadi IT Park, Wagholi, Pune, Maharashtra 412207
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white hover:bg-[#FFFFFF] hover:text-black hover:border-[#FFFFFF] transition-colors">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white hover:bg-[#FFFFFF] hover:text-black hover:border-[#FFFFFF] transition-colors">LI</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white hover:bg-[#FFFFFF] hover:text-black hover:border-[#FFFFFF] transition-colors">X</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50 font-semibold">
          <p className="uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ANTARIKSH DPES CLUB. ALL SYSTEMS NOMINAL.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
            <span className="text-white/80">COMMUNICATION LINK ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
