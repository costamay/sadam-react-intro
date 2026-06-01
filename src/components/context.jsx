import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const BASE_URL = "http://localhost:3000/post";

export const UserProvider = ({ children }) => {
  // States
  const [blogPosts, setBlogPosts] = useState();
  const [isloading, setIsloading] = useState(true);
  const [color, setColor] = useState("red");
  

  // Fetch blog posts on mount
  useEffect(() => {
    setTimeout(() => {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
          setBlogPosts(data);
          setIsloading(false);
        })
        .catch((e) => console.log(e));
    }, 1000);
  }, []);

  // Function to add post
  function addPost(post) {
    console.log(String(blogPosts.length + 1));

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts([post, ...blogPosts]);
      })
      .catch((e) => console.log(e));
  }

  const value = {
    blogPosts,
    setBlogPosts,
    isloading,
    setIsloading,
    color,
    setColor,
    addPost,
  };

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};