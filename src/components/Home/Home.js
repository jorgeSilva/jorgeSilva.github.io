import React from 'react'
import style from './Home.module.css'
import Content from '../Content/Content'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link to={'/'}>
        <Header/>
      </Link>
      <section className={style.home}>
        a
      </section>
      <Content/>
    </>
  )
}

export default Home