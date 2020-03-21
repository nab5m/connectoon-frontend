import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Custom404 = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <div style={{margin: '100px'}}>
                <h1>해당 페이지는 존재하지 않습니다!</h1>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Custom404;
