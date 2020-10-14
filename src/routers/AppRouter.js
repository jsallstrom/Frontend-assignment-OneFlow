import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";

import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";

import NavBar from "../components/NavBar";

export default function AppRouter() {
     const [categories, setCategories] = useState([]);

     const fetchCategories = async () => {
          const response = await axios.get("https://api.chucknorris.io/jokes/categories");
          setCategories(response.data);
     };

     useEffect(() => {
          fetchCategories();
     }, []);

     return (
          <BrowserRouter>
               <NavBar categories={categories}></NavBar>

               <Switch>
                    <Route path="/" exact={true} component={HomePage}></Route>
                    <Route path="/categories/:category" component={CategoryPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
