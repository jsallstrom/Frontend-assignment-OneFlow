import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNavBar = styled.nav`
     display: flex;
     flex-direction: row;

     margin-bottom: 10px;
     /*This part is to make the Navbar Sticky and on top */
     position: sticky;
     top: 0;
     background: black;
     z-index: 10;
`;

const NavLinks = styled.ul`
     list-style: none;
     /*padding-inline-start: 0;*/
     display: flex;
     align-items: center;
     flex-wrap: wrap;
     justify-content: center;
`;

const NavLink = styled(Link)`
     margin-right: 10px;
     cursor: pointer;

     color: black;
     text-decoration: none;

     transition: 250ms;

     padding: 10px 10px;
     border: none;

     color: white;

     &:hover {
          color: grey;
          transform: scale(
               1.05
          ); /*This just makes the nav item slightly bigger to show its hovered over */
     }
`;

export default function NavBar({ categories }) {
     // get all Categories from props
     // make Links

     return (
          <StyledNavBar>
               <NavLinks>
                    <NavLink to={"/"}>Home</NavLink>
                    {categories.map((category, index) => {
                         return (
                              <NavLink to={`/categories/${category}`} key={index}>
                                   {category}
                              </NavLink>
                         );
                    })}
               </NavLinks>
          </StyledNavBar>
     );
}
