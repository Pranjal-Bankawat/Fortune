import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from './Dropdowns.module.css';

const menCollection = props => (
    <Auxiliary>
        <div className={styles.DropdownCategory}>
            <h1>TopWear</h1>
            <p>T-Shirts</p>
            <p>Casual-Shirts</p>
            <p>Formal-Shirts</p>
            <p>Sweatshirts</p>
            <p>Jackets</p>
            <p>Blazers</p>
            <p>Suits</p>
            <p>Rain Jackets</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>BottomWear</h1>
            <p>Jeans</p>
            <p>Casual Trousers</p>
            <p>Formal Trousers</p>
            <p>Shorts</p>
            <p>{'Track Pants & Joggers'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>{'Indian & Festive Wear'}</h1>
            <p>{'Kurtas & Kurta Sets'}</p>
            <p>Sherwanis</p>
            <p>Nehru Jackets</p>
            <p>Dhotis</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Footwear</h1>
            <p>Casual Shoes</p>
            <p>Sports Shoes</p>
            <p>Formal Shoes</p>
            <p>Sneakers</p>
            <p>Sandals</p>
            <p>Floaters</p>
            <p>Socks</p>
        </div>
    </Auxiliary>
);

export default menCollection;