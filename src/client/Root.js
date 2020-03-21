import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'mobx-react';
import App from "../shared/App";
import {CookiesProvider} from "react-cookie";

const Root = () => {
    return (
        <CookiesProvider>
            <Provider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    );
};

export default Root;
