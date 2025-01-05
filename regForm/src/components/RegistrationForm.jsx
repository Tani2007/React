import { useState } from "react";

export function RegistrationForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((oldInput) => ({ ...oldInput, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <h3>
        Your Firstname :{user.firstName} - Your Lastname :{user.lastName} - Your
        Email: {user.email} - Your Phone Number: {user.phoneNumber}
      </h3>

      <div className="form-maker">
        <div>
          <h4>First Name</h4>
          <input
            name="firstName"
            type="text"
            className="inp"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Last Name</h4>
          <input
            name="lastName"
            type="text"
            className="inp"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>E-mail</h4>
          <input
            name="email"
            type="text"
            className="inp"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Password</h4>
          <input
            name="password"
            type="password"
            className="inp"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Phone Number</h4>
          <input
            name="phoneNumber"
            type="text"
            className="inp"
            value={user.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="sgnup">
          <button id="btn">Sign Up</button>
        </div>
      </div>
    </form>
  );
}
