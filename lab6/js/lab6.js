document.addEventListener("DOMContentLoaded", function () {
  // const container = document.createElement("div");
  let container = document.querySelector(".header__nav");

  fetch("./js/menu.json")
    .then((response) => response.json())
    .then((data) => {
      const list = document.createElement("ul");
      list.className = "menu-items";

      data.forEach((item) => {
        const li = document.createElement("li");
        li.className = "header__li";
        li.dataset.id = item.id;
        li.innerHTML = `<a href="${item.url}" class="header__a">${item.title}</a>`;
        list.appendChild(li);
      });

      container.appendChild(list);
    })
    .catch((error) => console.error("Error:", error));

  container.addEventListener("click", function (event) {
    const link = event.target.closest(".header__a");

    if (link) {
      setTimeout(() => {
        link.parentElement.classList.add("header__a_active");

        setTimeout(() => {
          link.parentElement.classList.remove("header__a_active");
        }, 800);
      }, 300);
    }
  });
});
