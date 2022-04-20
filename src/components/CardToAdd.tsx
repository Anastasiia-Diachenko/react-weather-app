import React from "react";
import { useSelector } from "react-redux";

const CardToAdd = () => {
  const weather = useSelector((state) => state["weather"].weather);

  return (
    <div style={{ padding: "8px" }}>
      {weather?.name && (
        <>
          <p style={{ fontSize: "18px" }}>
            <b>City:</b> {weather?.name}, {weather?.sys.country}
          </p>
          <p>
            <b>Weather:</b> {weather?.weather[0].main}{" "}
            <span style={{ fontStyle: "italic" }}>
              ({weather?.weather[0].description})
            </span>
          </p>
          <p>
            <b>Temperature:</b> {weather?.main.temp.toFixed()}℃
          </p>
          <p style={{ fontStyle: "italic" }}>
            (max: {weather?.main.temp_max.toFixed()}℃, min:{" "}
            {weather?.main.temp_min.toFixed()}℃, feels like:{" "}
            {weather?.main.feels_like.toFixed()}℃)
          </p>
          <p>
            <b>Humidity:</b> {weather?.main.humidity}%
          </p>
        </>
      )}
    </div>
  );
};

export default CardToAdd;
