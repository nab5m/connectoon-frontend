import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import {observer} from "mobx-react";
import useStores from "../stores/useStores";

const Home = () => {
    const {loginRegisterStore} = useStores();
    const userProfile = loginRegisterStore.userProfile;

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

export default observer(Home);
