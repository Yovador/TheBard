import React from 'react'
import styles from './Editeur.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { sega, nintendo, sony } from 'data/ElementInfoModule';

const Editeur = () => {
  const firstCategoryInfo = [sega, nintendo, sony]


  return (
    <div>

      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>

      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>


    </div>
  )
}

export default Editeur