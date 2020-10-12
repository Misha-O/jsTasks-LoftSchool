const openBtn = document.getElementById("openOverlay");
const successModal = createModal("The message has been successfully sent !");
const body = document.body;

openBtn.addEventListener("click", (e) => {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlayElem = document.createElement("div");
  overlayElem.classList.add("overlay");

  const template = document.getElementById("overlayTemplate");
  overlayElem.innerHTML = template.innerHTML;

  overlayElem.addEventListener("click", (e) => {
    if (e.target == overlayElem) {
      closeElem.click();
    }
  });

  const closeElem = overlayElem.querySelector(".close");

  closeElem.addEventListener("click", (e) => {
    e.preventDefault;
    body.removeChild(overlayElem);
  });

  const contentElem = overlayElem.querySelector(".content");
  contentElem.innerHTML = content;

  return overlayElem;
}
