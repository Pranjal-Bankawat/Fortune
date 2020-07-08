import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from './Dropdowns.module.css';

const essentials = props => (
    <Auxiliary>
        <div className={styles.DropdownCategory} style={{width: '100%', textAlign: 'left'}}>
            <h1>Masks</h1>
            <h1>Skincare</h1>
            <h1>Haircare</h1>
            <h1>Bath & Body</h1>
            <h1>Men's Grooming</h1>
            <h1>Baby Care</h1>
            <h1>At Home Salon</h1>
            <h1>Hair Styling</h1>
            <h1>Appliances</h1>
        </div>
    </Auxiliary>
);

export default essentials;