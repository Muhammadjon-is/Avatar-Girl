import React from 'react';
 import "./Card.sty.css"
import images from './images/images';
 import MyIcon from "./images/img1.jpg"
 

 export const Card = (props) => {
  return ( 
  <div className='card-container'>
      <img  alt="avatar"
       src={MyIcon}  alt="" />
    

<h2> {props.monster.name} </h2>
<p> {props.monster.email}</p>
<p> {props.monster.phone}</p>


  </div>
  )
};

export default Card;
