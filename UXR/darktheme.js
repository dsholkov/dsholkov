let body = document.getElementById("body");
body.classList.add(localStorage.getItem("theme"));

let darkTheme = function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark") == true) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
};
document
  .getElementById("ButtonTheme")
  .addEventListener("click", darkTheme);

let Today = new Date();
if (document.getElementById("copyright")) {
  document.getElementById("copyright").innerHTML = `© Shrine ${Today.getFullYear()}`
}
