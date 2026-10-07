(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !window.gsap) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // First-load hero choreography.
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .from(".site-header", { y: -18, opacity: 0, duration: 0.65 })
    .from(".hero__status", { y: 16, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(".hero-title__line", { yPercent: 28, opacity: 0, duration: 0.82, stagger: 0.1 }, "-=0.22")
    .from(".hero__intro", { y: 18, opacity: 0, duration: 0.58 }, "-=0.42")
    .from(".hero__actions", { y: 14, opacity: 0, duration: 0.5 }, "-=0.32")
    .from(".hero__facts > div", { y: 12, opacity: 0, duration: 0.42, stagger: 0.08 }, "-=0.3")
    .from(".system-panel", { scale: 0.965, y: 22, opacity: 0, duration: 0.9 }, "-=0.85")
    .from("[data-system-node]", { opacity: 0, scale: 0.96, transformOrigin: "center", duration: 0.38, stagger: 0.06 }, "-=0.55")
    .from("[data-system-event]", { x: 10, opacity: 0, duration: 0.38, stagger: 0.1 }, "-=0.35");

  // Calm ambient node sequence; reinforces the system flow without becoming distracting.
  const nodes = gsap.utils.toArray("[data-system-node]");
  if (nodes.length) {
    const flow = gsap.timeline({ repeat: -1, repeatDelay: 0.25, delay: 1.5 });
    nodes.forEach((node) => {
      const rect = node.querySelector("rect");
      const dot = node.querySelector(".map-node__dot");
      flow
        .to(rect, { stroke: "rgba(184,255,89,.88)", duration: 0.2 }, ">")
        .to(dot, { scale: 1.8, transformOrigin: "center", duration: 0.2 }, "<")
        .to(rect, { stroke: node.classList.contains("map-node--focus") ? "rgba(184,255,89,.46)" : "rgba(255,255,255,.13)", duration: 0.42 })
        .to(dot, { scale: 1, duration: 0.42 }, "<");
    });
  }

  if (!ScrollTrigger) return;

  // The diagram drifts more slowly than the page for a little depth.
  gsap.to("[data-hero-system]", {
    yPercent: 7,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.7
    }
  });

  // Section heading entrances.
  gsap.utils.toArray(".section-heading, .problems > .container, .about-grid, .contact > .container").forEach((element) => {
    gsap.from(element, {
      y: 44,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true
      }
    });
  });

  // Featured-project panel entrances and screenshot depth.
  gsap.utils.toArray(".project--featured").forEach((project) => {
    gsap.from(project, {
      y: 52,
      opacity: 0,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 82%",
        once: true
      }
    });

    const stage = project.querySelector("[data-parallax-stage]");
    if (!stage) return;

    stage.querySelectorAll("[data-parallax]").forEach((frame) => {
      const strength = Number(frame.dataset.parallax || 0.3);
      gsap.fromTo(
        frame,
        { y: 28 * strength },
        {
          y: -34 * strength,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.85
          }
        }
      );
    });
  });

  gsap.utils.toArray(".project-card--visual, .services-grid article").forEach((card, index) => {
    gsap.from(card, {
      y: 36,
      opacity: 0,
      duration: 0.72,
      delay: (index % 3) * 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        once: true
      }
    });
  });
})();
