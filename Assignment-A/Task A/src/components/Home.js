import React from "react";
import { useLocation, Link } from "react-router-dom";

function Home() {
  const location = useLocation();

  return (
    // Nav bar contents
    <div className="homepage" style={styles.container}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="" style={styles.navLink}>
              Services
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="" style={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div style={styles.welcome}>
        <h1>
            
          Hello{" "}
          <span style={styles.username}>{location.state.id}</span>{" "} 
          <span style={styles.welcomeText}>and welcome</span>
        </h1>
        <h1 style={styles.header}>to the Home screen</h1>
      </div>
    </div>
  );
}

// Styling components
const styles = {
  container: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#333",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    padding: "20px",
  },
  //nav bar
  navbar: {
    marginBottom: "20px",
  },
  navList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    background: "#555",
    padding: "10px",
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.2em",
    transition: "0.3s ease",
  },
  navLinkHover: {
    textDecoration: "none",
    color: "#ffcc00",
  },
  navItemHover: {
    marginRight: "20px",
    transition: "0.3s ease",
  },
  header: {
    fontSize: "2.5em",
    margin: "10px 0",
  },
  welcome: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  username: {
    color: "#ffcc00",
  },
  welcomeText: {
    color: "#ddd",
  },
};

export default Home;
