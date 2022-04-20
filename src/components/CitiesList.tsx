import React, { useState } from "react";
import Card from "@mui/material/Card";
// @ts-ignore
import CityCard from "./CityCard.tsx";

const CitiesList = () => {
  const [deletingCity, setDeletingCity] = useState(false);
  const [updatingCity, setUpdatingCity] = useState(false);
  const cities = JSON.parse(localStorage.getItem("applicationState"));

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {cities?.cities?.map(
        (city: {
          id: React.Key;
          city: string;
          country: string;
          main: string;
          description: string;
          temp: string;
          tempMax: string;
          tempMin: string;
          feelsLike: string;
          humidity: string;
          pressure: string;
          sunrise: string;
          sunset: string;
        }) => (
          <li
            key={city.id}
            style={{
              margin: "6px",
              width: "30vw",
              listStyle: "none",
              opacity: "90%",
            }}
          >
            <Card variant="outlined">
              <CityCard
                id={city.id}
                city={city.city}
                country={city.country}
                main={city.main}
                description={city.description}
                temp={city.temp}
                tempMax={city.tempMax}
                tempMin={city.tempMin}
                feelsLike={city.feelsLike}
                humidity={city.humidity}
                pressure={city.pressure}
                sunrise={city.sunrise}
                sunset={city.sunset}
                setUpdatingCity={setUpdatingCity}
                updatingCity={updatingCity}
                setDeletingCity={setDeletingCity}
                deletingCity={deletingCity}
              />
            </Card>
          </li>
        )
      )}
    </ul>
  );
};

export default CitiesList;
