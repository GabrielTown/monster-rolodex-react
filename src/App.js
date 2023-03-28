import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.state = {
   monsters: [
    {
      name: 'Linda',
      id: '23sdafar234',
     },
     {
      name: "Frank",
      id: '23sdafa4',

     },
     {
      name: "Jacky",
      id: '23afar234',
     },
     {
      name: "James",
      id: '23sdafar234asdf'

     },
   ]
  };
}

render(){
  return (
    <div className="App">
      {this.state.monsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

}

export default App;
