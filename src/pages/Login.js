import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/login/LoginForm";
import Banner from "../components/Banner";

const Login = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <LoginForm />
            <Footer />
        </Fragment>
    );
};

export default Login;
