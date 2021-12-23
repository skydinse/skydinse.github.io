function faq_rules_command() {
  var copyText = document.getElementById("faq_rules_command");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Befehl kopiert: " + copyText.value);
}
function dc_name_tag() {
  var copyText = document.getElementById("dc_name_tag");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Befehl kopiert: " + copyText.value);
}