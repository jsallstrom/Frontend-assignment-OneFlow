import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/CategoryPage"




export default function AppRouter() {
    return (
        <BrowserRouter>

        <Switch>
        <Route path="/" exact={true} component={HomePage}></Route>
        <Route path="/categories/:category" component={CategoryPage}></Route>

        </Switch>
            
        </BrowserRouter>
    )
}


