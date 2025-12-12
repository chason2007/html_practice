import { NavLink } from "react-router-dom";
import '../Styles/Header.css';

const Header = () => {
    return (
        <header>
            <h1>Form States Application</h1>
            <img src="" alt="logo"></img>
            <div className="links">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <NavLink to={"/registration"}>Registration</NavLink>
            </div>
        </header>
    );
}
export default Header;

