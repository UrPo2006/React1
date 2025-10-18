import React from 'react'

export default function About() {
  return (
    <>
   <div className=" min-h-screen flex flex-col justify-center items-center text-white text-center bg-[#1abc9c]">
      <h2 className=" text-5xl font-bold mb-4 tracking-wide">
    ABOUT COMPONENT
  </h2>

 
  <div className="flex items-center justify-center mb-4">
    <div className="h-1 w-16 bg-white mr-3"></div>
    <i className="fa-solid fa-star text-white text-xl"></i>
    <div className="h-1 w-16 bg-white ml-3"></div>
  </div>
   
    
    <div className="flex justify-between items-center text-white p-10">
  
  <div className="w-1/2 p-5 rounded-xl text-center">
  
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

    </p>
  </div>

  
  <div className="w-1/2 p-5 rounded-xl text-center">
 
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        
    </p>
  </div>
</div>
</div>
    </>
  )
}

