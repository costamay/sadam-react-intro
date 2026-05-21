import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import AddBlogForm from './components/AddBlogForm'
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

let BASE_URL = "http://localhost:3000/post"
function App() {
// state
const [blogPosts, setBlogPosts]= useState()
const [isloading, setIsloading] = useState(true)
let [color, setColor] = useState("red");

useEffect(() => {
  setTimeout(()=>{
    fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    setBlogPosts(data)
    setIsloading(false)
  })
  .catch((e) => console.log(e))
  }, 1000)
}, [])

// console.log(blogPosts)

// function to add post
function addPost(post){
  // adding new post using fetch
  console.log(String(blogPosts.length + 1))

  fetch(BASE_URL,{
    method : "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(post)
  })
  .then((res) => res.json())
  .then(data => {setBlogPosts([{...post, id: String(blogPosts.length + 1)}, ...blogPosts])})
  .catch(e => console.log(e)) 
}


if(isloading){
  return(
    <ClipLoader
            color={color}
            isloading={isloading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
  )
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

