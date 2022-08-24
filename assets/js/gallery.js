// accordian

const accordionBtns = document.querySelectorAll(".lac-filter-accordian .accordion");
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

function filterMobilerSlide() {
  $('body').toggleClass('overflow-hidden');
  $('.main-filter').slideToggle({
    start: function () {
      $(this).css({
        display: "flex"
      })
    }
  });
}

// mobile menu
if(window.innerWidth < 900) {
  $('.main-filter').addClass('mobile');
}
$(window).resize(function() {
  if(window.innerWidth < 900) {
    $('.main-filter').addClass('mobile');
  } else {
    $('.main-filter').removeClass('mobile');
  }
});