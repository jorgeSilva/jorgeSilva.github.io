import React from 'react'
import style from './Sidebar.module.css'
import { ReactComponent as Burger } from '../../assets/svg/list.svg'
import { ReactComponent as Close } from '../../assets/svg/x-lg.svg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isActive, setIsActive] = React.useState(false)

  const handleClick = e =>{
    setIsActive(current => !current)
  }
  const height_screen = window.innerHeight  

  React.useEffect(() => {
    if(isActive){
      window.document.body.classList.add('locked')
    }else if(isActive == null){
      window.document.body.classList.remove('locked')
    }
  })

  return (
    <>
      <div className={style.burger} onClick={handleClick}>
        {isActive ? 
          <div className={style.button_close}>
            <Close/> 
          </div>
          : <Burger/>}
      </div>
      
      {isActive && 
      
      <section className={`${isActive ? 'active' : ''}`}>
        <div className={style.menu_position}>
          <nav className={style.menu} style={{height: `${height_screen}px`}}>
            <Link style={{animationDelay: '.1s'}} to="#home">home</Link>
            <Link style={{animationDelay: '.2s'}} to="#competencias">competências</Link>
            <Link style={{animationDelay: '.3s'}} to="#experiencia">experiencia</Link> 
            <Link style={{animationDelay: '.4s'}} to="#contato">contato</Link> 
          </nav>
        </div>
      </section>
      }
    </>
  )
}

export default Sidebar