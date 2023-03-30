import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

class App extends Component {

constructor(){
  super()

  this.state = {
   monsters: [],
   searchField: '',
  }
  // console.log('constructor')
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState( 
      () => {
        return {monsters: users}
      }
    ))
    console.log('componentDidMount')
}

onSearchChange= (e) => {
  const searchField = e.target.value.toLowerCase()
  this.setState(
    () => {
      return {searchField}
    }
  )
}

render(){
  // console.log('render')

  const { monsters, searchField } = this.state
  const { onSearchChange } = this

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        className='monster-search-box'
      />

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

}

export default App;
