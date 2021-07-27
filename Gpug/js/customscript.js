$( document ).ready(function() {
  $(".nav-link").click(function () {
       
      $(".nav-link").removeClass("selected");
      $(this).addClass("selected");
  });
 });

scrollbutton = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
    $('.info').fadeToggle(2000);
    $('.info').fadeToggle(2000);
  }
   else {
    scrollbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}