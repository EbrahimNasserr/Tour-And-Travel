let searchForm = document.querySelector(".search-container")
let searchBtn = document.querySelector(".search-btn")
let formBtn = document.querySelector(".login-btn")
let loginForm = document.querySelector(".login-container")
let closeForm = document.querySelector("#form-close")
let menu = document.querySelector(".menu-btn")
let navbar = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".vid-btn")

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
    searchBtn.classList.toggle('fa-times')
}

formBtn.addEventListener("click",() => {
    loginForm.classList.add("active")
})

closeForm.addEventListener("click",() => {
    loginForm.classList.remove("active")
})

menu.addEventListener("click", () => {
    navbar.classList.toggle("active")
})

vidBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".controls .active").classList.remove("active")
        btn.classList.add("active")
        let src = btn.getAttribute("data-src")
        document.querySelector("#vid-slider").src = src
    })
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay:1500,
        disableOnInteraction:false,
    },
  });

  var swiper = new Swiper(".review-swiper", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
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

AOS.init({
    delay: 300,
    duration: 1000
})
