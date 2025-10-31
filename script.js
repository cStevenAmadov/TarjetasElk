document.addEventListener("DOMContentLoaded", () => {
  const card3d = document.querySelector(".card3d");

  // Efecto de entrada
  card3d.style.opacity = "0";
  card3d.style.transform = "translateY(30px)";
  requestAnimationFrame(() => {
    setTimeout(() => {
      card3d.style.transition = "all 0.6s ease";
      card3d.style.opacity = "1";
      card3d.style.transform = "translateY(0)";
    }, 150);
  });

  // Flip automático cada 4 s
  setInterval(() => {
    card3d.classList.toggle("is-flipped");
  }, 6000);
});

