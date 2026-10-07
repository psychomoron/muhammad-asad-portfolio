(() => {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const { gsap, ScrollTrigger } = window;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from(".site-header", { y: -16, opacity: 0, duration: .55 })
    .from(".hero .kicker", { y: 14, opacity: 0, duration: .45 }, "-=.2")
    .from(".hero h1", { y: 30, opacity: 0, duration: .8 }, "-=.2")
    .from(".hero__intro", { y: 18, opacity: 0, duration: .55 }, "-=.45")
    .from(".hero__actions", { y: 14, opacity: 0, duration: .45 }, "-=.3")
    .from(".hero__proof > div", { y: 12, opacity: 0, duration: .4, stagger: .08 }, "-=.22")
    .from(".collage-frame--desktop", { x: 28, y: 22, rotate: 1.5, opacity: 0, duration: .85 }, "-=.75")
    .from(".collage-frame--map", { y: 24, opacity: 0, duration: .65 }, "-=.55")
    .from(".collage-frame--mobile", { x: -18, y: 28, rotate: -3, opacity: 0, duration: .65 }, "-=.5")
    .from(".collage-note, .collage-stamp", { scale: .92, opacity: 0, duration: .45, stagger: .08 }, "-=.35");

  if (!ScrollTrigger) return;

  document.querySelectorAll("[data-depth]").forEach((el) => {
    const depth = Number(el.dataset.depth || .2);
    gsap.to(el, {
      y: -70 * depth,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .7 }
    });
  });

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.from(el, {
      y: 38,
      opacity: 0,
      duration: .8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 86%", once: true }
    });
  });

  gsap.to(".legacare-stage__mobile", {
    y: -34,
    ease: "none",
    scrollTrigger: { trigger: ".legacare-stage", start: "top bottom", end: "bottom top", scrub: .7 }
  });

  gsap.to(".parmint-mosaic__mobile", {
    y: -26,
    ease: "none",
    scrollTrigger: { trigger: ".parmint-mosaic", start: "top bottom", end: "bottom top", scrub: .7 }
  });
})();
