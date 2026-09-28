import "./Trust.css";
import Brand from "../../assets/Brand.png";
function Trust(){
    return(
        <div className="trust-container">
            <h2>Trusted by over 150+ major companies</h2>
            <div className="companies">
                <img src={Brand}/>
            </div>

        </div>
    );

}
export default Trust;