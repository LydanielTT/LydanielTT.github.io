import './ScrollToTopButton.scss';

export const ScrollToTopButton = () => {
  const handleClick = () => {
    const container = document.getElementById('main-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="button-up">
      <div className='button-container'>
        <button aria-label="Scroll to top" onClick={handleClick}>
          <svg className="button-scroll" role="presentation" aria-hidden="true">
            <use href="/icons.svg#arrow-up-icon"></use>
          </svg>
        </button>
      </div>
      <span className="placeholder">scroll</span>
    </div>
  );
};
