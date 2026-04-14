import './CompanyLogo.scss';

type Logo = {
  icon?: string;
  image?: string;
  initials: string;
  color?: string;
};

export const CompanyLogo = ({ logo, company }: { logo?: Logo; company: string }) => {
  if (!logo) return null;

  if (logo.icon) {
    return (
      <span className="cv-company-logo cv-company-logo--icon" aria-hidden="true">
        <svg role="presentation">
          <use href={`/icons.svg#${logo.icon}`}></use>
        </svg>
      </span>
    );
  }

  if (logo.image) {
    return (
      <span className="cv-company-logo cv-company-logo--image">
        <img src={logo.image} alt={`${company} logo`} />
      </span>
    );
  }

  return (
    <span
      className="cv-company-logo cv-company-logo--monogram"
      style={logo.color ? { background: logo.color } : undefined}
      aria-hidden="true"
    >
      {logo.initials}
    </span>
  );
};
