import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { addCity } from "../redux/citySlice";

const FindCityForm = ({ setCardToAddVisible, gettingWeather }) => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state["weather"].weather);

  const handleAddCity = () => {
    dispatch(
      addCity({
        city: weather?.name,
        country: weather?.sys.country,
        main: weather?.weather[0].main,
        description: weather?.weather[0].description,
        temp: weather?.main.temp,
        tempMax: weather?.main.temp_max,
        tempMin: weather?.main.temp_min,
        feelsLike: weather?.main.feels_like,
        humidity: weather?.main.humidity,
        pressure: weather?.main.pressure,
        sunrise: weather?.sys.sunrise,
        sunset: weather?.sys.sunset,
      })
    );
    setCardToAddVisible(false);
  };

  return (
    <>
      <form onSubmit={gettingWeather}>
        <input
          type="text"
          name="city"
          placeholder="Please enter a city"
          style={{ width: "18%", height: "24px" }}
        />
        <div>
          <Button
            variant="contained"
            type="submit"
            style={{ margin: "16px", width: "19%" }}
          >
            Get weather
          </Button>
        </div>
      </form>
      <div>
        <Button
          variant="contained"
          type="submit"
          onClick={handleAddCity}
          style={{ width: "19%" }}
        >
          Add city to the list
        </Button>
      </div>
    </>
  );
};

export default FindCityForm;
