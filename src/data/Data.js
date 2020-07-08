const data = {
    menCollection: [{
        id: 'ZXCV1',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 199,
        img: require('../assets/images/product1.png'),
        inWishlist: false,
        inCart: false,
        tags: ['menCollection' , 'bestSeller']
    }],
    womenCollection: [{
        id: 'ZXCV2',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 99,
        img: require('../assets/images/product2.png'),
        inWishlist: false,
        inCart: false,
        tags: ['womenCollection' , 'bestSeller']
    }],
    kids: [{
        id: 'ZXCV3',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 179,
        img: require('../assets/images/product3.png'),
        inWishlist: false,
        inCart: false,
        tags: ['kids', 'bestSeller', 'featured']
    }],
    homeAndLiving: [{
        id: 'ZXCV4',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 249,
        img: require('../assets/images/product4.png'),
        inWishlist: false,
        inCart: false,
        tags: ['homeAndLiving', 'bestSeller', 'featured']
    }],
    essentials: [{
        id: 'ZXCV5',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 199,
        img: require('../assets/images/product5.png'),
        inWishlist: false,
        inCart: false,
        tags: ['essentials', 'featured']
    }],
    bestSeller: [{
        id: 'ZXCV1',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 199,
        img: require('../assets/images/product1.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'menCollection']
    },
    {
        id: 'ZXCV2',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 99,
        img: require('../assets/images/product2.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'womenCollection']
    },
    {
        id: 'ZXCV3',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 179,
        img: require('../assets/images/product3.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'kids', 'featured']
    },
    {
        id: 'ZXCV4',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 249,
        img: require('../assets/images/product4.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'homAndLiving', 'featured']
    }],
    featured: [{
        id: 'ZXCV3',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 179,
        img: require('../assets/images/product3.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'kids', 'featured']
    },
    {
        id: 'ZXCV4',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 249,
        img: require('../assets/images/product4.png'),
        inWishlist: false,
        inCart: false,
        tags: ['bestSeller', 'homeAndLiving', 'featured']
    },
    {
        id: 'ZXCV5',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 199,
        img: require('../assets/images/product5.png'),
        inWishlist: false,
        inCart: false,
        tags: ['essentials', 'featured']
    },
    {
        id: 'ZXCV6',
        title: 'Lorem ipsum Dolar Sit Amet.', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: 99,
        img: require('../assets/images/product6.png'),
        inWishlist: false,
        inCart: false,
        tags: ['featured']
    }],
    wishlist: [],
    cart: [],
    totalPrice: 0
};

export default data;