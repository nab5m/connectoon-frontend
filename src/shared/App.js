import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Home, Login, Register, ViewWork} from "../pages";
import {observer} from "mobx-react";
import useStores from "../stores/useStores";
import Custom404 from "../pages/Custom404";

function App() {
    const {loginRegisterStore} = useStores();

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/view-work" component={ViewWork} />
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
                <Route path='*' component={Custom404} />
            </Switch>
        </div>
    );
}

export default observer(App);
