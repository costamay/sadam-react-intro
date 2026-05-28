import React from 'react'

const Home = () => {

    // Events are action or occurrence that happen in the system you are building. They can be user interactions, 
    // system events, or external events. Events are typically used to trigger certain actions or behaviors in your application. For example, 
    // a button click can be an event that triggers a function to execute.
    // Event Types
    // onClick
    // onSubmit => form
    // onchange => listens to the form input changes
    // Events are only attached to DOM nodes else.g button, form, h1

    function handleClick(){
        alert("Button is clicked")

    }

  return (
    <button  type="button" onClick={() => handleClick()}>Click Me</button>
  )
}

export default Home