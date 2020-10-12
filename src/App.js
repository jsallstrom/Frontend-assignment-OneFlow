import React, {useEffect, useState} from 'react';

import axios from "axios"




export default function App() {




  const [categories, setCategories] = useState([])

  const [randomJoke, setRandomJoke] = useState("")

  // button that fetches a random joke runs once in the beginning??


  

  const fetchRandomJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    setRandomJoke(response.data.value)
    
  }

  const fetchCategories = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/categories")
    setCategories(response.data)
    
  }


  useEffect(() => {
    fetchRandomJoke()
    fetchCategories()
    
    
  }, []);


  // Display random joke
  // display all categories
  


  return (
    <div >
      {randomJoke}
      <button onClick={() => fetchRandomJoke()}>Generate new random joke</button>
      <ul>
            {categories.map((cats, index) => {
          return (
              

              <li key={index}>
                {cats}
              </li>
          );
      })}

      </ul>
      
    </div>
  );
}


