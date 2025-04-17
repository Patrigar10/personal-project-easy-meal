const MealCard = ({ meal }) => {
  console.log(meal);
  return (
    <li>
      <article className="result">
        <div className="result_img">
          <img className="result_img_src" src={meal.image} alt={meal.image} />
        </div>
        <h3 className="result_title">{meal.name}</h3>
      </article>
    </li>
  );
};

export default MealCard;
