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
    console.log(change)
  switch (change) {
    case 'Thunderstorm':
      document.body.style.backgroundImage = "url('../src/gifs/thunderstorm.gif')";
      break;
    case 'Drizzle':
      document.body.style.backgroundImage = "url('../src/gifs/drizzle.webp')";

      break;
    case 'Rain':
      document.body.style.backgroundImage = "url('../src/gifs/rain.gif')";

      break;
    case 'Snow':
      document.body.style.backgroundImage = "url('../src/gifs/snow.gif')";

      break;
    case 'Clear':
      document.body.style.backgroundImage = "url('../src/gifs/sunny.webp')";

      break;
    case 'Clouds':
      document.body.style.backgroundImage = "url('../src/gifs/clouds1.gif')";

      break;
    default:
      document.body.style.backgroundImage = "url('../src/gifs/mist.gif')";
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
  document.body.style.backgroundImage = "url('../src/gifs/giphy.webp')";
};

toggle.addEventListener('click', temperatureunit);
