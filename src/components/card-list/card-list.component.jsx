// import { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({ monsters }) => ( //implicit return vs {} explisive return
    // const { monsters } = props
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monster={monster}/>
            )
        })}
    </div>
)            

export default CardList