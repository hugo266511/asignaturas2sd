// 🌟 cursor-name.js
// Guarda y muestra el apodo junto al ratón en todas las páginas

// --- Pedir nombre si no existe ---
let nickname = localStorage.getItem("nickname");
if (!nickname) {
  nickname = prompt("Porfavor escribe tu apodo: (esto solo es necesario una vez)", "Guest");
  if (!nickname || nickname.trim() === "") nickname = "Guest";
  localStorage.setItem("nickname", nickname);
}

// --- Crear etiqueta flotante ---
const tag = document.createElement("div");
tag.textContent = nickname;
tag.style.position = "fixed";
tag.style.pointerEvents = "none";
tag.style.background = "orange";
tag.style.color = "white";
tag.style.padding = "6px 12px";
tag.style.borderRadius = "12px";
tag.style.fontWeight = "600";
tag.style.fontSize = "14px";
tag.style.zIndex = "99999";
tag.style.transition = "transform 0.05s linear";
document.body.appendChild(tag);

// --- Seguir el ratón ---
document.addEventListener("mousemove", (e) => {
  tag.style.left = e.pageX + 15 + "px";
  tag.style.top = e.pageY + 15 + "px";
});
