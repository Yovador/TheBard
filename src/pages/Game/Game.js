import React from 'react'
import styles from './Game.module.css'
import ItemName from 'components/Item/ItemName/ItemName'
import ItemImg from 'components/Item/ItemImg/ItemImg'


const Game = () => {
  return (
    <div className={styles.container}>
      <center><ItemName/><ItemImg/></center>
    </div>
  )
}

export default Game