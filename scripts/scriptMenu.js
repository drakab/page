function menuFunction() {
    var menu = document.getElementById("header-menu-mobile");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}