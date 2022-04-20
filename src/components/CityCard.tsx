import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { updateCity, deleteCity } from "../redux/citySlice";
// @ts-ignore
import { fetchCurrentWeatherAction } from "../redux/currentWeatherSlice.ts";

const CityCard = ({
  id,
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
  setUpdatingCity,
  updatingCity,
  setDeletingCity,
  deletingCity,
}) => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(
    (state) => state["currentWeather"].weather
  );

  const handleUpdate = () => {
    dispatch(fetchCurrentWeatherAction(city));
  };

  const handleUpdateTest = () => {
    dispatch(
      updateCity({
        id,
        city,
        country,
        main: currentWeather?.weather[0].main,
        description: currentWeather?.weather[0].description,
        temp: currentWeather?.main.temp,
        tempMax: currentWeather?.main.temp_max,
        tempMin: currentWeather?.main.temp_min,
        feelsLike: currentWeather?.main.feels_like,
        humidity: currentWeather?.main.humidity,
        pressure: currentWeather?.main.pressure,
        sunrise: currentWeather?.sys.sunrise,
        sunset: currentWeather?.sys.sunset,
      })
    );

    setUpdatingCity(!updatingCity);
  };

  const handleDelete = () => {
    dispatch(deleteCity({ id }));
    setDeletingCity(!deletingCity);
  };

  return (
    <div style={{ padding: "8px" }}>
      <Link
        className=""
        to={`/${id}/${city}/${country}/${main}/${description}/${temp}/${tempMax}/${tempMin}/${feelsLike}/${humidity}/${pressure}/${sunrise}/${sunset}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <p style={{ fontSize: "18px" }}>
          <b>City:</b> {city}, {country}
        </p>
        <p>
          <b>Weather:</b> {main}{" "}
          <span style={{ fontStyle: "italic" }}>({description})</span>
        </p>
        <p>
          <b>Temperature:</b> {temp.toFixed()}℃
        </p>
        <p style={{ fontStyle: "italic" }}>
          (feels like: {feelsLike.toFixed()}℃)
        </p>
      </Link>
      <div>
        <Button
          variant="contained"
          type="button"
          onClick={handleUpdate}
          style={{ margin: "8px", width: "80%" }}
        >
          Get weather
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={handleUpdateTest}
          style={{ margin: "8px", width: "80%" }}
        >
          Update weather
        </Button>
      </div>
      <DeleteForeverIcon style={{ cursor: "pointer" }} onClick={handleDelete} />
    </div>
  );
};

export default CityCard;
