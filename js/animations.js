// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animamos el texto del hero (fade in y sube)
    gsap.from(".hero-text > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2, // Esto hace que los elementos aparezcan uno tras otro
        ease: "power2.out"
    });

    gsap.fromTo(".btn-contact", 
    { opacity: 0, y: 20 }, // Estado inicial (abajo)
    { opacity: 1, y: 0, duration: 1, delay: 1 } // Estado final (su sitio original)
);

    // 2. Animamos la imagen principal (entra desde la derecha)
    gsap.from(".hero-image img", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    });

    // 3. Animamos las tarjetas de méritos
    gsap.from(".card", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)", // Efecto de rebote
        delay: 1
    });

    // 4. Bonus: Efecto de "respiración" para la imagen (Loop infinito)
    gsap.to(".hero-image img", {
        y: 15,
        duration: 2,
        repeat: -1, // Infinito
        yoyo: true, // Va y vuelve
        ease: "sine.inOut"
    });

   
    // Animación de barrido desde la derecha
    gsap.from(".isotipo-big", {
        x: 100,           // Empieza 100px a la derecha
        opacity: 0,       // Empieza invisible
        duration: 2,    // Tiempo que tarda en llegar
        ease: "power2.out" // Efecto de frenado suave al final
    });










// --- 1. SECCIÓN CONÓCENOS (Aparece al bajar) ---
    const tlConocenos = gsap.timeline({
        scrollTrigger: {
            trigger: ".conocenos",
            start: "top 85%",    // La animación inicia cuando el tope de la sección llega al 85% de la pantalla
            toggleActions: "play none none none", // Se ejecuta una sola vez y no regresa
            // markers: true,    // Descomenta esta línea para ver las guías de activación
        }
    });

    tlConocenos.from(".equipo-imagen", { 
        x: -150,              // Viene desde la izquierda
        opacity: 0, 
        duration: 1.2, 
        ease: "power2.out" 
    })
    .from(".text-conocenos", { 
        x: 150,               // Viene desde la derecha
        opacity: 0, 
        duration: 1.2, 
        ease: "power2.out" 
    }, "-=0.8");              // Empieza un poco antes de que termine la imagen

    // --- 2. SECCIÓN SERVICIOS (Barrido de abajo hacia arriba) ---
    gsap.from(".articulos article", {
        scrollTrigger: {
            trigger: ".articulos",
            start: "top 85%",
            toggleActions: "play none none none",
        },
        y: 100,               // Viene desde abajo
        opacity: 0, 
        duration: 1,
        stagger: 0.2,         // Aparecen uno tras otro
        ease: "power3.out"
    });










    const tlFranja = gsap.timeline({
    scrollTrigger: {
      trigger: ".franja-total",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // 1️⃣ IMAGEN entra primero (barrido lateral)
  tlFranja.from(".img-franja", {
    xPercent: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })

  // 2️⃣ TEXTO aparece después (suave y elegante)
  .from(".text-franja > *", {
    x: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=0.5"); // se superpone un poco




});