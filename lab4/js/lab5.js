document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".header__nav");
  const links = document.querySelectorAll(".header__a");

  nav.addEventListener("click", function (event) {
    if (event.target.classList.contains("header__a")) {
      event.preventDefault();

      links.forEach((link) => {
        link.classList.remove("header__a_active");
      });

      setTimeout(() => {
        event.target.classList.add("header__a_active");

        const href = event.target.getAttribute("href");
        if (href.startsWith("#")) {
          const el = document.getElementById(href.substring(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else if (href && !href.startsWith("http")) {
          window.location.href = href;
        }
      }, 500);
    }
  });
});
