const inputNumber = document.getElementById("input-number")
const mFt = document.getElementById("mft")
const lGa = document.getElementById("lga")
const kGp = document.getElementById("kgp")


document.getElementById("convert-btn").addEventListener("click", () =>{

  const number = parseInt(inputNumber.value)

  const meter = number*3.28084
  const feet = number/3.28084
  const liter = number*0.264172
  const gallon = number/0.264172
  const kilo = number*2.20462
  const pound = number/2.20462

  mFt.textContent = `${number} meters = ${meter.toFixed(3)} feet | ${number} feet = ${feet.toFixed(3)} meters`
  lGa.textContent = `${number} liters = ${liter.toFixed(3)} gallons | ${number} gallons = ${gallon.toFixed(3)} liters`
  kGp.textContent = `${number} kilos = ${kilo.toFixed(3)} pound | ${number} pounds = ${pound.toFixed(3)} kilos`
})