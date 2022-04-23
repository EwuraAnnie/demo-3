import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
   <nav>
     <div className={styles.logo}>LOGO</div>
     <div className={styles.menu}>
       <ul>
         <li>Home</li>
         <li>Shop</li>
         <li>About</li>
         <li>Contact</li>
         <li>Service</li>
       </ul>
     </div>
     <div className="icons">
     </div>
   </nav>
  )
}

export default Navbar