const hamburger = document.querySelector(".header__hamburger"),
  mainDaysContainer = document.querySelector(".main__days"),
  days = document.querySelectorAll(".main-days__item");

function toChangeHamburger() {
  hamburger.classList.toggle("change");
}

function removeActive() {
  days.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}

function toAddActiveClass(e) {
  let target = e.target;
  if (target.classList.contains("main-days__item")) {
    removeActive();
    target.classList.toggle("active");
  }
}

hamburger.addEventListener("click", toChangeHamburger);
mainDaysContainer.addEventListener("click", toAddActiveClass);
