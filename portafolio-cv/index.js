((d) => {
  const $navBtn = d.querySelector(".nav-btn"),
    $navMenu = d.querySelector(".nav-menu");

  $navBtn.addEventListener("click", (e) => {
    $navBtn.firstElementChild.classList.toggle("none");
    $navBtn.lastElementChild.classList.toggle("none");
    $navMenu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".nav-menu a")) return false;
    $navBtn.firstElementChild.classList.remove("none");
    $navBtn.lastElementChild.classList.add("none");
    $navMenu.classList.remove("is-active");
  });
})(document);
