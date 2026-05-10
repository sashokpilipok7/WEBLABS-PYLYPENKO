document.addEventListener("DOMContentLoaded", function () {
  try {
    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".header__nav");
    const anchors = document.querySelectorAll('a[href*="#"]');

    burger.addEventListener("click", function () {
      this.classList.toggle("active");
      this.classList.toggle("not-active");
      menu.classList.toggle("header__nav_active");
    });

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (blockID === "contactUs") {
          setTimeout(() => emailInput.focus(), 1500);
        }
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
});
