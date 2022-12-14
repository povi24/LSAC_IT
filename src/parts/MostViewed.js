import React from 'react'
import photo1 from "../assets/lacrimile.png";
import photo2 from "../assets/uno.png";
import photo3 from "../assets/15taskuri.png";
import styles from "../styles/MostViewed.module.css";


function MostViewed() {
  return (
    <div className={styles.box_2}>
      <h1>Most Viewed</h1>

      <div className={styles.meme_style}>
          <img src={photo1} />
          <img src={photo2} />
          <img src={photo3} />
      </div>


    </div>
  )
}

export default MostViewed
