import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Me from './components/me/Me'
import Projects from './components/projects/Projects'
import ContactMe from './components/contactMe/ContactMe'
import getScroll from './functions/scroll'
import Title from './components/title/Title'
import Technologies from './components/tecnologies/Tecnologies'
import CV from './components/CV/CV'

function App() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='meAndTitle'>
        <Title></Title>
        <Me setShowCV={setShowCV}></Me>
      </div>
      <Technologies></Technologies>
      <Projects></Projects>
      {showCV && <CV setShowCV={setShowCV} showCV={showCV}></CV>}
      <ContactMe></ContactMe>
    </div>
  )
}

export default App
