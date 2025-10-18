import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="bg-gray-800 shadow text-white py-20 w-full  bottom-0 left-0">
  <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-10 md:space-y-0">
    
   
    <div className='text-center'>
      <h1 className="text-xl font-bold mb-3 p-3">LOCATION</h1>
      <p className='p-3'>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>

    
    <div className='text-center'>
      <h1 className="text-xl font-bold mb-3 p-3">AROUND THE WEB</h1>
    <div className="flex justify-center md:justify-start space-x-4 mx-auto  ">
   <a
    href="#"
    className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
  >
    <i className="fab fa-facebook-f text-sm"></i>
  </a>

  <a
    href="#"
    className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-sky-400 transition duration-300"
  >
    <i className="fab fa-twitter text-sm"></i>
  </a>

  <a
    href="#"
    className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-blue-700 transition duration-300"
  >
    <i className="fab fa-linkedin-in text-sm"></i>
  </a>

  <a
    href="#"
    className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-green-500 transition duration-300"
  >
    <i className="fas fa-globe text-sm"></i>
  </a>
</div> 



    </div>

    <div className='text-center'>
      <h1 className="text-xl font-bold mb-3 p-3">ABOUT FREELANCER</h1>
      <p>Freelance is a free to use, licensed Bootstrap theme created <br></br>by Route</p>
    
    </div>
  </div>

</div>
<div className="bg-gray-900  shadow text-white p-5 text-center w-full  bottom-0 left-0">
    <p>Copyright © Your Website 2021</p>
</div>


    </>
      
  )
}
