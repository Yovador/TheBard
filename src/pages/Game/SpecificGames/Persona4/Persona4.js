import React from 'react'
import styles from './Persona4.module.css'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import { persona4 } from 'data/ElementInfoModule'


const Persona4 = () => {
  return (
    <div>
      <EntryInfo imgPath={persona4.imgPath} title={persona4.elementName} subtitle={persona4.elementSub} desc={persona4.elementDesc}/> 
    </div>
  )
}

export default Persona4