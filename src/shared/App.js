import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Login, Register} from "../pages";

function App() {
    return (
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </div>
    );
}

export default App;
