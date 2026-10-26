import "./Checkout.css"
import { useState } from "react"

const Checkout = () => {

    const [number, setNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>

            <div className="checkOutContainer">
                <div className="checkOutCard">
                    <h4>PAYMENT DETAILS</h4>
                    <div className="checkOutFormContainer">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" name="cardNumber" id="cardNumber" placeholder="xxxxxx-xxx-xxxxxxx-x" value={number} onChange={event => setNumber(event.target.value)} />

                            <label htmlFor="expiryDate">Epiry Date</label>
                            <input type="text" name="expiryDate" id="expiryDate" placeholder="04/22" value={expiryDate} onChange={event => setExpiryDate(event.target.value)} />

                            <label htmlFor="cvv">CVV</label>
                            <input type="text" name="cvv" id="cvv" placeholder="123" value={cvv} onChange={event => setCvv(event.target.value)} />

                            <p>Join our mailing list <input type="radio" name="radio" id="radio" /></p>

                            <button id="purchaseBtn">PURCHASE</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Checkout