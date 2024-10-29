import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageUp from "./Componants/PageUp";
import React from "react";
// const wait = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };
const AboutPage = React.lazy(() => import("./Pages/AboutPage"));
const EventPage = React.lazy(() => import("./Pages/EventPage"));
const BlogList = React.lazy(() => import("./Pages/BlogList"));
const ServicePage1 = React.lazy(() => import("./Pages/ServicePage1"));
const ServicePage2 = React.lazy(() => import("./Pages/ServicePage2"));
const ServicePage3 = React.lazy(() => import("./Pages/ServicePage3"));
const ServicePage4 = React.lazy(() => import("./Pages/ServicePage4"));
const ContactPage = React.lazy(() => import("./Pages/contactPage"));
const Blog = React.lazy(() => import("./Pages/Blog"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netting-services" element={<ServicePage1 />} />
        <Route path="/grill-services" element={<ServicePage2 />} />
        <Route path="/spike-services" element={<ServicePage3 />} />
        <Route path="/sportnet-services" element={<ServicePage4 />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogList />} />
        <Route path="/eventdetails" element={<EventPage />} />
      </Routes>
      <PageUp />
    </BrowserRouter>
  );
}

export default App;
