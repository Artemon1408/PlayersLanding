const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("banner__burger-menu-active");

      if (this.classList.contains("active")) {
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

export default accordion;
