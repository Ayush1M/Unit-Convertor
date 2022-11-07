const inputNumber = document.getElementById("input-number")
const mFt = document.getElementById("mft")
const lGa = document.getElementById("lga")
const kGp = document.getElementById("kgp")
const METER_TO_FEET = 3.28084
const LITER_TO_GALLON = 0.264172
const KILO_TO_POUND = 2.20462


document.getElementById("convert-btn").addEventListener("click", () =>{

  const number = parseInt(inputNumber.value)

  const meter = number*METER_TO_FEET
  const feet = number/METER_TO_FEET
  const liter = number*LITER_TO_GALLON
  const gallon = number/LITER_TO_GALLON
  const kilo = number*KILO_TO_POUND
  const pound = number/KILO_TO_POUND

  mFt.textContent = `${number} meters = ${meter.toFixed(3)} feet | ${number} feet = ${feet.toFixed(3)} meters`
  lGa.textContent = `${number} liters = ${liter.toFixed(3)} gallons | ${number} gallons = ${gallon.toFixed(3)} liters`
  kGp.textContent = `${number} kilos = ${kilo.toFixed(3)} pound | ${number} pounds = ${pound.toFixed(3)} kilos`
})