
import Home from "./Pages/Home"
import Featured from "./Pages/Featured"
import Checkout from "./Pages/Checkout"
import Confirmation from "./Pages/Confirmation"
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "./Components/Navbar"
const App = () => {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>

    </>
  )
}
export default App