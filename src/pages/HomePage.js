import React from 'react'

import {Link } from "react-router-dom";


export default function HomePage() {


    const category = "mango"

    const category2 = "apple"
    const category3 = "pear"

    return (
        <div>
            <Link to="/">Home</Link>
        <Link to={`/categories/${category}`}>
          {category}
        </Link>
        <Link to={`/categories/${category2}`}>
          {category2}
        </Link>
        <Link to={`/categories/${category3}`}>
          {category3}
        </Link>
        </div>
    )
}
