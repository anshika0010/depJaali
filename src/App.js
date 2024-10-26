
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicePage1 from './Pages/ServicePage1';
import ContactPage from './Pages/contactPage';
import AboutPage from './Pages/AboutPage';
import ServicePage2 from './Pages/ServicePage2';
import ServicePage3 from './Pages/ServicePage3';
import ServicePage4 from './Pages/ServicePage4';



function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path= '/' element= {<Home/>}/>
    <Route path='/Service1'element={<ServicePage1/>}/>
    <Route path='/Service2'element={<ServicePage2/>}/>
    <Route path='/Service3'element={<ServicePage3/>}/>
    <Route path='/Service4'element={<ServicePage4/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>


   </Routes>
   </BrowserRouter>
  )
}

export default App
