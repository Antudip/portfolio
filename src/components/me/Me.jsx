import React from 'react'

import style from './Me.module.css'

const Me = ({setShowCV}) => {
  return (
    <div className={style.allContainer}>
        <img src='src\assets\me_photo.jpg' className={style.mePhoto}></img>
        <div className={style.aboutMeContainer}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a dolore omnis repellat amet magni culpa minus, adipisci mollitia ad cum repudiandae neque voluptatem minima in, vel impedit, ipsa consectetur?
            </p>
            <button onClick={()=>setShowCV(true)}>CV</button>
            <button onclick="location.href='src\assets\CV\CV-EN.pdf';"></button>
        </div>
    </div>
  )
}
export default Me;