import React from 'react'
import styles from "../styles/Footer.module.css";

import insta from "../assets/insta.png"
import twitch from "../assets/twitch.png"
import facebook from "../assets/facebook.png"

function Footer() {
    return (
            <div className={styles.footer}>
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/lsacbucuresti/"><img src = {insta} /></a>
                    <a href="https://www.twitch.tv/lsac_bucuresti"><img src = {twitch} /></a>
                    <a href="https://www.facebook.com/LsacBucuresti/"><img src = {facebook} /></a>
                </div>
                <div className={styles.text}>
                    <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
                </div>
            </div>
          )
        }

export default Footer