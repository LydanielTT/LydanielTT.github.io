import data from '../data.json';
import './Experience.scss';

export const Experience = () => {
  return (
    <>
      <section>
        <h2>Work Experience</h2>
      </section>

      {data.experience.map((job) => (
        <section key={job.company + job.period} className="cv-timeline-item">
          <div className="cv-timeline-content">
            <p className="cv-role">{job.role}</p>
            <p className="cv-company">
              {job.company} | {job.period}
            </p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};
