const main_section = document.getElementById("main-doc");
const nav_bar = document.getElementById("navbar");
const humburger = document.querySelector("#toogle img.humburger");
const close = document.querySelector("#toogle img.close");
const li_nav = document.querySelectorAll(".nav-list");

humburger.addEventListener("click", () => {
  nav_bar.classList.add("show");
  humburger.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", () => {
  nav_bar.classList.remove("show");
  close.style.display = "none";
  humburger.style.display = "inline-block";
});

li_nav.forEach((element) => {
  element.addEventListener("click", function (link) {
    li_nav.forEach((e) => {
      e.classList.remove("active");
    });

    element.classList.add("active");
  });
});
