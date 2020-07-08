import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from './Dropdowns.module.css';

const kidsCollection = props => (
    <Auxiliary>
        <div className={styles.DropdownCategory}>
            <h1>Boy's Clothing</h1>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Shorts</p>
            <p>Jeans</p>
            <p>Trousers</p>
            <p>Clothing Sets</p>
            <p>Ethnic Wear</p>
            <p>{'Trackpants & Pyjamas'}</p>
            <p>{'Jackets, Sweaters & Sweatshirts'}</p>
            <p>{'Innerwear & Sleepwear'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Girl's Clothing</h1>
            <p>Dresses</p>
            <p>Tops</p>
            <p>T-Shirts</p>
            <p>Clothing Sets</p>
            <p>Ethnic Wear</p>
            <p>{'Dungrees & Jumpsuits'}</p>
            <p>{'Skirts & Shots'}</p>
            <p>{'Tights & Leggings'}</p>
            <p>{'Jeans, Trousers & Capris'}</p>
            <p>{'Jacket, Sweater & Sweatshirts'}</p>
            <p>{'Innerwear & Sleepwear'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Girls's Footwear</h1>
            <p>Flats</p>
            <p>Casual Shoes</p>
            <p>Heels</p>
            <p>Flip Flops</p>
            <p>School Shoes</p>
            <h1>Boy's Footwear</h1>
            <p>Casual Shoes</p>
            <p>Sports Shoes</p>
            <p>Flip Flops</p>
            <p>Sandals</p>
            <p>School Shoes</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Infants</h1>
            <p>{'Rompers & Onesies'}</p>
            <p>Clothing Sets</p>
            <p>{'T-Shirts & Tops'}</p>
            <p>Dresses</p>
            <p>Bottom Wear</p>
            <p>Winter Wear</p>
            <p>{'Innerwear & Sleepwear'}</p>
            <h1>Kids Accessories</h1>
            <p>{'Bags & Backpacks'}</p>
            <p>Watches</p>
            <p>Eyewear</p>
            <p>{'Jwelery & hair accessories'}</p>
        </div>
    </Auxiliary>
);

export default kidsCollection;