import "./Listing.css";
import Card from "../card/Card";
import dubai from "../../assets/dubai.jpg";
import abudhabi from "../../assets/abudhabi.jpg";
import sharjah from "../../assets/sharjah.jpg";
import alain from "../../assets/alain.jpg";
import ajman from "../../assets/ajman.jpg";
import fujairah from "../../assets/fujairah.jpg";
import { useState } from "react";

function Listings() {
  const listings = [
    {
      id: 1,
      image: dubai,
      city: "Dubai",
      total: "1570 listing",
    },
    {
      id: 2,
      image: abudhabi,
      city: "Abu Dhabi",
      total: "1570 listing",
    },
    {
      id: 3,
      image: sharjah,
      city: "Sharjah",
      total: "1570 listing",
    },
    {
      id: 4,
      image: alain,
      city: "Al Ain",
      total: "1570 listing",
    },
    {
      id: 5,
      image: ajman,
      city: "Ajman",
      total: "1570 listing",
    },
    {
      id: 6,
      image: fujairah,
      city: "Fujairah",
      total: "1570 listing",
    },
    {
  id: 7,
  image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=800&q=80",
  city: "Ras Al Khaimah",
  total: "1570 listing",
},
{
  id: 8,
  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  city: "Umm Al Quwain",
  total: "1570 listing",
},
{
  id: 9,
  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  city: "Dubai Marina",
  total: "1570 listing",
},
{
  id: 10,
  image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
  city: "Palm Jumeirah",
  total: "1570 listing",
},
{
  id: 11,
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  city: "Business Bay",
  total: "1570 listing",
},
{
  id: 12,
  image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  city: "Downtown Dubai",
  total: "1570 listing",
},
{
  id: 13,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  city: "Jumeirah",
  total: "1570 listing",
},
{
  id: 14,
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  city: "Deira",
  total: "1570 listing",
},
{
  id: 15,
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  city: "Al Barsha",
  total: "1570 listing",
},
{
  id: 16,
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  city: "Mirdif",
  total: "1570 listing",
},
];
const [start, setStart] = useState(0);
const [end, setEnd] = useState(6);
const souslistings = listings.slice(start, end);
function daniha() {
  if (end >= listings.length) {
    setStart(0);
    setEnd(6);
  } else {
    setStart(start + 6);
    setEnd(end + 6);
    
  }
}
  return (
    <section className="listings">

      <h2>Explore our listings</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer vel lobortis justo.
      </p>
      <div>
      <button className="arrow left">
        &#8592;
      </button>
      <div className="cards-container">
        {souslistings.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            city={item.city}
            total={item.total}
          />
        ))};
      </div>
      <button  className="arrow right" onClick={daniha}>
        &#8594;
      </button>
      </div>

    </section>
  );
}

export default Listings;