const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Xush kelibsiz, ${user.username}!`);
    // Keyingi sahifaga yo‘naltirish: home.html kabi
    // window.location.href = 'home.html';
  } else {
    alert("Email yoki parol noto‘g‘ri!");
  }

  loginForm.reset();
});
