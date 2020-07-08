import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './ProductsPage.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import ProductCard from '../ProductCard/ProductCard';

const productsPage = props => {
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
    return (
        <Auxiliary>
            <NavBar />
            <div className={styles.ProductsPage}>
                <div className={styles.ProductsPageHeader}>
                    <h1>{props.pageTitle}</h1>
                    <span className={styles.ProductsPageSort}>
                        <label>Sort By : </label>
                        <select className={styles.SortOptions}>
                            <option className={styles.Option}>Recommended</option>
                            <option className={styles.Option}>What's New</option>
                            <option className={styles.Option}>Popularity</option>
                            <option className={styles.Option}>Better Discount</option>
                            <option className={styles.Option}>Price : High to Low</option>
                            <option className={styles.Option}>Price : Low to High</option>
                        </select>
                    </span>
                </div>
                <div className={styles.ProductsPageContent}>
                    <div className={styles.ProductsPageFilters}>
                        <div className={styles.Filter}>
                            <p>Categories</p>
                            <span>
                                <input type="checkbox"  id="category1" name="category1" value="category1"/>
                                <label htmlFor="category1">Category 1</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="category2" name="category2" value="category2"/>
                                <label htmlFor="category2">Category 2</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="category3" name="category3" value="category3"/>
                                <label htmlFor="category3">Category 3</label><br />
                            </span>
                        </div>
                        <div className={styles.Filter}>
                            <p>Price</p>
                            <span>
                                <input type="checkbox"  id="price1" name="price1" value="price1"/>
                                <label htmlFor="price1">$49 to $99</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="price2" name="price2" value="price2"/>
                                <label htmlFor="price2">$99 to $149</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="price3" name="price3" value="price3"/>
                                <label htmlFor="price3">$149 to $199</label><br />
                            </span>
                        </div>
                        <div className={styles.Filter}>
                            <p>Color</p>
                            <span>
                                <input type="checkbox"  id="color1" name="color" value="color"/>
                                <label htmlFor="color">Color 1</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="color2" name="color" value="color"/>
                                <label htmlFor="color">Color 2</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="color3" name="color" value="color"/>
                                <label htmlFor="color">Color 3</label><br />
                            </span>
                        </div>
                        <div className={styles.Filter}>
                            <p>Discount Range</p>
                            <span>
                                <input type="checkbox"  id="discount1" name="discount1" value="discount1"/>
                                <label htmlFor="discount1">40% and above</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="discount2" name="discount2" value="discount2"/>
                                <label htmlFor="discount2">50% and above</label><br />
                            </span>
                            <span>
                                <input type="checkbox"  id="discount3" name="discount3" value="discount3"/>
                                <label htmlFor="discount3">60% and above</label><br />
                            </span>
                        </div>
                    </div>
                    <div className={styles.Products}>
                        {productsList}
                    </div>
                </div>
            </div>
            <Footer />
        </Auxiliary>
    )
};

export default productsPage;