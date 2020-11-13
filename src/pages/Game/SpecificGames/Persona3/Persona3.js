import React from 'react'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import { persona3 } from 'data/ElementInfoModule'
import { p3OST } from 'data/SongInfoModule'
import ListSong from 'components/OneEntryDisplay/ListSong/ListSong'


const Persona3 = () => {
  return (
    <div>
        <EntryInfo imgPath={persona3.imgPath} title={persona3.elementName} subtitle={persona3.elementSub} desc={persona3.elementDesc}/> 
        <hr/>
        <ListSong listSong = {p3OST}/>
    </div>
  )
}

export default Persona3