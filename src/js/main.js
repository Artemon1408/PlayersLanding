import burgerMenus from "./modules/burgermenus";
import accordion from "./modules/accordion";
import calcRating from "./modules/calcRating";
import themeToggle from "./modules/themeToggle";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenus(".burger__menu", "[data-link]", ".burger");
  accordion(".banner__burger");
  calcRating();
  themeToggle();
});
