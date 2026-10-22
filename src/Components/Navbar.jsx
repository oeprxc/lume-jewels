import "./Navbar.css"
import logo from "../assets/images/logo.svg"
import { ShoppingCart, MenuIcon } from "lucide-react"

const Navbar = () => {
    return (
        <>
            <div className="navItems">

                 <div className="logo">
                        <img src={logo} alt="Lume logo" id="lumeLogo" />
                    </div>

                <nav className="nav_links">

                    <ul>
                        <li><a href="Home">HOME</a></li>
                        <li><a href="Features">FEATURES</a></li>
                    </ul>

                    <div className="navIcons">
                        < ShoppingCart className="cart" />

                        < MenuIcon className="menu" />
                    </div>


                </nav>
            </div>



        </>
    )
}
export default Navbar