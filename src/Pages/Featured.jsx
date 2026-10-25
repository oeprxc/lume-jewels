import "./Featured.css"
import featuredImage1 from "../assets/images/card_1_Image.png"
import featuredImage2 from "../assets/images/card_2_image.png"
import featuredImage3 from "../assets/images/card_3_image.png"

const Featured = () => {


    const featuredSection = [{ id: 1, featuredLabel: "HANDPICKED PIECES", featuredText: "Every piece in our collection is chosen by hand for quality, finish, and style. We look closely at the stones, the metal and the details.", bulletPoint1: "Each piece is chosen for quality before it's listed", bulletPoint2: "Earrings, necklaces, and rings for everyday moments", bulletPoint3: "Small collections, so every piece feels personal", featuredImage: featuredImage1 },

    { id: 2, featuredLabel: "GIFT-READY PACKAGING", featuredText: "Every order arrives in a neat box ready to give or keep. Whether it's a birthday, an anniversary, or a treat for yourself, the unboxing feels special as the piece.", bulletPoint1: "Each piece comes in its own box", bulletPoint2: "Finished with a ribbon, with no extra wrapping needed", bulletPoint3: "A short gift note can be added to any order", featuredImage: featuredImage2 },

    { id: 3, featuredLabel: "CAREFUL DELIVERY", featuredText: "We packed every piece with care and send it to your door. From our hands to yours, your order is protected, tracked, and handled gently.", bulletPoint1: "Padded packaging to protect delicate pieces", bulletPoint2: "Tracking updates from dispatch to delivery", bulletPoint3: "Delivery estimates shown at checkout", featuredImage: featuredImage3 }]

    return (
        <>

            <div className="featuredContainer">
                {featuredSection.map((featuredContent) => (
                    <div className="featuredContentCard" key={featuredContent.id}>

                        <img src={featuredContent.featuredImage} alt={featuredContent.featuredLabel} className="featuredContentImage" />
                        <div className="featuredContentText">
                            <h5>{featuredContent.featuredLabel}</h5>
                            <p>{featuredContent.featuredText}</p>
                            <ul>
                                <li className="featuredDot">{featuredContent.bulletPoint1}</li>
                                <li className="featuredDot">{featuredContent.bulletPoint2}</li>
                                <li className="featuredDot">{featuredContent.bulletPoint3}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Featured