import React from 'react'
import { Link } from 'react-router-dom'

let BASE_URL = "http://localhost:3000/post"

function Blog({post}) {

  function handleClick(){
    alert(`This is ${post.title} that wil help us in ${post.description}`)
  }

  // function to delete post
  function handleDelete(post){
    fetch(`${BASE_URL}/${post.id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => alert(`Post with id of ${post.id} has been deleted successfully`))
    .catch(error => console.log(error))
  }

  return (
    

<div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <a href="#">
        <img className="rounded-base" src={post.imageUrl} alt={post.title} />
    </a>
    <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{post.title}</h5>
    </a>
    <p className="mb-6 text-body">{post.description}</p>
    <button type="button" className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Read Description</button>
    <Link to={`/post/${post.id}`} className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
        {/* <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg> */}
         
    </Link> 
    <button type="button" className="text-body bg-red-500 border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"  onClick={() => handleDelete(post)}>Delete</button>
</div>

  )
}

export default Blog