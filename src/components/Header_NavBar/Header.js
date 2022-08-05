import React from 'react'
import Nav from './Nav'
const Header = () => {
    return (
        <header>
            <p>Sugarcube bakery</p>
            <Nav />
            <a href="a.html">
                <button className='cta'>
                Contact us    
                </button>
            </a>
        </header>
    )
}

export default Header

