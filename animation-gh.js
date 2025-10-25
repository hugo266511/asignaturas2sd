// ⚡ Animación de entrada
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 * index);
  });
});

// 🌍 Cambiar color de fondo según la sección
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    document.body.style.background = "linear-gradient(135deg, #001f3f, #0a0a0a)";
  });
  section.addEventListener("mouseleave", () => {
    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
  });
});

// 🔙 Efecto al volver atrás
function goBack() {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "start.html";
  }, 600);
}

// 💫 Scroll reveal para animar elementos al bajar
window.addEventListener("scroll", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
