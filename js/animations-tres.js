gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".process-wrap");
  if (!wrap) return;

 const boxes = Array.from(wrap.querySelectorAll(".caja-x"));





  /* EFECTO NUMEROS IMG */
  const imparImgs = Array.from(wrap.querySelectorAll(".impar img"));
  imparImgs.forEach((img, i) => {
  gsap.to(img, {
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: img.closest("article"),
      start: "top 60%",
      end: "top 40%",
      scrub: true
    }
  });


  gsap.fromTo(img,
  { opacity: 0.15, y: 20 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: img.closest("article"),
      start: "top 70%",
      end: "top 40%",
      scrub: true
    }
  }
);



});


  const numbers = Array.from(document.querySelectorAll(".big-number"));
  if (boxes.length < 2) return;

  const svgNS = "http://www.w3.org/2000/svg";

  wrap.querySelector(".process-overlay")?.remove();

  const overlay = document.createElementNS(svgNS, "svg");

  




  overlay.classList.add("process-overlay");
  overlay.setAttribute("preserveAspectRatio", "none");
  Object.assign(overlay.style, {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    overflow: "visible"
  });
  wrap.prepend(overlay);

  let hasCompleted = false;
  let fg, dot, maskPath, pathLen, st;

  function getRectRelative(el) {
    const r = el.getBoundingClientRect();
    const w = wrap.getBoundingClientRect();
    return {
      left: r.left - w.left,
      top: r.top - w.top,
      width: r.width,
      height: r.height
    };
  }

  function buildPathD() {
    const anchors = boxes.map(getRectRelative);
    let currX = anchors[0].left + anchors[0].width / 2;
    let currY = anchors[0].top + anchors[0].height;

    let d = `M ${currX} ${currY} `;
    const OFFSET = 40;

    for (let i = 1; i < anchors.length; i++) {
      const a = anchors[i];
      const tx = a.left + a.width / 2;
      const ty = a.top;

      const midY = (currY + ty) / 2 + OFFSET;

      d += `L ${currX} ${midY} L ${tx} ${midY} L ${tx} ${ty + OFFSET} `;
      currX = tx;
      currY = ty + OFFSET;
    }
    return d;
  }

  function buildSvg() {
    overlay.innerHTML = "";
    const rect = wrap.getBoundingClientRect();
    overlay.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);

    const d = buildPathD();

    const mask = document.createElementNS(svgNS, "mask");
    mask.setAttribute("id", "path-mask");

    const bg = document.createElementNS(svgNS, "rect");
    bg.setAttribute("width", "200%");
    bg.setAttribute("height", "200%");
    bg.setAttribute("fill", "black");
    mask.appendChild(bg);

    maskPath = document.createElementNS(svgNS, "path");
    maskPath.setAttribute("d", d);
    maskPath.setAttribute("fill", "none");
    maskPath.setAttribute("stroke", "white");
    maskPath.setAttribute("stroke-width", "5");
    mask.appendChild(maskPath);
    overlay.appendChild(mask);

    fg = document.createElementNS(svgNS, "path");
    fg.setAttribute("d", d);
    fg.setAttribute("fill", "none");
    fg.style.stroke = "#fff";
    fg.style.strokeWidth = 4;
    fg.style.strokeDasharray = "12 10";
    fg.setAttribute("mask", "url(#path-mask)");
    overlay.appendChild(fg);





    
    dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("r", 8);
    dot.style.fill = "#fff7d9";
    dot.style.opacity = 0;
    overlay.appendChild(dot);








    pathLen = fg.getTotalLength();
    maskPath.style.strokeDasharray = `0 ${pathLen}`;

    const p0 = fg.getPointAtLength(0);
    dot.setAttribute("cx", p0.x);
    dot.setAttribute("cy", p0.y);
  }

  buildSvg();

  const tl = gsap.timeline({ paused: true });

  tl.set(dot, { opacity: 1 });

  tl.to(dot, {
    motionPath: {
      path: fg,
      align: fg,
      alignOrigin: [0.5, 0.5]
    },
    duration: 1,
    ease: "none"
  }, 0);

  tl.to(maskPath, {
    strokeDasharray: `${pathLen} 0`,
    duration: 1,
    ease: "none"
  }, 0);

  /* 🔥 ACTIVAR CAJAS SEGÚN PROGRESO */
  boxes.forEach((box, i) => {
    tl.add(() => box.classList.add("connected"), i / boxes.length);
  });

  /* 🔥 ANIMAR NÚMEROS */
  numbers.forEach((num, i) => {
    tl.to(num, {
      opacity: 1
    }, i / numbers.length);
  });

  st = ScrollTrigger.create({
    animation: tl,
    trigger: wrap,
    start: "top center",
    end: "bottom bottom",
    scrub: true,
    onUpdate(self) {
      if (hasCompleted) return;
      if (self.progress >= 0.999) {
        hasCompleted = true;
        tl.progress(1).pause();
        st.kill();
        fg.removeAttribute("mask");
        gsap.to(dot, { opacity: 0, duration: 0.5 });
      }
    }
  });

  window.addEventListener("resize", () => {
    if (!hasCompleted) ScrollTrigger.refresh();
  });
});



























































gsap.registerPlugin(ScrollTrigger);

/* =========================
   BARRIDO GENERAL (TEXTOS)
========================= */
gsap.utils.toArray([
  ".servicio h1",
  ".servicio .head-parraf",
  ".textito h1",
  ".textito p",
  ".context h1",
  ".context .parrafo"
]).forEach(el => {

  gsap.fromTo(
    el,
    {
      y: 40,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)"
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true
      }
    }
  );
});

/* =========================
   BARRIDO IMÁGENES (LATERAL)
========================= */
gsap.utils.toArray(".mision-img img").forEach(img => {

  gsap.fromTo(
    img,
    {
      x: -60,
      opacity: 0,
      clipPath: "inset(0% 100% 0% 0%)"
    },
    {
      x: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 75%",
        once: true
      }
    }
  );
});








gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".mision-img").forEach((box) => {

  const img = box.querySelector("img");
  if (!img) return;

  const rect = box.getBoundingClientRect();
  const fromLeft = rect.left < window.innerWidth / 2;

  gsap.fromTo(
    img,
    {
      opacity: 0,
      x: fromLeft ? -180 : 180,
      rotationY: fromLeft ? -900 : 900, // 🔥 MUCHOS GIROS
      rotationX: 35,
      z: -200,
      transformPerspective: 1600
    },
    {
      opacity: 1,
      x: 0,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      duration: 1.8, // 🔥 MÁS TIEMPO = MÁS SUAVE
      ease: "power4.out",
      scrollTrigger: {
        trigger: box,
        start: "top 75%",
        once: true
      }
    }
  );
});
