let toggleButton = document.getElementById("menu-icon");
let targetElement = document.getElementById("menu");

toggleButton.addEventListener("click", function () {
    targetElement.classList.toggle("mobile-menu");
});
