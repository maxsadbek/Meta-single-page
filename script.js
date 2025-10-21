const menuBtn = document.querySelector("#menu");
const menuBar = document.querySelector(".menu-bar");
const foundders = document.querySelector("#foundders")
const partners = document.querySelector("#partners")
const future = document.querySelector("#future")

menuBtn.addEventListener("click", () => {
    menuBar.classList.toggle("active");

    if (menuBar.classList.contains("active")) {
        menuBtn.classList.remove("ri-menu-line");
        menuBtn.classList.add("ri-close-line");
    } else {
        menuBtn.classList.remove("ri-close-line");
        menuBtn.classList.add("ri-menu-line");
    }
});

foundders.addEventListener("click", ()=>{
    foundders.style.backgroundColor = "#222"
    foundders.style.color = "rgb(141,253,27)"
    partners.style.backgroundColor = "transparent"
    future.style.backgroundColor = "transparent"
    partners.style.color = "#fff"
    future.style.color = "#fff"
})

partners.addEventListener("click", () => {
    partners.style.backgroundColor = "#222"
    partners.style.color = "rgb(141,253,27)"
    foundders.style.backgroundColor = "transparent"
    future.style.backgroundColor = "transparent"
    foundders.style.color = "#fff"
    future.style.color = "#fff"
})

future.addEventListener("click", () => {
    future.style.backgroundColor = "#222"
    future.style.color = "rgb(141,253,27)"
    foundders.style.backgroundColor = "transparent"
    partners.style.backgroundColor = "transparent"
    foundders.style.color = "#fff"
    partners.style.color = "#fff"
})