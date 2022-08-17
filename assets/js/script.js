// PLEASE ALWAYS ADD COMMENT WHICH IS JAVASCRIPT IS USED FOR

// navbar scroll up and down show
var prevScrollpos = window.pageYOffset;
var minTop = 100;

if(prevScrollpos > minTop) {

  $(".navApe").css( {
    "background":"#00000030",
    "backdrop-filter":"blur(5px)"
  });
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollpos) {
    if(currentScrollPos > minTop) {
      $(".navApe").css( {
        "top":"-100px"
      }); 
    } 
  } else {
    $(".navApe").css( {
      "top":"0px"
    }); 
    if(currentScrollPos > minTop) {
      $(".navApe").css( {
        "background":"#00000030",
        "backdrop-filter":"blur(5px)"
      }); 
    } else {
      $(".navApe").css( {
        "background":"transparent",
        "backdrop-filter":"unset"
      });
    }
  }
  prevScrollpos = currentScrollPos;
};