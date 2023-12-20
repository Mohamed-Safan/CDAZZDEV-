import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorText, setErrorText] = useState('');


  async function submit(e) {
    e.preventDefault();

    // Validation  for email 
    if (!validateEmail(email)) {
      setErrorText('Invalid email');
      return;
    }
    //Validation  for password
    if (password.length < 6) {
      setErrorText('Password must be at least 6 characters');
      return;
    }

    try {
      // Making a POST request 
      await axios.post("http://localhost:5000/Register", {
        email,
        password,
        username,
      })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // validate email format
  function validateEmail(inputEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  }


  return (
    <div className="Register" style={styles.container}>
      {/* Title */}
      <h1 style={styles.header}>Register</h1>

      {/* Form */}
      <form action="POST">
        {/* Username input */}
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          style={styles.input}
        />

        {/* Email input */}
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorText('');
          }}
          placeholder="Email"
          style={styles.input}
        />

        {/* Password input */}
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorText('');
          }}
          placeholder="Password"
          style={styles.input}
        />

       
        <p style={{ color: "red", fontSize: "0.9em", margin: "5px 0" }}>{errorText}</p>

       
        <input type="submit" onClick={submit} style={styles.submitButton} />
      </form>

    
      <br></br>
      <span style={styles.whiteText}>Already have an account? </span>
      <Link to="/" style={styles.link}>SignIn here</Link>
    </div>
  );
}

// Components styles
const styles = {
  //  container
  container: {
    textAlign: "center",
    margin: "auto",
    width: "50%",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#333",
    color: "#fff",
    padding: "30px",
    borderRadius: "8px",
  },

  // header
  header: {
    color: "#ffcc00",
    fontSize: "2em",
  },

  //  input fields
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#444",
    color: "#fff",
  },

  //  submit button
  submitButton: {
    width: "40%",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ffcc00",
    color: "#333",
    cursor: "pointer",
  },

  // links and texts
  link: {
    textDecoration: "none",
    color: "#ffcc00",
    fontSize: "1.1em",
  },
  whiteText: {
    color: "#fff",
  },
};

export default Register;
