import "./Estate.css";
import estate1 from "../../assets/estate1.jpg";
import estate2 from "../../assets/estate2.jpg";
import estate3 from "../../assets/estate3.jpg";
import EstateCard from "../estatecard/EstateCard";

function Estate() {
  const estateData = [
      {
        id: 1,
        image: estate1,
        title: "Spacious & Luxurious in Dubai",
        location: "Downtown, Dubai, UAE",
        price: "AED 7,500",
        beds: 4,
        baths: 2,
        sqft: 1150,
        time: "3 years ago",
      },
      {
        id: 2,
        image: estate2,
        title: "Spacious & Luxurious in Dubai",
        location: "Downtown, Dubai, UAE",
        price: "AED 7,500",
        beds: 4,
        baths: 2,
        sqft: 1150,
        time: "3 years ago",
      },
      {
        id: 3,
        image: estate3,
        title: "Spacious & Luxurious in Dubai",
        location: "Downtown, Dubai, UAE",
        price: "AED 7,500",
        beds: 4,
        baths: 2,
        sqft: 1150,
        time: "3 years ago",
      },
    ]
    
  return (
    <section className="estate">
      <div className="estate-container">
        <div className="estate-text">
          <h2>Discover the latest real estate</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer vel lobortis justo
          </p>
        </div>
        <section className="estatecards">
          {estateData.map((item) => (
          <EstateCard
            key={item.id}
            image={item.image}
            name={item.title}
            city={item.location}
            price={item.price}
            beds={item.beds}
            baths={item.baths}
            area={item.sqft}
            date={item.time}
          />
        ))}
        
        </section>
      </div>
      
    </section>
  );
}

export default Estate;