import React from 'react'
import styles from "../styles/Home.module.css"
import Image from "../assets/tipul.png";

function Home() {
  return (

    <div className={styles.box}>
      <div className={styles.box_upload}>

            <div className={styles.box_johnny}> 
            <h1 className={styles.box_title}>Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>

                <p>Platforma ideală pentru studenții de la Politehnică, 
                    amuzați de câte materii o să pice semestrul asta.</p>

                <button className={styles.upload}>Upload a MEME</button>
            </div>
             

              <div className={styles.box_tipul}>
                <img className={styles.tipul} src={Image} />
              </div>

         </div>
    </div>

  )
}

export default Home



