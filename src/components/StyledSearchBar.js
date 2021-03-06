import React from "react";
import styled from "styled-components";

import { colors } from "../styles/global";

import searchIcon from "../svg/search.svg";

const SearchBar = styled.div`
     height: 48px;
     max-width: 500px;
     position: relative;
     margin: 0 5px;

     /*Any input inside SearchBar these rules will apply (Nested Css)*/
     input {
          height: 48px;
          max-width: 400px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 64px;
          border-radius: 100px;
          border: none;
          font-size: 14px;
          outline: none;
          border: 1px solid black;
          color: black;
          &::placeholder {
               color: ${colors.grey};
          }

          @media (max-width: 768px) {
               padding: 0 40px;
          }
     }

     /*Any image inside SearchBar these rules will apply (Nested Css)*/
     img {
          position: absolute;
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
          z-index: 9;
          width: 16px;
          height: 16px;
          @media (max-width: 768px) {
               left: 15px;
          }
     }
`;

export default function StyledSearchBar(props) {
     return (
          <SearchBar>
               <img src={searchIcon} alt="search icon" />
               <input placeholder="Example Placeholder" type="text" {...props} />
          </SearchBar>
     );
}
