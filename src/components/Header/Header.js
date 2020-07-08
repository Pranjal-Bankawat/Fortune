import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './swiper.css';
import styles from './Header.module.css';
import SliderImg1 from '../../assets/images/1251.jpg';
import SliderImg2 from '../../assets/images/121.jpg';
import SliderImg3 from '../../assets/images/1248.jpg';
import MenCollection from '../../assets/images/Men.png';
import WomenCollection from '../../assets/images/Women.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    componentDidMount(){
        let interleaveOffset = 0.5;
        this.mySwiper = new Swiper('.swiper-container' , {
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            allowTouchMove: true,
            grabCursor: true,
            loopAdditionalSlides: 10,
            watchSlidesProgress: true,
            autoplay: {
                // disableOnInteraction: false,
                delay: 3000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                progress: function(){
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                    
                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translateX(" + innerTranslate + "px)";
                    }
                },
                touchStart: function() {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function(speed){
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                    }
                }
            }
        });
    }
    render(){
        return(
            <div className={styles.Header}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{backgroundImage: `url(${SliderImg1})`}}>
                                <img alt={'random-img'} src={SliderImg1} className="entity-img" />
                            </figure>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{backgroundImage: `url(${SliderImg2})`}}>
                                <img alt={'random-img'} src={SliderImg2} className="entity-img" />
                            </figure>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{backgroundImage: `url(${SliderImg3})`}}>
                                <img alt={'random-img'} src={SliderImg3} className="entity-img" />
                            </figure>
                        </div>
                    </div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>

                <div className={styles.Categories}>
                    <div className={styles.Category}>
                        <Link to="/men-collection">
                            <img src={MenCollection} alt="MenCollection"/>
                            <div className={styles.Title}>
                                <p>Men<br/>Collection</p>
                            </div>
                        </Link>
                    </div>
                    
                    <div className={styles.Category}>
                        <Link to="/women-collection">
                            <img src={WomenCollection} alt="WomenCollection"/>
                            <div className={styles.Title}>
                                <p>Women<br/>Collection</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;