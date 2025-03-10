import React, { useEffect, useRef } from 'react'
import Carousal from './carousal'
import Heading from "../Heading/index"

const index = ({ heading, description, logo, role, technology, images,links, architecture }) => {

  return (
    <div className='mt-3'>
      <div className='flex justify-center items-center'>
        <div className="w-14 h-14">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain  rounded-md" // Ensures the image fills the container without distortion
          />
        </div>
        <Heading text={heading} level="1" />
      </div>

      {/* description */}
      <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="Description:" level="2" />
        <p className='ml-4'>{description}</p>
      </div>
      {/* role */}
      <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="My Role:" level="2" />
        <p className='ml-4'>{role}</p>
      </div>
      {/* links */}
      {links?.length> 0 && (
        <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="Links:" level="2" />
        {links.map((val) => {
          return <a key={index} href={val} className="ml-4 text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          {val}
        </a>
        })}
      </div>
      )}
      {/* technology */}
      <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="Technology:" level="2" />
        <div className='flex gap-x-2 justify-center items-center'>
          {technology.map((val, ind) => {
            return <div key={ind} className='flex justify-center items-center p-3 border-r border-gray2'>
              <div className="w-10 h-10">
                <img
                  src={val.image}
                  alt="logo"
                  className="w-full h-full object-contain  rounded-md" // Ensures the image fills the container without distortion
                />
              </div>

              <p className='ml-1'>{val.name}</p>
            </div>
          })}
        </div>
      </div>

      {/* architecture */}
      <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="Diagrams:" level="2" />
        {/* <div className='grid grid-cols-1 gap-4'>
          {architecture?.map((val, ind) => {
            return <div className='flex flex-col justify-center items-center p-3 border-r border-gray2'>
              <div className="w-1/2 h-full border border-gray2">  
                <img
                  src={val.url}
                  alt={val.name}
                  className="w-full h-full object-cover rounded-md"  // Ensures the image fills the container without distortion
                />
              </div>
              <p className='ml-1 text-center'>{val.name}</p>
            </div>
          })}
        </div> */}

        <div className="flex justify-center items-center shadow-lg p-2 pb-4">
          {/* <div className="w-1/2 h-auto">
            <Carousal imageData={architecture} />
          </div> */}
        </div>
      </div>
      <div className='flex flex-col gap-x-1 justify-center my-3'>
        <Heading text="User Interface:" level="2" />
        <div className="flex justify-center items-center shadow-lg p-2 pb-4">
          <div className="w-1/2 h-auto">
            <Carousal imageData={images} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index