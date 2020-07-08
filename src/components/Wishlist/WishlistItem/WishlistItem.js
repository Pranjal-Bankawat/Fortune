import React from 'react';
import styles from './WishlistItem.module.css';
import Remove from '../../../assets/svg/delete.svg';
import ProductContext from '../../../context/product-context';

const wishlistItem = props => {
    return(
        <div className={styles.WishlistItem}>
            <span className={styles.ProductGroupDetails}>
                <img className={styles.ProductImg} src={props.itemImage} alt="Product" />
                <p className={styles.ProductTitle}>{props.itemTitle}</p>
            </span>
            <p className={styles.ProductPrice}>{props.itemPrice}</p>
            <span className={styles.ProductQuantity}>
                <input defaultValue={props.itemQuantity} min="1" type="number" />
            </span>
            <span className={styles.AddToCartBtn}>
                {
                    props.inCart
                    ? <button>IN CART</button>
                    : <ProductContext.Consumer>
                        {context => <button onClick={() => context.addToCart(props.itemId,props.itemTags)}>ADD TO CART</button>}
                    </ProductContext.Consumer>
                    
                }
            </span>
            <span className={styles.ProductRemove}>
                <ProductContext.Consumer>
                    {context => <img onClick={() => context.deleteFromWishlist(props.itemId, props.itemTags)} src={Remove} alt="icon" />}
                </ProductContext.Consumer>
                
            </span>
        </div>
    )
};

export default wishlistItem;