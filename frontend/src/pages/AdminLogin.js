import React, { Fragment, useState } from "react";


function AdminLogin({history}) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleInputChange = (key, val) => {
    setLoginData({ ...loginData, [key]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (loginData.email == "" || loginData.password == "") {
      setMessage("Fill in required fields");
      return;
    }
    fetch("/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          if (response.token) {
            localStorage.setItem('access_token', response.token)
            setMessage("Success");
            history.push('/contact-entries')
          } else {
            setMessage(response.message);
          }
        }
      });
  };

  return (
    <>
      <section>
        <main>
          <h1>Admin Login Page</h1>
        </main>
      </section>
      <div id="login-name">
        <form>
          <label htmlFor="email">Email</label>
          <input
            value={loginData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="text"
            name="email"
            id="name"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            value={loginData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />
        </form>
        <p>{message}</p>
        <button onClick={onSubmit}>Login</button>
      </div>
    </>
  );
}

export default AdminLogin;
