import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2>Login</h2>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={userData.email}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={userData.password}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.forgotPassContainer}>
            <Link to="/">Forgot Password!</Link>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't Have An Account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
