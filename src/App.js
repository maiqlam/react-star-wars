import { useEffect, useState } from "react";
import getAllStarships from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStarships();
      console.log(data);
      setStarships(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
    <header>STAR WARS STARSHIPS</header>
    <div className="starshipContainer">
    {starships.map((starship) => (
        <StarShipCard 
          starship={starship}
        />
      ))}</div>
    </div>
  );
}

export default App;
