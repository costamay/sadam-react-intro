import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Titus")

    function handleName(){
        setName("Sadam")
    }

    function handleNameChange(e){
        setName(e.target.value)

    }
    
    console.log(name)

    function handleIncrement (){
        setCount(count + 1)
    }

    function handleDecrement(){
        setCount(count - 1)
    }

  return (
    <div className='text-center'>

        <h1>Count : {count}</h1>
        <h1>Name : {name}</h1>
        <input type="text" name="" value = {name} id="" placeholder='Enter Name....' onChange={handleNameChange}/>
        <button onClick={handleName} className='text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none'>Change Name</button>
        
        <div className='flex gap-4 justify-center'>
        <button onClick={handleIncrement} className='text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none'>Increment</button>
        <button onClick={handleDecrement} className='text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none'>Decrement</button>
        </div>
        
    </div>
  )
}

export default Counter