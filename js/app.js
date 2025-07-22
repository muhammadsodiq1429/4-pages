const links = document.querySelectorAll(".navbar__link a");
const current = window.location.pathname;

links.forEach((link) => {
  const href = link.getAttribute("href");
  const absoluteHref = new URL(href, window.location.origin).pathname;
  if (current === "/pages" + absoluteHref || absoluteHref === "/") {
    link.classList.add("active");
  }
});
