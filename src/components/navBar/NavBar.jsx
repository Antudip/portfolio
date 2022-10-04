import React from "react";
import SectionButton from "../sectionButton/SectionButton";
import style from './NavBar.module.css'

const NavBar = () => {
  return (<div className={style.NavBar}>
    <div className={style.sections}>
    <SectionButton value="me"></SectionButton>
    <SectionButton value="projects"></SectionButton>
    <SectionButton value="technologies"></SectionButton>
    <SectionButton value="contact-me"></SectionButton>
    </div>
  </div>
  )
}


export default NavBar;
