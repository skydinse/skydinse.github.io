function javaIP() {
    var copyText = document.getElementById("java_ip");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("IP Kopiert: " + copyText.value);
  } 

  function bedrockIP() {
    var copyText = document.getElementById("bedrock_ip");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("IP Kopiert: " + copyText.value);
  } 

function bedrockPORT() {
    var copyText = document.getElementById("bedrock_port");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Port Kopiert: " + copyText.value);
  } 