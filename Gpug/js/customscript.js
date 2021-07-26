$( document ).ready(function() {
  $(".nav-link").click(function () {
       
      $(".nav-link").removeClass("selected");
      $(this).addClass("selected");
      return false;
  });
 });

scrollbutton = document.getElementById("scrollBtn");
typeeffect = document.getElementsByClassName("main-info");

window.onscroll = function() {scrollFunction()};
window.onscroll = function() {scrollFunction1()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  }
   else {
    scrollbutton.style.display = "none";
  }
}

function scrollFunction1() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    $('.info').fadeToggle();
    $('.info').fadeToggle(5000);
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
