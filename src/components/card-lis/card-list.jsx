 import React from 'react';
 import './card-lis.css';
 import Card from '../Card/Card';
 
    export const CardList = props => {
    
     return (
    <div className='card-list'>
        {props.monsters.map(monster => (
         < Card  key={monster.id}
          monster={monster}
          
         />
        
       ))}
    </div>
     );
     
    }