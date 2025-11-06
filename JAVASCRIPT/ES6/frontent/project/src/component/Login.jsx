import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please enter both email and password");
    } else if (email === "admin@example.com" && password === "12345") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  form: {
    display: "inline-block",
    textAlign: "left",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "200px",
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginPage;