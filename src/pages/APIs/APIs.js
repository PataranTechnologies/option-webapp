import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import styles from "./APIs.module.css";

const Calculator = () => {
  const [searchInput, setSearchInput] = useState("");

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={styles.apiContainer}>
      <div className={styles.mainSpace}>
        <h1>APIs</h1>
        <div className={styles.mainArea}>
          <form className={styles.searchBox}>
            <input
              type="text"
              name="searchQuery"
              value={searchInput}
              placeholder="search"
              onChange={inputChangeHandler}
            />
            <button type="submit">
              <SearchIcon style={{ verticalAlign: "middle", color: "white" }} />
            </button>
          </form>
          <div className={styles.apiSection}>
            <div className={styles.section}>
              <h2>1) Historic Volatile</h2>
              <h3>//----------/API key  <ArrowDropDownIcon fontSize="large" style={{margin: "0 1rem", verticalAlign: "middle", cursor: "pointer"}}/></h3>
              <p>Input JSON Format: </p>
              <p>tName: </p>
              <p>Date: </p>
              <p>Output JSON Format: </p>
              <p>date / value --- </p>
            </div>
            <div className={styles.section}>
              <h2>2) Volatile</h2>
              <h3>//----------/API key  <ArrowDropDownIcon fontSize="large" style={{margin: "0 1rem", verticalAlign: "middle", cursor: "pointer"}}/></h3>

            </div>
            <div className={styles.section}>
              <h2>3) Historic Volatile</h2>
              <h3>//----------/API key  <ArrowDropDownIcon fontSize="large" style={{margin: "0 1rem", verticalAlign: "middle", cursor: "pointer"}}/></h3>
            </div>
          </div>
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

export default Calculator;
