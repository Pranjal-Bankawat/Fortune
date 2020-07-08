import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import BestSeller from '../../components/BestSeller/BestSeller';
import Offers from '../../components/Offers/Offers';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <Header />
                <BestSeller products={this.props.bestSellerProducts}/>
                <Offers />
                <Featured products={this.props.featuredProducts}/>
                <Footer />
            </div>
        )
    }
};

export default Home;