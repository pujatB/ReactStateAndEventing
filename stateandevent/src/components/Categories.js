import React from 'react'
import { useContext } from 'react'

const Categories = () => {

    const value = useContext(UsernameContext);
    return (
        <div>
            <h1>Categories</h1>
            {value => <h1>The user is {value}.</h1>}
        </div>
    )
}

export default Categories
