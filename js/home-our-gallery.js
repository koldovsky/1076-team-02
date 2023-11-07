const textElement = document.querySelector(".gallery__name");
const text = textElement.textContent;
textElement.textContent = "";

for (let i = 0; i < text.length; i++) {
  setTimeout(function () {
    textElement.textContent += text[i];
    if (i === text.length - 1) {
      textElement.style.opacity = 1;
    }
  }, 100 * i);
}
