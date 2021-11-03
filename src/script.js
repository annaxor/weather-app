// Challenge 1

function formatDate(date) {
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes < 10) {
      hour = `0${minutes}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
  
    return `${day} ${hour}:${minutes}`;
  }
  
  let now = new Date();
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(now);
  
  //Challenge 2 // Homework API
  
  function displayWeather(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#weather-description").innerHTML =
      response.data.weather[0].main;
  }
  function searchCity(city) {
    let apiKey = "2fe554250b7d50682b853b2611b6c3db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
  }
  
  function searchLocation(position) {
    let apiKey = "2fe554250b7d50682b853b2611b6c3db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);
  
  let currentLocationBtn = document.querySelector("#btn-current-city");
  currentLocationBtn.addEventListener("click", getCurrentLocation);
  
  searchCity("New York");
  