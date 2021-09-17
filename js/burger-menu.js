const burger = () => {
  const on = () => {
    burger_icon.style.display = "none";
    menu.style.height = "var(--height-menu)";
  };
  const off = () => {
    burger_icon.style.display = "block";
    menu.style.height = "0px";
  };
  const burger_icon = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");
  window.addEventListener("resize", off);
  window.addEventListener('wheel', off);
  burger_icon.addEventListener("click", on);
  menu.addEventListener("click", off);
};
