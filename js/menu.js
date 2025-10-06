  const menuBtn = document.getElementById("menu-btn");
  const header = document.querySelector(".main-header");
  const menuIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("active");

    // Cambiar icono con animación
    if (header.classList.contains("active")) {
      menuIcon.classList.remove("bx-menu");
      menuIcon.classList.add("bx-x");
    } else {
      menuIcon.classList.remove("bx-x");
      menuIcon.classList.add("bx-menu");
    }
  });