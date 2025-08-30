// Seleciona elementos
var menuBtn = document.getElementById("menu-btn");
var menuMobile = document.getElementById("menu-mobile");
// Função para alternar menu
menuBtn.addEventListener("click", function () {
    menuMobile.classList.toggle("hidden");
});
