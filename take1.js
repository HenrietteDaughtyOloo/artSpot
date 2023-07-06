document.getElementById("menu-toggle").addEventListener("change", function() {
  var menu = document.querySelector(".hamburger-menu .menu");
  if (this.checked) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
