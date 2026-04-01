import { useRef } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { ExperienceHelix } from './components/ExperienceHelix';
import { Header } from './components/Header';
import { Language } from './components/Language';
import { Profile } from './components/Profile';
import { ProgressRing } from './components/ProgressRing';
import { useScrollY } from './hooks/useScrollY';

export const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollY = useScrollY();
  return (
    <div ref={sectionRef}>
      <ExperienceHelix scrollY={scrollY} />
      <ProgressRing sectionRef={sectionRef} />
      <section id="center">
        <Header />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <Language />
        </div>
        <div id="social">
          <Contact />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="main-content">
        <Profile />
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
};
