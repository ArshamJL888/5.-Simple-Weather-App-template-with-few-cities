let citiesInfo = [
    { city: 'Tehran', temp: -1, weather: 'Partly Cloudy', humidity: 52, windSpeed: 21 },
    { city: 'Thiraz', temp: 6, weather: 'Mostly Clear', humidity: 59, windSpeed: 14 },
    { city: 'Kish Island', temp: 20, weather: 'Mostly Clear', humidity: 73, windSpeed: 2 },
    { city: 'Toronto', temp: -4, weather: 'Cloudy', humidity: 65, windSpeed: 24 },
    { city: 'Paris', temp: 7, weather: 'Mostly Cloudy', humidity: 66, windSpeed: 28 },
];

let searchBar = document.querySelector('.searchBar');
let searchBtn = document.querySelector('.button');
let degree = document.querySelector('.degree');
let estate = document.querySelector('.estate');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.windSpeed');
let weatherIn = document.querySelector('.weatherIn');
let description = document.querySelector('.description');
let userCity;
let userCityName;

description.style.display = 'none';
document.body.addEventListener('keydown', (event)=>{
    if(event.keyCode === 13) {
        searchCityHandler();
    }
})
searchBtn.addEventListener('click', searchCityHandler);


function searchCityHandler() {
    userCityName = searchBar.value;
    userCity = citiesInfo.find((item) => {
       return item.city === userCityName;
    })
    console.log(userCity);
    if (!userCity) {
        description.style.display = 'none';
        weatherIn.textContent = 'Not Found!';
    }
    else {
        weatherIn.textContent = userCity.city
        description.style.display = 'block';
        degree.innerHTML = userCity.temp + '°C'
        estate.innerHTML = 'Estate: &nbsp;' + userCity.weather
        humidity.innerHTML = 'Humidity: &nbsp;' + userCity.humidity + '%'
        windSpeed.innerHTML = 'Wind Speed: &nbsp;' + userCity.windSpeed + 'km/h'
    }
}