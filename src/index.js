function showTemperature(response) {
  let currentTemperature = document.querySelector("#currentTemperature");
  let temperature = Math.round(response.data.main.temp);
  currentTemperature.innerHTML = `${temperature}°C`;
}
function chooseCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let cityChosen = document.querySelector("#input-field");
  let apiKey = "1ddfe6760d70aea0fb7088fd8803337f";
  let endPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "metric";
  let apiUrl = `${endPoint}q=${cityChosen.value}&units=${unit}&appId=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  cityInput.innerHTML = `${cityChosen.value}`;
}
let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", chooseCity);

let now = new Date();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let currentDate = document.querySelector("#current-date");
function showCurrentDate() {
  currentDate.innerHTML = `${day} ${hour}:${minutes}`;
}
showCurrentDate();

function getLocation(position) {
  let apiKey = "1ddfe6760d70aea0fb7088fd8803337f";
  let endPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let unit = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `${endPoint}lat=${lat}&lon=${lon}&units=${unit}&appId=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function showCurrentTemperature() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let currentTemperature = document.querySelector("#currentLocation");
currentTemperature.addEventListener("click", showCurrentTemperature);

// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city");
// city = city.trim();
// city = city.toLowerCase();
// if (city in weather) {
//   alert(
//     `It is currently ${Math.round(weather[city].temp)}°C (${
//       Math.round(weather[city].temp * 9) / 5 + 32
//     }°F) in ${city} with a humidity of ${weather[city].humidity}%`
//   );
// } else
//   {alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );}
