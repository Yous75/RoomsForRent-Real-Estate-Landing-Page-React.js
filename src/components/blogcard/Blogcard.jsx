import "./Blogcard.css";
function Blogcard({image,desc}){
    return(
        <div className="blogcard">
            <div className="blogcard-img">
              <img src={image}/>
            </div>
            <div className="blogcard-info">
                <h4>{desc}</h4>
                <button>Read More ➜ </button>
            </div>
        </div>
    );
}
export default Blogcard;