 import React from 'react';
 import "./SearchBox.css"
 const Searchbox = ({ placeholder, handleChange}) => {
   return (
        <div>
 <input
 className='search'
 type='search'
  placeholder={placeholder}
  onChange={ handleChange}
    //  onChange={e => 
    //   this.setState({ 
    //   searchField:e.target.value
    //     })}
    />



   </div> );
 };
 
 export default Searchbox;
 