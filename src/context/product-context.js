import React from 'react';

const productCardContext = React.createContext({
    addToCart: ()=> {},
    deleteFromCart: () => {},
    addToWishlist: ()=> {}
});

export default productCardContext;