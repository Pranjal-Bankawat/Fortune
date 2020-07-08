import React from 'react';
import styles from "./CartDropdownItem.module.css";
import ProductContext from "../../../../context/product-context";

const cartDropdownItem = props => (
    <div className={styles.CartDropdownItem}>
        <img className={styles.ItemImage} src={props.itemImage}  alt="product"/>
        <span className={styles.ItemDetails}>
            <p className={styles.ItemTitle}>{props.itemQuantity} * ${props.itemPrice}</p>
            <p className={styles.ItemDesc}>{props.itemTitle}</p>
        </span>
        <ProductContext.Consumer>
            {context => <img onClick={() => context.deleteFromCart(props.itemId,props.itemTags)} className={styles.ItemRemove} src={require('../../../../assets/svg/close-sharp.svg')} alt="cartclose"/>}
        </ProductContext.Consumer>
        
    </div>
);

export default cartDropdownItem;