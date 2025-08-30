// Seleciona elementos
const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement;
const menuMobile = document.getElementById("menu-mobile") as HTMLUListElement;

// Função para alternar menu
menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden"); // abre/fecha menu
});

// Fechar menu ao clicar em algum link
const links = menuMobile.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => menuMobile.classList.add("hidden"));
});
