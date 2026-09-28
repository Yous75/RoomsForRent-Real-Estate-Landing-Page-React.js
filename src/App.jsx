import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Listings from "./components/listing/Listings";
import Estate from "./components/estate/Estate";
import Dream from "./components/dream_house/Dream";
import Properties from "./components/properties/Properties";
import Trust from "./components/trust/Trust";
import Agents from "./components/agents/Agents";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Listings />
      <Estate />
      <Dream />
      <Properties />
      <Trust/>
      <Agents />
      <Blog />
      <Footer />
    </>
  );
}

export default App;