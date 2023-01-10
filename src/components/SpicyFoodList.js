import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const freshspicyFood = [...foods, newFood];
    setFoods(freshspicyFood);
    console.log(newFood, "newFood");
  }

  function handleDeleteFood(id) {
    const index = foods.filter((food) => food.id === id);
    if (index !== -1) {
      const newFoodArray = foods
        .slice(foods - 1, index)
        .concat(foods.slice(index, foods.length - 1));
      setFoods(newFoodArray);
    }
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={handleDeleteFood}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
