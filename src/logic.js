import { nodata, displaydata, cityname } from './dom';

const key = 'API_KEY_HERE';
export const weatherdata = document.getElementById('weatherdata');
let json1 = 0; // const random = "Akshay"; // important.. why doenst it show in console?

async function findtemp(e = false, location) {
  e.preventDefault();
  cityname.textContent = 'Fetching Data....';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

  const response = await fetch(url);
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  if (response.ok) {
    json1 = await response.json();
    const { icon } = json1.weather[0];
    const iconurl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const jsonimage = await fetch(iconurl);
    if (jsonimage.ok) {
      displaydata(json1, jsonimage.url);
    } else {
      nodata('City not found');

      //   alert(`HTTP-Error: ${response.status}`);
    }
  } else {
    nodata('City not found');

    // alert("HTTP-Error: " + response.status);
  }
}

export function start() {
  const submitweather = document.querySelector('#formforweather');
  // const weatherdata = document.querySelector('#weatherdata');
  // const random = "Akshay"; // important.. why doenst it show in console?

  submitweather.addEventListener('submit', (e) => { findtemp(e, weatherdata.value); });
}