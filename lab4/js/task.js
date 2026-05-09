document.addEventListener("DOMContentLoaded", function () {
  try {
    const menuLinks = document.querySelectorAll(".header__a");

    if (menuLinks.length === 0) {
      throw new Error("Menu elements not found");
    }

    function logMenuItems(...items) {
      console.log("Menu items:", items);
    }

    const menuTexts = Array.from(menuLinks).map((link) =>
      link.textContent.trim(),
    );
    logMenuItems(...menuTexts);

    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuLinks.forEach((l) => l.classList.remove("header__a_active"));
        this.classList.add("header__a_active");
      });
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
});
