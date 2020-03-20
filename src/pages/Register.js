import React, {Fragment} from 'react';
import { withCookies } from 'react-cookie';
import Header from "../components/Header";
import RegisterForm from "../components/login-register/RegisterForm";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FormContainer from "../components/login-register/FormContainer";
import {redirectLoggedInUser} from "../client/LoginRegisterApi";

const Register = ({history, cookies}) => {
    redirectLoggedInUser(cookies, history);

    return (
        <Fragment>
            <Header activeNavigation={3} />
            <Banner />
            <FormContainer>
                <RegisterForm />
            </FormContainer>
            <Footer />
        </Fragment>
    );
};

export default withCookies(Register);
