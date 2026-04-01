import data from '../data.json';
import './Language.scss';

export const Language = () => {
  return (
    <div className="cv-language">
      <div id="title">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2>Languages</h2>
      </div>
      <ul>
        {data.languages.map(({ lang, level }) => (
          <li key={lang}>
            <strong>{lang}</strong> — {level}
          </li>
        ))}
      </ul>
    </div>
  );
};
