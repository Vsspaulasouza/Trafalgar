import outsideClick from "./outsideClick";

export default class MenuMobile {
  constructor(menuButton, menuList, otherElements, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.otherElements = document.querySelectorAll(otherElements);
    this.activeClass = "ativo";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    this.otherElements.forEach((element) =>
      element.classList.add(this.activeClass)
    );
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.otherElements.forEach((element) =>
        element.classList.remove(this.activeClass)
      );
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
