const weather = document.querySelector(".js-weather");

const API_KEY = "d18d0b04f027fa8a6832b5dc23c57b78";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(Response){
           return Response.json();
        }).then(function(json){
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
 console.log("Cant access get location");   
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        
    }
}

function init(){
    loadCoords();
}
init();