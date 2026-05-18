import { useIntl } from 'react-intl';
import data from '../data.json';
import './Language.scss';

export const Language = () => {
  const intl = useIntl();

  return (
    <div className="cv-language">
      <div id="title">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2>{intl.formatMessage({ id: 'section.languages' })}</h2>
      </div>
      <ul>
        {data.languages.map(({ lang, levelId }) => (
          <li key={lang}>
            <strong>{lang}</strong> — {intl.formatMessage({ id: levelId })}
          </li>
        ))}
      </ul>
    </div>
  );
};
