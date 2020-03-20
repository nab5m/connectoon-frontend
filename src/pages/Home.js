import React, {Fragment} from 'react';
import { withCookies } from 'react-cookie';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import {getUserProfile, isAuthenticated} from "../client/LoginRegisterApi";

const Home = ({history, cookies}) => {
    isAuthenticated(cookies, history);
    const userProfile = getUserProfile();

    return (
        <Fragment>
            <Header />
            <Banner />
            <div style={{margin: '100px'}}>
                { userProfile ? <h1>안녕하세요 {userProfile.username}님</h1> : <h1>홈 페이지</h1> }
            </div>
            <Footer />
        </Fragment>
    );
};

export default withCookies(Home);
