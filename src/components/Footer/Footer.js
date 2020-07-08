import React from 'react';
import DeliveryIcon from '../../assets/svg/truck.svg';
import HelpIcon from '../../assets/svg/phone.svg';
import ReturnIcon from '../../assets/svg/return-on-investment.svg';
import InstaLogo from '../../assets/svg/instagram.svg';
import TwitterLogo from '../../assets/svg/twitter.svg';
import YoutubeLogo from '../../assets/svg/youtube.svg';
import FacebookLogo from '../../assets/svg/facebook.svg';
import PlaystoreLogo from '../../assets/svg/playstore.svg';
import AppstoreLogo from '../../assets/svg/app-store.svg';
import styles from './Footer.module.css';

const footer = props => {
    return(
        <div className={styles.Footer}>
            <div className={styles.Features}>
                <span className={styles.Feature}>
                    <img src={DeliveryIcon} alt="feature"/>
                    <p>GET FREE DELIVERY FOR EVERY ORDER ABOVE $99</p>
                </span>
                <span className={styles.Feature}>
                    <img  src={HelpIcon} alt="feature"/>
                    <p> NEED HELP ? +1 800 123 1234</p>
                </span>
                <span className={styles.Feature}>
                    <img  src={ReturnIcon} alt="feature"/>
                    <p>RETURN WITHING 30 DAYS OF RECEIVING YOUR ORDER</p>
                </span>
            </div>
            <div className={styles.MainFooter}>
                <div className={styles.OnlineShopping}>
                    <p>ONLINE SHOPPING</p>
                    <ul>
                        <li>MEN</li>
                        <li>WOMEN</li>
                        <li>KIDS</li>
                        <li>HOME & LIVING</li>
                        <li>ESSENTIALS</li>
                    </ul>
                </div>
                <div className={styles.UsefulLinks}>
                    <p>USEFUL LINKS</p>
                    <ul>
                        <li>CONTACT US</li>
                        <li>FAQ</li>
                        <li>T & C</li>
                        <li>TERMS OF USE</li>
                        <li>SHIPPING</li>
                        <li>CANCELLATION</li>
                        <li>RETURNS</li>
                    </ul>
                </div>
                <div className={styles.GroupedLinks}>
                    <div className={styles.GroupedLink}>
                        <span className={styles.KeepInTouch}>
                            <p>KEEP IN TOUCH</p>
                            <ul>
                                <li><img src={InstaLogo} alt="icon"/></li>
                                <li><img src={FacebookLogo} alt="icon"/></li>
                                <li><img src={TwitterLogo} alt="icon"/></li>
                                <li><img src={YoutubeLogo} alt="icon"/></li>
                            </ul>
                        </span>
                        <span className={styles.AppLinks}>
                            <p>EXPERIENCE OUR APP ON MOBILE</p>
                            <img src={PlaystoreLogo} alt="icon"/>
                            <img src={AppstoreLogo} alt="icon"/>
                        </span>
                    </div>
                    <span className={styles.Subscription}>
                        <p>SIGN UP FOR EMAILS : </p>
                        <input type="text" placeholder="Your mail address" />
                        <button>SUBSCRIBE</button>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default footer;