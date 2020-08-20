import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import styles from "./Support.module.css";

const Support = () => {
  const [supportData, setSupportData] = useState({
    name: "",
    email: "",
    category: "",
  });

  const inputChangeHandler = (event) => {
    setSupportData({ ...supportData, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.supportContainer}>
      <div className={styles.mainSpace}>
        <h1>Support</h1>
        <div className={styles.mainArea}>
          <form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={supportData.name}
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
                value={supportData.email}
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                name="category"
                value={supportData.category}
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <input type="text" className={styles.specialInput}/>
            <div className={styles.buttonsSection}>
              <button className={styles.upload}>Upload</button>
              <button className={styles.cloud}><CloudUploadIcon style={{verticalAlign: "middle", color: "#ffffff"}}/></button>
              <button className={styles.submit}>Submit</button>
            </div>
          </form>
        </div>
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
