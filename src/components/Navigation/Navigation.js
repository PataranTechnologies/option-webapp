import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from "./Navigation.module.css";

const Navigation = ({location}) => {
    
    return (
        <div className={styles.navigationWrapper}>
            <div className={styles.navigation}>
            <Link to="/" className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <div className={styles.subtract}>-</div>
                    <div className={styles.add}>+</div>
                    <div className={styles.multiply}>&times;</div>
                    <div className={styles.divide}>&divide;</div>
                </div>
            </Link>
            <div className={styles.mainBtn}>
                <Link to="/treivia">Treivia</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/apis">APIs</Link>
            </div>
            <div className={styles.authButtonsSection}>
                { (location.pathname !== "/signup" && location.pathname !== "/login") ? (<div className={styles.authButtons}>
                    <Link to="/signup">Registration</Link>
                    <Link to="/login">Login</Link>
                </div>) : null }
                <p className={styles.section}>How to use API</p>
            </div>
            </div>
        </div>
    );
};

export default withRouter(Navigation);
