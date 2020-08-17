import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Calculator.module.css";

const Calculator = () => {

    const [input, setInput] = useState("");

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.mainSpace}>
        <h1>Calculator Landing</h1>
        <div className={styles.mainArea}>
          <div className={styles.input}>
            <h2>Historic Volatile</h2>
            <div className={styles.formGroup}>
              <label htmlFor="input">toName</label>
              <input
                id="input"
                type="text"
                name="input"
                value={input}
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className={styles.output}>
            <h2>Output</h2>
            <div className={styles.result}>
                <p>Mean</p>
                <p>Sd</p>
                <p>_ _ _ _ _</p>
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
