import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <NavLink 
          className="footer__link button" activeClassName="active" to="/lie-builder">Get a Lie</NavLink>
        <NavLink className="footer__link button" activeClassName="active"  to="/Liebrary">Checkout the Liebrary</NavLink>
    </div>
)
export default Footer