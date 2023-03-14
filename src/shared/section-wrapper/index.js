import './SectionWrapper.css'

const SectionWrapper = ({ children, title, button }) => {
  return (
    <section className="section-wrapper">
      <header className="section-header">
        <h1 className="section-header__title">{title}</h1>
        {button && (
          <div>
            {button.map((button) => (
              <button
                key={button.label}
                className="button +--success"
                onClick={button.action}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </header>
      {children}
    </section>
  );
};

export default SectionWrapper;
