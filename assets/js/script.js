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

// show list of monkey
var allPics = 40;

for(i=1;i<=allPics; i++){
  // myImg.src = images[i];

  // TODO: adjust this to whatever you want
  // in this example, use `<a>` that link to another page
  // you can use javascript to show modal/alert too
  var picture = document.createElement('picture');

  var img = document.createElement('img');
  img.src = './assets/images/lac-nft/'+[i]+'.png';
  picture.appendChild(img);

  if(i > 20) {
    document.getElementById('slide-lac-cont-2').appendChild(picture);
  } else {
    document.getElementById('slide-lac-cont-1').appendChild(picture);
  }

}