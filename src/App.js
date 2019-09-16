import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux";

import Nav from "./pages/nav/Nav"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Forget from "./pages/forget/Forget"
import MyMap from './pages/map/Map'
import SelCity from './pages/selectcity/SelectCity'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Nav} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/forget" exact component={Forget} />
                        <Route path="/map" exact component={MyMap} />
                        <Route path="/selectcity" exact component={SelCity} />
                        <Route component={Nav} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}
