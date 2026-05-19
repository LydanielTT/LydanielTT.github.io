import { useIntl } from 'react-intl';
import data from '../data.json';
import { CompanyLogo } from './CompanyLogo';
import './Experience.scss';

export const Experience = () => {
  const intl = useIntl();

  return (
    <>
      <section>
        <h2>{intl.formatMessage({ id: 'section.experience' })}</h2>
      </section>

      {data.experience.map((job) => {
        const role = intl.formatMessage({ id: `experience.${job.id}.role` });
        const bullets = Array.from({ length: job.bulletCount }, (_, i) =>
          intl.formatMessage({ id: `experience.${job.id}.bullet.${i}` })
        );

        return (
          <section key={job.company + job.period} className="cv-timeline-item">
            <div className="cv-timeline-content">
              <div className="cv-company-header">
                <CompanyLogo logo={job.logo} company={job.company} />
                <div className="cv-experience-header">
                  <p className="cv-role">{role}</p>
                  <p className="cv-company">
                    {job.company} | {job.period}
                  </p>
                </div>
              </div>
              <ul>
                {bullets.map((b) => (
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
        );
      })}
    </>
  );
};
