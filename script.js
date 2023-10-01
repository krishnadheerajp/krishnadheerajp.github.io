let btn1 = document.getElementById("edu");
let btn2 = document.getElementById("skll");
let btn3 = document.getElementById("proj");

btn1.addEventListener('click',()=>{
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
})

btn2.addEventListener('click',()=>{
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
})

btn3.addEventListener('click',()=>{
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
})


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

AOS.init({duration:1500, easing:'ease'});
