import { useRef } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Language } from './components/Language';
import { ProgressRing } from './components/ProgressRing';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Animation } from './components/Animation';
export const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      <div className="ticks"></div>
      <div id="spacer"></div>
      <Animation />
      {/* <ExperienceHelix scrollY={scrollY} /> */}
      <ProgressRing sectionRef={sectionRef} />
    </div>
  );
};
