document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#current-year");
  const header = document.querySelector("[data-header]");
  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 18);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
