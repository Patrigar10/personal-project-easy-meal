import { useEffect, useState } from "react";
import "../scss/App.scss";
import Landing from "./Landing";
import Start from "./Start";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/callToApi";

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
        <Route path="/start" element={<Start meals={meals} />} />
      </Routes>
    </>
  );
}

export default App;
