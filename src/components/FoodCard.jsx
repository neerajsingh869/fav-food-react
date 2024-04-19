/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
  return (
    <div className="flex flex-col w-40 md:w-60 lg:w-80 p-4 pt-8 cursor-pointer bg-blue-200 rounded-xl">
      <p className="font-semibold text-lg pb-2">{item.name}</p>
      <div className="h-4/5">
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
