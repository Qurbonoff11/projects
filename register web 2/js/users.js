const $HTML = document;

let getLocalStorage = JSON.parse(localStorage.getItem("user"));

let username = $HTML.querySelector("#username"),
  userImg = $HTML.querySelector("#userImg"),
  fullName = $HTML.querySelector("#fullName"),
  birthday = $HTML.querySelector("#birthDay"),
  atribut = $HTML.querySelector(".glitch-text");

username.textContent = getLocalStorage.username;
userImg.style.backgroundImage = `url("${getLocalStorage.userImg}")`;
fullName.textContent = getLocalStorage.fullName;
birthday.textContent = getLocalStorage.birthDay;
atribut.setAttribute("data-text", username.textContent)