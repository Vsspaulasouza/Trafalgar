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
  edgePadding: 40,
  slideBy: "page",
  nav: false,
  autoplay: true,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
});
