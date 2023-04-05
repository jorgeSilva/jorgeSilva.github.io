import React from 'react'
import style from './Navbar.module.css'
import Sidebar from '../Sidebar/Sidebar';
import { ReactComponent as Logo } from '../../assets/svg/logo_JF.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className={`${style.header}`}>
      <div className={style.first_item}>
        <Link to={'/'}>
          <Logo/>
        </Link>
      </div>

      <div className={style.second_item}>
        <Sidebar/>
      </div>
    </section>
  )
}

export default Navbar