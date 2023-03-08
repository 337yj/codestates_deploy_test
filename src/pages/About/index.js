import React from 'react';
import Footer from '../../components/Layout/Footer';
import styles from './About.module.css';

const About = (props) => {
  return (
    <section className={styles.aboutTwittler}>
      <div className={styles.aboutTwittler__container}>
        <div className={styles.aboutTwittler__wrapper}>
          <div className={styles.aboutTwittler__detail}>
            <p className={styles.aboutTwittler__detailName}>React Twittler Info</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutTwittler__content}>
        <i className={styles["fas fa-users"]}></i>
        <p>나만의 Twittler 소개페이지를 꾸며보세요🐦</p>
      </div>
      <Footer />
    </section>
  );
};

export default About;