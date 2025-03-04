function calculateHeroPaddingTop(headerElement, heroElement) {
    const currentHeroPaddingTop = window.getComputedStyle(heroElement, null).getPropertyValue("padding-top");
    const headerHeight = `${headerElement.offsetHeight}px`;

    heroElement.style.paddingTop = `calc(${currentHeroPaddingTop} + ${headerHeight})`;
}

const headerElement = document.querySelector("header");
const heroElement = document.querySelector(".hero");

calculateHeroPaddingTop(headerElement, heroElement);

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        headerElement.classList.add("down");
    } else {
        headerElement.classList.remove("down");
    }
});
