function updateCityTime(cityId, timeZone) {
  let cityElement = document.querySelector(`#${cityId}`);
  if (cityElement) {
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let cityTime = moment().tz(timeZone);
    dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    timeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>
      </div>
      <a href="/">All cities</a>
      `;
}

function updateAllCities() {
  updateCityTime("sydney", "Australia/Sydney");
  updateCityTime("paris", "Europe/Paris");
  updateCityTime("tokyo", "Asia/Tokyo");
}

updateAllCities();
setInterval(updateAllCities, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

setInterval(updateCity, 1000);