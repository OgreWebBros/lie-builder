import { NavLink } from 'react-router-dom';
import GhLogo from "../logo/gh-logo";

const Footer = () => (
  <div className="footer__wrapper">
    <div className="footer">
      <a href="https://github.com/OgreWebBros/lie-builder">
        <GhLogo block="footer" size={{ height: 40, width: 41 }} />
      </a>
      <NavLink
        className="footer__link button" exact activeClassName="active" to="/">Get a Lie</NavLink>
      <NavLink className="footer__link button" activeClassName="active" to="/Liebrary">Checkout the Liebrary</NavLink>
    </div>
  </div>
)
export default Footer