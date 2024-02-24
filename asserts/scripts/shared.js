const header = document.querySelector("header");
const loadOverlay = document.querySelector("#load-overlay");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuOverlay = document.querySelector(".menu-overlay");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseBtn = document.querySelector("#close-btn");

// remove loading overlay
window.addEventListener("load", () => {
  loadOverlay.classList.add("hidden");
});

AOS.init();

// when user scroll for 44px the header sticks to top-0
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 44) {
    header.classList.add("fixed", "top-0", "right-0", "left-0");
  } else {
    header.classList.remove("fixed", "top-0", "right-0", "left-0");
  }
  //
});

//transferring the background-color bg-activeBg from one link to another
const headerLinks = document.querySelectorAll(".header-link");

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerLinks.forEach((otherLinks) => {
      otherLinks.classList.remove("bg-activeBg/80");
    });

    link.classList.add("bg-activeBg/80");
  });
});

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.replace("hidden", "flex");
  mobileMenuOverlay.classList.replace("hidden", "block");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenuCloseBtn.parentElement.classList.replace("flex", "hidden");
  mobileMenuOverlay.classList.replace("block", "hidden");
});

mobileMenuOverlay.addEventListener('click',()=>{
  mobileMenuCloseBtn.parentElement.classList.replace("flex", "hidden");
  mobileMenuOverlay.classList.replace("block", "hidden"); 
})