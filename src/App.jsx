import "./App.css";
import Card from "./components/Card";
import { MdSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;


function App() {
  const [city, setCity] = useState("");

  const [data , setData] = useState(null);

  

  const handleClick = () => {
    if (!city) {
      
    }
    const link = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    axios
      .get(link)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

          <CardHandler data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;

function CardHandler({data }) {
  if (!data) {
    return null;
  }

  return (
    <Card
      temperature={data.current.temp_c}
      units="C"
      name={data.location.name}
      country={data.location.country}
      icon={data.current.condition.icon}
      text={data.current.condition.text}
      windspeed={`${data.current.wind_kph} kph`}
      humidity={`${data.current.humidity}%`}
      feelslike={`${data.current.feelslike_c}°C`}
      visibility={`${data.current.vis_km} KM`}
      UV={`${data.current.uv}`}
    />
  );
}
 



//fetch data using axios from API
/* imp links
https://www.weatherapi.com/my/
https://www.weatherapi.com/api-explorer.aspx#current
https://www.weatherapi.com/docs/ */
