import "./Agentcard.css";

function Agentcard({image,name,job}){
    return(
        <div className="agentcard">
            <img src={image} alt={name} />
            <div className="agent-info">
                <div className="info-text">
                <h3>{name}</h3>
                <p>{job}</p>
                </div>
                <div className="info-buttons">
                    <button><i className="fa-solid fa-phone"></i></button>
                    <button><i className="fa-solid fa-envelope"></i></button>
                </div>
            </div>
            

        </div>
    );
}
export default Agentcard;