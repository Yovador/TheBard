import React from 'react'
import styles from './Game.module.css'
import Item from "components/Item/Item";


const Game = () => {

  const imgPath = 'https://tinyurl.com/yyvqkmso'

  return (
    <Item imgPath={imgPath}>Persona 5</Item>
  )
}

export default Game