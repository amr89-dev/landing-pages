/****Menu***/
((d) => {
  const $menuBtn = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);
/*****Contact Form**** */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/amr89.dev@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrio un erro";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error: ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);