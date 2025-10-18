// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import About from './Componanet/About/About'
import Portfolio from './Componanet/Portfolio/Portfolio'
import Contact from './Componanet/Contact/Contact'
import Home from './Componanet/Home/Home'
import Layout from './Componanet/Layout/Layout'

let router = createBrowserRouter([
  {path:'',element:<Layout/>, children:[
        {path:'home',element:<Home/>},
        {path:'about',element:<About/>},
        {path:'portfolio',element:<Portfolio/>},
        {path:'contact',element:<Contact/>},
  ]}
], {
   basename: '/React1',    // repo
})

function App() {
 

  return (
    <>
    
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
