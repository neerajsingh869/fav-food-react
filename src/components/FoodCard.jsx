/* eslint-disable react/prop-types */

const FoodCard = ({ item, handleFoodClick }) => {
  return (
    <div
      className="flex flex-col w-40 md:w-60 lg:w-80 p-4 pt-8 cursor-pointer mb-6 bg-blue-200 rounded-xl"
      onClick={() => handleFoodClick && handleFoodClick(item)}
    >
      <p className="font-semibold text-lg pb-2">{item.name}</p>
      <div className="h-full">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default FoodCard;
