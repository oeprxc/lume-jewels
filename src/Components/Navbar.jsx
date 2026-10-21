import "./Navbar.css"
import logo from "../assets/images/logo.svg"
import { ShoppingCart, MenuIcon } from "lucide-react"

const Navbar = () => {
    return (
        <>
            <div className="navItems">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Lume logo" id="lumeLogo" />
                    </div>

                    <ul>
                        <a href="Home"><li>HOME</li></a>
                        <a href="Features"><li>FEATURES</li></a>   

                         <div className="navIcons">
                            <ShoppingCart size={30} color="white" cursor="Pointer" fontWeight="bolder" />
                        </div> 

                    </ul>
                
                            < MenuIcon size={40} color="white" cursor="Pointer" fontWeight="bolder" display="none"/>
                  
                </nav>
            </div>



        </>
    )
}
export default Navbar