import './ScrollDownButton.scss';

export const ScrollDownButton = () => {
  const handleClick = () => {
    const container = document.getElementById('main-container');
    if (container) {
      container.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    }
  };

  return (
    <button className="scroll-button" aria-label="Scroll to next section" onClick={handleClick}>
      <svg className="button-icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#arrow-down-icon"></use>
      </svg>
    </button>
  );
};
