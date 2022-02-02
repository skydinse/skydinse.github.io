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
      "https://skydinse-team.github.io/dashboard/users/public/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'xmaslane@w6Kd*wecDe%G+v4J') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/xmaslane-L2e8QqtWbEE68rVBCXyz5DWYk/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'legendelouis@4*uVS-GLPr3xH$eB') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/legendelouis-w3JVkyLN84VNu9gA2SBvTPveX/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'boi@5YSg_6Lg!JU4$mY=') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/boi-vXZkszSDqKdKzEE8nmNZ8DH6d/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'digigamer@vnz8q9*wPTw=X4LM') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/digigamer-7XFp4kp48zfHgPAdVSJ2fLyVc/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'fenris@J-Rnrb5pX%+$Rn4V') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/fenris-PVp9MYdJqD568NdA86N3yjwxq/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'geldberry@kd3V#v%4_ph=jE57') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/geldberry-TFDY48v9MftCZmHv3jLRL5ezc/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'impfverweiger@HXLd_?2&dU4Ay^L=') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/impfverweiger-ar5wFTPbrNApGX7CSfzgwgutM/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'jonsaaas@?4Hk4SFa+EC%22xT') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/jonsaaas-MVFcJWdXVwLQvwL9fDtbAvfLC/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'limeiyy@UpWt7Heetbg&T7SU') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/limeiyy-S8wCL3BB4Py442Du2qdL3SCwd/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mexikaner@_6e2-Sb4q5Bt+U8Z') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/mexikaner-2dySrCbHxHa4q9gEK6XXQQuaD/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mexikanischer@j9Up8y#87k_9fZ_m') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/mexikanischer-DCrrD5UcQcF5BRy82mGSDY6Wq/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'moin123OP@#S2MFW%TpGR6Zq=t') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/moin123OP-uy3HTq2eQE3K5T2DnJwj69NnW/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mrdombro@h?tV6#MYr^c*Rv3U') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/mrdombro-288Pw2tGb7f8W2LxvkHLVbWT6/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'playgo@MN7$4cpNQjv#K5T4') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/playgo-ys8SB4W3uZLRkczqzZQSsxvBP/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'ray6641@qNa-UD%6ru&46RhJ') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/ray6641-Ej2nnW8gsNTY6DM5JsHjqUXx8/dashboard.html", "_blank");
  }

  if (name.value + "@" + password.value === 'mr_babycat_@5sdyD=H?b_z5u!W+') {
    messages.push('Du wurdest eingeloggt!')
    window.open(
      "https://skydinse-team.github.io/dashboard/users/mr_babycat_-WfyvbLerYjpVma94hT7ZX89eE/dashboard.html", "_blank");
  }


 /* ---------------------- passwörter START ---------------------- */


  else {
    messages.push('Falsche Login-Daten!')
  }
})
