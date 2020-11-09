import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'
import DynamicMainView from "components/DynamicMainView/index";
import Player from "components/Player/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu/>
      <DynamicMainView/>
      <Player/>
    </div>
  )
}

export default Home
