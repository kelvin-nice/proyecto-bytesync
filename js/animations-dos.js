gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1️⃣ BANNER
  ========================== */
  gsap.from(".banner-head h1", {
    opacity: 0,
    x: 60, // 👉 derecha → izquierda
    duration: 1,
    ease: "power2.out"
  });

  /* =========================
     2️⃣ IMAGEN SUPERIOR
  ========================== */
  gsap.from(".imagen-contacto", {
    scrollTrigger: {
      trigger: ".imagen-contacto",
      start: "top 90%",
    },
    opacity: 0,
    x: 100, // 👉 barrido derecha → izquierda
    duration: 1.2,
    ease: "power3.out"
  });

  /* =========================
     3️⃣ COLUMNA IZQUIERDA (IMAGEN)
  ========================== */
  gsap.from(".column-uno img", {
    scrollTrigger: {
      trigger: ".columnas-contacto",
      start: "top 75%",
    },
    xPercent: 30, // 👉 entra desde la derecha
    opacity: 0,
    duration: 1.3,
    ease: "power3.out"
  });

  /* =========================
     4️⃣ TEXTO (CASCADA)
  ========================== */
  gsap.from(".info > *", {
    scrollTrigger: {
      trigger: ".info",
      start: "top 80%",
    },
    x: 50, // 👉 derecha → izquierda
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  });

  /* =========================
     5️⃣ ITEMS CONTACTO
  ========================== */
  gsap.from(".contact-item", {
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 80%",
    },
    x: 40, // 👉 derecha → izquierda
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  });

  /* =========================
     6️⃣ FORMULARIO
  ========================== */
  gsap.from(".form-area", {
    scrollTrigger: {
      trigger: ".form-area",
      start: "top 85%",
    },
    x: 80, // 👉 derecha → izquierda
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
  });

  /* =========================
     7️⃣ INPUTS
  ========================== */
  gsap.from(".contact-form .row", {
    scrollTrigger: {
      trigger: ".form-area",
      start: "top 85%",
    },
    opacity: 0,
    x: 40, // 👉 derecha → izquierda
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  });

});
