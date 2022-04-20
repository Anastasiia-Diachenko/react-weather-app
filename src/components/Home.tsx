import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
// @ts-ignore
import FindCityForm from "../components/FindCityForm.tsx";
// @ts-ignore
import CitiesList from "../components/CitiesList.tsx";
// @ts-ignore
import CardToAdd from "../components/CardToAdd.tsx";
// @ts-ignore
import { fetchWeatherAction } from "../redux/weatherSlice.ts";

const Home = () => {
  const [cardToAddVisible, setCardToAddVisible] = useState(null);

  const dispatch = useDispatch();

  const gettingWeather = (e: {
    preventDefault: () => void;
    target: { elements: { city: { value: any } } };
  }) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    dispatch(fetchWeatherAction(city));

    setCardToAddVisible(true);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "56px",
          color: "white",
          textShadow: "7px 5px 2px black, 10px 10px 1rem white",
        }}
      >
        Weather App
      </h1>
      <FindCityForm
        gettingWeather={gettingWeather}
        setCardToAddVisible={setCardToAddVisible}
      />
      {cardToAddVisible && (
        <Card
          variant="outlined"
          style={{ margin: "16px auto", width: "30vw", opacity: "90%" }}
        >
          <CardToAdd />
        </Card>
      )}
      <CitiesList />
    </div>
  );
};

export default Home;
