import './Skills.scss';
import data from '../data.json';

export const Skills = () => {
  return (
    <div className="cv-skills">
      <h2>Expertise Skills</h2>
      <ul>
        {data.skills.map((s) => (
          <li key={s.skill}>
            {s.emoji} {s.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
