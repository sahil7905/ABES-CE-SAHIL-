import React, { useEffect, useState } from "react";
import Weather from "./component/Weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [error, setError] = useState(null);

  const apiKey = "YOUR_API_KEY_HERE"; 

  useEffect(() => {
    if (!city) return;

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
      });
  }, [city]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid gray",
          marginBottom: "20px",
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <Weather props={weather} />}
    </div>
  );
}

export default App;
