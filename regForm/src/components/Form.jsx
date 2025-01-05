import { useState } from "react";

export function RegForm() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [eMail, seteMail] = useState("");
  const [pass, setpass] = useState("");
  const [pNum, setpNum] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      fName,
      lName,
      eMail,
      pass,
      pNum,
    };
    console.log(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setfName(value);
        break;

      case "lastName":
        setlName(value);
        break;

      case "eMail":
        seteMail(value);
        break;

      case "pass":
        setpass(value);
        break;

      case "phoneNumber":
        setpNum(value);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <h3></h3>
      <div className="form-maker">
        <div>
          <h4>First Name</h4>
          <input
            name="firstName"
            type="text"
            className="inp"
            value={fName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Last Name</h4>
          <input
            name="lastName"
            type="text"
            className="inp"
            value={lName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>E-mail</h4>
          <input
            name="eMail"
            type="text"
            className="inp"
            value={eMail}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Password</h4>
          <input
            name="pass"
            type="text"
            className="inp"
            value={pass}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Phone Number</h4>
          <input
            name="phoneNumber"
            type="text"
            className="inp"
            value={pNum}
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
