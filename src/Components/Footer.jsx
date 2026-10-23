import "./Footer.css"
import FooterLogo from "../assets/images/logo.svg"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerLogo">
                    <img src={FooterLogo} alt="Lume Jewels logo" id="footer_Logo" />
                    <div className="footerText">
                        <h4>TIMELESS PIECES</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer