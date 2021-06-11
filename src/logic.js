import {displaydata} from './dom';

const key = 'ee6f65e9ba3eb85072e21ce3e513cac0';
let json1 = 0  ; // const random = "Akshay"; // important.. why doenst it show in console?

export function start() {

const submitweather = document.querySelector('#formforweather');
// const weatherdata = document.querySelector('#weatherdata');
// const random = "Akshay"; // important.. why doenst it show in console?

submitweather.addEventListener('submit',(e)=>{findtemp(e,weatherdata.value)});

}

async function findtemp(e=false,location){
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`

    let response = await fetch(url)
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    if (response.ok) { 
                json1 = await response.json();
                let icon = json1.weather[0].icon
                let iconurl = `http://openweathermap.org/img/wn/${icon}@2x.png`
                let jsonimage = await fetch(iconurl);
                if (jsonimage.ok) {   
                        displaydata(json1,jsonimage.url);
                    }
                else {
                    alert("HTTP-Error: " + response.status);
                }
    } 
    
    else {
        alert("HTTP-Error: " + response.status);
    }
}