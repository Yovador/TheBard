import React from 'react'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { smeguro, hshoji, linaizumi } from 'data/ElementInfoModule';

const Artiste = () => {
  const firstCategoryInfo = [smeguro, hshoji, linaizumi]


  return (
    <div>

      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>

      <ShownPlaylist Info = {firstCategoryInfo}> From Japan </ShownPlaylist>


    </div>
  )
}

export default Artiste