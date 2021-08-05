import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <NavLink 
          className="footer__link button" exact activeClassName="active" to="/">Get a Lie</NavLink>
        <NavLink className="footer__link button" activeClassName="active"  to="/Liebrary">Checkout the Liebrary</NavLink>
    </div>
)
export default Footer