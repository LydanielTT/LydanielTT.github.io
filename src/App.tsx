import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Language } from './components/Language';
import { Profile } from './components/Profile';

export const App = () => {
  return (
    <>
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
    </>
  );
};
