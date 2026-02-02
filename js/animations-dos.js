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






























// animations-connector-avoid.js
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".process-wrap");
  if (!wrap) return;
  const boxes = Array.from(wrap.querySelectorAll(".caja-x"));
  if (boxes.length < 2) return;

  const svgNS = "http://www.w3.org/2000/svg";

  // Create overlay SVG as FIRST CHILD so it stays behind boxes (z-index low)
  const overlay = document.createElementNS(svgNS, "svg");
  overlay.classList.add("process-overlay");
  overlay.setAttribute("preserveAspectRatio", "none");
  overlay.style.position = "absolute";
  overlay.style.left = "0";
  overlay.style.top = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.overflow = "visible";

  wrap.insertBefore(overlay, wrap.firstChild); // important: behind content

  // elements to AVOID (numbers). Add .big-number in HTML to detect them;
  // also support elements marked with attribute data-avoid
  const avoids = Array.from(document.querySelectorAll(".big-number, .p-number, [data-avoid]"));

  function getRectRelative(el) {
    const r = el.getBoundingClientRect();
    const wrapR = wrap.getBoundingClientRect();
    return {
      left: r.left - wrapR.left,
      top: r.top - wrapR.top,
      right: r.right - wrapR.left,
      bottom: r.bottom - wrapR.top,
      width: r.width,
      height: r.height
    };
  }

  // simple intersection: check if a horizontal segment (x1->x2 at y +/- thickness) intersects avoid rect
  function horizontalIntersectsRect(x1, x2, y, thickness, rect) {
    const segLeft = Math.min(x1, x2);
    const segRight = Math.max(x1, x2);
    const segTop = y - thickness/2;
    const segBottom = y + thickness/2;
    return !(segRight < rect.left || segLeft > rect.right || segBottom < rect.top || segTop > rect.bottom);
  }

  // build path avoiding "avoids" rects
  function buildPath() {
    // clear overlay
    while (overlay.firstChild) overlay.removeChild(overlay.firstChild);

    const wr = wrap.getBoundingClientRect();
    const width = Math.max(wr.width, 800);
    const height = Math.max(wr.height, 600);
    overlay.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const anchors = boxes.map(b => getRectRelative(b));
    const avoidRects = avoids.map(a => getRectRelative(a));

    // start path at bottom-center of box 0
    let d = "";
    let currentX = anchors[0].left + anchors[0].width * 0.5;
    let currentY = anchors[0].top + anchors[0].height;
    d += `M ${currentX} ${currentY} `;

    const connectionPoints = [{ x: currentX, y: currentY }];

    for (let i = 1; i < anchors.length; i++) {
      const target = anchors[i];
      const targetX = target.left + target.width * 0.5;
      const targetY = target.top;

      // choose a midY by default
      let midY = Math.round((currentY + targetY) / 2);

      // if horizontal segment at midY intersects any avoid rect, try shifting up/down
      const thickness = 14; // safety thickness to check collisions
      const maxShift = 180;
      let shifted = false;
      for (let shift = 0; shift <= maxShift; shift += 40) {
        let candidates = [ midY - shift, midY + shift ];
        if (shift === 0) candidates = [midY];
        let ok = false;
        for (const candidateY of candidates) {
          // check both vertical->candidate and candidate->target horizontal segments
          // vertical segment from currentY -> candidateY should avoid avoidRects? vertical collisions less critical
          // only check horizontal candidate segment against avoids
          let collides = avoidRects.some(rect => horizontalIntersectsRect(currentX, targetX, candidateY, thickness, rect));
          if (!collides) {
            midY = candidateY;
            ok = true;
            break;
          }
        }
        if (ok) { shifted = (shift !== 0); break; }
      }

      // Add vertical/horz/vertical sequence with small quadratic curves to soften corners
      // L to midY, L to targetX at midY, L to targetY
      d += `L ${currentX} ${midY} `;
      d += `L ${targetX} ${midY} `;
      d += `L ${targetX} ${targetY} `;

      // record connection point (top center)
      connectionPoints.push({ x: targetX, y: targetY });

      currentX = targetX;
      currentY = targetY;
    }

    // create path element
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.classList.add("p-path");
    overlay.appendChild(path);

    // create dot
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("r", 7);
    dot.setAttribute("cx", 0);
    dot.setAttribute("cy", 0);
    dot.classList.add("p-dot");
    overlay.appendChild(dot);

    return { path, dot, connectionPoints, width, height };
  }

  // find closest length along path to a connection point (samples)
  function findClosestLength(pathEl, px, py) {
    const len = pathEl.getTotalLength();
    let best = { len: 0, dist: Infinity };
    const step = Math.max(4, Math.round(len / 500));
    for (let l = 0; l <= len; l += step) {
      const p = pathEl.getPointAtLength(l);
      const dx = p.x - px;
      const dy = p.y - py;
      const dist = dx*dx + dy*dy;
      if (dist < best.dist) { best.dist = dist; best.len = l; }
    }
    const start = Math.max(0, best.len - step);
    const end = Math.min(len, best.len + step);
    for (let l = start; l <= end; l += 1) {
      const p = pathEl.getPointAtLength(l);
      const dx = p.x - px;
      const dy = p.y - py;
      const dist = dx*dx + dy*dy;
      if (dist < best.dist) { best.dist = dist; best.len = l; }
    }
    return best.len;
  }

  // initial build
  let refs = buildPath();
  let path = refs.path;
  let dot = refs.dot;
  let connectionPoints = refs.connectionPoints;
  let pathLength = path.getTotalLength();

  // compute lengths per box (where the path reaches the top-center)
  const connectionLengths = [];
  connectionLengths.push(0);
  for (let i = 1; i < connectionPoints.length; i++) {
    const p = connectionPoints[i];
    connectionLengths.push(findClosestLength(path, p.x, p.y));
  }
  connectionLengths.push(pathLength);

  gsap.set(dot, { autoAlpha: 0, scale: 1 });

  // create motion path animation controlled by ScrollTrigger (scrub)
  const motion = gsap.to(dot, {
    motionPath: { path: path, align: path, alignOrigin: [0.5,0.5] },
    ease: "none",
    duration: 1
  });

  const st = ScrollTrigger.create({
    trigger: wrap,
    start: "top center",
    end: "bottom bottom",
    scrub: 0.8,
    onUpdate(self) {
      if (self.progress > 0.02) gsap.to(dot, { autoAlpha: 1, duration: 0.12 });

      const traveled = self.progress * pathLength;
      for (let i = 0; i < boxes.length; i++) {
        const conn = connectionLengths[i] || 0;
        if (traveled >= conn && !boxes[i].classList.contains("connected")) {
          boxes[i].classList.add("connected");
        }
      }

      if (self.progress >= 1) {
        self.kill();
        gsap.to(dot, { autoAlpha: 1, duration: 0.24 }); // keep it visible
      }
    },
    onRefresh() { setTimeout(rebuild, 40); }
  });

  motion.scrollTrigger = st;

  // rebuild on resize (recalculate path and lengths)
  function rebuild() {
    refs = buildPath();
    path = refs.path;
    dot = refs.dot;
    pathLength = path.getTotalLength();

    // recompute connection lengths
    connectionLengths.length = 0;
    connectionLengths.push(0);
    for (let i = 1; i < refs.connectionPoints.length; i++) {
      const p = refs.connectionPoints[i];
      connectionLengths.push(findClosestLength(path, p.x, p.y));
    }
    connectionLengths.push(pathLength);

    motion.vars.motionPath.path = path;
    motion.invalidate();
    st.refresh();
  }

  // listen resize
  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(rebuild, 140);
  });

}); // DOMContentLoaded