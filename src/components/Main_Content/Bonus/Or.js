
/* to use, replace container in app.js and paste the css below to index.css */

import React, { useState } from 'react'

const Bonus = () => {
    const [Change, setChange] = useState(false)
    const Hope =() =>{
        setChange(!Change)
    }
    return (
        <div className='container'>
            <div className='title'>
                <p className='main-title'>
                {Change ? 'Cherrychanga':'Chimicherry'}
                </p></div>

            <div className='cherrychanga'>
                <button className='chimi-button'
                onClick={Hope}>
                Press!
                </button>
            </div>
        </div>
    )
}

export default Bonus
/*
  this is css for the bonus,remove the 'Container' component
  then add the this component in and put the lines below in 
  'index.css'

  css:

  
 @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html {
  background-color: #f9b8d2;
}

li,
a,
button,
p {
  font-family: "poppins", sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  font-size: 24;
}
p {
  font-weight: bold;
  font-size: 25;
}
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  padding: 30px 5%;
  top: 0%;
  background-color: #f0438c;
  margin: auto;
  border-radius: 50;
}
.nav_links {
  list-style: none;
  padding: 0%;
}
.nav_links li {
  display: inline-block;
  padding: 0px 20px;
  font-size: 24;
}
.nav_links li a {
  transition: all 0.3s ease 0s;
}
.nav_links li a:hover {
  color: #0088a9;
}
button {
  padding: 9px 25px;
  background-color: rgb(134, 216, 247, 1);
  border: 0;
  border-radius: 21px;
}
.cta {
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #272727;
}
.cta:hover {
  background-color: rgba(134, 216, 247, 0.8);
}

.container {
  background-color: #f0438c;
  width: 45%;
  height: 490px;
  margin: auto;
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(1, 50%);
  border-radius: 21px;
}
.title {
  background-color: #f0438c;
  grid-column: 1/3;
  grid-row: 1;
  display: flex;
  justify-content: center;
  font-size: 2.3em;
  margin: auto;
}
.chimicherry {
  background-color: rgb(134, 216, 247);
  display: grid;
  grid-column: 2;
  border-radius: 0 0 21px 0;
  justify-content: center;
}
.cherrychanga {
  background-color: rgb(134, 216, 247);
  display: grid;
  grid-row: 2;
  grid-column: 1;
  border-radius: 0 0 21px 21px;
  grid-column: 1/3;
  justify-content: center;
}
.chimi-button {
  background-color: rgb(240, 67, 140);
  color: #ffffff;
  position: relative;
  margin: auto;
  margin-top: 4.5em;
}
.chimi-button:hover {
  background-color: rgb(240, 67, 140, 0.8);
}

.num-votes,
.votes {
  margin: auto;
  color: #272727;
}




*/