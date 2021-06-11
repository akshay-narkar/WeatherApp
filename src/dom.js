const cityname = document.getElementById('cityname');
const temperature = document.getElementById('temperature');
const feelslike = document.getElementById('feelslike');
const firsttag = document.getElementById('firsttag');
const secondtag = document.getElementById('secondtag');
const thirdtag = document.getElementById('thirdtag');
const fourthtag = document.getElementById('fourthtag');
const fifthtag = document.getElementById('fifthtag');

const toggle = document.getElementById('flexSwitchCheckDefault');

toggle.addEventListener('click',temperatureunit)

function temperatureunit(){
 
        if(toggle.checked){
            console.log("akshay togged checked")
                temperature.textContent = `${json.main.temp}°F`;
                firsttag.textContent = `Max: ${json.main.temp_max}°F`;
                secondtag.textContent = `Min: ${json.main.temp_min}°F`;   
            }
            else {
                            console.log("akshay togged unchecked")

                temperature.textContent = `${json.main.temp}°C`;
                firsttag.textContent = `Max: ${json.main.temp_max}°C`;
                secondtag.textContent = `Min: ${json.main.temp_min}°C`;   
            }
}

export const displaydata = (json,jsonimage) => {

   toggle.checked = false;
toggle.disabled = false;
    cityname.textContent = `${json.name},${json.sys.country}`;
            if(toggle.checked){
                    console.log("akshay togged checked")
                    temperature.textContent = `${json.main.temp}°F`;
                    feelslike.textContent = `Feels like: ${json.main.feels_like}°F`;
                    firsttag.textContent = `Max: ${json.main.temp_max}°F`;
                    secondtag.textContent = `Min: ${json.main.temp_min}°F`;   
                    }
            else {
                console.log("akshay togged unchecked")
                temperature.textContent = `${json.main.temp}°C`;
                feelslike.textContent = `Feels like: ${json.main.feels_like}°C`;
                firsttag.textContent = `Max: ${json.main.temp_max}°C`;
                secondtag.textContent = `Min: ${json.main.temp_min}°C`;   
            }   
    thirdtag.textContent = `Humidity: ${json.main.humidity}%`;
    fourthtag.textContent = `Lat: ${json.coord.lat}°`;
    fifthtag.textContent = `Long: ${json.coord.lon}°`;
   

}