document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js ЗАГРУЗИЛСЯ')

  // === КОНВЕРТЕР РОСТА ===
  const feetInput = document.getElementById('feet')
  const inchesInput = document.getElementById('inches')
  const result = document.getElementById('heightResult')
  const heightForm = document.getElementById('heightForm')

  if (heightForm && feetInput && inchesInput && result) {
    heightForm.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log('Форма отправлена, считаю рост…')

      const feet = Number(feetInput.value) || 0
      const inches = Number(inchesInput.value) || 0

      const totalInches = feet * 12 + inches
      const cm = totalInches * 2.54

      if (totalInches <= 0) {
        result.textContent = 'Введи хотя бы футы или дюймы'
        return
      }

      const formatted = cm.toFixed(1).toLocaleString('ru-RU')
      result.textContent = `Примерно ${formatted} см`
    })
  }

  // === ВЫДВИЖНОЕ МЕНЮ ===
  const menuToggle = document.getElementById('menuToggle')
  const sidebar = document.getElementById('sidebar')

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--open')
    })

    sidebar.addEventListener('click', (event) => {
      const target = event.target
      if (target instanceof HTMLButtonElement && !target.disabled) {
        sidebar.classList.remove('sidebar--open')
      }
    })
  }

})
