document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  fetch("https://flask-backend-ld3u.onrender.com/submit", {
    method: "POST",
    headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Gabim gjatë dërgimit: " + err));
});
