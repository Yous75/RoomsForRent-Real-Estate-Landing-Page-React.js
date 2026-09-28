import "./Card.css";

function Card({ image, city, total }) {
  return (
    <div className="card">
      <img src={image} alt={city} />

      <h3>{city}</h3>

      <p>{total}</p>
    </div>
  );
}

export default Card;