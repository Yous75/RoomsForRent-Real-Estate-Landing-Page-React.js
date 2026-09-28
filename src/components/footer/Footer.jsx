import "./Footer.css";
import logo from "../../assets/logo-white.png";
import person from "../../assets/person.png";
import house from "../../assets/house.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="cta-card">
          <img src={person} alt="" />
          <div className="cta-text">
            <h2>You need a house</h2>
            <p>
              Tell us your needs, we will give you thousands of
              suggestions for the dream home.
            </p>
          </div>
          <button className="cta-btn">
            <span className="material-symbols-outlined">
              <i class="fa-solid fa-phone"></i>
            </span>
            Contact Seller
          </button>
        </div>
        <div className="cta-card">
          <img src={house} alt="" />
          <div className="cta-text">
            <h2>Sell your house</h2>
            <p>
              We will connect you to thousands of people who
              need to buy a home.
            </p>
          </div>
          <button className="cta-btn">
            <span className="material-symbols-outlined">
              <i class="fa-solid fa-house"></i>
            </span>
            Sell Property
          </button>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <h3>Office Address</h3>
          <p className="gray">Head office:</p>
          <p className="white">
            Jumeirah, Dubai, UAE
          </p>
          <hr />
          <p className="gray">Branch:</p>
          <p className="white">
            Reem Island Addax Tower Floor 45,
            <br />
            offi in Abu Dhabi, UAE
          </p>
          <hr />
          <p className="white">
            AL SAADA Bakery, Defence Road,
            <br />
            Abu Dhabi, UAE
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Seller</h3>
          <div className="contact-box">
            <div className="avatar"></div>
            <div>
              <p className="gray">
                Darrel Steward
              </p>
              <h4>(+971) 555-55812</h4>
            </div>
          </div>
          <hr/>
          <div className="contact-row">
            <span className="material-symbols-outlined">
              <i class="fa-solid fa-phone"></i>
            </span>
            <div>
              <p className="gray">Hotline:</p>
              <h4>(+971) 555-0124</h4>
            </div>
          </div>
          <hr/>
          <div className="contact-row">
            <span className="material-symbols-outlined">
              <i class="fa-regular fa-envelope"></i>
            </span>
            <div>
              <p className="gray">Email:</p>
              <h4>roomsforrentals@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Our Company</h3>
          <ul>
            <li>Property For Sale</li>
            <li>About Us</li>
            <li>Our Agents</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p className="gray">
            Sign up to receive the latest articles
          </p>
          <input type="email" placeholder="Your email address"/>
          <button className="signup-btn">
            Sign Up
            <span className="material-symbols-outlined">
              ➜
            </span>
          </button>
          <label className="check">
            <input type="checkbox" />
            I have read and agree to the terms &
            conditions
          </label>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo} alt="" className="footer-logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/">Property</a>
          <a href="/">Page</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </nav>
        <div className="socials">
          <span className="material-symbols-outlined">
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span className="material-symbols-outlined">
           <i class="fa-brands fa-twitter"></i>
          </span>
          <span className="material-symbols-outlined">
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
          <span className="material-symbols-outlined">
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2024 <b>RoomsForRentals.com</b>.
        Designed & Developed by <b>FigmaCom.com</b>
      </div>
    </footer>
  );
}

export default Footer;