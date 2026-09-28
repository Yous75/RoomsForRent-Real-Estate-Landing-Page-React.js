import './Header.css';
import logo from "../../assets/header-logo.png";

function Header() {
  return (
    <header>
        <div className="logo">
             <img src={logo} alt="Logo" />
        </div>

        <nav>
            <ul>
                <li><a href="#">Home <i className="fa-solid fa-house"></i></a></li>
                <li><a href="#">Property <i className="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">Page <i className="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">Blog <i className="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div className="header-right">

            <a href="#" className="login">
                <i className="fa-regular fa-user"></i>
                Register / Login
            </a>

            <button className="sell-btn">
                <i className="fa-solid fa-house"></i>
                Sell Property
            </button>

        </div>

    </header>
        

       
   
  );
}

export default Header;