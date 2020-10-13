import React, { useEffect, useState} from 'react';

import axios from "axios"




export default function HomePage() {

  



  const [joke, setJoke] = useState("")

  const [query, setQuery] = useState("")

  const [searchedJokes, setSearchedJokes] = useState([])




  

  const fetchJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    setJoke(response.data.value)
    
  }

  


  useEffect(() => {
    fetchJoke()
    
    
  }, []);




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


 





  // Mainpage, joke + button
  // Navbar for Categories, easiest if only button-like and generating
  // joke
  // same button will generate new random joke BUT from that new category
  // usestate(current category)
  // Searchbar



  /**
   * 
    listing all the categories
    navigating into a category and showing a random joke in that category.
    searching through all the jokes using free text search.

   * 
  BUGS: 
  - less than 3 character searches seems to give back code 400
  - Still takes alot to load several jokes when writing "chuck" or "norris"
    

   */
  

  const SearchedJokes = () => {
    
    return (
      <ul>
        {searchedJokes.map( joke => {
          
          return (
              <p key={joke.id}>{joke.value}</p>

          )
            
        })}
      </ul>
      
    )
  }

  

    return (
      <div >
        
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


}
