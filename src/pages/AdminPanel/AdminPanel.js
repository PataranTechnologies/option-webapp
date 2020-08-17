import React, { useState } from "react";

import { users as userData } from "../../util/users.js";

import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const [users] = useState(userData);
  return (
    <div className={styles.adminPanelWrapper}>
      {
        users.map((user) => {
          return (
            <div className={styles.user} key={user.id}>
              <img src={user.image} alt={user.name}/>
              <div className={styles.userImageBackdrop}>
              </div>
              <div className={styles.userInfo}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.country}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default AdminPanel;
