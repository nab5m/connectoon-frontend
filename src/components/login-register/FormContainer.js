import React from "react";
import '../css/FormContainer.css'

const FormContainer = ({children}) => {
    return (
        <section className={"form-container"}>
            {children}
        </section>
    );
};

export default FormContainer;
