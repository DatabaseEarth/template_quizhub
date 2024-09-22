// ==============================================================================
// Js cho phần nav tablet mobile
let btn_nav_bar = document.querySelector(".header--btn--bars");
let overlay_navbar = document.querySelector(".header--overlay");
let navbar_tablet_mobile = document.querySelector(
  ".header--nav--tablet--mobile"
);
let close_navbar = document.querySelector(
  ".header--nav--tablet--mobile .fa-xmark"
);

btn_nav_bar.addEventListener("click", () => {
  overlay_navbar.classList.toggle("active");
  navbar_tablet_mobile.classList.toggle("active");
});

overlay_navbar.addEventListener("click", (e) => {
  if (e.target === overlay_navbar) {
    overlay_navbar.classList.remove("active");
    navbar_tablet_mobile.classList.remove("active");
  }
});

close_navbar.addEventListener("click", () => {
  overlay_navbar.classList.remove("active");
  navbar_tablet_mobile.classList.remove("active");
});
// ==============================================================================
// Js cho phần dark mode
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  // Cập nhật biểu tượng
  if (newTheme === "dark") {
    icon.classList.remove("fa-moon"); // Xóa biểu tượng mặt trăng
    icon.classList.add("fa-sun"); // Thêm biểu tượng mặt trời
    themeToggle.classList.add("active"); // Thêm lớp active
  } else {
    icon.classList.remove("fa-sun"); // Xóa biểu tượng mặt trời
    icon.classList.add("fa-moon"); // Thêm biểu tượng mặt trăng
    themeToggle.classList.remove("active"); // Xóa lớp active
  }
});
