import { useState } from 'react';
import data from '../data.json';
import { useTheme } from '../hooks/useTheme';
import './Header.scss';
import { Toggle } from './Toggle';

export const Header = () => {
  const { dark, toggle } = useTheme();
  const [on, setOn] = useState(!!dark);

  return (
    <>
      <div className="hero">
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href="javascript-icon.svg"></use>
        </svg>{' '}
        /
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href="terminal.svg#terminal"></use>
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
            <p key={line}>{line}</p>
          ))}
        </div>
      </header>
    </>
  );
};
