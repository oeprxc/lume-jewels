import "./Home.css"
import Hero from "../Components/Hero"
import FeaturedCard from "../Components/FeaturedCard"

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