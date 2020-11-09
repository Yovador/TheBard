import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'
import DynamicMainView from "components/DynamicMainView/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu/>
      <DynamicMainView/>
    </div>
  )
}

export default Home
