import { useState } from "react";

import Hero from "../Components/Hero";






import carsData from "../data/cars";

function Home() {
  const [filteredCars, setFilteredCars] = useState(carsData);

  return (
    <>
      <Hero />

   

     
      


    </>
  );
}

export default Home;