import React from 'react';
import styles from './Offers.module.css';
import OfferImage1 from '../../assets/images/offer1.jpg';
import OfferImage2 from '../../assets/images/offer2.jpg';
import OfferImage3 from '../../assets/images/offer3.jpg';

const offers = props => {
    return (
        <div className={styles.Offers}>
            <div className={styles.Offer}>
                <div className={styles.OfferImage}>
                    <img src={OfferImage1} alt="Offer"/>
                </div>
                <div className={styles.OfferContent}>
                    <p className={styles.title1}>WOMEN</p>
                    <p className={styles.title2}>NEW ARRIVALS</p>
                    <p className={styles.OfferCTABtn}>VIEW COLLECTION</p>
                </div>
            </div>
            <div className={styles.Offer}>
                <div className={styles.OfferContent}>
                    <p className={styles.title1}>MEGA SALE</p>
                    <p className={styles.title2}>WINTER COLLECTION</p>
                    <p className={styles.OfferCTABtn}>GO TO BUY</p>
                </div>
                <div className={styles.OfferImage}>
                    <img src={OfferImage2} alt="Offer"/>
                </div>
            </div>
            <div className={styles.Offer}>
                <div className={styles.OfferImage}>
                    <img src={OfferImage3} alt="Offer"/>
                </div>
                <div className={styles.OfferContent}>
                    <p className={styles.title1}>TRENDING</p>
                    <p className={styles.title2}>MEN'S COLLECTION</p>
                    <p className={styles.OfferCTABtn}>VIEW COLLECTION</p>
                </div>
            </div>
        </div>
    )
}

export default offers;