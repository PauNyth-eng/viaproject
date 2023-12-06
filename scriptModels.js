
const globalNav = document.getElementById("global-nav");
const logo = globalNav.querySelector(".logo img");
const fixedNav = document.querySelector('.fixed_nav');

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

function FillThen(el){
    if (el.classList.contains('clicked'))
      el.classList.remove('clicked');
    else
      el.classList.add('clicked');
};

document.addEventListener('scroll', function() {
  let scroll = document.documentElement.scrollTop;

  if (scroll >= 380) 
    fixedNav.classList.add('beFixed');
  else 
    fixedNav.classList.remove('beFixed');
});
