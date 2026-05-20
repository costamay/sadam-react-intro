import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import AddBlogForm from './components/AddBlogForm'

function App() {
// state
const [blogPosts, setBlogPosts]= useState(data)

// function to add post
function addPost(post){
  setBlogPosts([post, ...blogPosts])
}



  return (
    <>
    <Navbar/>
    <AddBlogForm addPost = {addPost} blogPosts = {blogPosts}/>
    <BlogList blogPosts = {blogPosts}/>
    <Footer/>
    </>
  )
}

export default App

