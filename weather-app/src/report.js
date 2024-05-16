const apiKey = "YOUR_TOKEN";

export function getGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchWeatherReport({ latitude, longitude }) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const weatherReport = await response.json();
    const filteredReport = {
      temparature: weatherReport.main.temp,
      main: weatherReport.weather[0].main,
      description: weatherReport.weather[0].description,
      city: weatherReport.name,
      humidity: weatherReport.main.humidity,
      windSpeed: weatherReport.wind.speed,
    };

    return { success: true, data: filteredReport };
  } catch (error) {
    alert("Failed to fetch weather report");
    return { success: false };
  }
}

const dummyReport = {
  coord: {
    lon: 79.6479,
    lat: 17.5914,
  },
  weather: [
    {
      id: 502,
      main: "Rain",
      description: "heavy intensity rain",
      icon: "10n",
    },
  ],
  base: "stations",
  main: {
    temp: 299.01,
    feels_like: 299.79,
    temp_min: 299.01,
    temp_max: 299.01,
    pressure: 1011,
    humidity: 82,
    sea_level: 1011,
    grnd_level: 984,
  },
  visibility: 10000,
  wind: {
    speed: 1.16,
    deg: 127,
    gust: 2.48,
  },
  rain: {
    "1h": 4.6,
  },
  clouds: {
    all: 99,
  },
  dt: 1715874798,
  sys: {
    country: "IN",
    sunrise: 1715818133,
    sunset: 1715864813,
  },
  timezone: 19800,
  id: 1264409,
  name: "Mahbūbābād",
  cod: 200,
};
