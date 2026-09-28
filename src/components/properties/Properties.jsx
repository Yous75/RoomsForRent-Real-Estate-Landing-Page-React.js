import "./Properties.css";
import property1 from "../../assets/property1.png";
import property2 from "../../assets/property2.png";
import property3 from "../../assets/property3.png";
import EstateCard from "../estatecard/EstateCard";
function Properties(){
    const propertycard=[
        {
            id:1,
            image:property1,
            name:"Princess Apartment Building",
            city:"58 Hullbrook Road, Billesley, B13 0LA" ,
            price:"$7,500",
            beds: 4,
            baths: 2,
            sqft: 1150,
            time: "3 years ago",
        },
         {
            id:2,
            image:property2,
            name:"Rose Rayhaan Building", 
            city:"58 Hullbrook Road, Billesley, B13 0LA" ,
            price:"$7,500",
            beds: 4,
            baths: 2,
            sqft: 1150,
            time: "3 years ago",
        },
         {
            id:3,
            image:property3,
            name:"JW Marriott Marqui Building", 
            city:"58 Hullbrook Road, Billesley, B13 0LA" ,
            price:"$7,500",
            beds: 4,
            baths: 2,
            sqft: 1150,
            time: "3 years ago",
        },
    ]
    return(
        <div className="properties-container">
        <h2>Properties for sale</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
        <div className="properties-cards">
            {propertycard.map((item) => (
                <EstateCard
                 key={item.id}
                 image={item.image}
                 name={item.name}
                 city={item.city}
                 price={item.price}
                 beds={item.beds}
                 baths={item.baths}
                 area={item.sqft}
                 date={item.time}
                 />

            ))}


        </div>
        </div>
    )
}
export default Properties;