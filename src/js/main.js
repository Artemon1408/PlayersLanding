import burgerMenus from "./modules/burgermenus";
import accordion from "./modules/accordion";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenus(".burger__menu", "[data-link]", ".burger");
  accordion(".banner__burger");
});
