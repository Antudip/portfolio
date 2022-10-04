import React from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp,BsFillEnvelopeFill } from "react-icons/bs";
import style from './ContactMe.module.css'
const ContactMe = () => {
  return  (
    <div className={style.ContactMe}>
       <a href='https://www.linkedin.com/in/antu-dippolito-a5892823b/'><div>
            <BsLinkedin className={style.icon +' ' + style.link} size='2rem'></BsLinkedin>
        </div></a>
        <a href='https://github.com/Antudip'><div>
            <BsGithub  className={style.icon +' ' + style.git} size='2rem'></BsGithub>
        </div></a>
        <a href='https://walink.co/c29bf1'><div>
            <BsWhatsapp className={style.icon +' ' + style.wpp} size='2rem'></BsWhatsapp>
        </div></a>
        <a href="mailto:antudippolito123@gmail.com"><div>
            <BsFillEnvelopeFill className={style.icon +' ' + style.mail} size='2rem'></BsFillEnvelopeFill>
        </div></a>
    </div>
  )
}

export default ContactMe;