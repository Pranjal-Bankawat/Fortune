import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './Cart.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import CartItem from './CartItem/CartItem'

const cart = props => {
    const cartItems = props.cart.map(el => {
        return <CartItem key={el.id}
                productId={el.id}
                productTags={el.tags}
                productTitle={el.title}
                productPrice={el.price} 
                productImage={el.img}
                productQuanity={el.quantity}
                changeQuantity={(event) => props.quantityChangedHandler(event,el.id)} />
    });
    return (
        <Auxiliary>
            <NavBar />
            <div className={styles.Cart}>
                <h1 className={styles.CartTitle}>Cart</h1>
                <div className={styles.CartTable}>
                    <div className={styles.CartTableTitle}>
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANITY</p>
                        <p>TOTAL</p>
                        <p>REMOVE</p>
                    </div>
                    {cartItems}
                    <div className={styles.CheckoutDetails}>
                        <p>CART TOTAL :</p>
                        <p>${props.cartTotal}</p>
                    </div>
                    <button className={styles.CheckoutBTN}>CHECKOUT</button>
                </div>
            </div>
            <Footer />
        </Auxiliary>
    )
}

export default cart;