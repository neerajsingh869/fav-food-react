import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import FoodCard from "./components/FoodCard";

function App() {
  const [foodClicked, setFoodClicked] = useState(null);

  const handleFoodClick = (foodItem) => {
    setFoodClicked(foodItem);
  };

  return (
    <main className="p-8">
      {foodClicked && (
        <div className="flex justify-center">
          <FoodCard item={foodClicked} />
        </div>
      )}
      <h1 className="text-3xl font-semibold mb-8">
        Select your favourite food
      </h1>
      <FoodItems handleFoodClick={handleFoodClick} />
    </main>
  );
}

export default App;
