
import HomePage from "./Pages/HomePage"
import FeaturedPage from "./Pages/FeaturedPage"
import CheckoutPage from "./Pages/CheckoutPage"
import ConfirmationPage from "./Pages/ConfirmationPage"
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"
const App = () => {

  return (
    <>

    <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/home" element={<HomePage />} />
        <Route path="/featured" element={<FeaturedPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  )
}
export default App