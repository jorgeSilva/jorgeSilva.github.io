import React from 'react'
import style from './Navbar.module.css'
import Sidebar from '../Sidebar/Sidebar';
import { ReactComponent as Logo } from '../../assets/svg/logo_JF.svg'

const Navbar = () => {
  return (
    <section className={`${style.header}`}>
      <div className={style.first_item}>
        <Logo/>
      </div>

      <div className={style.second_item}>
        <Sidebar/>
      </div>
    </section>
  )
}

export default Navbar