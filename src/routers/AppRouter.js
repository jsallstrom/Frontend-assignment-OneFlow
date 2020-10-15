import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import axios from "axios";

import CategoryPage from "../pages/CategoryPage";

import NavBar from "../components/NavBar";

import styled from "styled-components";

const StyledNavTitle = styled.h1`
     color: black;
     padding-left: 50px;
     flex-wrap: wrap;

     @media (max-width: 768px) {
          font-size: 20px;
     }
`;

export default function AppRouter() {
     const [categories, setCategories] = useState([]);

     const fetchCategories = async () => {
          const response = await axios.get("https://api.chucknorris.io/jokes/categories");
          setCategories(["random", ...response.data]);
     };

     useEffect(() => {
          fetchCategories();
     }, []);

     return (
          <BrowserRouter>
               <StyledNavTitle>CHUCK NORRIS FACTS</StyledNavTitle>
               <NavBar categories={categories}></NavBar>

               <Switch>
                    <Redirect exact from="/" to="/categories/random" />

                    <Route path="/categories/:category" component={CategoryPage}></Route>
               </Switch>
          </BrowserRouter>
     );
}
