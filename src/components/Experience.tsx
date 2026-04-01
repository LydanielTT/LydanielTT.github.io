import data from '../data.json';
import './Experience.scss';

export const Experience = () => {
  return (
    <section className="cv-section">
      <div id="spacer-max" />

      <h2>Work Experience</h2>
      <div id="spacer-max" />

      <div className="cv-timeline">
        {data.experience.map((job) => (
          <div key={job.company + job.period} className="cv-timeline-item">
            <div id="spacer-max"></div>

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
            <div id="spacer-max"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
