import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './Wishlist.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import WishlistItem from './WishlistItem/WishlistItem';

const wishlist = props => {
    const wishlistItems = props.wishlist.map(el => {
        return <WishlistItem key={el.id}
                itemId={el.id}
                itemTags={el.tags}
                inCart={el.inCart}
                itemImage={el.img}
                itemTitle={el.title}
                itemPrice={el.price}
                itemQuantity={el.quantity}
                />
    })
    return (
        <Auxiliary>
            <NavBar />
            <div className={styles.Wishlist}>
                <h1 className={styles.WishlistTitle}>Wishlist</h1>
                <div className={styles.WishlistTable}>
                    <div className={styles.WishlistTableTitle}>
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANITY</p>
                        <p></p>
                        <p>REMOVE</p>
                    </div>
                    {wishlistItems}
                    <button className={styles.CheckoutBTN}>GO TO CART</button>
                </div>
            </div>
            <Footer />
        </Auxiliary>
    )
}

export default wishlist;