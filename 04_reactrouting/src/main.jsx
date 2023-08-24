import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nopage from './pages/Nopage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Layout />} >
      <Route index element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
      <Route path='*' element = {<Nopage />}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
)
