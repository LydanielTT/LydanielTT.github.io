import { useState, type RefObject } from 'react';
import { useIntl } from 'react-intl';
import data from '../data.json';
import { useScrollY } from '../hooks/useScrollY';
import { useTheme } from '../hooks/useTheme';
import './Header.scss';
import { LocaleToggle } from './LocaleToggle';
import { Toggle } from './Toggle';

interface Props {
  sectionRef: RefObject<HTMLDivElement | null>;
  onToggleLocale: () => void;
}

export const Header = ({ sectionRef, onToggleLocale }: Props) => {
  const intl = useIntl();
  const { dark, toggle } = useTheme();
  const [on, setOn] = useState(!!dark);
  const scrollY = useScrollY(sectionRef);
  const collapsed = scrollY > 120;

  const titleLine1 = intl.formatMessage({ id: 'header.title.line1' });
  const titleLine2 = intl.formatMessage({ id: 'header.title.line2' });
  const availabilityId = data.available ? 'header.available.true' : 'header.available.false';

  return (
    <>
      <div className={`cv-header-sticky ${collapsed ? 'visible' : ''}`}>
        <h2 className="cv-header-sticky-name">
          {data.name.first} {data.name.last}
        </h2>
        <div className="cv-header-controls">
          <LocaleToggle onToggle={onToggleLocale} />
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
          <div className="cv-header-controls">
            <LocaleToggle onToggle={onToggleLocale} />
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
          <p className="job-title">{titleLine1}</p>
          <p className="job-title">{titleLine2}</p>
        </div>
        <div className={`cv-availability ${data.available ? 'cv-availability--open' : 'cv-availability--busy'}`}>
          <span className="cv-availability__dot" aria-hidden="true" />
          {intl.formatMessage({ id: availabilityId })}
        </div>
      </header>
    </>
  );
};
