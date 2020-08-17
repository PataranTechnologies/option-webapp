import React from 'react';

import styles from "./Navigation.module.css";
import { Link } from 'react-router-dom';

const Navigation = ({authInvoked, isAuthInvoke}) => {
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
                { !isAuthInvoke ? (<div className={styles.authButtons}>
                    <Link to="/signup" onClick={authInvoked}>Registration</Link>
                    <Link to="/login"  onClick={authInvoked}>Login</Link>
                </div>) : null }
                <p className={styles.section}>How to use API</p>
            </div>
            </div>
        </div>
    );
};

export default Navigation;
