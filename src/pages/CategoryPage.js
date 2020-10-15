import React, { useState, useEffect } from "react";

import axios from "axios";

import StyledSearchBar from "../components/StyledSearchBar";

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
                    setJokes([response.data.value]);
               } else {
                    const response = await axios.get("https://api.chucknorris.io/jokes/random");
                    //setJoke(response.data.value);
                    setJokes([response.data.value]);
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

               setJokes(
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
                    : jokes.map((joke, index) => {
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
