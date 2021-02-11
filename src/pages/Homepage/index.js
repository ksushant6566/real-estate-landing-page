import React from 'react';

// styles.scss;
import './styles.scss';

// components
import Header from '../../components/Header';
import Main from '../../components/main';
import WhyUs from '../../components/WhyUs';
import MakeDiff from '../../components/MakeDiff';
import Footer from '../../components/Footer';

const Homepage = props => {
    return (
        <div className="homepage">
            <Header />
            <Main />
            <WhyUs />
            <MakeDiff />
            <Footer />
        </div>
    )
}

export default Homepage;