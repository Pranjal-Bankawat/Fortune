import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from './Dropdowns.module.css';

const homeAndLiving = props => (
    <Auxiliary>
        <div className={styles.DropdownCategory}>
            <h1>{'Bed Linen & Furnishing'}</h1>
            <p>Bedsheets</p>
            <p>Bedding Sets</p>
            <p>{'Blankets, Quilts & Dohars'}</p>
            <p>{'Pillows & Pillow Covers'}</p>
            <p>Bed Covers</p>
            <h1>Flooring</h1>
            <p>Carpets</p>
            <p>Door Mats</p>
            <p>{'Floor Mats & Dhurries'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Bath</h1>
            <p>Bath Towels</p>
            <p>{'Hand & Face Towels'}</p>
            <p>Beach Towels</p>
            <p>Towels Set</p>
            <p>Bath Rugs</p>
            <p>Bath Robes</p>
            <p>Bathroom Accessories</p>
            <h1>{'Lamps & Lighting'}</h1>
            <p>Floor Lamps</p>
            <p>Table Lamps</p>
            <p>Wall Lamps</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>Home Decor</h1>
            <p>{'Plant & Planters'}</p>
            <p>{'Aromas & Candles'}</p>
            <p>Clocks</p>
            <p>Mirror</p>
            <p>Wall Decor</p>
            <p>Wall Shelves</p>
            <p>Fountains</p>
            <p>{'Showpieces & Vases'}</p>
        </div>
        <div className={styles.DropdownCategory}>
            <h1>{'Kitchen & Table'}</h1>
            <p>{'Tableware & Serveware'}</p>
            <p>{'Bar & Drinkware'}</p>
            <p>{'Cookware & Kitchen Tools'}</p>
            <p>Kitchen Storage</p>
            <p>{'Table Covers & Furnishings'}</p>
            <h1>Storage</h1>
            <p>Organizers</p>
            <p>Hooks and Holders</p>
        </div>
    </Auxiliary>
);

export default homeAndLiving;