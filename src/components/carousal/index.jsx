import React from 'react';
import Carousal from './carousal';
import Heading from "../Heading/index";

const Index = ({ heading, description, logo, role, technology, images, links, architecture }) => {
  return (
    <div className='mt-3 px-4'>
      <div className='flex flex-col sm:flex-row items-center justify-center text-center sm:text-left'>
        <div className="w-14 h-14 mb-2 sm:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        <Heading text={heading} level="1" className="sm:ml-4" />
      </div>

      {/* Description */}
      <div className='my-3'>
        <Heading text="Description:" level="2" />
        <p className='ml-4'>{description}</p>
      </div>

      {/* Role */}
      <div className='my-3'>
        <Heading text="My Role:" level="2" />
        <p className='ml-4'>{role}</p>
      </div>

      {/* Links */}
      {links?.length > 0 && (
        <div className='my-3'>
          <Heading text="Links:" level="2" />
          <div className='ml-4 flex flex-wrap gap-2'>
            {links.map((val, ind) => (
              <a key={ind} href={val} className="text-blue-500 underline break-all" target="_blank" rel="noopener noreferrer">
                {val}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Technology */}
      <div className='my-3'>
        <Heading text="Technology:" level="2" />
        <div className='flex flex-wrap justify-center sm:justify-start gap-4 mt-2'>
          {technology.map((val, ind) => (
            <div key={ind} className='flex items-center p-3 border border-gray-300 rounded-md shadow-sm'>
              <div className="w-10 h-10">
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <p className='ml-2'>{val.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Diagrams */}
      {architecture?.length > 0 && (
        <div className='my-3'>
          <Heading text="Diagrams:" level="2" />
          <div className="flex justify-center items-center shadow-lg p-2 pb-4">
            <Carousal imageData={architecture} />
          </div>
        </div>
      )}

      {/* User Interface */}
      <div className='my-3'>
        <Heading text="User Interface:" level="2" />
        <div className="flex justify-center items-center shadow-lg p-2 pb-4">
          <div className="w-full sm:w-1/2">
            <Carousal imageData={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;