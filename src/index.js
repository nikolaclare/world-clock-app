function upDateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let LosAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = LosAngelesTime.format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
upDateTime();
setInterval(upDateTime, 1000);