import React from 'react';
import style from './LazyLoad.module.css'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const LazyLoad = () => {
  const body = React.useRef()

  const author = {
    name: 'jorge',
    surname: 'Ferreira',
    job: 'Desenvolvedor Front-end',
    secondJob: 'UX & UI Designer',
    city: 'Itaberá-SP'
  }

  const formatted_name = author.name[0].toUpperCase() + author.name.substring(1)

  return (
    <>
      <article ref={body} className={style.background_lazyload}>
       <Navbar/>

        <section className={`${style.content}`}>
          <div className={style.presentation}>
            <div className={style.container_presentation}>
              {author.name && author.name && 
                <div className={style.name}>
                  <div className={style.first_name}>
                    {formatted_name}
                  </div>
                  <div className={style.second_name}>
                   {author.surname}
                  </div>
                </div> 
              }

              {author.secondJob && 
                <div className={style.secondJob}>
                  <div className={style.element_secondJob}>
                    {author.secondJob}
                  </div>
                </div>}
                
              {author.job && 
                <div className={style.job}>
                  <div className={style.element_job}>
                    {author.job}
                  </div>
                </div>
              }
                
              {author.city && 
                <div className={style.spot_information}>
                  <div className={style.information}>
                    <p>{author.city}</p>

                    <ul>
                      <li>
                        <Linkedin/>
                      </li>
                      <li>
                        <Instagram/>
                      </li>
                      <li>
                        <Facebook/>
                      </li>
                      <li>
                        <Twitter/>
                      </li>
                    </ul>
                  </div>
                </div>
              }
            </div>
          </div>

          <div className={style.img}>
            <div className={style.response_img}>
              <div className={style.img_fullscren}>
                <div className={style.img_jorge}></div>
              </div>
            </div>
          </div>
          
          <section className={style.button_absolute}>
            <Link to={'/Home'}>
              <div className={style.button}>
                <p>Ver mais</p>
              </div>
            </Link>
          </section>

          <div className={style.welcome_position}>
            <div className={style.welcome}>
              Bem Vindo 
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default LazyLoad