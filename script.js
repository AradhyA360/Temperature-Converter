const celsius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

celsius.addEventListener("input", function () {
  let c = this.value;
  fahrenheit.value = (c * 9) / 5 + 32;
  kelvin.value = c + 273.15;
});

fahrenheit.addEventListener("input", function () {
  let f = this.value;
  celsius.value = ((f - 32) * 5) / 9;
  kelvin.value = ((f - 32) * 5) / 9 + 273.15;
});

kelvin.addEventListener("input", function () {
  let k = this.value;
  celsius.value = k - 273.15;
  fahrenheit.value = ((k - 273.15) * 9) / 5 + 32;
});
