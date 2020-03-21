import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'mobx-react';
import App from "../shared/App";
import {CookiesProvider} from "react-cookie";
import LoginRegisterStore from "../stores/LoginRegisterStore";

const loginRegisterStore = new LoginRegisterStore();

const Root = () => {
    return (
        <CookiesProvider >
            <Provider loginRegisterStore={loginRegisterStore}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    );
};

export default Root;
