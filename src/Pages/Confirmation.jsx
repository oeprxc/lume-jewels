import "./Confirmation.css"
import backgroundImage from "../assets/images/map.png"

const Confirmation = () => {
    return (
        <>
            <div className="confirmationContainer">
                <div className="ImageCard">
                    <img src={backgroundImage} alt="Map showing your package's delivery route" className="mapImage" />
                    <h2 className="confirmationText">Your package is on the way</h2>
                </div>

            </div>
        </>
    )
}
export default Confirmation