import React from 'react'
import style from './Home.module.css'
import Content from '../Content/Content'
import {motion as m} from 'framer-motion'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    <m.section
      initial={{y: '100%'}} 
      animate={{y: '0%'}}
      transition={{duration: .3, ease:'easeOut' }}
      exit={{opacity: 1}}
      className={style.home}
    >
      <div className={style.fodas}>
        <section>
          a
        </section>
        <Content/>
      </div>
    </m.section>
    </>
  )
}

export default Home