// 🌈 Pequeña animación de entrada con partículas (opcional)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".start-container");

  container.style.opacity = 0;
  container.style.transform = "scale(0.95)";

  setTimeout(() => {
    container.style.transition = "all 1s ease";
    container.style.opacity = 1;
    container.style.transform = "scale(1)";
  }, 200);
});

function goTo(page) {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 800);
}
