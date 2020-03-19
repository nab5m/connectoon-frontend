import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
    return (
        <Fragment>
            <Header />
            <LoginForm />
            <Footer />
        </Fragment>
    );
};

export default Login;
