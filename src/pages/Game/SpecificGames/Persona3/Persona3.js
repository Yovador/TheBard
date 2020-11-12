import React from 'react'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import styles from './Persona3.module.css'
import { persona3 } from 'data/ElementInfoModule'
import { p3OST } from 'data/SongInfoModule'
import ListSong from 'components/OneEntryDisplay/ListSong/ListSong'


const Persona3 = () => {
  return (
    <div>
      <center> 
        <EntryInfo imgPath={persona3.imgPath} title={persona3.elementName} subtitle={persona3.elementSub} desc={persona3.elementDesc}/> 
        <ListSong listSong = {p3OST}/>
      </center>
    </div>
  )
}

export default Persona3