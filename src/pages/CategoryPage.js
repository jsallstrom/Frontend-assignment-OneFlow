import React, { useState, useEffect } from "react";

import axios from "axios";

export default function CategoryPage(props) {
     const { category } = props.match.params;

     const [joke, setJoke] = useState("");

     useEffect(() => {
          fetchCategoryJoke();
     }, [category]);

     const fetchCategoryJoke = async () => {
          const response = await axios.get(
               `https://api.chucknorris.io/jokes/random?category=${category}`
          );
          setJoke(response.data.value);
     };

     return <div>{joke}</div>;
}
