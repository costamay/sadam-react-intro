import React from 'react'
import Blog from './Blog'

function BlogList({blogPosts}) {
  
    
  let posts = blogPosts.map(function(post){
    return <Blog key={post.id} post = {post}/>
  })

  return (
    <>
    <div className="grid gap-2  md:grid-cols-2 lg:grid-cols-3">
        {posts}
    </div>
    </>
    

  )
}

export default BlogList
