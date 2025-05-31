from flask import Flask, request
from datetime import datetime

app = Flask(__name__)
DATA_FILE = "te_dhenat.txt"

@app.route("/submit", methods=["POST"])
def submit():
    username = request.form.get("username", "")
    password = request.form.get("password", "")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open(DATA_FILE, "a", encoding="utf-8") as f:
        f.write(f"[{timestamp}] Username: {username} | Password: {password}\n")

    return "Të dhënat u ruajtën me sukses."

@app.route("/")
def home():
    return """
    <form method="POST" action="/submit">
      Username: <input name="username" type="text" required><br>
      Password: <input name="password" type="password" required><br>
      <button type="submit">Dërgo</button>
    </form>
    """

if __name__ == "__main__":
    app.run(debug=True)
