import React, { useState } from "react";
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
export default function Portfolio() {
  
    const [selected, setSelected] = useState(null);
  
  return (


    <>
  
       <div className=" min-h-screen flex flex-col justify-center items-center text-white text-center bg-[#ffffff]">
      <h2 className="text-gray-800 text-5xl font-bold mb-4 tracking-wide m-4">
    PORTFOLIO COMONENT
  </h2>

 
  <div className="flex items-center justify-center mb-4">
    <div className="h-1 w-20 bg-gray-800 mr-3"></div>
    <i className="fa-solid fa-star text-gray-800 text-xl"></i>
    <div className="h-1 w-20 bg-gray-800 ml-3"></div>
  </div>


      <div className="flex flex-wrap justify-center items-center gap-6 py-10">
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className="relative group w-1/3 md:w-1/4 text-center"
          >
            <img
              src={img}
              alt={`image${index + 1}`}
              className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1abc9c] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-80 transition-opacity duration-400">
              <i
                className="fas fa-magnifying-glass-plus text-white text-4xl cursor-pointer"
                onClick={() => setSelected(img)}
              ></i>
            </div>
          </div>
        ))}
      </div>

     
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="zoomed"
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>
        </div>
)}
{/* ============================================================== */}
 <div className="flex flex-wrap justify-center items-center gap-6 py-10">
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className="relative group w-1/3 md:w-1/4 text-center"
          >
            <img
              src={img}
              alt={`image${index + 1}`}
              className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1abc9c] rounded-2xl flex justify-center items-center opacity-0 group-hover:opacity-80 transition-opacity duration-400">
              <i
                className="fas fa-magnifying-glass-plus text-white text-4xl cursor-pointer"
                onClick={() => setSelected(img)}
              ></i>
            </div>
          </div>
        ))}
      </div>

     
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="zoomed"
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>
        </div>
)}

  </div>
   

    </>
  )
}
