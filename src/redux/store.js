import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import weatherReducer from "./weatherSlice.ts";
import currentWeatherReducer from "./currentWeatherSlice.ts";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState"));
  }
};

export default configureStore({
  reducer: {
    cities: cityReducer,
    weather: weatherReducer,
    currentWeather: currentWeatherReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
