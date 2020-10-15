import styled from "styled-components";

import { colors } from "../styles/global";

export const MainContent = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export const Row = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
`;

export const StyledSearchButton = styled.button`
     box-sizing: border-box;
     border-radius: 0px 2px 2px 0px;
     background: ${colors.primary};
     font-weight: 300;
     text-transform: uppercase;
     color: ${colors.white};
     padding: 0.35em 0.75em;
     border: none;
     font-size: 1.1em;
     text-decoration: none;
     cursor: pointer;

     &:hover {
          background: ${colors.secondary};
     }
`;

export const StyledJoke = styled.p`
     font-style: italic;
     font-size: 20px;

     border-bottom: 1px solid ${colors.grey};

     padding-top: 30px;
     padding-bottom: 30px;
     text-align: center;
     padding: 10px 50px;
     margin-bottom: 70px;

     @media (max-width: 768px) {
          font-size: 17px;
     }
`;

export const StyledJokeButton = styled.button`
     height: 48px;
     max-width: 350px;
     min-width: 300px;
     line-height: 48px;
     padding: 0 50px;
     font-weight: 600;
     border-radius: 100px;
     color: ${colors.white};
     background: ${colors.black};
     cursor: pointer;

     font-size: 14px;
     text-decoration: none;
     text-transform: capitalize;

     margin-top: 100px;
     margin-bottom: 150px;

     @media (max-width: 768px) {
          margin-top: 0px;
          margin-bottom: 0px;
     }
`;

export const StyledFooter = styled.footer`
     position: fixed;

     bottom: 0;

     color: ${colors.white};
     z-index: 10;

     padding: 10px;
`;
