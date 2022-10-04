import React from 'react'
import style from './CV.module.css'
const CV = ({showCV,setShowCV}) => {
  return (
    <div >
        <div className={style.container} onClick={()=>{setShowCV(false)}}></div>
        {$(document).width()>500?<embed className={style.embed}src={showCV?'../src/assets/CV/CV-EN.pdf':''} type='application/pdf'/>:<div>HOLAA</div>}
    </div>
  )
}

export default CV;
