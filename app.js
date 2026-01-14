const feetInput = document.getElementById('feet')
const inchesInput = document.getElementById('inches')
const button = document.getElementById('convertHeight')
const result = document.getElementById('heightResult')

button.addEventListener('click', () => {
    const feet = Number(feetInput.value) || 0
    const inches = Number(inchesInput.value) || 0

    const totalInches = feet * 12 + inches
    const cm = totalInches * 2.54

    if (totalInches <= 0) {
        result.textContent = 'Введи рост (футы и/или дюймы)'
        return
    }

    result.textContent = `Примерно ${cm.toFixed(1)} cm`
})