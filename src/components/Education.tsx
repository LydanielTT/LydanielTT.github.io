import data from '../data.json';

export const Education = () => {
  return (
    <>
      <section>
        <h2>Education</h2>
      </section>
      {data.education.map((edu) => (
        <section key={edu.school} className="cv-timeline-item">
          <div className="cv-timeline-content">
            <p className="cv-period">{edu.year}</p>
            <p className="cv-role">{edu.degree}</p>
            <p className="cv-company">{edu.school}</p>
            <ul>
              {edu.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};
