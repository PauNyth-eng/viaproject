
const globalNav = document.getElementById("global-nav");
const logo = globalNav.querySelector(".logo img");

function removeNavOpen() {
    logo.setAttribute("src", "pictures/BMW_grey.svg");
    globalNav.classList.remove("active");
    document.querySelectorAll(".nav-table li.active").forEach((item) => {
        item.classList.remove("active");
    });
    document.body.style.overflow = 'scroll'
    
}

document.querySelector(".nav_backdrop").addEventListener("click", () => {
    removeNavOpen();
});

document.querySelectorAll(".nav-table > li span").forEach(function(el) {
    el.addEventListener("click", function(elo) {
        removeNavOpen();
        logo.setAttribute("src", "pictures/BMW_grey.svg");
        elo.currentTarget.parentNode.classList.add("active");
        globalNav.classList.add("active");
        document.body.style.overflow = 'hidden'
    });
});

var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();

            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }, 1000);

        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");


function ShowModal(el){
    modal.style.display = 'block';
    modalImg.src = el.src;
}

function closeModal() { 
  modal.style.display ='none';
}