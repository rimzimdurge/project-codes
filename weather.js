const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
  const api_key = "ef6e90e05a0e1228543e618f2a8a6d6c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then(response =>response.json());

  if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

  switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = "/weather/cloud.png";
        break;
        case 'Clear':
            weather_img.src = "/weather/sun.png";
            break;
            case 'Rain':
                weather_img.src = "/weather/simplerain.png";
                break;
                case 'Haze':
                    weather_img.src = "/weather/haze.png";
                    break;
                    case 'Snow':
                        weather_img.src = "/weather/snow.png";
                        break;
    
  }
}
searchBtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});