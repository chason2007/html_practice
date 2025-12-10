import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header className="header">
        <img src="https://img.freepik.com/premium-vector/ph-logo-design_731343-380.jpg"></img>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
        </div>
      </header>
    );
}
export default Header;