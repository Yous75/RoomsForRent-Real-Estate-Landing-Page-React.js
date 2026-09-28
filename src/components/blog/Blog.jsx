import "./Blog.css";
import Blogcard from "../blogcard/Blogcard";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
function Blog(){
    const blogcontent=[
            {
                id:1,
                image:blog1,
                desc:"Best Areas for Couples to Live In Dubai, UAE",
                
            },
            {
                id:2,
                image:blog2,
                desc:"How to Verify Property Ownership in Dubai",
               
            },
            {
                id:3,
                image:blog3,
                desc:"Villa Rents in Dubai have Reached an All-Time High",
               
            },
            
    
        ];
    return(
        <div className="blog-container">
            <h2>Form our blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
            <div className="blog-cards">
                {blogcontent.map((item) => (
                        <Blogcard
                         key={item.id}
                         image={item.image}
                         desc={item.desc}
                         />
                    )

                    )}

            </div>

        </div>
    );
}
export default Blog;