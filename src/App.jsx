import "./App.css";
import Card from "./components/Card";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import axios from 'axios'

const apiKey = import.meta.env.API_KEY;


function CardHandler() {
    
  return (
    <Card temperature="38" 
    units="C" name="Lucknow" country="India"
      icon="//cdn.weatherapi.com/weather/64x64/night/389.png"
      text="Moderate or heavy rain with thunder"
      windspeed='30 kph' humidity='78' feelslike='30'
      visibility='2' visibilityUnit='KM' UV='1'
    />
  )
}

function App() {
  const [city, setCity] = useState('');

  const handleClick = () => {
    console.log(city);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div>
        <div className="bg">
          <h1 className="heading">Weatherion</h1>
          <div className="form-container">
            <input
              className="form"
              type="text"
              placeholder="Location"
              value={city}
              onChange={handleChange}
            />
            <button onClick={handleClick} className="search-button">
              <MdSearch />
            </button>
          </div>
        </div>
        <div className="Card-container-primary">
          <CardHandler />
        </div>
      </div>
    </>
  );
}

export default App;

//fetch data using axios from API
/* imp links
https://www.weatherapi.com/my/
https://www.weatherapi.com/api-explorer.aspx#current
https://www.weatherapi.com/docs/ */