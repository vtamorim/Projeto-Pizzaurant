// Codigo pro header para ele ter um negócio abaixando (precisa de um CSS com before)

const headerElement = document.querySelector("header"); // Pegar o Header
const ElementBehindHeader = document.querySelector("element"); // Elemento embaixo do Header (provavelmente o hero)

ElementBehindHeader.paddingTop = `calc(${window.getComputedStyle(ElementBehindHeader, null).getPropertyValue("padding-top")} + ${headerElement.offsetHeight})`;

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        headerElement.classList.add("actived"); // classe para indicar se esta para baixo
    } else {
        headerElement.classList.remove("actived"); // classe para indicar se esta para baixo
    }
});