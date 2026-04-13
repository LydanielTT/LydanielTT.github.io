import { useState, type RefObject } from 'react';
import data from '../data.json';
import { useScrollY } from '../hooks/useScrollY';
import { useTheme } from '../hooks/useTheme';
import './Header.scss';
import { Toggle } from './Toggle';

export const Header = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement | null> }) => {
  const { dark, toggle } = useTheme();
  const [on, setOn] = useState(!!dark);
  const scrollY = useScrollY(sectionRef);
  const collapsed = scrollY > 120;

  return (
    <>
      <div className={`cv-header-sticky ${collapsed ? 'visible' : ''}`}>
        <h2 className="cv-header-sticky-name">
          {data.name.first} {data.name.last}
        </h2>
        <div className="cv-theme-toggle">
          ☀️
          <Toggle
            checked={on}
            onChange={(checked) => {
              setOn(checked);
              toggle();
            }}
          />
          🌙
        </div>
      </div>
      <div className="hero">
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#javascript-icon"></use>
        </svg>
        /
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#terminal-icon"></use>
        </svg>
      </div>
      <header className="cv-header">
        <div className="cv-header-name">
          <h1>
            {data.name.first} {data.name.last}
          </h1>
          <div className="cv-theme-toggle">
            ☀️
            <Toggle
              checked={on}
              onChange={(checked) => {
                setOn(checked);
                toggle();
              }}
            />
            🌙
          </div>
        </div>
        <div className="cv-header-title">
          {data.title.split('\n').map((line) => (
            <p className="job-title" key={line}>{line}</p>
          ))}
        </div>
      </header>
    </>
  );
};
