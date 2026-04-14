import data from '../data.json';
import { CompanyLogo } from './CompanyLogo';
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
            <div className="cv-company-header">
              <CompanyLogo logo={job.logo} company={job.company} />
              <div className='cv-experience-header'>
                <p className="cv-role">{job.role}</p>
                <p className="cv-company">
                  {job.company} | {job.period}
                </p>
              </div>
            </div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {job.tech && (
              <ul className="cv-tech-badges">
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
};
