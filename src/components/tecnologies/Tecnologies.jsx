import React from 'react'
import style from './Tecnologies.module.css'
import { BsLinkedin, BsGithub, BsWhatsapp,BsFillEnvelopeFill } from "react-icons/bs";
const Technologies = () => {
    return (
        <div className={style.technologies}>
            <h3>Tecnologies</h3>
            <li className={style.lista}>
                <ul className={style.seccion}>
                    <h4>
                        lenguajes
                    </h4>
                    <div className={style.iconsContainer}>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Javascript' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'></img>
                            <span>Javascript</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='HTML' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'></img>
                            <span>HTML</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='CSS' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'></img>
                            <span>CSS</span>
                        </div>
                    </div>
                </ul>
                <ul className={style.section}>
                    <h4>
                        Front-end
                    </h4>
                    <div className={style.iconsContainer}>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='React' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'></img>
                            <span>React</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Redux' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'></img>
                            <span>Redux</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Bootstrap' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'></img>
                            <span>Bootsrap</span>
                        </div>
                    </div>
                </ul>
                <ul className={style.seccion}>
                    <h4>
                        Back-end
                    </h4>
                    <div className={style.iconsContainer}>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Express' src='https://camo.githubusercontent.com/f4c16f88eb45f20ce0392bde650bbf46d1f46aa7074d47c7e0c31640231fa6d4/68747470733a2f2f65372e706e676567672e636f6d2f706e67696d616765732f3834362f38372f706e672d636c69706172742d6d65616e2d736f6c7574696f6e2d737461636b2d657870726573732d6a732d6e6f64652d6a732d6a6176617363726970742d6769746875622d746578742d74726164656d61726b2e706e67'></img>
                            <span>Express</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Node.js' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'></img><span>Node.js</span></div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Sequelize' src='https://camo.githubusercontent.com/a6011c893827c0b9af00b814436e36655cdc01e36c7ba48300f8f5cb0e713413/68747470733a2f2f63646e2e66726565626965737570706c792e636f6d2f6c6f676f732f6c617267652f32782f73657175656c697a652d6c6f676f2d706e672d7472616e73706172656e742e706e67'></img>
                            <span>Sequelize</span>
                        </div>
                    </div>
                </ul>
                <ul className={style.seccion}>
                    <h4>
                        Ambientes de trabajo
                    </h4>
                    <div className={style.iconsContainer}>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Git-Git flow' src='https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667'></img>
                            <span>Git-Git flow</span></div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Postman' src='https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667'></img>
                            <span>Postman</span>
                        </div>
                        <div className={style.iconAndName}>
                            <img className={style.img} alt='Vercel' src='https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67'></img>
                            <span>Vercel</span>
                        </div>

                    </div>
                </ul>
                <ul className={style.seccion}>
                    <h4>
                        Base de datos
                    </h4>
                    <div className={style.iconsContainer}>
                        <div className={style.iconAndName}><img className={style.img} alt='PostgreSql' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'></img><span>PostgresSql</span></div>
                    </div>
                </ul>
            </li>
        </div>
    )
}

export default Technologies
