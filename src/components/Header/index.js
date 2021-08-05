import { NavLink } from 'react-router-dom';
import Logo from "../logo";

const Header = () => (
    <div className="header__wrapper">
        <div className="header">
            <NavLink
                className="header__link " to="/">
                <Logo block="header" size="50" />
                <h2 className="header__title">Lie Builder</h2>
            </NavLink>
        </div>
    </div>
)
export default Header