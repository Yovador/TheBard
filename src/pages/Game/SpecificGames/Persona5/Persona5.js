import React from 'react'
import styles from './Persona5.module.css'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import { persona5 } from 'data/ElementInfoModule'


const Persona5 = () => {
  return (
    <div>
      <EntryInfo imgPath={persona5.imgPath} title={persona5.elementName} subtitle={persona5.elementSub} desc={persona5.elementDesc}/>
    </div>
  )
}

export default Persona5