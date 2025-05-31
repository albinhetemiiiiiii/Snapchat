document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  fetch("http://127.0.0.1:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Gabim gjatë dërgimit: " + err));
});
