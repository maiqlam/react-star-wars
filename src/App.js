import { useEffect, useState } from "react";
import getAllStarships from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllStarships();
      console.log(data);
      setStarships(data);
    }
    fetchData();
  }, []);

  function handleStarshipClick(starship) {
    setSelectedStarship(starship)
  }

  return (
    <div className="App">
    <header>STAR WARS STARSHIPS</header>
    <div className="starshipContainer">
    {starships.map((starship) => (
        <StarShipCard 
          starship={starship}
          onClick={() => handleStarshipClick(starship)}
        />
      ))}
      </div>
      {/* <div className="seeMore">
        <button className="moreBtn">See More</button>
      </div> */}
    </div>
  );
}

export default App;
