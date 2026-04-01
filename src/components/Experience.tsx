import './Experience.scss';
import data from '../data.json';

export const Experience = () => {
  return (
    <section className="cv-section">
      <h2>Work Experience</h2>
      <div className="cv-timeline">
        {data.experience.map((job) => (
          <div key={job.company + job.period} className="cv-timeline-item">
            <div className="cv-timeline-marker" />
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
          </div>
        ))}
      </div>
    </section>
  );
};
