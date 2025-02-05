import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './Login.jsx'
import Home from './Home.jsx'
import Feed from './Feed.jsx'
import Profile from './Profile.jsx'
import SignUpPage from './Signup.jsx'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "", // Default child route ("/home" will load Feed by default)
              element: <Feed />
            },
            {
              path: "profile", // Corrected child path ("/home/profile")
              element: <Profile />
            }
          ]
        },
        {
            path: "/login",
            element: <Login />,           
        },
        {
          path: "/signup",
          element: <SignUpPage />
        }
      ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body