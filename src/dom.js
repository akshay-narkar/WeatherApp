import clouds from './gifs/clouds1.gif';
import drizzle from './gifs/drizzle.webp';
import gif from './gifs/giphy.webp';
import mist from './gifs/mist.gif';
import rain from './gifs/rain.gif';
import sunny from './gifs/sunny.webp';
import thunder from './gifs/thunderstorm.gif';
import snow from './gifs/snow.gif';

export const cityname = document.getElementById('cityname');
const temperature = document.getElementById('temperature');
const main = document.getElementById('main');
const desc = document.getElementById('desc');
const img = document.getElementById('imgicon');
const feelslike = document.getElementById('feelslike');
const firsttag = document.getElementById('firsttag');
const secondtag = document.getElementById('secondtag');
const thirdtag = document.getElementById('thirdtag');
const fourthtag = document.getElementById('fourthtag');
const fifthtag = document.getElementById('fifthtag');

const toggle = document.getElementById('flexSwitchCheckDefault');

// let feels;
// let temp;
// let min;
// let max;

function temperatureunit() {
  if (toggle.checked) {
    // console.log('akshay togged checked');
    // temperature.textContent = `${json.main.temp}°F`;
    // firsttag.textContent = `Max: ${json.main.temp_max}°F`;
    // secondtag.textContent = `Min: ${json.main.temp_min}°F`;
  } else {
    // console.log('akshay togged unchecked');

    // temperature.textContent = `${json.main.temp}°C`;
    // firsttag.textContent = `Max: ${json.main.temp_max}°C`;
    // secondtag.textContent = `Min: ${json.main.temp_min}°C`;
  }
}

function gifchange(change) {
  switch (change) {
    case 'Thunderstorm':
      document.body.style.backgroundImage = `url(${thunder})`;
      break;
    case 'Drizzle':
      document.body.style.backgroundImage = `url(${drizzle})`;

      break;
    case 'Rain':
      document.body.style.backgroundImage = `url(${rain})`;

      break;
    case 'Snow':
      document.body.style.backgroundImage = `url(${snow})`;

      break;
    case 'Clear':
      document.body.style.backgroundImage = `url(${sunny})`;

      break;
    case 'Clouds':
      document.body.style.backgroundImage = `url(${clouds})`;

      break;
    default:
      document.body.style.backgroundImage = `url(${mist})`;
      break;
  }
}

export const displaydata = (json, jsonimage) => {
  toggle.checked = false;
  toggle.disabled = false;
  cityname.textContent = `${json.name},${json.sys.country}`;
  main.textContent = json.weather[0].main;
  gifchange(json.weather[0].main);
  desc.textContent = json.weather[0].description;
  if (toggle.checked) {
    temperature.textContent = `${json.main.temp}°F`;
    feelslike.textContent = `Feels like: ${json.main.feels_like}°F`;
    firsttag.textContent = `Max: ${json.main.temp_max}°F`;
    secondtag.textContent = `Min: ${json.main.temp_min}°F`;
  } else {
    temperature.textContent = `${json.main.temp}°C`;
    feelslike.textContent = `Feels like: ${json.main.feels_like}°C`;
    firsttag.textContent = `Max: ${json.main.temp_max}°C`;
    secondtag.textContent = `Min: ${json.main.temp_min}°C`;
  }
  thirdtag.textContent = `Humidity: ${json.main.humidity}%`;
  fourthtag.textContent = `Lat: ${json.coord.lat}°`;
  fifthtag.textContent = `Long: ${json.coord.lon}°`;
  img.setAttribute('src', jsonimage);
};

export const nodata = (message) => {
  toggle.checked = false;
  toggle.disabled = true;
  cityname.textContent = message;
  main.textContent = '';
  desc.textContent = '';
  temperature.textContent = '';
  feelslike.textContent = '';
  firsttag.textContent = '';
  secondtag.textContent = '';
  feelslike.textContent = '';
  firsttag.textContent = '';
  secondtag.textContent = '';
  thirdtag.textContent = '';
  fourthtag.textContent = '';
  fifthtag.textContent = '';
  img.setAttribute('src', '');
  document.body.style.backgroundImage = `url(${gif})`;
};

toggle.addEventListener('click', temperatureunit);
