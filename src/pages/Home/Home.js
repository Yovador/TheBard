import React from 'react'
import ShownPlaylist from "components/MainDisplay/ShownPlaylist/ShownPlaylist";
import MainTitle from "components/MainDisplay/MainTitle/MainTitle"
import { persona, yakuza, darksouls,  persona3, persona4, persona5 } from 'data/ElementInfoModule';

const Home = () => {
  const firstCategoryInfo = [persona3, persona4, persona5]
  const secondCategoryInfo = [persona, yakuza, darksouls]


  return (
    <div>
      <MainTitle>Tendance</MainTitle>
      <ShownPlaylist Info = {firstCategoryInfo}> JRPG </ShownPlaylist>
      <ShownPlaylist Info = {secondCategoryInfo}> Licences japonaises </ShownPlaylist>
    </div>
  )
}

export default Home