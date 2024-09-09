const title = document.querySelector("h1");
const computedStyle = window.getComputedStyle(title);

function increaseFontSize() {
    const currentFontSize = window.getComputedStyle(title).getPropertyValue('font-size');
    const newFontSize = parseFloat(currentFontSize) + 1 + 'px';
    title.style.fontSize = newFontSize;
}

function decreaseFontSize() {
    const currentFontSize = window.getComputedStyle(title).getPropertyValue('font-size');
    const newFontSize = parseFloat(currentFontSize) - 1 + 'px';
    title.style.fontSize = newFontSize;
}

function ReturnNormalFontSize() {
    title.style.fontSize = "32px";

}

document.querySelector(".increaseBtn").onclick = increaseFontSize;
document.querySelector(".decreaseBtn").onclick = decreaseFontSize;
document.querySelector(".normalSizeBtn").onclick = ReturnNormalFontSize;

