import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Missions from '@/components/Missions';
import Achievements from '@/components/Achievements';
import Events from '@/components/Events';
import Domains from '@/components/Domains';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Missions />
      <Projects />
      <Achievements />
      <Events />
      <Domains />
      <CTA />
    </>
  );
}
