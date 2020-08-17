import React from 'react';
import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.mainSpace}>
                <div className={styles.heading}>Static Text</div>
                <div className={styles.mainArea}></div>
                <div className={styles.date}>Date - {new Date().toDateString()}</div>
            </div>
            <div className={styles.sideBar}>
                <div className={styles.linksContainer}>
                    <Link to="/">Support</Link>
                    <Link to="/">Request to API key</Link>
                    <Link to="/">How to call API's from code</Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
