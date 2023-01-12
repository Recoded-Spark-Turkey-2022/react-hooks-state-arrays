import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");
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

  function handelDeletall(id) {
    const index = foods.filter((food) => food.id === id);
    if (index !== -1) {
      const deletedFood = foods.slice(index, index);
      setFoods(deletedFood);
    }
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  // function handleHeatInc(id) {
  //   const newFoodArray = foods.map((food) => {
  //     if (food.id === id) {
  //       return {
  //         heatLevel: food.heatLevel + 1,
  //       };
  //     } else {
  //       return food;
  //     }
  //   });
  //   setFoods(newFoodArray);
  // }
  // const foodList = foods.map((food) => (
  //   <li onClick={handleHeatInc} key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleFilterChange(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <button onClick={handleDeleteFood}>Delete latest Food</button>
      <button onClick={handelDeletall}>Delete all Food</button>

      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
