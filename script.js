// === Animaciones de aparición en scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");
  const opciones = { threshold: 0.2, rootMargin: "0px 0px -100px 0px" };

  const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, opciones);

  elementos.forEach(el => observer.observe(el));

  // Animación inicial del hero
  const heroContent = document.querySelector(".contenido-hero");
  if (heroContent) {
    heroContent.classList.add("visible");
  }
});

// === Menú hamburguesa ===
const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");

if (menuToggle && menuLinks) {
  menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Cierra el menú al hacer clic en un enlace
  menuLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    });
  });
}

// === Efecto de scroll en el header ===
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header") || document.querySelector("header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});


