import { food } from "../data/Food";
import FoodCard from "./FoodCard";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10">
      {food.map((item, index) => (
        <FoodCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FoodItems;