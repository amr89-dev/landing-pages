((d) => {
  const $navBtn = d.querySelector(".nav-btn"),
    $navMenu = d.querySelector(".nav-menu");

  $navBtn.addEventListener("click", (e) => {
    console.log($navBtn);
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
/*****Contact Form**** */

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

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
        let message = err.statusText || "Ocurrio un error";
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
