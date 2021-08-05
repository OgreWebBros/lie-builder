import { NavLink } from 'react-router-dom';
import Logo from "../logo"
const Header = () => (
    <div className="header">
        <NavLink
            className="header__link " to="/">
            <Logo block="header" size="40" />
            <h2 className="header__title">Morgan's Trusty Lie Builder</h2>
        </NavLink>
    </div>
)
export default Header