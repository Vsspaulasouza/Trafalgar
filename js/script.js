import MenuMobile from "./menuMobile";

const menuMobile = new MenuMobile(
  ".menu-mobile",
  ".menu",
  '[data-menu="change"]'
);
menuMobile.init();
