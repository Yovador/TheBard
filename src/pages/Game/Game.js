import React from 'react'
import styles from './Game.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import ElementInfo from "components/MainDisplay/ElementInfoModule"

const Game = () => {

  let persona3 = new ElementInfo('https://tinyurl.com/yyb8cyov', 'Persona 3', '2006', 'persona3')
  let persona4 = new ElementInfo('https://tinyurl.com/yy5rp2yr', 'Persona 4', '2008', 'persona4')
  let persona5 = new ElementInfo('https://tinyurl.com/y6detf92', 'Persona 5', '2016', 'persona5')

  const firstCategoryInfo = [persona3, persona4, persona5]

  let celeste = new ElementInfo('https://tinyurl.com/y5lwbemf', 'Celeste', '2018', 'celeste')
  let supermarioworld = new ElementInfo('https://tinyurl.com/y47s2y95', 'Super Mario World', '1990', 'supermarioworld')
  let hotlinemiami = new ElementInfo('https://tinyurl.com/y3zmkdyb', 'Hotline Miami', '2012', 'hotlinemiami')

  const secondCategoryInfo = [celeste, supermarioworld, hotlinemiami]


  return (
    <div>
      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}>JRPG</ShownPlaylist>
      <ShownPlaylist Info = {secondCategoryInfo}>Pixel-O-Mania</ShownPlaylist>
    </div>
  )
}

export default Game