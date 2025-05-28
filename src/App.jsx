
import './App.css'
import FirstPage from './components/FirstPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills'
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useContext } from 'react';
import { dataContext } from './context/context';

function App() {

  const { darkMode } = useContext(dataContext)

  return (
    <>
      <div className={darkMode ? 'darkModeCover' : ''}>
        <FirstPage />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
