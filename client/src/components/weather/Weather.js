import React from "react";
import Axios from "axios";

function Weather(){
    const [coord, setCoord] = React.useState({});
    const [weather, setWeather] = React.useState([{
                                                    description: ""}]);
    const [city, setCity] = React.useState("London");
    const [temp, setTemp] = React.useState({
                                            "temp": "",
                                            "feels_like": "",
                                            "humidity": ""});
    const [result, setResult] = React.useState({
                                                "name": "",
                                                "sys": {"country": ""}});
    const [showDetails, setShowDetails] = React.useState(false);

    function getWeatherData(){
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=API_KEY")
        .then((response) => {
            setShowDetails(true);
            setCoord(response.data.coord);
            setWeather(response.data.weather);
            setTemp(response.data.main);
            setResult(response.data);
        })
        .catch((err) => {
            alert("Sorry, either that city is out of scope of this API or the entered cityName is wrong")
            console.log(err);
        })
    };

    return <> 
    <br />
    <br />
    <div class="card" style={{
          width: 250}}>
  <div class="card-body">
    <h5 class="card-title">Know your weather</h5>
    <input 
            name="cityName"
            placeholder="London"
            onChange={(event) => {
                setCity(event.target.value)
            }}
        />
    <br />
    <br />
        <button 
            className="btn btn-primary"
            type="submit"
            onClick={ getWeatherData }
        >Get Weather Data</button>
    
        {showDetails
        ? <><hr />
        <p className="card-text">
            Location: { result.name  }, { result.sys.country }<br />
            Lat: { coord.lat }<br />
            Lon: { coord.lon }<br />
            Weather: { weather[0].description }<br />
            Temperature: { temp.temp }<br />
            Feels Like: { temp.feels_like }<br />
            Humidity: { temp.humidity }
        </p></>
        : null}    
  </div>
</div>
    </>;
};

export default Weather;