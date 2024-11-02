
let loader = document.getElementById("preloader")
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})
 



// Select the hamburger icon and body
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");

// Initially close the sidebar by adding the "active" class to body
body.classList.add("active");

// Toggle the "active" class on body when the hamburger is clicked
hamburger.addEventListener("click", function() {
  body.classList.toggle("active");
});





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("KFC-posters");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
   
  slides[slideIndex-1].style.display = "block";  
   
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

 