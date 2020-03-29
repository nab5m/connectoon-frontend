import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkList from "../components/view-work/WorkList";
import Banner from "../components/Banner";

const ViewWork = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <WorkList />
            <Footer />
        </Fragment>
    )
};

export default ViewWork;
