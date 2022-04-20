import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "cities",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      const newCity = {
        id: Date.now(),
        city: action.payload.city,
        country: action.payload.country,
        main: action.payload.main,
        description: action.payload.description,
        temp: action.payload.temp,
        tempMax: action.payload.tempMax,
        tempMin: action.payload.tempMin,
        feelsLike: action.payload.feelsLike,
        humidity: action.payload.humidity,
        pressure: action.payload.pressure,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
      };

      state.push(newCity);
    },
    updateCity: (state, action) => {
      const cityToUpdate = state.findIndex((city) => {
        return city.city === action.payload.city;
      });

      const updatedCity = {
        id: action.payload.id,
        city: action.payload.city,
        country: action.payload.country,
        main: action.payload.main,
        description: action.payload.description,
        temp: action.payload.temp,
        tempMax: action.payload.tempMax,
        tempMin: action.payload.tempMin,
        feelsLike: action.payload.feelsLike,
        humidity: action.payload.humidity,
        pressure: action.payload.pressure,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
      };

      state[cityToUpdate] = updatedCity;
    },
    deleteCity: (state, action) => {
      return state.filter((city) => city.id !== action.payload.id);
    },
  },
});

export const { addCity, updateCity, deleteCity } = citySlice.actions;

export default citySlice.reducer;
