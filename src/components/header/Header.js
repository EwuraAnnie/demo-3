import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
   <header>
     <div className={styles.txt_btn}>
       <div className={styles.txt}>
              <p className={styles.disc}>DISCOVER NEW LATEST COLLECTION</p>
              <p className={styles.sinAnn}>Sinnie Annie Wardrope</p>
            <div className={styles.shop_btn}>
              <button className={styles.shop}>SHOP NOW</button>
            </div>
        </div>
     </div>
     <div className={styles.header_img}></div>
   </header>
  );
}

export default Header;