import React from 'react'
import style from './ProjectCard.module.css'
const ProjectCard = ({name, img, description}) => {
  return (
    <div className={style.card}>
      <div className={style.nameAnDesc}>
        <h3>{name}</h3>
        <span>{description}</span>
      </div>
        <img className={style.img} src={img}></img>
    </div>
  )
}

export default ProjectCard;