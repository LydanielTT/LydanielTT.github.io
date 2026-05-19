import { useRef } from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import { Animation } from './components/Animation';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Language } from './components/Language';
import { ProgressRing } from './components/ProgressRing';
import { Projects } from './components/Projects';
import { ScrollDownButton } from './components/ScrollDownButton';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Skills } from './components/Skills';
import { useLocale } from './hooks/useLocale';
import { useScrollProgress } from './hooks/useScrollProgress';
import en from './locales/en.json';
import fr from './locales/fr.json';

const messages: Record<string, Record<string, string>> = { en, fr };

const TOTAL_PAGES = 12;

export const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { progress } = useScrollProgress(sectionRef);
  const { locale, toggle: toggleLocale } = useLocale();

  const progressPercent = Math.round(progress * 100);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div id="main-container" ref={sectionRef}>
        <section id="center">
          <Header sectionRef={sectionRef} onToggleLocale={toggleLocale} />
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
        <Projects />
        <Education />

        <Animation />
        <ProgressRing progress={progress} totalPage={TOTAL_PAGES} />
        {progressPercent !== 0 && <ScrollToTopButton />}
        {progressPercent !== 100 && <ScrollDownButton />}
      </div>
    </IntlProvider>
  );
};
