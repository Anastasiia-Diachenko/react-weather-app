import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Home from "./components/Home.tsx";
// @ts-ignore
import CityDetails from "./components/CityDetails.tsx";
import NoPage from "./components/NoPage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 404 rounte */}
          <Route path="*" element={<NoPage />} />

          <Route path="/" element={<Home />} />
          <Route
            path="/:id/:city/:country/:main/:description/:temp/:tempMax/:tempMin/:feelsLike/:humidity/:pressure/:sunrise/:sunset"
            element={<CityDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
