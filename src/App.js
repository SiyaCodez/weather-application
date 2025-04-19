import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet"; // Import Leaflet to define a custom marker icon
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "./App.css";

const customIcon = new L.Icon({
  iconUrl: require("./components/marker-icon.png"),
  iconSize: [25, 41], 
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([20, 0]);
  const [position, setPosition] = useState(null);

  const API_KEY = "a5e2c371092b85f62293965066d151c5";

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      setWeather(response.data);
      setMapCenter([lat, lon]);
      setPosition([lat, lon]);      
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      setWeather(null);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`
      );

      if (response.data.coord) {
        const { lat, lon } = response.data.coord;
        fetchWeather(lat, lon);
      } else {
        setError("City not found.");
        setWeather(null);
      }
    } catch (err) {
      setError("City not found. Try another city.");
      setWeather(null);
    }
  };

  function MapClickHandler() {
    useMapEvents({
      click: (e) => {
        fetchWeather(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <header>
        <h1>⛅ Weather Map App</h1>
      </header>

      <div className="controls">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="searchbtn" type="submit">Search</button>
        </form>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌘"}
        </button>
      </div>

      <MapContainer center={mapCenter} zoom={4} style={{ height: "100vh", width: "100%" }} key={mapCenter.toString()}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        {position && (
          <Marker position={position} icon={customIcon}>
            <Popup>
              {weather ? (
                <div className="popup-content">
                  <h2>{weather.name || "Unknown Location"}</h2>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                  />
                  <p><strong>Condition:</strong> {weather.weather[0].description}</p>
                  <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
                  <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                  <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                </div>
              ) : (
                <p>No weather data available.</p>
              )}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherApp;
