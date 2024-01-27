import { About, Work, Contact, Navbar,Body, Experience,Tech } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import image from './components/header-gradient.png';
import Resume from './assets/Resume.pdf'

{/* <div className="bg-cover bg-no-repeat bg-center"> */} // Used below image tag
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 selection:bg-pink-300">
        <img src={image} className="blur-3xl fixed top-0 w-4/5 left-20"></img>
        <Navbar />
        <Routes>
          <Route  path='/' element={[ <Body key={1}/>, <Experience key={2}/>, <Contact key={3}/> ]}/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/work' element={ <Work/> }/>
          <Route path="/tech" element={ <Tech/> } />
        </Routes>
      </div>
    </BrowserRouter>
  ); 
};

export default App;