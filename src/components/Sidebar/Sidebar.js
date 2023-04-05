import React from 'react'
import style from './Sidebar.module.css'
import { ReactComponent as Burger } from '../../assets/svg/list.svg'
import { ReactComponent as Close } from '../../assets/svg/x-lg.svg'
import { Link } from 'react-router-dom'

const Sidebar = ({classe}) => {
  /* console.log(classe.current); */
  const [isActive, setIsActive] = React.useState(false)

  const handleClick = e =>{
    setIsActive(current => !current)
  }

  React.useEffect(() =>{
    
  }, [isActive])

  return (
    <>
      <div className={style.burger} onClick={handleClick}>
        {isActive ? 
          <div className={style.close_button}>
            <Close/> 
          </div>:
          <div className={style.open_button}>
            <Burger/>
          </div>}
      </div>

      {/* <div className={`${style.menu} ${isActive ? 'active' : ''}`}>
        <nav>
          <Link style={{animationDelay: '.1s'}} to="#home">home</Link>
          <Link style={{animationDelay: '.2s'}} to="#competencias">competências</Link>
          <Link style={{animationDelay: '.3s'}} to="#experiencia">experiencia</Link> 
          <Link style={{animationDelay: '.4s'}} to="#contato">contato</Link> 
        </nav>
      </div> */}
    </>
  )
}

export default Sidebar