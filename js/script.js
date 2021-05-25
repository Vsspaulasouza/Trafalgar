import MenuMobile from "./menuMobile";
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

const menuMobile = new MenuMobile(
  ".menu-mobile",
  ".menu",
  '[data-menu="change"]'
);
menuMobile.init();

// slider
tns({
  container: ".my-slider",
  loop: true,
  items: 1,
  gutter: 40,
  fixedWidth: 1200,
  slideBy: "page",
  nav: true,
  center: true,
  autoplay: true,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  navContainer: "#nav",
  responsive: {
    300: {
      fixedWidth: 250,
    },
    400: {
      fixedWidth: 300,
    },
    500: {
      fixedWidth: 400,
    },
    600: {
      fixedWidth: 500,
    },
    700: {
      fixedWidth: 600,
    },
    800: {
      fixedWidth: 700,
    },
    900: {
      fixedWidth: 800,
    },
    1000: {
      fixedWidth: 900,
    },
    1100: {
      fixedWidth: 1000,
    },
    1200: {
      fixedWidth: 1100,
    },
    1300: {
      fixedWidth: 1200,
    },
  },
});
