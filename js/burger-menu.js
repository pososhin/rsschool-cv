const MAXWIDTH = 1988;

const burger = () => {
  const show = () => {
    burger_icon.style.display = "none";
    menu.style.height = "var(--height-menu)";
  };
  const on = () => {
    menu.classList.add("menu-on");
    show();
  };
  const hide = () => {
    burger_icon.style.display = "block";
    menu.style.height = "0px";
  };
  const off = () => {
    menu.classList.remove("menu-on");
    if (window.innerWidth >= MAXWIDTH) show();
    else hide();
  };
  const resize = () => {
    console.log(window.innerWidth, menu.classList.contains("menu-on"));
    if (window.innerWidth >= MAXWIDTH) show();
    else {
        if(menu.classList.contains("menu-on")) show();
        else hide();        
    }
  };
  const burger_icon = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");
  window.addEventListener("resize", resize);
  window.addEventListener("wheel", off);
  burger_icon.addEventListener("click", on);
  menu.addEventListener("click", off);
};
