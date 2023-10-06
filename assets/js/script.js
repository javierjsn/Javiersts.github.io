"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", headerActive);

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
// atas ke bawah
ScrollReveal().reveal(
  ".hero-content, .about-content, .section-title, .section-text, .testi-card, .form",
  {
    origin: "top",
  }
);
// bawah ke atas
ScrollReveal().reveal(
  ".collection-2, .gallery-bottom, .blog-bottom, .gallery-left, .gallery-right, .collection-4, .collection-5, .collection-6",
  {
    origin: "bottom",
  }
);
// kiri ke kanan
ScrollReveal().reveal(
  " .home-text p, .about-img img,.collection-1, .blog-left",
  {
    origin: "left",
  }
);
// kanan ke kiri
ScrollReveal().reveal(".wrapper, .about-banner, .collection-3, .blog-right", {
  origin: "right",
});
