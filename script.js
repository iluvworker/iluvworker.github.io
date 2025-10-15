document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const error = document.getElementById("error-message");

  // 一時的にローカルで認証する（後でFirebase認証に置き換え可）
  const validAccounts = {
    admin: { username: "admin", password: "admin123" },
    worker: { username: "worker", password: "worker123" }
  };

  if (
    username === validAccounts[role].username &&
    password === validAccounts[role].password
  ) {
    localStorage.setItem("role", role);
    if (role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "worker.html";
    }
  } else {
    error.textContent = "ユーザー名またはパスワードが正しくありません。";
    error.style.color = "red";
  }
});