// create constants for each element
const currentTemp = document.querySelector("#temp");
const conditionsIcon = document.querySelector("#conditions-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");

// creat url
const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.158&lon=-117.35&units=imperial&appid=4760115027606b0fbd5c42b2c5f94e2a";

// function to inject the desired data into our page
function displayResults(weatherdata) {
    // start with current temperature
    let tempdata = weatherdata.main.temp;
    currentTemp.innerHTML = `<strong>${Math.round(tempdata)}˚F</strong>`;

    // now the icon and conditions
    let iconsrc = `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;
    let desc = weatherdata.weather[0].description;
    conditionsIcon.setAttribute("src", iconsrc);
    conditionsIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;

    // lastly, humidity
    let humidityVal = weatherdata.main.humidity;
    humidity.innerHTML = `${humidityVal}% humidity`;
}

// asyncronous function to fetch the api data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();