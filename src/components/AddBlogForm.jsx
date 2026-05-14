import React, {useState} from 'react'

const AddBlogForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  function handleTitleChange(e){
    setTitle(e.target.value)
  }

  function handleDescriptonChange(e){
    setDescription(e.target.value)
  }

  function handleImageChange(e){
    setImageUrl(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  
  return (
    <>
    <div>AddBlogForm</div>

<form 
className="max-w-sm mx-auto"
onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="title" className="block mb-2.5 text-sm font-medium text-heading">Title</label>
    <input
     type="text"
      id="title" 
      className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
       placeholder="Enter post title" 
       required
       value={title}
       onChange={handleTitleChange}/>
  </div>
  <div className="mb-5">
    <label htmlFor="description" className="block mb-2.5 text-sm font-medium text-heading">Description</label>
    <input 
    type="text" 
    id="description" 
    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
    placeholder="Enter description" 
    required 
    value={description}
    onChange={handleDescriptonChange}/>
  </div>
  <div className="mb-5">
    <label htmlFor="imageUrl" className="block mb-2.5 text-sm font-medium text-heading">Image URL</label>
    <input 
    type="text" 
    id="imageUrl" 
    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-sm focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
    placeholder="Enter image url" 
    required 
    value={imageUrl}
    onChange={handleImageChange}/>
  </div>
  
  <button 
  type="submit" 
  className="text-white bg-indigo-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-sm text-sm px-4 py-2.5 focus:outline-none">
    Submit
    </button>
</form>

    </>
    
  )
}

export default AddBlogForm