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
    if(currentScrollPos > 30) {


      if(window.innerWidth < 900) {
        $(".navApe").css( {
          "top":"-100px"
        }); 
      } else {
        $(".navApe").css( {
          "top":"-140px"
        }); 
      }
      


      $("#scrollToTop").css({'display':'flex'});
    } 
  } else {
    $(".navApe").css( {
      "top":"0px"
    }); 
    if(currentScrollPos > 10) {
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


// slide menu 

function myTimeout() {
  $('.navApe__cont__list').removeClass('open');
}
function myTimeout2() {
  if(prevScrollpos > 100) {
    $(".navApe").css( {
      "background":"#00000030",
      "backdrop-filter":"blur(5px)"
    });
  }
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
  $('.navApe__cont__sound img:nth-child(1)').hide();
  $('.navApe__cont__sound img:nth-child(2)').show();
};
myAudio.onpause = function() {
  isPlaying = false;
  $('.navApe__cont__sound img:nth-child(1)').show();
  $('.navApe__cont__sound img:nth-child(2)').hide();
};

//return-top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//roadmap popup
function closeRoadmap() {
  $('.roadmap-popup').fadeOut();
  $('.roadmap-popup .content').fadeOut();
  $('body').removeClass('overflow-hidden');
} 

function openRoadmap(el) {
  $('.roadmap-popup').fadeIn();
  $('.roadmap-popup .content[content='+el+']').fadeIn();
  $('body').addClass('overflow-hidden');
} 

$(document).mouseup(function(e) {
    var container = $(".roadmap-popup .content");
    // if the target of the click isn't the container nor a descendant of the 
    if($('.navApe__cont__list').hasClass('open')) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeRoadmap();
      }
    }
});


// json mapping