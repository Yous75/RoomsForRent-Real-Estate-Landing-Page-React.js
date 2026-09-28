import "./Agents.css";
import Agentcard from "../agentcard/Agentcard";
import wade from "../../assets/wade.png";
import leslie from "../../assets/leslie.png";
import darlene from "../../assets/darlene.png";
import Blogcard from "../blogcard/Blogcard";

function Agents(){
    const agentsinfo=[
        {
            id:1,
            image:wade,
            name:"Wade Warren",
            job:"Salesperson",
        },
         {
            id:2,
            image:leslie,
            name:"Leslie Alexander",
            job:"Commercial Broker",
        },
         {
            id:3,
            image:darlene,
            name:"Darlene Robertson",
            job:"Realtor",
        },
    ]
    return(
        <div className="agents-container">
            <h2>Meet the agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            <div className="agents-cards">
                {agentsinfo.map((item) => (
                   <Agentcard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    job={item.job}
                    />
                ))}

            </div>
            <p>Become an agent and get the commission you deserve.<span>Contact us</span> </p>
        </div>
    );

}
export default Agents;