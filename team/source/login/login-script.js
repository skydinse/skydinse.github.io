const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    if (name.value.length == 0) {}
    else {
      messages.push('Du musst einen Namen eingeben!')}
  }

  if (password.value.length <= 6) {
    if (password.value.length == 0) {}
    if (password.value === "admin") {}
    if (password.value.length == 0) {}
    else {
    messages.push('Das Passwort muss länger als 6 Zeichen sein!')
    }
  }

  if (password.value.length == 0) {
    messages.push('Du musst dein Passwort und deinen Namen eingeben!')
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

  if (password.value === 'passwort') {
    messages.push('Dein Passwort lautet ganz bestimmt nicht "passwort", oder?')
  }

  if (password.value === 'passwort') {
    messages.push('Dein Passwort lautet ganz bestimmt nicht "passwort", oder?')
  }


  /* ---------------------- passwörter START ---------------------- */


  if (name.value + "@" + password.value === 'admin@admin') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'xmaslane@w6Kd*wecDe%G+v4J') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'legendelouis@4*uVS-GLPr3xH$eB') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'boi@5YSg_6Lg!JU4$mY=') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'digigamer@vnz8q9*wPTw=X4LM') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'fenris@J-Rnrb5pX%+$Rn4V') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'geldberry@kd3V#v%4_ph=jE57') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'impfverweiger@HXLd_?2&dU4Ay^L=') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'jonsaaas@?4Hk4SFa+EC%22xT') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'limeiyy@UpWt7Heetbg&T7SU') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mexikaner@_6e2-Sb4q5Bt+U8Z') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mexikanischer@j9Up8y#87k_9fZ_m') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'moin123OP@#S2MFW%TpGR6Zq=t') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mrdombro@h?tV6#MYr^c*Rv3U') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'playgo@MN7$4cpNQjv#K5T4') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'ray6641@qNa-UD%6ru&46RhJ') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mr_babycat_@5sdyD=H?b_z5u!W+') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "../../proceed-login.html", "_blank");
  }


 /* ---------------------- passwörter START ---------------------- */


  else {
    messages.push('Falsche Login-Daten!')
  }
})