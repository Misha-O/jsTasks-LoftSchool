const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = window.getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (items.length - preShownItems) * step;
let currentPosition = 0;

itemsList.style.right = currentPosition;

right.addEventListener("click", (e) => {
  e.preventDefault;

  if (currentPosition < maxRight) {
    currentPosition += step;
    itemsList.style.right = `${currentPosition}px`;
  }
});

left.addEventListener("click", (e) => {
  e.preventDefault;

  if (currentPosition > minRight) {
    currentPosition -= step;
    itemsList.style.right = `${currentPosition}px`;
  }
});
