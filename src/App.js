
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicePage1 from './Pages/ServicePage1';
import ContactPage from './Pages/contactPage';
import AboutPage from './Pages/AboutPage';
import ServicePage2 from './Pages/ServicePage2';
import ServicePage3 from './Pages/ServicePage3';
import ServicePage4 from './Pages/ServicePage4';
import PageUp from './Componants/PageUp';
import Blog from './Pages/Blog';
import BlogList from './Pages/BlogList';



function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path= '/' element= {<Home/>}/>
    <Route path='/netting-services'element={<ServicePage1/>}/>
    <Route path='/grill-services'element={<ServicePage2/>}/>
    <Route path='/spike-services'element={<ServicePage3/>}/>
    <Route path='/sportnet-services'element={<ServicePage4/>}/>
    <Route path='/contact-us' element={<ContactPage/>}/>
    <Route path='/about-us' element={<AboutPage/>}/>
    <Route path='/blogs' element={<Blog/>}/>
    <Route path='/blogdetail' element={<BlogList/>}/>
   
   </Routes>
   <PageUp/>
   </BrowserRouter>
  )
}

export default App
