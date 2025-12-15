(function () {
  const path = window.location.pathname.toLowerCase();

  const isEN =
    path.endsWith("indexeng.html") ||
    path.includes("/en/");

  const isCZ =
    path.endsWith("index.html") ||
    path === "/" ||
    path === "";

  const links = document.querySelectorAll(".lang-switch a");

  if (!links.length) return;

  links.forEach(link => {
    const lang = link.dataset.lang;

    if (
      (lang === "en" && isEN) ||
      (lang === "cz" && isCZ)
    ) {
      const strong = document.createElement("strong");
      strong.textContent = link.textContent;
      link.replaceWith(strong);
    }
  });
})();

