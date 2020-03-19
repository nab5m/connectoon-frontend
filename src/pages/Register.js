import React, {Fragment} from 'react';
import Header from "../components/Header";
import RegisterForm from "../components/register/RegisterForm";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Register = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <RegisterForm />
            <Footer />
        </Fragment>
    );
};

export default Register;
