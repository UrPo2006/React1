import React from 'react'
import myImage from '../../assets/avataaars.svg';
export default function Home() {
  return (
    <>
   <div className=" min-h-screen flex flex-col justify-center items-center text-white text-center bg-[#1abc9c]">
  
  <img
  src={myImage}
    alt="Profile"
    className="w-70 h-70 rounded-full mb-6"
  />


  <h2 className=" text-5xl font-bold mb-4 tracking-wide">
    START FRAMEWORK
  </h2>

 
  <div className="flex items-center justify-center mb-4">
    <div className="h-1 w-16 bg-white mr-3"></div>
    <i className="fa-solid fa-star text-white text-xl"></i>
    <div className="h-1 w-16 bg-white ml-3"></div>
  </div>

  {/* النص السفلي */}
  <p className="text-lg">
    Graphic Artist &nbsp;•&nbsp; Web Designer &nbsp;•&nbsp; Illustrator
  </p>
</div>


    </>
  )
}
