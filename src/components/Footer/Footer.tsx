import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content__left">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="./images/logo-white-mobile.svg"
            />
            <img
              height="42px"
              width="85px"
              src="./images/logo-white.svg"
              alt="Logo"
            />
          </picture>
        </div>
        <div className="footer__content__right">
          <p>© 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
