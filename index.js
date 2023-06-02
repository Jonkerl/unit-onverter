let buttonBtn = document.getElementById('button-btn')
let inputEl = document.getElementById('input-el')
let lengthEl = document.getElementById('length-el')
let volumeEl = document.getElementById('volume-el')
let massEl = document.getElementById('mass-el')


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

buttonBtn.addEventListener("click", function(){
      let inputValue = inputEl.value
    lengthEl.textContent = `${inputValue} meter = ${inputValue * meterToFeet} Feet`
    let inputVolume = inputEl.value
    volumeEl.textContent = `${inputVolume} Liter = ${inputVolume * literToGallon} Gallon`
    let massVolume = inputEl.value
    massEl.textContent = `${massVolume} Kilo = ${massVolume * kiloToPound} Pound` 
})


