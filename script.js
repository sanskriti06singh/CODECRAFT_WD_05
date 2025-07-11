const mockWeatherData = {
  "London": {
    temp: 18,
    description: "light rain",
    humidity: 72,
    wind: 4.2,
    pressure: 1012,
    visibility: 10,
    icon: "10d"
  },
  "Tokyo": {
    temp: 26,
    description: "clear sky",
    humidity: 60,
    wind: 3.1,
    pressure: 1008,
    visibility: 9,
    icon: "01d"
  },
  "Delhi": {
    temp: 35,
    description: "sunny",
    humidity: 40,
    wind: 5.5,
    pressure: 1005,
    visibility: 7,
    icon: "01d"
  },
  "New York": {
    temp: 22,
    description: "overcast clouds",
    humidity: 68,
    wind: 6.2,
    pressure: 1015,
    visibility: 10,
    icon: "04d"
  },
  "Sydney": {
    temp: 16,
    description: "scattered clouds",
    humidity: 80,
    wind: 4.9,
    pressure: 1013,
    visibility: 8,
    icon: "03d"
  }
};

function showWeather() {
  const selectedCity = document.getElementById("citySelect").value;

  if (!selectedCity || !mockWeatherData[selectedCity]) {
    alert("Please select a valid city.");
    return;
  }

  const data = mockWeatherData[selectedCity];

  // Populate weather data
  document.getElementById("cityName").innerText = selectedCity;
  document.getElementById("description").innerText = data.description;
  document.getElementById("temperature").innerText = `${data.temp}°C`;
  document.getElementById("humidity").innerText = `Humidity: ${data.humidity}%`;
  document.getElementById("wind").innerText = `Wind: ${data.wind} m/s`;
  document.getElementById("pressure").innerText = `Pressure: ${data.pressure} hPa`;
  document.getElementById("visibility").innerText = `Visibility: ${data.visibility} km`;

  // Show icon
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  document.getElementById("weatherCard").classList.remove("hidden");
}
