import About from "./components/About"
import LandingPage from "./components/LandingPage"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
      <div className='text-white min-h-screen no-scrollbar bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      </div>
    </>
  )
}

export default App
