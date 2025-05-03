const users = [
  {
    username: "minor",
    password: "LightDream",
  },
  {
    username: "asl_wayne",
    password: "uzbekistan212"
  },
  {
    username: "Uzboom",
    password: "Uzboom.11"
  },
  {
    username: "massa.38",
    password: "uzbekistan"
  },
];

const usernameInput = document.querySelector("#userName");
const passwordInput = document.querySelector("#userPass");
const loginBtn = document.querySelector("#login");
const textContent = document.querySelector("#content");

const user1 = document.querySelector(".user-1")
const user2 = document.querySelector(".user-2")
const user3 = document.querySelector(".user-3")
const user4 = document.querySelector(".user-4")

// console.log(userImg.src);

loginBtn.addEventListener("click", () => {
  const foundUser = users.find(
    (user) =>
      user.username === usernameInput.value &&
      user.password === passwordInput.value
  );


  if (foundUser) {
    textContent.textContent = "Success";
    textContent.style = "color: green";
    console.log("Success");

    window.location.href = "../src/userPage.html"

    if (foundUser.username === "minor") {
      user1.style.display = "flex"
    } else if (foundUser.username === "asl_wayne"){
      user2.style.display = "flex"
    } else if (foundUser.username === "Uzboom"){
      user2.style.display = "flex"
    } else if (foundUser.username === "massa.38") {
      user2.style.display = "flex"
    }
  } else {
    textContent.textContent = "Invalid username or password";
    textContent.style = "color: red";
    console.log("Error");
  }
});