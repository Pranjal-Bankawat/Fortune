import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import './App.css';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Data from './data/Data';
import CartContext from './context/cart-context';
import ProductContext from './context/product-context';

class App extends React.Component {
  state = {...Data};

  addToCartHandler = (id,tags) => {

    //Code to update cart
    let product = this.state[tags[0]].find(el => {
      return el.id === id;
    });
    product.inCart = true;
    product = {...product , quantity: 1}
    const newCart = [...this.state.cart, product];
    this.setState({cart: newCart}, this.cartTotalHandler);

    //Code to update tags
    tags.forEach(el => {
      let temp = [...this.state[el]];
      temp.forEach(e => {
        if(e.id === id){
          e.inCart = true;
        }
      });
      this.setState({[el]: temp});
    });

    //Code to update wishlist
    const wishListProductIndex = this.state.wishlist.findIndex(el => {
      return el.id === id
    });
    
    if(wishListProductIndex >= 0){
      let newWishlist = [...this.state.wishlist];
      newWishlist[wishListProductIndex].inCart = true;
      this.setState({wishlist: newWishlist});
    }

  }

  deleteFromCartHandler = (id,tags) => {

    //Code to update cart
    const newCart = this.state.cart.filter(el => {
      return el.id !== id
    })
    this.setState({cart: newCart}, this.cartTotalHandler);

    //Code to update tags
    tags.forEach(el => {
      let temp = [...this.state[el]];
      temp.forEach(e => {
        if(e.id === id){
          e.inCart = false;
        }
      });
      this.setState({[el]: temp});
    });

    //Code to update wishlist
    const wishListProductIndex = this.state.wishlist.findIndex(el => {
      return el.id === id
    });
    
    if(wishListProductIndex >= 0){
      let newWishlist = [...this.state.wishlist];
      newWishlist[wishListProductIndex].inCart = false;
      this.setState({wishlist: newWishlist});
    }
  }

  addToWishlistHandler = (id,tags) => {

    //Code to update wishlist
    let product = this.state[tags[0]].find(el => {
      return el.id === id;
    });
    product.inWishlist = true;
    product = {...product , quantity: 1}
    const newWishlist = [...this.state.wishlist, product];
    this.setState({wishlist: newWishlist});

    //Code to update tags
    tags.forEach(el => {
      let temp = [...this.state[el]];
      temp.forEach(e => {
        if(e.id === id){
          e.inWishlist = true;
        }
      });
      this.setState({[el]: temp});
    });
  }

  deleteFromWishlistHandler = (id,tags) => {
    //Code to update wishlist
    const newWishlist = this.state.wishlist.filter(el => {
      return el.id !== id
    })
    this.setState({wishlist: newWishlist});

    //Code to update tags
    tags.forEach(el => {
      let temp = [...this.state[el]];
      temp.forEach(e => {
        if(e.id === id){
          e.inWishlist = false;
        }
      });
      this.setState({[el]: temp});
    });
  }

  cartTotalHandler = () => {
    let sum = 0;
    this.state.cart.forEach(el => {
      sum = sum + (el.price*el.quantity);
    });
    this.setState({totalPrice: sum});
  }

  quantityChangedHandler = (event, id) => {
    let productIndex = this.state.cart.findIndex(el => {
      return el.id === id;
    });
    const newCart = [...this.state.cart];
    newCart[productIndex].quantity = event.target.value;
    this.setState({cart: newCart},this.cartTotalHandler);
  }

  render(){
    console.log(this.state.wishlist);
    return (
      <BrowserRouter>
        <Switch>     
          <CartContext.Provider value={{ cart: this.state.cart, cartTotal: this.state.totalPrice }}>
            <ProductContext.Provider value={{
              addToCart: (id,tags) => this.addToCartHandler(id,tags), 
              deleteFromCart: (id,tags) => this.deleteFromCartHandler(id,tags),
              addToWishlist: (id,tags) => this.addToWishlistHandler(id,tags),
              deleteFromWishlist: (id,tags) => this.deleteFromWishlistHandler(id,tags)
            }}>

              <Route path="/" exact render={() => <Home
                bestSellerProducts={this.state.bestSeller} 
                featuredProducts={this.state.featured}
                />
              }/>

              <Route path="/men-collection" render={() => <ProductsPage
                pageTitle='Men Collection' 
                products={this.state.menCollection}/>
              }/>

              <Route path="/women-collection" render={() => <ProductsPage 
                pageTitle='Women Collection' 
                products={this.state.womenCollection}/>
              }/>

              <Route path="/kids" render={() => <ProductsPage 
                pageTitle='Kids' 
                products={this.state.kids}/>
              }/>

              <Route path="/home-and-living" render={() => <ProductsPage 
                pageTitle='Home And Living' 
                products={this.state.homeAndLiving}/>
              }/>

              <Route path="/essentials" render={() => <ProductsPage 
                pageTitle='Essentials' 
                products={this.state.essentials}/>
              }/>

              <Route path="/wishlist" render={() => <Wishlist wishlist={this.state.wishlist}/>} />

              <Route path="/cart" render={() => <Cart 
                cart={this.state.cart} 
                cartTotal={this.state.totalPrice}
                quantityChangedHandler={(event,id) => this.quantityChangedHandler(event,id)} />
              }/>
            </ProductContext.Provider>        
          </CartContext.Provider>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
