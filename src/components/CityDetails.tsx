import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";

const CityDetails = () => {
  const {
    city,
    country,
    main,
    description,
    temp,
    tempMax,
    tempMin,
    feelsLike,
    humidity,
    pressure,
    sunrise,
    sunset,
  } = useParams();

  let sunriseDate = new Date(+sunrise * 1000);
  let timeSunrise = sunriseDate.toLocaleTimeString();

  let sunsetDate = new Date(+sunset * 1000);
  let timeSunset = sunsetDate.toLocaleTimeString();

  return (
    <Card
      variant="outlined"
      style={{
        margin: "auto",
        marginTop: "15vw",
        width: "40vw",
        opacity: "90%",
        border: "7px solid grey",
      }}
    >
      <div
        style={{
          padding: "8px",
          fontSize: "21px",
          textShadow: "2px 2px 2px grey",
        }}
      >
        <p>
          <b>City:</b> {city}, {country}
        </p>
        <p>
          <b>Weather:</b> {main}
          <span style={{ fontStyle: "italic" }}> ({description})</span>
        </p>
        <p>
          <b>Temperature:</b> {temp}℃
        </p>
        <p style={{ fontStyle: "italic" }}>
          (max: {tempMax}℃, min: {tempMin}℃, feels like: {feelsLike}℃)
        </p>
        <p>
          <b>Humidity:</b> {humidity}%
        </p>
        <p>
          <b>Pressure:</b> {pressure}
        </p>
        <p>
          <b>Sunrise time:</b> {timeSunrise}
        </p>
        <p>
          <b>Sunset time:</b> {timeSunset}
        </p>
      </div>
    </Card>
  );
};

export default CityDetails;
