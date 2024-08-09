const url = "https://goweather.herokuapp.com/weather";
let tempurl = "https://goweather.herokuapp.com/weather/bogra";
let dropdown = document.querySelectorAll(".dropdown select");
let windspeed = document.querySelector(".wind-speed p");
let temperature = document.querySelector(".second-con h3");
let city = document.querySelector(".second-con p");
let img = document.querySelector(".second-con img");

// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

// 36f073f310cfeec0b2a347530c540a5e

for (let select of dropdown) {
  for (let val of districts) {
    let option = document.createElement("option");
    option.innerText = val;
    if (val === "Bogra") {
      option.selected = "selected";
    }
    select.append(option);
  }
  select.addEventListener("change", (e) => {
    updatedistrict(e.target);
  });
}

async function updatedistrict(e) {
  let temp = e.value;
  let current = temp;
  console.log(current);
  let newurl = `${url}/${current}`;
  let response = await fetch(newurl);
  let data = await response.json();
  windspeed.innerText = data.wind;
  temperature.innerText = data.temperature;
  city.innerText = current;
  console.log(data);

  if (data.description === "Thundery outbreaks in nearby") {
    img.src = "images/mist.png";
  } else if (data.description === "Patchy rain nearby") {
    img.src = "images/rain.png";
  } else if (data.description === "Light rain shower") {
    img.src = "images/drizzle.png";
  } else if (data.description === "Partly cloudy") {
    img.src = "images/clouds.png";
  }
}

async function bogra() {
  let res = await fetch(tempurl);
  let data = await res.json();
  windspeed.innerText = data.wind;
  temperature.innerText = data.temperature;
  city.innerText = "Bogra";
  if (data.description === "Thundery outbreaks in nearby") {
    img.src = "images/mist.png";
  } else if (data.description === "Patchy rain nearby") {
    img.src = "images/rain.png";
  } else if (data.description === "Light rain shower") {
    img.src = "images/drizzle.png";
  } else if (data.description === "Partly cloudy") {
    img.src = "images/clouds.png";
  }
}

bogra();
