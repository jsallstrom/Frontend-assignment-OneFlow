import React, { useState, useEffect } from "react";

import axios from "axios";

import StyledSearchBar from "../components/StyledSearchBar";

import Spinner from "../components/Spinner";

import {
     MainContent,
     Row,
     StyledSearchButton,
     StyledJoke,
     StyledJokeButton,
     StyledFooter,
} from "../styles/elements";

export default function CategoryPage(props) {
     const { category } = props.match.params;

     const [query, setQuery] = useState("");

     const [jokes, setJokes] = useState([]);

     const [loading, setLoading] = useState(false);

     const [error, setError] = useState("");

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

                    setJokes([response.data.value]);
                    setError("");
               } else {
                    const response = await axios.get("https://api.chucknorris.io/jokes/random");

                    setJokes([response.data.value]);
                    setError("");
               }
          } catch (error) {
               console.log(error);
               setError(error.message);
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

               setJokes(
                    response.data.result.map((item) => {
                         return item.value;
                    })
               );
               setError("");
          } catch (error) {
               console.log(error);
               setError(error.message);
               setJokes([]);
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
   
     BUGS: 
     - less than 3 character searches seems to give back code 400, think it has to do with
      the api


   */

     return (
          <MainContent>
               <StyledJokeButton onClick={fetchCategoryJoke} disabled={loading}>
                    Generate {category} facts
               </StyledJokeButton>

               {error && <p>Something went wrong...{error}</p>}

               {/*Show error here maybe && error */}

               {loading ? (
                    <Spinner></Spinner>
               ) : (
                    jokes.map((joke, index) => {
                         return <StyledJoke key={index}>{joke}</StyledJoke>;
                    })
               )}

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
