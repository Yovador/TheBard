import React from 'react'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import styles from './Persona3.module.css'
import { persona3 } from 'data/ElementInfoModule'

const Persona3 = () => {
  return (
    <div>
      <center> <EntryInfo imgPath={persona3.imgPath} title={persona3.elementName} subtitle={persona3.elementSub} desc={persona3.elementDesc}/> </center>
    </div>
  )
}

export default Persona3