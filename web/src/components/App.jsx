import { useEffect, useState } from "react";
import "../scss/App.scss";
import Landing from "./Landing";
import Start from "./Start";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/callToApi";
import MealList from "./MealList";
import Ingredients from "./Ingredients";
import Favorites from "./Favorites";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setMeals(data.result);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start" element={<Start meals={meals} />}>
          <Route index element={<MealList meals={meals} />} />
          <Route path="menus" element={<MealList meals={meals} />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
