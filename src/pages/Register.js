import React, {Fragment} from 'react';
import Header from "../components/Header";
import RegisterForm from "../components/login-register/RegisterForm";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FormContainer from "../components/login-register/FormContainer";

const Register = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <FormContainer>
                <RegisterForm />
            </FormContainer>
            <Footer />
        </Fragment>
    );
};

export default Register;
