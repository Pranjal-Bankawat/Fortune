import React from 'react';
import styles from './CartItem.module.css';
import Remove from '../../../assets/svg/delete.svg';
import ProductContext from '../../../context/product-context';

const cartItem = props => {
    return(
        <div className={styles.CartItem}>
            <span className={styles.ProductGroupDetails}>
                <img className={styles.ProductImg} src={props.productImage} alt="Product" />
                <p className={styles.ProductTitle}>{props.productTitle}</p>
            </span>
            <p className={styles.ProductPrice}>${props.productPrice}</p>
            <span className={styles.ProductQuantity}>
                <input onChange={(event) => props.changeQuantity(event)} min="1" defaultValue={props.productQuanity} type="number" />
            </span>
            <p className={styles.ProductTotalPrice}>${props.productPrice*props.productQuanity}</p>
            <span className={styles.ProductRemove}>
                <ProductContext.Consumer>
                    {context => <img onClick={() => context.deleteFromCart(props.productId, props.productTags)} src={Remove} alt="icon" />}
                </ProductContext.Consumer>
                
            </span>
        </div>
    )
};

export default cartItem;