

btn1 = document.getElementById("abtm");
btn2 = document.getElementById("edu");
btn3 = document.getElementById("skll");
btn4 = document.getElementById("proj");
btn5 = document.getElementById("exp");
btn6 = document.getElementById("cm");
btn1.addEventListener('click',()=>{
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})

btn2.addEventListener('click',()=>{
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})

btn3.addEventListener('click',()=>{
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})

btn4.addEventListener('click',()=>{
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
})

btn5.addEventListener('click',()=>{
    btn5.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn6.classList.remove("active");
})

btn6.addEventListener('click',()=>{
    btn6.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
})

mybutton = document.getElementById("myBtn");

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


// abtmefiller();
// $('.card-text').slideToggle(5000);
// function abtmefiller() {
//         $('#abtme').fadeToggle(5000);
//         abtmefiller();
// }
// $('.card-text').slideToggle(5000);