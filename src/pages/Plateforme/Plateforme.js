import React from 'react'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { ps2, nswitch, ps3 } from 'data/ElementInfoModule';

const Plateforme = () => {
  const firstCategoryInfo = [ps2, nswitch, ps3]


  return (
    <div>

      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>

      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>


    </div>
  )
}

export default Plateforme