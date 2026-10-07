document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#current-year");
  const header = document.querySelector("[data-header]");

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  document.documentElement.classList.add("js-ready");
});
