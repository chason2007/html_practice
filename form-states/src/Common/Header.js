import { NavLink } from "react-router-dom";
import '../Styles/Header.css';

const Header = () => {
    return (
        <header>
            <NavLink to={"/"}><img src="/images/logo.png" alt="logo"></img></NavLink>
            <div className="links">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <NavLink to={"/registration"}>Registration</NavLink>
            </div>
        </header>
    );
}
export default Header;

