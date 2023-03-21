let weather = [
    { city: 'Tehran', temp: 9, weather: 'Mostly Cloudy', humidity: 34, windSpeed: 21 },
    { city: 'Shiraz', temp: 10, weather: 'Haze', humidity: 47, windSpeed: 14 },
    { city: 'Kish Island', temp: 21, weather: 'Mostly Sunny', humidity: 57, windSpeed: 2 },
    { city: 'Toronto', temp: -6, weather: 'snowy', humidity: 77, windSpeed: 24 },
    { city: 'Paris', temp: 8, weather: 'Mostly Cloudy', humidity: 71, windSpeed: 28 },
];
let description = document.querySelector('.description');
let cityInput = document.querySelector('.searchBar');
let button = document.querySelector('.button');
let weatherIn = document.querySelector('.weatherIn');
let newDegree = document.querySelector('.degree');
let newEstate = document.querySelector('.estate');
let newHum = document.querySelector('.humidity');
let newSpeed = document.querySelector('.windSpeed');
let newIcon = document.querySelector('.icon');
newIcon.style.display = 'none'
newDegree.style.display = 'none';
newEstate.style.display = 'none';
newHum.style.display = 'none';
newSpeed.style.display = 'none';
button.addEventListener('click', showCity);
////////////  Enter to click

cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});
/////////////

function showCity() {
    let cityData = weather.find(findPlace);
    if (cityData) {
        // alert("Found!")
        console.log(cityData)
        weatherIn.innerHTML = `Wheater in ${cityData.city}`
        newDegree.innerHTML = cityData.temp + '°C' + '<br />' + '<br />'
        newDegree.style.display = 'inline';
        newIcon.style.display = 'inline'
        newEstate.innerHTML = cityData.weather + '<br />';
        newEstate.style.display = 'inline';
        newHum.innerHTML = `Humidity: ${cityData.humidity}`
        newHum.style.display = 'block';
        newSpeed.innerHTML = `Wind Speed: ${cityData.windSpeed} km/h`
        newSpeed.style.display = 'block';
    }
    else {
        weatherIn.innerHTML = "Not Found!";
        newIcon.style.display = 'none'
        newDegree.style.display = 'none';
        newEstate.style.display = 'none';
        newHum.style.display = 'none';
        newSpeed.style.display = 'none';
    }
}
function findPlace(item) {
    return item.city === cityInput.value;
}