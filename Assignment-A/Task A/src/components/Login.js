import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
         // Making a POST request 
      await axios.post("http://localhost:5000/", {
        email,
        password,
      })
       // Checking the response
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "notexist") {
            setErrorText("Wrong email or password");
          }
        })
        .catch((e) => {
          setErrorText("Wrong email or password");
          console.log(e);
        });
    } catch (e) {
      setErrorText("Wrong email or password");
      console.log(e);
    }
  }

  //Rendering the login form 
  return (
    <div className="login" style={styles.container}>
      <h1 style={styles.header}>Login</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorText(''); 
          }}
          placeholder="Email"
          style={styles.input}
        />
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

      <Link to="/forgot-password" style={styles.forgotPassword}>Forgot password?</Link>
      <br></br>
      <br></br>
      <span style={styles.whiteText}>Don't have an account? </span>
      <Link to="/Register" style={styles.link}>Register here</Link>
    </div>
  );
}
//Styling compoments
const styles = {
    //container
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
  //header
  header: {
    color: "#ffcc00",
    fontSize: "2em",
  },
  //input fields
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#444",
    color: "#fff",
  },
  //button
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
  link: {
    textDecoration: "none",
    color: "#ffcc00",
    fontSize: "1.1em",
  },
  whiteText: {
    color: "#fff",
  },
  forgotPassword: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "0.9em",
    marginTop: "10px",
    display: "block",
  },
};

export default Login;
