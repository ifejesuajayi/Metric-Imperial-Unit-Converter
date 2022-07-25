const button = document.querySelector(".button"),
  inputField = document.getElementById("input"),
  length = document.querySelector("#length"),
  liters = document.querySelector("#liters"),
  kilogram = document.querySelector("#kilogram");

let meter = 3.281,
  liter = 0.264,
  kilo = 2.204;

button.addEventListener("click", () => {
  let value = inputField.value;
  
  calculateLength();
  calculateLiters();
  calculateKilogram();

  if (value === '0.00') {
    const div = document.createElement("div");

    div.className = "div";

    div.appendChild(document.createTextNode("PLEASE INPUT A NUMBER"));

    const firstSection = document.querySelector(".first-section");
    const header = document.querySelector("h2");

    firstSection.insertBefore(div, header);

    setTimeout(() => {
      div.remove();
    }, 2000);

    length.innerText = "";
    liters.innerText = "";
    kilogram.innerText = "";
  }
});

function calculateLength() {
  let value = inputField.value;
  length.innerText = `${value} meters  = ${parseInt(meter * value)} feet`;
}

function calculateLiters() {
  let value = inputField.value;
  liters.innerHTML = `${value} liters = ${parseInt(liter * value)} gallons`;
}

function calculateKilogram() {
  let value = inputField.value;
  kilogram.innerText = `${value} kilos = ${parseInt(kilo * value)} pounds`;
}
