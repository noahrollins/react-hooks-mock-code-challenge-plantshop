import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants }) {

  const card = allPlants.map((plant)=>{
    return <PlantCard 
      key= {plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      
    />
  }) 

  return (
    <ul className="cards">
      {card}
    </ul>
  );
}

export default PlantList;
