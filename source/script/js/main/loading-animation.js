$(document).ready(function() {
    
    var a = 0;
    var set1 = setInterval(function() {
      $("h1").html(a + '%');
      $("hr").css("width", a + '%');
      a++;
      
      if (a == 101) {
        clearInterval(set1);
        $('hr').addClass('done');
      }
    }, 10);  
  });