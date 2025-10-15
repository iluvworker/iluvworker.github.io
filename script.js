document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  fetch("users.json?v=" + new Date().getTime())
    .then((response) => response.json())
    .then((accounts) => {
      const admin = accounts.admin;
      let success = false;

      if (username === admin.username && password === admin.password) {
        success = true;
        window.location.href = "admin.html";
      } else {
        for (let key in accounts) {
          if (key === "admin") continue;
          const user = accounts[key];
          if (username === user.username && password === user.password) {
            success = true;
            window.location.href = "worker.html";
            break;
          }
        }
      }

      if (!success) {
        error.textContent = "ユーザー名またはパスワードが正しくありません。";
        error.style.color = "red";
      }
    })
    .catch((err) => {
      console.error("Error loading users.json:", err);
      error.textContent = "ログイン情報の読み込みに失敗しました。";
      error.style.color = "red";
    });
});
