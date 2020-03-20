import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Login, Register} from "../pages";
import Logout from "../pages/Logout";

function App() {
    return (
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
        </div>
    );
}

export default App;
