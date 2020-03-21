import React, {Fragment} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/login-register/LoginForm";
import Banner from "../components/Banner";
import FormContainer from "../components/login-register/FormContainer";

const Login = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <FormContainer>
                <LoginForm />
            </FormContainer>
            <Footer />
        </Fragment>
    );
};

export default Login;
