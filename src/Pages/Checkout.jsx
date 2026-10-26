import "./Checkout.css"
import { useState } from "react"
import { Link } from "react-router-dom"

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

                            <div className="cardGroup">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" name="cardNumber" id="cardNumber" placeholder="xxxxxx-xxx-xxxxxxx-x" value={number} onChange={event => setNumber(event.target.value)} />
                            </div>

                            <div className="expiryCvvRow">
                                <div className="expiryGroup">
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input type="text" name="expiryDate" id="expiryDate" placeholder="MM/YY" value={expiryDate} onChange={event => setExpiryDate(event.target.value)} />
                                </div>

                                <div className="cvvGroup">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" name="cvv" id="cvv" placeholder="123" value={cvv} onChange={event => setCvv(event.target.value)} />
                                </div>
                            </div>

                            <p>Join our mailing list <input type="checkbox" name="checkbox" id="checkbox" /></p>

                            <div className="checkOutBtn">
                                <Link to="/confirmation" className="purchaseBtn">PURCHASE</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Checkout