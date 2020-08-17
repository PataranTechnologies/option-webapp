import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Support.module.css";

const Support = () => {

    const [supportData, setSupportData] = useState({
        name: "",
        email: "",
        category: "",
    });

    const inputChangeHandler = (event) => {
        setSupportData({...supportData, [event.target.name]: event.target.value});
    }

  return (
    <div className={styles.supportContainer}>
      <div className={styles.mainSpace}>
        <h1>Calculator Landing</h1>
        <div className={styles.mainArea}></div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.linksContainer}>
          <Link to="/support">Support</Link>
          <Link to="/">Request to API key</Link>
          <Link to="/">How to call API's from code</Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
