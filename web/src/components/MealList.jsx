import MealCard from "./MealCard";

const MealList = ({ meals }) => {
  return (
    <ul className="search_list">
      {meals.map((meal) => {
        return <MealCard meal={meal} />;
      })}
    </ul>
  );
};

export default MealList;
