import React, {useEffect, useState} from 'react';

import axios from "axios"



import AppRouter from "../src/routers/AppRouter"




export default function App() {




  const [categories, setCategories] = useState([])

  const [joke, setJoke] = useState("")

  //const [currentCategory, setCurrentCategory] = useState("")

  const [query, setQuery] = useState("")

  const [searchedJokes, setSearchedJokes] = useState([])




  

  const fetchJoke = async () => {

    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    setJoke(response.data.value)
    
  }

  const fetchCategories = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/categories")
    setCategories(response.data)
    
  }


  useEffect(() => {
    fetchJoke()
    fetchCategories()
    
    
  }, []);


  const fetchCategoryJoke = async (category) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    setJoke(response.data.value)
    
  }


  const fetchSearch = async () => {

    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    setSearchedJokes(response.data.result)
    } catch (error) {
      console.log(error)
    }

    
    
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchSearch()
  }


 




  // Display random joke
  // display all categories


  // Mainpage, joke + button
  // Navbar for Categories, easiest if only button-like and generating
  // joke
  // same button willl generate new random joke BUT from that new category
  // usestate(current category)
  // Searchbar


  // I guess using React Router basic??


  /**
   * Use this kind of <Link>
   * 
   * <Link to={{
      pathname: ´/${category}´,
     state: {
        category: category
      }
    }}>{category}</Link>
   * 
   * 
   * 
   * AND in CategoryPage.js 
   * 
   * const { handle } = props.match.params
     const { category } = props.location.state
   * 
    useEffect() with these 
   * MAY just works using normal components (not rfc)
   * 
   */
  


  /**
   * 
    listing all the categories
    navigating into a category and showing a random joke in that category.
    searching through all the jokes using free text search.

   * 

    BUGS:
    - when searching "chuck", it doesnt respond until you have loaded everything
    



   */
  

    

  return (
    
      <AppRouter>
        
        
      </AppRouter>
      
    
  );

/**
 * 
 * 
 * return (
    <div >
      <ul>
            {categories.map((category, index) => {
          return (
              

              <li key={index}>
                <button onClick={() => fetchCategoryJoke(category)}>{category}</button>
              </li>
          );
      })}

      </ul>
      {joke}
      <button onClick={() => fetchJoke()}>Generate new random joke</button>
      
      <form onSubmit={handleSearch}>
        <input type="text" onChange={e=> setQuery(e.target.value)} value={query}></input>
        <button type="submit">Search</button>
      </form>

      {searchedJokes.map( joke => {
        console.log(joke)
        return (
            <p key={joke.id}>{joke.value}</p>

        )
          
        
      })}
      
    </div>
  );
 */
  
}


