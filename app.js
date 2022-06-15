let navbar = document.querySelector(".header .navbar");
console.log(navbar);

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};

loginBtn.onclick = () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
  document.querySelector(".account-form .login-form").classList.add("active");
};

let accountForm = document.querySelector(".account-form");
console.log(accountForm);

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};
document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};
// instead of .mySwiper put in the class name or id element
let swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

let swiperHCS = new Swiper(".home-courses-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
let swiperTeachers = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
let swiperStudentsRev = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

let swiperLogo = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
// move down under accordion variable because the classList.toggle('active') is not working
// document.querySelector(".load-more .btn").onclick = () => {
//   document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
//     show.style.display = "block";
//   });
//   document.querySelector(".load-more .btn").style.display = "none";
// };

let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

accordion.forEach((accord) => {
  accord.onclick = () => {
    // use this to close the last faq
    // accordion.forEach((dion) => {
    //   dion.classList.remove("active");
    // });
    accord.classList.toggle("active");
  };
});
document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
};
