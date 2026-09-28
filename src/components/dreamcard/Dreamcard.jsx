import "./Dreamcard.css";
function Dreamcard({image,name,job}){
    return(
        <div className="dreamcard">
            <div className="dreamcard-img">
              <img src={image}/>
            </div>
            <div className="dreamcard-info">
                <h4>{name}</h4>
                <p>{job}</p>
                <button>Contact Seller ➜ </button>
            </div>
        </div>
    );
}
export default Dreamcard;