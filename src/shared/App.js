import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import {Login, Register} from "../pages";
import Home from "../pages/Home";
import {observer} from "mobx-react";
import useStores from "../stores/useStores";

function App() {
    const {loginRegisterStore} = useStores();

    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login">
                {
                    loginRegisterStore.token ? <Redirect to="/" /> : <Login />
                }
            </Route>
            <Route exact path="/register">
                {
                    loginRegisterStore.token ? <Redirect to="/" /> : <Register />
                }
            </Route>
        </div>
    );
}

export default observer(App);
