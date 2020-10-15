import React, { useState, useEffect } from "react";

import axios from "axios";

import StyledSearchBar from "../components/StyledSearchBar";

import styled from "styled-components";

const MainContent = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

const Row = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
`;

const StyledSearchButton = styled.button`
     box-sizing: border-box;
     border-radius: 0px 2px 2px 0px;
     background: #8b798c;
     font-weight: 300;
     text-transform: uppercase;
     color: white;
     padding: 0.35em 0.75em;
     border: none;
     font-size: 1.1em;
     text-decoration: none;
     cursor: pointer;

     &:hover {
          background: #c17ccf;
     }
`;

const StyledJoke = styled.p`
     font-style: italic;
     font-size: 20px;

     border-bottom: 1px solid grey;

     padding-top: 30px;
     padding-bottom: 30px;
     text-align: center;
     padding: 10px 50px;
     margin-bottom: 70px;

     @media (max-width: 768px) {
          font-size: 17px;
     }
`;

const StyledJokeButton = styled.button`
     height: 48px;
     max-width: 350px;
     min-width: 300px;
     line-height: 48px;
     padding: 0 50px;
     font-weight: 600;
     border-radius: 100px;
     color: white;
     background: black;
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

const StyledFooter = styled.footer`
     position: fixed;

     bottom: 0;

     color: white;
     z-index: 10;

     padding: 10px;
`;

// Move HomePage to here

export default function CategoryPage(props) {
     const { category } = props.match.params;

     const [query, setQuery] = useState("");

     const [searchedJokes, setSearchedJokes] = useState([]);

     const [loading, setLoading] = useState(false);

     useEffect(() => {
          fetchCategoryJoke();
     }, [category]);

     const fetchCategoryJoke = async () => {
          setLoading(true);

          try {
               if (category !== "random") {
                    const response = await axios.get(
                         `https://api.chucknorris.io/jokes/random?category=${category}`
                    );
                    //setJoke(response.data.value);
                    setSearchedJokes([response.data.value]);
               } else {
                    const response = await axios.get("https://api.chucknorris.io/jokes/random");
                    //setJoke(response.data.value);
                    setSearchedJokes([response.data.value]);
               }
          } catch (error) {
               console.log(error);
          } finally {
               setLoading(false);
          }
     };

     const fetchSearch = async () => {
          setLoading(true);
          try {
               const response = await axios.get(
                    `https://api.chucknorris.io/jokes/search?query=${query}`
               );

               setSearchedJokes(
                    response.data.result.map((item) => {
                         return item.value;
                    })
               );
          } catch (error) {
               console.log(error);
          } finally {
               setLoading(false);
          }
     };

     const handleSearch = (e) => {
          e.preventDefault();

          if (query !== "") {
               fetchSearch();
          }
     };

     /*
   * 
   

     Maybe get a better Font

     
     use global.js

     
   
     BUGS: 
     - less than 3 character searches seems to give back code 400, think it has to do with
      the api


   */

     return (
          <MainContent>
               <StyledJokeButton onClick={fetchCategoryJoke} disabled={loading}>
                    Generate {category} facts
               </StyledJokeButton>

               {/*Show error here maybe && error */}

               {loading
                    ? "loading..."
                    : searchedJokes.map((joke, index) => {
                           return <StyledJoke key={index}>{joke}</StyledJoke>;
                      })}

               <StyledFooter>
                    <form onSubmit={handleSearch}>
                         <Row>
                              <StyledSearchBar
                                   type="text"
                                   onChange={(e) => setQuery(e.target.value)}
                                   value={query}
                                   placeholder="Find Chuck Norris Facts"
                              ></StyledSearchBar>

                              <StyledSearchButton type="submit" disabled={loading}>
                                   Search
                              </StyledSearchButton>
                         </Row>
                    </form>
               </StyledFooter>
          </MainContent>
     );
}
