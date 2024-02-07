const themeToggle = () => {
  const root = document.querySelector(":root"),
    toggle = document.querySelector("#theme");

  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");
  });
};

export default themeToggle;
