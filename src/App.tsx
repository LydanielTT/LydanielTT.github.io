import { useRef } from 'react';
import './App.css';
import { Animation } from './components/Animation';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Language } from './components/Language';
import { ProgressRing } from './components/ProgressRing';
import { ScrollDownButton } from './components/ScrollDownButton';
import { Skills } from './components/Skills';
import { useScrollProgress } from './hooks/useScrollProgress';
import { ScrollToTopButton } from './components/ScrollToTopButton';

const TOTAL_PAGES = 12;

export const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { progress } = useScrollProgress(sectionRef);

  const progressPercent = Math.round(progress * 100);

  return (
    <div id="main-container" ref={sectionRef}>
      <section id="center">
        <Header sectionRef={sectionRef} />
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
      <section id="skills">
        <Skills />
      </section>
      <Experience />

      <Education />

      <Animation />
      {/* <ExperienceHelix scrollY={scrollY} /> */}
      <ProgressRing progress={progress} totalPage={TOTAL_PAGES} />
      {progressPercent !== 0 && <ScrollToTopButton />}
      {progressPercent !== 100 && <ScrollDownButton />}
    </div>
  );
};
