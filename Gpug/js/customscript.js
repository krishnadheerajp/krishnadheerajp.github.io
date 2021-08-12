$(document).ready(function () { $(".nav-link").click(function () { $(".nav-link").removeClass("selected"), $(this).addClass("selected") }) }); var date = new Date, time = date.getHours(), message = "Hello "; function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scrollbutton.style.display = "block" : scrollbutton.style.display = "none" } function topFunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } time >= 16 ? message = "Good Evening, " : time >= 12 ? message = "Good Afternoon, " : time >= 0 && (message = "Good Morning, "), $(".greeting").append(message), $(".msg-filler").click(function () { $(".msg-filler").css("display", "none") }), scrollbutton = document.getElementById("scrollBtn"), window.onscroll = function () { scrollFunction() }; const typedTextSpan = document.querySelector(".typed-text"), cursorSpan = document.querySelector(".cursor"), textArray = ["Digitizing the era with speed and quality", "Revolutionizing the computer expericence", "Elevating speed and performance", "Reach beyond high speed and resolution"], typingDelay = 100, erasingDelay = 100, newTextDelay = 2e3; let textArrayIndex = 0, charIndex = 0; function type() { charIndex < textArray[textArrayIndex].length ? (cursorSpan.classList.contains("typing") || cursorSpan.classList.add("typing"), typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex), charIndex++, setTimeout(type, typingDelay)) : (cursorSpan.classList.remove("typing"), setTimeout(erase, newTextDelay)) } function erase() { charIndex > 0 ? (cursorSpan.classList.contains("typing") || cursorSpan.classList.add("typing"), typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1), charIndex--, setTimeout(erase, erasingDelay)) : (cursorSpan.classList.remove("typing"), ++textArrayIndex >= textArray.length && (textArrayIndex = 0), setTimeout(type, typingDelay + 1100)) } document.addEventListener("DOMContentLoaded", function () { textArray.length && setTimeout(type, newTextDelay + 250) }), AOS.init();
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }