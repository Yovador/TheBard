import React from 'react'
import EntryInfo from 'components/OneEntryDisplay/EntryInfo/EntryInfo'
import styles from './Persona.module.css'
import { persona } from 'data/ElementInfoModule'
import ListElement from 'components/OneEntryDisplay/EntryInfo/ListElement/ListElement'


const Persona = () => {

  persona.list.forEach(list => {
    console.log(list)
  });

  return (
    <div>
        <EntryInfo imgPath={persona.imgPath} title={persona.elementName} subtitle={persona.elementSub} desc={persona.elementDesc}/> 
        <hr/>
        <ListElement list={persona.list} />
    </div>
  )
}

export default Persona