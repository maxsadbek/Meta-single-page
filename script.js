const menuBtn = document.querySelector("#menu");
const menuBar = document.querySelector(".menu-bar");

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

console.log(menuBtn);
