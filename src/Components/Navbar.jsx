import "./Navbar.css"
import logo from "../assets/images/logo.svg"
import { ShoppingCart, MenuIcon, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
      if (click) {
        setClick(false)
      } else{
        setClick(true)
      }
    }

     let menuClass = ""
        if (click) {
            menuClass = "active"
        } else {
            menuClass = ""
        }

        let menuIcon = ""
        if(click) {
            menuIcon = <X className="menu" onClick={handleClick}/>
        } else {
            menuClass= ""
            menuIcon = <MenuIcon className="menu" onClick={handleClick}/>
        }

    return (
        <>

            <div className="navItems">

                <div className="logo">

                    <Link to="/">
                        <img src={logo} alt="Lume logo" id="lumeLogo" />
                    </Link>
                </div>

                <nav className="nav_links">

                    <ul className={menuClass}>
                        <Link to="/" style={{ textDecoration: "none" }}><li>HOME</li></Link>
                        <Link to="/featured" style={{ textDecoration: "none" }}><li>FEATURES</li></Link>
                    </ul>

                    <div className="navIcons">

                        <Link to="/checkout">
                            < ShoppingCart className="cart" />
                        </Link>

                        {menuIcon}
                    </div>

                </nav>
            </div>

        </>
    )
}
export default Navbar