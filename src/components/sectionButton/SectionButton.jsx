import React from 'react'

import style from './SectionButton.module.css';

const SectionButton = (props) => {
  return (
    <button className={style.button} >{props.value}</button>
  )
}

export default SectionButton;