import React, {useContext} from 'react'
import { userContext } from './context'
import Blog from './Blog'

function BlogList() {
  const { blogPosts } = useContext(userContext)

  if(!blogPosts){
    return <h1 className='text-center text-2xl font-bold text-heading'>No blog posts available</h1>
  }
    
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
