import { useEffect, useState } from "react";
import "./App.css";
import "./report.js";
import { getGeoLocation } from "./report.js";
import { fetchWeatherReport } from "./report.js";

// apiStatus => "init" | "pending" | "success" | "error"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getCalculatedTemp = (unit, temp) => {
  if (unit === "c") {
    return parseInt(temp - 273.15);
  } else if (unit === "f") {
    return parseInt(1.8 * (temp - 273) + 32);
  }
  return parseInt(temp);
};

const date = new Date();

function App() {
  const [apiStatus, setApiStatus] = useState("init");
  const [report, setReport] = useState(null);
  const [unit, setUnit] = useState("c"); // "c" => celcius , "f" => fahrenheit

  const toggleUnit = () => {
    setUnit(unit === "c" ? "f" : "c");
  };

  useEffect(() => {
    // fetch the location
    // fetch the report
    (async function () {
      setApiStatus("pending");
      const location = await getGeoLocation();
      const { success, data } = await fetchWeatherReport(location.coords);
      if (success) {
        setApiStatus("success");
        setReport(data);
      } else setApiStatus("error");
    })();
  }, []);

  // apiStatus => "pending" | "init" => Loader
  // apiStatus => "error" => <button>Retry</button>
  // apiStatus => "success" => UI

  if (apiStatus === "pending" || apiStatus === "init") {
    return <p>Loading ...</p>;
  }

  if (apiStatus === "error") {
    return <button>Retry</button>;
  }

  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();

  const time = `${hrs > 12 ? hrs - 12 : hrs}:${mins} ${hrs > 12 ? "PM" : "AM"}`;

  return (
    <div className="App">
      <h2>{"Warangal"}</h2>
      <div className="weather-report">
        <div className="left">
          <img src="images/cloudy.png" alt="cloud" />
          <div className="temparature">
            <h3>{getCalculatedTemp(unit, report.temparature)}</h3>
            <div className="switch">
              <button onClick={toggleUnit} disabled={unit === "c"}>
                °C
              </button>
              <span>|</span>
              <button onClick={toggleUnit} disabled={unit === "f"}>
                °F
              </button>
            </div>
          </div>
          <div className="parameters">
            <span>Humidity: {report.humidity}</span>
            <span>Wind Speed: {report.windSpeed}</span>
          </div>
        </div>
        <div className="right">
          <h3>Weather</h3>
          <p>
            {days[date.getDay()]} {time}
          </p>
          <span>{report.main}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

// when do we need useEffect hook ?
// API calls has to be made inside useEffect's callback.

// An effect can return another function(cleanup) or nothing.
