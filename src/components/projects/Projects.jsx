import React from 'react'
import ProjectCard from '../projectCard/ProjectCard';
const Projects = () => {
    return (
        <>
            <ProjectCard img ='https://i.ibb.co/D4wP5m0/Profile.png' name="WikiDog" description="una app para encontrar perros"></ProjectCard>
            <ProjectCard name="Starcards" description="una app para encontrar cartas"></ProjectCard>
            <ProjectCard name="Calculadora" description="una app para encontrar calculos"></ProjectCard>
        </>
    )
}

export default Projects;
