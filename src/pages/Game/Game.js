import React from 'react'
import styles from './Game.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import ElementInfo from "components/MainDisplay/ElementInfoModule"

const Game = () => {

  let gameOne = new ElementInfo('https://tinyurl.com/yyb8cyov', 'Persona 3', '2006')
  let gameTwo = new ElementInfo('https://tinyurl.com/yy5rp2yr', 'Persona 4', '2008')
  let gameThree = new ElementInfo('https://tinyurl.com/y6detf92', 'Persona 5', '2016')
  const firstCategoryInfo = [gameOne, gameTwo, gameThree]

  gameOne = new ElementInfo('https://tinyurl.com/y5lwbemf', 'Celeste', '2018')
  gameTwo = new ElementInfo('https://tinyurl.com/y47s2y95', 'Super Mario World', '1990')
  gameThree = new ElementInfo('https://tinyurl.com/y3zmkdyb', 'Hotline Miami', '2012')
  const secondCategoryInfo = [gameOne, gameTwo, gameThree]


  return (
    <div>
      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}>JRPG</ShownPlaylist>
      <ShownPlaylist Info = {secondCategoryInfo}>Pixel-O-Mania</ShownPlaylist>
    </div>
  )
}

export default Game