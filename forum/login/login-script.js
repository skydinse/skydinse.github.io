const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  
  if (password.value === 'n3eNW') {
    messages.push('Code akzeptiert! Weiterleitung erfolgt...')
    location.replace("https://skydinse-forum.de/")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  else {
    messages.push('Falscher Code!')
  }
})
