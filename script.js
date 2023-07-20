let elcius= document.getElementById("celsius")
let fahrenheit= document.getElementById("fahrenheit")

function toFahrenheit(){
    let output= (parseFloat((celsius.value)*9/5)+32);
    fahrenheit.value=parseFloat(output.toFixed(3));
}

function toCelsius() {
  let output = (parseFloat((fahrenheit.value)-32)*5/9);
  celsius.value = parseFloat(output.toFixed(3));
}