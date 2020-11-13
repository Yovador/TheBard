import React from 'react'
import styles from './Dev.module.css'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { atlus, ryuga, fromsoftware } from 'data/ElementInfoModule';

const Dev = () => {
  const firstCategoryInfo = [atlus, ryuga, fromsoftware]


  return (
    <div>

      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>

      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>


    </div>
  )
}

export default Dev