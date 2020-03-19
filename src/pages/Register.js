import React, {Fragment} from 'react';
import Header from "../components/Header";
import RegisterForm from "../components/register/RegisterForm";
import Footer from "../components/Footer";

const Register = () => {
    return (
        <Fragment>
            <Header />
            <RegisterForm />
            <Footer />
        </Fragment>
    );
};

export default Register;
