const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const password = document.getElementById('userPass').value;
  const confirmPassword = document.getElementById('userPassConfirm').value;

  if (password !== confirmPassword) {
    alert("Parollar bir xil emas!");
    return;
  }

  const newUser = { username, email, password };

  // Avvalgi foydalanuvchilarni localStorage'dan olish
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Email allaqachon mavjud emasligini tekshirish
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("Bu email allaqachon ro'yxatdan o'tgan.");
    return;
  }

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
  form.reset();
});
