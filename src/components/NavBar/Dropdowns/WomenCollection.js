import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from './Dropdowns.module.css';

const womenCollection = props => (
    <Auxiliary>
        <div className={styles.DropdownCategory}>
            <h1>{'Indian & Fusion Wear'}</h1>
            <p>{'Kurtas & Suits'}</p>
            <p>{'Kurtis,Tunics & Tops'}</p>
            <p>Ethnic Dresses</p>
            <p>{'Leggings, Salvars & Churidars'}</p>
            <p>{'Skirts & Palazzos'}</p>
            <p>{'Sarees & Blouses'}</p>
            <p>Dress Materials</p>
            <p>Lehanga Cholis</p>
            <p>{'Dupatta & Shawls'}</p>
            <p>{'Jacktets & Waistcoats'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Western Wear</h1>
            <p>{'Dresses & Jumpsuits'}</p>
            <p>{'Tops , T-Shirts & Shirts'}</p>
            <p>{'Jeans & Jeggings'}</p>
            <p>{'Trousers & Capris'}</p>
            <p>{'Shorts & Skirts'}</p>
            <p>Shrugs</p>
            <p>{'Sweaters & Sweatshirts'}</p>
            <p>{'Jackets & Coats'}</p>
            <p>{'Blazer & Waistcoats'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Footwear</h1>
            <p>Flats</p>
            <p>Casual Shoes</p>
            <p>Heels</p>
            <p>Boots</p>
            <p>S{'ports Shoes & Floaters'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>{'Beauty & Personal Care'}</h1>
            <p>Makeup</p>
            <p>Skincare</p>
            <p>Premium Beauty</p>
            <p>Lipsticks</p>
            <p>Fragrances</p>
        </div>
    </Auxiliary>
);

export default womenCollection;