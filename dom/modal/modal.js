const openBtn = document.getElementById("openOverlay");
const body = document.body;
const successModal = createModal("The message has been successfully sent !");

openBtn.addEventListener("click", (e) => {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlayElem = document.createElement("div");
  overlayElem.classList.add("overlay");

  //   adds click to anywhere on overlay
  overlayElem.addEventListener("click", (e) => {
    if (!e.target.classList.contains("content")) {
      closeElem.click();
    }
  });

  const containerElem = document.createElement("div");
  containerElem.classList.add("modal-container");

  //   create content with further text in it
  const contentElem = document.createElement("div");
  contentElem.classList.add("content");

  contentElem.innerHTML = content;

  //   close btn
  const closeElem = document.createElement("a");
  closeElem.classList.add("close");
  closeElem.textContent = "x";
  closeElem.href = "#";

  //   closes modal window
  closeElem.addEventListener("click", (e) => {
    e.preventDefault();
    body.removeChild(overlayElem);
  });

  overlayElem.appendChild(containerElem);
  containerElem.appendChild(contentElem);
  containerElem.appendChild(closeElem);
  return overlayElem;
}
