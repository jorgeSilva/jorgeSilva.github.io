import React from 'react'
import style from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/svg/logo_JF.svg'

const Header = () => {

  const lastScrollTop = React.useRef(0)
  const [isNavbarVisible, setNavbarVisible] = React.useState(true)

  const handleScroll = () =>{
    const {pageYOffset} = window
    if(pageYOffset > lastScrollTop.current){
      setNavbarVisible(false)
    }else if(pageYOffset < lastScrollTop.current){
      setNavbarVisible(true)
    }
    lastScrollTop.current = pageYOffset
    console.log(isNavbarVisible);
  }

  React.useEffect(() =>{
    window.addEventListener('scroll', handleScroll, {passive:true})
  }, [])


  return (
    <>
      <header className={style.header}>
        <nav className={`${isNavbarVisible ? "visible" : ''}`}>
          <Logo/>

          <ul className={style.nav_itens}>
            <li>competências</li>
            <li>experiência</li>
            <li>contato</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header