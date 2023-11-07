const textElement = document.querySelector(".gallery__name");
const text = textElement.textContent;
textElement.textContent = "";
function animateText() {
  let i = 0;
  const animationInterval = setInterval(function () {
    if (i < text.length) {
      textElement.textContent += text[i];
      i++;
    } else {
      clearInterval(animationInterval);
      setTimeout(function () {
        textElement.textContent = "";
        animateText();
      }, 3000);
    }
  }, 100);
}
animateText();
