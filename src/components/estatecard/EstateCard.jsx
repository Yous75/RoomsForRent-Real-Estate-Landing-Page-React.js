import "./EstateCard.css";

function EstateCard({image,name,city,price,beds,baths,area,date}) {
  return (
    <div className="estate-card">
      <img src={image} alt={name} />

      <div className="estate-info">
        <h3>{name}</h3>

        <p>{city}</p>

        <h4>{price}</h4>

        <div className="estate-details">
          <span>Beds: {beds}</span>
          <span>Baths: {baths}</span>
          <span>Sqft: {area}</span>
          <span>date:{date}</span>
        </div>
      </div>
    </div>
  );
}

export default EstateCard;