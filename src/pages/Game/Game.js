import React from 'react'
import styles from './Game.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { celeste, hotlinemiami, persona3, persona4, persona5, supermarioworld } from 'data/ElementInfoModule';

const Game = () => {
  const firstCategoryInfo = [persona3, persona4, persona5]
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