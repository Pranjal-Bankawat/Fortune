import React from 'react';
import BestSellerBaner from '../../assets/images/bestSellerBaner.png';
import styles from "./BestSeller.module.css";
import ProductCard from '../ProductCard/ProductCard';

const bestSeller = props => {
    const productsList = props.products.map(el => {
        return <ProductCard key={el.id} 
                productId={el.id}
                productTags={el.tags}
                productTitle={el.title} 
                productImage={el.img} 
                productPrice={el.price}
                inCart = {el.inCart}
                inWishlist = {el.inWishlist}
                />
    });
    return(
        <div className={styles.BestSeller}>
            <div className={styles.BestSellerBaner}>
                <img src={BestSellerBaner} alt="BestSellerBaner"/>
            </div>
            <div className={styles.BestSellerProducts}>
                <div className={styles.BestSellerNav}>
                    <h1>Best Seller</h1>
                    <ul className={styles.BestSellerNavLinks}>
                        <li className={styles.Link}>ETHNIC WEAR</li>
                        <li className={styles.Link}>WESTERN WEAR</li>
                        <li className={styles.Link}>FOOTWEAR</li>
                        <li className={styles.Link}>HANDBAGS</li>
                        <li className={styles.Link}>ACCESSORIES</li>
                    </ul>
                </div>
                <div className={styles.ProductCards}>
                    {productsList}
                </div>
            </div>
        </div>
    )
}

export default bestSeller;