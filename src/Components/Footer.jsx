import "./Footer.css"
import FooterLogo from "../assets/images/logo.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <img src={FooterLogo} alt="Lume Jewels logo" id="footer_Logo" />
                <p className="footerText">
                    TIMELESS PIECES
                </p>
            </footer>
        </>
    )
}
export default Footer