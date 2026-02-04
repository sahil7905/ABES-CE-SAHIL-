import React from "react";
import "./Weather.css";

function Weather({ props }) {
  return (
    <div id="card">
      <h2>{props.name}</h2>
      <h3>🌡️ Temperature: {props.main.temp} °C</h3>
      <h4>💧 Humidity: {props.main.humidity}%</h4>
      <h4>🌥️ Condition: {props.weather[0].description}</h4>
      <h4>🌬️ Wind Speed: {props.wind.speed} m/s</h4>
    </div>
  );
}

export default Weather;
