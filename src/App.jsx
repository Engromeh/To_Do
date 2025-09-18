import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar_Home from './Components/Navbar_Home/Navbar_Home'

function App() {

  return (
    <>
      
       {/* <div className="p-10">
      <h1 className="text-4xl font-bold text-red-500 underline">
        Tailwind اشتغل 🎉
      </h1>
      <p className="mt-4 text-blue-600 hover:text-green-500">
        جرّب توقف بالماوس هنا
      </p>
    </div> */}
    <Navbar_Home/>
    <Hero />
    <Footer />
    </>
  )
}

export default App
