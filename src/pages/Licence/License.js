import React from 'react'
import styles from './Licence.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { persona, yakuza, darksouls } from 'data/ElementInfoModule';

const Licence = () => {
  const firstCategoryInfo = [persona, yakuza, darksouls]


  return (
    <div>

      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>

      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>


    </div>
  )
}

export default Licence