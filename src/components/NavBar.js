import React from 'react'



import { Link } from "react-router-dom";









export default function NavBar({categories}) {

    // get all Categories from props
    // make Links

    return (
        <ul>
            <Link to={"/"}>Home</Link>
              {categories.map((category, index) => {
            return (

            <Link to={`/categories/${category}`} key={index}>{category}</Link>
            );
        })}
  
        </ul>
    )
}
