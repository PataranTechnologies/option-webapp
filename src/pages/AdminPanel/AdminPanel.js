import React, { useState } from "react";
import PublicIcon from '@material-ui/icons/Public';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { users as userData } from "../../util/users.js";

import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const [users] = useState(userData);
  return (
    <div className={styles.adminPanelWrapper}>
      <h1 className={styles.heading}>Admin Panel</h1>
      <div className={styles.summary}>
          <p>Total Number of Users: <span>{users.length}</span></p>
      </div>
      <div className={styles.usersListContainer}>
        <div className={styles.header}>
          <div className={styles.userName}><PermIdentityIcon style={{verticalAlign: "middle"}}/> User Name</div>
          <div className={styles.userEmail}><EmailIcon style={{verticalAlign: "middle"}}/> E-mail</div>
          <div className={styles.userPhone}><PhoneIcon style={{verticalAlign: "middle"}}/> Phone Number</div>
          <div className={styles.userLocation}><PublicIcon style={{verticalAlign: "middle"}}/> Country</div>
        </div>
        <div className={styles.body}>
          {users.map((user) => {
            return (
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userEmail}>{user.email}</div>
                <div className={styles.userPhone}>{user.phone}</div>
                <div className={styles.userLocation}>{user.country}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
