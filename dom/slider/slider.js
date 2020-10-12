const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);

rightArrow.addEventListener("click", (e) => {
  e.preventDefault();
  let currentWidth = parseInt(computedStyles.right);

  if (currentWidth < 500) {
    items.style.right = `${currentWidth + 100}px`;
  }
});

leftArrow.addEventListener("click", (e) => {
  e.preventDefault();
  let currentWidth = parseInt(computedStyles.right);

  if (currentWidth > 0) {
    items.style.right = `${currentWidth - 100}px`;
  }
});
