import "./Checkout.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Info } from "lucide-react"

const Checkout = () => {

    const [number, setNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [showTooltip, setShowTooltip] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const userCardNumber = number.trim()
        const userCardExpiryNumber = expiryDate.trim()
        const userCvv = cvv.trim()

        if (userCardNumber === "" || userCardExpiryNumber === "" || userCvv === "") {
            setErrorMessage("Please all fields are required")
            return
        }
        setErrorMessage("")
        navigate("/confirmation")
    }

    return (
        <>

            <div className="checkOutContainer">
                <div className="checkOutCard">

                    <h4>PAYMENT DETAILS</h4>

                    <div className="notice"><b>Do not use a real card!</b> Use a practice card like<span style={{ color: "red" }}> 4242 4242 4242 4242</span></div>

                    <div className="checkOutFormContainer">
                        <form onSubmit={handleSubmit}>

                            <div className="cardGroup">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" name="cardNumber" id="cardNumber" placeholder="xxxx-xxxx-xxxx-xxxx" value={number} onChange={event => setNumber(event.target.value)} />
                            </div>

                            <div className="expiryCvvRow">
                                <div className="expiryGroup">
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input type="text" name="expiryDate" id="expiryDate" placeholder="MM/YY" value={expiryDate} onChange={event => setExpiryDate(event.target.value)} />
                                </div>

                                <div className="cvvGroup">
                                    <div className="cvvLabelRow">
                                        <label htmlFor="cvv">CVV</label>

                                        <div className="tooltipWrapper" onMouseEnter={() => setShowTooltip(true)}
                                            onMouseLeave={() => setShowTooltip(false)}>

                                            <Info className="infoIcon" />
                                            <div className={showTooltip ? "tooltip showTooltip" : "tooltip"}>
                                                <b>What's a CVV?</b>
                                                <p>The 3-digit security code on the back of your card.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <input type="text" name="cvv" id="cvv" placeholder="123" value={cvv} onChange={event => setCvv(event.target.value)} />
                                </div>
                            </div>

                            <p>Join our mailing list <input type="checkbox" name="checkbox" id="checkbox" /></p>

                            <p style={{ textAlign: "center", color: "red", fontSize: "1.5rem" }}>{errorMessage}</p>
                            <button type="submit" className="purchaseBtn">PURCHASE</button>

                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Checkout