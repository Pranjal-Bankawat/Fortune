import React from 'react';
import styles from './ProductCard.module.css';
import Ratings from '../../assets/svg/ratings.svg';
import QuickView from '../../assets/svg/searchWhite.svg';
import Wishlist from '../../assets/svg/bookmarkWhite.svg';
import WishlistAdded from '../../assets/svg/bookmarkWhiteFill.svg';
import ProductContext from '../../context/product-context';

const productCard = props => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.ProductImage}>
                <p className={styles.QuickView}><img src={QuickView} alt="QuickViewIcon"/></p>
                {
                    props.inWishlist
                    ? <p className={styles.AddToWishlist}><img src={WishlistAdded} alt="WishlistIcon"/></p>
                    : <ProductContext.Consumer>
                        {context => <p 
                                    className={styles.AddToWishlist}
                                    onClick={() => context.addToWishlist(props.productId,props.productTags)}
                                    ><img src={Wishlist} alt="WishlistIcon"/></p>
                        }
                    </ProductContext.Consumer>
                    
                }
                {
                    props.inCart 
                    ? <p className={styles.AddToCart}>IN CART</p>
                    : <ProductContext.Consumer>
                        {context => <p 
                                    onClick={() => context.addToCart(props.productId,props.productTags)} 
                                    className={styles.AddToCart}
                                    >ADD TO CART</p>
                        }
                    </ProductContext.Consumer>
                }
                <img src={props.productImage} alt="ProductImage"/>
            </div>
            <div className={styles.ProductDetails}>
                <p className={styles.ProductTitle}>{props.productTitle}</p>
                <img className={styles.ProductRating} src={Ratings} alt="ProductRatings"/>
                <p className={styles.ProductPrice}>${props.productPrice}</p>
            </div>
        </div>
    );
};

export default productCard;