import five from "../images/timer/5.png";
import ten from "../images/timer/10.png";
import fifteen from "../images/timer/15.png";
import twenty from "../images/timer/20.png";
import twentyFive from "../images/timer/25.png";
import thirty from "../images/timer/30.png";
import thirtyFive from "../images/timer/35.png";
import forty from "../images/timer/40.png";
import fortyFive from "../images/timer/45.png";
import fifty from "../images/timer/50.png";
import fiftyFive from "../images/timer/55.png";
import sixty from "../images/timer/60.png";
import plantBased from "../images/plant-based.png";

const MealCard = ({ meal }) => {
  console.log(meal);
  let time;

  if (meal.time === 5) {
    time = <img src={five} alt="five" />;
  } else if (meal.time === 10) {
    time = <img src={ten} alt="ten" />;
  } else if (meal.time === 15) {
    time = <img src={fifteen} alt="fifteen" />;
  } else if (meal.time === 20) {
    time = <img src={twenty} alt="twenty" />;
  } else if (meal.time === 25) {
    time = <img src={twentyFive} alt="twenty-five" />;
  } else if (meal.time === 30) {
    time = <img src={thirty} alt="thirty" />;
  } else if (meal.time === 35) {
    time = <img src={thirtyFive} alt="thirty-five" />;
  } else if (meal.time === 40) {
    time = <img src={forty} alt="forty" />;
  } else if (meal.time === 45) {
    time = <img src={fortyFive} alt="forty-five" />;
  } else if (meal.time === 50) {
    time = <img src={fifty} alt="fifty" />;
  } else if (meal.time === 55) {
    time = <img src={fiftyFive} alt="fifty-five" />;
  } else if (meal.time === 60) {
    time = <img src={sixty} alt="sixty" />;
  }

  return (
    <li>
      <article className="result">
        <div className="result_img">
          <img className="result_img_src" src={meal.image} alt={meal.image} />
        </div>
        <div className="result_info">
          <p className="result_info_title">{meal.name}</p>
          <div className="result_info_time">{time}</div>
        </div>

        <div className="result_vegan">
          {meal.category === "Vegano" && <img src={plantBased} alt="sixty" />}
        </div>
      </article>
    </li>
  );
};

export default MealCard;
