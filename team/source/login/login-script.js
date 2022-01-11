const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Du musst einen Namen eingeben!')
  }

  if (password.value.length <= 6) {
    if (password.value.length == 0) {}
    if (password.value === "admin") {}
    else {
    messages.push('Das Passwort muss länger als 6 Zeichen sein!')
    }
  }

  if (password.value.length == 0) {
    messages.push('Du musst dein Passwort eingeben!')
  }

  if (password.value === 'passwort') {
    messages.push('Dein Passwort lautet ganz bestimmt nicht "passwort", oder?')
  }

  if (name.value + "@" + password.value === 'admin@admin') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  else {
    messages.push('Falsche Login-Daten!')
  }
})