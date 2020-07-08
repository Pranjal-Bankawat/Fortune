import React from 'react';
import styles from './NavBar.module.css';
import Logo from '../../assets/svg/Logo.svg';
import SearchIcon from '../../assets/svg/search.svg';
import WishlistIcon from '../../assets/svg/bookmark.svg';
import CartIcon from '../../assets/svg/cart.svg';
import ProfileOptions from '../../assets/svg/BurgerMenu.svg';
import MenCollection from './Dropdowns/MenCollection';
import WomenCollection from './Dropdowns/WomenCollection';
import KidsCollection from './Dropdowns/KidsCollection';
import HomeAndLiving from './Dropdowns/HomeAndLiving';
import Essentials from './Dropdowns/Essentials';
import CartDropdownItem from './Dropdowns/CartDropdownItem/CartDropdownItem';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/cart-context';

const navBar = (props) => {
    // let cartDropdownItems = props.cart.map(el => {
    //     return <CartDropdownItem itemImage={el.img} itemPrice={el.price} itemTitle={el.title}/>
    // });
    return(
        <div className={styles.NavBar}>
            <img className={styles.Logo} src={Logo} alt="Logo" />
            <div className={styles.NavLinks}>
                <div className={styles.LeftLinks}>
                    <div className={styles.LeftLink}>
                        <NavLink to='/' exact activeClassName={styles.ActiveLink}>HOME</NavLink>
                    </div>
                    <div className={styles.LeftLink}>
                        <NavLink to='men-collection' activeClassName={styles.ActiveLink}>MEN</NavLink>
                        <div className={styles.MenDropdown + ' ' + styles.Dropdown}>
                            <MenCollection />
                        </div>
                    </div>
                    <div className={styles.LeftLink}>
                        <NavLink to='women-collection' activeClassName={styles.ActiveLink}>WOMEN</NavLink>
                        <div className={styles.WomenDropdown + ' ' + styles.Dropdown}>
                            <WomenCollection />
                        </div>
                    </div>
                    <div className={styles.LeftLink}>
                        <NavLink to='kids' activeClassName={styles.ActiveLink}>KIDS</NavLink>
                        <div className={styles.KidsDropdown + ' ' + styles.Dropdown}>
                            <KidsCollection />
                        </div>
                    </div>
                    <div className={styles.LeftLink}>
                        <NavLink to='home-and-living' activeClassName={styles.ActiveLink}>HOME & LIVING</NavLink>
                        <div className={styles.HomeAndLivingDropdown + ' ' + styles.Dropdown}>
                            <HomeAndLiving />
                        </div>
                    </div>
                    <div className={styles.LeftLink}>
                        <NavLink to='essentials' activeClassName={styles.ActiveLink}>ESSENTIALS</NavLink>
                        <div className={styles.EssentialsDropdown + ' ' + styles.Dropdown}>
                            <Essentials />
                        </div>
                    </div>
                </div>
                <div className={styles.RightLinks}>
                    <div className={styles.RightLink}>
                        <img src={SearchIcon} alt="Searchicon"/>
                    </div>
                    <div className={styles.RightLink }>
                        <NavLink to='wishlist'>   
                            <img src={WishlistIcon} alt="WishlistIcon"/>
                        </NavLink>
                    </div>
                    <div className={styles.RightLink}>
                        <NavLink to='/cart'>
                            <div className={styles.CartIcon}>
                                <img src={CartIcon} alt="CartIcon"/>
                                <CartContext.Consumer>
                                    {context=> <span className={styles.CartItemNumber}>{context.cart.length}</span>}
                                </CartContext.Consumer>
                            </div>
                        </NavLink>
                        <div className={styles.CartDropdown + ' ' + styles.Dropdown}>
                            <div className={styles.CartDropdown}>
                                <CartContext.Consumer>
                                    {context =><h1 className={styles.CartDropdownTitle}>{context.cart.length} items, ${context.cartTotal}</h1> }
                                </CartContext.Consumer>
                                <CartContext.Consumer>
                                    {context => context.cart.map(el => {
                                        return <CartDropdownItem
                                                key={el.id}
                                                itemId={el.id}
                                                itemTags={el.tags}
                                                itemImage={el.img} 
                                                itemPrice={el.price} 
                                                itemTitle={el.title}
                                                itemQuantity={el.quantity}/>
                                        })
                                    }
                                </CartContext.Consumer>
                            </div>
                        </div>
                    </div>
                    <div className={styles.RightLink}>
                        <img src={ProfileOptions} alt="BurgerMenu"/>
                        <div className={styles.ProfileOptionsDropdown + ' ' + styles.Dropdown}>
                            <div className={styles.OptionsDropdown}>
                                <span><a href="/">LOGIN</a> / <a href="/">SIGN UP</a></span>
                                <p>ORDERS</p>
                                <p>WISHLIST</p>
                                <p>CART</p>
                                <p>GIFT CARDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default navBar;