const input = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const errorMsg = document.getElementById("error-message")

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
}); 

function convertUnits () { 
  
}