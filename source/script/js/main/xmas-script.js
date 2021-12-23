function redirect_won() {
  window.open(
              "./else/won.html", "_blank");
}

function platz3() {
  var copyText = document.getElementById("platz3");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Befehl kopiert: " + copyText.value);
  window.open(
    "https://skydinse.github.io/else/won.html", "_blank");
}

function platz2() {
  var copyText = document.getElementById("platz2");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Befehl kopiert: " + copyText.value);
  window.open(
    "https://skydinse.github.io/else/won.html", "_blank");
}

function platz1() {
  var copyText = document.getElementById("platz1");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Befehl kopiert: " + copyText.value);
  window.open(
    "https://skydinse.github.io/else/won.html", "_blank");
}