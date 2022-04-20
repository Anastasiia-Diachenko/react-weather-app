import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "5d09238c544a44beab28768973f5affa";

// action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload: string, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slices
const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: "Loaded" },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherAction.pending, (state, _action) => {
      state["loading"] = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state["weather"] = action?.payload;
      state["loading"] = false;
      state["error"] = undefined;
    });
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state["loading"] = false;
      state["weather"] = undefined;
      state["error"] = action?.payload;
    });
  },
  reducers: undefined,
});

export default weatherSlice.reducer;
