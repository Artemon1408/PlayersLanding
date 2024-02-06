const burgerMenus = (menuSelector, linkItem, burgerselector) => {
  const menu = document.body.querySelector(menuSelector),
    menuItem = document.body.querySelectorAll(linkItem),
    hamburger = document.body.querySelector(burgerselector);

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger-active");
    menu.classList.toggle("burger__menu-active");
    if (hamburger.classList.contains("burger-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger-active");
      menu.classList.toggle("burger__menu-active");
      if (menu.classList.contains("burger__menu-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  });
};

export default burgerMenus;
