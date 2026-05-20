import React, { useEffect, useState } from 'react'
import User from './User'

let BASE_URL = "https://jsonplaceholder.typicode.com/users"
const Users = () => {
    // creating state
    const [users, setUsers] = useState([])

    // fetching data using useEffect hook

    // useEffect(() => {
    //     async function fetchData( ){
    //         try {

    //             let response = await fetch(BASE_URL)
                
    //             if(!response.ok){
    //                 console.log("Something went wrong")
    //             }

    //             let data = await response.json()

    //             // console.log(data)
    //             setUsers(data)


                
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    useEffect(()=>{
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch((e) => console.log(e))
    },[])

    console.log("List of users: ", users)

   
  return (
    <div >
        <ul>
            {
                users.map(function(user){
                    return (
                        <User key={user.id} user={user}/>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Users