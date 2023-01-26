import liIcon from "./../../image/icons/linkedIn.svg";
import gitIcon from "./../../image/icons/gitHub.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="conteiner">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.linkedin.com/in/mikita-kuznetsov-37642a235/">
                <img src={liIcon} alt="linkedIn" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/aggamix">
                <img src={gitIcon} alt="GitHub" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
