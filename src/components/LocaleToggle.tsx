import { useIntl } from 'react-intl';
import './LocaleToggle.scss';

interface Props {
  onToggle: () => void;
}

export const LocaleToggle = ({ onToggle }: Props) => {
  const { locale } = useIntl();

  return (
    <button
      className="locale-toggle"
      onClick={onToggle}
      aria-label={locale === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <span className={locale === 'en' ? 'locale-toggle__active' : ''}>EN</span>
      <span className="locale-toggle__sep">|</span>
      <span className={locale === 'fr' ? 'locale-toggle__active' : ''}>FR</span>
    </button>
  );
};
