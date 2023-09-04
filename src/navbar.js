import { Link } from "react-router-dom";
import './styles.css';
const Nav = () => {
    return (
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <Link className="market-title text-red-700" to="/">Rocket X</Link>
                </div>
                <div className="nav-btns-container">
                    <Link className="nav-link" to="/login"><button className="nav-btn">Log in</button></Link>
                    <Link className="nav-link" to="/register"><button className="nav-btn">Register</button></Link>
                </div>
            </nav>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <Nav />
        </>
    );
};
  
export default Navbar;