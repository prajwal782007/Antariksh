import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center">
                <span className="text-accent font-heading font-bold tracking-widest text-sm">A</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-widest uppercase">
                Antariksh
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              The official Space and Technology Club of DPES. Dedicated to pushing the boundaries of aerospace engineering and exploration.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 tracking-wider uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#missions" className="hover:text-accent transition-colors">Missions</Link></li>
              <li><Link href="#projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="#events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link href="#domains" className="hover:text-accent transition-colors">Domains</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 tracking-wider uppercase text-sm">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: <a href="mailto:contact@antariksh.club" className="hover:text-accent transition-colors">contact@antariksh.club</a></li>
              <li>Location: DPES Campus</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {/* Placeholder for social links */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">IN</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">LI</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">TW</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Antariksh DPES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
