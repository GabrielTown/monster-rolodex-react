import { Component } from 'react'
import './App.css'

class App extends Component {

constructor(){
  super()

  this.state = {
   monsters: [],
   searchField: '',
  }
  console.log('constructor')
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState( 
      () => {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }
    ))
    console.log('componentDidMount')
}

render(){
  console.log('render')

  const filteredMonsters = this.state.monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(this.state.searchField)
  })

  return (
    <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={(e) => {
          const searchField = e.target.value.toLowerCase()
          this.setState(
            () => {
              return {searchField}
            }
          )
        }} 
      />
      {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>
      })}
    </div>
  )
}

}

export default App;
