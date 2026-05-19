import { useIntl } from 'react-intl';
import data from '../data.json';
import './Projects.scss';

type Project = {
  title: string;
  description: { en: string; fr: string };
  tech: string[];
  url?: string;
  image?: string;
};

export const Projects = () => {
  const intl = useIntl();
  const projects = data.projects as Project[];

  return (
    <>
      <section>
        <h2>{intl.formatMessage({ id: 'section.projects' })}</h2>
      </section>
      {projects.length === 0 ? (
        <section>
          <div className="cv-projects-empty">
            <p>{intl.formatMessage({ id: 'projects.empty' })}</p>
          </div>
        </section>
      ) : (
        <section className="cv-projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="cv-project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="cv-project-card__image"
                />
              )}
              <div className="cv-project-card__content">
                <h3>{project.title}</h3>
                <p>
                  {intl.locale === 'fr'
                    ? project.description.fr
                    : project.description.en}
                </p>
                <ul className="cv-tech-badges">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-project-card__link"
                  >
                    {intl.formatMessage({ id: 'projects.link' })}
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};
