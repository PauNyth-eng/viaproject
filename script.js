
const globalNav = document.getElementById("global-nav");
const logo = globalNav.querySelector(".logo img");
function removeNavOpen() {
    logo.setAttribute("src", "pictures/BMW_white.svg");
    globalNav.classList.remove("active");
    document.querySelectorAll(".nav-table li.active").forEach((item) => {
        item.classList.remove("active");
    });
    document.querySelectorAll(".fas").forEach(item => {
        item.classList.remove("hello_there");
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
        document.querySelectorAll(".fas").forEach(item => {
            item.classList.add("hello_there");
        });
        globalNav.classList.add("active");
        document.body.style.overflow = 'hidden'
    });
});