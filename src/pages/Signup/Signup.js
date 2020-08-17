import React, { useState } from "react";

import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    phone: "",
  });

  const inputChangeHandler = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2>Create Your Account</h2>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={userData.name}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={userData.password}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={userData.phone}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country"
              value={userData.country}
              autoComplete="off"
              onChange={inputChangeHandler}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already Have An Account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
