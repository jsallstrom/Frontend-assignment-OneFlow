import React, { useEffect, useState } from "react";

import axios from "axios";

import StyledSearchBar from "../components/StyledSearchBar";

import styled from "styled-components";

const MainContent = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
`;

const Row = styled.div`
     width: 80%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
`;

const StyledJokeButton = styled.button`
     height: 48px;
     line-height: 48px;
     padding: 0 64px;
     font-weight: 600;
     border-radius: 100px;
     color: black;
     background: #ffbf46;
     cursor: pointer;
     margin: 0 24px;
     font-size: 14px;
     text-decoration: none;
`;

const StyledForm = styled.form`
     display: flex;

     flex-wrap: wrap;
     width: 80%;
     margin: 0 auto;
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

const JokeContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
`;

const StyledJoke = styled.p`
     font-style: italic;
     font-size: 30px;
`;

export default function HomePage() {
     const [joke, setJoke] = useState("");

     const [query, setQuery] = useState("");

     const [searchedJokes, setSearchedJokes] = useState([]);

     const [loading, setLoading] = useState(false);

     const fetchJoke = async () => {
          const response = await axios.get("https://api.chucknorris.io/jokes/random");
          setJoke(response.data.value);
     };

     useEffect(() => {
          // fetchJoke();
     }, []);

     const fetchSearch = async () => {
          setLoading(true);
          try {
               const response = await axios.get(
                    `https://api.chucknorris.io/jokes/search?query=${query}`
               );

               //setSearchedJokes(response.data.result);

               // add only the text
               // may make it faster

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

     // Mainpage, joke + button
     // Navbar for Categories, easiest if only button-like and generating
     // joke
     // same button will generate new random joke BUT from that new category
     // usestate(current category)
     // Searchbar

     /**
   * 
    listing all the categories - DONE
    navigating into a category and showing a random joke in that category.
    searching through all the jokes using free text search.


    could check so that button can only be pressed once and then loading text...
     isLoading - DONE

     <h1>Chuck Norris Facts</h1> // in white

     Make the Joke text be cursive? fancy and in the middle

     Famous Facts of The Extrordinary Gentleman and Philosopher Carlos Ray "Chuck" Norris





   * 
  BUGS: 
  - less than 3 character searches seems to give back code 400
  

     

   */

     return (
          <MainContent>
               <StyledForm onSubmit={handleSearch}>
                    <Row>
                         <StyledSearchBar
                              type="text"
                              onChange={(e) => setQuery(e.target.value)}
                              value={query}
                              placeholder="Find Wisdom"
                         ></StyledSearchBar>

                         <StyledSearchButton type="submit" disabled={loading}>
                              Search
                         </StyledSearchButton>
                    </Row>
               </StyledForm>

               <StyledJokeButton onClick={() => fetchJoke()}>Generate Wisdom</StyledJokeButton>

               <StyledJoke>{joke}</StyledJoke>

               <div>
                    {loading
                         ? "loading..."
                         : searchedJokes.map((joke, index) => {
                                return <StyledJoke key={index}>{joke}</StyledJoke>;
                           })}
               </div>
          </MainContent>
     );
}
