import { useIntl } from 'react-intl';
import data from '../data.json';
import './Skills.scss';

export const Skills = () => {
  const intl = useIntl();

  return (
    <div className="cv-skills">
      <h2>{intl.formatMessage({ id: 'section.skills' })}</h2>
      <ul>
        {data.skills.map((s) => (
          <li key={s.id}>
            {s.emoji} {intl.formatMessage({ id: `skills.${s.id}` })}
          </li>
        ))}
      </ul>
    </div>
  );
};
