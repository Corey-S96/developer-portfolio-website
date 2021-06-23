import React, { Fragment, useState } from "react";


function AddUser() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleInputChange = (key, val) => {
    setUserData({ ...userData, [key]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (userData.email == "" || userData.password == "" || userData.name == "") {
      setMessage("Fill in required fields");
      return;
    }
    fetch("/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response) {
          if (response.status ===201) {
      
            setMessage("Success, User created");
          } else {
            setMessage('Error, Please ensure you are submitting the right parameters' );
          }
        }
      });
  };

  return (
    <>
      <section>
          <h1>Add Users</h1>
      </section>
      <div id="login-name">
        <form>
        <label htmlFor="name">Name:</label>
        <input
            value={userData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            value={userData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="text"
            name="email"
            id="name"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            value={userData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />
        </form>
        <p>{message}</p>
        <button onClick={onSubmit}>Add User</button>
      </div>
    </>
  );
}

export default AddUser;
