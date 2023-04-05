import React from 'react';
import style from './LazyLoad.module.css'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { Link } from 'react-router-dom';
import {motion as m} from  'framer-motion';

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
      <m.article ref={body} className={style.background_lazyload} 
         initial={{y: '100%'}} 
         animate={{y: '0%'}}
         transition={{duration: .3, ease:'easeOut' }}
         exit={{opacity: 1}}
      >
        <section className={`${style.content}`}>
          <div className={style.presentation}>
            <div className={style.container_presentation}>
              {author.name && author.name && 
                <div className={style.name}>
                  <m.div className={style.first_name}
                    initial={{y: '100%'}} 
                    animate={{y: '0%'}}
                    transition={{duration: .3, delay: 0.2 }}
                    exit={{opacity: 1}}
                  >
                    {formatted_name}
                  </m.div>
                  <m.div className={style.second_name}
                     initial={{y: '100%'}} 
                     animate={{y: '0%'}}
                     transition={{duration: .35, delay: 0.2}}
                     exit={{opacity: 1}}
                  >
                   {author.surname}
                  </m.div>
                </div> 
              }

              {author.secondJob && 
                <div className={style.secondJob}>
                  <m.div className={style.element_secondJob}
                    initial={{y: '30%', opacity: 0}} 
                    animate={{y: '0%', opacity:1}}
                    transition={{duration: .4, delay: 0.2}}
                    exit={{opacity: 1}}
                  >
                    {author.secondJob}
                  </m.div>
                </div>}
                
              {author.job && 
                <div className={style.job}>
                  <m.div className={style.element_job} 
                    initial={{y: '100%'}} 
                    animate={{y: '0%'}}
                    transition={{duration: .55, delay: 0.2}}
                    exit={{opacity: 1}}
                  >
                    {author.job}
                  </m.div>
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
              <m.div className={style.button}
                initial={{y: '200%'}} 
                animate={{y: '0%'}}
                transition={{duration: .3, delay: .5}}
                exit={{opacity: 1}}
              >
                <p>Ver mais</p>
              </m.div>
            </Link>
          </section>

          <div className={style.welcome_position}>
            <div className={style.welcome}>
              <m.p 
                 initial={{y: '100%', opacity: 0}} 
                 animate={{y: '0%' , opacity: 1}}
                 transition={{duration: .3, delay: 0.1 }}
                 exit={{opacity: 1}}
              >
                Bem Vindo 
              </m.p>
            </div>
          </div>
        </section>
      </m.article>
    </>
  )
}

export default LazyLoad