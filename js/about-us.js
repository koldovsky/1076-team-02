document.addEventListener("partialsLoaded", async () => {
    await import("./burger-menu.js");
    await import('./questions.js');
    await import('./about-us-carousel.js')
  });

