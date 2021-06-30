const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* REMOVE MENU MOBILE */
/* Grab the nav__link */
const navLink = document.querySelectorAll(".nav__link");

/* Make function that if u click on any of the navLinks the menu hide */
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

/* Add this function on all the menu links with forEach()*/
navLink.forEach((link) => link.addEventListener("click", linkAction));

/* CHANGE BACKGROUND HEADER */

function scrollHeader() {
  const header = document.getElementById("header");
  /* When the scoll is greater than 100 viewport innerHeight, add the scroll header class to the header tag */
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* SWIPER DISCOVER JS */

var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true /* Infinited Swipe */,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
    /* rotate: 50, */
    /*  stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true, */
  },
  /* pagination: {
    el: ".swiper-pagination",
  }, */
});

/* VIDEO SECTION JS */

const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play Video
    videoFile.play();

    // Change the icon on the button
    videoIcon.classList.add("ri-pause-line");
    // Remove the play icon from button
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Pauze Video
    videoFile.pause();

    // Remove the play icon from button to pause
    videoIcon.classList.remove("ri-pause-line");
    // Change the icon on the button
    videoIcon.classList.add("ri-play-line");
  }
}

// Set the function to the video button
videoButton.addEventListener("click", playPause);

// Set icon back to play icon when video ends
function videoEnds() {
  // Video ends, change icon and remove the pauze icon
  videoIcon.classList.remove("ri-pause-line");
  // Change to play icon
  videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", videoEnds);

/* SHOW SCROLL UP BUTTON JS */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll

  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/* SCROLL SECTIONS ACTIVE LINK */

// Get ALL sections ID's
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* DARK AND LIGHT THEME JS */

/* Grab the icon/button on the webpage */
const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line"; // This is the class if icon u choose, from Fontawesome, Remixicon etc...

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or Remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  //reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
  origin: "left",
});

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
  origin: "right",
  interval: 100,
});
