import React from 'react';
import Banner from '../components/default/Banner';
import Footer from '../components/default/Footer';
import Header from '../components/default/Header';
import Media from '../components/default/Media';
import Wrapper from '../components/default/Wrapper';

const Home = () => {
    return (
        <Wrapper>
            <Header></Header>
            <Banner></Banner>
            <div className="h-96"></div>
            <Media></Media>
            <Footer></Footer>
        </Wrapper>
    );
};

export default Home;