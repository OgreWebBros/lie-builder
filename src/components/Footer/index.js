import { Link, NavLink } from 'react-router-dom';
import Button from '../button';

const Footer = () => (
    <div className="footer">
        <NavLink 
          className="footer__link button" exact activeClassName="active" to="/">Get a Lie</NavLink>
        <NavLink className="footer__link button" activeClassName="active"  to="/Liebrary">Liebrary</NavLink>
    </div>
)
export default Footer