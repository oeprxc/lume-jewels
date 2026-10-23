import "./FeaturedCard.css"
import card1Image from "../assets/images/card_1_image.png"
import card2Image from "../assets/images/card_2_image.png"
import card3Image from "../assets/images/card_3_image.png"

const FeaturedCard = () => {

    const featuredCardImages = [{ id: 1, label: "HANDPICKED PIECES", image: card1Image },
    { id: 2, label: "GIFT-READY PACKAGING", image: card2Image },
    { id: 3, label: "CAREFUL DELIVERY", image: card3Image }
    ]

    return (
        <>
            <div className="featuredCardContainer">
                {featuredCardImages.map((images) => (
                    <div className="cardImages" key={images.id}>
                        <img src={images.image} alt={images.label} className="cardImg" />

                        <h5 className="cardLabels">
                            <span className="labelDot"></span>
                            {images.label}
                        </h5>
                    </div>
                ))}
            </div>

        </>
    )
}
export default FeaturedCard