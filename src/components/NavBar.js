import React from "react";

import { Link } from "react-router-dom";

import { colors } from "../styles/global";

import styled from "styled-components";

const StyledNavBar = styled.ul`
     list-style: none;

     display: flex;
     flex-direction: row;

     /*This part is to make the Navbar Sticky and on top */
     position: sticky;
     top: 0;
     background: ${colors.black};
     z-index: 10;
     align-items: center;

     flex-wrap: wrap;
`;

const NavLink = styled(Link)`
     margin-right: 10px;
     cursor: pointer;

     color: ${colors.black};
     text-decoration: none;

     text-transform: capitalize; // make first letter Capital

     transition: 250ms;

     padding: 10px 10px;

     border: none;

     color: ${colors.white};

     &:hover {
          color: ${colors.grey};
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
               {categories.map((category, index) => {
                    return (
                         <NavLink to={`/categories/${category}`} key={index}>
                              {category}
                         </NavLink>
                    );
               })}
          </StyledNavBar>
     );
}
