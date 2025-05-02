const users = [
  {
    username: "massa.91",
    password: "uzbekistan",
    firstName: "Shuxratbek",
    image: "../assets/img/massa.jpg"
  },
  {
    username: "asl_wayne",
    password: "uzbekistan212",
    firstName: "Asilbek",
    image: "../assets/img/asl_wayne.jpg"
  },
  {
    username: "minor",
    password: "LightDream",
    firstName: "Rustam",
    image: "../assets/img/m1nor.jpg"
  },
  {
    username: "Uzboom",
    password: "Uzboom.11",
    firstName: "Shovkat",
    image: "../assets/img/uzboom.jpg"
  },
  {
    username: "Uzmir",
    password: "LightdreamUzmir",
    firstName: "Bahodir",
    image: "../assets/img/uzm.jpg"
  },
];

const usernameInput = document.querySelector("#userName");
const passwordInput = document.querySelector("#userPass");
const loginBtn = document.querySelector("#login");
const textContent = document.querySelector("#content")

loginBtn.addEventListener("click", () => {
  const foundUser = users.find(
    (user) =>
      user.username === usernameInput.value &&
      user.password === passwordInput.value
  );

  if (foundUser) {
    textContent.textContent = "Success"
    textContent.style = "color: green"
    console.log("Success");
    window.location.href = "../src/userPage.html"
  } else {
    textContent.textContent = "Invalid username or password"
    textContent.style = "color: red"
    console.log("Error");
  }
});
