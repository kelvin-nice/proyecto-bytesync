gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  /* =================================================
     HERO (CARGA INICIAL)
  ================================================= */
  if (document.querySelector(".hero-text")) {

    gsap.from(".hero-text > *", {
      y: 30,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(".btn-contact", {
      y: 20,
      autoAlpha: 0,
      duration: 1,
      delay: 1
    });

    gsap.from(".hero-image img", {
      x: 100,
      autoAlpha: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    });

    gsap.from(".card", {
      scale: 0.5,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.7)",
      delay: 1
    });

    // respiración
    gsap.to(".hero-image img", {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.from(".isotipo-big", {
      x: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "power2.out"
    });
  }

  /* =================================================
     CONÓCENOS
  ================================================= */
  if (document.querySelector(".conocenos")) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".conocenos",
        start: "top 85%",
        once: true
      }
    })
    .from(".equipo-imagen", {
      x: -150,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .from(".text-conocenos", {
      x: 150,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.7");
  }

  /* =================================================
     SERVICIOS
  ================================================= */
  if (document.querySelector(".articulos")) {
    gsap.from(".articulos article", {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".articulos",
        start: "top 85%",
        once: true
      }
    });
  }

  /* =================================================
     FRANJA
  ================================================= */
  if (document.querySelector(".franja-total")) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".franja-total",
        start: "top 80%",
        once: true
      }
    })
    .from(".img-franja", {
      xPercent: -120,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(".text-franja > *", {
      x: 40,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");
  }

  /* =================================================
     CONTACTO
  ================================================= */
  if (document.querySelector(".banner-head")) {
    gsap.from(".banner-head h1", {
      x: 60,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out"
    });
  }

  if (document.querySelector(".imagen-contacto")) {
    gsap.from(".imagen-contacto", {
      x: 100,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".imagen-contacto",
        start: "top 90%",
        once: true
      }
    });
  }

  if (document.querySelector(".columnas-contacto")) {
    gsap.from(".column-uno img", {
      xPercent: 30,
      autoAlpha: 0,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".columnas-contacto",
        start: "top 75%",
        once: true
      }
    });
  }

  if (document.querySelector(".info")) {
    gsap.from(".info > *", {
      x: 50,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".info",
        start: "top 80%",
        once: true
      }
    });
  }

  if (document.querySelector(".contacts")) {
    gsap.from(".contact-item", {
      x: 40,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contacts",
        start: "top 80%",
        once: true
      }
    });
  }

  if (document.querySelector(".form-area")) {
    gsap.from(".form-area", {
      x: 80,
      autoAlpha: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".form-area",
        start: "top 85%",
        once: true
      }
    });

    gsap.from(".contact-form .row", {
      x: 40,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".form-area",
        start: "top 85%",
        once: true
      }
    });
  }

});







  


