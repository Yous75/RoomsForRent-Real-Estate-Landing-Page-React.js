import "./Hero.css";
import heroImage from "../../assets/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h2>
          Find Your Perfect <br />
          Property with Us
        </h2>

        <p>
          Discover Your Dream Property with Us – Where Perfect
          Meets Possible in Every Home.
        </p>
      </div>
    </section>
  );
}

export default Hero;