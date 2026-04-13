import data from '../data.json';
import './Contact.scss';

export const Contact = () => {
  return (
    <div className="cv-contact">
      <div id="title">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Contact Me</h2>
      </div>

      <ul>
        <li>
          <a href={data.contact.linkedin} target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#linkedin-icon"></use>
            </svg>
            Linkedin
          </a>
        </li>
        <li>
          <a href={data.contact.github} target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};
