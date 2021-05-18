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
  fixedWidth: 300,
});
