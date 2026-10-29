import "./Navbar.css"
import logo from "../assets/images/logo.svg"
import { ShoppingCart, MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>

            <div className="navItems">

                <div className="logo">

                    <Link to="/">
                        <img src={logo} alt="Lume logo" id="lumeLogo" />
                    </Link>
                </div>

                <nav className="nav_links">

                    <ul>
                        <Link to="/" style={{ textDecoration: "none" }}><li>HOME</li></Link>
                        <Link to="/featured" style={{ textDecoration: "none" }}><li>FEATURES</li></Link>
                    </ul>

                    <div className="navIcons">

                        <Link to="/checkout">
                            < ShoppingCart className="cart" />
                        </Link>

                        < MenuIcon className="menu" />
                    </div>

                </nav>
            </div>

        </>
    )
}
export default Navbar