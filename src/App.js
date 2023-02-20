import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ClipLoader from "react-spinners/HashLoader";
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Certifciates from './components/Certificates'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
    useEffect(()=> {
      AOS.init({duration:1500})
    },[])
  const[language,setLanguage] = useState(false)
  const[loading,setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  function toggleLanguage() {
    setLanguage(prevLanguage => !prevLanguage)
  }
  if(loading){
   return(
    <div className="loaderLogo">
        <ClipLoader
        size={80}
        color={"#b902d7"}
        loading={loading}
        />
      </div>
     )
  }
  return (
    <div className="App">
       <a href="#Home"><FontAwesomeIcon icon={faArrowUp} className="returnarrow"/></a>
      <header className="App-header">
        <Header 
          language = {language}
          handleClick = {toggleLanguage}
        />
      </header>
      <main>
        <Home 
          language = {language}
        />
        <Skills 
          language = {language}
        />
        <Projects 
          language = {language}
        />
        <Certifciates 
          language = {language}
        />
         <Contact 
          language = {language}
        />
      </main>
      <footer>
          <Footer
          language = {language}
        />
      </footer>
    </div>
  );
}

export default App;
