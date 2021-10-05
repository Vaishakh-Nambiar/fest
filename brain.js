const login = document.querySelector(".login");
const form = document.querySelector(".overlay");
const cross = document.querySelector(".cross");

login.addEventListener("click", function () {
  form.classList.toggle("hidden");
});

cross.addEventListener("click", function () {
  form.classList.toggle("hidden");
});
