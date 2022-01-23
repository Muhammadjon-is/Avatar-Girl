import React, {Component } from 'react'
import { CardList } from './components/card-lis/card-list';
import './App.css';
 import Searchbox from './components/SearchBox/Searchbox';



class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

this.handleChange = this.handleChange.bind(this);

  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}));

}


handleChange(e){
  this.setState({ 
    searchField:e.target.value
        })
}
   
  render() {
    const { monsters, searchField } = this.state;

    const  filterAvatar = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      )

    // const  monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    return ( 

      <div className='App'>
      <h1> Pretty avatar girls</h1>
    < Searchbox
     placeholder="Search Avatar"handleChange={this.handleChange}
       
     />
 


 < CardList monsters={filterAvatar}>
 

 </CardList>

  
     </div>
    );
  }

}

export default App;
