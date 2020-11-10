import React from 'react'
import styles from './Artiste.module.css'
import Item from 'components/MainDisplay/Item/Item'


const Artiste = () => {
    const imgPath = 'https://tinyurl.com/y3yee6b7'

    return (
      <Item imgPath={imgPath} info="Journaliste">Julien Chièze</Item>
    )
}

export default Artiste