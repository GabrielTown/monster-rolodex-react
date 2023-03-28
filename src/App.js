import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.state = {
    name: {firstName: 'Gabe', lastName: 'Town'},
    company: 'Town of Gabriel'
  }
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
        {/* <button onClick={() => {this.setState({name: {firstName: 'Timmy', lastN{name: {firstName: 'Timmy', lastName: 'Time'}})}}>change name</button> */}
        
        <button onClick={() => {
          this.setState(
            () => {
              return {
                name: {firstName: 'Timmy', lastName: 'Time'},
              }
            }, 
            // callback function
            () => {
              console.log(this.state)
            }
          );
        }}
        >change name</button>
      </header>
    </div>
  );
}

}

export default App;
