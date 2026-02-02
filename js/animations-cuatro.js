gsap.registerPlugin(ScrollTrigger);

/* ===============================
   AJUSTES BASE (ANTI PARPADEO)
================================ */
gsap.set([
  ".banner-head h1",
  ".servicio h1",
  ".servicio p",
  ".img-chirra",
  ".contenido-chirra > *",
  ".img-chirra-mobile",
  ".info-fenix .contenido-chirra > *",
  ".img-fenix-mobile"
], {
  opacity: 0
});

/* ===============================
   SERVICIOS (BARRIDO DERECHA → IZQUIERDA)
================================ */
gsap.fromTo(".banner-head h1",
  { x: 140, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".banner-head",
      start: "top 80%",
      once: true
    }
  }
);

/* ===============================
   TITULOS SERVICIO
================================ */
gsap.fromTo(".servicio h1",
  { y: 60, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".servicio",
      start: "top 80%",
      once: true
    }
  }
);

/* ===============================
   CHIRRA – IMAGEN
================================ */
gsap.fromTo(".img-chirra",
  { x: -120, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".info-chirra",
      start: "top 75%",
      once: true
    }
  }
);

/* ===============================
   CHIRRA – CONTENIDO
================================ */
gsap.fromTo(".contenido-chirra > *",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".info-chirra",
      start: "top 75%",
      once: true
    }
  }
);

/* ===============================
   CHIRRA – MOBILE IMG
================================ */
gsap.fromTo(".img-chirra-mobile",
  { y: 60, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".info-chirra",
      start: "top 85%",
      once: true
    }
  }
);

/* ===============================
   FENIX – CONTENIDO
================================ */
gsap.fromTo(".info-fenix .contenido-chirra > *",
  { x: -80, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".fenix",
      start: "top 75%",
      once: true
    }
  }
);

/* ===============================
   FENIX – IMAGEN
================================ */
gsap.fromTo(".img-fenix-mobile",
  { x: 120, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".fenix",
      start: "top 75%",
      once: true
    }
  }
);
