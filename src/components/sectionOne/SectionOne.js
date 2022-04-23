import React from 'react'
import styles from "./SectionOne.module.css"

const SectionOne = () => {
  return (
    <div className={styles.SectionOne}>
        <div className={styles.new_arrivals}>
            <h2>New Arrivals</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={styles.new_arrival_row}>
                <div className={styles.new_arrival_col1}>
                  <div className={styles.new_arrImg1}></div>
                </div>
                <div className={styles.new_arrival_col1}>
                  <div className={styles.new_arrImg2}></div>
                </div>
                <div className={styles.new_arrival_col1}>
                  <div className={styles.new_arrImg3}></div>
                </div>
                <div className={styles.new_arrival_col1}>
                  <div className={styles.new_arrImg4}></div>
                </div>
            </div>
        </div>
        <br />
        <div className={styles.new_arrival_two}>
          <div className={styles.nw_card}>
            <div className={styles.nwImg}></div>
            <div className={styles.nwTxt}>
              <h2>Mid Season</h2>
              <h2>Up To 50%</h2>
              <h2>Off</h2>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className={styles.nw_card}>
            <div className={styles.nwTxt1}>
              <h2>Handbag Up</h2>
              <h2>To 30% Off</h2>
              <button>SHOP NOW</button>
            </div>
            <div className={styles.nwImg1}></div>
          </div>
        </div>
        <div className={styles.popular}>
          <h2>Popular Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className={styles.popular_container}>
            <div className={styles.popular_card}>
              <div className={styles.popular_img1}></div>
            </div>
            <div className={styles.popular_card}>
              <div className={styles.popular_img2}></div>
            </div>
            <div className={styles.popular_card}>
              <div className={styles.popular_img3}></div>
            </div>
            <div className={styles.popular_card}>
              <div className={styles.popular_img4}></div>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.blogger}>
          <h2>Our Latest Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className={styles.blog}>
          <div className={styles.blog_card}>
            <div className={styles.blog_img1}></div>
          </div>
          <div className={styles.blog_card}>
            <div className={styles.blog_img2}></div>
          </div>
          <div className={styles.blog_card}>
            <div className={styles.blog_img3}></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SectionOne;