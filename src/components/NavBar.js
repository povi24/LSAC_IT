import React, {useState} from 'react';
import Logo from "../assets/memeIT.png";
import {Link} from "react-router-dom";
import styles from "../styles/NavBar.module.css"


function NavBar() {
  return (
    <><div className={styles.NavBar}>
      
      <img className={styles.NavBarLogo} src={Logo} />
      <ul className={styles.NavBarElements}>
        <li className={styles.NavBarLinks}>Logare</li>
        <li className={styles.NavBarLinks}>Creare cont</li>
      </ul>

      </div></>
  );
}

export default NavBar