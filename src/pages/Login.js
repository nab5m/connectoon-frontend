import React, {Fragment} from 'react';
import { withCookies } from 'react-cookie';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/login-register/LoginForm";
import Banner from "../components/Banner";
import FormContainer from "../components/login-register/FormContainer";
import {redirectLoggedInUser} from "../client/LoginRegisterApi";

const Login = ({history, cookies}) => {
    redirectLoggedInUser(cookies, history);

    return (
        <Fragment>
            <Header />
            <Banner />
            <FormContainer>
                <LoginForm history={history} />
            </FormContainer>
            <Footer />
        </Fragment>
    );
};

export default withCookies(Login);
