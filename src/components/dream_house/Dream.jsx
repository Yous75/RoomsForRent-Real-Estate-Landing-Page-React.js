import "./Dream.css";
import dreamimage from "../../assets/dream.jpg";
import Dreamcard from "../dreamcard/Dreamcard";
import darlene1 from "../../assets/darlene1.png";
import darlene2 from "../../assets/darlene2.png";
import darlene3 from "../../assets/darlene3.png";

function Dream(){
    const dreamcardcontent=[
        {
            id:1,
            image:darlene1,
            name:"Darlene Robertson",
            job:"Realtor",
        },
        {
            id:2,
            image:darlene2,
            name:"Darlene Robertson",
            job:"Realtor",
        },
        

    ];
    return(
        <section className="dream-house">
            <div className="dream-left-container">
                <img src={dreamimage}/>
            </div>
            <div className="dream-right-container">
                <h2>Explore Your Dream Home or Boost Your Investment Portfolio Today - Your Future Awaits!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
                <div class="dream-cards">
                    {dreamcardcontent.map((item) => (
                        <Dreamcard
                         key={item.id}
                         image={item.image}
                         name={item.name}
                         job={item.job}
                         />
                    )

                    )}

                </div>
            </div>

        </section>

    );

}
export default Dream;