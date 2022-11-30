import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(plants => {
        setAllPlants(plants)
      })
  }, [])

  function addNewPlant(newPlant) {
    setAllPlants([...allPlants, newPlant])
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search allPlants={allPlants}/>
      <PlantList allPlants={allPlants}/>
    </main>
  );
}

export default PlantPage;
