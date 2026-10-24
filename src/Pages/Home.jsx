import "./Home.css"
import Hero from "../Components/Hero"
import FeaturedCard from "../Components/FeaturedCard"
import Footer from "../Components/Footer"

const Home = () => {
    return (
        <>
      
      <div className="container">
        <div className="card">
       <Hero/>
        <FeaturedCard/>
        </div>
        </div>
        </>
    )
}

export default Home