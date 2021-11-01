console.log("yes its working");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const massageOne = document.querySelector(".massageOne");
const massageTow = document.querySelector(".massageTow");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  massageOne.textContent = "Loading...";
  massageTow.textContent = "";
  fetch("/weather-app?address=" + location).then((Response) => {
    Response.json().then((data) => {
      if (data.error) {
        massageOne.textContent = data.error;
      } else if (!location) {
        massageOne.textContent = data.address;
        massageTow.textContent = "";
      } else {
        massageOne.textContent = data.location;
        massageTow.textContent = data.forcast;
      }
    });
  });
});
