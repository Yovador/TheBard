import React from 'react'
import styles from './Game.module.css'
import Item from "components/Item/Item";
import MainTitle from "components/MainTitle/MainTitle";


const Game = () => {

  const imgPath = '' //'https://tinyurl.com/yyvqkmso'

  return (
    <div>
      <MainTitle>Tendances</MainTitle>
      <Item imgPath={imgPath} info={"2016"}>Persona 5</Item>
    </div>
  )
}

export default Game