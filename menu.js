var menuBtn = document.getElementById("menu-btn");
var menuMobile = document.getElementById("menu-mobile");
var spans = menuBtn.querySelectorAll("span");
// Alterna menu e animação do ícone
menuBtn.addEventListener("click", function () {
    menuMobile.classList.toggle("hidden"); // mostra/esconde links
    // Anima o hambúrguer para X
    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-2");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
});
// Fecha menu ao clicar em link
menuMobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menuMobile.classList.add("hidden"); // esconde links
        spans[0].classList.remove("rotate-45", "translate-y-2");
        spans[1].classList.remove("opacity-0");
        spans[2].classList.remove("-rotate-45", "-translate-y-2");
    });
});
