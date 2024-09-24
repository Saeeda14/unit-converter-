const input = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const errorMsg = document.getElementById("error-message")
const lengthEl = document.getElementById("length-div")
const volumeEl = document.getElementById("volume-div")
const massEl = document.getElementById("mass-div")


convertBtn.addEventListener("click", function () {
  let inputEl = input.value
  if (!inputEl) { 
    console.log("no input");
    return;
  }
  if (isNaN(inputEl)) {
    errorMsg.textContent = "Please enter a valid number!"
    errorMsg.style.display = "block"
    return;
  } else { 
    errorMsg.style.display = "none"
  }
  convertUnits(inputEl)
}); 

function convertUnits (inputEl) { 
  let meter = 3.281
  let feet = 0.305
  let liter = 0.264
  let gallon = 3.785
  let kilogram = 2.204
  let pound = 0.454

  // lengthEl.innerHTML += `<p> ${inputEl} meters = ${(inputEl * meter).toFixed(3)} feet | ${inputEl} feet = ${(inputEl * feet).toFixed(3)} meters`

  lengthEl.innerHTML += 
    `<p> ${inputEl} meters = ${(inputEl * meter).toFixed(3)} feet </p>` + 
    `<p> ${inputEl} feet = ${(inputEl * feet).toFixed(3)} meters </p>`
  
  volumeEl.innerHTML += 
    `<p> ${inputEl} liters = ${(inputEl * liter).toFixed(3)} gallons </p>` + 
    `<p> ${inputEl} gallons = ${(inputEl * gallon).toFixed(3)} liters </p>`

  massEl.innerHTML += 
    `<p> ${inputEl} kilos = ${(inputEl * kilogram).toFixed(3)} pounds </p>` + 
    `<p> ${inputEl} pounds = ${(inputEl * pound).toFixed(3)} kilos </p>`
}