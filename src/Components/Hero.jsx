import "./Hero.css"
import heroImage from "../assets/images/heroImage.png"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>

          <div className="heroCard">
       
         <div className="heroImage">
        <img src={heroImage} alt="Picture of a ring" id="image" />
            </div>

           <div className="heroText">
        <h1 id="introText">TIMELESS PIECES</h1>
       <h2 id="subIntroText">MADE TO BE WORN</h2>

        <div className="heroPara">
        <p className="content">Handpicked earrings, necklace, and rings for</p>
        <p className="content">everyday moments and the special ones. Find a piece that feels like you.</p>
       </div>

        <div className="heroBtns">
         <Link to="/checkout" className="hero_Btn" style={{textDecoration: "none"}}>BUY NOW</Link>
          <Link to="/checkout" className="hero_Btn" style={{textDecoration: "none", backgroundColor: "#1C1A1A", border: "3px solid var(--btn-secondary-bg)"}}>LEARN MORE</Link>
        </div>
       </div>

      

        </div>


        </>
    )
}
export default Hero