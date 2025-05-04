/* DOCUMENT */
const $HTML = document;

/* MINI DATA BASE */
const users = [
  {
    username: `minor`,
    password: `M1nor..LD`,
    birthDay: "1995-yil 26-may",
    fullName: "Rustam Ibrohimov",
    userImg: `../assets/img/m1nor.jpg`
  },
  {
    username: `asl_wayne`,
    password: `astrorap`,
    birthDay: "1999-yil 26-aprel",
    fullName: "Asilbek Bayjonov",
    userImg: `../assets/img/asl_wayne.jpg`
  },
  {
    username: `massa.38`,
    password: `massa.038`,
    birthDay: "1993-yil 2-iyul",
    fullName: "Shuxrat Allayarov",
    userImg: `../assets/img/massa.jpg`
  },
  {
    username: `uzboom`,
    password: `uzboom071`,
    birthDay: "1989-yil 8-mart",
    fullName: "Azimov SHovkat",
    userImg: `../assets/img/uzboom.jpg`
  },
];

/* SET ELEMENTS */
let usernameInput = $HTML.querySelector("#userName"),
  passInput = $HTML.querySelector("#userPass"),
  loginButton = $HTML.querySelector("#login"),
  userWrong = $HTML.querySelector("#userWrong"),
  passWrong = $HTML.querySelector("#passWrong"),
  content = $HTML.querySelector("#content")

/* REMOVED WRONG TEXT FUNCTION */
function removeTextWrong(param) {
  setTimeout(() => {
    param.textContent = "";
  }, 2000);
}

/* TEXT WRONGS */
function wrongTexts(para) {
  para.textContent = "The field must not be empty."
}

/* FOUND USERS */
function login(username, password) {
  let foundUser = users.find(item => {
    return item.username === username && item.password === password
  })
  localStorage.setItem("user", JSON.stringify(foundUser))
  return foundUser
}

loginButton.addEventListener("click", () => {
  let usernameValue = usernameInput.value;
  let passwordValue = passInput.value;

  if (!usernameValue) {
    wrongTexts(userWrong)
    removeTextWrong(userWrong);
  } else if (passwordValue === "") {
    wrongTexts(passWrong)
    removeTextWrong(passWrong);
  } else if (passwordValue.length < 6){
    passWrong.textContent = "password length must be 6 or longer"
    removeTextWrong(passWrong);
  } else if (!login(usernameValue, passwordValue)){
    content.textContent = "No such user exists."
    removeTextWrong(content)
  } else {
    window.location.href = '../src/userPage.html'
  }
});