// PLEASE ALWAYS ADD COMMENT WHICH IS JAVASCRIPT IS USED FOR



//init AOS
AOS.init({ 
  disable: function() {
    var maxWidth = 899;
    return window.innerWidth < maxWidth;
  }
}); 

// navbar scroll up and down show
var prevScrollpos = window.pageYOffset;
var minTop = 140;

if(prevScrollpos > minTop) {

  $(".navApe").css( {
    "background":"rgba(0,0,0,.2)",
    "backdrop-filter":"blur(12px)"
  });
  $("#scrollToTop").css({'display':'flex'});
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollpos) {
    if(currentScrollPos > minTop) {
      $(".navApe").css( {
        "top":"-140px"
      }); 
      $("#scrollToTop").css({'display':'flex'});
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
      $("#scrollToTop").css({'display':'none'});
    }
  }
  prevScrollpos = currentScrollPos;
};

// show list of monkey
var allPics = 39;

for(i=0;i<=allPics; i++){
  // myImg.src = images[i];

  // TODO: adjust this to whatever you want
  // in this example, use `<a>` that link to another page
  // you can use javascript to show modal/alert too
  var picture = document.createElement('picture');

  var img = document.createElement('img');
  img.src = './assets/images/lac-nft/'+[i]+'.png';
  picture.appendChild(img);

  if(i > 19) {
    document.getElementById('slide-lac-cont-2').appendChild(picture); 
  } else {
    document.getElementById('slide-lac-cont-1').appendChild(picture);
  }

}


// slide menu 

function myTimeout() {
  $('.navApe__cont__list').removeClass('open');
}
function myTimeout2() {
  $(".navApe").css( {
    "background":"#00000030",
    "backdrop-filter":"blur(5px)"
  }); 
}
function menuToggle() {
  
  if($('.navApe__cont__list').hasClass('open')) {

    $('.navApe__cont__list').animate({'width': 0});
    setTimeout(myTimeout, 500);
    setTimeout(myTimeout2, 500);
    $('body').removeClass('overflow-hidden');
    

  } else {

    $('.navApe__cont__list').animate({'width': '100%'}).addClass('open');
    $('body').addClass('overflow-hidden');
    $(".navApe").css( {
      "background":"transparent",
      "backdrop-filter":"unset"
    });
    
  }

}

//close menu
let windowsize = $(window). width();

function closeMenu() {
  if(windowsize < 900) {
    menuToggle();
  }
}


// add plaay audio
var myAudio = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

//return-top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//countdown
var zeroCount = 0;
$(window).scroll(function() {

  var oTop = $('.lac-sec-1 .sec-inner').offset().top - window.innerHeight;
  if (zeroCount == 0 && $(window).scrollTop() > oTop) {
    $('.value2').each(function() {
      var $this = $(this),
        countTo = $this.attr('akhi');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    zeroCount = 1;
  }

});
