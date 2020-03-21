import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'mobx-react';
import App from "../shared/App";
import LoginRegisterStore from "../stores/LoginRegisterStore";

const loginRegisterStore = new LoginRegisterStore();

const Root = () => {
    return (
            <Provider loginRegisterStore={loginRegisterStore}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
    );
};

export default Root;
