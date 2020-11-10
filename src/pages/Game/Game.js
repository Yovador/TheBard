import React from 'react'
import styles from './Game.module.css'
import Item from 'components/MainDisplay/Item/Item'
import MainTitle from "components/MainDisplay/MainTitle/MainTitle";
import Separator from "components/MainDisplay/Separator/Separator";


const Game = () => {

  const imgPathItem = '' //'https://tinyurl.com/yyvqkmso'

  return (
    <div>
      <MainTitle>Tendances</MainTitle>
      <Separator imgPath={'https://tinyurl.com/y3dwf39d'}/>
      <Item imgPath={imgPathItem} info={"2016"}>Persona 5</Item>

    </div>
  )
}

export default Game