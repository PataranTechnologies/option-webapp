import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styles from "./Treivia.module.css";

const Treivia = () => {

    const [treivia] = useState([{head: "What are B Bands?", body: "", number: 1}, {head: "What is Blach Sehole equation?", body: "", number: 2}]);

    return (
        <div className={styles.treiviaContainer}>
            <div className={styles.mainSpace}>
                <h1>Treivia Landing</h1>
                {treivia.map(treivia => {
                    return (
                        <div className={styles.treivia} key={treivia.number}>
                            <div className={styles.treiviaHead}>{treivia.head}</div>
                            <div className={styles.treiviaBody}>{treivia.body}</div>
                        </div>
                    );
                })}
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

export default Treivia;
