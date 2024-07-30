const magnifierEl = document.querySelector(".magnifier");

const searchContainerEl = document.querySelector(".search-bar-container");

magnifierEl.addEventListener("click", () => {
  searchContainerEl.classList.toggle("active");
});
