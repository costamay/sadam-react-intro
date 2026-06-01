import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import Loader from './components/Loader.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import SinglePost from './components/SinglePost.jsx'
import { UserProvider } from './components/context.jsx'



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* Defining Routes */}
    {/* <App /> */}
    <UserProvider>
    <Routes>
      <Route path="/"  element ={<App />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post/:id" element={<SinglePost />} />
    </Routes>
    </UserProvider>
    </BrowserRouter>
    
   
)
